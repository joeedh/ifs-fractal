import {
  simple, nstructjs, util, math, Vector2, UIBase, Icons, KeyMap, haveModal, ToolOp, ToolClasses, HotKey, createMenu,
  startMenu, saveUIData, loadUIData
} from '../path.ux/pathux.js';
import config from '../config/config.js';

import {PickData} from '../toolmode/toolmode_base.js';
import {MeshVector, MeshTypes, MeshFlags, Mesh} from './mesh.js';

let pick_cachering = util.cachering.fromConstructor(PickData, 32);

export class LoadDefaultsOp extends ToolOp {
  static tooldef() {
    return {
      uiname  : "Load Defaults",
      toolpath: "app.load_defaults",
      inputs  : {},
      outputs : {}
    }
  }

  exec(ctx) {
    ctx.state.createNewFile(true);
    window.redraw_all();
  }
}

ToolOp.register(LoadDefaultsOp);

export class Workspace extends simple.Editor {
  static STRUCT = nstructjs.inlineRegister(this, `
Workspace {
}
  `)

  constructor() {
    super();

    this.toolModePanel = undefined;
    this.oldToolMode = undefined;

    this.canvas = document.createElement("canvas");
    this.g = this.canvas.getContext("2d");

    this.mpos = new Vector2();

    this.shadow.appendChild(this.canvas);

    this.keymap = new KeyMap();

    this.keymap.add(new HotKey("W", [], "mesh.vertex_smooth"));
    this.keymap.add(new HotKey("Space", [], () => {
      let menu = [];

      for (let cls of ToolClasses) {
        let def = cls.tooldef();

        menu.push(def.toolpath);
      }

      menu = createMenu(this.ctx, "Find Tool", menu);

      let mpos = this.ctx.screen.mpos;
      startMenu(menu, mpos[0], mpos[1], true);

      console.log(menu);
    }));

    let eventBad = (e) => {
      if (haveModal()) {
        return true;
      }

      let elem = this.ctx.screen.pickElement(e.x, e.y);
      return elem && elem !== this && elem !== this.canvas;
    }

    this.addEventListener("pointerover", (e) => {
      let mpos = this.getLocalMouse(e.x, e.y);
      this.mpos.load(mpos);
    });

    this.addEventListener("pointerdown", (e) => {
      let mpos = this.getLocalMouse(e.x, e.y);
      this.mpos.load(mpos);

      if (eventBad(e)) {
        return;
      }

      this.toolmode.on_mousedown(mpos[0], mpos[1], e);
    });

    this.addEventListener("pointermove", (e) => {
      let mpos = this.getLocalMouse(e.x, e.y);
      this.mpos.load(mpos);

      if (eventBad(e)) {
        return;
      }

      this.toolmode.on_mousemove(mpos[0], mpos[1], e);
    });

    this.addEventListener("pointerup", (e) => {
      let mpos = this.getLocalMouse(e.x, e.y);
      this.mpos.load(mpos);

      if (eventBad(e)) {
        return;
      }

      this.toolmode.on_mouseup(mpos[0], mpos[1], e);
    });
  }

  get toolmode() {
    return this.ctx?.toolmode
  }

  static defineAPI(api, st) {

  }

  static define() {
    return {
      tagname : "workspace-editor-x",
      areaname: "workspace-editor-x",
      uiname  : "Workspace",
    }
  }

  getGlobalMouse(x, y) {
    let mpos = new Vector2();
    let r = this.canvas.getBoundingClientRect();

    let dpi = UIBase.getDPI();

    mpos[0] = x/dpi + r.x;
    mpos[1] = y/dpi + r.y;

    return mpos;
  }

  getLocalMouse(x, y) {
    let mpos = new Vector2();
    let r = this.canvas.getBoundingClientRect();

    let dpi = UIBase.getDPI();

    mpos[0] = (x - r.x)*dpi;
    mpos[1] = (y - r.y)*dpi;

    return mpos;
  }

  getKeyMaps() {
    if (this.toolmode) {
      return [this.keymap, this.toolmode.keymap];
    } else {
      return [this.keymap]
    }
  }

  init() {
    super.init();

    if (config.DRAW_TEST_IMAGES) {
      this.ctx.state.testImages.makeUI(sidebar, "testImages");
    }

    let header = this.header;
    let row;

    row = header.row();
    row.iconbutton(Icons.UNDO, "Undo", () => {
      this.ctx.toolstack.undo();
    });
    row.iconbutton(Icons.REDO, "Redo", () => {
      this.ctx.toolstack.redo();
    });

    row.button("Save Defaults", () => {
      _appstate.saveStartupFile();
    })

    row.tool("app.load_defaults()");

    row.useIcons()
    row.prop("toolmodes.activeIndex")

    this.rebuildSideBar()
  }

