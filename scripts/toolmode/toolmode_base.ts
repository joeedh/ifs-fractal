import {Context} from '../core/context.js'
import {Element} from '../core/mesh.js'
import {MeshTypes} from '../core/mesh_base.js'
import {
  KeyMap,
  nstructjs,
  util,
  simple,
  EnumProperty,
  ToolProperty,
  DataAPI,
  DataStruct,
  Container,
} from '../path.ux/pathux.js'
import {StructReader} from '../path.ux/scripts/path-controller/types/util/nstructjs.js'

export interface IToolModeDef {
  uiName: string
  typeName: string
  icon?: number
  description?: string
}
export interface IToolModeConstructor<CLS extends ToolModeBase = ToolModeBase> {
  new (ctx: Context): CLS
  toolModeDef(): IToolModeDef
}

export const ToolModeClasses = [] as IToolModeConstructor[]

export class ToolModeBase extends simple.DataModel<Context> {
  static STRUCT = nstructjs.inlineRegister(
    this,
    `
ToolModeBase {
  sideBarUIData : string;
}
  `
  )

  static toolModeDef(): IToolModeDef {
    return {
      uiName     : '',
      typeName   : '',
      icon       : -1,
      description: '',
    }
  }

  static getClass(name: string) {
    for (let cls of ToolModeClasses) {
      if (cls.toolModeDef().typeName === name) {
        return name
      }
    }
  }

  static makeEnumProp() {
    let enumdef = {} as any
    let uinames = {} as any
    let icons = {} as any
    let descr = {} as any

    let i = 0
    for (let cls of ToolModeClasses) {
      let def = cls.toolModeDef()
      let key = def.typeName

      enumdef[key] = i
      uinames[key] = def.uiName ?? ToolProperty.makeUIName(key)
      icons[key] = def.icon ?? -1
      descr[key] = def.description ?? ''

      i++
    }

    return new EnumProperty(0, enumdef).addUINames(uinames).addDescriptions(descr).addIcons(icons)
  }

  static register(cls: IToolModeConstructor) {
    let def = cls.toolModeDef()

    if (!cls.hasOwnProperty('toolModeDef')) {
      throw new Error('Missing toolModeDef!')
    }

    if (!cls.hasOwnProperty('STRUCT')) {
      throw new Error('Missing STRUCT script')
    }

    if (!def.typeName) {
      throw new Error('missing typeName for toolmode')
    }

    simple.DataModel.register(cls)
    ToolModeClasses.push(cls)
  }

  ['constructor']: IToolModeConstructor
  
  ctx: Context
  keymap: KeyMap
  sideBarUIData: string

  constructor(ctx: Context) {
    super()

    this.ctx = ctx
    this.keymap = new KeyMap()
    this.sideBarUIData = ''
  }

  getEditMenu() {
    let ret = []

    for (let hk of this.keymap) {
      if (typeof hk.action === 'string') {
        ret.push(hk.action)
      }
    }

    return ret
  }

  static defineAPI(api: DataAPI, st: DataStruct) {
    return st
  }

  buildSideBar(container: Container) {}

  on_mousedown(localX: number, localY: number, e: PointerEvent) {}

  on_mousemove(localX: number, localY: number, e: PointerEvent) {}

  on_mouseup(localX: number, localY: number, e: PointerEvent) {}

  draw(ctx: Context, canvas: HTMLCanvasElement, g: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  getKeymap() {
    return this.keymap
  }

  loadSTRUCT(reader: StructReader<this>) {
    reader(this)
  }
}

export class PickData {
  elem: Element
  type: MeshTypes
  dist: number

  constructor(elem?: Element, type?: MeshTypes, dist?: number) {
    if (elem !== undefined) {
      this.elem = elem
    }
    if (type !== undefined) {
      this.type = type
    }
    if (dist !== undefined) {
      this.dist = dist
    }
  }

  load(elem: Element, type: MeshTypes, dist: number) {
    this.elem = elem
    this.type = type
    this.dist = dist

    return this
  }
}
