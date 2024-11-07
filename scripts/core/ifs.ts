import {Matrix4, util, Vector2} from '../path.ux/pathux'
import type {App} from './app'

let FVALUE = 0,
  FW = 1,
  FG = 2,
  FTOT = 3

class Point {
  co: Vector2
  constructor(x: number, y: number) {
    this.co = new Vector2().loadXY(x, y)
  }
  copy() {
    const p = new Point(this.co[0], this.co[1])
    return p
  }
}

const projCachering = util.cachering.fromConstructor(Vector2, 512)
const unprojCachering = util.cachering.fromConstructor(Vector2, 512)
export class IFS {
  timerID?: any
  appstate: App
  points: Point[] = []
  size: Vector2 = new Vector2()
  #rand: util.MersenneRandom
  zoom = 1.0
  fdata: Float64Array
  _i = 0

  constructor(appstate: App) {
    this.appstate = appstate
    this.#rand = new util.MersenneRandom()
    this.#rand.seed(0)
  }

  private rand() {
    return this.#rand.random()
    let s = 0
    for (let i = 0; i < 5; i++) {
      s += this.#rand.random()
    }
    return s / 5
  }

  public get running() {
    return this.timerID !== undefined
  }

  get props() {
    return this.appstate.ctx.properties
  }

  run() {
    if (this.timerID !== undefined) {
      console.warn('stopping timer')
      clearInterval(this.timerID)
      this.timerID = undefined
      return false
    }

    console.warn('starting timer')

    this.timerID = setInterval(() => {
      const time = util.time_ms()
      while (util.time_ms() - time < 35) {
        this.step()
      }

      window.redraw_all()
    }, 40)
    return true
  }

  project(p: Vector2): Vector2 {
    p = projCachering.next().load(p)
    p.mulScalar(0.5 * this.zoom)
      .addScalar(0.5)
      .mul(this.size)
    return p
  }

  unproject(p: Vector2): Vector2 {
    p = unprojCachering.next().load(p)
    p.div(this.size)
    p.mulScalar(2.0).subScalar(1.0)
    return p
  }

  step() {
    const image = this.appstate.testImages.images.test1

    if (this.fdata === undefined || this.fdata.length !== image.width * image.height * FTOT) {
      this.fdata = new Float64Array(image.width * image.height * FTOT)
      this.fdata.fill(0)
    }

    this.zoom = this.props.zoom
    this.size.loadXY(image.width, image.height)

    const mat1 = new Matrix4()
    const s1 = this.props.scale1
    mat1.euler_rotate(0, 0, this.props.angle1)
    mat1.scale(s1, s1, s1)
    mat1.translate(this.props.offset1, 0.0, 0.0)

    const mat2 = new Matrix4()
    const s2 = this.props.scale2
    mat2.euler_rotate(0, 0, this.props.angle2)
    mat2.scale(s2, s2, s2)
    mat2.translate(this.props.offset2, 0.0, 0.0)

    const p = this.points.at(-1) ?? new Point(0, 0)

    const p1 = p.copy()
    const p2 = p.copy()

    p1.co.multVecMatrix(mat1)
    p2.co.multVecMatrix(mat2)

    if (this.rand() > 0.5) {
      this.points.push(p1, p2)
    } else {
      this.points.push(p2, p1)
    }

    const idata = image.data
    const size = this.size
    const fdata = this.fdata
    const colorScale = 0.0001 * this.props.colorScale

    for (let i = this.points.length - 2; i < this.points.length; i++) {
      const p = this.points[i]

      const co = this.project(p.co)

      const dx = Math.fract(co[0]) - 0.5
      const dy = Math.fract(co[1]) - 0.5

      co.floor()
      if (co[0] < 0 || co[1] < 0 || co[0] >= size[0] || co[1] >= size[1]) {
        continue
      }

      const fi = co[1] * size[0] + co[0]
      const idx = fi * 4

      //dumb coverage heuristic
      let coverage = 1.0 - Math.sqrt(dx * dx + dy * dy) / Math.sqrt(2.0) //* Math.tent(i * colorScale)
      let f = 1.0
      const f2 = Math.tent(colorScale * 0.001 * fdata[fi + FW])
      //f = f*0.5 + 0.5

      fdata[fi + FVALUE] += f*coverage
      fdata[fi + FG] += f2*coverage
      fdata[fi + FW]++

      const invW = 1.0 / fdata[fi + FW]

      idata[idx] = fdata[fi] * invW * 255
      idata[idx + 1] = fdata[fi + FG] * invW * 255
      idata[idx + 2] = fdata[fi] * invW * 255
      idata[idx + 3] = 255
    }
  }

  reset() {
    console.warn('reset')
    let image = this.appstate.testImages.images.test1
    for (let i = 0; i < image.data.length; i += 4) {
      image.data[i] = 0
      image.data[i + 1] = 0
      image.data[i + 2] = 0
      image.data[i + 3] = 255
    }
    this.points.length = 0
    //this.#rand.seed(0)
  }
}
