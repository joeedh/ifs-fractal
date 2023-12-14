import {KeyMap, nstructjs, util, simple, EnumProperty} from '../path.ux/pathux.js';

export const ToolModeClasses = []

export class ToolModeBase extends simple.DataModel {
  static STRUCT = nstructjs.inlineRegister(this, `
ToolModeBase {
  sideBarUIData : string;
}
  `);

  static toolModeDef() {
    return {
      uiName     : "",
      typeName   : "",
      icon       : -1,
      description: "",
    }
  }

  static getClass(name) {
    for (let cls of ToolModeClasses) {
      if (cls.toolModeDef().typeName === name) {
        return name;
      }
    }
  }

  static makeEnumProp() {
    let enumdef = {};
    let uinames = {}
    let icons = {}
    let descr = {}

    let i = 0;
    for (let cls of ToolModeClasses) {
      let def = cls.toolModeDef()
      let key = def.typeName;

      enumdef[key] = i;
      uinames[key] = def.uiName ?? ToolProperty.makeUIName(key);
      icons[key] = def.icon ?? -1;
      descr[key] = def.description ?? "";

      i++;
    }

    return new EnumProperty(0, enumdef)
      .addUINames(uinames)
      .addDescriptions(descr)
      .addIcons(icons)

  }

  static register(cls) {
    let def = cls.toolModeDef()

    if (!cls.hasOwnProperty("toolModeDef")) {
      throw new Error("Missing toolModeDef!");
    }

    if (!cls.hasOwnProperty( "STRUCT")) {
      throw new Error("Missing STRUCT script");
    }

    if (!def.typeName) {
      throw new Error("missing typeName for toolmode");
    }

    simple.DataModel.register(cls);
    ToolModeClasses.push(cls);
  }

  constructor(ctx) {
    super()

    this.ctx = ctx;
    this.keymap = new KeyMap();
    this.sideBarUIData = "";
  }

  getEditMenu() {
    let ret = [];

    for (let hk in this.keymap) {
      if (typeof hk === "string") {
        ret.push(hk.action);
      }
    }

    return ret;
  }

  static defineAPI(api, st) {
    return st;
  }

  buildSideBar(container) {

  }

  on_mousedown(localX, localY, e) {

  }

  on_mousemove(localX, localY, e) {

  }

  on_mouseup(localX, localY, e) {

  }

  draw(ctx, canvas, g) {
    this.ctx = ctx;
  }

  getKeymap() {
    return this.keymap;
  }

  loadSTRUCT(reader) {
    reader(this);
  }
}

export class PickData {
  constructor(elem, type, dist) {
    this.elem = elem;
    this.type = type;
    this.dist = dist;
  }

  load(elem, type, dist) {
    this.elem = elem;
    this.type = type;
    this.dist = dist;

    return this;
  }
}
