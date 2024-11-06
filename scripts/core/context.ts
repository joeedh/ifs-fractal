import config from '../config/config.js'

/* Set default undo handlers; they just saves and reload the file
 *  minus the screen layout.*/

import {DataAPI, DataStruct, Screen, simple, ToolOp} from '../path.ux/scripts/pathux.js'
import {Workspace} from './workspace.js'
import {ImageWrangler} from './image_wrangler.js'
import './mesh_ops.js'
import './mesh_selectops.js'
import {ToolModeSet} from './toolModeSet.js'
import type {App} from './app'
import {ToolModeBase} from '../toolmode/toolmode_base.js'
import type {Mesh} from './mesh'
import type {PropBagAccessor, PropertiesBag} from './property_templ'
import type {Properties} from './properties'
import type {ToolStack} from '../path.ux/scripts/path-controller/toolsys/toolsys.js'

ToolOp.prototype.undoPre = function (ctx) {
  ;(this as unknown as any)._undo = ctx.state.saveFileSync({
    doScreen: false,
  })
}

ToolOp.prototype.undo = function (ctx) {
  ctx.state.loadFileSync((this as unknown as any)._undo, {
    resetToolStack: false,
    resetContext  : false,
    doScreen      : false,
    resetOnLoad   : false,
  })
}

export class Context {
  state: App

  constructor(state: App) {
    this.state = state
  }

  get workspace() {
    return simple.Editor.findEditor(Workspace)
  }

  get selMask(): number {
    return config.SELECTMASK
  }

  get mesh(): Mesh {
    return this.state.mesh
  }

  get api(): DataAPI {
    return this.state.api
  }
  get screen(): Screen {
    return this.state.screen
  }
  get properties(): PropBagAccessor<typeof Properties> {
    return this.state.properties.asFullyTypedBag
  }

  get toolstack() {
    return this.state.toolstack as ToolStack
  }

  get testImages() {
    return this.state.testImages
  }

  get toolmode() {
    return this.state.toolmodes.active
  }

  get toolmodes() {
    return this.state.toolmodes
  }

  static defineAPI(api: DataAPI, st: DataStruct) {
    ToolModeSet.defineAPI(api, api.mapStruct(ToolModeSet))

    st.dynamicStruct('toolmode', 'toolmode', 'Tool Mode', api.mapStruct(ToolModeBase))
    st.struct('toolmodes', 'toolmodes', 'Tool Modes', api.mapStruct(ToolModeSet))

    st.struct('testImages', 'testImages', 'Test Images', api.mapStruct(ImageWrangler))
    st.dynamicStruct('properties', 'properties', 'Properties')
  }
}
