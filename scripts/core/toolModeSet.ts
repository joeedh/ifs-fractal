import {
  nstructjs,
  DataStruct,
  DataAPI,
} from '../path.ux/pathux.js'
import { StructReader } from '../path.ux/scripts/path-controller/types/util/nstructjs.js'
import {ToolModeBase} from '../toolmode/toolmode_base.js'

export class ToolModeSet extends Array {
  active = undefined
  activeIndex = 0

  static STRUCT = nstructjs.inlineRegister(
    this,
    `
ToolModeSet {
  this        : array(abstract(ToolModeBase));
  activeIndex : int; 
}
  `
  )

  loadSTRUCT(reader: StructReader<this>) {
    reader(this)
  }

  push(...toolmodes: any[]) {
    for (let toolmode of toolmodes) {
      if (this.active === undefined) {
        this.active = toolmode
      }
    }

    return super.push(...toolmodes)
  }

  /* Okay now this is the weirdest bug ever, get/setters are broken on Array subclasses?*/
  /*
  get activeIndex() {
    return this.length > 0 ? this.indexOf(this.active) : 0;
  }

  set activeIndex(i) {
    console.warn("setting active", i, this[i])
    this.active = this[i];
  }
  */

  static defineAPI(api: DataAPI, st: DataStruct) {
    st.enum('activeIndex', 'activeIndex', ToolModeBase.makeEnumProp()).on('change', () => window.redraw_all())

    return st
  }

  constructor() {
    super()

    /* Okay now this is the weirdest bug ever, class get/setters are broken
     * on Array subclasses?
     **/
    Object.defineProperty(this, 'activeIndex', {
      get() {
        return this.indexOf(this.active)
      },
      set(i) {
        this.active = this[i]
      },
    })
  }
}
