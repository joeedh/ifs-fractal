import config from '../config/config.js'

import {
  Vector2,
  Vector3,
  Vector4,
  util,
  math,
  nstructjs,
  Matrix4,
  Quat,
  ToolOp,
  FloatProperty,
  BoolProperty,
  IntProperty,
  EnumProperty,
  FlagProperty,
  Vec3Property,
  ToolMacro,
  PropertySlots,
} from '../path.ux/pathux.js'
import {Context} from './context.js'
import {Edge, Mesh, MeshFlags, MeshTypes} from './mesh.js'
import {duplicate, vertexSmooth} from './mesh_utils.js'
import {TranslateOp} from './transform_ops.js'

export let SelToolModes = {
  ADD : 0,
  SUB : 1,
  AUTO: 2,
}

function saveUndoMesh(mesh: Mesh) {
  let data = [] as number[]
  nstructjs.writeObject(data, mesh)

  return new DataView(new Uint8Array(data).buffer)
}

function loadUndoMesh(mesh: Mesh, data: DataView) {
  let mesh2 = nstructjs.readObject(data, Mesh)

  const a = mesh as unknown as any
  const b = mesh2 as unknown as any
  for (let k in mesh2) {
    a[k] = b[k]
  }

  window.redraw_all()
}

export class MeshOp<Inputs extends PropertySlots = {}, Outputs extends PropertySlots = {}> extends ToolOp<
  Inputs,
  Outputs,
  Context
> {
  private _meshUndoBuf: DataView

  undoPre(ctx: Context) {
    this._meshUndoBuf = saveUndoMesh(ctx.mesh)
  }

  undo(ctx: Context) {
    loadUndoMesh(ctx.mesh, this._meshUndoBuf)
  }

  execPost(ctx: Context) {
    window.redraw_all()
  }
}

export class SplitEdgeOp extends MeshOp<{steps: IntProperty}> {
  static tooldef() {
    return {
      uiname  : 'Split Edge',
      toolpath: 'mesh.split_edge',
      inputs: ToolOp.inherit({
        steps: new IntProperty(1).setRange(1, 100).noUnits().saveLastValue(),
      }),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh
    const {steps} = this.getInputs()

    for (let e of new Set(mesh.edges.selected.editable)) {
      mesh.splitEdgeMulti(e, steps)
    }
  }
}
ToolOp.register(SplitEdgeOp)

export class DissolveVertOp extends MeshOp {
  static tooldef() {
    return {
      uiname  : 'Dissolve Vertex',
      toolpath: 'mesh.dissolve_vertex',
      inputs  : ToolOp.inherit({}),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh

    for (let v of new Set(mesh.verts.selected.editable)) {
      mesh.dissolveVertex(v)
    }
  }
}
ToolOp.register(DissolveVertOp)

export class DeleteOp extends MeshOp<{selMask: FlagProperty}> {
  static tooldef() {
    return {
      uiname  : 'Delete',
      toolpath: 'mesh.delete',
      inputs: ToolOp.inherit({
        selMask: new FlagProperty(config.SELECTMASK, MeshTypes),
      }),
    }
  }

