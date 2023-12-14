import config from '../config/config.js';

/* Set default undo handlers; they just saves and reload the file
*  minus the screen layout.*/

import {buildToolSysAPI, simple, ToolOp} from '../path.ux/scripts/pathux.js';
import {Workspace} from './workspace.js';
import {MeshTypes} from './mesh.js';
import {ImageWrangler} from './image_wrangler.js';
import './mesh_ops.js';
import './mesh_selectops.js';
import {ToolModeSet} from './app.js';
import {ToolModeBase} from '../toolmode/toolmode_base.js';

ToolOp.prototype.undoPre = function (ctx) {
  this._undo = ctx.state.saveFileSync({
    doScreen: false
  });
}

ToolOp.prototype.undo = function (ctx) {
  ctx.state.loadFileSync(this._undo, {
    resetToolStack: false,
    resetContext  : false,
    doScreen      : false,
    resetOnLoad   : false
  });
}

export class Context {
  constructor(state) {
    this.state = state;
  }

  get workspace() {
    return simple.Editor.findEditor(Workspace);
  }

  get selMask() {
    return config.SELECTMASK;
  }

  get mesh() {
    return this.state.mesh;
  }

  get properties() {
    return this.state.properties;
  }

  get testImages() {
    return this.state.testImages;
  }

  get toolmode() {
    return this.state.toolmodes.active;
  }

  get toolmodes() {
    return this.state.toolmodes;
  }

  static defineAPI(api, st) {
    ToolModeSet.defineAPI(api, api.mapStruct(ToolModeSet));

    st.dynamicStruct("toolmode", "toolmode", "Tool Mode", api.mapStruct(ToolModeBase));
    st.struct("toolmodes", "toolmodes", "Tool Modes", api.mapStruct(ToolModeSet));

    st.struct("testImages", "testImages", "Test Images", api.mapStruct(ImageWrangler));
    st.dynamicStruct("properties", "properties", "Properties");
  }
}
