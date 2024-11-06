import { StructReader } from '../path.ux/scripts/path-controller/types/util/nstructjs.js'
import {
  NumberConstraints,
  nstructjs,
  PropTypes,
  util,
  simple,
  DataStruct,
  PropSubTypes,
  UIBase,
  Container,
  saveUIData,
  loadUIData,
  Vector2,
  Vector3,
  ToolProperty,
  DataAPI,
  FloatProperty,
} from '../path.ux/scripts/pathux.js'
import { Context } from './context'

/* maps both name -> proptype and proptype -> name */
export const PropTypeMap = {
  float : PropTypes.FLOAT,
  int   : PropTypes.INT,
  vec2  : PropTypes.VEC2,
  vec3  : PropTypes.VEC3,
  vec4  : PropTypes.VEC4,
  color3: PropTypes.VEC3,
  color4: PropTypes.VEC4,
  string: PropTypes.STRING,
  enum  : PropTypes.ENUM,
  flags : PropTypes.FLAG,
  bool  : PropTypes.BOOL,
} as any

for (let k in PropTypeMap) {
  //colors are a PropSubType .subtype field
  if (k !== 'color3' && k !== 'color4') {
    PropTypeMap[PropTypeMap[k]] = k
  }
}

let idgen = 0

interface IDefBase<T extends string, V> {
  type: T
  value: V
}

interface IBoolean extends IDefBase<'bool', boolean> {}
interface IString extends IDefBase<'string', string> {}
interface INumBase<T extends string, V = number> extends IDefBase<T, V> {
  min?: number
  max?: number
  slideSpeed?: number
  expRate?: number
  slider?: boolean
  baseUnit?: string
  displayUnit?: string
  unit?: string
}

interface IFloatBase<T extends string, V = number> extends IDefBase<T, V> {
  decimalPlaces?: number
}
interface IIntBase<T extends string, V = number> extends IDefBase<T, V> {
  radix?: number
}

interface IFloat extends IFloatBase<'float'> {}
interface IInt extends IIntBase<'int'> {}
interface IVec2 extends IFloatBase<'vec2', Vector2> {}
interface IVec3 extends IFloatBase<'vec3', Vector3> {}
interface IVec4 extends IFloatBase<'vec4', Vector3> {}
interface IColor3 extends IFloatBase<'color3', Vector3> {}
interface IColor4 extends IFloatBase<'color4', Vector3> {}
interface IEnumBase<T extends string, K extends string, V> extends IDefBase<T, V> {
  iconMap: {
    [k in K]: number
  }
  descriptions: {
    [k in K]: number
  }
  def: {
    [k in K]: V
  }
}
interface IEnum<K extends string = string, V = number> extends IEnumBase<'enum', K, V> {}
interface IFlag<K extends string = string, V = number> extends IEnumBase<'flag', K, V> {}

type IProperty = IBoolean | IString | IFloat | IInt | IVec2 | IVec3 | IVec4 | IColor3 | IColor4 | IEnum | IFlag
interface IPanel {
  type: 'panel'
}

export interface ITemplateDef {
  [k: string]: IProperty | IPanel
}

type ConvertType<T> = {
  [k in keyof T]: T[k] extends IProperty ? T[k]['value'] : never
}

export type {ConvertType as PropBagAccessor}

interface PropertiesBagConstructor<T extends ITemplateDef = {}> {
  new(template?: T) : PropertiesBag<T>
  defineAPI(api: DataAPI, st: DataStruct): void
  templateFromProps<T extends ITemplateDef = {}>(props: ToolProperty<any>[]): T
}
export class PropertiesBag<T extends ITemplateDef> {
  static STRUCT = nstructjs.inlineRegister(this, `
    PropertiesBag {
      _props : array(abstract(ToolProperty)) | this._save();
    }
  `)

  static defineAPI(api: DataAPI, st: DataStruct) {
    api.mapStructCustom(this, this.getStruct.bind(this))
  }

  static getStruct(obj: any) {
    return obj._struct
  }

  ['constructor'] : PropertiesBagConstructor
  
  sourceTemplate: T

  //these two are used by props widget to detect updates
  _updateGen = 0
  _id = idgen++

  _struct: DataStruct
  _props: ToolProperty<any>[]

  constructor(template?: T) {
    this._props = []
    this._struct = new DataStruct()
    this.sourceTemplate = {} as unknown as T

    if (template) {
      this.loadTemplate(template)
    }
  }

