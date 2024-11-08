import {simple, util, Vector3, TextBoxBase, nstructjs} from '../path.ux/pathux.js'

import './workspace.js'
import {Mesh, MeshTypes} from './mesh.js'
import {Workspace} from './workspace.js'
import {FileArgs} from '../path.ux/scripts/simple/file.js'
import {PropertiesBag} from './property_templ.js'
import {Context} from './context'
import config from '../config/config.js'
import {IImagesTemplate, ImageWrangler} from './image_wrangler.js'
import {Icons} from '../../assets/icon_enum.js'
import {ToolModeBase, ToolModeClasses} from '../toolmode/toolmode_base.js'
import {Properties} from './properties'
import {IFS} from './ifs.js'

import '../toolmode/all.js'

nstructjs.setWarningMode(0)

declare global {
  interface Window {
    _appstate: App
  }
  const _appstate: App
}

export const STARTUP_FILE_KEY = '_startup_file_ifs1'

import {StructReader} from '../path.ux/scripts/path-controller/types/util/nstructjs.js'
import {FileData, IFileArgs} from '../path.ux/scripts/types/simple/simple.js'

/* See config.DRAW_TEST_IMAGES */
export const TestImages = {
  imageColumns : 2,
  singletonMode: false,
  test1: {
    size: [512, 512],
  },
} as IImagesTemplate

window.addEventListener('contextmenu', (e) => {
  console.log(e)

  if (window._appstate && _appstate.screen) {
    let elem = _appstate.screen.pickElement(e.x, e.y)

    if (elem !== undefined && (elem instanceof TextBoxBase || elem.tagName === 'INPUT')) {
      return
    }
  }
  e.preventDefault()
})

import {ToolModeSet} from './toolModeSet.js'
export {ToolModeSet}

export class App extends simple.AppState<Context> {
  mesh: Mesh
  properties: PropertiesBag<typeof Properties>
  toolmodes = new ToolModeSet()
  testImages = new ImageWrangler(TestImages as unknown as undefined) // XXX
  ifs: IFS

  constructor() {
    super(Context)

    this.toolmodes = new ToolModeSet()

    this.createNewFile(true)
    this.ifs = new IFS(this)

    this.saveFilesInJSON = true
    let dimen = 128
  }

  get toolmode() {
    return this.toolmodes.active
  }

  createNewFile(noReset = false) {
    if (!noReset) {
      this.reset()
      this.makeScreen()
    }

    this.properties = new PropertiesBag(Properties)

    this.mesh = new Mesh()
    let s = 50
    let d = 200
    let v1 = this.mesh.makeVertex(new Vector3([s, s, 0]))
    let v2 = this.mesh.makeVertex(new Vector3([s, s + d, 0]))
    let v3 = this.mesh.makeVertex(new Vector3([s + d, s + d, 0]))
    let v4 = this.mesh.makeVertex(new Vector3([s + d, s, 0]))

    this.mesh.makeFace([v1, v2, v3, v4])

    this.toolmodes = new ToolModeSet()
    for (let cls of ToolModeClasses) {
      this.toolmodes.push(new cls(this.ctx))
    }
  }

  saveStartupFile() {
    this.saveFile().then((json) => {
      const buf = JSON.stringify(json)

      localStorage[STARTUP_FILE_KEY] = buf
      console.log('Saved startup file', (buf.length / 1024.0).toFixed(2) + 'kb')
    })
  }

  loadStartupFile() {
    if (!(STARTUP_FILE_KEY in localStorage)) {
      return
    }

    try {
      let json = JSON.parse(localStorage[STARTUP_FILE_KEY])
      this.loadFile(json)
    } catch (error) {
      util.print_stack(error)
      console.warn('Failed to load startup file')
      this.createNewFile()
    }
  }

  getFileObjects() {
    return [this.mesh, this.properties, this.testImages, this.toolmodes]
  }

  saveFileSync(objects: any, args: IFileArgs = {}): string | ArrayBuffer {
    if (args.useJSON === undefined) {
      args.useJSON = true
    }

    return super.saveFileSync(this.getFileObjects(), args)
  }

  saveFile(args: IFileArgs = {}): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((accept, reject) => {
      accept(this.saveFileSync(this.getFileObjects(), args))
    })
  }

  loadFileSync(data: ArrayBuffer | string, args: IFileArgs = {}) {
    if (args.useJSON === undefined) {
      args.useJSON = true
    }

    let file = super.loadFileSync(data, args)
    console.log(file.objects)

    this.ifs = new IFS(this)
    this.mesh = file.objects[0]
    this.properties = file.objects[1] ?? this.properties

    this.properties.patchTemplate(Properties)

    for (let obj of file.objects) {
      if (obj instanceof ImageWrangler) {
        this.testImages = obj
        this.testImages.loadFromTemplate(TestImages)
      }
    }

    for (let obj of file.objects) {
      if (obj instanceof ToolModeSet) {
        this.toolmodes = new ToolModeSet()
        this.toolmodes.length = 0

        /* Reorder toolmodes. */
        for (let toolmode of obj) {
          let i = ToolModeClasses.indexOf(toolmode.constructor)
          if (i < 0) {
            console.warn('Missing tool mode ' + toolmode.constructor.name, obj)
            continue
          }

          this.toolmodes[i] = toolmode
        }

        this.toolmodes.active = obj.active

        /* Add any new modes. */
        for (let i = 0; i < this.toolmodes.length; i++) {
          if (this.toolmodes[i] === undefined) {
            this.toolmodes[i] = new ToolModeClasses[i](this.ctx)
          }
        }

        break
      }
    }

    if (this.properties.asFullyTypedBag.autoRun) {
      this.ifs.run()
    }

    window.redraw_all()
    return file
  }

  loadFile(data: ArrayBuffer | string, args: IFileArgs = {}) {
    return new Promise<FileData>((accept, reject) => {
      accept(this.loadFileSync(data, args))
    })
  }

  draw() {
    for (let sarea of this.screen.sareas) {
      if (sarea.area && (sarea.area as any).draw) {
        ;(sarea.area as any).draw() // XXX
      }
    }
  }

  start() {
    super.start({
      DEBUG: {
        modalEvents: true,
      },
      iconsheet: document.getElementById('iconsheet'),
      icons    : Icons,
    })

    this.loadStartupFile()
  }
}

export function start() {
  console.log('start!')

  let animreq: number | undefined = undefined

  function f() {
    animreq = undefined

    _appstate.draw()
  }

  let ignore_lvl = 0
  window.draw_ignore_push = function () {
    ignore_lvl++
  }
  window.draw_ignore_pop = function () {
    ignore_lvl = Math.max(ignore_lvl - 1, 0)
  }

  window.redraw_all = function () {
    if (animreq || ignore_lvl) {
      return
    }

    animreq = requestAnimationFrame(f)
  }

  window._appstate = new App()
  _appstate.start()

  if (config.AUTOSAVE) {
    window.setInterval(() => {
      _appstate.saveStartupFile()
    }, config.AUTOSAVE_INTERVAL_MS)
  }

  window.redraw_all()
}
