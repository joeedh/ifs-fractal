import {util, math, nstructjs, Vector2, Vector4, DataAPI, DataStruct, Container} from '../path.ux/scripts/pathux.js'
import {IToolModeDef, ToolModeBase} from './toolmode_base.js'
import {Icons} from '../../assets/icon_enum.js'
import {MeshEditor} from './toolmode_mesh.js'
import {Context} from '../core/context.js'
import {StructReader} from '../path.ux/scripts/path-controller/types/util/nstructjs.js'

export class PenToolMode extends ToolModeBase {
  static STRUCT = nstructjs.inlineRegister(
    this,
    `
PenToolMode {
  color    : vec4;
  strength : float;
  radius   : float;
}
  `
  )

  static toolModeDef(): IToolModeDef {
    return {
      typeName: 'pen',
      uiName  : 'Pen',
      icon    : Icons.BRUSH,
    }
  }
  static {
    ToolModeBase.register(this)
  }

  strength: number
  radius: number
  color: Vector4

  constructor(ctx: Context) {
    super(ctx)

    this.strength = 1.0
    this.radius = 25.0
    this.color = new Vector4([0, 0.5, 1.0, 1.0])
  }

  static defineAPI(api: DataAPI, st: DataStruct) {
    st.float('strength', 'strength', 'Strength').range(0.0, 1.0).step(0.1).decimalPlaces(2).noUnits()
    st.float('radius', 'radius', 'Radius').range(0.1, 512).step(0.1).expRate(2.0).decimalPlaces(1).unit('pixel')
    return st
  }

  buildSideBar(container: Container) {
    container.prop('strength')
    container.prop('radius')
  }

  loadSTRUCT(reader: StructReader<this>) {
    reader(this)
    super.loadSTRUCT(reader)
  }

  draw(ctx: Context, canvas: HTMLCanvasElement, g: CanvasRenderingContext2D) {
    MeshEditor.drawMesh(ctx, canvas, g, false)
  }
}
