import {util, math, nstructjs, Vector2, Vector4} from '../path.ux/scripts/pathux.js';
import {ToolModeBase} from './toolmode_base.js';
import {Icons} from '../../assets/icon_enum.js';
import {MeshEditor} from './toolmode_mesh.js';

export class PenToolMode extends ToolModeBase {
  static STRUCT = nstructjs.inlineRegister(this, `
PenToolMode {
  color    : vec4;
  strength : float;
  radius   : float;
}
  `);

  static toolModeDef() {
    return {
      typeName: "pen",
      uiName  : "Pen",
      icon    : Icons.BRUSH,
    }
  }

  static {
    ToolModeBase.register(this);
  }

  constructor(ctx = undefined) {
    super(ctx);

    this.strength = 1.0;
    this.radius = 25.0;
    this.color = new Vector4([0, 0.5, 1.0, 1.0])
  }

  static defineAPI(api, st) {
    st.float("strength", "strength", "Strength")
      .range(0.0, 1.0)
      .step(0.1)
      .decimalPlaces(2)
      .noUnits();

    st.float("radius", "radius", "Radius")
      .range(0.1, 512)
      .step(0.1)
      .expRate(2.0)
      .decimalPlaces(1)
      .unit("pixel");
  }

  buildSideBar(container) {
    container.prop("strength")
    container.prop("radius");
  }

  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
  }

  draw(ctx, canvas, g) {
    MeshEditor.drawMesh(ctx, canvas, g, false);
  }
}