  get asFullyTypedBag() {
    return this as unknown as ConvertType<T>
  }
  _getTemplValue(item: any): any {
    let val = item.value

    if (val === undefined) {
      if (item.type === 'string') {
        val = ''
      } else if (item.type === 'vec2') {
        val = [0, 0]
      } else if (item.type === 'vec3' || item.type === 'color3') {
        val = [0, 0, 0]
      } else if (item.type === 'vec4' || item.type === 'color4') {
        val = [0, 0, 0, 1]
      } else {
        val = 0
      }
    }

    return val
  }

  #getPropDefs(templ: any, flat_templ: any = {}) {
    for (let k in templ) {
      if (typeof k === 'symbol') {
        continue
      }

      let v = templ[k]

      if (k === 'type' && (v as any) === 'panel') {
        continue
      }

      if (typeof v === 'object' && v.type === 'panel') {
        this.#getPropDefs(v, flat_templ)
      } else {
        flat_templ[k] = v
      }
    }

    return flat_templ
  }

  patchTemplate(templ: any) {
    this.sourceTemplate = templ

    this._props.length = 0
    this._updateGen++

    let flat_templ = this.#getPropDefs(templ)

    for (let k in flat_templ) {
      let item = flat_templ[k]

      if (typeof item !== 'object') {
        item = {type: item}
      }

      const genericThis = this as unknown as any
      if (genericThis[k] === undefined) {
        genericThis[k] = this._getTemplValue(item)
      }
    }

    let st = this._struct
    st.clear()

    for (let k in flat_templ) {
      let item = flat_templ[k]

      if (typeof item !== 'object') {
        item = {type: item}
      }

      let uiname = item.uiName ?? ToolProperty.makeUIName(k)
      let descr = item.description ?? ''
      let def

      if (item.type === 'float') {
        def = st.float(k, k, uiname, descr)
      } else if (item.type === 'int') {
        def = st.int(k, k, uiname, descr)
      } else if (item.type === 'vec2') {
        def = st.vec2(k, k, uiname, descr)
      } else if (item.type === 'vec3') {
        def = st.vec3(k, k, uiname, descr)
      } else if (item.type === 'vec4') {
        def = st.vec4(k, k, uiname, descr)
      } else if (item.type === 'color3') {
        def = st.color3(k, k, uiname, descr)
      } else if (item.type === 'color4') {
        def = st.color4(k, k, uiname, descr)
      } else if (item.type === 'string') {
        def = st.string(k, k, uiname, descr)
      } else if (item.type === 'enum') {
        def = st.enum(k, k, item.def, uiname, descr)
      } else if (item.type === 'flags') {
        def = st.flags(k, k, item.def, uiname, descr)
      } else if (item.type === 'bool') {
        def = st.bool(k, k, uiname, descr)
      }

      if (def === undefined) {
        console.warn('properties template error', k, item)
        continue
      }

      if (item.type === 'enum' || item.type === 'flags') {
        if ('checkStrip' in item) {
          def.checkStrip(item.checkStrip)
        }
      }

      if (!def) {
        console.error('Unknown property type ' + item.type, item)
        continue
      }

      def.on('change', window.redraw_all)

      if (item.onchange) {
        def.on('change', item.onchange)
      }

      this._props.push(def.data.copy())

      let pr = PropTypes
      let numberTypes = pr.FLOAT | pr.INT | pr.VEC2 | pr.VEC3 | pr.VEC4

      def.data.apiname = k

      if (def.data.type & numberTypes) {
        const numberCast = def.data as FloatProperty
        numberCast.baseUnit = numberCast.displayUnit = 'none'

        for (let key of NumberConstraints) {
          if (key in item) {
            ;(numberCast as any)[key] = item[key]
          }
        }

        if (item.slider) {
          def.simpleSlider()
        }

        if ('unit' in item) {
          numberCast.baseUnit = numberCast.displayUnit = item.unit
        }

        if ('min' in item) {
          numberCast.range[0] = item.min
        }

        if ('max' in item) {
          numberCast.range[1] = item.max
        }

        if ('uiMin' in item) {
          if (!numberCast.uiRange) {
            numberCast.uiRange = Array.from(numberCast.range) as [number, number]
          }
          numberCast.uiRange[0] = item.uiMin
        }

        if ('uiMax' in item) {
          if (!numberCast.uiRange) {
            numberCast.uiRange = Array.from(numberCast.range) as [number, number]
          }
          numberCast.uiRange[1] = item.uiMax
        }
      }
    }
  }

  loadTemplate(templ: any) {
    this.sourceTemplate = templ

    templ = this.#getPropDefs(templ)

    for (let k in templ) {
      let item = templ[k]
      if (typeof item !== 'object') {
        item = {type: item}
      }

      //this[k] = this._getTemplValue(item);
    }

    this.patchTemplate(templ)
  }

  static templateFromProps(props: ToolProperty<any>[]) {
    let templ = {} as any

    for (let prop of props) {
      let item = {} as any
      templ[prop.apiname] = item

      let type = PropTypeMap[prop.type]

      if (prop.subtype === PropSubTypes.COLOR) {
        type = prop.type === PropTypes.VEC3 ? 'color3' : 'color4'
      }

      item.type = type
      item.uiName = prop.uiname
      item.value = prop.getValue()

      let pr = PropTypes
      let numberTypes = pr.FLOAT | pr.INT | pr.VEC2 | pr.VEC3 | pr.VEC4

      if (prop.type & numberTypes) {
        const numProp = prop as FloatProperty
        for (let key of NumberConstraints) {
          if ((prop as any)[key] === undefined) {
            continue
          }

          if (key === 'range') {
            ;[item.min, item.max] = numProp.range
          } else if (key === 'uiRange') {
            ;[item.uiMin, item.uiMax] = numProp.uiRange!
          } else {
            item[key] = (numProp as any)[key]
          }
        }
      }
    }

    return templ
  }

  _save() {
    window.draw_ignore_push()

    try {
      for (let prop of this._props) {
        prop.setValue((this as any)[prop.apiname])
      }
    } finally {
      window.draw_ignore_pop()
    }

    return this._props
  }

  loadSTRUCT(reader: StructReader<this>) {
    reader(this)

    let templ = this.constructor.templateFromProps<T>(this._props)
    this.loadTemplate(templ)
  }

  testStruct() {
    let json = nstructjs.writeJSON(this)
    console.log(json)

    let obj = nstructjs.readJSON(json, this.constructor)
    console.log(obj)

    return obj
  }
}
simple.DataModel.register(PropertiesBag)