  rebuildSideBar() {
    console.warn("Rebuilding sidebar");

    let uidata = this.sidebar ? saveUIData(this.sidebar, "sidebar") : undefined;

    if (this.sidebar && this.oldToolMode) {
      this.oldToolMode.sideBarUIData = saveUIData(this.toolModePanel, "toolmodepanel")
    }

    let sidebar = this.makeSideBar();

    let tab;
    tab = sidebar.tab("Options");

    let props = UIBase.createElement("props-bag-editor-x");
    props.setAttribute("datapath", "properties");

    tab.add(props);

    const toolmode = this.ctx.toolmode
    if (toolmode) {
      let col = this.toolModePanel = tab.col()
      col.dataPrefix = "toolmode"
      toolmode.buildSideBar(col);
    }

    tab = sidebar.tab("Tools")
    tab.toolPanel("mesh.split_edge");
    tab.toolPanel("mesh.vertex_smooth");
    tab.tool("mesh.fix_windings")
    tab.tool("mesh.make_face")
    tab.tool("mesh.reverse_edge")

    tab = sidebar.tab("Last Command")
    tab.add(UIBase.createElement("last-tool-panel-x"));

    /* Prevent update loop. */
    this.oldToolMode = toolmode;

    loadUIData(this.sidebar, uidata);

    /* Load UI data for toolmode seperately*/
    if (toolmode.sideBarUIData.length > 0) {
      loadUIData(this.toolModePanel, toolmode.sideBarUIData);
    }

    for (let i = 0; i < 3; i++) {
      this.flushUpdate()
    }
  }

  update() {
    super.update()

    if (!this.ctx) {
      return;
    }

    const toolmode = this.ctx.toolmode;
    if (toolmode !== this.oldToolMode) {
      this.rebuildSideBar();
    }
  }

  draw() {
    if (!this.ctx) {
      return;
    }

    let canvas = this.canvas;

    let dpi = UIBase.getDPI();
    let w = ~~(this.size[0]*dpi);
    let h = ~~(this.size[1]*dpi) - 50*dpi;

    if (w !== canvas.width || h !== canvas.height) {
      canvas.width = w;
      canvas.height = h;

      canvas.style["width"] = "" + (w/dpi) + "px";
      canvas.style["height"] = "" + (h/dpi) + "px";
    }

    this.g.clearRect(0, 0, canvas.width, canvas.height);

    if (config.DRAW_TEST_IMAGES) {
      this.ctx.state.testImages.draw(canvas, this.g);
    }

    if (this.toolmode) {
      this.toolmode.draw(this.ctx, this.canvas, this.g);
    }
  }

  setCSS() {
    this.canvas.style["position"] = "absolute";
  }

  pick(localX, localY, selmask = config.SELECTMASK, limit = undefined) {
    let mesh = this.ctx.mesh;

    if (limit === undefined) {
      limit = selmask & MeshTypes.FACE ? 15 : 25;
    }

    let mpos = new MeshVector();
    mpos[0] = localX;
    mpos[1] = localY;
    mpos[2] = 0.0;

    let dpi = UIBase.getDPI();
    limit *= dpi;

    let mindis, minret;

    let vlist = (list) => {
      for (let v of list) {
        if (v.flag & MeshFlags.HIDE) {
          continue;
        }

        mpos[2] = v.co.length > 2 ? v.co[2] : 0.0;

        let dis = v.co.vectorDistance(mpos);
        if (dis >= limit) {
          continue;
        }

        if (!minret || dis < mindis) {
          mindis = dis;
          minret = pick_cachering.next().load(v, v.type, dis);
        }
      }
    }

    if (selmask & MeshTypes.VERTEX) {
      vlist(mesh.verts);
    }

    if (selmask & MeshTypes.HANDLE) {
      vlist(mesh.handles);
    }

    const EDGE_WEIGHT = Math.max(limit*0.9, 2);

    if (selmask & MeshTypes.EDGE) {
      for (let e of mesh.edges) {
        if ((e.flag & MeshFlags.HIDE)) {
          continue;
        }

        let steps = 8;
        let t = 0, dt = 1.0/(steps - 1);
        let p1;
        for (let i = 0; i < steps; i++, t += dt) {
          let p2 = e.evaluate(t)

          if (p1) {
            let dis = math.dist_to_line_2d(mpos, p1, p2);

            if (dis >= limit) {
              continue;
            }

            if (mindis === undefined || dis + EDGE_WEIGHT < mindis) {
              mindis = dis + EDGE_WEIGHT;
              minret = pick_cachering.next().load(e, e.type, dis);
            }
          }
          p1 = p2;
        }
      }
    }

    if (minret) {
      return minret.elem;
    }

    if (selmask & MeshTypes.FACE) {
      let p2 = new MeshVector([-10000, -10000]);

      let steps = mesh.haveHandles ? 8 : 2;

      for (let f of mesh.faces) {
        let cross = 0;

        for (let list of f.lists) {
          for (let l of list) {
            let t = 0, dt = 1.0/(steps - 1);

            let b;
            for (let i = 0; i < steps; i++, t += dt) {
              let a = l.evaluate(t);

              if (b && math.line_line_cross(mpos, p2, a, b)) {
                cross++;
              }

              b = a;
            }
          }
        }

        if (cross%2 === 0) {
          continue;
        }

        //We're guaranted to have a face here
        let ok = !minret;
        ok = ok || (minret.elem.flag & MeshFlags.SELECT) && !(f.flag & MeshFlags.SELECT);

        if (ok) {
          minret = pick_cachering.next().load(f, f.type, 0);
        }
      }
    }

    return minret ? minret.elem : undefined;
  }
}

simple.Editor.register(Workspace);