  static invoke(ctx: Context, args: any) {
    let tool = super.invoke(ctx, args)

    if (!('selMask' in args)) {
      tool.inputs.selMask.setValue(ctx.selMask)
    }

    return tool
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh
    let {selMask} = this.getInputs()

    console.log('Delete!', selMask)

    if (selMask & MeshTypes.FACE) {
      for (let v of new Set(mesh.faces.selected.editable)) {
        mesh.killFace(v)
      }
    }

    if (selMask & MeshTypes.EDGE) {
      for (let v of new Set(mesh.edges.selected.editable)) {
        mesh.killEdge(v)
      }
    }

    if (selMask & MeshTypes.VERTEX) {
      for (let v of new Set(mesh.verts.selected.editable)) {
        mesh.killVertex(v)
      }
    }
  }
}

ToolOp.register(DeleteOp)

export class ExtrudeVertOp extends MeshOp<{co: Vec3Property}> {
  static tooldef() {
    return {
      uiname  : 'Extrude Vertex',
      toolpath: 'mesh.extrude_vertex',
      inputs: ToolOp.inherit({
        co: new Vec3Property(),
      }),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh

    let {co} = this.getInputs()
    let actv = mesh.verts.active

    let v = mesh.makeVertex(co)
    let ne

    if (actv && actv.flag & MeshFlags.SELECT) {
      ne = mesh.makeEdge(v, actv)
    }

    mesh.selectNone()

    mesh.verts.setSelect(v, true)
    mesh.verts.active = v

    if (ne) {
      mesh.edges.setSelect(ne, true)
      mesh.edges.active = ne
    }

    window.redraw_all()
  }
}

ToolOp.register(ExtrudeVertOp)

export class MakeFaceOp extends MeshOp<{co: Vec3Property}> {
  static tooldef() {
    return {
      uiname  : 'Make Face',
      toolpath: 'mesh.make_face',
      inputs: ToolOp.inherit({
        co: new Vec3Property(),
      }),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh

    let vs1 = Array.from(mesh.verts.selected.editable)
    vs1 = vs1.sort((a, b) => a.edges.length - b.edges.length)
    let vs = new Set(vs1)

    let segs = []
    let visit = new WeakSet()

    for (let v of vs) {
      if (visit.has(v)) {
        continue
      }

      let v2 = v
      let seg = [v]

      segs.push(seg)

      let _i = 0
      while (1) {
        let newe

        for (let e of v2.edges) {
          let v3 = e.otherVertex(v2)

          if (vs.has(v3) && !visit.has(e)) {
            newe = e
            break
          }
        }

        if (!newe) {
          break
        }

        visit.add(newe)

        v2 = newe.otherVertex(v2)
        visit.add(v2)
        seg.push(v2)

        if (_i++ > 10000) {
          console.error('Infinite loop error!')
          break
        }
      }
    }

    for (let seg of segs) {
      let f = mesh.makeFace(seg)

      let rev = false

      for (let l of f.loops) {
        if (l.radial_next !== l && l.radial_next.v === l.v) {
          rev = true
          break
        }
      }

      if (rev) {
        mesh.reverseWinding(f)
      }

      for (let l of f.loops) {
        if (l.radial_next === l) {
          continue
        }

        let l2 = l.radial_next
        if (l2.v === l.v) {
          l2 = l2.next
        }

        mesh.copyElemData(l, l2)
      }
    }
  }
}

ToolOp.register(MakeFaceOp)

export class FixWindingsOp extends MeshOp {
  static tooldef() {
    return {
      uiname  : 'Fix Windings',
      toolpath: 'mesh.fix_windings',
      inputs  : ToolOp.inherit({}),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh

    for (let f of mesh.faces.selected.editable) {
      let l = f.lists[0].l

      const v1 = new Vector3(l.v.co)
      const v2 = new Vector3(l.next.v.co)
      const v3 = new Vector3(l.next.next.v.co)

      if (v1.length === 2) {
        v1[2] = v2[2] = v3[2] = 0.0
      }

      if (math.normal_tri(v1, v2, v3)[2] < 0.0) {
        mesh.reverseWinding(f)
        console.log(f.eid, f)
      }
    }
  }
}

ToolOp.register(FixWindingsOp)

export class FixMeshOp extends MeshOp {
  static tooldef() {
    return {
      uiname  : 'Fix Mesh',
      toolpath: 'mesh.repair',
      inputs  : ToolOp.inherit({}),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh

    mesh.validate()
  }
}

ToolOp.register(FixMeshOp)

export class VertexSmoothOp extends MeshOp<{repeat: IntProperty; factor: FloatProperty}> {
  static tooldef() {
    return {
      uiname  : 'Vertex Smooth',
      toolpath: 'mesh.vertex_smooth',
      inputs: ToolOp.inherit({
        repeat: new IntProperty(1).setRange(1, 100).noUnits().saveLastValue(),
        factor: new FloatProperty(0.5).setRange(0.0, 1.0).noUnits().saveLastValue(),
      }),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh
    const {repeat, factor} = this.getInputs()

    for (let i = 0; i < repeat; i++) {
      vertexSmooth(mesh, mesh.verts.selected.editable, factor)
    }
  }
}

ToolOp.register(VertexSmoothOp)

export class ReverseEdgeOp extends MeshOp {
  static tooldef() {
    return {
      uiname  : 'Reverse Edge Order',
      toolpath: 'mesh.reverse_edge',
      inputs  : ToolOp.inherit({}),
    }
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh

    for (let e of mesh.edges.selected.editable) {
      mesh.reverseEdge(e)
    }
  }
}

ToolOp.register(ReverseEdgeOp)

export class DuplicateOp extends MeshOp<{doTransform: BoolProperty}> {
  static tooldef() {
    return {
      uiname  : 'Duplicate',
      toolpath: 'mesh.duplicate',
      inputs: ToolOp.inherit({
        doTransform: new BoolProperty(true),
      }),
    }
  }

  static invoke(ctx: Context, args: any) {
    let tool = super.invoke(ctx, args)

    if (tool.inputs.doTransform.getValue()) {
      let macro = new ToolMacro()
      macro.add(tool)
      macro.add(new TranslateOp())
      return macro
    }

    return tool
  }

  exec(ctx: Context) {
    let mesh = ctx.mesh

    let geom = new Set(
      [
        Array.from(mesh.verts.selected.editable),
        Array.from(mesh.edges.selected.editable),
        Array.from(mesh.faces.selected.editable),
      ].flat()
    )

    let {oldNewMap} = duplicate(mesh, geom)

    for (let elist of mesh.getElists()) {
      if (!elist.active) {
        continue
      }

      let newact = oldNewMap.get(elist.active)
      if (newact) {
        elist.active = newact
      }
    }

    for (let elem of geom) {
      if (elem.type === MeshTypes.EDGE && (elem as Edge).h1) {
        const edge = elem as Edge
        mesh.setSelect(edge.h1!, false)
        mesh.setSelect(edge.h2!, false)
      }
      mesh.setSelect(elem, false)
    }
  }
}

ToolOp.register(DuplicateOp)