export class PropsEditor extends Container<Context> {
  needsRebuild = true
  _last_update_key = ''

  constructor() {
    super()
  }

  static define() {
    return {
      tagname: 'props-bag-editor-x',
    }
  }

  init() {
    super.init()

    if (this.ctx && this.hasAttribute('datapath')) {
      this.rebuild()
    }
  }

  get columns() {
    if (this.hasAttribute('columns')) {
      return parseInt(this.getAttribute('columns')!)
    } else {
      return 1
    }
  }

  set columns(v) {
    this.setAttribute('columns', '' + v)
  }

  rebuild() {
    let uidata = saveUIData(this, 'props editor')

    let cols = this.columns
    let path = this.getAttribute('datapath')!
    let props = this.ctx.api.getValue(this.ctx, path)

    if (!props) {
      console.warn('Bad datapath', path)
      return
    }

    this.needsRebuild = false
    this.dataPrefix = path

    this.clear()

    console.log('Columns', cols)
    const cols2 = new Array(cols).fill(1).map((c) => this.col())
    let i = 0

    let templ = props.sourceTemplate
    let rec = (obj: any, cols: Container[]) => {
      for (let k in obj) {
        let v = obj[k]

        if (k === 'type' && v === 'panel') {
          continue
        }

        let ci = i++ % cols.length

        if (typeof v === 'object' && v.type === 'panel') {
          let panel = cols[ci].panel(ToolProperty.makeUIName(k))
          let cols2 = new Array(cols.length).fill(1).map((c) => panel.col())
          rec(v, cols2)
          continue
        }

        cols[ci].prop(k)
      }
    }

    rec(templ, cols2)
    /*
    for (let prop of props._props) {
      let col = cols[i%cols.length]

      col.prop(prop.apiname);
      i++;
    }*/

    loadUIData(this, uidata)
  }

  update() {
    super.update()

    if (!this.ctx) {
      return
    }

    let path = this.getAttribute('datapath')

    let props = this.ctx.api.getValue(this.ctx, path!)
    if (!props) {
      console.warn('Bad datapath', path)
      return
    }

    let key = '' + props._updateGen + ':' + props._id + ':' + props._props.length

    if (key !== this._last_update_key) {
      this._last_update_key = key
      this.needsRebuild = true
    }

    if (this.needsRebuild) {
      this.rebuild()
    }
  }
}

UIBase.register(PropsEditor)
