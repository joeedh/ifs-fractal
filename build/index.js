import {
  AreaTypes,
  AreaWrangler,
  BoolProperty,
  Button,
  CSSFont,
  Context,
  ContextOverlay,
  Curve1D,
  CurveConstructors,
  DataAPI,
  DataPathError,
  DataStruct,
  EnumProperty,
  ErrorColors,
  EventHandler,
  FlagProperty,
  FloatProperty,
  HashDigest,
  HotKey,
  IconManager,
  IconSheets,
  Icons,
  IntProperty,
  KeyMap,
  Matrix4,
  Menu,
  MersenneRandom,
  MinMax,
  MovingAvg,
  NumberConstraints,
  OldButton,
  PackFlags,
  PropFlags,
  PropSubTypes,
  PropTypes,
  SavedToolDefaults,
  ToolClasses,
  ToolFlags,
  ToolMacro,
  ToolOp,
  ToolProperty as ToolProperty2,
  ToolStack,
  UIBase as UIBase2,
  UndoFlags,
  Vec2Property,
  Vec3Property,
  Vector2,
  Vector3,
  Vector4,
  _setAreaClass,
  _setScreenClass,
  _setTextboxClass,
  aabb_overlap_area,
  areaclasses,
  buildString,
  buildToolSysAPI,
  cachering,
  cmyk_to_rgb,
  color2css as color2css2,
  color2web,
  const_default,
  contextWrangler,
  controller_exports,
  createMenu,
  css2color as css2color2,
  drawRoundBox,
  drawText,
  electron_api_exports,
  eventWasTouch,
  flagThemeUpdate,
  getAreaIntName,
  getFont,
  getIconManager,
  getWranglerScreen,
  haveModal,
  hsv_to_rgb,
  iconSheetFromPackFlag,
  iconmanager,
  initSplineTemplates,
  isMobile,
  isNumber,
  keymap,
  list,
  loadUIData,
  makeDerivedOverlay,
  math_exports,
  measureText,
  measureTextBlock,
  parseValue,
  parsepx as parsepx2,
  popModalLight,
  print_stack as print_stack2,
  pushModalLight,
  pushPointerModal,
  rgb_to_cmyk,
  rgb_to_hsv,
  saveUIData,
  set,
  setAreaTypes,
  setIconManager,
  setIconMap,
  setNotifier,
  setTheme,
  setWranglerScreen,
  startMenu,
  startMenuEventWrangling,
  strhash,
  struct_default,
  styleScrollBars,
  theme,
  time_ms,
  util_exports,
  validateCSSColor as validateCSSColor2,
  validateWebColor,
  web2color
} from "./chunk-AOJSD5TM.js";
import {
  __export,
  __name
} from "./chunk-6V7YOTV2.js";

// scripts/path.ux/scripts/widgets/ui_textbox.js
function myToFixed(s, n) {
  s = s.toFixed(n);
  while (s.endsWith("0")) {
    s = s.slice(0, s.length - 1);
  }
  if (s.endsWith(".")) {
    s = s.slice(0, s.length - 1);
  }
  return s;
}
__name(myToFixed, "myToFixed");
var keymap2 = keymap;
var EnumProperty2 = EnumProperty, PropTypes2 = PropTypes;
var UIBase3 = UIBase2, PackFlags2 = PackFlags, IconSheets2 = IconSheets;
var parsepx3 = parsepx2;
var TextBoxBase = class extends UIBase3 {
  static {
    __name(this, "TextBoxBase");
  }
  static define() {
    return {
      modalKeyEvents: true
    };
  }
};
var TextBox = class extends TextBoxBase {
  static {
    __name(this, "TextBox");
  }
  constructor() {
    super();
    this._editing = false;
    this._width = this.getDefault("width") + "px";
    this._textBoxEvents = true;
    let margin = Math.ceil(3 * this.getDPI());
    this._had_error = false;
    this.decimalPlaces = void 0;
    this.baseUnit = void 0;
    this.displayUnit = void 0;
    this.dom = document.createElement("input");
    this.dom.tabIndex = 0;
    this.dom.setAttribute("tabindex", 0);
    this.dom.setAttribute("tab-index", 0);
    this.dom.style["margin"] = margin + "px";
    this.dom.setAttribute("type", "textbox");
    this.dom.onchange = (e) => {
      this._change(this.dom.value);
    };
    this.radix = 16;
    this.dom.oninput = (e) => {
      this._change(this.dom.value);
    };
    this.shadow.appendChild(this.dom);
    this.dom.addEventListener("focus", (e) => {
      console.log("Textbox focus", this.isModal);
      this._focus = 1;
      if (this.isModal) {
        this._startModal();
        this.setCSS();
      }
    });
    this.dom.addEventListener("blur", (e) => {
      console.log("Textbox blur");
      this._focus = 0;
      if (this._modal) {
        this._endModal(true);
        this.setCSS();
      }
    });
  }
  get startSelected() {
    let b = ("" + this.getAttribute("start-selected")).toLowerCase();
    return b === "yes" || b === "true" || b === "on" || b === "1";
  }
  set startSelected(v) {
    this.setAttribute("start-selected", v ? "true" : "false");
  }
  /** realtime dom attribute getter, defaults to true in absence of attribute*/
  get realtime() {
    let ret = this.getAttribute("realtime");
    if (!ret) {
      return true;
    }
    ret = ret.toLowerCase().trim();
    return ret === "yes" || ret === "true" || ret === "on";
  }
  set realtime(val) {
    this.setAttribute("realtime", val ? "true" : "false");
  }
  get isModal() {
    let ret = this.getAttribute("modal");
    if (!ret) {
      return false;
    }
    ret = ret.toLowerCase().trim();
    return ret === "yes" || ret === "true" || ret === "on";
  }
  set isModal(val) {
    this.setAttribute("modal", val ? "true" : "false");
  }
  _startModal() {
    if (this.startSelected) {
      this.select();
    }
    console.warn("textbox modal");
    if (this._modal) {
      this._endModal(true);
    }
    this._editing = true;
    let ignore2 = 0;
    let finish = /* @__PURE__ */ __name((ok) => {
      this._endModal(ok);
    }, "finish");
    let keydown = /* @__PURE__ */ __name((e) => {
      e.stopPropagation();
      switch (e.keyCode) {
        case keymap2.Enter:
          finish(true);
          break;
        case keymap2.Escape:
          finish(false);
          break;
      }
      return;
      if (ignore2) return;
      let e2 = new KeyboardEvent(e.type, e);
      ignore2 = 1;
      this.dom.dispatchEvent(e2);
      ignore2 = 0;
    }, "keydown");
    this._modal = true;
    this.pushModal({
      on_mousemove: /* @__PURE__ */ __name((e) => {
        e.stopPropagation();
      }, "on_mousemove"),
      on_keydown: keydown,
      on_keypress: keydown,
      on_keyup: keydown,
      on_mousedown: /* @__PURE__ */ __name((e) => {
        e.stopPropagation();
        console.log("mouse down", e, e.x, e.y);
      }, "on_mousedown")
    }, false);
  }
  _flash_focus() {
  }
  get editing() {
    return this._editing;
  }
  _endModal(ok) {
    console.log("textbox end modal");
    this._editing = false;
    this._modal = false;
    this.popModal();
    this.blur();
    if (this.onend) {
      this.onend(ok);
    } else {
      this._updatePathVal(this.dom.value);
    }
    this.blur();
  }
  get tabIndex() {
    return this.dom.tabIndex;
  }
  set tabIndex(val) {
    this.dom.tabIndex = val;
  }
  init() {
    super.init();
    if (!this.hasAttribute("modal")) {
      this.isModal = true;
    }
    this.style["display"] = "flex";
    this.style["width"] = this._width;
    this.setCSS();
  }
  set width(val) {
    if (typeof val === "number") {
      val += "px";
    }
    this._width = val;
    this.style["width"] = val;
  }
  setCSS() {
    super.setCSS();
    this.overrideDefault("background-color", this.getDefault("background-color"));
    this.background = this.getDefault("background-color");
    this.dom.style["margin"] = this.dom.style["padding"] = "0px";
    if (this.getDefault("background-color")) {
      this.dom.style["background-color"] = this.getDefault("background-color");
    }
    this.style["border-radius"] = this.getDefault("border-radius") + "px";
    this.dom.style["border-radius"] = this.getDefault("border-radius") + "px";
    let bwid = this.getDefault("border-width");
    let bcolor = this.getDefault("border-color");
    let bstyle = this.getDefault("border-style");
    let border = `${bwid}px ${bstyle} ${bcolor}`;
    this.style["border"] = border;
    this.style["border-color"] = bcolor;
    if (this._focus) {
      this.dom.style["border"] = `2px dashed ${this.getDefault("focus-border-color")}`;
    } else {
      this.dom.style["border"] = border;
      this.dom.style["border-color"] = bcolor;
    }
    if (this.style["font"]) {
      this.dom.style["font"] = this.style["font"];
    } else {
      this.dom.style["font"] = this.getDefault("DefaultText").genCSS();
      this.dom.style["color"] = this.getDefault("DefaultText").color;
    }
    this.dom.style["width"] = "100%";
    this.dom.style["height"] = "100%";
  }
  updateDataPath() {
    if (!this.ctx || !this.hasAttribute("datapath")) {
      return;
    }
    if (this._focus || this._flashtimer !== void 0 || this._had_error && this._focus) {
      return;
    }
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (val === void 0 || val === null) {
      this.internalDisabled = true;
      return;
    } else {
      this.internalDisabled = false;
    }
    let prop = this.getPathMeta(this.ctx, this.getAttribute("datapath"));
    let text2 = this.text;
    if (!prop) {
      console.error("datapath error " + this.getAttribute("datapath"), val);
      return;
    }
    let is_num = prop.type & (PropTypes2.FLOAT | PropTypes2.INT);
    if (typeof val === "number" && prop.type & (PropTypes2.VEC2 | PropTypes2.VEC3 | PropTypes2.VEC4 | PropTypes2.QUAT)) {
      is_num = true;
    }
    if (is_num) {
      let is_int = prop.type === PropTypes2.INT;
      this.radix = prop.radix;
      let decimalPlaces = this.decimalPlaces !== void 0 ? this.decimalPlaces : prop.decimalPlaces;
      if (this.hasAttribute("decimalPlaces")) {
        decimalPlaces = parseInt(this.getAttribute("decimalPlaces"));
      }
      let baseUnit = this.baseUnit ?? prop.baseUnit;
      if (this.hasAttribute("baseUnit")) {
        baseUnit = this.getAttribute("baseUnit");
      }
      let displayUnit = this.displayUnit ?? prop.displayUnit;
      if (this.hasAttribute("displayUnit")) {
        displayUnit = this.getAttribute("displayUnit");
      }
      if (is_int && this.radix === 2) {
        text2 = val.toString(this.radix);
        text2 = "0b" + text2;
      } else if (is_int && this.radix === 16) {
        text2 += "h";
      } else {
        text2 = buildString(val, baseUnit, decimalPlaces, displayUnit);
      }
    } else if (prop !== void 0 && prop.type === PropTypes2.STRING) {
      text2 = val;
    }
    if (this.text !== text2) {
      this.text = text2;
    }
  }
  update() {
    super.update();
    if (this.dom.style["width"] !== this.style["width"]) {
      this.dom.style["width"] = this.style["width"];
    }
    if (this.dom.style["height"] !== this.style["height"]) {
      this.dom.style["height"] = this.style["height"];
    }
    if (this.hasAttribute("datapath")) {
      this.updateDataPath();
    }
    this.setCSS();
  }
  select() {
    this.dom.select();
  }
  focus() {
    return this.dom.focus();
  }
  blur() {
    return this.dom.blur();
  }
  static define() {
    return {
      tagname: "textbox-x",
      style: "textbox",
      modalKeyEvents: true
    };
  }
  get text() {
    return this.dom.value;
  }
  set text(value) {
    this.dom.value = value;
  }
  _prop_update(prop, text2) {
    let is_num = prop.type & (PropTypes2.FLOAT | PropTypes2.INT);
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (typeof val === "number" && prop.type & (PropTypes2.VEC2 | PropTypes2.VEC3 | PropTypes2.VEC4 | PropTypes2.QUAT)) {
      is_num = true;
    }
    if (is_num) {
      let is_int = prop.type === PropTypes2.INT;
      this.radix = prop.radix;
      let decimalPlaces = this.decimalPlaces !== void 0 ? this.decimalPlaces : prop.decimalPlaces;
      if (this.hasAttribute("decimalPlaces")) {
        decimalPlaces = parseInt(this.getAttribute("decimalPlaces"));
      }
      let baseUnit = this.baseUnit ?? prop.baseUnit;
      if (this.hasAttribute("baseUnit")) {
        baseUnit = this.getAttribute("baseUnit");
      }
      let displayUnit = this.displayUnit ?? prop.displayUnit;
      if (this.hasAttribute("displayUnit")) {
        displayUnit = this.getAttribute("displayUnit");
      }
      if (!isNumber(text2.trim())) {
        this.flash(ErrorColors.ERROR, this.dom, void 0, false);
        this.focus();
        this.dom.focus();
        this._had_error = true;
      } else {
        let val2 = parseValue(text2, baseUnit, displayUnit);
        if (this._had_error) {
          this.flash(ErrorColors.OK, this.dom, void 0, false);
        }
        this._had_error = false;
        this.setPathValue(this.ctx, this.getAttribute("datapath"), val2);
      }
    } else if (prop.type === PropTypes2.STRING) {
      try {
        this.setPathValue(this.ctx, this.getAttribute("datapath"), this.text);
        if (this._had_error) {
          this.flash(ErrorColors.OK, this.dom, void 0, false);
          this.dom.focus();
        }
        this._had_error = false;
      } catch (error2) {
        console.log(error2.stack);
        console.log(error2.message);
        console.warn("textbox error!");
        this.flash(ErrorColors.ERROR, this.dom, void 0, false);
        this.dom.focus();
      }
    }
  }
  _updatePathVal(text2) {
    if (this.hasAttribute("datapath") && this.ctx !== void 0) {
      let prop = this.getPathMeta(this.ctx, this.getAttribute("datapath"));
      console.log(prop);
      if (prop) {
        this._prop_update(prop, text2);
      }
    }
  }
  _change(text2) {
    if (this.realtime) {
      this._updatePathVal(text2);
    }
    if (this.onchange) {
      this.onchange(text2);
    }
  }
};
UIBase3.internalRegister(TextBox);
function checkForTextBox(screen, x, y) {
  let p = screen.pickElement(x, y);
  while (p) {
    if (p.draggable) {
      return true;
    }
    if (p instanceof UIBase3) {
      for (let i = 0; i < 2; i++) {
        let nodes = i ? p.childNodes : p.shadow.childNodes;
        for (let child of nodes) {
          if (child.draggable) {
            return true;
          }
        }
      }
    }
    let ok = p instanceof TextBoxBase;
    ok = ok || p.constructor.define && p.constructor.define().modalKeyEvents;
    if (ok) {
      return true;
    }
    p = p.parentWidget ? p.parentWidget : p.parentNode;
  }
  return false;
}
__name(checkForTextBox, "checkForTextBox");
_setTextboxClass(TextBox);

// scripts/path.ux/scripts/widgets/ui_widgets.js
function myToFixed2(s, n) {
  s = s.toFixed(n);
  while (s.endsWith("0")) {
    s = s.slice(0, s.length - 1);
  }
  if (s.endsWith(".")) {
    s = s.slice(0, s.length - 1);
  }
  return s;
}
__name(myToFixed2, "myToFixed");
var keymap3 = keymap;
var EnumProperty3 = EnumProperty, PropTypes3 = PropTypes;
var UIBase4 = UIBase2, PackFlags3 = PackFlags, IconSheets3 = IconSheets;
var parsepx4 = parsepx2;
var IconLabel = class extends UIBase4 {
  static {
    __name(this, "IconLabel");
  }
  constructor() {
    super();
    this._icon = -1;
    this.iconsheet = 1;
  }
  get icon() {
    return this._icon;
  }
  set icon(id2) {
    this._icon = id2;
    this.setCSS();
  }
  static define() {
    return {
      tagname: "icon-label-x"
    };
  }
  init() {
    super.init();
    this.style["display"] = "flex";
    this.style["margin"] = this.style["padding"] = "0px";
    this.setCSS();
  }
  setCSS() {
    let size = iconmanager.getTileSize(this.iconsheet);
    iconmanager.setCSS(this.icon, this);
    this.style["width"] = size + "px";
    this.style["height"] = size + "px";
  }
};
UIBase4.internalRegister(IconLabel);
var ValueButtonBase = class extends OldButton {
  static {
    __name(this, "ValueButtonBase");
  }
  constructor() {
    super();
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    if (this.ctx && this.hasAttribute("datapath")) {
      this.setPathValue(this.ctx, this.getAttribute("datapath"), this._value);
    }
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) return;
    if (this.ctx === void 0) return;
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (val === void 0) {
      let redraw = !this.disabled;
      this.internalDisabled = true;
      if (redraw) this._redraw();
      return;
    } else {
      let redraw = this.disabled;
      this.internalDisabled = false;
      if (redraw) this._redraw();
    }
    if (val !== this._value) {
      this._value = val;
      this.updateWidth();
      this._repos_canvas();
      this._redraw();
      this.setCSS();
    }
  }
  update() {
    this.updateDataPath();
    super.update();
  }
};
var Check = class extends UIBase4 {
  static {
    __name(this, "Check");
  }
  constructor() {
    super();
    this._checked = false;
    this._highlight = false;
    this._focus = false;
    let shadow = this.shadow;
    let span = document.createElement("span");
    span.setAttribute("class", "checkx");
    span.style["display"] = "flex";
    span.style["flex-direction"] = "row";
    span.style["margin"] = span.style["padding"] = "0px";
    let sheet = 0;
    let size = iconmanager.getTileSize(0);
    let check = this.canvas = document.createElement("canvas");
    this.g = check.getContext("2d");
    check.setAttribute("id", check._id);
    check.setAttribute("name", check._id);
    let mdown = /* @__PURE__ */ __name((e) => {
      this._highlight = false;
      this.checked = !this.checked;
    }, "mdown");
    let mup = /* @__PURE__ */ __name((e) => {
      this._highlight = false;
      this.blur();
      this._redraw();
    }, "mup");
    let mover = /* @__PURE__ */ __name((e) => {
      this._highlight = true;
      this._redraw();
    }, "mover");
    let mleave = /* @__PURE__ */ __name((e) => {
      this._highlight = false;
      this._redraw();
    }, "mleave");
    span.addEventListener("pointerover", mover, { passive: true });
    span.addEventListener("mousein", mover, { passive: true });
    span.addEventListener("mouseleave", mleave, { passive: true });
    span.addEventListener("pointerout", mleave, { passive: true });
    this.addEventListener("blur", (e) => {
      this._highlight = this._focus = false;
      this._redraw();
    });
    this.addEventListener("focusin", (e) => {
      this._focus = true;
      this._redraw();
    });
    this.addEventListener("focus", (e) => {
      this._focus = true;
      this._redraw();
    });
    span.addEventListener("pointerdown", mdown, { passive: true });
    span.addEventListener("pointerup", mup, { passive: true });
    span.addEventListener("pointercancel", mup, { passive: true });
    this.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case keymap3["Escape"]:
          this._highlight = void 0;
          this._redraw();
          e.preventDefault();
          e.stopPropagation();
          this.blur();
          break;
        case keymap3["Enter"]:
        case keymap3["Space"]:
          this.checked = !this.checked;
          e.preventDefault();
          e.stopPropagation();
          break;
      }
    });
    this.checkbox = check;
    span.appendChild(check);
    let label = this._label = document.createElement("label");
    label.setAttribute("class", "checkx");
    span.setAttribute("class", "checkx");
    label.style["align-self"] = "center";
    let side = this.getDefault("CheckSide");
    if (side === "right") {
      span.prepend(label);
    } else {
      span.appendChild(label);
    }
    shadow.appendChild(span);
  }
  get internalDisabled() {
    return super.internalDisabled;
  }
  set internalDisabled(val) {
    if (!!this.internalDisabled === !!val) {
      return;
    }
    super.internalDisabled = val;
    this._redraw();
  }
  get value() {
    return this.checked;
  }
  set value(v) {
    this.checked = v;
  }
  get checked() {
    return this._checked;
  }
  set checked(v) {
    v = !!v;
    if (this._checked !== v) {
      this._checked = v;
      this.setCSS();
      this._redraw();
      if (this.onclick) {
        this.onclick(v);
      }
      if (this.onchange) {
        this.onchange(v);
      }
      if (this.hasAttribute("datapath")) {
        this.setPathValue(this.ctx, this.getAttribute("datapath"), this._checked);
      }
    }
  }
  get label() {
    return this._label.textContent;
  }
  set label(l) {
    this._label.textContent = l;
  }
  static define() {
    return {
      tagname: "check-x",
      style: "checkbox",
      parentStyle: "button"
    };
  }
  init() {
    this.tabIndex = 1;
    this.setAttribute("class", "checkx");
    let style = document.createElement("style");
    let color = this.getDefault("focus-border-color");
    style.textContent = `
      .checkx:focus {
        outline : none;
      }
    `;
    this.prepend(style);
  }
  setCSS() {
    this._label.style["font"] = this.getDefault("DefaultText").genCSS();
    this._label.style["color"] = this.getDefault("DefaultText").color;
    this._label.style["font"] = "normal 14px poppins";
    super.setCSS();
    this.style["background-color"] = "rgba(0,0,0,0)";
  }
  updateDataPath() {
    if (!this.getAttribute("datapath")) {
      return;
    }
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    let redraw = false;
    if (val === void 0) {
      this.internalDisabled = true;
      return;
    } else {
      redraw = this.internalDisabled;
      this.internalDisabled = false;
    }
    val = !!val;
    redraw = redraw || !!this._checked !== !!val;
    if (redraw) {
      this._checked = val;
      this._repos_canvas();
      this.setCSS();
      this._redraw();
    }
  }
  _repos_canvas() {
  }
  _redraw() {
    if (this.canvas === void 0) {
      this._updatekey = "";
      return;
    }
    let canvas = this.canvas, g = this.g;
    let dpi = UIBase4.getDPI();
    let tilesize = iconmanager.getTileSize(0);
    let pad = this.getDefault("padding");
    let csize = tilesize + pad * 2;
    canvas.style["margin"] = "2px";
    canvas.style["width"] = csize + "px";
    canvas.style["height"] = csize + "px";
    csize = ~~(csize * dpi + 0.5);
    tilesize = ~~(tilesize * dpi + 0.5);
    canvas.width = csize;
    canvas.height = csize;
    g.clearRect(0, 0, canvas.width, canvas.height);
    g.beginPath();
    g.rect(0, 0, canvas.width, canvas.height);
    g.fill();
    let color;
    if (!this._checked && this._highlight) {
      color = this.getDefault("BoxHighlight");
    }
    drawRoundBox(this, canvas, g, void 0, void 0, void 0, void 0, color);
    if (this._checked) {
      let x = (csize - tilesize) * 0.5, y = (csize - tilesize) * 0.5;
      iconmanager.canvasDraw(this, canvas, g, Icons.LARGE_CHECK, x, y);
    }
    if (this._focus) {
      color = this.getDefault("focus-border-color");
      g.lineWidth *= dpi;
      drawRoundBox(this, canvas, g, void 0, void 0, void 0, "stroke", color);
    }
  }
  updateDPI() {
    let dpi = UIBase4.getDPI();
    if (dpi !== this._last_dpi) {
      this._last_dpi = dpi;
      this._redraw();
    }
  }
  update() {
    super.update();
    this.updateDPI();
    let ready = getIconManager().isReady(0);
    if (this.hasAttribute("datapath")) {
      this.updateDataPath();
    }
    let updatekey = this.getDefault("DefaultText").hash();
    updatekey += this._checked + ":" + this._label.textContent;
    updatekey += ":" + ready;
    if (updatekey !== this._updatekey) {
      this._repos_canvas();
      this.setCSS();
      this._updatekey = updatekey;
      this._redraw();
    }
  }
};
UIBase4.internalRegister(Check);
var IconButton = class extends UIBase4 {
  static {
    __name(this, "IconButton");
  }
  constructor() {
    super();
    this._customIcon = void 0;
    this._pressed = false;
    this._highlight = false;
    this._draw_pressed = true;
    this._icon = -1;
    this._icon_pressed = void 0;
    this.iconsheet = 0;
    this.drawButtonBG = true;
    this._extraIcon = void 0;
    this.extraDom = void 0;
    this.dom = document.createElement("div");
    this.shadow.appendChild(this.dom);
    this._last_iconsheet = void 0;
    this.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case keymap3["Enter"]:
        case keymap3["Space"]:
          this.click();
          break;
      }
    });
  }
  click() {
    if (this._onpress) {
      let rect = this.getClientRects();
      let x = rect.x + rect.width * 0.5;
      let y = rect.y + rect.height * 0.5;
      let e = { x, y, stopPropagation: /* @__PURE__ */ __name(() => {
      }, "stopPropagation"), preventDefault: /* @__PURE__ */ __name(() => {
      }, "preventDefault") };
      this._onpress(e);
    }
    super.click();
  }
  get customIcon() {
    return this._customIcon;
  }
  set customIcon(domImage) {
    this._customIcon = domImage;
    this.setCSS();
  }
  get icon() {
    return this._icon;
  }
  set icon(val) {
    this._icon = val;
    this.setCSS();
  }
  static define() {
    return {
      tagname: "iconbutton-x",
      style: "iconbutton"
    };
  }
  _on_press() {
    this._pressed = true;
    this.setCSS();
  }
  _on_depress() {
    this._pressed = false;
    this.setCSS();
  }
  updateDefaultSize() {
  }
  setCSS() {
    super.setCSS();
    let def;
    let pstyle = this.getDefault("depressed");
    let hstyle = this.getDefault("highlight");
    this.noMarginsOrPadding();
    if (this._pressed && this._draw_pressed) {
      def = /* @__PURE__ */ __name((k) => this.getSubDefault("depressed", k), "def");
    } else if (this._highlight) {
      def = /* @__PURE__ */ __name((k) => this.getSubDefault("highlight", k), "def");
    } else {
      def = /* @__PURE__ */ __name((k) => this.getDefault(k), "def");
    }
    let loadstyle = /* @__PURE__ */ __name((key, addpx) => {
      let val = def(key);
      if (addpx) {
        val = ("" + val).trim();
        if (!val.toLowerCase().endsWith("px")) {
          val += "px";
        }
      }
      this.style[key] = val;
    }, "loadstyle");
    let keys = [
      "margin",
      "padding",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-botton",
      "padding-left",
      "padding-bottom",
      "padding-top",
      "padding-right",
      "border-radius"
    ];
    for (let k of keys) {
      loadstyle(k, true);
    }
    loadstyle("background-color", false);
    loadstyle("color", false);
    let border = `${def("border-width", true)} ${def("border-style", false)} ${def("border-color", false)}`;
    this.style["border"] = border;
    let w = this.getDefault("width");
    let size = iconmanager.getTileSize(this.iconsheet);
    w = size;
    this.style["width"] = w + "px";
    this.style["height"] = w + "px";
    this.dom.style["width"] = w + "px";
    this.dom.style["height"] = w + "px";
    this.dom.style["margin"] = this.dom.style["padding"] = "0px";
    this.style["display"] = "flex";
    this.style["align-items"] = "center";
    if (this._customIcon) {
      this.dom.style["background-image"] = `url("${this._customIcon.src}")`;
      this.dom.style["background-size"] = "contain";
      this.dom.style["background-repeat"] = "no-repeat";
    } else {
      let icon = this.icon;
      if (this._pressed && this._icon_pressed !== void 0) {
        icon = this._icon_pressed;
      }
      iconmanager.setCSS(icon, this.dom, this.iconsheet);
    }
    if (this._extraIcon !== void 0) {
      let dom;
      if (!this.extraDom) {
        this.extraDom = dom = document.createElement("div");
        this.shadow.appendChild(dom);
      } else {
        dom = this.extraDom;
      }
      dom.style["position"] = "absolute";
      dom.style["margin"] = dom.style["padding"] = "0px";
      dom.style["pointer-events"] = "none";
      dom.style["width"] = size + "px";
      dom.style["height"] = size + "px";
      iconmanager.setCSS(this._extraIcon, dom, this.iconsheet);
    } else if (this.extraDom) {
      this.extraDom.remove();
    }
  }
  init() {
    super.init();
    let press = /* @__PURE__ */ __name((e) => {
      e.stopPropagation();
      e.preventDefault();
      if (this.modalRunning) {
        this.popModal();
      }
      if (!eventWasTouch(e) && e.button !== 0) {
        return;
      }
      if (1) {
        let this2 = this;
        this.pushModal({
          on_mouseup(e2) {
            if (this2.onclick && eventWasTouch(e2)) {
              this2.onclick();
            }
            this.end();
          },
          on_touchcancel(e2) {
            this.on_mouseup(e2);
            this.end();
          },
          on_touchend(e2) {
            this.on_mouseup(e2);
            this.end();
          },
          on_keydown(e2) {
            this.end();
          },
          end() {
            if (this2.modalRunning) {
              this2.popModal();
              this2._on_depress(e);
              this2.setCSS();
            }
          }
        });
      }
      this._on_press(e);
    }, "press");
    let depress = /* @__PURE__ */ __name((e) => {
      e.stopPropagation();
      e.preventDefault();
      this._on_depress();
      this.setCSS();
    }, "depress");
    let high2 = /* @__PURE__ */ __name((e) => {
      this._highlight = true;
      this.setCSS();
    }, "high");
    let unhigh = /* @__PURE__ */ __name((e) => {
      this._highlight = false;
      this.setCSS();
    }, "unhigh");
    this.tabIndex = 0;
    this.addEventListener("mouseover", high2);
    this.addEventListener("mouseexit", unhigh);
    this.addEventListener("mouseleave", unhigh);
    this.addEventListener("focus", high2);
    this.addEventListener("blur", unhigh);
    this.addEventListener("mousedown", press, { capture: true });
    this.addEventListener("mouseup", depress, { capture: true });
    this.setCSS();
    this.dom.style["pointer-events"] = "none";
  }
  update() {
    super.update();
    if (this.iconsheet !== this._last_iconsheet) {
      this.setCSS();
      this._last_iconsheet = this.iconsheet;
    }
  }
  _getsize() {
    let margin = this.getDefault("padding");
    return iconmanager.getTileSize(this.iconsheet) + margin * 2;
  }
};
UIBase4.internalRegister(IconButton);
var IconCheck = class extends IconButton {
  static {
    __name(this, "IconCheck");
  }
  constructor() {
    super();
    this._checked = void 0;
    this._drawCheck = void 0;
  }
  get drawCheck() {
    let ret = this._drawCheck;
    ret = ret === void 0 ? this.getDefault("drawCheck") : ret;
    ret = ret === void 0 ? true : ret;
    return ret;
  }
  set drawCheck(val) {
    val = !!val;
    if (val && this.packflag & PackFlags3.HIDE_CHECK_MARKS) {
      this.packflag &= ~PackFlags3.HIDE_CHECK_MARKS;
    }
    let old = !!this.drawCheck;
    this._drawCheck = val;
    if (val !== old) {
      this.updateDrawCheck();
      this.setCSS();
    }
  }
  click() {
    super.click();
    this.checked ^= true;
  }
  get icon() {
    return this._icon;
  }
  set icon(val) {
    this._icon = val;
    this.setCSS();
  }
  get checked() {
    return this._checked;
  }
  set checked(val) {
    if (!!val !== !!this._checked) {
      this._checked = val;
      this._updatePressed(!!val);
      this.setCSS();
      if (this.onchange) {
        this.onchange(val);
      }
    }
  }
  get noEmboss() {
    let ret = this.getAttribute("no-emboss");
    if (!ret) {
      return false;
    }
    ret = ret.toLowerCase().trim();
    return ret === "true" || ret === "yes" || ret === "on";
  }
  set noEmboss(val) {
    this.setAttribute("no-emboss", val ? "true" : "false");
  }
  static define() {
    return {
      tagname: "iconcheck-x",
      style: "iconcheck",
      parentStyle: "iconbutton"
    };
  }
  _updatePressed(val) {
    if (this._icon_pressed) {
      this._draw_pressed = false;
    }
    this._pressed = val;
    this.setCSS();
  }
  _on_depress() {
    return;
  }
  _on_press() {
    this.checked ^= true;
    if (this.hasAttribute("datapath")) {
      this.setPathValue(this.ctx, this.getAttribute("datapath"), !!this.checked);
    }
    this.setCSS();
  }
  updateDefaultSize() {
  }
  _calcUpdateKey() {
    return super._calcUpdateKey() + ":" + this._icon;
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath") || !this.ctx) {
      return;
    }
    if (this._icon < 0) {
      let rdef;
      try {
        rdef = this.ctx.api.resolvePath(this.ctx, this.getAttribute("datapath"));
      } catch (error2) {
        if (error2 instanceof DataPathError) {
          return;
        } else {
          throw error2;
        }
      }
      if (rdef !== void 0 && rdef.prop) {
        let icon, icon2, title;
        if (rdef.prop.flag & PropFlags.NO_UNDO) {
          this.setUndo(false);
        } else {
          this.setUndo(true);
        }
        if (rdef.subkey && (rdef.prop.type === PropTypes3.FLAG || rdef.prop.type === PropTypes3.ENUM)) {
          icon = rdef.prop.iconmap[rdef.subkey];
          icon2 = rdef.prop.iconmap2[rdef.subkey];
          title = rdef.prop.descriptions[rdef.subkey];
          if (!title && rdef.subkey.length > 0) {
            title = rdef.subkey;
            title = title[0].toUpperCase() + title.slice(1, title.length).toLowerCase();
          }
        } else {
          icon2 = rdef.prop.icon2;
          icon = rdef.prop.icon;
          title = rdef.prop.description;
        }
        if (icon2 !== void 0 && icon2 !== -1) {
          this._icon_pressed = icon;
          icon = icon2;
        }
        if (icon !== void 0 && icon !== this.icon)
          this.icon = icon;
        if (title)
          this.description = title;
      }
    }
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (val === void 0) {
      this.internalDisabled = true;
      return;
    } else {
      this.internalDisabled = false;
    }
    val = !!val;
    if (val !== !!this._checked) {
      this._checked = val;
      this._updatePressed(!!val);
      this.setCSS();
    }
  }
  updateDrawCheck() {
    if (this.drawCheck) {
      this._extraIcon = this._checked ? Icons.ENUM_CHECKED : Icons.ENUM_UNCHECKED;
    } else {
      this._extraIcon = void 0;
    }
  }
  update() {
    if (this.packflag & PackFlags3.HIDE_CHECK_MARKS) {
      this.drawCheck = false;
    }
    this.updateDrawCheck();
    if (this.hasAttribute("datapath")) {
      this.updateDataPath();
    }
    super.update();
  }
  _getsize() {
    let margin = this.getDefault("padding");
    return iconmanager.getTileSize(this.iconsheet) + margin * 2;
  }
  setCSS() {
    this.updateDrawCheck();
    super.setCSS();
  }
};
UIBase4.internalRegister(IconCheck);
var Check1 = class extends Button {
  static {
    __name(this, "Check1");
  }
  constructor() {
    super();
    this._namePad = 40;
    this._value = void 0;
  }
  static define() {
    return {
      tagname: "check1-x",
      parentStyle: "button"
    };
  }
  _redraw() {
    let dpi = this.getDPI();
    let box = 40;
    drawRoundBox(this, this.dom, this.g, box);
    let ts = this.getDefault("DefaultText").size;
    let text2 = this._genLabel();
    let tw = measureText(this, text2, this.dom, this.g).width;
    let cx = this.dom.width / 2 - tw / 2;
    let cy = this.dom.height / 2;
    drawText(this, box, cy + ts / 2, text2, {
      canvas: this.dom,
      g: this.g
    });
  }
};
UIBase4.internalRegister(Check1);

// scripts/path.ux/scripts/core/ui.js
var _ui = void 0;
var PropFlags2 = PropFlags;
var PropSubTypes2 = PropSubTypes;
var EnumProperty4 = EnumProperty;
var Vector22 = Vector2, UIBase5 = UIBase2, PackFlags4 = PackFlags, PropTypes4 = PropTypes;
var Label = class extends UIBase2 {
  static {
    __name(this, "Label");
  }
  constructor() {
    super();
    this._label = "";
    this._lastText = "";
    this.dom = document.createElement("div");
    this.dom.setAttribute("class", "_labelx");
    let style = document.createElement("style");
    style.textContent = `
      div._labelx::selection {
        color: none;
        background: none;
         -webkit-user-select:none;
         user-select:none;
      }
    `;
    this.shadow.appendChild(style);
    this.shadow.appendChild(this.dom);
    this.font = "LabelText";
  }
  get font() {
    return this._font;
  }
  /**Set a font defined in ui_base.defaults
   e.g. DefaultText*/
  set font(fontDefaultName) {
    if (typeof fontDefaultName === "string") {
      this._font = this.getDefault(fontDefaultName);
      if (!this._font) {
        console.warn("Invalid font", fontDefaultName);
      }
    } else if (typeof fontDefaultName === "object" && fontDefaultName instanceof CSSFont) {
      this._font = fontDefaultName;
    } else {
      console.warn("Invalid font", fontDefaultName);
    }
    this._updateFont();
  }
  get text() {
    return this._label;
  }
  set text(text2) {
    this._label = text2;
    if (!this.hasAttribute("datapath")) {
      this.dom.innerText = text2;
    }
  }
  static define() {
    return {
      tagname: "label-x",
      style: "label"
    };
  }
  init() {
    this.dom.style["width"] = "max-content";
  }
  setCSS() {
    super.setCSS(false);
    this.setBoxCSS();
  }
  on_disabled() {
    super.on_disabled();
    this._enabled_font = this.font;
    this.font = "DefaultText";
    this._updateFont();
  }
  on_enabled() {
    super.on_enabled();
    this.font = this._enabled_font;
    this._updateFont();
  }
  _updateFont() {
    let font = this._font;
    if (!font) return;
    this.dom.style["font"] = font.genCSS();
    this.dom.style["color"] = font.color;
  }
  updateDataPath() {
    if (this.ctx === void 0) {
      return;
    }
    let path = this.getAttribute("datapath");
    let prop = this.getPathMeta(this.ctx, path);
    let val = this.getPathValue(this.ctx, path);
    if (val === void 0) {
      return;
    }
    if (prop.type & (PropTypes4.INT | PropTypes4.FLOAT)) {
      val = buildString(val, prop.baseUnit, prop.decimalPlaces, prop.displayUnit);
    }
    val = "" + this._label + " " + val;
    if (val !== this._lastText) {
      this._lastText = val;
      this.dom.innerText = val;
    }
  }
  update() {
    let key = "";
    if (this._font !== void 0 && this._font instanceof CSSFont) {
      key += this._font.genKey();
    }
    if (key !== this._last_font) {
      this._last_font = key;
      this._updateFont();
    }
    this.dom.style["pointer-events"] = this.style["pointer-events"];
    if (this.hasAttribute("datapath")) {
      this.updateDataPath();
    }
  }
};
UIBase2.internalRegister(Label);
var Container = class _Container extends UIBase2 {
  static {
    __name(this, "Container");
  }
  constructor() {
    super();
    this.dataPrefix = "";
    this.massSetPrefix = "";
    this.inherit_packflag = 0;
    let style = this.styletag = document.createElement("style");
    style.textContent = `
    `;
    this.shadow.appendChild(style);
    this.reversed = false;
    this._prefixstack = [];
    this._mass_prefixstack = [];
  }
  noUndo() {
    this.setUndo(false);
    return this;
  }
  set background(bg) {
    this.__background = bg;
    this.styletag.textContent = `div.containerx {
        background-color : ${bg};
      }
    `;
    this.style["background-color"] = bg;
  }
  get children() {
    let list4 = [];
    this._forEachChildWidget((n) => {
      list4.push(n);
    });
    return list4;
  }
  static define() {
    return {
      tagname: "container-x"
    };
  }
  /** recursively change path prefix for all children*/
  changePathPrefix(newprefix) {
    let prefix = this.dataPrefix.trim();
    this.dataPrefix = newprefix;
    if (prefix.length > 0) {
      prefix += ".";
    }
    let rec = /* @__PURE__ */ __name((n, con) => {
      if (n instanceof _Container && n !== this) {
        if (n.dataPrefix.startsWith(prefix)) {
          n.dataPrefix = n.dataPath.slice(prefix.length, n.dataPrefix.length);
          n.dataPrefix = con._joinPrefix(n.dataPrefix);
          con = n;
        }
      }
      if (n.hasAttribute("datapath")) {
        let path = n.getAttribute("datapath");
        if (path.startsWith(prefix)) {
          path = path.slice(prefix.length, path.length);
          path = con._joinPrefix(path);
          n.setAttribute("datapath", path);
          n.description = n.description;
        }
      }
      n._forEachChildWidget((n2) => {
        rec(n2, con);
      });
    }, "rec");
    rec(this, this);
  }
  reverse() {
    this.reversed ^= true;
    return this;
  }
  pushMassSetPrefix(val) {
    this._mass_prefixstack.push(this.massSetPrefix);
    this.massSetPrefix = val;
    return this;
  }
  pushDataPrefix(val) {
    this._prefixstack.push(this.dataPrefix);
    this.dataPrefix = val;
    return this;
  }
  popDataPrefix() {
    this.dataPrefix = this._prefixstack.pop();
    return this;
  }
  popMassSetPrefix() {
    this.massSetPrefix = this._mass_prefixstack.pop();
    return this;
  }
  saveData() {
    if (this.scrollTop || this.scrollLeft) {
      return {
        scrollTop: this.scrollTop,
        scrollLeft: this.scrollLeft
      };
    } else {
      return {};
    }
  }
  loadData(obj) {
    if (!obj) return;
    let x = obj.scrollLeft || 0;
    let y = obj.scrollTop || 0;
    this.doOnce(() => {
      this.scrollTo(x, y);
    }, 12);
  }
  init() {
    this.style["display"] = "flex";
    this.style["flex-direction"] = this.reversed ? "column-reverse" : "column";
    this.style["flex-wrap"] = "nowrap";
    this.style["flex-grow"] = "" + this.getDefault("flex-grow", void 0, "1");
    this.setCSS();
    super.init();
    this.setAttribute("class", "containerx");
  }
  /** Returns previous icon flags */
  useIcons(enabled_or_sheet = true) {
    let enabled = !!enabled_or_sheet;
    let mask = PackFlags4.USE_ICONS | PackFlags4.SMALL_ICON | PackFlags4.LARGE_ICON;
    mask = mask | PackFlags4.CUSTOM_ICON_SHEET;
    mask = mask | 255 << PackFlags4.CUSTOM_ICON_SHEET_START;
    let previous = this.packflag & mask;
    if (!enabled) {
      this.packflag &= ~PackFlags4.USE_ICONS;
      this.inherit_packflag &= ~PackFlags4.USE_ICONS;
      return previous;
    }
    let sheet = enabled_or_sheet;
    if (sheet === true) {
      sheet = PackFlags4.SMALL_ICON;
    } else if (sheet === 1) {
      sheet = PackFlags4.LARGE_ICON;
    } else {
      sheet = PackFlags4.CUSTOM_ICON_SHEET | sheet << PackFlags4.CUSTOM_ICON_SHEET_START;
    }
    this.packflag &= ~(PackFlags4.SMALL_ICON | PackFlags4.LARGE_ICON | PackFlags4.CUSTOM_ICON_SHEET);
    this.packflag &= ~(255 << PackFlags4.CUSTOM_ICON_SHEET_START);
    this.packflag |= PackFlags4.USE_ICONS | sheet;
    this.inherit_packflag |= PackFlags4.USE_ICONS | sheet;
    return previous;
  }
  /**
   *
   * @param mode: flexbox wrap mode, can be wrap, nowrap, or wrap-reverse
   * @returns {Container}
   */
  wrap(mode = "wrap") {
    this.style["flex-wrap"] = mode;
    return this;
  }
  noMarginsOrPadding() {
    super.noMarginsOrPadding();
    let keys = ["margin", "padding", "margin-block-start", "margin-block-end"];
    keys = keys.concat(["padding-block-start", "padding-block-end"]);
    for (let k of keys) {
      this.style[k] = "0px";
    }
    return this;
  }
  setCSS() {
    let rest = "";
    let add = /* @__PURE__ */ __name((style) => {
      if (!this.hasDefault(style)) {
        return;
      }
      let val = this.getDefault(style);
      if (val !== void 0) {
        rest += `  ${style} = ${val};
`;
        this.style[style] = val;
      }
    }, "add");
    add("border-radius");
    add("border-width");
    add("border-top");
    add("border-bottom");
    add("border-left");
    add("border-right");
    this.styletag.textContent = `div.containerx {
        background-color : ${this.getDefault("background-color")};
        ${rest}
      }
      `;
  }
  overrideDefault(key, val) {
    super.overrideDefault(key, val);
    this.setCSS();
    return this;
  }
  /*
  * shorthand for:
  *
  * .row().noMarginsOrPadding().oneAxisPadding()
  * */
  strip(themeClass_or_obj = "strip", margin1 = this.getDefault("oneAxisPadding"), margin2 = 1, horiz = void 0) {
    let themeClass = themeClass_or_obj;
    if (typeof themeClass_or_obj === "object") {
      let obj = themeClass_or_obj;
      themeClass = obj.themeClass ?? "strip";
      margin1 = obj.margin1 ?? margin1;
      margin2 = obj.margin2 ?? 1;
      horiz = obj.horiz;
    }
    if (horiz === void 0) {
      horiz = this instanceof RowFrame;
      horiz = horiz || this.style["flex-direction"] === "row";
    }
    let flag = horiz ? PackFlags4.STRIP_HORIZ : PackFlags4.STRIP_VERT;
    let strip = horiz ? this.row() : this.col();
    if (typeof margin1 !== "number") {
      throw new Error("margin1 was not a number");
    }
    if (typeof margin2 !== "number") {
      throw new Error("margin2 was not a number");
    }
    strip.packflag |= flag;
    strip.dataPrefix = this.dataPrefix;
    strip.massSetPrefix = this.massSetPrefix;
    if (themeClass in theme) {
      strip.overrideClass(themeClass);
      strip.background = strip.getDefault("background-color");
      strip.setCSS();
      strip.overrideClass(themeClass);
      let lastkey;
      strip.update.after(function() {
        let bradius = strip.getDefault("border-radius");
        let bline = strip.getDefault("border-width");
        let bstyle = strip.getDefault("border-style") || "solid";
        let padding = strip.getDefault("padding");
        let bcolor = strip.getDefault("border-color") || "rgba(0,0,0,0)";
        let margin = strip.getDefault("margin") || 0;
        bline = bline === void 0 ? 0 : bline;
        bradius = bradius === void 0 ? 0 : bradius;
        padding = padding === void 0 ? 5 : padding;
        let bg = strip.getDefault("background-color");
        let key = "" + bradius + ":" + bline + ":" + bg + ":" + padding + ":";
        key += bstyle + ":" + padding + ":" + bcolor + ":" + margin;
        if (key !== lastkey) {
          lastkey = key;
          strip.oneAxisPadding(margin1 + padding, margin2 + padding);
          strip.setCSS();
          strip.background = bg;
          strip.style["margin"] = "" + margin + "px";
          strip.style["border"] = `${bline}px ${bstyle} ${bcolor}`;
          strip.style["border-radius"] = "" + bradius + "px";
        }
      });
    } else {
      console.warn(this.constructor.name + ".strip(): unknown theme class " + themeClass);
    }
    return strip;
  }
  /**
   * tries to set margin along one axis only in smart manner
   * */
  oneAxisMargin(m = this.getDefault("oneAxisMargin"), m2 = 0) {
    this.style["margin-top"] = this.style["margin-bottom"] = "" + m + "px";
    this.style["margin-left"] = this.style["margin-right"] = "" + m2 + "px";
    return this;
  }
  /**
   * tries to set padding along one axis only in smart manner
   * */
  oneAxisPadding(axisPadding = this.getDefault("oneAxisPadding"), otherPadding = 0) {
    this.style["padding-top"] = this.style["padding-bottom"] = "" + axisPadding + "px";
    this.style["padding-left"] = this.style["padding-right"] = "" + otherPadding + "px";
    return this;
  }
  setMargin(m) {
    this.style["margin"] = m + "px";
    return this;
  }
  setPadding(m) {
    this.style["padding"] = m + "px";
    return this;
  }
  setSize(width, height) {
    if (width !== void 0) {
      if (typeof width == "number")
        this.style["width"] = this.div.style["width"] = ~~width + "px";
      else
        this.style["width"] = this.div.style["width"] = width;
    }
    if (height !== void 0) {
      if (typeof height == "number")
        this.style["height"] = this.div.style["height"] = ~~height + "px";
      else
        this.style["height"] = this.div.style["height"] = height;
    }
    return this;
  }
  save() {
  }
  load() {
  }
  saveVisibility() {
    localStorage[this.storagePrefix + "_settings"] = JSON.stringify(this);
    return this;
  }
  loadVisibility() {
    let key = this.storagePrefix + "_settings";
    let ok = true;
    if (key in localStorage) {
      console.log("loading UI visibility state. . .");
      try {
        this.loadJSON(JSON.parse(localStorage[key]));
      } catch (error2) {
        print_stack2(error2);
        ok = false;
      }
    }
    return ok;
  }
  toJSON() {
    let ret = {
      opened: !this.closed
    };
    return Object.assign(super.toJSON(), ret);
  }
  _ondestroy() {
    this._forEachChildWidget((n) => {
      n._ondestroy();
    });
    super._ondestroy();
  }
  loadJSON(obj) {
    return this;
  }
  redrawCurves() {
    throw new Error("Implement me (properly!)");
    if (this.closed)
      return;
    for (let cw of this.curve_widgets) {
      cw.draw();
    }
  }
  listen() {
    window.setInterval(() => {
      this.update();
    }, 150);
  }
  update() {
    super.update();
  }
  appendChild(child) {
    if (child instanceof UIBase2) {
      child.ctx = this.ctx;
      child.parentWidget = this;
      this.shadow.appendChild(child);
      if (child.onadd) {
        child.onadd();
      }
      return;
    }
    return super.appendChild(child);
  }
  clear(trigger_on_destroy = true) {
    for (let child of this.children) {
      if (child instanceof UIBase2) {
        child.remove(trigger_on_destroy);
      }
    }
  }
  removeChild(child, trigger_on_destroy = true) {
    let ret = super.removeChild(child);
    if (child.on_remove) {
      child.on_remove();
    }
    if (trigger_on_destroy && child.on_destroy) {
      child.on_destroy();
    }
    child.parentWidget = void 0;
    return ret;
  }
  prepend(child) {
    if (child instanceof UIBase5) {
      this._prepend(child);
    } else {
      super.prepend(child);
    }
  }
  //*
  _prepend(child) {
    return this._add(child, true);
  }
  //*/
  add(child) {
    return this._add(child);
  }
  insert(i, ch) {
    ch.parentWidget = this;
    ch.ctx = this;
    if (i >= this.shadow.childNodes.length) {
      this.add(ch);
    } else {
      this.shadow.insertBefore(ch, list(this.children)[i]);
    }
    if (ch.onadd) {
      ch.onadd();
    }
  }
  _add(child, prepend = false) {
    if (child instanceof NodeList) {
      throw new Error("eek!");
    }
    child.ctx = this.ctx;
    child.parentWidget = this;
    child._useDataPathUndo = this._useDataPathUndo;
    if (!child._themeOverride && this._themeOverride) {
      child.overrideTheme(this._themeOverride);
    }
    if (prepend) {
      this.shadow.prepend(child);
    } else {
      this.shadow.appendChild(child);
    }
    if (child.onadd)
      child.onadd();
    return child;
  }
  //TODO: make sure this works on Electron?
  dynamicMenu(title, list4, packflag = 0) {
    return this.menu(title, list4, packflag);
  }
  /**example usage:
  
     .menu([
     "some_tool_path.tool()|CustomLabel",
     ui_widgets.Menu.SEP,
     "some_tool_path.another_tool()",
     "some_tool_path.another_tool()|CustomLabel::Custom Hotkey String",
     ["Name", () => {console.log("do something")}]
     ])
  
     **/
  menu(title, list4, packflag = 0) {
    let dbox = UIBase5.createElement("dropbox-x");
    dbox._name = title;
    dbox.setAttribute("simple", true);
    dbox.setAttribute("name", title);
    if (list4 instanceof HTMLElement && list4.constructor.name === "Menu") {
      dbox._build_menu = function() {
        if (this._menu !== void 0 && this._menu.parentNode !== void 0) {
          this._menu.remove();
        }
        this._menu = createMenu(this.ctx, title, list4);
        return this._menu;
      };
    } else if (list4) {
      dbox.template = list4;
    }
    this._container_inherit(dbox, packflag);
    this._add(dbox);
    return dbox;
  }
  toolPanel(path_or_cls, args = {}) {
    let tdef;
    let cls;
    if (typeof path_or_cls === "string") {
      cls = this.ctx.api.parseToolPath(path_or_cls);
    } else {
      cls = path_or_cls;
    }
    tdef = cls._getFinalToolDef();
    let packflag = args.packflag || 0;
    let label = args.label || tdef.uiname;
    let createCb = args.createCb || args.create_cb;
    let container = args.container || this.panel(label);
    let defaultsPath = args.defaultsPath || "toolDefaults";
    if (defaultsPath.length > 0 && !defaultsPath.endsWith(".")) {
      defaultsPath += ".";
    }
    let path = defaultsPath + tdef.toolpath;
    container.useIcons(false);
    let inputs = tdef.inputs || {};
    for (let k in inputs) {
      let prop = inputs[k];
      if (prop.flag & PropFlags2.PRIVATE) {
        continue;
      }
      let apiname = prop.apiname || k;
      let path2 = path + "." + apiname;
      container.prop(path2);
    }
    container.tool(path_or_cls, packflag, createCb, label);
    return container;
  }
  tool(path_or_cls, packflag_or_args = {}, createCb = void 0, label = void 0) {
    let cls;
    let packflag;
    if (typeof packflag_or_args === "object") {
      let args = packflag_or_args;
      packflag = args.packflag;
      createCb = args.createCb;
      label = args.label;
    } else {
      packflag = packflag_or_args || 0;
    }
    if (typeof path_or_cls == "string") {
      if (path_or_cls.search(/\|/) >= 0) {
        path_or_cls = path_or_cls.split("|");
        if (label === void 0 && path_or_cls.length > 1) {
          label = path_or_cls[1].trim();
        }
        path_or_cls = path_or_cls[0].trim();
      }
      if (this.ctx === void 0) {
        console.warn("this.ctx was undefined in tool()");
        return;
      }
      cls = this.ctx.api.parseToolPath(path_or_cls);
      if (cls === void 0) {
        console.warn('Unknown tool for toolpath "' + path_or_cls + '"');
        return;
      }
    } else {
      cls = path_or_cls;
    }
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let hotkey;
    if (createCb === void 0) {
      createCb = /* @__PURE__ */ __name((cls2) => {
        return this.ctx.api.createTool(this.ctx, path_or_cls);
      }, "createCb");
    }
    let cb = /* @__PURE__ */ __name(() => {
      console.log("tool run");
      let toolob = createCb(cls);
      this.ctx.api.execTool(this.ctx, toolob);
    }, "cb");
    let def = typeof path_or_cls === "string" ? this.ctx.api.getToolDef(path_or_cls) : cls.tooldef();
    let tooltip = def.description === void 0 ? def.uiname : def.description;
    if (def.hotkey !== void 0) {
      tooltip += "\n	" + def.hotkey;
      hotkey = def.hotkey;
    } else {
      let path = path_or_cls;
      if (typeof path != "string") {
        path = def.toolpath;
      }
      let hotkey2 = this.ctx.api.getToolPathHotkey(this.ctx, path);
      if (hotkey2) {
        tooltip += "\n	Hotkey: " + hotkey2;
      }
    }
    let ret;
    if (def.icon !== void 0 && packflag & PackFlags4.USE_ICONS) {
      label = label === void 0 ? tooltip : label;
      ret = this.iconbutton(def.icon, label, cb);
      ret.iconsheet = iconSheetFromPackFlag(packflag);
      ret.packflag |= packflag;
      ret.description = tooltip;
    } else {
      label = label === void 0 ? def.uiname : label;
      ret = this.button(label, cb);
      ret.description = tooltip;
      ret.packflag |= packflag;
    }
    return ret;
  }
  //supports number types
  textbox(inpath, text2, cb = void 0, packflag = 0) {
    let path;
    if (inpath) {
      path = this._joinPrefix(inpath);
    }
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let ret = UIBase5.createElement("textbox-x");
    if (path !== void 0) {
      ret.setAttribute("datapath", path);
    }
    ret.ctx = this.ctx;
    ret.parentWidget = this;
    ret._init();
    this._add(ret);
    ret.setCSS();
    ret.update();
    ret.packflag |= packflag;
    ret.onchange = cb;
    ret.text = text2;
    return ret;
  }
  pathlabel(inpath, label = void 0, packflag = 0) {
    let path;
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    if (inpath) {
      path = this._joinPrefix(inpath);
    }
    let ret = UIBase5.createElement("label-x");
    if (label === void 0 && inpath) {
      let rdef = this.ctx.api.resolvePath(this.ctx, path);
      if (rdef) {
        label = rdef.prop.uiname ?? rdef.dpath.apiname;
      } else {
        label = "(error)";
      }
    }
    ret.text = label;
    ret.packflag = packflag;
    ret.setAttribute("datapath", path);
    this._add(ret);
    ret.setCSS();
    return ret;
  }
  label(text2) {
    let ret = UIBase5.createElement("label-x");
    ret.text = text2;
    this._add(ret);
    return ret;
  }
  /**
   *
   * makes a button for a help picker tool
   * to view tooltips on mobile devices
   * */
  helppicker() {
    let ret = this.iconbutton(Icons.HELP, "Help Picker", () => {
      this.getScreen().hintPickerTool();
    });
    if (isMobile()) {
    }
    if (ret.ctx) {
      ret._init();
      ret.setCSS();
    }
    return ret;
  }
  iconbutton(icon, description, cb, thisvar, packflag = 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let ret = UIBase5.createElement("iconbutton-x");
    ret.packflag |= packflag;
    ret.setAttribute("icon", icon);
    ret.description = description;
    ret.icon = icon;
    ret.iconsheet = iconSheetFromPackFlag(packflag);
    ret.onclick = cb;
    this._add(ret);
    return ret;
  }
  button(label, cb, thisvar, id2, packflag = 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let ret = UIBase5.createElement("button-x");
    ret.packflag |= packflag;
    ret.setAttribute("name", label);
    ret.setAttribute("buttonid", id2);
    ret.onclick = cb;
    this._add(ret);
    return ret;
  }
  _joinPrefix(path, prefix = this.dataPrefix.trim()) {
    if (path === void 0) {
      return void 0;
    }
    path = path.trim();
    if (path[0] === "/") {
      return path;
    }
    if (prefix.length > 0 && path.length > 0 && !prefix.endsWith(".") && !path.startsWith(".")) {
      path = "." + path;
    }
    return prefix + path;
  }
  colorbutton(inpath, packflag, mass_set_path = void 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
    let ret = UIBase5.createElement("color-picker-button-x");
    if (inpath !== void 0) {
      inpath = this._joinPrefix(inpath);
      ret.setAttribute("datapath", inpath);
    }
    if (mass_set_path !== void 0) {
      ret.setAttribute("mass_set_path", mass_set_path);
    }
    ret.packflag |= packflag;
    this._add(ret);
    return ret;
  }
  noteframe(packflag = 0) {
    let ret = UIBase5.createElement("noteframe-x");
    ret.packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE | packflag;
    this._add(ret);
    return ret;
  }
  curve1d(inpath, packflag = 0, mass_set_path = void 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
    let ret = UIBase5.createElement("curve-widget-x");
    ret.ctx = this.ctx;
    ret.packflag |= packflag;
    if (inpath) {
      inpath = this._joinPrefix(inpath);
      ret.setAttribute("datapath", inpath);
    }
    if (mass_set_path)
      ret.setAttribute("mass_set_path", mass_set_path);
    this.add(ret);
    return ret;
  }
  vecpopup(inpath, packflag = 0, mass_set_path = void 0) {
    let button = UIBase5.createElement("vector-popup-button-x");
    mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let name2 = "vector";
    if (inpath) {
      inpath = this._joinPrefix(inpath);
      button.setAttribute("datapath", inpath);
      if (mass_set_path) {
        button.setAttribute("mass_set_path", mass_set_path);
      }
      let rdef = this.ctx.api.resolvePath(this.ctx, inpath);
      if (rdef && rdef.prop) {
        name2 = rdef.prop.uiname || rdef.prop.name;
      }
    }
    button.setAttribute("name", name2);
    button.packflag |= packflag;
    this.add(button);
    return button;
  }
  _getMassPath(ctx, inpath, mass_set_path) {
    if (mass_set_path === void 0 && this.massSetPrefix.length > 0) {
      mass_set_path = ctx.api.getPropName(ctx, inpath);
    }
    if (mass_set_path === void 0) {
      return void 0;
    }
    return this._joinPrefix(mass_set_path, this.massSetPrefix);
  }
  prop(inpath, packflag = 0, mass_set_path = void 0) {
    if (!this.ctx) {
      console.warn(this.id + ".ctx was undefined");
      let p = this.parentWidget;
      while (p) {
        if (p.ctx) {
          console.warn("Fetched this.ctx from parent");
          this.ctx = p.ctx;
          break;
        }
        p = p.parentWidget;
      }
      if (!this.ctx) {
        throw new Error("ui.Container.prototype.prop(): this.ctx was undefined");
      }
    }
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let rdef = this.ctx.api.resolvePath(this.ctx, this._joinPrefix(inpath), true);
    if (rdef === void 0 || rdef.prop === void 0) {
      console.warn("Unknown property at path", this._joinPrefix(inpath), this.ctx.api.resolvePath(this.ctx, this._joinPrefix(inpath), true));
      return;
    }
    let prop = rdef.prop;
    let useDataPathUndo = this.useDataPathUndo && !(prop.flag & PropFlags2.NO_UNDO);
    function makeUIName(name2) {
      if (typeof name2 === "number" && isNaN(name2)) {
        console.warn("Subkey error in data api", inpath);
        return "" + name2;
      }
      name2 = "" + name2;
      name2 = name2[0].toUpperCase() + name2.slice(1, name2.length).toLowerCase();
      name2 = name2.replace(/_/g, " ");
      return name2;
    }
    __name(makeUIName, "makeUIName");
    if (prop.type === PropTypes4.REPORT) {
      return this.pathlabel(inpath, prop.uiname);
    } else if (prop.type === PropTypes4.STRING) {
      let ret;
      if (prop.flag & PropFlags2.READ_ONLY) {
        ret = this.pathlabel(inpath, prop.uiname);
      } else if (prop.multiLine) {
        ret = this.textarea(inpath, rdef.value, packflag, mass_set_path);
        ret.useDataPathUndo = useDataPathUndo;
      } else {
        let strip = this.strip();
        let uiname = prop.uiname !== void 0 ? prop.uiname : ToolProperty.makeUIName(prop.apiname);
        strip.label(prop.uiname);
        ret = strip.textbox(inpath);
        ret.useDataPathUndo = useDataPathUndo;
        if (mass_set_path) {
          ret.setAttribute("mass_set_path", mass_set_path);
        }
      }
      ret.packflag |= packflag;
      return ret;
    } else if (prop.type === PropTypes4.CURVE) {
      let ret = this.curve1d(inpath, packflag, mass_set_path);
      ret.useDataPathUndo = useDataPathUndo;
      return ret;
    } else if (prop.type === PropTypes4.INT || prop.type === PropTypes4.FLOAT) {
      let ret;
      if (packflag & PackFlags4.SIMPLE_NUMSLIDERS) {
        ret = this.simpleslider(inpath, { packflag });
      } else {
        ret = this.slider(inpath, { packflag });
      }
      ret.useDataPathUndo = useDataPathUndo;
      ret.packflag |= packflag;
      if (mass_set_path) {
        ret.setAttribute("mass_set_path", mass_set_path);
      }
      return ret;
    } else if (prop.type === PropTypes4.BOOL) {
      let ret = this.check(inpath, prop.uiname, packflag, mass_set_path);
      ret.useDataPathUndo = useDataPathUndo;
      return ret;
    } else if (prop.type === PropTypes4.ENUM) {
      if (rdef.subkey !== void 0) {
        let subkey = rdef.subkey;
        let name2 = rdef.prop.ui_value_names[rdef.subkey];
        if (name2 === void 0) {
          name2 = makeUIName(rdef.subkey);
        }
        let check = this.check(inpath, name2, packflag, mass_set_path);
        let tooltip = rdef.prop.descriptions[subkey];
        check.useDataPathUndo = useDataPathUndo;
        check.description = tooltip === void 0 ? rdef.prop.ui_value_names[subkey] : tooltip;
        check.icon = rdef.prop.iconmap[rdef.subkey];
        return check;
      }
      if (!(packflag & PackFlags4.USE_ICONS) && !(prop.flag & (PropFlags2.USE_ICONS | PropFlags2.FORCE_ENUM_CHECKBOXES))) {
        return this.listenum(inpath, { packflag, mass_set_path }).setUndo(useDataPathUndo);
      } else {
        if (prop.flag & PropFlags2.USE_ICONS) {
          packflag |= PackFlags4.USE_ICONS;
        } else if (prop.flag & PropFlags2.FORCE_ENUM_CHECKBOXES) {
          packflag &= ~PackFlags4.USE_ICONS;
        }
        if (packflag & PackFlags4.FORCE_PROP_LABELS) {
          let strip = this.strip();
          strip.label(prop.uiname);
          return strip.checkenum(inpath, void 0, packflag).setUndo(useDataPathUndo);
        } else {
          return this.checkenum(inpath, void 0, packflag).setUndo(useDataPathUndo);
        }
      }
    } else if (prop.type & (PropTypes4.VEC2 | PropTypes4.VEC3 | PropTypes4.VEC4)) {
      if (rdef.subkey !== void 0) {
        let ret;
        if (packflag & PackFlags4.SIMPLE_NUMSLIDERS)
          ret = this.simpleslider(inpath, { packflag });
        else
          ret = this.slider(inpath, { packflag });
        ret.packflag |= packflag;
        return ret.setUndo(useDataPathUndo);
      } else if (prop.subtype === PropSubTypes2.COLOR) {
        return this.colorbutton(inpath, packflag, mass_set_path).setUndo(useDataPathUndo);
      } else {
        let ret = UIBase5.createElement("vector-panel-x");
        mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
        ret.packflag |= packflag | this.inherit_packflag & ~PackFlags4.NO_UPDATE;
        ret.inherit_packflag |= packflag | this.inherit_packflag & ~PackFlags4.NO_UPDATE;
        if (inpath) {
          ret.setAttribute("datapath", this._joinPrefix(inpath));
        }
        if (mass_set_path) {
          ret.setAttribute("mass_set_path", mass_set_path);
        }
        this.add(ret);
        return ret.setUndo(useDataPathUndo);
      }
    } else if (prop.type === PropTypes4.FLAG) {
      if (rdef.subkey !== void 0) {
        let tooltip = rdef.prop.descriptions[rdef.subkey];
        let name2 = rdef.prop.ui_value_names[rdef.subkey];
        if (typeof rdef.subkey === "number") {
          name2 = rdef.prop.keys[rdef.subkey];
          if (name2 && name2 in rdef.prop.ui_value_names) {
            name2 = rdef.prop.ui_value_names[name2];
          } else {
            name2 = makeUIName(name2 ? name2 : "(error)");
          }
        }
        if (name2 === void 0) {
          name2 = "(error)";
        }
        let ret = this.check(inpath, name2, packflag, mass_set_path);
        ret.icon = rdef.prop.iconmap[rdef.subkey];
        if (tooltip) {
          ret.description = tooltip;
        }
        return ret.setUndo(useDataPathUndo);
      } else {
        let con = this;
        if (packflag & PackFlags4.FORCE_PROP_LABELS) {
          con = this.strip();
          con.label(prop.uiname);
        }
        if (packflag & PackFlags4.PUT_FLAG_CHECKS_IN_COLUMNS) {
          let i = 0;
          let row = con.row();
          let col1 = row.col();
          let col2 = row.col();
          for (let k in prop.values) {
            let name2 = prop.ui_value_names[k];
            let tooltip = prop.descriptions[k];
            if (name2 === void 0) {
              name2 = makeUIName(k);
            }
            let con2 = i & 1 ? col1 : col2;
            let check = con2.check(`${inpath}[${k}]`, name2, packflag, mass_set_path);
            if (tooltip) {
              check.description = tooltip;
            }
            check.setUndo(useDataPathUndo);
            i++;
          }
          return row;
        }
        if (packflag & PackFlags4.WRAP_CHECKBOXES) {
          let isrow = this.style["flex-direction"] === "row";
          isrow = isrow || this.style["flex-direction"] === "row-reverse";
          let wrapChars;
          let strip, con2;
          if (isrow) {
            wrapChars = this.getDefault("checkRowWrapLimit", void 0, 24);
            strip = this.col().strip();
            strip.packflag |= packflag;
            strip.inherit_packflag |= packflag;
            con2 = strip.row();
          } else {
            wrapChars = this.getDefault("checkColWrapLimit", void 0, 5);
            strip = this.row().strip();
            strip.packflag |= packflag;
            strip.inherit_packflag |= packflag;
            con2 = strip.col();
          }
          let x = 0;
          let y = 0;
          for (let k in prop.values) {
            let name2 = prop.ui_value_names[k];
            let tooltip = prop.descriptions[k];
            if (name2 === void 0) {
              name2 = makeUIName(k);
            }
            let check = con2.check(`${inpath}[${k}]`, name2, packflag, mass_set_path);
            if (tooltip) {
              check.description = tooltip;
            }
            x += name2.length;
            y += 1;
            if (isrow && x > wrapChars) {
              x = 0;
              con2 = strip.row();
            } else if (!isrow && y > wrapChars) {
              y = 0;
              con2 = strip.col();
            }
          }
          return strip;
        }
        if (con === this) {
          con = this.strip();
        }
        let rebuild = /* @__PURE__ */ __name(() => {
          con.clear();
          for (let k in prop.values) {
            let name2 = prop.ui_value_names[k];
            let tooltip = prop.descriptions[k];
            if (name2 === void 0) {
              name2 = makeUIName(k);
            }
            let check = con.check(`${inpath}[${k}]`, name2, packflag, mass_set_path);
            check.useDataPathUndo = useDataPathUndo;
            if (tooltip) {
              check.description = tooltip;
            }
            check.setUndo(useDataPathUndo);
          }
        }, "rebuild");
        rebuild();
        let last_hash = prop.calcHash();
        con.update.after(() => {
          let hash = prop.calcHash();
          if (last_hash !== hash) {
            last_hash = hash;
            console.error("Property definition update");
            rebuild();
          }
        });
        return con;
      }
    }
  }
  iconcheck(inpath, icon, name2, mass_set_path) {
    let ret = UIBase5.createElement("iconcheck-x");
    ret.icon = icon;
    ret.description = name2;
    if (inpath) {
      ret.setAttribute("datapath", inpath);
    }
    if (mass_set_path) {
      ret.setAttribute("mass_set_path", mass_set_path);
    }
    this.add(ret);
    return ret;
  }
  check(inpath, name2, packflag = 0, mass_set_path = void 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let path = inpath !== void 0 ? this._joinPrefix(inpath) : void 0;
    let ret;
    if (packflag & PackFlags4.USE_ICONS) {
      ret = UIBase5.createElement("iconcheck-x");
      ret.iconsheet = iconSheetFromPackFlag(packflag);
    } else {
      ret = UIBase5.createElement("check-x");
    }
    mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
    ret.packflag |= packflag;
    ret.label = name2;
    ret.noMarginsOrPadding();
    if (inpath) {
      ret.setAttribute("datapath", path);
    }
    if (mass_set_path) {
      ret.setAttribute("mass_set_path", mass_set_path);
    }
    this._add(ret);
    return ret;
  }
  /*
  *
  * new (optional) form: checkenum(inpath, args)
  * */
  checkenum(inpath, name2, packflag, enummap, defaultval, callback, iconmap, mass_set_path) {
    if (typeof name2 === "object" && name2 !== null) {
      let args = name2;
      name2 = args.name;
      packflag = args.packflag;
      enummap = args.enummap;
      defaultval = args.defaultval;
      callback = args.callback;
      iconmap = args.iconmap;
      mass_set_path = args.mass_set_path;
    }
    mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
    packflag = packflag === void 0 ? 0 : packflag;
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let path = this._joinPrefix(inpath);
    let has_path = path !== void 0;
    let prop;
    let frame;
    if (path !== void 0) {
      prop = this.ctx.api.resolvePath(this.ctx, path, true);
      if (prop !== void 0)
        prop = prop.prop;
    }
    if (path !== void 0) {
      if (prop === void 0) {
        console.warn("Bad path in checkenum", path);
        return;
      }
      frame = this.strip();
      frame.oneAxisPadding();
      if (packflag & PackFlags4.USE_ICONS) {
        for (let key in prop.values) {
          let check = frame.check(inpath + "[" + key + "]", "", packflag);
          check.packflag |= PackFlags4.HIDE_CHECK_MARKS;
          check.icon = prop.iconmap[key];
          check.drawCheck = false;
          check.style["padding"] = "0px";
          check.style["margin"] = "0px";
          check.dom.style["padding"] = "0px";
          check.dom.style["margin"] = "0px";
          check.description = prop.descriptions[key];
        }
      } else {
        let makecb = function(key) {
          return () => {
            if (ignorecb) return;
            ignorecb = true;
            for (let k in checks) {
              if (k !== key) {
                checks[k].checked = false;
              }
            }
            ignorecb = false;
            if (callback) {
              callback(key);
            }
          };
        };
        __name(makecb, "makecb");
        if (name2 === void 0) {
          name2 = prop.uiname;
        }
        frame.label(name2).font = "TitleText";
        let checks = {};
        let ignorecb = false;
        for (let key in prop.values) {
          let check = frame.check(`${inpath}[${key}]`, prop.ui_value_names[key]);
          checks[key] = check;
          if (mass_set_path) {
            check.setAttribute("mass_set_path", mass_set_path);
          }
          check.description = prop.descriptions[prop.keys[key]];
          if (!check.description) {
            check.description = "" + prop.ui_value_names[key];
          }
          check.onchange = makecb(key);
        }
      }
    }
    return frame;
  }
  checkenum_panel(inpath, name2, packflag = 0, callback = void 0, mass_set_path = void 0, prop = void 0) {
    packflag = packflag === void 0 ? 0 : packflag;
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let path = this._joinPrefix(inpath);
    let frame;
    let has_path = path !== void 0;
    if (path !== void 0 && prop === void 0) {
      prop = this.ctx.api.resolvePath(this.ctx, path, true);
      if (prop !== void 0)
        prop = prop.prop;
    }
    if (!name2 && prop) {
      name2 = prop.uiname;
    }
    if (path !== void 0) {
      if (prop === void 0) {
        console.warn("Bad path in checkenum", path);
        return;
      }
      frame = this.panel(name2, name2, packflag);
      frame.oneAxisPadding();
      frame.setCSS.after(frame.background = this.getDefault("BoxSub2BG"));
      if (packflag & PackFlags4.USE_ICONS) {
        for (let key in prop.values) {
          let check = frame.check(inpath + " == " + prop.values[key], "", packflag);
          check.icon = prop.iconmap[key];
          check.drawCheck = false;
          check.style["padding"] = "0px";
          check.style["margin"] = "0px";
          check.dom.style["padding"] = "0px";
          check.dom.style["margin"] = "0px";
          check.description = prop.descriptions[key];
        }
      } else {
        let makecb = function(key) {
          return () => {
            if (ignorecb) return;
            ignorecb = true;
            for (let k in checks) {
              if (k !== key) {
                checks[k].checked = false;
              }
            }
            ignorecb = false;
            if (callback) {
              callback(key);
            }
          };
        };
        __name(makecb, "makecb");
        if (name2 === void 0) {
          name2 = prop.uiname;
        }
        frame.label(name2).font = "TitleText";
        let checks = {};
        let ignorecb = false;
        for (let key in prop.values) {
          let check = frame.check(inpath + " = " + prop.values[key], prop.ui_value_names[key]);
          checks[key] = check;
          if (mass_set_path) {
            check.setAttribute("mass_set_path", mass_set_path);
          }
          check.description = prop.descriptions[prop.keys[key]];
          if (!check.description) {
            check.description = "" + prop.ui_value_names[key];
          }
          check.onchange = makecb(key);
        }
      }
    }
    return frame;
  }
  /*
      enummap is an object that maps
      ui names to keys, e.g.:
  
      ui.listenum("color", "Color", {
        RED   : 0,
        GREEN : 1,
        BLUE  : 2
      });
  
      path can be undefined, in which case, use callback,
      which gets the current enum as an argument
  
      defaultval cannot be undefined
    */
  listenum(inpath, name2, enumDef, defaultval, callback, iconmap, packflag = 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let mass_set_path;
    if (name2 && typeof name2 === "object") {
      let args = name2;
      name2 = args.name;
      enumDef = args.enumDef;
      defaultval = args.defaultval;
      callback = args.callback;
      iconmap = args.iconmap;
      packflag = args.packflag || 0;
      mass_set_path = args.mass_set_path;
    }
    mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
    let path;
    let label = name2;
    if (inpath !== void 0) {
      path = this._joinPrefix(inpath);
    }
    let ret = UIBase5.createElement("dropbox-x");
    if (enumDef !== void 0) {
      if (enumDef instanceof EnumProperty) {
        ret.prop = enumDef;
        label ||= enumDef.uiname || ToolProperty2.makeUIName(enumDef.apiname);
      } else {
        ret.prop = new EnumProperty(defaultval, enumDef, path, name2);
      }
      if (iconmap !== void 0) {
        ret.prop.addIcons(iconmap);
      }
    } else {
      let res = this.ctx.api.resolvePath(this.ctx, path, true);
      if (res !== void 0) {
        ret.prop = res.prop;
        name2 ||= res.prop.uiname;
        label ||= name2;
      }
    }
    mass_set_path = this._getMassPath(this.ctx, inpath, mass_set_path);
    if (path !== void 0) {
      ret.setAttribute("datapath", path);
    }
    if (mass_set_path !== void 0) {
      ret.setAttribute("mass_set_path", mass_set_path);
    }
    ret.setAttribute("name", name2);
    if (defaultval) {
      ret.setValue(defaultval);
    }
    ret.onchange = callback;
    ret.onselect = callback;
    ret.packflag |= packflag;
    if (label && packflag & PackFlags4.FORCE_PROP_LABELS) {
      const container = this.row();
      let l;
      if (packflag & PackFlags4.LABEL_ON_RIGHT) {
        container._add(ret);
        l = container.label(label);
        if (!l.style["margin-left"] || l.style["margin-left"] === "unset") {
          l.style["margin-left"] = "5px";
        }
      } else {
        l = container.label(label);
        container._add(ret);
      }
    } else {
      this._add(ret);
    }
    return ret;
  }
  getroot() {
    let p = this;
    while (p.parent !== void 0) {
      p = p.parent;
    }
    return p;
  }
  simpleslider(inpath, name2, defaultval, min, max, step, is_int, do_redraw, callback, packflag = 0) {
    if (arguments.length === 2 || typeof name2 === "object") {
      let args = Object.assign({}, name2);
      args.packflag = (args.packflag || 0) | PackFlags4.SIMPLE_NUMSLIDERS;
      return this.slider(inpath, args);
    } else {
      return this.slider(inpath, name2, defaultval, min, max, step, is_int, do_redraw, callback, packflag | PackFlags4.SIMPLE_NUMSLIDERS);
    }
  }
  /**
   *
   * usage: .slider(inpath, {
   *  name : bleh,
   *  defaultval : number,
   *  etc...
   * });
   * */
  slider(inpath, name2, defaultval, min, max, step, is_int, do_redraw, callback, packflag = 0) {
    if (arguments.length === 2 || typeof name2 === "object") {
      let args = name2;
      name2 = args.name;
      defaultval = args.defaultval;
      min = args.min;
      max = args.max;
      step = args.step;
      is_int = args.is_int || args.isInt;
      do_redraw = args.do_redraw;
      callback = args.callback;
      packflag = args.packflag || 0;
    }
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    let ret;
    if (inpath) {
      inpath = this._joinPrefix(inpath);
      let rdef = this.ctx.api.resolvePath(this.ctx, inpath, true);
      if (rdef && rdef.prop && rdef.prop.flag & PropFlags2.SIMPLE_SLIDER) {
        packflag |= PackFlags4.SIMPLE_NUMSLIDERS;
      }
      if (rdef && rdef.prop && rdef.prop.flag & PropFlags2.FORCE_ROLLER_SLIDER) {
        packflag |= PackFlags4.FORCE_ROLLER_SLIDER;
      }
    }
    let simple = packflag & PackFlags4.SIMPLE_NUMSLIDERS || const_default.simpleNumSliders;
    simple = simple && !(packflag & PackFlags4.FORCE_ROLLER_SLIDER);
    let extraTextBox = const_default.useNumSliderTextboxes && !(packflag & PackFlags4.NO_NUMSLIDER_TEXTBOX);
    if (extraTextBox) {
      if (simple) {
        ret = UIBase5.createElement("numslider-simple-x");
      } else {
        ret = UIBase5.createElement("numslider-textbox-x");
      }
    } else {
      if (simple) {
        ret = UIBase5.createElement("numslider-simple-x");
      } else {
        ret = UIBase5.createElement("numslider-x");
      }
    }
    ret.packflag |= packflag;
    let decimals;
    if (inpath) {
      ret.setAttribute("datapath", inpath);
    }
    if (name2) {
      ret.setAttribute("name", name2);
    }
    if (min !== void 0) {
      ret.setAttribute("min", min);
    }
    if (max !== void 0) {
      ret.setAttribute("max", max);
    }
    if (defaultval !== void 0) {
      ret.setValue(defaultval);
    }
    if (is_int) {
      ret.setAttribute("integer", is_int);
    }
    if (decimals !== void 0) {
      ret.decimalPlaces = decimals;
    }
    if (callback) {
      ret.onchange = callback;
    }
    this._add(ret);
    if (this.ctx) {
      ret.setCSS();
      ret.update();
    }
    return ret;
  }
  _container_inherit(elem2, packflag = 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    elem2.packflag |= packflag;
    elem2.inherit_packflag |= packflag;
    elem2.dataPrefix = this.dataPrefix;
    elem2.massSetPrefix = this.massSetPrefix;
  }
  treeview() {
    let ret = UIBase5.createElement("tree-view-x");
    ret.ctx = this.ctx;
    this.add(ret);
    this._container_inherit(ret);
    return ret;
  }
  panel(name2, id2, packflag = 0, tooltip = void 0) {
    id2 = id2 === void 0 ? name2 : id2;
    let ret = UIBase5.createElement("panelframe-x");
    this._container_inherit(ret, packflag);
    if (tooltip) {
      ret.setHeaderToolTip(tooltip);
    }
    ret.setAttribute("label", name2);
    ret.setAttribute("id", id2);
    this._add(ret);
    if (this.ctx) {
      ret.ctx = this.ctx;
      ret._init();
      ret.contents.ctx = ret.ctx;
    }
    ret.contents.dataPrefix = this.dataPrefix;
    ret.contents.massSetPrefix = this.massSetPrefix;
    return ret;
  }
  row(packflag = 0) {
    let ret = UIBase5.createElement("rowframe-x");
    this._container_inherit(ret, packflag);
    this._add(ret);
    ret.ctx = this.ctx;
    return ret;
  }
  listbox(packflag = 0) {
    let ret = UIBase5.createElement("listbox-x");
    this._container_inherit(ret, packflag);
    this._add(ret);
    return ret;
  }
  table(packflag = 0) {
    let ret = UIBase5.createElement("tableframe-x");
    this._container_inherit(ret, packflag);
    this._add(ret);
    return ret;
  }
  twocol(parentDepth = 1, packflag = 0) {
    let ret = UIBase5.createElement("two-column-x");
    ret.parentDepth = parentDepth;
    this._container_inherit(ret, packflag);
    this._add(ret);
    return ret;
  }
  col(packflag = 0) {
    let ret = UIBase5.createElement("colframe-x");
    this._container_inherit(ret, packflag);
    this._add(ret);
    return ret;
  }
  colorPicker(inpath, packflag_or_args = 0, mass_set_path = void 0, themeOverride = void 0) {
    let packflag;
    if (typeof packflag_or_args === "object") {
      let args = packflag_or_args;
      packflag = args.packflag !== void 0 ? args.packflag : 0;
      mass_set_path = args.massSetPath;
      themeOverride = args.themeOverride;
    }
    let path;
    if (inpath) {
      path = this._joinPrefix(inpath);
    }
    let ret = UIBase5.createElement("colorpicker-x");
    if (themeOverride) {
      ret.overrideClass(themeOverride);
    }
    packflag |= PackFlags4.SIMPLE_NUMSLIDERS;
    this._container_inherit(ret, packflag);
    ret.ctx = this.ctx;
    ret.parentWidget = this;
    ret._init();
    ret.packflag |= packflag;
    ret.inherit_packflag |= packflag;
    ret.constructor.setDefault(ret);
    if (path !== void 0) {
      ret.setAttribute("datapath", path);
    }
    console.warn("mass_set_path", mass_set_path);
    if (mass_set_path) {
      ret.setAttribute("mass_set_path", mass_set_path);
    }
    window.colorpicker = ret;
    this._add(ret);
    return ret;
  }
  textarea(datapath = void 0, value = "", packflag = 0, mass_set_path = void 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    mass_set_path = this._getMassPath(this.ctx, datapath, mass_set_path);
    let ret = UIBase5.createElement("rich-text-editor-x");
    ret.ctx = this.ctx;
    ret.packflag |= packflag;
    if (value !== void 0) {
      ret.value = value;
    }
    if (datapath)
      ret.setAttribute("datapath", datapath);
    if (mass_set_path)
      ret.setAttribute("mass_set_path", mass_set_path);
    this.add(ret);
    return ret;
  }
  /**
   * html5 viewer
   * */
  viewer(datapath = void 0, value = "", packflag = 0, mass_set_path = void 0) {
    packflag |= this.inherit_packflag & ~PackFlags4.NO_UPDATE;
    mass_set_path = this._getMassPath(this.ctx, datapath, mass_set_path);
    let ret = UIBase5.createElement("html-viewer-x");
    ret.ctx = this.ctx;
    ret.packflag |= packflag;
    if (value !== void 0) {
      ret.value = value;
    }
    if (datapath)
      ret.setAttribute("datapath", datapath);
    if (mass_set_path)
      ret.setAttribute("mass_set_path", mass_set_path);
    this.add(ret);
    return ret;
  }
  //
  tabs(position = "top", packflag = 0) {
    let ret = UIBase5.createElement("tabcontainer-x");
    ret.constructor.setDefault(ret);
    ret.setAttribute("bar_pos", position);
    this._container_inherit(ret, packflag);
    this._add(ret);
    return ret;
  }
  asDialogFooter() {
    this.style["margin-top"] = "15px";
    this.style["justify-content"] = "flex-end";
    return this;
  }
};
;
UIBase2.internalRegister(Container, "div");
var RowFrame = class extends Container {
  static {
    __name(this, "RowFrame");
  }
  constructor() {
    super();
  }
  static define() {
    return {
      tagname: "rowframe-x"
    };
  }
  //try to set styling as early as possible
  connectedCallback() {
    super.connectedCallback();
    this.style["display"] = "flex";
    this.style["flex-direction"] = this.reversed ? "row-reverse" : "row";
  }
  init() {
    super.init();
    this.style["display"] = "flex";
    this.style["flex-direction"] = this.reversed ? "row-reverse" : "row";
    if (!this.style["align-items"] || this.style["align-items"] == "") {
      this.style["align-items"] = "center";
    }
    if (this.getDefault("slider-style") === "simple") {
      this.packflag |= PackFlags4.SIMPLE_NUMSLIDERS;
      this.inherit_packflag |= PackFlags4.SIMPLE_NUMSLIDERS;
    }
  }
  oneAxisMargin(m = this.getDefault("oneAxisMargin"), m2 = 0) {
    this.style["margin-left"] = this.style["margin-right"] = m + "px";
    this.style["margin-top"] = this.style["margin-bottom"] = "" + m2 + "px";
    return this;
  }
  oneAxisPadding(m = this.getDefault("oneAxisPadding"), m2 = 0) {
    this.style["padding-left"] = this.style["padding-right"] = "" + m + "px";
    this.style["padding-top"] = this.style["padding-bottom"] = "" + m2 + "px";
    return this;
  }
  update() {
    super.update();
  }
};
UIBase5.internalRegister(RowFrame);
var ColumnFrame = class extends Container {
  static {
    __name(this, "ColumnFrame");
  }
  constructor() {
    super();
  }
  static define() {
    return {
      tagname: "colframe-x"
    };
  }
  init() {
    super.init();
    this.style["display"] = "flex";
    this.style["flex-direction"] = "column";
    this.style["justify-content"] = "right";
  }
  update() {
    super.update();
  }
  oneAxisMargin(m = this.getDefault("oneAxisMargin"), m2 = 0) {
    this.style["margin-top"] = this.style["margin-bottom"] = "" + m + "px";
    this.style["margin-left"] = this.style["margin-right"] = m2 + "px";
    return this;
  }
  oneAxisPadding(m = this.getDefault("oneAxisPadding"), m2 = 0) {
    this.style["padding-top"] = this.style["padding-bottom"] = "" + m + "px";
    this.style["padding-left"] = this.style["padding-right"] = "" + m2 + "px";
    return this;
  }
};
UIBase5.internalRegister(ColumnFrame);
var TwoColumnFrame = class extends Container {
  static {
    __name(this, "TwoColumnFrame");
  }
  constructor() {
    super();
    this._colWidth = 256;
    this.parentDepth = 1;
  }
  get colWidth() {
    if (this.hasAttribute("colWidth")) {
      return parsepx(this.getAttribute("colWidth"));
    }
    return this._colWidth;
  }
  set colWidth(v) {
    if (this.hasAttribute("colWidth")) {
      this.setAttribute("colWidth", "" + v);
    } else {
      this._colWidth = v;
    }
  }
  static define() {
    return {
      tagname: "two-column-x"
    };
  }
  init() {
    super.init();
    this.style["display"] = "flex";
    this.style["flex-direction"] = "column";
  }
  update() {
    super.update();
    let p = this;
    for (let i = 0; i < this.parentDepth; i++) {
      p = p.parentWidget ? p.parentWidget : p;
    }
    if (!p) {
      return;
    }
    let r = p.getBoundingClientRect();
    if (!r) {
      return;
    }
    let style = r.width > this.colWidth * 2 ? "row" : "column";
    if (this.style["flex-direction"] !== style) {
      this.style["flex-direction"] = style;
    }
  }
};
UIBase5.internalRegister(TwoColumnFrame);

// scripts/path.ux/scripts/screen/ScreenArea.js
var ScreenArea_exports = {};
__export(ScreenArea_exports, {
  Area: () => Area,
  AreaFlags: () => AreaFlags,
  AreaTypes: () => AreaTypes,
  AreaWrangler: () => AreaWrangler,
  BorderMask: () => BorderMask,
  BorderSides: () => BorderSides,
  ScreenArea: () => ScreenArea,
  areaclasses: () => areaclasses,
  contextWrangler: () => contextWrangler,
  getAreaIntName: () => getAreaIntName,
  setAreaTypes: () => setAreaTypes,
  setScreenClass: () => setScreenClass
});

// scripts/path.ux/scripts/widgets/ui_noteframe.js
var ui_noteframe_exports = {};
__export(ui_noteframe_exports, {
  Note: () => Note,
  NoteFrame: () => NoteFrame,
  ProgBarNote: () => ProgBarNote,
  error: () => error,
  getNoteFrames: () => getNoteFrames,
  message: () => message,
  noteframes: () => noteframes,
  progbarNote: () => progbarNote,
  sendNote: () => sendNote,
  warning: () => warning
});
var UIBase6 = UIBase2;
var Note = class extends UIBase2 {
  static {
    __name(this, "Note");
  }
  constructor() {
    super();
    let style = document.createElement("style");
    this._noteid = void 0;
    this.height = 20;
    this.showExclMark = true;
    style.textContent = `
    .notex {
      display : flex;
      flex-direction : row;
      flex-wrap : nowrap;
      height : {this.height}px;
      padding : 0px;
      margin : 0px;
    }
    `;
    this.dom = document.createElement("div");
    this.dom.setAttribute("class", "notex");
    this.color = "red";
    this.shadow.appendChild(style);
    this.shadow.append(this.dom);
    this.setLabel("");
  }
  static define() {
    return {
      tagname: "note-x",
      style: "notification"
    };
  }
  setLabel(s) {
    let color = this.color;
    if (this.showExclMark && this.mark === void 0) {
      this.mark = document.createElement("div");
      this.mark.style["display"] = "flex";
      this.mark.style["flex-direction"] = "row";
      this.mark.style["flex-wrap"] = "nowrap";
      let sheet = 0;
      let size = iconmanager.getTileSize(sheet);
      this.mark.style["width"] = "" + size + "px";
      this.mark.style["height"] = "" + size + "px";
      this.dom.appendChild(this.mark);
      this.ntext = document.createElement("div");
      this.ntext.style["display"] = "inline-flex";
      this.ntext.style["flex-wrap"] = "nowrap";
      this.dom.appendChild(this.ntext);
      iconmanager.setCSS(Icons.NOTE_EXCL, this.mark, sheet);
    } else if (!this.showExclMark && this.mark) {
      this.mark.remove();
      this.mark = void 0;
    }
    let ntext = this.ntext;
    ntext.innerText = " " + s;
  }
  init() {
    super.init();
    this.setAttribute("class", "notex");
    this.style["display"] = "flex";
    this.style["flex-wrap"] = "nowrap";
    this.style["flex-direction"] = "row";
    this.style["border-radius"] = "7px";
    this.style["padding"] = "2px";
    this.style["color"] = this.getDefault("DefaultText").color;
    let clr = css2color2(this.color);
    clr = color2css2([clr[0], clr[1], clr[2], 0.25]);
    this.style["background-color"] = clr;
    this.setCSS();
  }
  setCSS() {
    super.setCSS(false);
  }
};
UIBase6.internalRegister(Note);
var ProgBarNote = class extends Note {
  static {
    __name(this, "ProgBarNote");
  }
  constructor() {
    super();
    this._percent = 0;
    this.barWidth = 100;
    let bar = this.bar = document.createElement("div");
    bar.style["display"] = "flex";
    bar.style["flex-direction"] = "row";
    bar.style["width"] = this.barWidth + "px";
    bar.style["height"] = this.height + "px";
    bar.style["background-color"] = this.getDefault("ProgressBarBG");
    bar.style["border-radius"] = "12px";
    bar.style["align-items"] = "center";
    bar.style["padding"] = bar.style["margin"] = "0px";
    let bar2 = this.bar2 = document.createElement("div");
    let w = 50;
    bar2.style["display"] = "flex";
    bar2.style["flex-direction"] = "row";
    bar2.style["height"] = this.height + "px";
    bar2.style["background-color"] = this.getDefault("ProgressBar");
    bar2.style["border-radius"] = "12px";
    bar2.style["align-items"] = "center";
    bar2.style["padding"] = bar2.style["margin"] = "0px";
    this.bar.appendChild(bar2);
    this.dom.appendChild(this.bar);
  }
  get percent() {
    return this._percent;
  }
  set percent(val) {
    this._percent = val;
    this.setCSS();
  }
  static define() {
    return {
      tagname: "note-progress-x",
      style: "notification"
    };
  }
  setCSS() {
    super.setCSS();
    let w = ~~(this.percent * this.barWidth + 0.5);
    this.bar2.style["width"] = w + "px";
  }
  init() {
    super.init();
  }
};
UIBase6.internalRegister(ProgBarNote);
var NoteFrame = class extends RowFrame {
  static {
    __name(this, "NoteFrame");
  }
  constructor() {
    super();
    this._h = 20;
  }
  static define() {
    return {
      tagname: "noteframe-x",
      style: "noteframe"
    };
  }
  init() {
    super.init();
    this.noMarginsOrPadding();
    noteframes.push(this);
    this.background = this.getDefault("background-color");
    this.style["flex-grow"] = "unset";
  }
  setCSS() {
    super.setCSS();
    this.style["width"] = "min-contents";
    this.style["height"] = this._h + "px";
  }
  _ondestroy() {
    if (noteframes.indexOf(this) >= 0) {
      noteframes.remove(this);
    }
    super._ondestroy();
  }
  progbarNote(msg, percent, color = "rgba(255,0,0,0.2)", timeout = 700, id2 = msg) {
    let note;
    for (let child of this.children) {
      if (child._noteid === id2) {
        note = child;
        break;
      }
    }
    let f = (100 * Math.min(percent, 1)).toFixed(1);
    if (note === void 0) {
      note = this.addNote(msg, color, -1, "note-progress-x");
      note._noteid = id2;
    }
    note.percent = percent;
    if (percent >= 1) {
      window.setTimeout(() => {
        note.remove();
      }, timeout);
    }
    return note;
  }
  addNote(msg, color = "rgba(255,0,0,0.2)", timeout = 1200, tagname = "note-x", showExclMark = true) {
    let note = UIBase6.createElement(tagname);
    note.color = color;
    note.setLabel(msg);
    note.style["text-align"] = "center";
    note.style["font"] = getFont(note, "DefaultText");
    note.style["color"] = this.getDefault("DefaultText").color;
    note.showExclMark = showExclMark;
    this.add(note);
    this.noMarginsOrPadding();
    note.noMarginsOrPadding();
    note.style["height"] = this._h + "px";
    note.height = this._h;
    if (timeout !== -1) {
      window.setTimeout(() => {
        note.remove();
      }, timeout);
    }
    return note;
  }
};
UIBase6.internalRegister(NoteFrame);
function getNoteFrames(screen) {
  let ret = [];
  let rec = /* @__PURE__ */ __name((n) => {
    if (n instanceof NoteFrame) {
      ret.push(n);
    }
    if (n.childNodes !== void 0) {
      for (let node of n.childNodes) {
        rec(node);
      }
    }
    if (n instanceof UIBase2 && n.shadow !== void 0 && n.shadow.childNodes) {
      for (let node of n.shadow.childNodes) {
        rec(node);
      }
    }
  }, "rec");
  rec(screen);
  return ret;
}
__name(getNoteFrames, "getNoteFrames");
var noteframes = [];
function sendNote(screen, msg, color, timeout = 3e3, showExclMark = true) {
  noteframes = getNoteFrames(screen);
  for (let frame of noteframes) {
    try {
      frame.addNote(msg, color, timeout, void 0, showExclMark);
    } catch (error2) {
      print_stack(error2);
      console.log(error2.stack, error2.message);
      console.log("bad notification frame");
    }
  }
}
__name(sendNote, "sendNote");
window._sendNote = sendNote;
function error(screen, msg, timeout) {
  return sendNote(screen, msg, color2css2([1, 0, 0, 1]), timeout);
}
__name(error, "error");
function warning(screen, msg, timeout) {
  return sendNote(screen, msg, color2css2([0.78, 0.78, 0.2, 1]), timeout);
}
__name(warning, "warning");
function message(screen, msg, timeout) {
  return sendNote(screen, msg, color2css2([0.2, 0.9, 0.1, 1]), timeout, false);
}
__name(message, "message");
function progbarNote(screen, msg, percent, color, timeout) {
  noteframes = getNoteFrames(screen);
  for (let frame of noteframes) {
    try {
      frame.progbarNote(msg, percent, color, timeout);
    } catch (error2) {
      print_stack(error2);
      console.log(error2.stack, error2.message);
      console.log("bad notification frame");
    }
  }
}
__name(progbarNote, "progbarNote");

// scripts/path.ux/scripts/widgets/ui_richedit.js
var UIBase7 = UIBase2, Icons2 = Icons;
var RichEditor = class extends TextBoxBase {
  static {
    __name(this, "RichEditor");
  }
  constructor() {
    super();
    this._internalDisabled = false;
    this._value = "";
    this.textOnlyMode = false;
    this.styletag = document.createElement("style");
    this.styletag.textContent = `
      div.rich-text-editor-x {
        width        :   100%;
        height       :   100%;
        min-height   :   150px;
        overflow     :   scroll;
        padding      :   5px;
        white-space  :   pre-wrap;
      }
      
      rich-text-editor-x {
        display        : flex;
        flex-direction : column;
      }
    `;
    this.shadow.appendChild(this.styletag);
    let controls = this.controls = UIBase7.createElement("rowframe-x");
    let makeicon = /* @__PURE__ */ __name((icon, description, cb) => {
      icon = controls.iconbutton(icon, description, cb);
      icon.iconsheet = 1;
      icon.overrideDefault("padding", 3);
      return icon;
    }, "makeicon");
    makeicon(Icons2.BOLD, "Bold", () => {
      document.execCommand("bold");
    });
    makeicon(Icons2.ITALIC, "Italic", () => {
      document.execCommand("italic");
    });
    makeicon(Icons2.UNDERLINE, "Underline", () => {
      document.execCommand("underline");
    });
    makeicon(Icons2.STRIKETHRU, "Strikethrough", () => {
      document.execCommand("strikeThrough");
    });
    controls.background = this.getDefault("background-color");
    this.shadow.appendChild(controls);
    this.textarea = document.createElement("div");
    this.textarea.contentEditable = true;
    this.textarea.setAttribute("class", "rich-text-editor-x");
    this.textarea.style["font"] = this.getDefault("DefaultText").genCSS();
    this.textarea.style["background-color"] = this.getDefault("background-color");
    this.textarea.setAttribute("white-space", "pre-wrap");
    this.textarea.addEventListener("keydown", (e) => {
      if (e.keyCode === keymap["S"] && e.shiftKey && (e.ctrlKey || e.commandKey)) {
        this.toggleStrikeThru();
        e.preventDefault();
        e.stopPropagation();
      }
    });
    this.textarea.addEventListener("focus", (e) => {
      this._focus = 1;
      this.setCSS();
    });
    this.textarea.addEventListener("blur", (e) => {
      this._focus = 0;
      this.setCSS();
    });
    document.execCommand("styleWithCSS", true);
    window.ta = this;
    this.textarea.addEventListener("selectionchange", (e) => {
      console.log("sel1");
    });
    document.addEventListener("selectionchange", (e, b) => {
      console.log("sel2", document.getSelection().startNode, b);
    });
    this.textarea.addEventListener("input", (e) => {
      if (this.internalDisabled) {
        return;
      }
      console.log("text input", e);
      let text2;
      if (this.textOnlyMode) {
        text2 = this.textarea.innerText;
      } else {
        text2 = this.textarea.innerHTML;
      }
      if (this.textOnlyMode && text2 === this._value) {
        console.log("detected formatting change");
        return;
      }
      let sel2 = document.getSelection();
      let range = sel2.getRangeAt(0);
      let node = sel2.anchorNode;
      let off = sel2.anchorOffset;
      this._value = text2;
      if (this.hasAttribute("datapath")) {
        let path = this.getAttribute("datapath");
        this.setPathValue(this.ctx, path, this.value);
      }
      if (this.onchange) {
        this.onchange(this._value);
      }
      if (this.oninput) {
        this.oninput(this._value);
      }
      this.dispatchEvent(new InputEvent(this));
      this.dispatchEvent(new CustomEvent("change"));
    });
    this.shadow.appendChild(this.textarea);
  }
  /**
   * Only available in textOnlyMode.  Called when starting text formatting
  */
  formatStart() {
  }
  /**
  * Only available in textOnlyMode.  Formats html-formated line.
   *
   * @param line : line to format
   * @parem text : whole text
  * */
  formatLine(line, text2) {
    return line;
  }
  toggleStrikeThru() {
    console.log("strike thru!");
    document.execCommand("strikeThrough");
  }
  /**
   * Only available in textOnlyMode.  Called when starting text formatting
   */
  formatEnd() {
  }
  init() {
    super.init();
    window.rc = this;
    document.execCommand("defaultParagraphSeparator", false, "div");
    this.setCSS();
  }
  get internalDisabled() {
    return this._internalDisabled;
  }
  set internalDisabled(val) {
    let changed = !!this._internalDisabled !== !!val;
    if (changed || 1) {
      this._internalDisabled = !!val;
      super.internalDisabled = val;
      this.textarea.internalDisabled = val;
      this.textarea.contentEditable = !val;
      this.setCSS();
    }
  }
  set value(val) {
    this._value = val;
    if (this.textOnlyMode) {
      let val2 = "";
      for (let l of val.split("\n")) {
        val2 += l + "<br>";
      }
      val = val2;
    }
    this.textarea.innerHTML = val;
  }
  get value() {
    return this._value;
  }
  setCSS() {
    super.setCSS();
    this.controls.background = this.getDefault("background-color");
    if (this._focus) {
      this.textarea.style["border"] = `2px dashed ${this.getDefault("focus-border-color")}`;
    } else {
      this.textarea.style["border"] = "none";
    }
    if (this.style["font"]) {
      this.textarea.style["font"] = this.style["font"];
    } else {
      this.textarea.style["font"] = this.getDefault("DefaultText").genCSS();
    }
    if (this.style["color"]) {
      this.textarea.style["color"] = this.style["color"];
    } else {
      this.textarea.style["color"] = this.getDefault("DefaultText").color;
    }
    if (this.disabled) {
      this.textarea.style["background-color"] = this.getDefault("DisabledBG");
    } else {
      this.textarea.style["background-color"] = this.getDefault("background-color");
    }
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let path = this.getAttribute("datapath");
    let prop = this.getPathMeta(this.ctx, path);
    if (prop === void 0) {
      console.warn("invalid datapath " + path);
      this.internalDisabled = true;
      return;
    }
    this.internalDisabled = false;
    let value = this.getPathValue(this.ctx, path);
    if (value !== this._value) {
      console.log("text change");
      this.value = value;
    }
  }
  update() {
    super.update();
    this.updateDataPath();
  }
  static define() {
    return {
      tagname: "rich-text-editor-x",
      style: "richtext",
      modalKeyEvents: true
    };
  }
};
UIBase7.internalRegister(RichEditor);
var RichViewer = class extends UIBase7 {
  static {
    __name(this, "RichViewer");
  }
  constructor() {
    super();
    this.contents = document.createElement("div");
    this.contents.style["padding"] = "10px";
    this.contents.style["margin"] = "10px";
    this.contents.style["overflow"] = "scroll";
    this.shadow.appendChild(this.contents);
    this._value = "";
  }
  hideScrollBars() {
    this.contents.style["overflow"] = "hidden";
  }
  showScrollBars() {
    this.contents.style["overflow"] = "scroll";
  }
  //transforms text into final html form
  //note that client code is allowed to override this directly
  textTransform(text2) {
    return text2;
  }
  set value(val) {
    this._value = val;
    this.contents.innerHTML = this.textTransform(val);
  }
  get value() {
    return this._value;
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let path = this.getAttribute("datapath");
    let prop = this.getPathMeta(this.ctx, path);
    if (prop === void 0) {
      console.warn("invalid datapath " + path);
      this.internalDisabled = true;
      return;
    }
    this.internalDisabled = false;
    let value = this.getPathValue(this.ctx, path);
    if (value !== this.value) {
      this.value = value;
    }
  }
  update() {
    super.update();
    this.updateDataPath();
  }
  static define() {
    return {
      tagname: "html-viewer-x",
      style: "html_viewer"
    };
  }
};
UIBase7.internalRegister(RichViewer);

// scripts/path.ux/scripts/widgets/ui_widgets2.js
var keymap4 = keymap;
var VectorPopupButton = class extends Button {
  static {
    __name(this, "VectorPopupButton");
  }
  constructor() {
    super();
    this.value = new Vector4();
  }
  static define() {
    return {
      tagname: "vector-popup-button-x",
      style: "vecPopupButton"
    };
  }
  _onpress(e) {
    if (e.button && e.button !== 0) {
      return;
    }
    let panel = UIBase2.createElement("vector-panel-x");
    let screen = this.ctx.screen;
    let popup = screen.popup(this, this);
    popup.add(panel);
    popup.button("ok", () => {
      popup.end();
    });
    if (this.hasAttribute("datapath")) {
      panel.setAttribute("datapath", this.getAttribute("datapath"));
    }
    if (this.hasAttribute("mass_set_path")) {
      panel.setAttribute("mass_set_path", this.getAttribute("mass_set_path"));
    }
    popup.flushUpdate();
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let value = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (!value) {
      this.internalDisabled = true;
      return;
    }
    if (this.internalDisabled) {
      this.internalDisabled = false;
    }
    if (this.value.length !== value.length) {
      switch (value.length) {
        case 2:
          this.value = new Vector2();
          break;
        case 3:
          this.value = new Vector3();
          break;
        case 4:
          this.value = new Vector4();
          break;
      }
    }
    if (this.value.vectorDistance(value) > 1e-4) {
      this.value.load(value);
      console.log("updated vector popup button value");
    }
  }
  update() {
    super.update();
    this.updateDataPath();
  }
};
UIBase2.internalRegister(VectorPopupButton);
var VectorPanel = class extends ColumnFrame {
  static {
    __name(this, "VectorPanel");
  }
  constructor() {
    super();
    this.range = [-1e17, 1e17];
    this.name = "";
    this.axes = "XYZW";
    this.value = new Vector3();
    this.sliders = [];
    this.hasUniformSlider = false;
    this.packflag |= PackFlags.FORCE_ROLLER_SLIDER;
    let makeParam = /* @__PURE__ */ __name((key) => {
      Object.defineProperty(this, key, {
        get: /* @__PURE__ */ __name(function() {
          return this._getNumParam(key);
        }, "get"),
        set: /* @__PURE__ */ __name(function(val) {
          this._setNumParam(key, val);
        }, "set")
      });
    }, "makeParam");
    this.__range = [-1e17, 1e17];
    this._range = new Array(2);
    Object.defineProperty(this._range, 0, {
      get: /* @__PURE__ */ __name(() => this.__range[0], "get"),
      set: /* @__PURE__ */ __name((val) => this.__range[0] = val, "set")
    });
    Object.defineProperty(this._range, 1, {
      get: /* @__PURE__ */ __name(() => this.__range[1], "get"),
      set: /* @__PURE__ */ __name((val) => this.__range[1] = val, "set")
    });
    makeParam("isInt");
    makeParam("radix");
    makeParam("decimalPlaces");
    makeParam("baseUnit");
    makeParam("displayUnit");
    makeParam("step");
    makeParam("slideSpeed");
    makeParam("expRate");
    makeParam("stepIsRelative");
    window.vp = this;
  }
  init() {
    super.init();
    this.rebuild();
    this.setCSS();
    this.background = this.getDefault("InnerPanelBG");
  }
  _getNumParam(key) {
    return this["_" + key];
  }
  _setNumParam(key, val) {
    if (key === "range") {
      this.__range[0] = val[0];
      this.__range[1] = val[1];
      return;
    }
    this["_" + key] = val;
    for (let slider of this.sliders) {
      slider[key] = val;
    }
  }
  rebuild() {
    this.clear();
    if (this.name) {
      this.label(this.name);
    }
    let frame, row;
    if (this.hasUniformSlider) {
      row = this.row();
      frame = row.col();
    } else {
      frame = this;
    }
    this.sliders = [];
    for (let i = 0; i < this.value.length; i++) {
      let slider = frame.slider(void 0, {
        name: this.axes[i],
        defaultval: this.value[i],
        min: this.range[0],
        max: this.range[1],
        step: this.step || 1e-3,
        is_int: this.isInt,
        packflag: this.packflag
      });
      slider.addLabel = false;
      slider.labelOnTop = false;
      slider.axis = i;
      let this2 = this;
      slider.baseUnit = this.baseUnit;
      slider.slideSpeed = this.slideSpeed;
      slider.decimalPlaces = this.decimalPlaces;
      slider.displayUnit = this.displayUnit;
      slider.isInt = this.isInt;
      slider.range = this.__range;
      slider.radix = this.radix;
      slider.step = this.step;
      slider.expRate = this.expRate;
      slider.stepIsRelative = this.stepIsRelative;
      if (this.stepIsRelative) {
        slider.step = ToolProperty2.calcRelativeStep(this.step, this.value[i]);
      }
      slider.onchange = function(e) {
        this2.value[this.axis] = this.value;
        if (this2.hasAttribute("datapath")) {
          this2.setPathValue(this2.ctx, this2.getAttribute("datapath"), this2.value);
        }
        if (this2.uslider) {
          this2.uslider.setValue(this2.uniformValue, false);
        }
        if (this2.onchange) {
          this2.onchange(this2.value);
        }
      };
      this.sliders.push(slider);
    }
    if (this.hasUniformSlider) {
      let uslider = this.uslider = UIBase2.createElement("numslider-x");
      row._prepend(uslider);
      uslider.range = this.range;
      uslider.baseUnit = this.baseUnit;
      uslider.slideSpeed = this.slideSpeed;
      uslider.decimalPlaces = this.decimalPlaces;
      uslider.displayUnit = this.displayUnit;
      uslider.expRate = this.expRate;
      uslider.step = this.step;
      uslider.expRate = this.expRate;
      uslider.isInt = this.isInt;
      uslider.radix = this.radix;
      uslider.decimalPlaces = this.decimalPlaces;
      uslider.stepIsRelative = this.stepIsRelative;
      uslider.vertical = true;
      uslider.setValue(this.uniformValue, false);
      this.sliders.push(uslider);
      uslider.onchange = () => {
        this.uniformValue = uslider.value;
      };
    } else {
      this.uslider = void 0;
    }
    this.setCSS();
  }
  get uniformValue() {
    let sum = 0;
    for (let i = 0; i < this.value.length; i++) {
      sum += isNaN(this.value[i]) ? 0 : this.value[i];
    }
    return sum / this.value.length;
  }
  set uniformValue(val) {
    let old = this.uniformValue;
    let doupdate = false;
    if (old === 0 || val === 0) {
      doupdate = this.value.dot(this.value) !== 0;
      this.value.zero();
    } else {
      let ratio = val / old;
      for (let i = 0; i < this.value.length; i++) {
        this.value[i] *= ratio;
      }
      doupdate = true;
    }
    if (doupdate) {
      if (this.hasAttribute("datapath")) {
        this.setPathValue(this.ctx, this.getAttribute("datapath"), this.value);
      }
      if (this.onchange) {
        this.onchange(this.value);
      }
      for (let i = 0; i < this.value.length; i++) {
        this.sliders[i].setValue(this.value[i], false);
        this.sliders[i]._redraw();
      }
      if (this.uslider) {
        this.uslider.setValue(val, false);
        this.uslider._redraw();
      }
    }
  }
  setValue(value) {
    if (!value) {
      return;
    }
    if (value.length !== this.value.length) {
      switch (value.length) {
        case 2:
          this.value = new Vector2(value);
          break;
        case 3:
          this.value = new Vector3(value);
          break;
        case 4:
          this.value = new Vector4(value);
          break;
        default:
          throw new Error("invalid vector size " + value.length);
      }
      this.rebuild();
    } else {
      this.value.load(value);
    }
    if (this.onchange) {
      this.onchange(this.value);
    }
    return this;
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let path = this.getAttribute("datapath");
    let val = this.getPathValue(this.ctx, path);
    if (val === void 0) {
      this.internalDisabled = true;
      return;
    }
    let meta = this.getPathMeta(this.ctx, path);
    let name2 = meta.uiname !== void 0 ? meta.uiname : meta.name;
    if (this.hasAttribute("name")) {
      name2 = this.getAttribute("name");
    }
    if (name2 && name2 !== this.name) {
      this.name = name2;
      this.rebuild();
      return;
    }
    let loadNumParam = /* @__PURE__ */ __name((k, do_rebuild = false) => {
      if (meta && meta[k] !== void 0 && this[k] === void 0) {
        this[k] = meta[k];
        if (this[k] !== meta[k] && do_rebuild) {
          this.doOnce(this.rebuild);
        }
      }
    }, "loadNumParam");
    loadNumParam("decimalPlaces");
    loadNumParam("baseUnit");
    loadNumParam("slideSpeed");
    loadNumParam("displayUnit");
    loadNumParam("decimalPlaces");
    loadNumParam("isInt");
    loadNumParam("radix");
    loadNumParam("step");
    loadNumParam("expRate");
    loadNumParam("stepIsRelative");
    if (meta && meta.hasUniformSlider !== void 0 && meta.hasUniformSlider !== this.hasUniformSlider) {
      this.hasUniformSlider = meta.hasUniformSlider;
      this.doOnce(this.rebuild);
    }
    if (meta && meta.range) {
      let update = this.range[0] !== meta.range[0];
      update = update || this.range[1] !== meta.range[1];
      this.range[0] = meta.range[0];
      this.range[1] = meta.range[1];
      if (update) {
        this.doOnce(this.rebuild);
      }
    }
    this.internalDisabled = false;
    let length = val.length;
    if (meta && meta.flag & PropFlags.USE_CUSTOM_GETSET) {
      let rdef = this.ctx.api.resolvePath(this.ctx, path);
      meta.ctx = this.ctx;
      meta.dataref = rdef.obj;
      meta.datapath = path;
      length = meta.getValue().length;
      meta.dataref = void 0;
    }
    if (this.value.length !== length) {
      switch (length) {
        case 2:
          val = new Vector2(val);
          break;
        case 3:
          val = new Vector3(val);
          break;
        case 4:
          val = new Vector4(val);
          break;
        default:
          val = meta.getValue().copy().load(val);
          break;
      }
      this.value = val;
      this.rebuild();
      for (let i = 0; i < this.value.length; i++) {
        this.sliders[i].setValue(val[i], false);
        this.sliders[i]._redraw();
      }
    } else {
      if (this.value.vectorDistance(val) > 0) {
        this.value.load(val);
        if (this.uslider) {
          this.uslider.setValue(this.uniformValue, false);
        }
        for (let i = 0; i < this.value.length; i++) {
          this.sliders[i].setValue(val[i], false);
          this.sliders[i]._redraw();
        }
      }
    }
  }
  update() {
    super.update();
    this.updateDataPath();
    if (this.stepIsRelative) {
      for (let slider of this.sliders) {
        slider.step = ToolProperty2.calcRelativeStep(this.step, slider.value);
      }
    }
    if (this.uslider) {
      this.uslider.step = this.step;
      if (this.stepIsRelative) {
        this.uslider.step = ToolProperty2.calcRelativeStep(this.step, this.uniformValue);
      }
    }
  }
  static define() {
    return {
      tagname: "vector-panel-x"
    };
  }
};
UIBase2.internalRegister(VectorPanel);
var ToolTip = class extends UIBase2 {
  static {
    __name(this, "ToolTip");
  }
  constructor() {
    super();
    this.visibleToPick = false;
    this.div = document.createElement("div");
    this.shadow.appendChild(this.div);
    this._start_time = void 0;
    this.timeout = void 0;
  }
  static show(message2, screen, x, y) {
    let ret = UIBase2.createElement(this.define().tagname);
    ret._start_time = time_ms();
    ret.timeout = ret.getDefault("timeout");
    ret.text = message2;
    let size = ret._estimateSize();
    let pad = 5;
    size = [size[0] + pad, size[1] + pad];
    console.log(size);
    x = Math.min(Math.max(x, 0), screen.size[0] - size[0]);
    y = Math.min(Math.max(y, 0), screen.size[1] - size[1]);
    let dpi = UIBase2.getDPI();
    x += 10 / dpi;
    y += 15 / dpi;
    ret._popup = screen.popup(ret, x, y);
    ret._popup.background = "rgba(0,0,0,0)";
    ret._popup.style["border"] = "none";
    ret.div.style["padding"] = "15px";
    ret._popup.add(ret);
    return ret;
  }
  end() {
    this._popup.end();
  }
  init() {
    super.init();
    this.setCSS();
  }
  set text(val) {
    this.div.innerHTML = val.replace(/[\n]/g, "<br>\n");
  }
  get text() {
    return this.div.innerHTML;
  }
  _estimateSize() {
    let text2 = this.div.textContent;
    let block = measureTextBlock(this, text2, void 0, void 0, void 0, this.getDefault("ToolTipText"));
    return [block.width + 50, block.height + 30];
  }
  update() {
    super.update();
    if (time_ms() - this._start_time > this.timeout) {
      this.end();
    }
  }
  setCSS() {
    super.setCSS();
    let color = this.getDefault("background-color");
    let bcolor = this.getDefault("border-color");
    this.background = color;
    let radius = this.getDefault("border-radius", void 0, 5);
    let bstyle = this.getDefault("border-style", void 0, "solid");
    let bwidth = this.getDefault("border-width", void 0, 1);
    let padding = this.getDefault("padding", void 0, 15);
    this.noMarginsOrPadding();
    this.div.style["padding"] = padding + "px";
    this.div.style["background-color"] = "rgba(0,0,0,0)";
    this.div.style["border"] = `${bwidth}px ${bstyle} ${bcolor}`;
    this.div.style["border-radius"] = radius + "px";
    this.style["border-radius"] = radius + "px";
    let font = this.getDefault("ToolTipText");
    this.div.style["color"] = font.color;
    this.div.style["font"] = font.genCSS();
  }
  static define() {
    return {
      tagname: "tool-tip-x",
      style: "tooltip"
    };
  }
};
;
UIBase2.internalRegister(ToolTip);
window._ToolTip = ToolTip;

// scripts/path.ux/scripts/screen/FrameManager_ops.js
var toolstack_getter = /* @__PURE__ */ __name(function() {
  throw new Error("must pass a toolstack getter to registerToolStackGetter");
}, "toolstack_getter");
function registerToolStackGetter(func2) {
  toolstack_getter = func2;
}
__name(registerToolStackGetter, "registerToolStackGetter");
var Vector23 = Vector2, Vector32 = Vector3, UndoFlags2 = UndoFlags, ToolFlags2 = ToolFlags;
var ToolBase = class extends ToolOp {
  static {
    __name(this, "ToolBase");
  }
  constructor(screen) {
    super();
    this.screen = screen;
    this._finished = false;
  }
  start(elem2, pointerId) {
    this.modalStart(void 0, elem2, pointerId);
  }
  cancel() {
    this.finish();
  }
  finish() {
    this._finished = true;
    this.popModal(this.screen);
  }
  popModal() {
    this.overdraw.end();
    popModalLight(this.modaldata);
    this.modaldata = void 0;
  }
  modalStart(ctx, elem2, pointerId) {
    this.ctx = ctx;
    if (this.modaldata !== void 0) {
      console.log("Error, modaldata was not undefined");
      popModalLight(this.modaldata);
    }
    this.overdraw = UIBase2.createElement("overdraw-x");
    this.overdraw.start(this.screen);
    let handlers = {};
    let keys = Object.getOwnPropertyNames(this);
    for (let k in this.__proto__) {
      keys.push(k);
    }
    for (let k of Object.getOwnPropertyNames(this.__proto__)) {
      keys.push(k);
    }
    for (let k in this) {
      keys.push(k);
    }
    for (let k of keys) {
      if (k.startsWith("on")) {
        handlers[k] = this[k].bind(this);
      }
    }
    if (pointerId !== void 0) {
      handlers.on_pointerdown = handlers.on_pointerdown ?? handlers.on_mousedown;
      handlers.on_pointermove = handlers.on_pointermove ?? handlers.on_mousemove;
      handlers.on_pointerup = handlers.on_pointerup ?? handlers.on_mouseup;
      handlers.on_pointercancel = handlers.on_pointercancel ?? handlers.on_pointerup ?? handlers.on_mouseup;
      this.modaldata = pushPointerModal(handlers, elem2, pointerId);
    } else {
      this.modaldata = pushModalLight(handlers);
    }
  }
  on_pointermove(e) {
  }
  on_pointerup(e) {
    this.finish();
  }
  on_keydown(e) {
    console.log("s", e.keyCode);
    switch (e.keyCode) {
      case keymap.Escape:
        this.cancel();
        break;
      case keymap.Space:
      //space
      case keymap.Enter:
        this.finish();
        break;
    }
  }
};
var AreaResizeTool = class extends ToolBase {
  static {
    __name(this, "AreaResizeTool");
  }
  constructor(screen, border, mpos) {
    if (screen === void 0) screen = _appstate.screen;
    super(screen);
    this.start_mpos = new Vector23(mpos);
    this.sarea = border.sareas[0];
    if (!this.sarea || border.dead) {
      console.log(border.dead, border);
      throw new Error("border corruption");
    }
    this.screen = screen;
    this.side = this.sarea._side(border);
  }
  get border() {
    return this.sarea._borders[this.side];
  }
  static tooldef() {
    return {
      uiname: "Resize Area",
      toolpath: "screen.area.resize",
      icon: Icons.RESIZE,
      description: "change size of area",
      is_modal: true,
      undoflag: UndoFlags2.NO_UNDO,
      flag: 0,
      inputs: {},
      //tool properties
      outputs: {}
      //tool properties
    };
  }
  getBorders() {
    let horiz = this.border.horiz;
    let ret = [];
    let visit = /* @__PURE__ */ new Set();
    let rec = /* @__PURE__ */ __name((v) => {
      if (visit.has(v._id)) {
        return;
      }
      visit.add(v._id);
      for (let border of v.borders) {
        if (border.horiz == horiz && !visit.has(border._id)) {
          visit.add(border._id);
          ret.push(border);
          rec(border.otherVertex(v));
        }
      }
    }, "rec");
    rec(this.border.v1);
    rec(this.border.v2);
    return ret;
  }
  on_pointerup(e) {
    this.finish();
  }
  finish() {
    super.finish();
    this.screen.snapScreenVerts();
    this.screen.regenBorders();
    this.screen.snapScreenVerts();
    this.screen.loadFromVerts();
  }
  on_keydown(e) {
    switch (e.keyCode) {
      case keymap["Escape"]:
      case keymap["Enter"]:
      case keymap["Space"]:
        this.finish();
        break;
    }
  }
  on_pointermove(e) {
    let mpos = new Vector23([e.x, e.y]);
    mpos.sub(this.start_mpos);
    let axis = this.border.horiz ? 1 : 0;
    this.overdraw.clear();
    let visit = /* @__PURE__ */ new Set();
    let borders = this.getBorders();
    let color = const_default.DEBUG.screenborders ? "rgba(1.0, 0.5, 0.0, 0.1)" : "rgba(1.0, 0.5, 0.0, 1.0)";
    let bad = false;
    for (let border2 of borders) {
      bad = bad || !this.screen.isBorderMovable(border2);
      border2.oldv1 = new Vector23(border2.v1);
      border2.oldv2 = new Vector23(border2.v2);
    }
    if (bad) {
      console.log("border is not movable");
      return;
    }
    let check = /* @__PURE__ */ __name(() => {
      let count = 0;
      for (let sarea of this.screen.sareas) {
        if (sarea.size[0] < 15 || sarea.size[1] < 15) {
          count++;
        }
      }
      return count;
    }, "check");
    let badcount = check();
    let snapMode = true;
    let df = mpos[axis];
    let border = this.border;
    this.screen.moveBorder(border, df, false);
    for (let border2 of borders) {
      if (border2.outer) {
        snapMode = false;
      }
      this.overdraw.line(border2.v1, border2.v2, color);
    }
    this.start_mpos[0] = e.x;
    this.start_mpos[1] = e.y;
    this.screen.loadFromVerts();
    this.screen.setCSS();
    if (check() != badcount) {
      console.log("bad");
      for (let border2 of borders) {
        border2.v1.load(border2.oldv1);
        border2.v2.load(border2.oldv2);
      }
    }
    this.screen.snapScreenVerts(snapMode);
    this.screen.loadFromVerts();
    this.screen.solveAreaConstraints(snapMode);
    this.screen.setCSS();
    this.screen.updateDebugBoxes();
    this.screen._fireResizeCB();
  }
};
var SplitTool = class extends ToolBase {
  static {
    __name(this, "SplitTool");
  }
  constructor(screen) {
    if (screen === void 0) screen = _appstate.screen;
    super(screen);
    this.done = false;
    this.screen = screen;
    this.ctx = screen.ctx;
    this.sarea = void 0;
    this.t = void 0;
    this.started = false;
  }
  static tooldef() {
    return {
      uiname: "Split Area",
      toolpath: "screen.area.split",
      icon: Icons.SMALL_PLUS,
      description: "split an area in two",
      is_modal: true,
      undoflag: UndoFlags2.NO_UNDO,
      flag: 0,
      inputs: {},
      //tool properties
      outputs: {}
      //tool properties
    };
  }
  modalStart(ctx) {
    if (this.started) {
      console.trace("double call to modalStart()");
      return;
    }
    this.overdraw = UIBase2.createElement("overdraw-x");
    this.overdraw.start(this.screen);
    super.modalStart(ctx);
  }
  cancel() {
    return this.finish(true);
  }
  finish(canceled = false) {
    if (this.done) {
      return;
    }
    this.done = true;
    this.overdraw.end();
    this.popModal(this.screen);
    if (canceled || !this.sarea) {
      return;
    }
    let sarea = this.sarea, screen = this.screen;
    let t = this.t;
    screen.splitArea(sarea, t, this.horiz);
    screen._internalRegenAll();
  }
  on_pointermove(e) {
    let x = e.x, y = e.y;
    let screen = this.screen;
    let sarea = screen.findScreenArea(x, y);
    this.overdraw.clear();
    if (sarea !== void 0) {
      x = (x - sarea.pos[0]) / sarea.size[0];
      y = (y - sarea.pos[1]) / sarea.size[1];
      let dx = 1 - Math.abs(x - 0.5);
      let dy = 1 - Math.abs(y - 0.5);
      this.sarea = sarea;
      let horiz = this.horiz = dx < dy;
      if (horiz) {
        this.t = y;
        this.overdraw.line([sarea.pos[0], e.y], [sarea.pos[0] + sarea.size[0], e.y]);
      } else {
        this.t = x;
        this.overdraw.line([e.x, sarea.pos[1]], [e.x, sarea.pos[1] + sarea.size[1]]);
      }
    }
  }
  on_pointerdown(e) {
    this.finish();
    if (e.button) {
      this.stopPropagation();
      this.preventDefault();
    }
  }
  on_keydown(e) {
    switch (e.keyCode) {
      case keymap.Escape:
        this.cancel();
        break;
      case keymap.Space:
      //space
      case keymap.Enter:
        this.finish();
        break;
    }
  }
};
var RemoveAreaTool = class extends ToolBase {
  static {
    __name(this, "RemoveAreaTool");
  }
  constructor(screen, border) {
    if (screen === void 0) screen = _appstate.screen;
    super(screen);
    this.border = border;
    this.done = false;
    this.screen = screen;
    this.ctx = screen.ctx;
    this.sarea = void 0;
    this.t = void 0;
    this.started = false;
  }
  static tooldef() {
    return {
      uiname: "Remove Area",
      toolpath: "screen.area.pick_remove",
      icon: Icons.SMALL_PLUS,
      description: "Collapse a window",
      is_modal: true,
      undoflag: UndoFlags2.NO_UNDO,
      flag: 0,
      inputs: {},
      //tool properties
      outputs: {}
      //tool properties
    };
  }
  modalStart(ctx) {
    if (this.started) {
      console.trace("double call to modalStart()");
      return;
    }
    this.overdraw = UIBase2.createElement("overdraw-x");
    this.overdraw.start(this.screen);
    super.modalStart(ctx);
  }
  cancel() {
    return this.finish(true);
  }
  finish(canceled = false) {
    if (this.done) {
      return;
    }
    this.done = true;
    this.overdraw.end();
    this.popModal(this.screen);
    if (canceled || !this.sarea) {
      return;
    }
    let sarea = this.sarea, screen = this.screen;
    let t = this.t;
    if (sarea) {
      screen.collapseArea(sarea, this.border);
      screen._internalRegenAll();
    }
  }
  on_pointermove(e) {
    let x = e.x, y = e.y;
    let screen = this.screen;
    let sarea = screen.findScreenArea(x, y);
    this.overdraw.clear();
    if (sarea !== void 0) {
      this.sarea = sarea;
      this.overdraw.rect(sarea.pos, sarea.size, "rgba(0,0,0,0.1)");
    }
  }
  on_pointerdown(e) {
    this.finish();
    if (e.button) {
      this.stopPropagation();
      this.preventDefault();
    }
  }
  on_keydown(e) {
    console.log("s", e.keyCode);
    switch (e.keyCode) {
      case keymap.Escape:
        this.cancel();
        break;
      case keymap.Space:
      //space
      case keymap.Enter:
        this.finish();
        break;
    }
  }
};
var AreaDragTool = class extends ToolBase {
  static {
    __name(this, "AreaDragTool");
  }
  constructor(screen, sarea, mpos) {
    if (screen === void 0) screen = _appstate.screen;
    super(screen);
    this.dropArea = false;
    this.excludeAreas = /* @__PURE__ */ new Set();
    this.cursorbox = void 0;
    this.boxes = [];
    this.boxes.active = void 0;
    this.sarea = sarea;
    this.start_mpos = new Vector23(mpos);
    this.screen = screen;
  }
  static tooldef() {
    return {
      uiname: "Drag Area",
      toolpath: "screen.area.drag",
      icon: Icons.TRANSLATE,
      description: "move or duplicate area",
      is_modal: true,
      undoflag: UndoFlags2.NO_UNDO,
      flag: 0,
      inputs: {},
      //tool properties
      outputs: {}
      //tool properties
    };
  }
  finish() {
    super.finish();
    this.screen.regenBorders();
    this.screen.solveAreaConstraints();
    this.screen.snapScreenVerts();
    this.screen._recalcAABB();
  }
  getBoxRect(b) {
    let sa = b.sarea;
    let pos, size;
    if (b.horiz == -1) {
      pos = sa.pos;
      size = sa.size;
    } else if (b.horiz) {
      if (b.side == "b") {
        pos = [sa.pos[0], sa.pos[1] + sa.size[1] * b.t];
        size = [sa.size[0], sa.size[1] * (1 - b.t)];
      } else {
        pos = [sa.pos[0], sa.pos[1]];
        size = [sa.size[0], sa.size[1] * b.t];
      }
    } else {
      if (b.side == "r") {
        pos = [sa.pos[0] + sa.size[0] * b.t, sa.pos[1]];
        size = [sa.size[0] * (1 - b.t), sa.size[1]];
      } else {
        pos = [sa.pos[0], sa.pos[1]];
        size = [sa.size[0] * b.t, sa.size[1]];
      }
    }
    let color = "rgba(100, 100, 100, 0.2)";
    let ret = this.overdraw.rect(pos, size, color);
    ret.style["pointer-events"] = "none";
    return ret;
  }
  doSplit(b) {
    if (this.sarea) {
      return this.doSplitDrop(b);
    }
    let src = this.sarea, dst = b.sarea;
    let screen = this.screen;
    let t = b.t;
    screen.splitArea(dst, t, b.horiz);
    screen._internalRegenAll();
  }
  doSplitDrop(b) {
    if (b.horiz === -1 && b.sarea === this.sarea) {
      return;
    }
    let can_rip = false;
    let sa = this.sarea;
    let screen = this.screen;
    can_rip = sa.size[0] === screen.size[0] || sa.size[1] === screen.size[1];
    can_rip = can_rip || this.sarea.floating;
    can_rip = can_rip && b.sarea !== sa;
    can_rip = can_rip && (b.horiz === -1 || !screen.areasBorder(sa, b.sarea));
    let expand = b.horiz === -1 && b.sarea !== sa && screen.areasBorder(b.sarea, sa);
    can_rip = can_rip || expand;
    console.log("can_rip:", can_rip, expand);
    if (can_rip) {
      screen.removeArea(sa);
      screen.snapScreenVerts();
    }
    if (b.horiz === -1) {
      let src = this.sarea, dst = b.sarea;
      if (can_rip && src !== dst) {
        let mm;
        if (expand) {
          mm = screen.minmaxArea(src);
          screen.minmaxArea(dst, mm);
        }
        console.log("replacing. . .", expand);
        if (src.floating) {
          let old = dst.editors;
          dst.editors = [];
          dst.editormap = {};
          if (dst.area && !(dst.area.constructor.define().areaname in src.editormap)) {
            dst.area.push_ctx_active();
            dst.area.on_area_inactive();
            dst.area.remove();
            dst.area.pop_ctx_active();
          }
          for (let editor of old) {
            let def = editor.constructor.define();
            let bad = false;
            for (let editor2 of src.editors) {
              if (editor.constructor === editor2.constructor) {
                bad = true;
                break;
              }
            }
            if (!bad) {
              dst.editors.push(editor);
              dst.editormap[def.areaname] = editor;
            }
          }
          for (let editor of src.editors) {
            let def = editor.constructor.define();
            dst.editormap[def.areaname] = editor;
            dst.editors.push(editor);
            if (editor.owning_sarea) {
              editor.owning_sarea = dst;
            }
            if (editor.parentWidget) {
              editor.parentWidget = dst;
            }
          }
          if (const_default.useAreaTabSwitcher) {
            for (let editor of dst.editors) {
              if (editor.switcher) {
                editor.switcher.flagUpdate();
              }
            }
          }
          dst.area = src.area;
          dst.shadow.appendChild(src.area);
          src.area = void 0;
          src.editors = [];
          src.editormap = {};
          dst.on_resize(dst.size, dst.size);
          dst.flushSetCSS();
          dst.flushUpdate();
          screen.removeArea(src);
          screen.snapScreenVerts();
          return;
        } else {
          screen.replaceArea(dst, src);
        }
        if (expand) {
          console.log("\nEXPANDING:", src.size[0], src.size[1]);
          src.pos[0] = mm.min[0];
          src.pos[1] = mm.min[1];
          src.size[0] = mm.max[0] - mm.min[0];
          src.size[1] = mm.max[1] - mm.min[1];
          src.loadFromPosSize();
          screen._internalRegenAll();
        }
      } else {
        screen.replaceArea(dst, src.copy());
        screen._internalRegenAll();
      }
    } else {
      let src = this.sarea, dst = b.sarea;
      let t = b.t;
      let nsa = screen.splitArea(dst, t, b.horiz);
      if (b.side === "l" || b.side === "t") {
        nsa = dst;
      }
      if (can_rip) {
        screen.replaceArea(nsa, src);
      } else {
        screen.replaceArea(nsa, src.copy());
      }
      screen._internalRegenAll();
    }
  }
  makeBoxes(sa) {
    let sz = isMobile() ? 100 : 40;
    let cx = sa.pos[0] + sa.size[0] * 0.5;
    let cy = sa.pos[1] + sa.size[1] * 0.5;
    let color = this.color = "rgba(200, 200, 200, 0.55)";
    let hcolor = this.hcolor = "rgba(230, 230, 230, 0.75)";
    let idgen2 = 0;
    let boxes = this.boxes;
    let box = /* @__PURE__ */ __name((x, y, sz2, horiz, t, side) => {
      let b = this.overdraw.rect([x - sz2[0] * 0.5, y - sz2[1] * 0.5], sz2, color);
      b.style["border-radius"] = "14px";
      boxes.push(b);
      b.sarea = sa;
      let style = document.createElement("style");
      let cls = `mybox_${idgen2++}`;
      b.horiz = horiz;
      b.t = t;
      b.side = side;
      b.setAttribute("class", cls);
      b.setAttribute("is_box", true);
      b.addEventListener("pointermove", this.on_pointermove.bind(this));
      let onclick = b.onclick = (e) => {
        let type = e.type.toLowerCase();
        if ((e.type === "pointerdown" || e.type === "pointerup") && e.button !== 0) {
          return;
        }
        console.log("split click");
        if (!this._finished) {
          this.finish();
          this.doSplit(b);
          e.preventDefault();
          e.stopPropagation();
        }
      };
      b.addEventListener("click", onclick);
      b.addEventListener("pointerdown", onclick);
      b.addEventListener("pointerup", onclick);
      b.addEventListener("pointerenter", (e) => {
        if (this.curbox !== void 0) {
          if (this.curbox.rect) {
            this.curbox.rect.remove();
            this.curbox.rect = void 0;
          }
        }
        if (b.rect !== void 0) {
          b.rect.remove();
          b.rect = void 0;
        }
        b.rect = this.getBoxRect(b);
        this.curbox = b;
        b.setColor(hcolor);
      });
      b.addEventListener("pointerleave", (e) => {
        if (b.rect) {
          b.rect.remove();
          b.rect = void 0;
        }
        if (this.curbox === b) {
          this.curbox = void 0;
        }
        b.setColor(color);
      });
      style.textContent = `
        .${cls}:hover {
          background-color : orange;
          fill:orange;stroke-width:2
        }
      `;
      b.appendChild(style);
      b.setAttribute("class", cls);
      return b;
    }, "box");
    let pad = 5;
    if (this.sarea) {
      box(cx, cy, [sz, sz], -1, -1, -1);
    }
    box(cx - sz * 0.75 - pad, cy, [sz * 0.5, sz], false, 0.5, "l");
    box(cx - sz * 1.2 - pad, cy, [sz * 0.25, sz], false, 0.3, "l");
    box(cx + sz * 0.75 + pad, cy, [sz * 0.5, sz], false, 0.5, "r");
    box(cx + sz * 1.2 + pad, cy, [sz * 0.25, sz], false, 0.7, "r");
    box(cx, cy - sz * 0.75 - pad, [sz, sz * 0.5], true, 0.5, "t");
    box(cx, cy - sz * 1.2 - pad, [sz, sz * 0.25], true, 0.3, "t");
    box(cx, cy + sz * 0.75 + pad, [sz, sz * 0.5], true, 0.5, "b");
    box(cx, cy + sz * 1.2 + pad, [sz, sz * 0.25], true, 0.7, "b");
  }
  getActiveBox(x, y) {
    for (let n of this.boxes) {
      if (n.hasAttribute && n.hasAttribute("is_box")) {
        let rect = n.getClientRects()[0];
        if (x >= rect.x && y >= rect.y && x < rect.x + rect.width && y < rect.y + rect.height) {
          return n;
        }
      }
    }
  }
  on_drag(e) {
    this.on_pointermove(e);
  }
  on_dragend(e) {
    this.on_pointerup(e);
  }
  on_pointermove(e) {
    let wid = 55;
    let color = "rgb(200, 200, 200, 0.7)";
    let n = this.getActiveBox(e.x, e.y);
    if (n !== void 0) {
      n.setColor(this.hcolor);
    }
    if (this.boxes.active !== void 0 && this.boxes.active !== n) {
      this.boxes.active.setColor(this.color);
      this.boxes.active.dispatchEvent(new PointerEvent("pointerleave", e));
    }
    if (n !== void 0) {
      n.dispatchEvent(new PointerEvent("pointerenter", e));
    }
    this.boxes.active = n;
    if (this.sarea === void 0) {
      return;
    }
    if (this.cursorbox === void 0) {
      wid = 25;
      this.cursorbox = this.overdraw.rect([e.x - wid * 0.5, e.y - wid * 0.5], [wid, wid], color);
      this.cursorbox.style["pointer-events"] = "none";
    } else {
      this.cursorbox.style["x"] = e.x - wid * 0.5 + "px";
      this.cursorbox.style["y"] = e.y - wid * 0.5 + "px";
    }
  }
  on_pointerup(e) {
    console.log("e.button", e.button, e, e.x, e.y, this.getActiveBox(e.x, e.y));
    if (e.button) {
      e.stopPropagation();
      e.preventDefault();
    } else {
      let box = this.getActiveBox(e.x, e.y);
      if (box !== void 0) {
        box.onclick(e);
      }
    }
    this.finish();
  }
  modalStart(ctx) {
    super.modalStart(...arguments);
    let screen = this.screen;
    this.overdraw.clear();
    if (this.sarea && !this.excludeAreas.has(this.sarea)) {
      let sa = this.sarea;
      let box = this.overdraw.rect(sa.pos, sa.size, "rgba(100, 100, 100, 0.5)");
      box.style["pointer-events"] = "none";
    }
    for (let sa of screen.sareas) {
      if (this.excludeAreas.has(sa)) {
        continue;
      }
      this.makeBoxes(sa);
    }
  }
  on_keydown(e) {
    switch (e.keyCode) {
      case keymap["Escape"]:
      case keymap["Enter"]:
      case keymap["Space"]:
        this.finish();
        break;
    }
  }
};
var AreaMoveAttachTool = class extends AreaDragTool {
  static {
    __name(this, "AreaMoveAttachTool");
  }
  constructor(screen, sarea, mpos) {
    super(screen, sarea, mpos);
    this.excludeAreas = /* @__PURE__ */ new Set([sarea]);
    this.dropArea = true;
    this.first = true;
    this.sarea = sarea;
    this.mpos = new Vector23(mpos);
    this.start_mpos2 = new Vector23(mpos);
    this.start_pos = new Vector23(sarea.pos);
  }
  on_pointermove(e) {
    let dx = e.x - this.start_mpos2[0];
    let dy = e.y - this.start_mpos2[1];
    let sarea = this.sarea;
    if (this.first) {
      this.start_mpos2 = new Vector23([e.x, e.y]);
      this.first = false;
      return;
    }
    sarea.pos[0] = this.start_pos[0] + dx;
    sarea.pos[1] = this.start_pos[1] + dy;
    sarea.loadFromPosSize();
    this.mpos.loadXY(e.x, e.y);
    super.on_pointermove(e);
  }
  on_pointerup(e) {
    super.on_pointerup(e);
  }
  on_pointerdown(e) {
    super.on_pointerdown(e);
  }
  on_keydown(e) {
    super.on_keydown(e);
  }
};
var ToolTipViewer = class extends ToolBase {
  static {
    __name(this, "ToolTipViewer");
  }
  constructor(screen) {
    super(screen);
    this.tooltip = void 0;
    this.element = void 0;
  }
  static tooldef() {
    return {
      uiname: "Help Tool",
      toolpath: "screen.help_picker",
      icon: Icons.HELP,
      description: "view tooltips",
      is_modal: true,
      undoflag: UndoFlags2.NO_UNDO,
      flag: 0,
      inputs: {},
      //tool properties
      outputs: {}
      //tool properties
    };
  }
  on_pointermove(e) {
    this.pick(e);
  }
  on_pointerdown(e) {
    this.pick(e);
  }
  on_pointerup(e) {
    this.finish();
  }
  finish() {
    super.finish();
  }
  on_keydown(e) {
    switch (e.keyCode) {
      case keymap.Escape:
      case keymap.Enter:
      case Keymap.Space:
        if (this.tooltip) {
          this.tooltip.end();
        }
        this.finish();
        break;
    }
  }
  pick(e) {
    let x = e.x, y = e.y;
    let ele = this.screen.pickElement(x, y);
    console.log(ele ? ele.tagName : ele);
    if (ele !== void 0 && ele !== this.element && ele.title) {
      if (this.tooltip) {
        this.tooltip.end();
      }
      this.element = ele;
      let tip = ele.title;
      this.tooltip = ToolTip.show(tip, this.screen, x, y);
    }
    e.preventDefault();
    e.stopPropagation();
  }
};

// scripts/path.ux/scripts/screen/FrameManager_mesh.js
var AreaFlags = {
  HIDDEN: 1,
  FLOATING: 2,
  INDEPENDENT: 4,
  //area is indpendent of the screen mesh
  NO_SWITCHER: 8,
  NO_HEADER_CONTEXT_MENU: 16,
  NO_COLLAPSE: 32
};
var SnapLimit = 1;
var BORDER_ZINDEX_BASE = 25;
function snap(c, snap_limit = SnapLimit) {
  if (Array.isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      c[i] = Math.floor(c[i] / snap_limit) * snap_limit;
    }
  } else {
    c = Math.floor(c / snap_limit) * snap_limit;
  }
  return c;
}
__name(snap, "snap");
function snapi(c, snap_limit = SnapLimit) {
  if (Array.isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      c[i] = Math.ceil(c[i] / snap_limit) * snap_limit;
    }
  } else {
    c = Math.ceil(c / snap_limit) * snap_limit;
  }
  return c;
}
__name(snapi, "snapi");
var ScreenVert = class _ScreenVert extends Vector2 {
  static {
    __name(this, "ScreenVert");
  }
  constructor(pos, id2, added_id) {
    super(pos);
    this.added_id = added_id;
    this.sareas = [];
    this.borders = [];
    this._id = id2;
  }
  static hash(pos, added_id, limit) {
    let x = snap(pos[0], limit);
    let y = snap(pos[1], limit);
    return "" + x + ":" + y + ": + added_id";
  }
  valueOf() {
    return _ScreenVert.hash(this, this.added_id);
  }
  [Symbol.keystr]() {
    return _ScreenVert.hash(this, this.added_id);
  }
  loadSTRUCT(reader) {
    reader(this);
  }
};
ScreenVert.STRUCT = `
pathux.ScreenVert {
  0 : float;
  1 : float;
}
`;
struct_default.register(ScreenVert);
var ScreenHalfEdge = class {
  static {
    __name(this, "ScreenHalfEdge");
  }
  constructor(border, sarea) {
    this.sarea = sarea;
    this.border = border;
    this.side = sarea._side(border);
  }
  get v1() {
    return this.border.v1;
  }
  get v2() {
    return this.border.v2;
  }
  [Symbol.keystr]() {
    return this.sarea._id + ":" + this.border._id;
  }
};
var ScreenBorder = class _ScreenBorder extends UIBase2 {
  static {
    __name(this, "ScreenBorder");
  }
  constructor() {
    super();
    this.visibleToPick = false;
    this.screen = void 0;
    this.v1 = void 0;
    this.v2 = void 0;
    this._id = void 0;
    this._hash = void 0;
    this.outer = void 0;
    this.halfedges = [];
    this.sareas = [];
    this._innerstyle = document.createElement("style");
    this._style = void 0;
    this.shadow.appendChild(this._innerstyle);
    this.inner = document.createElement("div");
    this.shadow.appendChild(this.inner);
    let call_menu = _ScreenBorder.bindBorderMenu(this);
    this.addEventListener("pointerdown", (e) => {
      let ok = this.movable;
      if (e.button === 2) {
        call_menu(e);
        return;
      }
      if (!ok) {
        console.log("border is not movable");
        return;
      }
      let tool = new AreaResizeTool(this.screen, this, [e.x, e.y]);
      tool.start();
      e.preventDefault();
      e.stopPropagation();
    }, { capture: true });
  }
  static bindBorderMenu(elem2, usePickElement = false) {
    let on_dblclick = /* @__PURE__ */ __name((e) => {
      if (usePickElement && elem2.pickElement(e.x, e.y) !== elem2) {
        return;
      }
      let menu = [
        ["Split Area", () => {
          elem2.ctx.screen.splitTool();
        }],
        Menu.SEP,
        ["Collapse Area", () => {
          console.log("Collapse Area!");
          elem2.ctx.screen.removeAreaTool(elem2 instanceof _ScreenBorder ? elem2 : void 0);
        }]
      ];
      menu = createMenu(elem2.ctx, "", menu);
      menu.ignoreFirstClick = 2;
      elem2.ctx.screen.popupMenu(menu, e.x - 15, e.y - 15);
      e.preventDefault();
      e.stopPropagation();
    }, "on_dblclick");
    elem2.addEventListener("contextmenu", (e) => e.preventDefault());
    elem2.addEventListener("dblclick", on_dblclick, { capture: true });
    return on_dblclick;
  }
  getOtherSarea(sarea) {
    console.log(this.halfedges, this.halfedges.length);
    for (let he of this.halfedges) {
      console.log(he);
      let ok = he.sarea !== sarea;
      ok = ok && he.sarea._verts.indexOf(this.v1) >= 0;
      ok = ok && he.sarea._verts.indexOf(this.v2) >= 0;
      if (ok) {
        return he.sarea;
      }
    }
  }
  get locked() {
    for (let sarea of this.sareas) {
      let mask = 1 << sarea._borders.indexOf(this);
      let lock = sarea.borderLock & mask;
      if (lock || sarea.flag & AreaFlags.NO_COLLAPSE) {
        return true;
      }
    }
    return false;
  }
  get dead() {
    return !this.parentNode;
  }
  get side() {
    throw new Error("side accedd");
  }
  set side(val) {
    throw new Error("side accedd");
  }
  get valence() {
    let ret = 0;
    let horiz = this.horiz;
    let visit = {};
    for (let i = 0; i < 2; i++) {
      let sv = i ? this.v2 : this.v1;
      for (let sa of sv.borders) {
        if (sa.horiz != this.horiz)
          continue;
        if (sa._id in visit)
          continue;
        visit[sa._id] = 1;
        let a0x = Math.min(this.v1[0], this.v2[0]);
        let a0y = Math.min(this.v1[1], this.v2[1]);
        let a1x = Math.max(this.v1[0], this.v2[0]);
        let a1y = Math.max(this.v1[1], this.v2[1]);
        let b0x = Math.min(sa.v1[0], sa.v2[0]);
        let b0y = Math.min(sa.v1[1], sa.v2[1]);
        let b1x = Math.min(sa.v1[0], sa.v2[0]);
        let b1y = Math.min(sa.v1[1], sa.v2[1]);
        let ok;
        let eps = 1e-3;
        if (horiz) {
          ok = a0y <= b1y + eps && a1y >= a0y - eps;
        } else {
          ok = a0x <= b1x + eps && a1x >= a0x - eps;
        }
        if (ok) {
          ret += sa.sareas.length;
        }
      }
    }
    return ret;
  }
  get horiz() {
    let dx = this.v2[0] - this.v1[0];
    let dy = this.v2[1] - this.v1[1];
    return Math.abs(dx) > Math.abs(dy);
  }
  static hash(v1, v2) {
    return Math.min(v1._id, v2._id) + ":" + Math.max(v1._id, v2._id);
  }
  static define() {
    return {
      tagname: "screenborder-x",
      style: "screenborder"
    };
  }
  otherVertex(v) {
    if (v === this.v1)
      return this.v2;
    else
      return this.v1;
  }
  setCSS() {
    this.style["pointer-events"] = this.movable ? "auto" : "none";
    if (this._style === void 0) {
      this._style = document.createElement("style");
      this.appendChild(this._style);
    }
    let dpi = UIBase2.getDPI();
    let pad = this.getDefault("mouse-threshold") / dpi;
    let wid = this.getDefault("border-width");
    let v1 = this.v1, v2 = this.v2;
    let vec = new Vector2(v2).sub(v1);
    let x = Math.min(v1[0], v2[0]), y = Math.min(v1[1], v2[1]);
    let w, h;
    let cursor, bstyle;
    this.style["display"] = "flex";
    this.style["display"] = this.horiz ? "row" : "column";
    this.style["justify-content"] = "center";
    this.style["align-items"] = "center";
    if (!this.horiz) {
      this.style["padding-left"] = this.style["padding-right"] = pad + "px";
      x -= wid * 0.5 + pad;
      w = wid * 2;
      h = Math.abs(vec[1]);
      cursor = "e-resize";
      bstyle = "border-left-style : solid;\n    border-right-style : solid;\n";
      bstyle = "border-top-style : none;\n    border-bottom-style : none;\n";
    } else {
      this.style["padding-top"] = this.style["padding-bottom"] = pad + "px";
      y -= wid * 0.5 + pad;
      w = Math.abs(vec[0]);
      h = wid;
      cursor = "n-resize";
      bstyle = "border-top-style : solid;\n    border-bottom-style : solid;\n";
    }
    let color = this.getDefault("border-outer");
    let debug2 = const_default.DEBUG.screenborders;
    if (debug2) {
      wid = 4;
      let alpha = 1;
      let c = this.sareas.length * 75;
      let r = 0, g = 0, b = 0;
      if (this.movable) {
        b = 255;
      }
      if (this.halfedges.length > 1) {
        g = 255;
      }
      if (this.outer) {
        r = 255;
      }
      color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    let innerbuf = `
        .screenborder_inner_${this._id} {
          ${bstyle}
          ${this.horiz ? "height" : "width"} : ${wid}px;
          ${!this.horiz ? "height" : "width"} : 100%;
          margin : 0px;
          padding : 0px;
          
          background-color : ${this.getDefault("border-inner")};
          border-color : ${color};
          border-width : ${wid * 0.5}px;
          border-style : ${debug2 && this.outer ? "dashed" : "solid"};
          pointer-events : none;
        }`;
    let sbuf = `
        .screenborder_${this._id} {
        }
    `;
    let ok = this.movable;
    if (!this.outer) {
      for (let sarea of this.sareas) {
        ok = ok || sarea.floating;
      }
    }
    if (ok) {
      sbuf += `
        .screenborder_${this._id}:hover {
          cursor : ${cursor};
        }
      `;
    }
    this._style.textContent = sbuf;
    this._innerstyle.textContent = innerbuf;
    this.setAttribute("class", "screenborder_" + this._id);
    this.inner.setAttribute("class", "screenborder_inner_" + this._id);
    this.style["position"] = UIBase2.PositionKey;
    this.style["left"] = x + "px";
    this.style["top"] = y + "px";
    this.style["width"] = w + "px";
    this.style["height"] = h + "px";
    this.style["z-index"] = "" + BORDER_ZINDEX_BASE;
  }
  valueOf() {
    return _ScreenBorder.hash(this.v1, this.v2);
  }
  [Symbol.keystr]() {
    return _ScreenBorder.hash(this.v1, this.v2);
  }
};
UIBase2.internalRegister(ScreenBorder);

// scripts/path.ux/scripts/screen/ScreenArea.js
var _ScreenArea = void 0;
var UIBase8 = UIBase2;
var Vector24 = Vector2;
var Screen = void 0;
window._contextWrangler = contextWrangler;
var BorderMask = {
  LEFT: 1,
  BOTTOM: 2,
  RIGHT: 4,
  TOP: 8,
  ALL: 1 | 2 | 4 | 8
};
var BorderSides = {
  LEFT: 0,
  BOTTOM: 1,
  RIGHT: 2,
  TOP: 3
};
var Area = class _Area extends UIBase2 {
  static {
    __name(this, "Area");
  }
  constructor() {
    super();
    let def = this.constructor.define();
    this.borderLock = def.borderLock || 0;
    this.flag = def.flag || 0;
    this.inactive = true;
    this.areaDragToolEnabled = true;
    this.owning_sarea = void 0;
    this._area_id = contextWrangler.idgen++;
    this.pos = void 0;
    this.size = void 0;
    this.minSize = [5, 5];
    this.maxSize = [void 0, void 0];
    let appendChild = this.shadow.appendChild;
    this.shadow.appendChild = (child) => {
      appendChild.call(this.shadow, child);
      if (child instanceof UIBase8) {
        child.parentWidget = this;
      }
    };
    let prepend = this.shadow.prepend;
    this.shadow.prepend = (child) => {
      prepend.call(this.shadow, child);
      if (child instanceof UIBase8) {
        child.parentWidget = this;
      }
    };
  }
  get floating() {
    return ~~(this.flag & AreaFlags.FLOATING);
  }
  set floating(val) {
    if (val) {
      this.flag |= AreaFlags.FLOATING;
    } else {
      this.flag &= ~AreaFlags.FLOATING;
    }
  }
  /**
   * Get active area as defined by push_ctx_active and pop_ctx_active.
   *
   * Type should be an Area subclass, if undefined the last accessed area
   * will be returned.
   * */
  static getActiveArea(type) {
    return contextWrangler.getLastArea(type);
  }
  static unregister(cls) {
    let def = cls.define();
    if (!def.areaname) {
      throw new Error("Missing areaname key in define()");
    }
    if (def.areaname in areaclasses) {
      delete areaclasses[def.areaname];
    }
  }
  /*
    addEventListener(type, cb, options) {
      let cb2 = (e) => {
        let x, y;
        let screen = this.getScreen();
  
        if (!screen) {
          console.warn("no screen!");
          return cb(elem);
        }
  
        if (type.startsWith("mouse")) {
          x = e.x; y = e.y;
        } else if (type.startsWith("touch") && e.touches && e.touches.length > 0) {
          x = e.touches[0].pageX; y = e.touches[0].pageY;
        } else if (type.startsWith("pointer")) {
          x = e.x; y = e.y;
        } else {
          if (screen) {
            x = screen.mpos[0];
            y = screen.mpos[1];
          } else {
            x = y = -100;
          }
        }
  
        let elem = screen.pickElement(x, y);
        console.log(elem ? elem.tagName : undefined);
  
        if (elem === this || elem === this.owning_sarea) {
          return cb(elem);
        }
      };
  
      cb.__cb2 = cb2;
      return super.addEventListener(type, cb2, options);
    }
  
    removeEventListener(type, cb, options) {
      super.removeEventListener(type, cb.__cb2, options);
    }
    //*/
  static register(cls) {
    let def = cls.define();
    if (!def.areaname) {
      throw new Error("Missing areaname key in define()");
    }
    areaclasses[def.areaname] = cls;
    UIBase2.internalRegister(cls);
  }
  static makeAreasEnum() {
    let areas = {};
    let icons = {};
    let i = 0;
    for (let k in areaclasses) {
      let cls = areaclasses[k];
      let def = cls.define();
      if (def.flag & AreaFlags.HIDDEN)
        continue;
      let uiname = def.uiname;
      if (uiname === void 0) {
        uiname = k.replace("_", " ").toLowerCase();
        uiname = uiname[0].toUpperCase() + uiname.slice(1, uiname.length);
      }
      areas[uiname] = k;
      icons[uiname] = def.icon !== void 0 ? def.icon : -1;
    }
    let prop = new EnumProperty(void 0, areas);
    prop.addIcons(icons);
    return prop;
  }
  static define() {
    return {
      tagname: "pathux-editor-x",
      // tag name, e.g. editor-x
      areaname: void 0,
      //api name for area type
      flag: 0,
      //see AreaFlags
      uiname: void 0,
      icon: void 0
      //icon representing area in MakeHeader's area switching menu. Integer.
    };
  }
  static newSTRUCT() {
    return UIBase8.createElement(this.define().tagname);
  }
  init() {
    super.init();
    this.style["overflow"] = "hidden";
    this.noMarginsOrPadding();
    let onover = /* @__PURE__ */ __name((e) => {
      this.push_ctx_active();
      this.pop_ctx_active();
    }, "onover");
    super.addEventListener("mouseover", onover, { passive: true });
    super.addEventListener("mousemove", onover, { passive: true });
    super.addEventListener("mousein", onover, { passive: true });
    super.addEventListener("mouseenter", onover, { passive: true });
    super.addEventListener("touchstart", onover, { passive: true });
    super.addEventListener("focusin", onover, { passive: true });
    super.addEventListener("focus", onover, { passive: true });
  }
  _get_v_suffix() {
    if (this.flag & AreaFlags.INDEPENDENT) {
      return this._id;
    } else {
      return "";
    }
  }
  /**
   * Return a list of keymaps used by this editor
   * @returns {Array<KeyMap>}
   */
  getKeyMaps() {
    return this.keymap !== void 0 ? [this.keymap] : [];
  }
  on_fileload(isActiveEditor) {
    contextWrangler.reset();
  }
  buildDataPath() {
    let p = this;
    let sarea = this.owning_sarea;
    if (sarea === void 0 || sarea.screen === void 0) {
      console.warn("Area.buildDataPath(): Failed to build data path");
      return "";
    }
    let screen = sarea.screen;
    let idx1 = screen.sareas.indexOf(sarea);
    let idx2 = sarea.editors.indexOf(this);
    if (idx1 < 0 || idx2 < 0) {
      throw new Error("malformed area data");
    }
    let ret = `screen.sareas[${idx1}].editors[${idx2}]`;
    return ret;
  }
  saveData() {
    return {
      _area_id: this._area_id,
      areaName: this.areaName
    };
  }
  loadData(obj) {
    let id2 = obj._area_id;
    if (id2 !== void 0 && id2 !== null) {
      this._area_id = id2;
    }
  }
  draw() {
  }
  copy() {
    console.warn("You might want to implement this, Area.prototype.copy based method called");
    let ret = UIBase8.createElement(this.constructor.define().tagname);
    return ret;
  }
  on_resize(size, oldsize) {
    super.on_resize(size, oldsize);
  }
  on_area_focus() {
  }
  on_area_blur() {
  }
  /** called when editors are swapped with another editor type*/
  on_area_active() {
  }
  /** called when editors are swapped with another editor type*/
  on_area_inactive() {
  }
  /*
  * This is needed so UI controls can know what their parent area is.
  * For example, a slider with data path "view2d.zoomfac" needs to know where
  * to find view2d.
  *
  * Typically this works by adding a field to a ContextOverlay:
  *
  * class ContextOverlay {
  *   get view3d() {
  *     return Area.getActiveArea(View3D);
  *   }
  * }
  *
  * Make sure to wrap event callbacks in push_ctx_active and pop_ctx_active.
  * */
  push_ctx_active(dontSetLastRef = false) {
    contextWrangler.updateLastRef(this.constructor, this);
    contextWrangler.push(this.constructor, this, !dontSetLastRef);
  }
  /**
   * see push_ctx_active
   * */
  pop_ctx_active(dontSetLastRef = false) {
    contextWrangler.pop(this.constructor, this, !dontSetLastRef);
  }
  getScreen() {
    throw new Error("replace me in Area.prototype");
  }
  toJSON() {
    return Object.assign(super.toJSON(), {
      areaname: this.constructor.define().areaname,
      _area_id: this._area_id
    });
  }
  loadJSON(obj) {
    super.loadJSON(obj);
    this._area_id = obj._area_id;
    return this;
  }
  getBarHeight() {
    return this.header.getClientRects()[0].height;
  }
  makeAreaSwitcher(container) {
    if (const_default.useAreaTabSwitcher) {
      let ret = UIBase8.createElement("area-docker-x");
      container.add(ret);
      return ret;
    }
    let prop = _Area.makeAreasEnum();
    let dropbox = container.listenum(void 0, {
      name: this.constructor.define().uiname,
      enumDef: prop,
      callback: /* @__PURE__ */ __name((id2) => {
        let cls = areaclasses[id2];
        this.owning_sarea.switch_editor(cls);
      }, "callback")
    });
    dropbox.update.after(() => {
      let name2 = this.constructor.define().uiname;
      let val = prop.values[name2];
      if (dropbox.value !== val && val in prop.keys) {
        val = prop.keys[val];
      }
      if (dropbox.value !== val) {
        dropbox.setValue(prop.values[name2], true);
      }
    });
    return dropbox;
  }
  makeHeader(container, add_note_area = true, make_draggable = true) {
    let switcherRow;
    let row;
    let helpRow;
    if (!(this.flag & AreaFlags.NO_SWITCHER) && const_default.useAreaTabSwitcher) {
      let col = this.header = container.col();
      switcherRow = helpRow = col.row();
      row = col.row();
    } else {
      row = helpRow = this.header = container.row();
    }
    if (!(this.flag & AreaFlags.NO_HEADER_CONTEXT_MENU)) {
      let callmenu = ScreenBorder.bindBorderMenu(this.header, true);
      this.addEventListener("mousedown", (e) => {
        if (e.button !== 2 || this.header.pickElement(e.x, e.y) !== this.header) {
          return;
        }
        callmenu(e);
      });
    }
    this.header.remove();
    container._prepend(this.header);
    row.setCSS.after(() => row.background = this.getDefault("AreaHeaderBG"));
    let rh = ~~(16 * this.getDPI());
    container.noMarginsOrPadding();
    row.noMarginsOrPadding();
    row.style["width"] = "100%";
    row.style["margin"] = "0px";
    row.style["padding"] = "0px";
    if (!(this.flag & AreaFlags.NO_SWITCHER)) {
      if (this.switcher) {
        switcherRow.add(this.switcher);
      } else {
        this.switcher = this.makeAreaSwitcher(const_default.useAreaTabSwitcher ? switcherRow : row);
      }
    }
    if (isMobile() || const_default.addHelpPickers) {
      if (this.helppicker) {
        this.helppicker.remove();
      }
      this.helppicker = helpRow.helppicker();
      this.helppicker.iconsheet = 0;
    }
    if (add_note_area) {
      let notef = UIBase8.createElement("noteframe-x");
      notef.ctx = this.ctx;
      row._add(notef);
    }
    if (const_default.useAreaTabSwitcher) {
      return row;
    }
    let eventdom = this.header;
    let mdown = false;
    let mpos = new Vector24();
    let mpre = /* @__PURE__ */ __name((e, pageX, pageY) => {
      if (haveModal()) {
        return;
      }
      pageX = pageX === void 0 ? e.x : pageX;
      pageY = pageY === void 0 ? e.y : pageY;
      let node = this.getScreen().pickElement(pageX, pageY);
      if (node !== row) {
        return false;
      }
      return true;
    }, "mpre");
    eventdom.addEventListener("pointerout", (e) => {
      mdown = false;
    });
    eventdom.addEventListener("pointerleave", (e) => {
      mdown = false;
    });
    eventdom.addEventListener("pointerdown", (e) => {
      if (!mpre(e)) return;
      mpos[0] = e.pageX;
      mpos[1] = e.pageY;
      mdown = true;
    });
    let last_time = time_ms();
    let do_mousemove = /* @__PURE__ */ __name((e, pageX, pageY) => {
      if (haveModal() || !make_draggable) {
        return;
      }
      let mdown2 = e.buttons !== 0 || e.touches && e.touches.length > 0;
      mdown2 = mdown2 && mdown;
      if (time_ms() - last_time < 250) {
        return;
      }
      last_time = time_ms;
      if (!mdown2 || !mpre(e, pageX, pageY)) return;
      if (e.type === "mousemove" && e.was_touch) {
        return;
      }
      let dx = pageX - mpos[0];
      let dy = pageY - mpos[1];
      let dis = dx * dx + dy * dy;
      let limit = 7;
      if (dis > limit * limit) {
        let sarea = this.owning_sarea;
        if (sarea === void 0) {
          console.warn("Error: missing sarea ref");
          return;
        }
        let screen = sarea.screen;
        if (screen === void 0) {
          console.log("Error: missing screen ref");
          return;
        }
        if (!this.areaDragToolEnabled) {
          return;
        }
        mdown = false;
        console.log("area drag tool!", e.type, e);
        screen.areaDragTool(this.owning_sarea);
      }
    }, "do_mousemove");
    eventdom.addEventListener("pointermove", (e) => {
      return do_mousemove(e, e.pageX, e.pageY);
    }, false);
    eventdom.addEventListener("pointerup", (e) => {
      console.log("pointerup", e);
      mdown = false;
    }, false);
    eventdom.addEventListener("pointercancel", (e) => {
      console.log("pointercancel", e);
      mdown = false;
    }, false);
    return row;
  }
  setCSS() {
    if (this.size !== void 0) {
      this.style["position"] = UIBase8.PositionKey;
      this.style["width"] = this.size[0] + "px";
      this.style["height"] = this.size[1] + "px";
    }
  }
  update() {
    if (this.owning_sarea === void 0 || this !== this.owning_sarea.area) {
      return;
    }
    super.update();
  }
  loadSTRUCT(reader) {
    reader(this);
  }
  _isDead() {
    if (this.dead) {
      return true;
    }
    let screen = this.getScreen();
    if (screen === void 0)
      return true;
    if (screen.parentNode === void 0)
      return true;
  }
  //called by owning ScreenArea on file load
  afterSTRUCT() {
    let f = /* @__PURE__ */ __name(() => {
      if (this._isDead()) {
        return;
      }
      if (!this.ctx) {
        this.doOnce(f);
        return;
      }
      try {
        loadUIData(this, this.saved_uidata);
        this.saved_uidata = void 0;
      } catch (error2) {
        console.log("failed to load ui data");
        print_stack2(error2);
      }
    }, "f");
    this.doOnce(f);
  }
  _getSavedUIData() {
    return saveUIData(this, "area");
  }
};
Area.STRUCT = `
pathux.Area { 
  flag : int;
  saved_uidata : string | obj._getSavedUIData();
}
`;
struct_default.register(Area, "pathux.Area");
UIBase2.internalRegister(Area);
var ScreenArea = class extends UIBase2 {
  static {
    __name(this, "ScreenArea");
  }
  constructor() {
    super();
    this._flag = void 0;
    this.flag = 0;
    this._borders = [];
    this._verts = [];
    this.dead = false;
    this._sarea_id = contextWrangler.idgen++;
    this._pos = new Vector24();
    this._size = new Vector24([512, 512]);
    if (const_default.DEBUG.screenAreaPosSizeAccesses) {
      let wrapVector = /* @__PURE__ */ __name((name2, axis) => {
        Object.defineProperty(this[name2], axis, {
          get: /* @__PURE__ */ __name(function() {
            return this["_" + axis];
          }, "get"),
          set: /* @__PURE__ */ __name(function(val) {
            console.warn(`ScreenArea.${name2}[${axis}] set:`, val);
            this["_" + axis] = val;
          }, "set")
        });
      }, "wrapVector");
      wrapVector("size", 0);
      wrapVector("size", 1);
      wrapVector("pos", 0);
      wrapVector("pos", 1);
    }
    this.area = void 0;
    this.editors = [];
    this.editormap = {};
    this.addEventListener("mouseover", (e) => {
      if (haveModal()) {
        return;
      }
      let screen = this.getScreen();
      if (screen.sareas.active !== this && screen.sareas.active && screen.sareas.active.area) {
        screen.sareas.active.area.on_area_blur();
      }
      if (this.area && screen.sareas.active !== this) {
        this.area.on_area_focus();
      }
      screen.sareas.active = this;
    });
  }
  /*
    saveData() {
      return {
        _sarea_id : this._sarea_id,
        pos       : this.pos,
        size      : this.size,
      };
    }
    loadData(obj) {
      super.loadData(obj);
  
      let id = obj._sarea_id;
      
      let type = obj.areatype;
      
      if (id !== undefined && id !== null) {
        this._sarea_id = id;
      }
      
      for (let area of this.editors) {
        if (area.areaType == type) {
          console.log("             found saved area type");
          
          this.switch_editor(area.constructor);
        }
      }
      
      this.pos.load(obj.pos);
      this.size.load(obj.size);
    }//*/
  get floating() {
    return this.flag & AreaFlags.FLOATING;
  }
  set floating(val) {
    if (val) {
      this.flag |= AreaFlags.FLOATING;
    } else {
      this.flag &= ~AreaFlags.FLOATING;
    }
  }
  get flag() {
    let flag = this._flag & (AreaFlags.FLOATING | AreaFlags.INDEPENDENT);
    if (this.area) {
      flag |= this.area.flag;
    }
    return flag;
  }
  set flag(v) {
    this._flag &= ~(AreaFlags.FLOATING | AreaFlags.INDEPENDENT);
    this._flag |= v & (AreaFlags.FLOATING | AreaFlags.INDEPENDENT);
    if (this.area) {
      this.area.flag |= v & ~(AreaFlags.FLOATING | AreaFlags.INDEPENDENT);
    }
  }
  get borderLock() {
    return this.area !== void 0 ? this.area.borderLock : 0;
  }
  get minSize() {
    return this.area !== void 0 ? this.area.minSize : this.size;
  }
  get maxSize() {
    return this.area !== void 0 ? this.area.maxSize : this.size;
  }
  get pos() {
    return this._pos;
  }
  set pos(val) {
    if (const_default.DEBUG.screenAreaPosSizeAccesses) {
      console.log("ScreenArea set pos", val);
    }
    this._pos.load(val);
  }
  get size() {
    return this._size;
  }
  set size(val) {
    if (const_default.DEBUG.screenAreaPosSizeAccesses) {
      console.log("ScreenArea set size", val);
    }
    this._size.load(val);
  }
  static newSTRUCT() {
    return UIBase8.createElement("screenarea-x");
  }
  static define() {
    return {
      tagname: "screenarea-x"
    };
  }
  _get_v_suffix() {
    return this.area ? this.area._get_v_suffix() : "";
  }
  bringToFront() {
    let screen = this.getScreen();
    HTMLElement.prototype.remove.call(this);
    screen.sareas.remove(this);
    screen.appendChild(this);
    let zindex = BORDER_ZINDEX_BASE + 1;
    if (screen.style["z-index"]) {
      zindex = parseInt(screen.style["z-index"]) + 1;
    }
    for (let sarea of screen.sareas) {
      let zindex2 = sarea.style["z-index"];
      if (sarea.style["z-index"]) {
        zindex2 = Math.max(zindex2, parseInt(sarea.style["z-index"]) + 1);
      }
    }
    this.style["z-index"] = zindex;
  }
  _side(border) {
    let ret = this._borders.indexOf(border);
    if (ret < 0) {
      throw new Error("border not in screen area");
    }
    return ret;
  }
  init() {
    super.init();
    this.noMarginsOrPadding();
  }
  draw() {
    if (this.area && this.area.draw) {
      this.area.push_ctx_active();
      this.area.draw();
      this.area.pop_ctx_active();
    }
  }
  _isDead() {
    if (this.dead) {
      return true;
    }
    let screen = this.getScreen();
    if (screen === void 0)
      return true;
    if (screen.parentNode === void 0)
      return true;
  }
  toJSON() {
    let ret = {
      editors: this.editors,
      _sarea_id: this._sarea_id,
      area: this.area.constructor.define().areaname,
      pos: this.pos,
      size: this.size
    };
    return Object.assign(super.toJSON(), ret);
  }
  on_keydown(e) {
    if (this.area.on_keydown) {
      this.area.push_ctx_active();
      this.area.on_keydown(e);
      this.area.pop_ctx_active();
    }
  }
  loadJSON(obj) {
    if (obj === void 0) {
      console.warn("undefined in loadJSON");
      return;
    }
    super.loadJSON(obj);
    this.pos.load(obj.pos);
    this.size.load(obj.size);
    for (let editor of obj.editors) {
      let areaname = editor.areaname;
      let tagname = areaclasses[areaname].define().tagname;
      let area = UIBase8.createElement(tagname);
      area.owning_sarea = this;
      this.editormap[areaname] = area;
      this.editors.push(this.editormap[areaname]);
      area.pos = new Vector24(obj.pos);
      area.size = new Vector24(obj.size);
      area.ctx = this.ctx;
      area.inactive = true;
      area.loadJSON(editor);
      area.owning_sarea = void 0;
      if (areaname === obj.area) {
        this.area = area;
      }
    }
    if (this.area !== void 0) {
      this.area.ctx = this.ctx;
      this.area.style["width"] = "100%";
      this.area.style["height"] = "100%";
      this.area.owning_sarea = this;
      this.area.parentWidget = this;
      this.area.pos = this.pos;
      this.area.size = this.size;
      this.area.inactive = false;
      this.shadow.appendChild(this.area);
      this.area.on_area_active();
      this.area.onadd();
    }
    this.setCSS();
  }
  _ondestroy() {
    super._ondestroy();
    this.dead = true;
    for (let editor of this.editors) {
      if (editor === this.area) continue;
      editor._ondestroy();
    }
  }
  getScreen() {
    if (this.screen !== void 0) {
      return this.screen;
    }
    let p = this.parentNode;
    let _i = 0;
    while (p && !(p instanceof Screen) && p !== p.parentNode) {
      p = this.parentNode;
      if (_i++ > 1e3) {
        console.warn("infinite loop detected in ScreenArea.prototype.getScreen()");
        return void 0;
      }
    }
    return p && p instanceof Screen ? p : void 0;
  }
  copy(screen) {
    let ret = UIBase8.createElement("screenarea-x");
    ret.screen = screen;
    ret.ctx = this.ctx;
    ret.pos[0] = this.pos[0];
    ret.pos[1] = this.pos[1];
    ret.size[0] = this.size[0];
    ret.size[1] = this.size[1];
    for (let area of this.editors) {
      let cpy = area.copy();
      cpy.ctx = this.ctx;
      cpy.parentWidget = ret;
      ret.editors.push(cpy);
      ret.editormap[cpy.constructor.define().areaname] = cpy;
      if (area === this.area) {
        ret.area = cpy;
      }
    }
    ret.ctx = this.ctx;
    if (ret.area !== void 0) {
      ret.area.ctx = this.ctx;
      ret.area.pos = ret.pos;
      ret.area.size = ret.size;
      ret.area.owning_sarea = ret;
      ret.area.parentWidget = ret;
      ret.shadow.appendChild(ret.area);
      if (ret.area._init_done) {
        ret.area.push_ctx_active();
        ret.area.on_area_active();
        ret.area.pop_ctx_active();
      } else {
        ret.doOnce(() => {
          if (this.dead) {
            return;
          }
          ret._init();
          ret.area._init();
          ret.area.push_ctx_active();
          ret.area.on_area_active();
          ret.area.pop_ctx_active();
        });
      }
    }
    return ret;
  }
  snapToScreenSize() {
    let screen = this.getScreen();
    let co = new Vector24();
    let changed = 0;
    for (let v of this._verts) {
      co.load(v);
      v[0] = Math.min(Math.max(v[0], 0), screen.size[0]);
      v[1] = Math.min(Math.max(v[1], 0), screen.size[1]);
      if (co.vectorDistance(v) > 0.1) {
        changed = 1;
      }
    }
    if (changed) {
      this.loadFromVerts();
    }
  }
  /**
   *
   * Sets screen verts from pos/size
   * */
  loadFromPosSize() {
    if (this.floating && this._verts.length > 0) {
      let p = this.pos, s = this.size;
      this._verts[0].loadXY(p[0], p[1]);
      this._verts[1].loadXY(p[0], p[1] + s[1]);
      this._verts[2].loadXY(p[0] + s[0], p[1] + s[1]);
      this._verts[3].loadXY(p[0] + s[0], p[1]);
      for (let border of this._borders) {
        border.setCSS();
      }
      this.setCSS();
      return;
    }
    let screen = this.getScreen();
    if (!screen) return;
    for (let b of this._borders) {
      screen.freeBorder(b);
    }
    this.makeBorders(screen);
    this.setCSS();
    return this;
  }
  /**
   *
   * Sets pos/size from screen verts
   * */
  loadFromVerts() {
    if (this._verts.length == 0) {
      return;
    }
    let min = new Vector24([1e17, 1e17]);
    let max = new Vector24([-1e17, -1e17]);
    for (let v of this._verts) {
      min.min(v);
      max.max(v);
    }
    this.pos[0] = min[0];
    this.pos[1] = min[1];
    this.size[0] = max[0] - min[0];
    this.size[1] = max[1] - min[1];
    this.setCSS();
    return this;
  }
  on_resize(size, oldsize) {
    super.on_resize(size, oldsize);
    if (this.area !== void 0) {
      this.area.on_resize(size, oldsize);
    }
  }
  makeBorders(screen) {
    this._borders.length = 0;
    this._verts.length = 0;
    let p = this.pos, s = this.size;
    let vs = [
      new Vector24([p[0], p[1]]),
      new Vector24([p[0], p[1] + s[1]]),
      new Vector24([p[0] + s[0], p[1] + s[1]]),
      new Vector24([p[0] + s[0], p[1]])
    ];
    let floating = this.floating;
    for (let i = 0; i < vs.length; i++) {
      vs[i] = snap(vs[i]);
      vs[i] = screen.getScreenVert(vs[i], i, floating);
      this._verts.push(vs[i]);
    }
    for (let i = 0; i < vs.length; i++) {
      let v1 = vs[i], v2 = vs[(i + 1) % vs.length];
      let b = screen.getScreenBorder(this, v1, v2, i);
      for (let j = 0; j < 2; j++) {
        let v = j ? b.v2 : b.v1;
        if (v.sareas.indexOf(this) < 0) {
          v.sareas.push(this);
        }
      }
      if (b.sareas.indexOf(this) < 0) {
        b.sareas.push(this);
      }
      this._borders.push(b);
      b.movable = screen.isBorderMovable(b);
    }
    return this;
  }
  setCSS() {
    this.style["position"] = UIBase8.PositionKey;
    this.style["left"] = this.pos[0] + "px";
    this.style["top"] = this.pos[1] + "px";
    this.style["width"] = this.size[0] + "px";
    this.style["height"] = this.size[1] + "px";
    this.style["overflow"] = "hidden";
    this.style["contain"] = "layout";
    if (this.area !== void 0) {
      this.area.setCSS();
    }
  }
  appendChild(child) {
    if (child instanceof Area) {
      let def = child.constructor.define();
      let existing = this.editormap[def.areaname];
      if (existing && existing !== child) {
        console.warn("Warning, replacing an exising editor instance", child, existing);
        if (this.area === existing) {
          this.area = child;
        }
        existing.remove();
        this.editors.remove(existing, true);
        this.editormap[def.areaname] = child;
      }
      child.ctx = this.ctx;
      child.pos = this.pos;
      child.size = this.size;
      if (this.editors.indexOf(child) < 0) {
        this.editors.push(child);
      }
      child.owning_sarea = void 0;
      if (this.area === void 0) {
        this.area = child;
      }
    }
    super.appendChild(child);
    if (child instanceof UIBase2) {
      child.parentWidget = this;
      child.onadd();
    }
  }
  switch_editor(cls) {
    return this.switchEditor(cls);
  }
  switchEditor(cls) {
    let def = cls.define();
    let name2 = def.areaname;
    if (!(name2 in this.editormap)) {
      this.editormap[name2] = UIBase8.createElement(def.tagname);
      this.editormap[name2].ctx = this.ctx;
      this.editormap[name2].parentWidget = this;
      this.editormap[name2].owning_sarea = this;
      this.editormap[name2].inactive = false;
      this.editors.push(this.editormap[name2]);
    }
    if (this.area) {
      this.area.pos = new Vector24(this.area.pos);
      this.area.size = new Vector24(this.area.size);
      this.area.owning_sarea = void 0;
      this.area.inactive = true;
      this.area.push_ctx_active();
      this.area._init();
      this.area.on_area_inactive();
      this.area.pop_ctx_active();
      this.area.remove();
    } else {
      this.area = void 0;
    }
    this.area = this.editormap[name2];
    this.area.inactive = false;
    this.area.parentWidget = this;
    this.area.pos = this.pos;
    this.area.size = this.size;
    this.area.owning_sarea = this;
    this.area.ctx = this.ctx;
    this.area.packflag |= this.packflag;
    this.shadow.appendChild(this.area);
    this.area.style["width"] = "100%";
    this.area.style["height"] = "100%";
    this.area.push_ctx_active();
    this.area._init();
    this.area.on_resize(this.size, this.size);
    this.area.pop_ctx_active();
    this.area.push_ctx_active();
    this.area.on_area_active();
    this.area.pop_ctx_active();
    this.regenTabOrder();
  }
  _checkWrangler() {
    if (this.ctx)
      contextWrangler._checkWrangler(this.ctx);
  }
  update() {
    this._checkWrangler();
    super.update();
    if (this.area !== void 0) {
      this.area.owning_sarea = this;
      this.area.parentWidget = this;
      this.area.size = this.size;
      this.area.pos = this.pos;
      let screen = this.getScreen();
      let oldsize = [this.size[0], this.size[1]];
      let moved = screen ? screen.checkAreaConstraint(this, true) : 0;
      if (moved) {
        if (const_default.DEBUG.areaConstraintSolver) {
          console.log("screen constraint solve", moved, this.area.minSize, this.area.maxSize, this.area.tagName, this.size);
        }
        screen.solveAreaConstraints();
        screen.regenBorders();
        this.on_resize(oldsize);
      }
      this.area.push_ctx_active(true);
    }
    this._forEachChildWidget((n) => {
      n.update();
    });
    if (this.area !== void 0) {
      this.area.pop_ctx_active(true);
    }
  }
  removeChild(ch) {
    if (ch instanceof Area) {
      ch.owining_sarea = void 0;
      ch.pos = void 0;
      ch.size = void 0;
      if (this.area === ch && this.editors.length > 1) {
        let i = (this.editors.indexOf(ch) + 1) % this.editors.length;
        this.switchEditor(this.editors[i].constructor);
      } else if (this.area === ch) {
        this.editors = [];
        this.editormap = {};
        this.area = void 0;
        ch.remove();
        return;
      }
      let areaname = ch.constructor.define().areaname;
      this.editors.remove(ch);
      delete this.editormap[areaname];
      ch.parentWidget = void 0;
    } else {
      return super.removeChild(ch);
    }
  }
  afterSTRUCT() {
    for (let area of this.editors) {
      area.pos = this.pos;
      area.size = this.size;
      area.owning_sarea = this;
      area.push_ctx_active();
      area._ctx = this.ctx;
      area.afterSTRUCT();
      area.pop_ctx_active();
    }
  }
  loadSTRUCT(reader) {
    reader(this);
    this.pos = new Vector24(this.pos);
    this.size = new Vector24(this.size);
    let editors = [];
    for (let area of this.editors) {
      if (!area.constructor || !area.constructor.define || area.constructor === Area) {
        continue;
      }
      let areaname = area.constructor.define().areaname;
      area.inactive = true;
      area.owning_sarea = void 0;
      this.editormap[areaname] = area;
      if (areaname === this.area) {
        this.area = area;
      }
      area.parentWidget = this;
      editors.push(area);
    }
    this.editors = editors;
    if (typeof this.area !== "object") {
      let area = this.editors[0];
      console.warn("Failed to find active area!", this.area);
      if (typeof area !== "object") {
        for (let k in areaclasses) {
          area = areaclasses[k].define().tagname;
          area = UIBase8.createElement(area);
          let areaname = area.constructor.define().areaname;
          this.editors.push(area);
          this.editormap[areaname] = area;
          break;
        }
      }
      if (area) {
        this.area = area;
      }
    }
    if (this.area !== void 0) {
      this.area.style["width"] = "100%";
      this.area.style["height"] = "100%";
      this.area.owning_sarea = this;
      this.area.parentWidget = this;
      this.area.pos = this.pos;
      this.area.size = this.size;
      this.area.inactive = false;
      this.shadow.appendChild(this.area);
      let f = /* @__PURE__ */ __name(() => {
        if (this._isDead()) {
          return;
        }
        if (!this.ctx && this.parentNode) {
          console.log("waiting to start. . .");
          this.doOnce(f);
          return;
        }
        this.area.ctx = this.ctx;
        this.area._init();
        this.area.on_area_active();
        this.area.onadd();
      }, "f");
      this.doOnce(f);
    }
  }
};
ScreenArea.STRUCT = `
pathux.ScreenArea { 
  pos      : vec2;
  size     : vec2;
  type     : string;
  hidden   : bool;
  editors  : array(abstract(pathux.Area));
  area     : string | this.area ? this.area.constructor.define().areaname : "";
}
`;
struct_default.register(ScreenArea, "pathux.ScreenArea");
UIBase2.internalRegister(ScreenArea);
_setAreaClass(Area);
function setScreenClass(cls) {
  Screen = cls;
}
__name(setScreenClass, "setScreenClass");

// scripts/path.ux/scripts/widgets/theme_editor.js
var ThemeEditor = class extends Container {
  static {
    __name(this, "ThemeEditor");
  }
  constructor() {
    super();
    this.categoryMap = {};
  }
  static define() {
    return {
      tagname: "theme-editor-x",
      style: "theme-editor"
    };
  }
  init() {
    super.init();
    this.build();
  }
  doFolder(catkey, obj, container = this, panel = void 0, path = void 0) {
    let key = catkey.key;
    if (!path) {
      path = [key];
    }
    if (!panel) {
      panel = container.panel(key, void 0, void 0, catkey.help);
      panel.style["margin-left"] = "15px";
    }
    let row2 = panel.row();
    let textbox = row2.textbox(void 0, "");
    let callback = /* @__PURE__ */ __name((id2) => {
      console.log("ID", id2, obj, catkey);
      console.log(textbox, textbox.text, textbox.value);
      let propkey = (textbox.text || "").trim();
      if (!propkey) {
        console.error("Cannot have empty theme property name");
        return;
      }
      if (id2 === "FLOAT") {
        obj[propkey] = 0;
      } else if (id2 === "SUBFOLDER") {
        obj[propkey] = { test: 0 };
      } else if (id2 === "COLOR") {
        obj[propkey] = "grey";
      } else if (id2 === "FONT") {
        obj[propkey] = new CSSFont();
      } else if (id2 === "STRING") {
        obj[propkey] = "";
      }
      let uidata = saveUIData(panel, "theme-panel");
      panel.clear();
      this.doFolder(catkey, obj, container, panel, path);
      loadUIData(panel, uidata);
      panel.flushUpdate();
      panel.flushSetCSS();
      if (this.onchange) {
        this.onchange(key, propkey, obj);
      }
    }, "callback");
    let menu = row2.menu("+", [
      { name: "Float", callback: /* @__PURE__ */ __name(() => callback("FLOAT"), "callback") },
      { name: "Color", callback: /* @__PURE__ */ __name(() => callback("COLOR"), "callback") },
      { name: "Subfolder", callback: /* @__PURE__ */ __name(() => callback("SUBFOLDER"), "callback") },
      { name: "Font", callback: /* @__PURE__ */ __name(() => callback("FONT"), "callback") },
      { name: "String", callback: /* @__PURE__ */ __name(() => callback("STRING"), "callback") }
    ]);
    let row = panel.row();
    let col1 = row.col();
    let col2 = row.col();
    let do_onchange = /* @__PURE__ */ __name((key2, k, obj2) => {
      flagThemeUpdate();
      if (this.onchange) {
        this.onchange(key2, k, obj2);
      }
      this.ctx.screen.completeSetCSS();
      this.ctx.screen.completeUpdate();
    }, "do_onchange");
    let getpath = /* @__PURE__ */ __name((path2) => {
      let obj2 = theme;
      for (let i = 0; i < path2.length; i++) {
        obj2 = obj2[path2[i]];
      }
      return obj2;
    }, "getpath");
    let ok = false;
    let _i = 0;
    let dokey = /* @__PURE__ */ __name((k, v, path2) => {
      let col = _i % 2 === 0 ? col1 : col2;
      if (k.toLowerCase().search("flag") >= 0) {
        return;
      }
      if (typeof v === "string") {
        let v2 = v.toLowerCase().trim();
        let iscolor = validateCSSColor2(v2);
        if (iscolor) {
          let cw = col.colorbutton();
          ok = true;
          _i++;
          let color = css2color2(v2);
          if (color.length < 3) {
            color = [color[0], color[1], color[2], 1];
          }
          try {
            cw.setRGBA(color);
          } catch (error2) {
            console.warn("Failed to set color " + k, v2);
          }
          cw.onchange = () => {
            console.log("setting '" + k + "' to " + color2css2(cw.rgba), key);
            getpath(path2)[k] = color2css2(cw.rgba);
            do_onchange(key, k);
          };
          cw.label = k;
        } else {
          col.label(k);
          let box = col.textbox();
          box.onchange = () => {
            getpath(path2)[k] = box.text;
            do_onchange(key, k);
          };
          box.text = v;
        }
      } else if (typeof v === "number") {
        let slider = col.slider(void 0, k, v, 0, 256, 0.01, false);
        slider.baseUnit = slider.displayUnit = "none";
        ok = true;
        _i++;
        slider.onchange = () => {
          getpath(path2)[k] = slider.value;
          do_onchange(key, k);
        };
      } else if (typeof v === "boolean") {
        let check = col.check(void 0, k);
        check.value = getpath(path2)[k];
        check.onchange = () => {
          getpath(path2)[k] = !!check.value;
          do_onchange(key, k);
        };
      } else if (typeof v === "object" && v instanceof CSSFont) {
        let panel2 = col.panel(k);
        ok = true;
        _i++;
        let textbox2 = /* @__PURE__ */ __name((key2) => {
          panel2.label(key2);
          let tbox = panel2.textbox(void 0, v[key2]);
          tbox.width = tbox.getDefault("width");
          tbox.onchange = function() {
            v[key2] = this.text;
            do_onchange(key2, k);
          };
        }, "textbox");
        textbox2("font");
        textbox2("variant");
        textbox2("weight");
        textbox2("style");
        let cw = panel2.colorbutton();
        cw.label = "color";
        cw.setRGBA(css2color2(v.color));
        cw.onchange = () => {
          v.color = color2css2(cw.rgba);
          do_onchange(key, k);
        };
        let slider = panel2.slider(void 0, "size", v.size);
        slider.onchange = () => {
          v.size = slider.value;
          do_onchange(key, k);
        };
        slider.setAttribute("min", 1);
        slider.setAttribute("max", 100);
        slider.baseUnit = slider.displayUnit = "none";
        panel2.closed = true;
      } else if (typeof v === "object") {
        let catkey2 = Object.assign({}, catkey);
        catkey2.key = k;
        let path22 = path2.concat(k);
        this.doFolder(catkey2, v, panel, void 0, path22);
      }
    }, "dokey");
    for (let k in obj) {
      let v = obj[k];
      dokey(k, v, path);
    }
    if (!ok) {
      panel.remove();
    } else {
      panel.closed = true;
    }
  }
  build() {
    let uidata = saveUIData(this, "theme");
    this.clear();
    let categories = {};
    for (let k of Object.keys(theme)) {
      let catkey;
      if (k in this.categoryMap) {
        let cat = this.categoryMap[k];
        if (typeof cat === "string") {
          cat = {
            category: cat,
            help: "",
            key: k
          };
        }
        catkey = cat;
      } else {
        catkey = { category: k, help: "", key: k };
      }
      if (!catkey.key) {
        catkey.key = k;
      }
      if (!(catkey.category in categories)) {
        categories[catkey.category] = [];
      }
      categories[catkey.category].push(catkey);
    }
    function strcmp(a2, b) {
      a2 = a2.trim().toLowerCase();
      b = b.trim().toLowerCase();
      return a2 < b ? -1 : a2 === b ? 0 : 1;
    }
    __name(strcmp, "strcmp");
    let keys = Object.keys(categories);
    keys.sort(strcmp);
    for (let k of keys) {
      let list4 = categories[k];
      list4.sort((a2, b) => strcmp(a2.key, b.key));
      let panel = this;
      if (list4.length > 1) {
        panel = this.panel(k);
      }
      for (let cat of list4) {
        let k2 = cat.key;
        let v = theme[k2];
        if (typeof v === "object") {
          this.doFolder(cat, v, panel);
        }
      }
      if (list4.length > 1) {
        panel.closed = true;
      }
    }
    loadUIData(this, uidata);
    for (let i = 0; i < 2; i++) {
      this.flushSetCSS();
      this.flushUpdate();
    }
    if (this.ctx && this.ctx.screen) {
      window.setTimeout(() => {
        this.ctx.screen.completeSetCSS();
      }, 100);
    }
  }
};
UIBase2.internalRegister(ThemeEditor);

// scripts/path.ux/scripts/widgets/ui_numsliders.js
var sliderDomAttributes = /* @__PURE__ */ new Set([
  "min",
  "max",
  "integer",
  "displayUnit",
  "baseUnit",
  "labelOnTop",
  "radix",
  "step",
  "expRate",
  "stepIsRelative",
  "decimalPlaces",
  "slideSpeed",
  "sliderDisplayExp"
]);
function updateSliderFromDom(dom, slider = dom) {
  slider.loadNumConstraints(void 0, dom);
}
__name(updateSliderFromDom, "updateSliderFromDom");
var SliderDefaults = {
  stepIsRelative: false,
  expRate: 1 + 1 / 3,
  radix: 10,
  decimalPlaces: 4,
  baseUnit: "none",
  displayUnit: "none",
  slideSpeed: 1,
  step: 0.1,
  sliderDisplayExp: 1
};
function NumberSliderBase(cls = UIBase2, skip = /* @__PURE__ */ new Set(), defaults = SliderDefaults) {
  skip = new Set(skip);
  return class NumberSliderBase extends cls {
    static {
      __name(this, "NumberSliderBase");
    }
    constructor() {
      super();
      for (let key of NumberConstraints) {
        if (skip.has(key)) {
          continue;
        }
        if (key in defaults) {
          this[key] = defaults[key];
        } else {
          this[key] = void 0;
        }
      }
    }
    loadNumConstraints(prop, dom) {
      return super.loadNumConstraints(prop, dom, this._redraw);
    }
  };
}
__name(NumberSliderBase, "NumberSliderBase");
var NumSlider = class extends NumberSliderBase(ValueButtonBase) {
  static {
    __name(this, "NumSlider");
  }
  constructor() {
    super();
    this._highlight = void 0;
    this._last_label = void 0;
    this.mdown = false;
    this.ma = void 0;
    this.mpos = new Vector2();
    this.start_mpos = new Vector2();
    this._last_overarrow = false;
    this._name = "";
    this._value = 0;
    this.expRate = SliderDefaults.expRate;
    this.vertical = false;
    this._last_disabled = false;
    this.range = [-1e17, 1e17];
    this.isInt = false;
    this.editAsBaseUnit = void 0;
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this.setValue(val);
  }
  /** Current name label.  If set to null label will
   * be pulled from the datapath api.*/
  get name() {
    return this.getAttribute("name") || this._name;
  }
  /** Current name label.  If set to null label will
   * be pulled from the datapath api.*/
  set name(name2) {
    if (name2 === void 0 || name2 === null) {
      this.removeAttribute("name");
    } else {
      this.setAttribute("name", name2);
    }
  }
  static define() {
    return {
      tagname: "numslider-x",
      style: "numslider",
      parentStyle: "button",
      havePickClipboard: true
    };
  }
  updateWidth(force = false) {
    let dpi = UIBase2.getDPI();
    let wid = ~~(this.getDefault("width") * dpi);
    if (force || wid !== this._last_width) {
      this._last_width = wid;
      this.setCSS();
    }
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let prop = this.getPathMeta(this.ctx, this.getAttribute("datapath"));
    if (!prop) {
      return;
    }
    let name2;
    if (this.hasAttribute("name")) {
      name2 = this.getAttribute("name");
    } else {
      name2 = "" + prop.uiname;
    }
    let updateConstraints = false;
    if (name2 !== this._name) {
      this._name = name2;
      this.setCSS();
      updateConstraints = true;
    }
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (val !== this._value) {
      updateConstraints = true;
    }
    if (updateConstraints) {
      this.loadNumConstraints(prop);
    }
    super.updateDataPath();
  }
  update() {
    if (!!this._last_disabled !== !!this.disabled) {
      this._last_disabled = !!this.disabled;
      this._redraw();
      this.setCSS();
    }
    this.updateWidth();
    super.update();
    updateSliderFromDom(this);
  }
  clipboardCopy() {
    console.log("Copy", "" + this.value);
    const_default.setClipboardData("value", "text/plain", "" + this.value);
  }
  clipboardPaste() {
    let data = const_default.getClipboardData("text/plain");
    console.log("Paste", data);
    if (typeof data == "object") {
      data = data.data;
    }
    let displayUnit = this.editAsBaseUnit ? void 0 : this.displayUnit;
    let val = parseValue(data, this.baseUnit, displayUnit);
    if (typeof val === "number" && !isNaN(val)) {
      this.setValue(val);
    }
  }
  swapWithTextbox() {
    let tbox = UIBase2.createElement("textbox-x");
    if (this.modalRunning) {
      this.popModal();
    }
    this.mdown = false;
    this._pressed = false;
    tbox.ctx = this.ctx;
    tbox._init();
    tbox.decimalPlaces = this.decimalPlaces;
    tbox.isInt = this.isInt;
    tbox.editAsBaseUnit = this.editAsBaseUnit;
    if (this.isInt && this.radix != 10) {
      let text2 = this.value.toString(this.radix);
      if (this.radix === 2)
        text2 = "0b" + text2;
      else if (this.radix === 16)
        text2 += "h";
      tbox.text = text2;
    } else {
      tbox.text = buildString(this.value, this.baseUnit, this.decimalPlaces, this.displayUnit);
    }
    this.parentNode.insertBefore(tbox, this);
    this.hidden = true;
    let finish = /* @__PURE__ */ __name((ok) => {
      tbox.remove();
      this.hidden = false;
      if (ok) {
        let val = tbox.text.trim();
        if (this.isInt && this.radix !== 10) {
          val = parseInt(val);
        } else {
          let displayUnit = this.editAsBaseUnit ? void 0 : this.displayUnit;
          val = parseValue(val, this.baseUnit, displayUnit);
        }
        if (isNaN(val)) {
          console.log("Text input error", val, tbox.text.trim(), this.isInt);
          this.flash(ErrorColors.ERROR);
        } else {
          this.setValue(val);
          if (this.onchange) {
            this.onchange(this);
          }
        }
      }
    }, "finish");
    tbox.onend = finish;
    tbox.focus();
    tbox.select();
    return;
  }
  bindEvents() {
    let dir = this.range && this.range[0] > this.range[1] ? -1 : 1;
    this.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case keymap["Left"]:
        case keymap["Down"]:
          this.setValue(this.value - dir * 5 * this.step);
          break;
        case keymap["Up"]:
        case keymap["Right"]:
          this.setValue(this.value + dir * 5 * this.step);
          break;
      }
    });
    let onmousedown = /* @__PURE__ */ __name((e) => {
      e.preventDefault();
      if (this.disabled) {
        this.mdown = false;
        this._pressed = false;
        e.stopPropagation();
        return;
      }
      if (e.button) {
        return;
      }
      this.mdown = true;
      this._pressed = true;
      this._redraw();
      if (this.overArrow(e.x, e.y)) {
        this._on_click(e);
      } else {
        this.dragStart(e);
        e.stopPropagation();
      }
    }, "onmousedown");
    this._on_click = (e) => {
      this.setMpos(e);
      if (this.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      let step;
      if (step = this.overArrow(e.x, e.y)) {
        if (e.shiftKey) {
          step *= 0.1;
        }
        this.setValue(this.value + step);
      }
    };
    this.addEventListener("pointermove", (e) => {
      this.setMpos(e);
      if (this.mdown && !this._modaldata && this.mpos.vectorDistance(this.start_mpos) > 13) {
        this.dragStart(e);
      }
    });
    this.addEventListener("dblclick", (e) => {
      this.setMpos(e);
      this.mdown = false;
      this._pressed = false;
      if (this.disabled || this.overArrow(e.x, e.y)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      this.swapWithTextbox();
    });
    this.addEventListener("pointerdown", (e) => {
      this.setMpos(e);
      if (this.disabled) return;
      onmousedown(e);
    }, { capture: true });
    this.addEventListener("pointerup", (e) => {
      this.mdown = false;
      this._pressed = false;
      this._redraw();
    });
    this.addEventListener("pointerover", (e) => {
      this.setMpos(e);
      if (this.disabled) return;
      if (!this._highlight) {
        this._highlight = true;
        this._repos_canvas();
        this._redraw();
      }
    });
    this.addEventListener("blur", (e) => {
      this._highlight = false;
      this.mdown = false;
    });
    this.addEventListener("pointerout", (e) => {
      this.setMpos(e);
      if (this.disabled) return;
      this._highlight = false;
      this.dom._background = this.getDefault("background-color");
      this._repos_canvas();
      this._redraw();
    });
  }
  overArrow(x, y) {
    let r = this.getBoundingClientRect();
    let rwidth, rx;
    if (this.vertical) {
      rwidth = r.height;
      rx = r.y;
      x = y;
    } else {
      rwidth = r.width;
      rx = r.x;
    }
    x -= rx;
    let sz = this._getArrowSize();
    let szmargin = sz + const_default.numSliderArrowLimit;
    let step = this.step || 0.01;
    if (this.isInt) {
      step = Math.max(step, 1);
    }
    if (isNaN(step)) {
      console.error("NaN step size", "step:", this.step, "numslider:", this._id);
      this.flash("red");
      step = this.isInt ? 1 : 0.1;
    }
    if (x < szmargin) {
      return -step;
    } else if (x > rwidth - szmargin) {
      return step;
    }
    return 0;
  }
  doRange() {
    console.warn("Deprecated: NumSlider.prototype.doRange, use loadNumConstraints instead!");
    this.loadNumConstraints();
  }
  setValue(value, fire_onchange = true, setDataPath = true, checkConstraints = true) {
    value = Math.min(Math.max(value, this.range[0]), this.range[1]);
    this._value = value;
    if (this.hasAttribute("integer")) {
      this.isInt = true;
    }
    if (this.isInt) {
      this._value = Math.floor(this._value);
    }
    if (checkConstraints) {
      this.loadNumConstraints();
    }
    if (setDataPath && this.ctx && this.hasAttribute("datapath")) {
      this.setPathValue(this.ctx, this.getAttribute("datapath"), this._value);
    }
    if (fire_onchange && this.onchange) {
      this.onchange(this.value);
    }
    this._redraw();
  }
  setMpos(e) {
    this.mpos[0] = e.x;
    this.mpos[1] = e.y;
    if (!this.mdown) {
      this.start_mpos[0] = e.x;
      this.start_mpos[1] = e.y;
    }
    let over = this.overArrow(e.x, e.y);
    if (over !== this._last_overarrow) {
      this._last_overarrow = over;
      this._redraw();
    }
  }
  dragStart(e) {
    this.mdown = false;
    this._pressed = true;
    if (this.disabled) return;
    if (this.modalRunning) {
      console.log("modal already running for numslider", this);
      return;
    }
    this.last_time = time_ms();
    let last_background = this.dom._background;
    let cancel;
    this.ma = new MovingAvg(eventWasTouch(e) ? 8 : 2);
    let startvalue = this.value;
    let value = startvalue;
    let startx = this.vertical ? e.y : e.x, starty = this.vertical ? e.x : e.y;
    let sumdelta = 0;
    this.dom._background = this.getDefault("BoxDepressed");
    let fire = /* @__PURE__ */ __name(() => {
      if (this.onchange) {
        this.onchange(this);
      }
    }, "fire");
    let handlers = {
      on_keydown: /* @__PURE__ */ __name((e2) => {
        switch (e2.keyCode) {
          case 27:
            cancel(true);
          case 13:
            cancel(false);
            break;
        }
        e2.preventDefault();
        e2.stopPropagation();
      }, "on_keydown"),
      on_pointermove: /* @__PURE__ */ __name((e2) => {
        if (this.disabled) return;
        e2.preventDefault();
        e2.stopPropagation();
        let x = this.ma.add(this.vertical ? e2.y : e2.x);
        let dx = x - startx;
        startx = x;
        if (time_ms() - this.last_time < 35) {
          return;
        }
        this.last_time = time_ms();
        if (e2.shiftKey) {
          dx *= 0.1;
        }
        dx *= this.vertical ? -1 : 1;
        sumdelta += Math.abs(dx);
        value += dx * this.step * 0.1 * this.slideSpeed;
        let dvalue = value - startvalue;
        let dsign = Math.sign(dvalue);
        let expRate = this.expRate;
        if (!this.hasAttribute("linear")) {
          dvalue = Math.pow(Math.abs(dvalue), expRate) * dsign;
        }
        this.value = startvalue + dvalue;
        this.updateWidth();
        this._redraw();
        fire();
      }, "on_pointermove"),
      on_pointerup: /* @__PURE__ */ __name((e2) => {
        this.setMpos(e2);
        this.undoBreakPoint();
        cancel(false);
        e2.preventDefault();
        e2.stopPropagation();
      }, "on_pointerup"),
      on_pointerout: /* @__PURE__ */ __name((e2) => {
        last_background = this.getDefault("background-color");
        e2.preventDefault();
        e2.stopPropagation();
      }, "on_pointerout"),
      on_pointerover: /* @__PURE__ */ __name((e2) => {
        last_background = this.getDefault("BoxHighlight");
        e2.preventDefault();
        e2.stopPropagation();
      }, "on_pointerover"),
      on_pointerdown: /* @__PURE__ */ __name((e2) => {
        this.popModal();
      }, "on_pointerdown")
    };
    this.pushModal(handlers);
    cancel = /* @__PURE__ */ __name((restore_value) => {
      this._pressed = false;
      if (restore_value) {
        this.value = startvalue;
        this.updateWidth();
        fire();
      }
      this.dom._background = last_background;
      this._redraw();
      this.popModal();
    }, "cancel");
  }
  get _pressed() {
    return this.__pressed;
  }
  set _pressed(v) {
    if (!v) {
      window.setTimeout(() => {
        let redraw = this.__pressed;
        this.__pressed = false;
        if (redraw) {
          this._redraw();
        }
      }, 100);
    } else {
      this.__pressed = v;
    }
  }
  setCSS(unused_setBG, fromRedraw) {
    let dpi = this.getDPI();
    let ts = this.getDefault("DefaultText").size * UIBase2.getDPI();
    let label = this._genLabel();
    let tw = measureText(this, label, {
      size: ts,
      font: this.getDefault("DefaultText")
    }).width / dpi;
    tw = Math.max(tw + this._getArrowSize() * 1, this.getDefault("width"));
    tw += ts;
    tw = ~~tw;
    let w, h;
    if (this.vertical) {
      w = this.getDefault("height");
      h = tw;
    } else {
      h = this.getDefault("height");
      w = tw;
    }
    w = ~~(w * dpi);
    h = ~~(h * dpi);
    this.style["width"] = this.dom.style["width"] = w / dpi + "px";
    this.style["height"] = this.dom.style["height"] = h / dpi + "px";
    this.dom.width = w;
    this.dom.height = h;
    if (!fromRedraw) {
      this._repos_canvas();
      this._redraw();
    }
  }
  _repos_canvas() {
  }
  updateDefaultSize() {
  }
  updateName(force) {
    if (!this.hasAttribute("name")) {
      return;
    }
    let name2 = this.getAttribute("name");
    if (force || name2 !== this._name) {
      this._name = name2;
      this.setCSS();
    }
    let label = this._genLabel();
    if (label !== this._last_label) {
      this._last_label = label;
      this.setCSS();
    }
  }
  _genLabel() {
    let val = this.value;
    let text2;
    if (val === void 0) {
      text2 = "error";
    } else {
      val = val === void 0 ? 0 : val;
      if (this.isInt) {
        val = Math.floor(val);
      }
      val = buildString(val, this.baseUnit, this.decimalPlaces, this.displayUnit);
      text2 = val;
      if (this._name) {
        text2 = this._name + ": " + text2;
      } else if (this.hasAttribute("name")) {
        text2 = "" + this.getAttribute("name") + ": " + text2;
      }
    }
    return text2;
  }
  _redraw(fromCSS) {
    if (!fromCSS) {
      this.setCSS(void 0, true);
    }
    let g = this.g;
    let canvas = this.dom;
    let dpi = this.getDPI();
    let disabled = this.disabled;
    let over = !this._modaldata && this.overArrow(this.mpos[0], this.mpos[1]);
    let subkey = void 0;
    let pressed = this._pressed && !over;
    if (this._highlight && pressed) {
      subkey = "highlight-pressed";
    } else if (this._highlight) {
      subkey = "highlight";
    } else if (pressed) {
      subkey = "pressed";
    }
    let getDefault = /* @__PURE__ */ __name((key, backupval = void 0, subkey2 = subkey) => {
      if (subkey2 === "highlight-pressed" && !this.hasClassSubDefault(subkey2, key, false)) {
        return this.getSubDefault("pressed", key, void 0, backupval);
      }
      if (!subkey2) {
        return this.getDefault(key, void 0, backupval);
      } else {
        return this.getSubDefault(subkey2, key, void 0, backupval);
      }
    }, "getDefault");
    let r = getDefault("border-radius");
    if (this.isInt) {
      r *= 0.25;
    }
    let boxbg = getDefault("background-color");
    drawRoundBox(
      this,
      this.dom,
      this.g,
      void 0,
      void 0,
      r,
      "fill",
      disabled ? getDefault("DisabledBG") : boxbg
    );
    drawRoundBox(
      this,
      this.dom,
      this.g,
      void 0,
      void 0,
      r,
      "stroke",
      disabled ? getDefault("DisabledBG") : getDefault("border-color")
    );
    let ts = getDefault("DefaultText").size;
    let text2 = this._genLabel();
    let cx = ts + this._getArrowSize();
    let cy = this.dom.height / 2;
    this.dom.font = void 0;
    g.save();
    let th = Math.PI * 0.5;
    if (this.vertical) {
      g.rotate(th);
      drawText(this, cx, -ts * 0.5, text2, {
        canvas: this.dom,
        g: this.g,
        size: ts,
        font: getDefault("DefaultText")
      });
      g.restore();
    } else {
      drawText(this, cx, cy + ts / 2, text2, {
        canvas: this.dom,
        g: this.g,
        size: ts,
        font: getDefault("DefaultText")
      });
    }
    let parseArrowColor = /* @__PURE__ */ __name((arrowcolor2) => {
      arrowcolor2 = arrowcolor2.trim();
      if (arrowcolor2.endsWith("%")) {
        arrowcolor2 = arrowcolor2.slice(0, arrowcolor2.length - 1).trim();
        let perc = parseFloat(arrowcolor2) / 100;
        let c = css2color2(this.getDefault("background-color"));
        let f = (c[0] + c[1] + c[2]) * perc;
        f = ~~(f * 255);
        arrowcolor2 = `rgba(${f},${f},${f},0.95)`;
      }
      return arrowcolor2;
    }, "parseArrowColor");
    let arrowcolor_base;
    let arrowcolor;
    arrowcolor_base = this.getDefault("arrow-color");
    arrowcolor_base = parseArrowColor(arrowcolor_base);
    if (this._pressed && this._highlight) {
      arrowcolor = this.getSubDefault("highlight-pressed", "arrow-color", null, void 0, false);
      if (!arrowcolor) {
        arrowcolor = this.getSubDefault("pressed", "arrow-color");
      }
      if (!arrowcolor) {
        arrowcolor = "33%";
      }
    } else if (this._pressed) {
      arrowcolor = this.getSubDefault("pressed", "arrow-color", "arrow-color", "33%");
    } else if (this._highlight) {
      if (!this.hasClassSubDefault("highlight", "arrow-color", false)) {
        if (this.hasClassSubDefault("highlight", "background-color", false)) {
          arrowcolor = this.getSubDefault("highlight", "background-color");
        } else {
          arrowcolor = this.getDefault("BoxHighlight");
        }
        arrowcolor = css2color2(arrowcolor);
        let base = this.getSubDefault("pressed", "arrow-color", void 0, "33%");
        base = css2color2(base);
        arrowcolor.interp(base, 0.25);
        arrowcolor = color2css2(arrowcolor);
      } else {
        arrowcolor = this.getSubDefault("highlight", "arrow-color");
      }
    } else {
      arrowcolor = getDefault("arrow-color", "33%");
    }
    if (this._pressed) {
    }
    arrowcolor = parseArrowColor(arrowcolor);
    let d = 7, w = canvas.width, h = canvas.height;
    let sz = this._getArrowSize();
    if (this.vertical) {
      g.beginPath();
      g.moveTo(w * 0.5, d);
      g.lineTo(w * 0.5 + sz * 0.5, d + sz);
      g.lineTo(w * 0.5 - sz * 0.5, d + sz);
      g.fillStyle = over < 0 ? arrowcolor : arrowcolor_base;
      g.fill();
      g.beginPath();
      g.moveTo(w * 0.5, h - d);
      g.lineTo(w * 0.5 + sz * 0.5, h - sz - d);
      g.lineTo(w * 0.5 - sz * 0.5, h - sz - d);
      g.fillStyle = over > 0 ? arrowcolor : arrowcolor_base;
      g.fill();
    } else {
      g.beginPath();
      g.moveTo(d, h * 0.5);
      g.lineTo(d + sz, h * 0.5 + sz * 0.5);
      g.lineTo(d + sz, h * 0.5 - sz * 0.5);
      g.fillStyle = over < 0 ? arrowcolor : arrowcolor_base;
      g.fill();
      g.beginPath();
      g.moveTo(w - d, h * 0.5);
      g.lineTo(w - sz - d, h * 0.5 + sz * 0.5);
      g.lineTo(w - sz - d, h * 0.5 - sz * 0.5);
      g.fillStyle = over > 0 ? arrowcolor : arrowcolor_base;
      g.fill();
    }
    g.fill();
  }
  _getArrowSize() {
    return UIBase2.getDPI() * 10;
  }
};
UIBase2.internalRegister(NumSlider);
var NumSliderSimpleBase = class extends NumberSliderBase(UIBase2) {
  static {
    __name(this, "NumSliderSimpleBase");
  }
  constructor() {
    super();
    this.baseUnit = void 0;
    this.displayUnit = void 0;
    this.editAsBaseUnit = void 0;
    this.sliderDisplayExp = void 0;
    this.canvas = document.createElement("canvas");
    this.g = this.canvas.getContext("2d");
    this.canvas.style["pointer-events"] = "none";
    this.highlight = false;
    this.isInt = false;
    this.shadow.appendChild(this.canvas);
    this.range = [0, 1];
    this.uiRange = void 0;
    this.step = 0.1;
    this._value = 0.5;
    this.ma = void 0;
    this._focus = false;
    this.modal = void 0;
    this._last_slider_key = "";
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this.setValue(val);
  }
  static define() {
    return {
      tagname: "numslider-simple-base-x",
      style: "numslider_simple",
      parentStyle: "button"
    };
  }
  setValue(val, fire_onchange = true, setDataPath = true) {
    val = Math.min(Math.max(val, this.range[0]), this.range[1]);
    if (this.isInt) {
      val = Math.floor(val);
    }
    if (this._value !== val) {
      this._value = val;
      this._redraw();
      if (this.onchange && fire_onchange) {
        this.onchange(val);
      }
      if (setDataPath && this.getAttribute("datapath")) {
        let path = this.getAttribute("datapath");
        this.setPathValue(this.ctx, path, this._value);
      }
    }
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let path = this.getAttribute("datapath");
    if (!path || path === "null" || path === "undefined") {
      return;
    }
    let val = this.getPathValue(this.ctx, path);
    if (this.isInt) {
      val = Math.floor(val);
    }
    if (val !== this._value) {
      let prop = this.getPathMeta(this.ctx, path);
      if (!prop) {
        return;
      }
      this.loadNumConstraints(prop);
      this.setValue(val, true, false);
    }
  }
  _setFromMouse(e) {
    let rect = this.getClientRects()[0];
    if (rect === void 0) {
      return;
    }
    let x = e.x - rect.left;
    let dpi = UIBase2.getDPI();
    let co = this._getButtonPos();
    let val = this._invertButtonX(x * dpi);
    this.value = val;
  }
  _startModal(e) {
    if (this.disabled) {
      return;
    }
    if (e !== void 0) {
      this._setFromMouse(e);
    }
    let dom = window;
    let evtargs = { capture: false };
    if (this.modal) {
      console.warn("Double call to _startModal!");
      return;
    }
    this.ma = new MovingAvg(eventWasTouch(e) ? 4 : 2);
    let handlers;
    let end = /* @__PURE__ */ __name(() => {
      if (handlers === void 0) {
        return;
      }
      this.popModal();
      handlers = void 0;
    }, "end");
    handlers = {
      pointermove: /* @__PURE__ */ __name((e2) => {
        let x = e2.x, y = e2.y;
        x = this.ma.add(x);
        let e22 = new MouseEvent(e2, {
          x,
          y
        });
        this._setFromMouse(e2);
      }, "pointermove"),
      pointerover: /* @__PURE__ */ __name((e2) => {
      }, "pointerover"),
      pointerout: /* @__PURE__ */ __name((e2) => {
      }, "pointerout"),
      pointerleave: /* @__PURE__ */ __name((e2) => {
      }, "pointerleave"),
      pointerenter: /* @__PURE__ */ __name((e2) => {
      }, "pointerenter"),
      blur: /* @__PURE__ */ __name((e2) => {
      }, "blur"),
      focus: /* @__PURE__ */ __name((e2) => {
      }, "focus"),
      pointerup: /* @__PURE__ */ __name((e2) => {
        this.undoBreakPoint();
        end();
      }, "pointerup"),
      keydown: /* @__PURE__ */ __name((e2) => {
        switch (e2.keyCode) {
          case keymap["Enter"]:
          case keymap["Space"]:
          case keymap["Escape"]:
            end();
        }
      }, "keydown")
    };
    function makefunc(f) {
      return (e2) => {
        e2.stopPropagation();
        e2.preventDefault();
        return f(e2);
      };
    }
    __name(makefunc, "makefunc");
    for (let k in handlers) {
      handlers[k] = makefunc(handlers[k]);
    }
    this.pushModal(handlers);
  }
  init() {
    super.init();
    if (!this.hasAttribute("tab-index")) {
      this.setAttribute("tab-index", 0);
    }
    this.updateSize();
    this.addEventListener("keydown", (e) => {
      let dt = this.range[1] > this.range[0] ? 1 : -1;
      switch (e.keyCode) {
        case keymap["Left"]:
        case keymap["Right"]:
          let fac = this.step;
          if (e.shiftKey) {
            fac *= 0.1;
          }
          if (this.isInt) {
            fac = Math.max(fac, 1);
          }
          this.value += e.keyCode === keymap["Left"] ? -dt * fac : dt * fac;
          break;
      }
    });
    this.addEventListener("focusin", () => {
      if (this.disabled) return;
      this._focus = 1;
      this._redraw();
      this.focus();
    });
    this.addEventListener("pointerdown", (e) => {
      if (this.disabled) {
        return;
      }
      e.preventDefault();
      this._startModal(e);
    });
    this.addEventListener("pointerin", (e) => {
      this.setHighlight(e);
      this._redraw();
    });
    this.addEventListener("pointerout", (e) => {
      this.highlight = false;
      this._redraw();
    });
    this.addEventListener("pointerover", (e) => {
      this.setHighlight(e);
      this._redraw();
    });
    this.addEventListener("pointermove", (e) => {
      this.setHighlight(e);
      this._redraw();
    });
    this.addEventListener("pointerleave", (e) => {
      this.highlight = false;
      this._redraw();
    });
    this.addEventListener("blur", (e) => {
      this._focus = 0;
      this.highlight = false;
      this._redraw();
    });
    this.setCSS();
  }
  setHighlight(e) {
    this.highlight = this.isOverButton(e) ? 2 : 1;
  }
  _redraw() {
    let g = this.g, canvas = this.canvas;
    let w = canvas.width, h = canvas.height;
    let dpi = UIBase2.getDPI();
    let color = this.getDefault("background-color");
    let sh = ~~(this.getDefault("SlideHeight") * dpi + 0.5);
    g.clearRect(0, 0, canvas.width, canvas.height);
    g.fillStyle = color;
    let y = (h - sh) * 0.5;
    let r = this.getDefault("border-radius");
    g.translate(0, y);
    drawRoundBox(this, this.canvas, g, w, sh, r, "fill", color, void 0, true);
    let bcolor = this.getDefault("border-color");
    drawRoundBox(this, this.canvas, g, w, sh, r, "stroke", bcolor, void 0, true);
    g.translate(0, -y);
    if (this.sliderDisplayExp && this.sliderDisplayExp !== 1) {
      g.strokeStyle = this.getDefault("SliderDivColor") || this.getDefault("border-color") || "grey";
      let steps = 8;
      let t = 0, dt = 1 / (steps - 1);
      g.beginPath();
      for (let i = 0; i < steps; i++, t += dt) {
        let t2 = Math.pow(t, this.sliderDisplayExp);
        let x = t2 * w;
        g.moveTo(x, y);
        g.lineTo(x, h - y);
      }
      g.stroke();
    }
    if (this.highlight === 1) {
      color = this.getDefault("BoxHighlight");
    } else {
      color = this.getDefault("border-color");
    }
    let co = this._getButtonPos();
    g.beginPath();
    if (this.highlight === 2) {
      color = this.getDefault("BoxHighlight");
    } else {
      color = this.getDefault("border-color");
    }
    g.arc(co[0], co[1], Math.abs(co[2]), -Math.PI, Math.PI);
    g.fill();
    g.strokeStyle = color;
    g.stroke();
    g.beginPath();
    g.setLineDash([4, 4]);
    if (this._focus) {
      g.strokeStyle = this.getDefault("BoxHighlight");
      g.arc(co[0], co[1], co[2] - 4, -Math.PI, Math.PI);
      g.stroke();
    }
    g.setLineDash([]);
  }
  isOverButton(e) {
    let x = e.x, y = e.y;
    let rect = this.getClientRects()[0];
    if (!rect) {
      return false;
    }
    x -= rect.left;
    y -= rect.top;
    let co = this._getButtonPos();
    let dpi = UIBase2.getDPI();
    let dv = new Vector2([co[0] / dpi - x, co[1] / dpi - y]);
    let dis = dv.vectorLength();
    return dis < co[2] / dpi;
  }
  _invertButtonX(x) {
    let w = this.canvas.width;
    let dpi = UIBase2.getDPI();
    let sh = ~~(this.getDefault("SlideHeight") * dpi + 0.5);
    let boxw = this.canvas.height - 4;
    let w2 = w - boxw;
    let range = this.uiRange || this.range;
    x = (x - boxw * 0.5) / w2;
    if (this.sliderDisplayExp) {
      x = Math.max(x, 0);
      x = Math.pow(x, 1 / this.sliderDisplayExp);
    }
    x = x * (range[1] - range[0]) + range[0];
    return x;
  }
  _getButtonPos() {
    let w = this.canvas.width;
    let dpi = UIBase2.getDPI();
    let sh = ~~(this.getDefault("SlideHeight") * dpi + 0.5);
    let x = this._value;
    let range = this.uiRange || this.range;
    x = (x - range[0]) / (range[1] - range[0]);
    if (this.sliderDisplayExp) {
      x = Math.pow(x, this.sliderDisplayExp);
    }
    let boxw = this.canvas.height - 4;
    let w2 = w - boxw;
    x = x * w2 + boxw * 0.5;
    return [x, boxw * 0.5, boxw * 0.5];
  }
  setCSS() {
    const dpi = UIBase2.getDPI();
    this.style["min-width"] = this.getDefault("width") + "px";
    this.style["width"] = this.getDefault("width") + "px";
    this.canvas.style["width"] = "" + this.canvas.width / dpi + "px";
    this.canvas.style["height"] = "" + this.canvas.height / dpi + "px`";
    this.canvas.height = this.getDefault("height") * UIBase2.getDPI();
    this._redraw();
  }
  updateSize() {
    if (this.canvas === void 0) {
      return;
    }
    let rect = this.getClientRects()[0];
    if (rect === void 0) {
      return;
    }
    let dpi = UIBase2.getDPI();
    let canvas = this.canvas;
    let w = ~~(rect.width * dpi), h = ~~(rect.height * dpi);
    if (w !== canvas.width || h !== canvas.height) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.setCSS();
      this._redraw();
    }
  }
  _ondestroy() {
    if (this.modalRunning) {
      this.popModal();
    }
  }
  update() {
    super.update();
    let key = "" + this.getDefault("width") + ":" + this.getDefault("height") + ":" + this.getDefault("SlideHeight");
    if (key !== this._last_slider_key) {
      this._last_slider_key = key;
      this.flushUpdate();
      this.setCSS();
      this._redraw();
    }
    if (this.getAttribute("tab-index") !== this.tabIndex) {
      this.tabIndex = this.getAttribute("tab-index");
    }
    this.updateSize();
    this.updateDataPath();
    updateSliderFromDom(this);
  }
};
UIBase2.internalRegister(NumSliderSimpleBase);
var SliderWithTextbox = class extends ColumnFrame {
  static {
    __name(this, "SliderWithTextbox");
  }
  constructor() {
    super();
    this._value = 0;
    this._name = void 0;
    this._lock_textbox = false;
    this._labelOnTop = void 0;
    this._last_label_on_top = void 0;
    this.container = this;
    this.textbox = UIBase2.createElement("textbox-x");
    this.textbox.width = 55;
    this._numslider = void 0;
    this.textbox.overrideDefault("width", this.getDefault("TextBoxWidth"));
    this.textbox.setAttribute("class", "numslider_simple_textbox");
    this.textbox.startSelected = true;
    this._last_value = void 0;
  }
  get addLabel() {
    if (this.hasAttribute("add-label")) {
      let val = ("" + this.getAttribute("add-label")).toLowerCase();
      return val === "true" || val === "yes";
    }
    return this.getDefault("addLabel");
  }
  set addLabel(v) {
    this.setAttribute("add-label", v ? "true" : "false");
    if (this.addLabel && !this.l) {
      this.doOnce(this.rebuild);
    }
  }
  /**
   * whether to put label on top or to the left of sliders
   *
   * If undefined value will be either this.getAtttribute("labelOnTop"),
   * if "labelOnTop" attribute exists, or it will be this.getDefault("labelOnTop")
   * (theme default)
   **/
  get labelOnTop() {
    let ret = this._labelOnTop;
    if (ret === void 0 && this.hasAttribute("labelOnTop")) {
      let val = this.getAttribute("labelOnTop");
      if (typeof val === "string") {
        val = val.toLowerCase();
        ret = val === "true" || val === "yes";
      } else {
        ret = !!val;
      }
    }
    if (ret === void 0) {
      ret = this.getDefault("labelOnTop");
    }
    return !!ret;
  }
  set labelOnTop(v) {
    this._labelOnTop = v;
  }
  get numslider() {
    return this._numslider;
  }
  //child classes set this in their constructors
  set numslider(v) {
    this._numslider = v;
    this.textbox.range = this._numslider.range;
  }
  get editAsBaseUnit() {
    return this.numslider.editAsBaseUnit;
  }
  set editAsBaseUnit(v) {
    this.numslider.editAsBaseUnit = v;
  }
  get range() {
    return this.numslider.range;
  }
  set range(v) {
    this.numslider.range = v;
  }
  get step() {
    return this.numslider.step;
  }
  set step(v) {
    this.numslider.step = v;
  }
  get expRate() {
    return this.numslider.expRate;
  }
  set expRate(v) {
    this.numslider.expRate = v;
  }
  get decimalPlaces() {
    return this.numslider.decimalPlaces;
  }
  set decimalPlaces(v) {
    this.numslider.decimalPlaces = v;
  }
  get isInt() {
    return this.numslider.isInt;
  }
  set isInt(v) {
    this.numslider.isInt = v;
  }
  get slideSpeed() {
    return this.numslider.slideSpeed;
  }
  set slideSpeed(v) {
    this.numslider.slideSpeed = v;
  }
  get sliderDisplayExp() {
    return this.numslider.sliderDisplayExp;
  }
  set sliderDisplayExp(v) {
    this.numslider.sliderDisplayExp = v;
  }
  get radix() {
    return this.numslider.radix;
  }
  set radix(v) {
    this.numslider.radix = v;
  }
  get stepIsRelative() {
    return this.numslider.stepIsRelative;
  }
  set stepIsRelative(v) {
    this.numslider.stepIsRelative = v;
  }
  get displayUnit() {
    return this.numslider.displayUnit;
  }
  set displayUnit(val) {
    let update = val !== this.displayUnit;
    this.numslider.displayUnit = this.textbox.displayUnit = val;
    if (update) {
      this.updateTextBox();
    }
  }
  get baseUnit() {
    return this.textbox.baseUnit;
  }
  set baseUnit(val) {
    let update = val !== this.baseUnit;
    this.numslider.baseUnit = this.textbox.baseUnit = val;
    if (update) {
      this.updateTextBox();
    }
  }
  get realTimeTextBox() {
    let ret = this.getAttribute("realtime");
    if (!ret) {
      return false;
    }
    ret = ret.toLowerCase().trim();
    return ret === "true" || ret === "on" || ret === "yes";
  }
  set realTimeTextBox(val) {
    this.setAttribute("realtime", val ? "true" : "false");
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this.setValue(val);
  }
  init() {
    super.init();
    this.rebuild();
    window.setTimeout(() => this.updateTextBox(), 500);
  }
  rebuild() {
    this._last_label_on_top = this.labelOnTop;
    this.container.clear();
    if (!this.labelOnTop) {
      this.container = this.row();
    } else {
      this.container = this;
    }
    if (this.hasAttribute("name")) {
      this._name = this.getAttribute("name");
    } else {
      this._name = "slider";
    }
    if (this.addLabel) {
      this.l = this.container.label(this._name);
      this.l.overrideClass("numslider_textbox");
      this.l.font = "TitleText";
      this.l.style["display"] = "float";
      this.l.style["position"] = "relative";
    }
    let strip = this.container.row();
    strip.add(this.numslider);
    let path = this.hasAttribute("datapath") ? this.getAttribute("datapath") : void 0;
    let textbox = this.textbox;
    this.textbox.overrideDefault("width", this.getDefault("TextBoxWidth"));
    let apply_textbox = /* @__PURE__ */ __name(() => {
      let text2 = textbox.text;
      if (!isNumber(text2)) {
        textbox.flash("red");
        return;
      } else {
        textbox.flash("green");
        let displayUnit = this.editAsBaseUnit ? void 0 : this.displayUnit;
        let f = parseValue(text2, this.baseUnit, displayUnit);
        if (isNaN(f)) {
          this.flash("red");
          return;
        }
        if (this.isInt) {
          f = Math.floor(f);
        }
        this._lock_textbox = 1;
        this.setValue(f);
        this._lock_textbox = 0;
      }
    }, "apply_textbox");
    if (this.realTimeTextBox) {
      textbox.onchange = apply_textbox;
    }
    textbox.onend = apply_textbox;
    textbox.ctx = this.ctx;
    textbox.packflag |= this.inherit_packflag;
    textbox.overrideDefault("width", this.getDefault("TextBoxWidth"));
    textbox.style["height"] = this.getDefault("height") - 2 + "px";
    textbox._init();
    strip.add(textbox);
    textbox.setCSS();
    this.linkTextBox();
    let in_onchange = 0;
    this.numslider.onchange = (val) => {
      this._value = this.numslider.value;
      this.updateTextBox();
      if (in_onchange) {
        return;
      }
      if (this.onchange !== void 0) {
        in_onchange++;
        try {
          if (this.onchange) {
            this.onchange(this);
          }
        } catch (error2) {
          print_stack2(error2);
        }
      }
      in_onchange--;
    };
  }
  updateTextBox() {
    if (!this._init_done) {
      return;
    }
    if (this._lock_textbox > 0 || this.textbox.editing)
      return;
    this.textbox.text = this.formatNumber(this._value);
    this.textbox.update();
    updateSliderFromDom(this, this.numslider);
  }
  linkTextBox() {
    this.updateTextBox();
    let onchange = this.numslider.onchange;
    this.numslider.onchange = (e) => {
      this._value = e.value;
      this.updateTextBox();
      onchange(e);
    };
  }
  setValue(val, fire_onchange = true) {
    this._value = val;
    this.numslider.setValue(val, fire_onchange);
    this.updateTextBox();
  }
  updateName() {
    let name2 = this.getAttribute("name");
    if (!name2 && this.hasAttribute("datapath")) {
      let prop = this.getPathMeta(this.ctx, this.getAttribute("datapath"));
      if (prop) {
        name2 = prop.uiname;
      }
    }
    if (!name2) {
      name2 = "[error]";
    }
    if (name2 !== this._name) {
      this._name = name2;
      if (this.l) {
        this.l.text = name2;
      }
    }
  }
  updateLabelOnTop() {
    if (this.labelOnTop !== this._last_label_on_top) {
      this._last_label_on_top = this.labelOnTop;
      this.rebuild();
    }
  }
  updateDataPath() {
    if (!this.ctx || !this.getAttribute("datapath")) {
      return;
    }
    let prop = this.getPathMeta(this.ctx, this.getAttribute("datapath"));
    if (!prop) {
      return;
    }
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (val !== this._last_value) {
      this._last_value = this._value = val;
      this.updateTextBox();
    }
  }
  update() {
    this.updateLabelOnTop();
    super.update();
    this.updateDataPath();
    let redraw = false;
    updateSliderFromDom(this, this.numslider);
    updateSliderFromDom(this, this.textbox);
    if (redraw) {
      this.setCSS();
      this.numslider.setCSS();
      this.numslider._redraw();
    }
    this.updateName();
    this.numslider.description = this.description;
    this.textbox.description = this.title;
    if (this.hasAttribute("datapath")) {
      this.numslider.setAttribute("datapath", this.getAttribute("datapath"));
      this.textbox.setAttribute("datapath", this.getAttribute("datapath"));
    }
    if (this.hasAttribute("mass_set_path")) {
      this.numslider.setAttribute("mass_set_path", this.getAttribute("mass_set_path"));
      this.textbox.setAttribute("mass_set_path", this.getAttribute("mass_set_path"));
    }
  }
  setCSS() {
    super.setCSS();
    this.textbox.setCSS();
  }
};
var NumSliderSimple = class extends SliderWithTextbox {
  static {
    __name(this, "NumSliderSimple");
  }
  constructor() {
    super();
    this.numslider = UIBase2.createElement("numslider-simple-base-x");
  }
  static define() {
    return {
      tagname: "numslider-simple-x",
      style: "numslider_simple"
    };
  }
  _redraw() {
    this.numslider._redraw();
  }
};
UIBase2.internalRegister(NumSliderSimple);
var NumSliderWithTextBox = class extends SliderWithTextbox {
  static {
    __name(this, "NumSliderWithTextBox");
  }
  constructor() {
    super();
    this.numslider = UIBase2.createElement("numslider-x");
  }
  static define() {
    return {
      tagname: "numslider-textbox-x",
      style: "numslider_textbox"
    };
  }
  update() {
    super.update();
    if (this.hasAttribute("name")) {
      let name2 = this.getAttribute("name");
      if (name2 !== this.numslider.name) {
        this.numslider.setAttribute("name", name2);
        this.numslider._redraw();
      }
    }
  }
  _redraw() {
    this.numslider._redraw();
  }
};
UIBase2.internalRegister(NumSliderWithTextBox);

// scripts/path.ux/scripts/xmlpage/xmlpage.js
var pagecache = /* @__PURE__ */ new Map();
var domTransferAttrs = /* @__PURE__ */ new Set(["id", "title", "tab-index"]);
var domEventAttrs = /* @__PURE__ */ new Set(["click", "mousedown", "mouseup", "mousemove", "keydown", "keypress"]);
function parseXML(xml) {
  let parser = new DOMParser();
  xml = `<root>${xml}</root>`;
  return parser.parseFromString(xml.trim(), "application/xml");
}
__name(parseXML, "parseXML");
var num_re = /[0-9]+$/;
function getIconFlag(elem2) {
  if (!elem2.hasAttribute("useIcons")) {
    return 0;
  }
  let attr = elem2.getAttribute("useIcons");
  if (typeof attr === "string") {
    attr = attr.toLowerCase().trim();
  }
  if (attr === "false" || attr === "no") {
    return 0;
  }
  if (attr === "true" || attr === "yes") {
    return PackFlags.USE_ICONS;
  } else if (attr === "small") {
    return PackFlags.SMALL_ICON | PackFlags.USE_ICONS;
  } else if (attr === "large") {
    return PackFlags.LARGE_ICON | PackFlags.USE_ICONS;
  } else {
    let isnum = typeof attr === "number";
    let sheet = attr;
    if (typeof sheet === "string" && sheet.search(num_re) === 0) {
      sheet = parseInt(sheet);
      isnum = true;
    }
    if (!isnum) {
      return PackFlags.USE_ICONS;
    }
    let flag = PackFlags.USE_ICONS | PackFlags.CUSTOM_ICON_SHEET;
    flag |= sheet - 1 << PackFlags.CUSTOM_ICON_SHEET_START;
    return flag;
  }
  return 0;
}
__name(getIconFlag, "getIconFlag");
function getPackFlag(elem2) {
  let packflag = getIconFlag(elem2);
  if (elem2.hasAttribute("drawChecks")) {
    if (!getbool(elem2, "drawChecks")) {
      packflag |= PackFlags.HIDE_CHECK_MARKS;
    } else {
      packflag &= ~PackFlags.HIDE_CHECK_MARKS;
    }
  }
  if (getbool(elem2, "simpleSlider")) {
    packflag |= PackFlags.SIMPLE_NUMSLIDERS;
  }
  if (getbool(elem2, "rollarSlider")) {
    packflag |= PackFlags.FORCE_ROLLER_SLIDER;
  }
  return packflag;
}
__name(getPackFlag, "getPackFlag");
function myParseFloat(s) {
  s = "" + s;
  s = s.trim().toLowerCase();
  if (s.endsWith("px")) {
    s = s.slice(0, s.length - 2);
  }
  return parseFloat(s);
}
__name(myParseFloat, "myParseFloat");
function getbool(elem2, attr) {
  let ret = elem2.getAttribute(attr);
  if (!ret) {
    return false;
  }
  ret = ret.toLowerCase();
  return ret === "1" || ret === "true" || ret === "yes";
}
__name(getbool, "getbool");
function getfloat(elem2, attr, defaultval) {
  if (!elem2.hasAttribute(attr)) {
    return defaultval;
  }
  return myParseFloat(elem2.getAttribute(attr));
}
__name(getfloat, "getfloat");
var customHandlers = {};
var Handler = class {
  static {
    __name(this, "Handler");
  }
  constructor(ctx, container) {
    this.container = container;
    this.stack = [];
    this.ctx = ctx;
    this.codefuncs = {};
    this.templateVars = {};
    let attrs = list(sliderDomAttributes);
    this.inheritDomAttrs = {};
    this.inheritDomAttrKeys = new Set(attrs);
  }
  push() {
    this.stack.push(this.container);
    this.stack.push(new Set(this.inheritDomAttrKeys));
    this.stack.push(Object.assign({}, this.inheritDomAttrs));
  }
  pop() {
    this.inheritDomAttrs = this.stack.pop();
    this.inheritDomAttrKeys = this.stack.pop();
    this.container = this.stack.pop();
  }
  handle(elem2) {
    if (elem2.constructor === XMLDocument || elem2.nodeName === "root") {
      for (let child of elem2.childNodes) {
        this.handle(child);
      }
      window.tree = elem2;
      return;
    } else if (elem2.constructor === Text || elem2.constructor === Comment) {
      return;
    }
    let tagname = "" + elem2.tagName;
    if (tagname in customHandlers) {
      customHandlers[tagname](this, elem2);
    } else if (this[tagname]) {
      this[tagname](elem2);
    } else {
      let elem22 = UIBase2.createElement(tagname.toLowerCase());
      window.__elem = elem2;
      for (let k of elem2.getAttributeNames()) {
        elem22.setAttribute(k, elem2.getAttribute(k));
      }
      if (elem22 instanceof UIBase2) {
        if (!elem22.hasAttribute("datapath") && elem22.hasAttribute("path")) {
          elem22.setAttribute("datapath", elem22.getAttribute("path"));
        }
        if (elem22.hasAttribute("datapath")) {
          let path = elem22.getAttribute("datapath");
          path = this.container._joinPrefix(path);
          elem22.setAttribute("datapath", path);
        }
        if (elem22.hasAttribute("massSetPath") || this.container.massSetPrefix) {
          let massSetPath = "";
          if (elem22.hasAttribute("massSetPath")) {
            massSetPath = elem22.getAttribute("massSetPath");
          }
          let path = elem22.getAttribute("datapath");
          path = this.container._getMassPath(this.container.ctx, path, massSetPath);
          elem22.setAttribute("massSetPath", path);
          elem22.setAttribute("mass_set_path", path);
        }
        this.container.add(elem22);
        this._style(elem2, elem22);
        if (elem22 instanceof Container) {
          this.push();
          this.container = elem22;
          this._container(elem2, elem22, true);
          this.visit(elem2);
          this.pop();
          return;
        }
      } else {
        console.warn("Unknown element " + elem2.tagName + " (" + elem2.constructor.name + ")");
        let elem23 = document.createElement(elem2.tagName.toLowerCase());
        for (let attr of elem2.getAttributeNames()) {
          elem23.setAttribute(attr, elem2.getAttribute(attr));
        }
        this._basic(elem2, elem23);
        this.container.shadow.appendChild(elem23);
        if (!(elem23 instanceof UIBase2)) {
          elem23.pathux_ctx = this.container.ctx;
        } else {
          elem23.ctx = this.container.ctx;
        }
      }
      this.visit(elem2);
    }
  }
  _style(elem2, elem22) {
    let style = {};
    if (elem2.hasAttribute("class")) {
      elem22.setAttribute("class", elem2.getAttribute("class"));
      let cls = elem22.getAttribute("class").trim();
      let keys2 = [
        cls,
        (elem22.tagName.toLowerCase() + "." + cls).trim(),
        "#" + elem2.getAttribute("id").trim()
      ];
      for (let sheet of document.styleSheets) {
        for (let rule of sheet.rules) {
          for (let k of keys2) {
            if (rule.selectorText.trim() === k) {
              for (let k2 of rule.styleMap.keys()) {
                let val = rule.style[k2];
                style[k2] = val;
              }
            }
          }
        }
      }
    }
    if (elem2.hasAttribute("style")) {
      let stylecode = elem2.getAttribute("style");
      stylecode = stylecode.split(";");
      for (let row of stylecode) {
        row = row.trim();
        let i = row.search(/\:/);
        if (i >= 0) {
          let key = row.slice(0, i).trim();
          let val = row.slice(i + 1, row.length).trim();
          style[key] = val;
        }
      }
    }
    let keys = Object.keys(style);
    if (keys.length === 0) {
      return;
    }
    function setStyle() {
      for (let k of keys) {
        elem22.style[k] = style[k];
      }
    }
    __name(setStyle, "setStyle");
    if (elem22 instanceof UIBase2) {
      elem22.setCSS.after(() => {
        setStyle();
      });
    }
    setStyle();
  }
  visit(node) {
    for (let child of node.childNodes) {
      this.handle(child);
    }
  }
  _getattr(elem2, k) {
    let val = elem2.getAttribute(k);
    if (!val) {
      return val;
    }
    if (val.startsWith("##")) {
      val = val.slice(2, val.length).trim();
      if (!(val in this.templateVars)) {
        console.error(`unknown template variable '${val}'`);
        val = "";
      } else {
        val = this.templateVars[val];
      }
    }
    return val;
  }
  _basic(elem2, elem22) {
    this._style(elem2, elem22);
    for (let k of elem2.getAttributeNames()) {
      if (k.startsWith("custom")) {
        elem22.setAttribute(k, this._getattr(elem2, k));
      }
    }
    let codeattrs = [];
    for (let k of elem2.getAttributeNames()) {
      let val = "" + elem2.getAttribute(k);
      if (val.startsWith("ng[")) {
        val = val.slice(3, val.endsWith("]") ? val.length - 1 : val.length);
        codeattrs.push([k, "ng", val]);
      }
    }
    for (let k of domEventAttrs) {
      let k2 = "on" + k;
      if (elem2.hasAttribute(k2)) {
        codeattrs.push([k, "dom", elem2.getAttribute(k2)]);
      }
    }
    for (let [k, eventType, id2] of codeattrs) {
      if (!(id2 in this.codefuncs)) {
        console.error("Unknown code fragment " + id2);
        continue;
      }
      if (eventType === "dom") {
        if (k === "click") {
          let onclick = elem22.onclick;
          let func2 = this.codefuncs[id2];
          elem22.onclick = function() {
            if (onclick) {
              onclick.apply(this, arguments);
            }
            return func2.apply(this, arguments);
          };
        } else {
          elem22.addEventListener(k, this.codefuncs[id2]);
        }
      } else if (eventType === "ng") {
        elem22.addEventListener(k, this.codefuncs[id2]);
      }
    }
    for (let k of domTransferAttrs) {
      if (elem2.hasAttribute(k)) {
        elem22.setAttribute(k, elem2.getAttribute(k));
      }
    }
    for (let k in this.inheritDomAttrs) {
      if (!elem2.hasAttribute(k)) {
        elem2.setAttribute(k, this.inheritDomAttrs[k]);
      }
    }
    for (let k of sliderDomAttributes) {
      if (elem2.hasAttribute(k)) {
        elem22.setAttribute(k, elem2.getAttribute(k));
      }
    }
    if (!(elem22 instanceof UIBase2)) {
      return;
    }
    if (elem2.hasAttribute("theme-class")) {
      elem22.overrideClass(elem2.getAttribute("theme-class"));
      if (elem22._init_done) {
        elem22.setCSS();
        elem22.flushUpdate();
      }
    }
    if (elem2.hasAttribute("useIcons") && typeof elem22.useIcons === "function") {
      let val = elem2.getAttribute("useIcons").trim().toLowerCase();
      if (val === "small" || val === "true" || val === "yes") {
        val = true;
      } else if (val === "large") {
        val = 1;
      } else if (val === "false" || val === "no") {
        val = false;
      } else {
        val = parseInt(val) - 1;
      }
      elem22.useIcons(val);
    }
    if (elem2.hasAttribute("sliderTextBox")) {
      let textbox = getbool(elem2, "sliderTextBox");
      if (textbox) {
        elem22.packflag &= ~PackFlags.NO_NUMSLIDER_TEXTBOX;
        elem22.inherit_packflag &= ~PackFlags.NO_NUMSLIDER_TEXTBOX;
      } else {
        elem22.packflag |= PackFlags.NO_NUMSLIDER_TEXTBOX;
        elem22.inherit_packflag |= PackFlags.NO_NUMSLIDER_TEXTBOX;
      }
    }
    if (elem2.hasAttribute("sliderMode")) {
      let sliderMode = elem2.getAttribute("sliderMode");
      if (sliderMode === "slider") {
        elem22.packflag &= ~PackFlags.FORCE_ROLLER_SLIDER;
        elem22.inherit_packflag &= ~PackFlags.FORCE_ROLLER_SLIDER;
        elem22.packflag |= PackFlags.SIMPLE_NUMSLIDERS;
        elem22.inherit_packflag |= PackFlags.SIMPLE_NUMSLIDERS;
      } else if (sliderMode === "roller") {
        elem22.packflag &= ~PackFlags.SIMPLE_NUMSLIDERS;
        elem22.packflag |= PackFlags.FORCE_ROLLER_SLIDER;
        elem22.inherit_packflag &= ~PackFlags.SIMPLE_NUMSLIDERS;
        elem22.inherit_packflag |= PackFlags.FORCE_ROLLER_SLIDER;
      }
    }
    if (elem2.hasAttribute("showLabel")) {
      let state = getbool(elem2, "showLabel");
      if (state) {
        elem22.packflag |= PackFlags.FORCE_PROP_LABELS;
        elem22.inherit_packflag |= PackFlags.FORCE_PROP_LABELS;
      } else {
        elem22.packflag &= ~PackFlags.FORCE_PROP_LABELS;
        elem22.inherit_packflag &= ~PackFlags.FORCE_PROP_LABELS;
      }
    }
    function doBox(key) {
      if (elem2.hasAttribute(key)) {
        let val = elem2.getAttribute(key).toLowerCase().trim();
        if (val.endsWith("px")) {
          val = val.slice(0, val.length - 2).trim();
        }
        if (val.endsWith("%")) {
          console.warn(`Relative styling of '${key}' may be unstable for this element`, elem2);
          elem2.setCSS.after(function() {
            this.style[key] = val;
          });
        } else {
          val = parseFloat(val);
          if (isNaN(val) || typeof val !== "number") {
            console.error(`Invalid style ${key}:${elem2.getAttribute(key)}`);
            return;
          }
          elem22.overrideDefault(key, val);
          elem22.setCSS();
          elem22.style[key] = "" + val + "px";
        }
      }
    }
    __name(doBox, "doBox");
    doBox("width");
    doBox("height");
    doBox("margin");
    doBox("padding");
    for (let i = 0; i < 2; i++) {
      let key = i ? "margin" : "padding";
      doBox(key + "-bottom");
      doBox(key + "-top");
      doBox(key + "-left");
      doBox(key + "-right");
    }
  }
  _handlePathPrefix(elem2, con) {
    if (elem2.hasAttribute("path")) {
      let prefix = con.dataPrefix;
      let path = elem2.getAttribute("path").trim();
      if (prefix.length > 0) {
        prefix += ".";
      }
      prefix += path;
      con.dataPrefix = prefix;
    }
    if (elem2.hasAttribute("massSetPath")) {
      let prefix = con.massSetPrefix;
      let path = elem2.getAttribute("massSetPath").trim();
      if (prefix.length > 0) {
        prefix += ".";
      }
      prefix += path;
      con.massSetPrefix = prefix;
    }
  }
  _container(elem2, con, ignorePathPrefix = false) {
    for (let k of this.inheritDomAttrKeys) {
      if (elem2.hasAttribute(k)) {
        this.inheritDomAttrs[k] = elem2.getAttribute(k);
      }
    }
    let packflag = getPackFlag(elem2);
    con.packflag |= packflag;
    con.inherit_packflag |= packflag;
    this._basic(elem2, con);
    if (!ignorePathPrefix) {
      this._handlePathPrefix(elem2, con);
    }
  }
  noteframe(elem2) {
    let ret = this.container.noteframe();
    if (ret) {
      this._basic(elem2, ret);
    }
  }
  cell(elem2) {
    this.push();
    this.container = this.container.cell();
    this._container(elem2, this.container);
    this.visit(elem2);
    this.pop();
  }
  table(elem2) {
    this.push();
    this.container = this.container.table();
    this._container(elem2, this.container);
    this.visit(elem2);
    this.pop();
  }
  panel(elem2) {
    let title = "" + elem2.getAttribute("label");
    let closed = getbool(elem2, "closed");
    this.push();
    this.container = this.container.panel(title);
    this.container.closed = closed;
    this._container(elem2, this.container);
    this.visit(elem2);
    this.pop();
  }
  pathlabel(elem2) {
    this._prop(elem2, "pathlabel");
  }
  /**
   handle a code element, which are wrapped in functions
   */
  code(elem) {
    window._codelem = elem;
    let buf = "";
    for (let elem2 of elem.childNodes) {
      if (elem2.nodeName === "#text") {
        buf += elem2.textContent + "\n";
      }
    }
    var func, $scope = this.templateScope;
    buf = `
func = function() {
  ${buf};
}
    `;
    eval(buf);
    let id = "" + elem.getAttribute("id");
    this.codefuncs[id] = func;
  }
  textbox(elem2) {
    if (elem2.hasAttribute("path")) {
      this._prop(elem2, "textbox");
    } else {
    }
  }
  label(elem2) {
    let elem22 = this.container.label(elem2.innerHTML);
    this._basic(elem2, elem22);
  }
  colorfield(elem2) {
    this._prop(elem2, "colorfield");
  }
  /** simpleSliders=true enables simple sliders */
  prop(elem2) {
    this._prop(elem2, "prop");
  }
  _prop(elem2, key) {
    let packflag = getPackFlag(elem2);
    let path = elem2.getAttribute("path");
    let elem22;
    if (key === "pathlabel") {
      elem22 = this.container.pathlabel(path, elem2.innerHTML, packflag);
    } else if (key === "textbox") {
      elem22 = this.container.textbox(path, void 0, void 0, packflag);
      elem22.update();
      if (elem2.hasAttribute("modal")) {
        elem22.setAttribute("modal", elem2.getAttribute("modal"));
      }
      if (elem2.hasAttribute("realtime")) {
        elem22.setAttribute("realtime", elem2.getAttribute("realtime"));
      }
    } else if (key === "colorfield") {
      elem22 = this.container.colorPicker(path, {
        packflag,
        themeOverride: elem2.hasAttribute("theme-class") ? elem2.getAttribute("theme-class") : void 0
      });
    } else {
      elem22 = this.container[key](path, packflag);
    }
    if (!elem22) {
      elem22 = document.createElement("span");
      elem22.innerHTML = "error";
      this.container.shadow.appendChild(elem22);
    } else {
      this._basic(elem2, elem22);
      if (elem2.hasAttribute("massSetPath") || this.container.massSetPrefix) {
        let mpath = elem2.getAttribute("massSetPath");
        if (!mpath) {
          mpath = elem2.getAttribute("path");
        }
        mpath = this.container._getMassPath(this.container.ctx, path, mpath);
        elem22.setAttribute("mass_set_path", mpath);
      }
    }
  }
  strip(elem2) {
    this.push();
    let dir;
    if (elem2.hasAttribute("mode")) {
      dir = elem2.getAttribute("mode").toLowerCase().trim();
      dir = dir === "horizontal";
    }
    let margin1 = getfloat(elem2, "margin1", void 0);
    let margin2 = getfloat(elem2, "margin2", void 0);
    this.container = this.container.strip(void 0, margin1, margin2, dir);
    this._container(elem2, this.container);
    this.visit(elem2);
    this.pop();
  }
  column(elem2) {
    this.push();
    this.container = this.container.col();
    this._container(elem2, this.container);
    this.visit(elem2);
    this.pop();
  }
  row(elem2) {
    this.push();
    this.container = this.container.row();
    this._container(elem2, this.container);
    this.visit(elem2);
    this.pop();
  }
  toolPanel(elem2) {
    this.tool(elem2, "toolPanel");
  }
  tool(elem2, key = "tool") {
    let path = elem2.getAttribute("path");
    let packflag = getPackFlag(elem2);
    let noIcons = false, iconflags;
    if (getbool(elem2, "useIcons")) {
      packflag |= PackFlags.USE_ICONS;
    } else if (elem2.hasAttribute("useIcons")) {
      packflag &= ~PackFlags.USE_ICONS;
      noIcons = true;
    }
    let label = ("" + elem2.textContent).trim();
    if (label.length > 0) {
      path += "|" + label;
    }
    if (noIcons) {
      iconflags = this.container.useIcons(false);
    }
    let elem22 = this.container[key](path, packflag);
    if (elem22) {
      this._basic(elem2, elem22);
    } else {
      elem22 = document.createElement("strip");
      elem22.innerHTML = "error";
      this.container.shadow.appendChild(elem22);
      this._basic(elem2, elem22);
    }
    if (noIcons) {
      this.container.inherit_packflag |= iconflags;
      this.container.packflag |= iconflags;
    }
  }
  dropbox(elem2) {
    return this.menu(elem2, true);
  }
  menu(elem2, isDropBox = false) {
    let packflag = getPackFlag(elem2);
    let title = elem2.getAttribute("name");
    let list4 = [];
    for (let child of elem2.childNodes) {
      if (child.tagName === "tool") {
        let path = child.getAttribute("path");
        let label = child.innerHTML.trim();
        if (label.length > 0) {
          path += "|" + label;
        }
        list4.push(path);
      } else if (child.tagName === "sep") {
        list4.push(Menu.SEP);
      } else if (child.tagName === "item") {
        let id2, icon, hotkey, description;
        if (child.hasAttribute("id")) {
          id2 = child.getAttribute("id");
        }
        if (child.hasAttribute("icon")) {
          icon = child.getAttribute("icon").toUpperCase().trim();
          icon = Icons[icon];
        }
        if (child.hasAttribute("hotkey")) {
          hotkey = child.getAttribute("hotkey");
        }
        if (child.hasAttribute("description")) {
          description = child.getAttribute("description");
        }
        list4.push({
          name: child.innerHTML.trim(),
          id: id2,
          icon,
          hotkey,
          description
        });
      }
    }
    let ret = this.container.menu(title, list4, packflag);
    if (isDropBox) {
      ret.removeAttribute("simple");
    }
    if (elem2.hasAttribute("id")) {
      ret.setAttribute("id", elem2.getAttribute("id"));
    }
    this._basic(elem2, ret);
    return ret;
  }
  button(elem2) {
    let title = elem2.innerHTML.trim();
    let ret = this.container.button(title);
    if (elem2.hasAttribute("id")) {
      ret.setAttribute("id", elem2.getAttribute("id"));
    }
    this._basic(elem2, ret);
  }
  iconbutton(elem2) {
    let title = elem2.innerHTML.trim();
    let icon = elem2.getAttribute("icon");
    if (icon) {
      icon = UIBase2.getIconEnum()[icon];
    }
    let ret = this.container.iconbutton(icon, title);
    if (elem2.hasAttribute("id")) {
      ret.setAttribute("id", elem2.getAttribute("id"));
    }
    this._basic(elem2, ret);
  }
  tab(elem2) {
    this.push();
    let title = "" + elem2.getAttribute("label");
    let tabs = this.container;
    this.container = this.container.tab(title);
    if (elem2.hasAttribute("overflow")) {
      this.container.setAttribute("overflow", elem2.getAttribute("overflow"));
    }
    if (elem2.hasAttribute("overflow-y")) {
      this.container.setAttribute("overflow-y", elem2.getAttribute("overflow-y"));
    }
    this._container(elem2, this.container);
    this.visit(elem2);
    this.pop();
  }
  tabs(elem2) {
    let pos = elem2.getAttribute("pos") || "left";
    this.push();
    let tabs = this.container.tabs(pos);
    this.container = tabs;
    if (elem2.hasAttribute("movable-tabs")) {
      tabs.setAttribute("movable-tabs", elem2.getAttribute("movable-tabs"));
    }
    this._container(elem2, tabs);
    this.visit(elem2);
    this.pop();
  }
};
function initPage(ctx, xml, parentContainer = void 0, templateVars = {}, templateScope = {}) {
  let tree = parseXML(xml);
  let container = UIBase2.createElement("container-x");
  container.ctx = ctx;
  if (ctx) {
    container._init();
  }
  if (parentContainer) {
    parentContainer.add(container);
  }
  let handler = new Handler(ctx, container);
  handler.templateVars = Object.assign({}, templateVars);
  handler.templateScope = templateScope;
  handler.handle(tree);
  return container;
}
__name(initPage, "initPage");
function loadPage(ctx, url, parentContainer_or_args = void 0, loadSourceOnly = false, modifySourceCB, templateVars, templateScope) {
  let source;
  let parentContainer;
  if (parentContainer_or_args !== void 0 && !(parentContainer_or_args instanceof HTMLElement)) {
    let args = parentContainer_or_args;
    parentContainer = args.parentContainer;
    loadSourceOnly = args.loadSourceOnly;
    modifySourceCB = args.modifySourceCB;
    templateVars = args.templateVars;
    templateScope = args.templateScope;
  } else {
    parentContainer = parentContainer_or_args;
  }
  if (pagecache.has(url)) {
    source = pagecache.get(url);
    if (modifySourceCB) {
      source = modifySourceCB(source);
    }
    return new Promise((accept, reject) => {
      if (loadSourceOnly) {
        accept(source);
      } else {
        accept(initPage(ctx, source, parentContainer, templateVars, templateScope));
      }
    });
  } else {
    return new Promise((accept, reject) => {
      fetch(url).then((res) => res.text()).then((data) => {
        pagecache.set(url, data);
        if (modifySourceCB) {
          data = modifySourceCB(data);
        }
        if (loadSourceOnly) {
          accept(data);
        } else {
          accept(initPage(ctx, data, parentContainer, templateVars, templateScope));
        }
      });
    });
  }
}
__name(loadPage, "loadPage");

// scripts/path.ux/scripts/path-controller/curve/curve1d_utils.js
function makeGenEnum() {
  let enumdef = {};
  let uinames = {};
  let icons = {};
  for (let cls of CurveConstructors) {
    let def = cls.define();
    let uiname = def.uiname;
    uiname = uiname === void 0 ? def.name : uiname;
    enumdef[def.name] = cls.name;
    uinames[def.name] = uiname;
    icons[def.name] = def.icon !== void 0 ? def.icon : -1;
  }
  return new EnumProperty(void 0, enumdef).addUINames(uinames).addIcons(icons);
}
__name(makeGenEnum, "makeGenEnum");

// scripts/path.ux/scripts/widgets/ui_curvewidget.js
var Curve1DWidget = class extends ColumnFrame {
  static {
    __name(this, "Curve1DWidget");
  }
  #in_onchange = false;
  constructor() {
    super();
    this.useDataPathUndo = false;
    this._on_draw = this._on_draw.bind(this);
    this.drawTransform = [1, [0, 0]];
    this._value = new Curve1D();
    this.checkCurve1dEvents();
    this.#in_onchange = 0;
    this._value._on_change = (msg) => {
      if (this.#in_onchange) {
        return;
      }
      this.#in_onchange++;
      try {
        if (this.hasAttribute("datapath")) {
          let path = this.getAttribute("datapath");
          if (this._value !== void 0) {
            let val = this.getPathValue(this.ctx, path);
            if (val) {
              val.load(this._value);
              this.setPathValue(this.ctx, path, val);
            } else {
              val = this._value.copy();
              this.setPathValue(this.ctx, path, val);
            }
          }
        }
        if (this.onchange) {
          this.onchange(this._value);
        }
      } catch (error2) {
        if (window.DEBUG && window.DEBUG.datapath) {
          console.error(error2.stack);
          console.error(error2.message);
        }
      }
      this.#in_onchange--;
      if (this.#in_onchange < 0) {
        console.warn("this.#in_onchange was negative");
        this.#in_onchange = 0;
      }
    };
    this._gen_type = void 0;
    this._lastGen = void 0;
    this._last_dpi = void 0;
    this.canvas = document.createElement("canvas");
    this.g = this.canvas.getContext("2d");
    this.canvas.g = this.g;
    window.cw = this;
    this.shadow.appendChild(this.canvas);
  }
  /**
   * Checks if a curve1d instance exists at dom attribute "datapath"
   * and if it does adds curve1d event handlers to it.
   *
   * Note: it's impossible to know for sure that a widget is truly dead,
   * e.g. it could be hidden in a panel or something.  Curve1d's event
   * handling system takes a callback that checks if a callback should
   * be removed, which we provide by testing this.isConnected.
   *
   * Since this is not robust we have to check regularly if we need to add
   * Curve1D event handlers, which is why this function exists.
   */
  checkCurve1dEvents() {
    if (!this._value.subscribed("draw", this)) {
      this._value.on("draw", this._on_draw, this, () => !this.isConnected);
    }
    if (this.ctx && this.hasAttribute("datapath")) {
      let curve1d;
      try {
        curve1d = this.ctx.api.getValue(this.ctx, this.getAttribute("datapath"));
      } catch (error2) {
        if (window.DEBUG && window.DEBUG.datapath) {
          console.error(error2.stack);
          console.error(error2.message);
        }
      }
      if (!curve1d) {
        this.disabled = true;
        return;
      }
      if (this.disabled) {
        this.disabled = false;
      }
      if (!curve1d.subscribed(void 0, this)) {
        curve1d.on("select", (bspline1) => {
          let bspline2 = this._value.getGenerator("BSplineCurve");
          for (let i = 0; i < bspline1.points.length; i++) {
            if (i >= bspline2.length) {
              break;
            }
            bspline2.points[i].flag = bspline1.points[i].flag;
          }
          bspline2.redraw();
        });
        curve1d.on("transform", (bspline1) => {
          let bspline2 = this._value.getGenerator("BSplineCurve");
          for (let i = 0; i < bspline1.points.length; i++) {
            if (i >= bspline2.length) {
              break;
            }
            bspline2.points[i].co.load(bspline1.points[i].co);
          }
          bspline2.update();
          bspline2.updateKnots();
          bspline2.redraw();
        });
        curve1d.on("update", () => {
          console.log("datapath curve1d update!");
          this._value.load(curve1d);
          this.rebuild();
        }, this, () => !this.isConnected);
      }
    }
  }
  get value() {
    return this._value;
  }
  _on_draw(e) {
    let curve = e.data;
    this._redraw();
  }
  set value(val) {
    this._value.load(val);
    this.update();
    this._redraw();
  }
  _on_change() {
    if (this.onchange) {
      this.onchange(this);
    }
  }
  init() {
    super.init();
    this.useDataPathUndo = false;
    let row = this.row();
    let prop = makeGenEnum();
    prop.setValue(this.value.generatorType);
    this.dropbox = row.listenum(void 0, "Type", prop, this.value.generatorType, (id2) => {
      console.warn("SELECT", id2, prop.keys[id2]);
      this.value.setGenerator(id2);
      this.value._on_change("curve type change");
    });
    this.dropbox._init();
    row.iconbutton(Icons.ZOOM_OUT, "Zoom Out", () => {
      let curve = this._value;
      if (!curve) return;
      curve.uiZoom *= 0.9;
      if (this.getAttribute("datapath")) {
        this.setPathValue(this.ctx, this.getAttribute("datapath"), curve);
      }
      this._redraw();
    }).iconsheet = 0;
    row.iconbutton(Icons.ZOOM_IN, "Zoom In", () => {
      let curve = this._value;
      if (!curve) return;
      curve.uiZoom *= 1.1;
      if (this.getAttribute("datapath")) {
        this.setPathValue(this.ctx, this.getAttribute("datapath"), curve);
      }
      this._redraw();
    }).iconsheet = 0;
    this.container = this.col();
    let panel = this.panel("Range");
    let clipCheck = panel.check(void 0, "Clip To Range");
    clipCheck.onchange = (val) => {
      this._value.clipToRange = val;
      this._on_change();
      this._redraw();
    };
    clipCheck.checked = this._value.clipToRange;
    let xmin = panel.slider(void 0, "X Min", this._value.xRange[0], -10, 10, 0.1, false, void 0, (val) => {
      this._value.xRange[0] = val.value;
      this._on_change();
      this._redraw();
    });
    let xmax = panel.slider(void 0, "X Max", this._value.xRange[1], -10, 10, 0.1, false, void 0, (val) => {
      this._value.xRange[1] = val.value;
      this._on_change();
      this._redraw();
    });
    let ymin = panel.slider(void 0, "Y Min", this._value.yRange[0], -10, 10, 0.1, false, void 0, (val) => {
      this._value.yRange[0] = val.value;
      this._on_change();
      this._redraw();
    });
    let ymax = panel.slider(void 0, "Y Max", this._value.yRange[1], -10, 10, 0.1, false, void 0, (val) => {
      this._value.yRange[1] = val.value;
      this._on_change();
      this._redraw();
    });
    let last_update_key = "";
    this.container.update.after(() => {
      const xRange = this._value.xRange;
      const yRange = this._value.yRange;
      let key = "" + xRange[0] + ":" + xRange[1] + ":" + yRange[0] + ":" + yRange[1] + ":" + this._value.clipToRange;
      clipCheck.checked = this._value.clipToRange;
      if (key !== last_update_key) {
        last_update_key = key;
        xmin.setValue(xRange[0]);
        xmax.setValue(xRange[1]);
        ymin.setValue(yRange[0]);
        ymax.setValue(yRange[1]);
      }
    });
    xmin.displayUnit = xmin.baseUnit = "none";
    ymin.displayUnit = ymin.baseUnit = "none";
    xmax.displayUnit = xmax.baseUnit = "none";
    ymax.displayUnit = ymax.baseUnit = "none";
    panel.closed = false;
  }
  setCSS() {
    super.setCSS();
    this.style["width"] = "min-contents";
    this.style["height"] = "min-contents";
    this.updateSize();
  }
  updateSize() {
    let dpi = UIBase2.getDPI();
    let w = ~~(this.getDefault("CanvasWidth") * dpi);
    let h = ~~(this.getDefault("CanvasHeight") * dpi);
    let bad = w !== this.canvas.width || h !== this.canvas.height;
    bad = bad || dpi !== this._last_dpi;
    if (!bad) {
      return;
    }
    this._last_dpi = dpi;
    this.canvas.width = w;
    this.canvas.height = h;
    this.canvas.style["width"] = w / dpi + "px";
    this.canvas.style["height"] = h / dpi + "px";
    this._redraw();
  }
  _redraw() {
    this.canvas.width = this.canvas.width;
    this.canvas.height = this.canvas.height;
    let canvas = this.canvas, g = this.g;
    g.beginPath();
    g.rect(0, 0, canvas.width, canvas.height);
    g.fillStyle = this.getDefault("CanvasBG");
    g.fill();
    g.save();
    let zoom = this._value.uiZoom;
    let scale = Math.max(canvas.width, canvas.height);
    g.lineWidth /= scale;
    this.drawTransform[0] = scale * zoom;
    this.drawTransform[1][0] = 0;
    this.drawTransform[1][1] = -1;
    this.drawTransform[1][0] -= 0.5 - 0.5 / zoom;
    this.drawTransform[1][1] += 0.5 - 0.5 / zoom;
    g.scale(this.drawTransform[0], -this.drawTransform[0]);
    g.translate(this.drawTransform[1][0], this.drawTransform[1][1]);
    g.lineWidth /= zoom;
    this._value.draw(this.canvas, this.g, this.drawTransform);
    g.restore();
  }
  rebuild() {
    let ctx = this.ctx;
    if (ctx === void 0 || this.container === void 0) {
      return;
    }
    this.checkCurve1dEvents();
    let uidata = saveUIData(this.container, "curve1d");
    this._gen_type = this.value.generatorType;
    let col = this.container;
    if (this._lastGen !== void 0) {
      this._lastGen.killGUI(col, this.canvas);
    }
    let onchange = this.dropbox.onchange;
    this.dropbox.onchange = void 0;
    this.dropbox.setValue(this.value.generatorType);
    this.dropbox.onchange = onchange;
    col.clear();
    let onSourceUpdate = /* @__PURE__ */ __name(() => {
      if (!this.hasAttribute("datapath")) {
        return;
      }
      let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
      this._value.load(val);
      this.rebuild();
    }, "onSourceUpdate");
    let dpath = this.hasAttribute("datapath") ? this.getAttribute("datapath") : void 0;
    let gen = this.value.generators.active;
    this.#in_onchange++;
    try {
      gen.makeGUI(col, this.canvas, this.drawTransform, dpath, onSourceUpdate);
      loadUIData(this.container, uidata);
      for (let i = 0; i < 4; i++) {
        col.flushUpdate();
      }
    } catch (error2) {
      console.warn(error2.stack);
      console.warn(error2.message);
    }
    this.#in_onchange--;
    this._lastGen = gen;
    this._redraw();
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let path = this.getAttribute("datapath");
    let val = this.getPathValue(this.ctx, path);
    if (this._lastu === void 0) {
      this._lastu = 0;
    }
    if (val && !val.equals(this._value) && time_ms() - this._lastu > 200) {
      this._lastu = time_ms();
      this._value.load(val);
      this.update();
      this._redraw();
    }
  }
  updateGenUI() {
    let bad = this._lastGen !== this.value.generators.active;
    if (bad) {
      this.rebuild();
      this._redraw();
    }
  }
  update() {
    super.update();
    this.checkCurve1dEvents();
    this.updateDataPath();
    this.updateSize();
    this.updateGenUI();
  }
  static define() {
    return {
      tagname: "curve-widget-x",
      style: "curvewidget"
    };
  }
};
UIBase2.internalRegister(Curve1DWidget);

// scripts/path.ux/scripts/widgets/ui_panel.js
var _ui2 = void 0;
var PropFlags3 = PropFlags;
var PropSubTypes3 = PropSubTypes;
var EnumProperty5 = EnumProperty;
var Vector25 = Vector2, UIBase9 = UIBase2, PackFlags5 = PackFlags, PropTypes5 = PropTypes;
var forward_keys = /* @__PURE__ */ new Set([
  "row",
  "col",
  "strip",
  "noteframe",
  "helppicker",
  "vecpopup",
  "tabs",
  "table",
  "menu",
  "listbox",
  "panel",
  "pathlabel",
  "label",
  "listenum",
  "check",
  "iconcheck",
  "button",
  "iconbutton",
  "colorPicker",
  "twocol",
  "treeview",
  "slider",
  "simpleslider",
  "curve1d",
  "noteframe",
  "vecpopup",
  "prop",
  "tool",
  "toolPanel",
  "textbox",
  "dynamicMenu",
  "add",
  "prepend",
  "useIcons",
  "noMarginsOrPadding",
  "wrap"
]);
var PanelFrame = class extends ColumnFrame {
  static {
    __name(this, "PanelFrame");
  }
  constructor() {
    super();
    this.titleframe = super.row();
    this.contents = super.col();
    this.contents._remove = this.contents.remove;
    this.contents.remove = () => {
      this.remove();
    };
    this._panel = this;
    this.contents._panel = this;
    this.iconcheck = UIBase9.createElement("iconcheck-x");
    this.iconcheck.noEmboss = true;
    Object.defineProperty(this.contents, "closed", {
      get: /* @__PURE__ */ __name(() => {
        return this.closed;
      }, "get"),
      set: /* @__PURE__ */ __name((v) => {
        this.closed = v;
      }, "set")
    });
    Object.defineProperty(this.contents, "title", {
      get: /* @__PURE__ */ __name(() => this.titleframe.getAttribute("title"), "get"),
      set: /* @__PURE__ */ __name((v) => this.setHeaderToolTip(v), "set")
    });
    this.packflag = this.inherit_packflag = 0;
    this._closed = false;
    this.makeHeader();
  }
  get inherit_packflag() {
    if (!this.contents) return;
    return this.contents.inherit_packflag;
  }
  set inherit_packflag(val) {
    if (!this.contents) return;
    this.contents.inherit_packflag = val;
  }
  get packflag() {
    if (!this.contents) return;
    return this.contents.packflag;
  }
  set packflag(val) {
    if (!this.contents) return;
    this.contents.packflag = val;
  }
  appendChild(child) {
    return this.contents.shadow.appendChild(child);
  }
  get headerLabel() {
    return this.__label.text;
  }
  set headerLabel(v) {
    this.__label.text = v;
    this.__label._updateFont();
    if (this.hasAttribute("label")) {
      this.setAttribute("label", v);
    }
    if (this.ctx) {
      this.setCSS();
    }
  }
  get dataPrefix() {
    return this.contents ? this.contents.dataPrefix : "";
  }
  set dataPrefix(v) {
    if (this.contents) {
      this.contents.dataPrefix = v;
    }
  }
  get closed() {
    return this._closed;
  }
  set closed(val) {
    let update = !!val !== !!this.closed;
    this._closed = val;
    if (update) {
      this._updateClosed(true);
    }
  }
  static define() {
    return {
      tagname: "panelframe-x",
      style: "panel",
      subclassChecksTheme: true
    };
  }
  setHeaderToolTip(tooltip) {
    this.titleframe.setAttribute("title", tooltip);
    this.titleframe._forEachChildWidget((child) => {
      child.setAttribute("title", tooltip);
    });
  }
  saveData() {
    let ret = {
      closed: this._closed
    };
    return Object.assign(super.saveData(), ret);
  }
  loadData(obj) {
    if (!("closed" in obj)) {
      this.closed = obj._closed;
    } else {
      this.closed = obj.closed;
    }
  }
  clear() {
    this.contents.clear();
    return this;
  }
  makeHeader() {
    let row = this.titleframe;
    let iconcheck = this.iconcheck;
    if (!iconcheck) {
      return;
    }
    iconcheck.overrideDefault("padding", 0);
    iconcheck.noMarginsOrPadding();
    iconcheck.overrideDefault("highlight", {
      "background-color": iconcheck.getSubDefault("highlight", "background-color")
    });
    iconcheck.overrideDefault("background-color", "rgba(0,0,0,0)");
    iconcheck.overrideDefault("BoxDepressed", "rgba(0,0,0,0)");
    iconcheck.overrideDefault("border-color", "rgba(0,0,0,0)");
    iconcheck.ctx = this.ctx;
    iconcheck._icon_pressed = Icons.UI_EXPAND;
    iconcheck._icon = Icons.UI_COLLAPSE;
    iconcheck.drawCheck = false;
    iconcheck.iconsheet = IconSheets.SMALL;
    iconcheck.checked = this._closed;
    this.iconcheck.onchange = (e) => {
      this.closed = this.iconcheck.checked;
    };
    row._add(iconcheck);
    let onclick = /* @__PURE__ */ __name((e) => {
      iconcheck.checked = !iconcheck.checked;
      e.preventDefault();
    }, "onclick");
    let label = this.__label = row.label(this.getAttribute("label"));
    this.__label.font = "TitleText";
    label._updateFont();
    label.noMarginsOrPadding();
    label.addEventListener("mousedown", onclick);
    label.addEventListener("touchdown", onclick);
    let bs = this.getDefault("border-style");
    row.background = this.getDefault("TitleBackground");
    row.style["border-radius"] = this.getDefault("border-radius") + "px";
    row.style["border"] = `${this.getDefault("border-width")}px ${bs} ${this.getDefault("border-color")}`;
    row.style["padding-right"] = "20px";
    row.style["padding-left"] = "5px";
    row.style["padding-top"] = this.getDefault("padding-top") + "px";
    row.style["padding-bottom"] = this.getDefault("padding-bottom") + "px";
  }
  init() {
    super.init();
    this.background = this.getDefault("background-color");
    this.style["width"] = "100%";
    this.contents.ctx = this.ctx;
    if (!this._closed) {
      super.add(this.contents);
      this.contents.flushUpdate();
    }
    this.contents.dataPrefix = this.dataPrefix;
    this.setCSS();
  }
  setCSS() {
    super.setCSS();
    if (!this.titleframe || !this.__label) {
      return;
    }
    let getDefault = /* @__PURE__ */ __name((key, defval) => {
      let val = this.getDefault(key);
      return val !== void 0 ? val : defval;
    }, "getDefault");
    let bs = this.getDefault("border-style");
    let header_radius = this.getDefault("HeaderRadius");
    if (header_radius === void 0) {
      header_radius = this.getDefault("border-radius");
    }
    let boxmargin = getDefault("padding", 0);
    let paddingleft = getDefault("padding-left", 0);
    let paddingright = getDefault("padding-right", 0);
    paddingleft += boxmargin;
    paddingright += boxmargin;
    this.titleframe.background = this.getDefault("TitleBackground");
    this.titleframe.style["border-radius"] = header_radius + "px";
    this.titleframe.style["border"] = `${this.getDefault("border-width")}px ${bs} ${this.getDefault("TitleBorder")}`;
    this.style["border"] = `${this.getDefault("border-width")}px ${bs} ${this.getDefault("border-color")}`;
    this.style["border-radius"] = this.getDefault("border-radius") + "px";
    this.titleframe.style["padding-top"] = this.getDefault("padding-top") + "px";
    this.titleframe.style["padding-bottom"] = this.getDefault("padding-bottom") + "px";
    this.titleframe.style["padding-left"] = paddingleft + "px";
    this.titleframe.style["padding-right"] = paddingright + "px";
    this.titleframe.style["margin-bottom"] = "0px";
    this.titleframe.style["margin-top"] = "0px";
    this.__label.style["border"] = "unset";
    this.__label.style["border-radius"] = "unset";
    let bg = this.getDefault("background-color");
    this.background = bg;
    this.contents.background = bg;
    this.contents.parentWidget = this;
    this.contents.style["background-color"] = bg;
    this.style["background-color"] = bg;
    let margintop, marginbottom;
    if (this._closed) {
      margintop = getDefault("margin-top-closed", 0);
      marginbottom = getDefault("margin-bottom-closed", 5);
    } else {
      margintop = getDefault("margin-top", 0);
      marginbottom = getDefault("margin-bottom", 0);
    }
    let marginleft = getDefault("margin-left", 0);
    let marginright = getDefault("margin-right", 0);
    this.style["margin-left"] = marginleft + "px";
    this.style["margin-right"] = marginright + "px";
    this.style["margin-top"] = margintop + "px";
    this.style["margin-bottom"] = marginbottom + "px";
    this.__label._updateFont();
  }
  on_disabled() {
    super.on_disabled();
    this.__label._updateFont();
    this.setCSS();
  }
  on_enabled() {
    super.on_enabled();
    this.__label.setCSS();
    this.__label.style["color"] = this.style["color"];
    this.setCSS();
  }
  update() {
    let text2 = this.getAttribute("label");
    let update = text2 !== this.__label.text;
    if (this.checkThemeUpdate()) {
      update = true;
      this._setVisible(this.closed, true);
      this.setCSS();
      this.flushSetCSS();
    }
    if (update) {
      this.headerLabel = this.getAttribute("label");
      this.__label._updateFont();
      this.setCSS();
    }
    super.update();
  }
  _onchange(isClosed) {
    if (this.onchange) {
      this.onchange(isClosed);
    }
    if (this.contents.onchange) {
      this.contents.onchange(isClosed);
    }
  }
  //catch setAttribute so we can detect label update
  //even if close and updates disabled
  setAttribute(key, value) {
    let ret = super.setAttribute(key, value);
    if (this.ctx) {
      this.update();
      this.flushUpdate();
    }
    return ret;
  }
  get noUpdateClosedContents() {
    if (!this.hasAttribute("update-closed-contents")) {
      return false;
    }
    let ret = this.getAttribute("update-closed-contents");
    return ret === "true" || ret === "on";
  }
  set noUpdateClosedContents(v) {
    this.setAttribute("update-closed-contents", v ? "true" : "false");
  }
  _setVisible(isClosed, changed) {
    changed = changed || !!isClosed !== !!this._closed;
    this._state = isClosed;
    if (isClosed) {
      this.contents.style.display = "none";
      if (!this.noUpdateClosedContents) {
        this.contents.packflag |= PackFlags5.NO_UPDATE;
      }
    } else {
      this.contents.style.display = "flex";
      this.contents.packflag &= ~PackFlags5.NO_UPDATE;
      this.contents.flushUpdate();
    }
    this.contents.hidden = isClosed;
    if (this.parentWidget) {
      this.parentWidget.flushUpdate();
    } else {
      this.flushUpdate();
    }
    if (changed) {
      this._onchange(isClosed);
    }
  }
  _updateClosed(changed) {
    this._setVisible(this._closed, changed);
    if (this.iconcheck) {
      this.iconcheck.checked = this._closed;
    }
  }
};
var makeForward = /* @__PURE__ */ __name((k) => {
  return function() {
    return this.contents[k](...arguments);
  };
}, "makeForward");
for (let k of forward_keys) {
  PanelFrame.prototype[k] = makeForward(k);
}
UIBase9.internalRegister(PanelFrame);

// scripts/path.ux/scripts/widgets/ui_colorpicker2.js
var Vector26 = Vector2, Vector33 = Vector3, Vector42 = Vector4, Matrix42 = Matrix4;
var UIBase10 = UIBase2, PackFlags6 = PackFlags, IconSheets4 = IconSheets;
var UPW = 1.25, VPW = 0.75;
var sample_rets = new cachering(() => [0, 0], 64);
function inv_sample(u, v) {
  let ret = sample_rets.next();
  ret[0] = Math.pow(u, UPW);
  ret[1] = Math.pow(v, VPW);
  return ret;
}
__name(inv_sample, "inv_sample");
function sample(u, v) {
  let ret = sample_rets.next();
  ret[0] = Math.pow(u, 1 / UPW);
  ret[1] = Math.pow(v, 1 / VPW);
  return ret;
}
__name(sample, "sample");
function colorClipboardCopy() {
  let rgba = this.getRGBA();
  let r = rgba[0] * 255;
  let g = rgba[1] * 255;
  let b = rgba[2] * 255;
  let a2 = rgba[3];
  let data = `rgba(${r.toFixed(4)}, ${g.toFixed(4)}, ${b.toFixed(4)}, ${a2.toFixed(4)})`;
  const_default.setClipboardData("color", "text/plain", data);
}
__name(colorClipboardCopy, "colorClipboardCopy");
function colorClipboardPaste() {
  let data = const_default.getClipboardData("text/plain");
  if (!data || !validateCSSColor("" + data.data)) {
    return;
  }
  let color;
  try {
    color = css2color(data.data);
  } catch (error2) {
    console.log(error2.stack);
    console.log(error2.message);
  }
  if (color) {
    if (color.length < 4) {
      color.push(1);
    }
    this.setRGBA(color);
  }
}
__name(colorClipboardPaste, "colorClipboardPaste");
var fieldrand = new MersenneRandom(0);
var huefields = {};
function getHueField(width, height, dpi) {
  let key = width + ":" + height + ":" + dpi.toFixed(4);
  if (key in huefields) {
    return huefields[key];
  }
  let field = new ImageData(width, height);
  let idata = field.data;
  for (let i = 0; i < width * height; i++) {
    let ix = i % width, iy = ~~(i / width);
    let idx = i * 4;
    let rgb = hsv_to_rgb(ix / width, 1, 1);
    idata[idx] = rgb[0] * 255;
    idata[idx + 1] = rgb[1] * 255;
    idata[idx + 2] = rgb[2] * 255;
    idata[idx + 3] = 255;
  }
  let canvas = document.createElement("canvas");
  canvas.width = field.width;
  canvas.height = field.height;
  let g = canvas.getContext("2d");
  g.putImageData(field, 0, 0);
  field = canvas;
  huefields[key] = field;
  return field;
}
__name(getHueField, "getHueField");
var fields = {};
function getFieldImage(fieldsize, width, height, hsva) {
  fieldrand.seed(0);
  let width2 = width >> 1;
  let height2 = height >> 1;
  let fieldsize2 = fieldsize >> 1;
  let hue = hsva[0];
  let hue_rgb = hsv_to_rgb(hue, 1, 1);
  let key = fieldsize + ":" + width2 + ":" + height2 + ":" + hue.toFixed(5);
  if (key in fields)
    return fields[key];
  let size2 = fieldsize2;
  let valpow = 0.75;
  let image = {
    width,
    height,
    image: new ImageData(fieldsize2, fieldsize2),
    x2sat: /* @__PURE__ */ __name((x) => {
      return Math.min(Math.max(x / width, 0), 1);
    }, "x2sat"),
    y2val: /* @__PURE__ */ __name((y) => {
      y = 1 - Math.min(Math.max(y / height, 0), 1);
      return y === 0 ? 0 : y ** valpow;
    }, "y2val"),
    sat2x: /* @__PURE__ */ __name((s) => {
      return s * width;
    }, "sat2x"),
    val2y: /* @__PURE__ */ __name((v) => {
      if (v === 0)
        return height;
      v = v ** (1 / valpow);
      return (1 - v) * height;
    }, "val2y")
  };
  image.params = {
    box: {
      x: 0,
      y: 0,
      width,
      height
    }
  };
  let idata = image.image.data;
  for (let i = 0; i < idata.length; i += 4) {
    let i2 = i / 4;
    let x = i2 % size2, y = ~~(i2 / size2);
    let v = 1 - y / size2;
    let s = x / size2;
    let rgb = hsv_to_rgb(hsva[0], s, v ** valpow);
    idata[i] = rgb[0] * 255;
    idata[i + 1] = rgb[1] * 255;
    idata[i + 2] = rgb[2] * 255;
    idata[i + 3] = 255;
  }
  let image2 = document.createElement("canvas");
  image2.width = size2;
  image2.height = size2;
  let g = image2.getContext("2d");
  g.putImageData(image.image, 0, 0);
  image.canvas = image2;
  image.scale = width / size2;
  fields[key] = image;
  return image;
}
__name(getFieldImage, "getFieldImage");
var _update_temp = new Vector42();
var SimpleBox = class {
  static {
    __name(this, "SimpleBox");
  }
  constructor(pos = [0, 0], size = [1, 1]) {
    this.pos = new Vector26(pos);
    this.size = new Vector26(size);
    this.r = 0;
  }
};
var HueField = class extends UIBase10 {
  static {
    __name(this, "HueField");
  }
  constructor() {
    super();
    this.canvas = document.createElement("canvas");
    this.g = this.canvas.getContext("2d");
    this.shadow.appendChild(this.canvas);
    let setFromXY = /* @__PURE__ */ __name((x, y) => {
      let dpi = this.getDPI();
      let pad = this._getPad();
      let w = this.canvas.width / dpi - pad * 2;
      x -= pad;
      let h = x / w;
      h = Math.min(Math.max(h, 0), 1);
      this.hsva[0] = h;
      if (this.onchange) {
        this.onchange(this.hsva);
      }
      this._redraw();
    }, "setFromXY");
    this.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case keymap["Left"]:
        case keymap["Right"]:
          let sign = e.keyCode === keymap["Left"] ? -1 : 1;
          this.hsva[0] = Math.min(Math.max(this.hsva[0] + 0.05 * sign, 0), 1);
          this._redraw();
          if (this.onchange) {
            this.onchange();
          }
          break;
      }
    });
    this.addEventListener("mousedown", (e) => {
      if (this.modalRunning) {
        return;
      }
      e.preventDefault();
      let rect = this.canvas.getClientRects()[0];
      let x = e.clientX - rect.x, y = e.clientY - rect.y;
      setFromXY(x, y);
      this.pushModal({
        on_mousemove: /* @__PURE__ */ __name((e2) => {
          let rect2 = this.canvas.getClientRects()[0];
          let x2 = e2.clientX - rect2.x, y2 = e2.clientY - rect2.y;
          setFromXY(x2, y2);
        }, "on_mousemove"),
        on_mousedown: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_mousedown"),
        on_mouseup: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_mouseup"),
        on_keydown: /* @__PURE__ */ __name((e2) => {
          if (e2.keyCode === keymap["Enter"] || e2.keyCode === keymap["Escape"] || e2.keyCode === keymap["Space"]) {
            this.popModal();
          }
        }, "on_keydown")
      });
    });
  }
  static define() {
    return {
      tagname: "huefield-x",
      style: "colorfield",
      havePickClipboard: true
    };
  }
  getRGBA() {
    let rgb = hsv_to_rgb(this.hsva[0], this.hsva[1], this.hsva[2]);
    return new Vector42().loadXYZW(rgb[0], rgb[1], rgb[2], this.hsva[3]);
  }
  setRGBA(rgba) {
    let hsv = rgb_to_hsv(rgba[0], rgba[1], rgba[2]);
    this.hsva.loadXYZW(hsv[0], hsv[1], hsv[2], rgba[3]);
    this._redraw();
    if (this.onchange) {
      this.onchange(this.hsva);
    }
  }
  clipboardCopy() {
    colorClipboardCopy.apply(this, arguments);
  }
  clipboardPaste() {
    colorClipboardPaste.apply(this, arguments);
  }
  _getPad() {
    return Math.max(this.getDefault("circleSize"), 15);
  }
  _redraw() {
    let g = this.g, canvas = this.canvas;
    let dpi = this.getDPI();
    let w = this.getDefault("width");
    let h = this.getDefault("hueHeight");
    canvas.width = ~~(w * dpi);
    canvas.height = ~~(h * dpi);
    canvas.style["width"] = w + "px";
    canvas.style["height"] = h + "px";
    let rselector = ~~(this._getPad() * dpi);
    let r_circle = this.getDefault("circleSize") * dpi;
    let w2 = canvas.width, h2 = canvas.height;
    w2 -= rselector * 2;
    g.drawImage(getHueField(w2, h2, dpi), 0, 0, w2, h2, rselector, 0, w2, h2);
    let x = this.hsva[0] * w2 + rselector;
    let y = canvas.height * 0.5;
    g.beginPath();
    g.arc(x, y, r_circle, -Math.PI, Math.PI);
    g.closePath();
    g.strokeStyle = "white";
    g.lineWidth = 3 * dpi;
    g.stroke();
    g.strokeStyle = "grey";
    g.lineWidth = 1 * dpi;
    g.stroke();
    if (this.disabled) {
      g.beginPath();
      g.fillStyle = "rgba(25,25,25,0.75)";
      g.rect(0, 0, this.canvas.width, this.canvas.height);
      g.fill();
    }
  }
  on_disabled() {
    this._redraw();
  }
  on_enabled() {
    this._redraw();
  }
};
UIBase10.internalRegister(HueField);
var SatValField = class extends UIBase10 {
  static {
    __name(this, "SatValField");
  }
  constructor() {
    super();
    this.hsva = [0, 0, 0, 1];
    this.canvas = document.createElement("canvas");
    this.g = this.canvas.getContext("2d");
    this.shadow.appendChild(this.canvas);
    this.onchange = void 0;
    let setFromXY = /* @__PURE__ */ __name((x, y) => {
      let field = this._getField();
      let r = ~~(this.getDefault("circleSize") * this.getDPI());
      let sat = field.x2sat(x - r);
      let val = field.y2val(y - r);
      this.hsva[1] = sat;
      this.hsva[2] = val;
      if (this.onchange) {
        this.onchange(this.hsva);
      }
      this._redraw();
    }, "setFromXY");
    this.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case keymap["Left"]:
        case keymap["Right"]: {
          let sign = e.keyCode === keymap["Left"] ? -1 : 1;
          this.hsva[1] = Math.min(Math.max(this.hsva[1] + 0.05 * sign, 0), 1);
          this._redraw();
          if (this.onchange) {
            this.onchange(this.hsva);
          }
          break;
        }
        case keymap["Up"]:
        case keymap["Down"]: {
          let sign = e.keyCode === keymap["Down"] ? -1 : 1;
          this.hsva[2] = Math.min(Math.max(this.hsva[2] + 0.05 * sign, 0), 1);
          this._redraw();
          if (this.onchange) {
            this.onchange(this.hsva);
          }
          break;
        }
      }
    });
    this.canvas.addEventListener("mousedown", (e) => {
      if (this.modalRunning) {
        return;
      }
      e.preventDefault();
      let rect = this.canvas.getClientRects()[0];
      let x = e.clientX - rect.x, y = e.clientY - rect.y;
      setFromXY(x, y);
      this.pushModal({
        on_pointermove(e2) {
          this.on_mousemove(e2);
        },
        on_mousemove: /* @__PURE__ */ __name((e2) => {
          let rect2 = this.canvas.getClientRects()[0];
          if (rect2 === void 0) {
            return;
          }
          let x2 = e2.clientX - rect2.x, y2 = e2.clientY - rect2.y;
          setFromXY(x2, y2);
        }, "on_mousemove"),
        on_mousedown: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_mousedown"),
        on_mouseup: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_mouseup"),
        on_keydown: /* @__PURE__ */ __name((e2) => {
          if (e2.keyCode === keymap["Enter"] || e2.keyCode === keymap["Escape"] || e2.keyCode === keymap["Space"]) {
            this.popModal();
          }
        }, "on_keydown")
      });
    });
    this.canvas.addEventListener("touchstart", (e) => {
      if (this.modalRunning) {
        return;
      }
      e.preventDefault();
      let rect = this.canvas.getClientRects()[0];
      let x = e.touches[0].clientX - rect.x, y = e.touches[0].clientY - rect.y;
      setFromXY(x, y);
      this.pushModal({
        on_mousemove: /* @__PURE__ */ __name((e2) => {
          let rect2 = this.canvas.getClientRects()[0];
          let x2, y2;
          if (e2.touches && e2.touches.length) {
            x2 = e2.touches[0].clientX - rect2.x;
            y2 = e2.touches[0].clientY - rect2.y;
          } else {
            x2 = e2.x;
            y2 = e2.y;
          }
          setFromXY(x2, y2);
        }, "on_mousemove"),
        on_touchmove: /* @__PURE__ */ __name((e2) => {
          let rect2 = this.canvas.getClientRects()[0];
          let x2 = e2.touches[0].clientX - rect2.x, y2 = e2.touches[0].clientY - rect2.y;
          setFromXY(x2, y2);
        }, "on_touchmove"),
        on_mousedown: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_mousedown"),
        on_touchcancel: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_touchcancel"),
        on_touchend: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_touchend"),
        on_mouseup: /* @__PURE__ */ __name((e2) => {
          this.popModal();
        }, "on_mouseup"),
        on_keydown: /* @__PURE__ */ __name((e2) => {
          if (e2.keyCode === keymap["Enter"] || e2.keyCode === keymap["Escape"] || e2.keyCode === keymap["Space"]) {
            this.popModal();
          }
        }, "on_keydown")
      });
    });
  }
  static define() {
    return {
      tagname: "satvalfield-x",
      style: "colorfield",
      havePickClipboard: true
    };
  }
  getRGBA() {
    let rgb = hsv_to_rgb(this.hsva[0], this.hsva[1], this.hsva[2]);
    return new Vector42().loadXYZW(rgb[0], rgb[1], rgb[2], this.hsva[3]);
  }
  setRGBA(rgba) {
    let hsv = rgb_to_hsv(rgba[0], rgba[1], rgba[2]);
    this.hsva.loadXYZW(hsv[0], hsv[1], hsv[2], rgba[3]);
    this.update(true);
    this._redraw();
    if (this.onchange) {
      this.onchange(this.hsva);
    }
  }
  clipboardCopy() {
    colorClipboardCopy.apply(this, arguments);
  }
  clipboardPaste() {
    colorClipboardPaste.apply(this, arguments);
  }
  _getField() {
    let dpi = this.getDPI();
    let canvas = this.canvas;
    let r = this.getDefault("circleSize");
    let w = this.getDefault("width");
    let h = this.getDefault("height");
    return getFieldImage(this.getDefault("fieldSize"), w - r * 2, h - r * 2, this.hsva);
  }
  update(force_update = false) {
    super.update();
    if (force_update) {
      this._redraw();
    }
  }
  _redraw() {
    let g = this.g, canvas = this.canvas;
    let dpi = this.getDPI();
    let w = this.getDefault("width");
    let h = this.getDefault("height");
    canvas.width = ~~(w * dpi);
    canvas.height = ~~(h * dpi);
    canvas.style["width"] = w + "px";
    canvas.style["height"] = h + "px";
    let rselector = ~~(this.getDefault("circleSize") * dpi);
    let field = this._getField();
    let image = field.canvas;
    g.globalAlpha = 1;
    g.beginPath();
    g.rect(0, 0, canvas.width, canvas.height);
    g.fillStyle = "rgb(200, 200, 200)";
    g.fill();
    g.beginPath();
    let steps = 17;
    let dx = canvas.width / steps;
    let dy = canvas.height / steps;
    for (let i = 0; i < steps * steps; i++) {
      let x2 = i % steps * dx, y2 = ~~(i / steps) * dy;
      if (i % 2 === 0) {
        continue;
      }
      g.rect(x2, y2, dx, dy);
    }
    g.fillStyle = "rgb(110, 110, 110)";
    g.fill();
    g.globalAlpha = this.hsva[3];
    g.drawImage(image, 0, 0, image.width, image.height, rselector, rselector, canvas.width - rselector * 2, canvas.height - rselector * 2);
    let hsva = this.hsva;
    let x = field.sat2x(hsva[1]) * dpi + rselector;
    let y = field.val2y(hsva[2]) * dpi + rselector;
    let r = rselector;
    g.beginPath();
    g.arc(x, y, r, -Math.PI, Math.PI);
    g.closePath();
    g.strokeStyle = "white";
    g.lineWidth = 3 * dpi;
    g.stroke();
    g.strokeStyle = "grey";
    g.lineWidth = 1 * dpi;
    g.stroke();
    if (this.disabled) {
      g.beginPath();
      g.fillStyle = "rgba(25,25,25,0.75)";
      g.rect(0, 0, this.canvas.width, this.canvas.height);
      g.fill();
    }
  }
  on_disabled() {
    this._redraw();
  }
  on_enabled() {
    this._redraw();
  }
};
UIBase10.internalRegister(SatValField);
var ColorField = class extends ColumnFrame {
  static {
    __name(this, "ColorField");
  }
  constructor() {
    super();
    this.hsva = new Vector42([0.05, 0.6, 0.15, 1]);
    this.rgba = new Vector42([0, 0, 0, 0]);
    this._recalcRGBA();
    this._lastThemeStyle = this.constructor.define().style;
    this._last_dpi = void 0;
    let satvalfield = this.satvalfield = UIBase10.createElement("satvalfield-x");
    satvalfield.hsva = this.hsva;
    let huefield = this.huefield = UIBase10.createElement("huefield-x");
    huefield.hsva = this.hsva;
    huefield.onchange = (e) => {
      this.satvalfield._redraw();
      this._recalcRGBA();
      if (this.onchange) {
        this.onchange(this.rgba);
      }
    };
    satvalfield.onchange = (e) => {
      this._recalcRGBA();
      if (this.onchange) {
        this.onchange(this.rgba);
      }
    };
    this._add(satvalfield);
    this._add(huefield);
  }
  static define() {
    return {
      tagname: "colorfield-x",
      style: "colorfield"
    };
  }
  setCMYK(c, m, y, k) {
    let rgb = cmyk_to_rgb(c, m, y, k);
    let hsv = rgb_to_hsv(rgb[0], rgb[1], rgb[2]);
    this.setHSVA(hsv[0], hsv[1], hsv[2], this.hsva[3]);
  }
  getCMYK() {
    let rgb = hsv_to_rgb(this.hsva[0], this.hsva[1], this.hsva[2]);
    return rgb_to_cmyk(rgb[0], rgb[1], rgb[2]);
  }
  setHSVA(h, s, v, a2 = 1, fire_onchange = true) {
    this.hsva[0] = h;
    this.hsva[1] = s;
    this.hsva[2] = v;
    this.hsva[3] = a2;
    this._recalcRGBA();
    this.update(true);
    if (this.onchange && fire_onchange) {
      this.onchange(this.hsva, this.rgba);
    }
  }
  _recalcRGBA() {
    let ret = hsv_to_rgb(this.hsva[0], this.hsva[1], this.hsva[2]);
    this.rgba[0] = ret[0];
    this.rgba[1] = ret[1];
    this.rgba[2] = ret[2];
    this.rgba[3] = this.hsva[3];
    return this;
  }
  updateDPI(force_update = false, _in_update = false) {
    let dpi = this.getDPI();
    let update = force_update;
    update = update || dpi != this._last_dpi;
    if (update) {
      this._last_dpi = dpi;
      if (!_in_update)
        this._redraw();
      return true;
    }
  }
  getRGBA() {
    let rgb = hsv_to_rgb(this.hsva[0], this.hsva[1], this.hsva[2]);
    return new Vector42().loadXYZW(rgb[0], rgb[1], rgb[2], this.hsva[3]);
  }
  setRGBA(r, g, b, a2 = 1, fire_onchange = true) {
    if (typeof r === "object") {
      g = r[1];
      b = r[2];
      a2 = r[3];
      r = r[0];
    }
    let hsv = rgb_to_hsv(r, g, b);
    this.hsva[0] = hsv[0];
    this.hsva[1] = hsv[1];
    this.hsva[2] = hsv[2];
    this.hsva[3] = a2;
    this._recalcRGBA();
    this.update(true);
    if (this.onchange && fire_onchange) {
      this.onchange(this.hsva, this.rgba);
    }
  }
  updateThemeOverride() {
    let theme2 = this.getStyleClass();
    if (theme2 === this._lastThemeStyle) {
      return false;
    }
    this._lastThemeStyle = theme2;
    this.huefield.overrideClass(theme2);
    this.satvalfield.overrideClass(theme2);
    for (let i = 0; i < 3; i++) {
      this.flushSetCSS();
      this.flushUpdate();
    }
    return true;
  }
  update(force_update = false) {
    super.update();
    this.updateThemeOverride();
    let redraw = this.updateDPI(force_update, true);
    redraw = redraw || force_update;
    if (redraw) {
      this.satvalfield.update(true);
      this._redraw();
    }
  }
  setCSS() {
    super.setCSS();
    this.style["flex-grow"] = this.getDefault("flex-grow");
  }
  _redraw() {
    this.satvalfield._redraw();
    this.huefield._redraw();
  }
};
UIBase10.internalRegister(ColorField);
var ColorPicker = class extends ColumnFrame {
  static {
    __name(this, "ColorPicker");
  }
  constructor() {
    super();
    this._lastThemeStyle = this.constructor.define().style;
  }
  //*
  get hsva() {
    return this.field.hsva;
  }
  get rgba() {
    return this.field.rgba;
  }
  //*/
  set description(val) {
  }
  static setDefault(node) {
    let tabs, colorsPanel = node;
    if (node.getClassDefault("usePanels")) {
      let panel = colorsPanel = node.panel("Color");
      tabs = panel.tabs();
      panel.closed = true;
      panel.style["flex-grow"] = "unset";
      panel.titleframe.style["flex-grow"] = "unset";
    } else {
      tabs = node.tabs();
    }
    node.cssText = node.textbox();
    node.cssText.onchange = (val) => {
      let ok = validateWebColor(val);
      if (!ok) {
        node.cssText.flash("red");
        return;
      } else {
        node.cssText.flash("green");
      }
      val = val.trim();
      let color = web2color(val);
      node._no_update_textbox = true;
      node.field.setRGBA(color[0], color[1], color[2], color[3]);
      node._setSliders();
      node._no_update_textbox = false;
    };
    let tab = tabs.tab("HSV");
    node.h = tab.slider(void 0, "Hue", 0, 0, 1, 1e-3, false, true, (e) => {
      let hsva = node.hsva;
      node.setHSVA(e.value, hsva[1], hsva[2], hsva[3]);
    });
    node.s = tab.slider(void 0, "Saturation", 0, 0, 1, 1e-3, false, true, (e) => {
      let hsva = node.hsva;
      node.setHSVA(hsva[0], e.value, hsva[2], hsva[3]);
    });
    node.v = tab.slider(void 0, "Value", 0, 0, 1, 1e-3, false, true, (e) => {
      let hsva = node.hsva;
      node.setHSVA(hsva[0], hsva[1], e.value, hsva[3]);
    });
    node.a = tab.slider(void 0, "Alpha", 0, 0, 1, 1e-3, false, true, (e) => {
      let hsva = node.hsva;
      node.setHSVA(hsva[0], hsva[1], hsva[2], e.value);
    });
    node.h.baseUnit = node.h.displayUnit = "none";
    node.s.baseUnit = node.s.displayUnit = "none";
    node.v.baseUnit = node.v.displayUnit = "none";
    node.a.baseUnit = node.a.displayUnit = "none";
    tab = tabs.tab("RGB");
    node.r = tab.slider(void 0, "R", 0, 0, 1, 1e-3, false, true, (e) => {
      let rgba = node.rgba;
      node.setRGBA(e.value, rgba[1], rgba[2], rgba[3]);
    });
    node.g = tab.slider(void 0, "G", 0, 0, 1, 1e-3, false, true, (e) => {
      let rgba = node.rgba;
      node.setRGBA(rgba[0], e.value, rgba[2], rgba[3]);
    });
    node.b = tab.slider(void 0, "B", 0, 0, 1, 1e-3, false, true, (e) => {
      let rgba = node.rgba;
      node.setRGBA(rgba[0], rgba[1], e.value, rgba[3]);
    });
    node.a2 = tab.slider(void 0, "Alpha", 0, 0, 1, 1e-3, false, true, (e) => {
      let rgba = node.rgba;
      node.setRGBA(rgba[0], rgba[1], rgba[2], e.value);
    });
    node.r.baseUnit = node.r.displayUnit = "none";
    node.g.baseUnit = node.g.displayUnit = "none";
    node.b.baseUnit = node.b.displayUnit = "none";
    node.a2.baseUnit = node.a2.displayUnit = "none";
    if (!node.getDefault("noCMYK")) {
      tab = tabs.tab("CMYK");
      let cmyk = node.getCMYK();
      let makeCMYKSlider = /* @__PURE__ */ __name((label, idx) => {
        let slider = tab.slider(void 0, {
          name: label,
          min: 0,
          max: 1,
          is_int: false,
          defaultval: cmyk[idx],
          callback: /* @__PURE__ */ __name((e) => {
            let cmyk2 = node.getCMYK();
            cmyk2[idx] = e.value;
            node.setCMYK(cmyk2[0], cmyk2[1], cmyk2[2], cmyk2[3]);
          }, "callback"),
          step: 1e-3
        });
        slider.baseUnit = slider.displayUnit = "none";
        return slider;
      }, "makeCMYKSlider");
      node.cmyk = [
        makeCMYKSlider("C", 0),
        makeCMYKSlider("M", 1),
        makeCMYKSlider("Y", 2),
        makeCMYKSlider("K", 3)
      ];
    }
    node._setSliders();
  }
  static define() {
    return {
      tagname: "colorpicker-x",
      style: "colorfield",
      havePickClipboard: true,
      copyForAllChildren: true,
      pasteForAllChildren: true
    };
  }
  clipboardCopy() {
    colorClipboardCopy.apply(this, arguments);
  }
  clipboardPaste() {
    colorClipboardPaste.apply(this, arguments);
  }
  init() {
    super.init();
    this.field = UIBase10.createElement("colorfield-x");
    this.field.setAttribute("class", "colorpicker");
    this.field.packflag |= this.inherit_packflag;
    this.field.packflag |= this.packflag;
    this.field.onchange = () => {
      this._setDataPath();
      this._setSliders();
      if (this.onchange) {
        this.onchange(this.field.rgba);
      }
    };
    let style = document.createElement("style");
    style.textContent = `
      .colorpicker {
        background-color : ${this.getDefault("background-color")};
      }
    `;
    this._style = style;
    let cb = this.colorbox = document.createElement("div");
    cb.style["width"] = "100%";
    cb.style["height"] = this.getDefault("colorBoxHeight") + "px";
    cb.style["background-color"] = "black";
    this.shadow.appendChild(style);
    this.field.ctx = this.ctx;
    this.add(this.colorbox);
    this.add(this.field);
    this.style["width"] = this.getDefault("width") + "px";
  }
  updateColorBox() {
    let r = this.field.rgba[0], g = this.field.rgba[1], b = this.field.rgba[2];
    r = ~~(r * 255);
    g = ~~(g * 255);
    b = ~~(b * 255);
    let css = `rgb(${r},${g},${b})`;
    this.colorbox.style["background-color"] = css;
  }
  _setSliders() {
    if (this.h === void 0) {
      console.warn("colorpicker ERROR");
      return;
    }
    let hsva = this.field.hsva;
    this.h.setValue(hsva[0], false);
    this.s.setValue(hsva[1], false);
    this.v.setValue(hsva[2], false);
    this.a.setValue(hsva[3], false);
    let rgba = this.field.rgba;
    this.r.setValue(rgba[0], false);
    this.g.setValue(rgba[1], false);
    this.b.setValue(rgba[2], false);
    this.a2.setValue(rgba[3], false);
    if (this.cmyk) {
      let cmyk = this.field.getCMYK();
      for (let i = 0; i < 4; i++) {
        this.cmyk[i].setValue(cmyk[i], false);
      }
    }
    this.updateColorBox();
    if (!this._no_update_textbox) {
      this.cssText.text = color2web(this.field.rgba);
    }
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let prop = this.getPathMeta(this.ctx, this.getAttribute("datapath"));
    let val = this.getPathValue(this.ctx, this.getAttribute("datapath"));
    if (val === void 0) {
      this.internalDisabled = true;
      return;
    }
    this.internalDisabled = false;
    _update_temp.load(val);
    if (prop.type === PropTypes.VEC3) {
      _update_temp[3] = 1;
    }
    if (_update_temp.vectorDistance(this.field.rgba) > 0.01) {
      this.field.setRGBA(_update_temp[0], _update_temp[1], _update_temp[2], _update_temp[3], false);
      this._setSliders();
      this.field.update(true);
    }
  }
  updateThemeOverride() {
    let theme2 = this.getStyleClass();
    if (theme2 === this._lastThemeStyle) {
      return false;
    }
    this._lastThemeStyle = theme2;
    this.field.overrideClass(theme2);
    this.flushSetCSS();
    this.flushUpdate();
    return true;
  }
  update() {
    this.updateThemeOverride();
    if (this.hasAttribute("datapath")) {
      this.updateDataPath();
    }
    super.update();
  }
  _setDataPath() {
    if (this.hasAttribute("datapath")) {
      let prop = this.getPathMeta(this.ctx, this.getAttribute("datapath"));
      if (prop === void 0) {
        console.warn("Bad data path for color field:", this.getAttribute("datapath"));
      }
      let val = this.field.rgba;
      if (prop !== void 0 && prop.type === PropTypes.VEC3) {
        val = new Vector33();
        val.load(this.field.rgba);
      }
      this.setPathValue(this.ctx, this.getAttribute("datapath"), val);
    }
  }
  getCMYK() {
    return this.field.getCMYK();
  }
  setCMYK(c, m, y, k) {
    this.field.setCMYK(c, m, y, k);
    this._setSliders();
    this._setDataPath();
  }
  setHSVA(h, s, v, a2) {
    this.field.setHSVA(h, s, v, a2);
    this._setSliders();
    this._setDataPath();
  }
  getRGBA() {
    return this.field.getRGBA();
  }
  setRGBA(r, g, b, a2) {
    this.field.setRGBA(r, g, b, a2);
    this._setSliders();
    this._setDataPath();
  }
};
UIBase10.internalRegister(ColorPicker);
var ColorPickerButton = class extends UIBase10 {
  static {
    __name(this, "ColorPickerButton");
  }
  constructor() {
    super();
    this._highlight = false;
    this._depress = false;
    this._label = "error";
    this.customLabel = void 0;
    this.rgba = new Vector42([1, 1, 1, 1]);
    this.labelDom = document.createElement("span");
    this.labelDom.textContent = this._label;
    this.dom = document.createElement("canvas");
    this.g = this.dom.getContext("2d");
    this.shadow.appendChild(this.labelDom);
    this.shadow.appendChild(this.dom);
  }
  get label() {
    return this._label;
  }
  set label(val) {
    this._label = val;
    this.labelDom.textContent = val;
  }
  get font() {
    return this._font;
  }
  set font(val) {
    this._font = val;
    this.setCSS();
  }
  get noLabel() {
    let ret = "" + this.getAttribute("no-label");
    ret = ret.toLowerCase();
    return ret === "true" || ret === "yes" || ret === "on";
  }
  set noLabel(v) {
    if (this.labelDom) {
      this.labelDom.hidden = true;
    }
    this.setAttribute("no-label", v ? "true" : "false");
  }
  static define() {
    return {
      tagname: "color-picker-button-x",
      style: "colorpickerbutton",
      havePickClipboard: true
    };
  }
  init() {
    super.init();
    this._font = "DefaultText";
    let enter = /* @__PURE__ */ __name((e) => {
      this._highlight = true;
      this._redraw();
    }, "enter");
    let leave = /* @__PURE__ */ __name((e) => {
      this._highlight = false;
      this._redraw();
    }, "leave");
    this.addEventListener("pointerover", enter, { capture: true, passive: true });
    this.addEventListener("pointerout", leave, { capture: true, passive: true });
    this.addEventListener("focus", leave, { capture: true, passive: true });
    this.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.click(e);
    });
    this.setCSS();
  }
  clipboardCopy() {
    colorClipboardCopy.apply(this, arguments);
  }
  clipboardPaste() {
    colorClipboardPaste.apply(this, arguments);
  }
  getRGBA() {
    return this.rgba;
  }
  click(e) {
    this.abortToolTips(4e3);
    console.warn("CLICK COLORPICKER");
    this.blur();
    if (this.onclick) {
      this.onclick(e);
    }
    let colorpicker = this.ctx.screen.popup(this, this);
    let ctx = contextWrangler.makeSafeContext(this.ctx);
    colorpicker.ctx = ctx;
    colorpicker.useDataPathUndo = this.useDataPathUndo;
    let path = this.hasAttribute("datapath") ? this.getAttribute("datapath") : void 0;
    let widget = colorpicker.colorPicker(path, void 0, this.getAttribute("mass_set_path"));
    widget.ctx = ctx;
    widget._init();
    widget.setRGBA(this.rgba[0], this.rgba[1], this.rgba[2], this.rgba[3]);
    widget.style["padding"] = "20px";
    let onchange = /* @__PURE__ */ __name(() => {
      this.rgba.load(widget.rgba);
      this.redraw();
      if (this.onchange) {
        this.onchange(this);
      }
    }, "onchange");
    widget.onchange = onchange;
    colorpicker.style["background-color"] = widget.getDefault("background-color");
    colorpicker.style["border-width"] = widget.getDefault("border-width");
  }
  setRGBA(val) {
    let a2 = this.rgba[3];
    let old = new Vector42(this.rgba);
    this.rgba.load(val);
    if (val.length < 4) {
      this.rgba[3] = a2;
    }
    if (this.rgba.vectorDistance(old) < 1e-3) {
      return;
    }
    if (this.hasAttribute("datapath")) {
      this.setPathValue(this.ctx, this.getAttribute("datapath"), this.rgba);
    }
    if (this.onchange) {
      this.onchange();
    }
    this._redraw();
    return this;
  }
  on_disabled() {
    this.setCSS();
    this._redraw();
  }
  _redraw() {
    let canvas = this.dom, g = this.g;
    g.clearRect(0, 0, canvas.width, canvas.height);
    if (this.disabled) {
      let color2 = "rgb(55, 55, 55)";
      g.save();
      drawRoundBox(this, canvas, g, canvas.width, canvas.height, void 0, "fill", color2);
      drawRoundBox(this, canvas, g, canvas.width, canvas.height, void 0, "clip");
      let steps = 5;
      let dt = canvas.width / steps, t = 0;
      g.beginPath();
      g.lineWidth = 2;
      g.strokeStyle = "black";
      for (let i = 0; i < steps; i++, t += dt) {
        g.moveTo(t, 0);
        g.lineTo(t + dt, canvas.height);
        g.moveTo(t + dt, 0);
        g.lineTo(t, canvas.height);
      }
      g.stroke();
      g.restore();
      return;
    }
    g.save();
    let grid1 = "rgb(100, 100, 100)";
    let grid2 = "rgb(175, 175, 175)";
    drawRoundBox(this, canvas, g, canvas.width, canvas.height, void 0, "clip");
    drawRoundBox(this, canvas, g, canvas.width, canvas.height, void 0, "fill", grid1);
    let cellsize = 10;
    let totx = Math.ceil(canvas.width / cellsize), toty = Math.ceil(canvas.height / cellsize);
    drawRoundBox(this, canvas, g, canvas.width, canvas.height, void 0, "clip", void 0, void 0, true);
    g.clip();
    g.beginPath();
    for (let x = 0; x < totx; x++) {
      for (let y = 0; y < toty; y++) {
        if (x + y & 1) {
          continue;
        }
        g.rect(x * cellsize, y * cellsize, cellsize, cellsize);
      }
    }
    g.fillStyle = grid2;
    g.fill();
    let color = color2css(this.rgba);
    drawRoundBox(this, canvas, g, canvas.width, canvas.height, void 0, "fill", color, void 0, true);
    if (this._highlight) {
      let color2 = this.getDefault("BoxHighlight");
      drawRoundBox(this, canvas, g, canvas.width, canvas.height, void 0, "fill", color2);
    }
    g.restore();
  }
  setCSS() {
    super.setCSS();
    let w = this.getDefault("width");
    let h = this.getDefault("height");
    let dpi = this.getDPI();
    this.style["width"] = "min-contentspx";
    this.style["height"] = h + "px";
    this.style["flex-direction"] = "row";
    this.style["display"] = "flex";
    this.labelDom.style["color"] = this.getDefault(this._font).color;
    this.labelDom.style["font"] = getFont(this, void 0, this._font, false);
    let canvas = this.dom;
    canvas.style["width"] = w + "px";
    canvas.style["height"] = h + "px";
    canvas.width = ~~(w * dpi);
    canvas.height = ~~(h * dpi);
    this.style["background-color"] = "rgba(0,0,0,0)";
    this._redraw();
  }
  updateDataPath() {
    if (!this.hasAttribute("datapath")) {
      return;
    }
    let path = this.getAttribute("datapath");
    let prop = this.getPathMeta(this.ctx, path);
    if ((prop === void 0 || prop.data === void 0) && const_default.DEBUG.verboseDataPath) {
      console.log("bad path", path);
      return;
    } else if (prop === void 0) {
      let redraw2 = !this.disabled;
      this.internalDisabled = true;
      if (redraw2) {
        this._redraw();
      }
      return;
    }
    let redraw = this.disabled;
    this.internalDisabled = false;
    if (this.customLabel === void 0 && prop.uiname !== this._label) {
      this.label = prop.uiname;
    }
    let val = this.getPathValue(this.ctx, path);
    if (val === void 0) {
      redraw = redraw || this.disabled !== true;
      this.internalDisabled = true;
      if (redraw) {
        this._redraw();
      }
    } else {
      this.internalDisabled = false;
      let dis;
      if (val.length === 3) {
        dis = Vector33.prototype.vectorDistance.call(val, this.rgba);
      } else {
        dis = this.rgba.vectorDistance(val);
      }
      if (dis > 1e-4) {
        if (prop.type === PropTypes.VEC3) {
          this.rgba.load(val);
          this.rgba[3] = 1;
        } else {
          this.rgba.load(val);
        }
        redraw = true;
      }
      if (redraw) {
        this._redraw();
      }
    }
  }
  update() {
    super.update();
    if (this.noLabel && this.labelDom.isConnected) {
      this.labelDom.remove();
    }
    if (this.customLabel !== void 0 && this.customLabel !== this._label) {
      this.label = this.customLabel;
    }
    for (let i = 0; i < this.rgba.length; i++) {
      if (this.rgba[i] === void 0) {
        console.warn("corrupted color or alpha detected", this.rgba);
        this.rgba[i] = 1;
      }
    }
    let key = "" + this.rgba[0].toFixed(4) + " " + this.rgba[1].toFixed(4) + " " + this.rgba[2].toFixed(4) + " " + this.rgba[3].toFixed(4);
    key += this.disabled;
    if (key !== this._last_key) {
      this._last_key = key;
      this.redraw();
    }
    if (this.hasAttribute("datapath")) {
      this.updateDataPath();
    }
  }
  redraw() {
    this._redraw();
  }
};
;
UIBase10.internalRegister(ColorPickerButton);

// scripts/path.ux/scripts/widgets/ui_tabs.js
var UIBase11 = UIBase2, PackFlags7 = PackFlags, IconSheets5 = IconSheets, iconmanager2 = iconmanager;
var tab_idgen = 1;
var debug = false;
var Vector27 = Vector2;
function getpx(css) {
  return parseFloat(css.trim().replace("px", ""));
}
__name(getpx, "getpx");
var FAKE_TAB_ID = Symbol("fake_tab_id");
var TabDragEvent = class extends PointerEvent {
  static {
    __name(this, "TabDragEvent");
  }
};
var TabItem = class extends UIBase11 {
  static {
    __name(this, "TabItem");
  }
  constructor() {
    super();
    this.name = name;
    this.icon = void 0;
    this.tooltip = "";
    this.movable = true;
    this.tbar = void 0;
    this.ontabclick = null;
    this.ontabdragstart = null;
    this.ontabdragmove = null;
    this.ontabdragend = null;
    let helper = /* @__PURE__ */ __name((key) => {
      let key2 = "on" + key;
      this.addEventListener(key, (e) => {
        if (this[key2]) {
          return this[key2](e);
        }
      });
    }, "helper");
    helper("tabclick");
    helper("tabdragstart");
    helper("tabdragmove");
    helper("tabdragend");
    this.dom = void 0;
    this.extra = void 0;
    this.extraSize = void 0;
    this.size = new Vector27();
    this.pos = new Vector27();
    this.abssize = new Vector27();
    this.abspos = new Vector27();
    this.addEventListener("pointerdown", (e) => {
      this.parentWidget.on_pointerdown(e);
    });
    this.addEventListener("pointermove", (e) => {
      this.parentWidget.on_pointermove(e);
    });
    this.addEventListener("pointerup", (e) => {
      this.parentWidget.on_pointerup(e);
    });
    this.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case keymap.Enter:
        case keymap.Space:
          this.parentWidget.setActive(this, e);
          break;
      }
    });
  }
  init() {
    this.tabIndex = 1;
  }
  static define() {
    return {
      tagname: "tab-item-x"
    };
  }
  sendEvent(type, forwardEvent) {
    let cls;
    if (type === "tabdragstart" || type === "tabdragend") {
      cls = TabDragEvent;
    } else if (forwardEvent && forwardEvent instanceof Event) {
      cls = forwardEvent.constructor;
    } else {
      cls = PointerEvent;
    }
    let e2 = {};
    if (forwardEvent) {
      for (let k in forwardEvent) {
        if (k === "defaultPrevented" || k === "cancelBubble") {
          continue;
        }
        e2[k] = forwardEvent[k];
      }
    }
    e2.target = this;
    e2 = new cls(type, e2);
    this.dispatchEvent(e2);
    return e2;
  }
  getClientRects() {
    let r = this.tbar.getClientRects()[0];
    let s = this.abssize, p = this.abspos;
    s.load(this.size);
    p.load(this.pos);
    if (r) {
      p[0] += r.x;
      p[1] += r.y;
    }
    return [{
      x: p[0],
      y: p[1],
      width: s[0],
      height: s[1],
      left: p[0],
      top: p[1],
      right: p[0] + s[0],
      bottom: p[1] + s[1]
    }];
  }
  setCSS() {
    let dpi = UIBase11.getDPI();
    let x = this.pos[0] / dpi;
    let y = this.pos[1] / dpi;
    let w = this.size[0] / dpi;
    let h = this.size[1] / dpi;
    if (this == this.parentWidget.tabs.active) {
      this.style["focus-border-width"] = "0px";
    } else {
      this.style["focus-border-width"] = "2px";
    }
    this.style["background-color"] = "transparent";
    this.style["margin"] = this.style["padding"] = "0px";
    this.style["position"] = "absolute";
    this.style["pointer-events"] = "auto";
    this.style["left"] = x + "px";
    this.style["top"] = y + "px";
    this.style["width"] = w + "px";
    this.style["height"] = h + "px";
  }
};
UIBase11.internalRegister(TabItem);
var ModalTabMove = class extends EventHandler {
  static {
    __name(this, "ModalTabMove");
  }
  constructor(tab, tbar, dom) {
    super();
    this.dom = dom;
    this.tab = tab;
    this.tbar = tbar;
    this.first = true;
    this.droptarget = void 0;
    this.start_mpos = new Vector27();
    this.mpos = void 0;
    this.dragtab = void 0;
    this.dragstate = false;
    this.finished = false;
  }
  finish() {
    if (debug) {
      if (debug) console.log("finish");
    }
    if (this.finished) {
      return;
    }
    this.finished = true;
    if (this.tbar.tool === this) {
      this.tbar.tool = void 0;
    }
    this.popModal(this.dom);
    this.tbar.update(true);
  }
  popModal() {
    if (this.dragcanvas !== void 0) {
      this.dragcanvas.remove();
    }
    let ret = super.popModal(...arguments);
    this.tab.sendEvent("tabdragend");
    return ret;
  }
  on_pointerenter(e) {
  }
  on_pointerleave(e) {
  }
  on_pointerstart(e) {
  }
  on_pointerend(e) {
  }
  on_pointerdown(e) {
    this.finish();
  }
  on_pointercancel(e) {
    this.finish();
  }
  on_pointerup(e) {
    this.finish();
  }
  on_pointermove(e) {
    return this._on_move(e, e.x, e.y);
  }
  _dragstate(e, x, y) {
    this.dragcanvas.style["left"] = x + "px";
    this.dragcanvas.style["top"] = y + "px";
    let ctx = this.tbar.ctx;
    let screen = ctx.screen;
    let elem2 = screen.pickElement(x, y);
    let e2 = new DragEvent("dragenter", this.dragevent);
    if (elem2 !== this.droptarget) {
      let e22 = new DragEvent("dragexit", this.dragevent);
      if (this.droptarget) {
        this.droptarget.dispatchEvent(e22);
      }
      e22 = new DragEvent("dragover", this.dragevent);
      this.droptarget = elem2;
      if (elem2) {
        elem2.dispatchEvent(e22);
      }
    }
  }
  _on_move(e, x, y) {
    let r = this.tbar.getClientRects()[0];
    let dpi = UIBase11.getDPI();
    if (r === void 0) {
      this.finish();
      return;
    }
    if (this.dragstate) {
      this._dragstate(e, x, y);
      return;
    }
    x -= r.x;
    y -= r.y;
    let dx, dy;
    x *= dpi;
    y *= dpi;
    if (this.first) {
      this.first = false;
      this.start_mpos[0] = x;
      this.start_mpos[1] = y;
    }
    if (this.mpos === void 0) {
      this.mpos = [0, 0];
      dx = dy = 0;
    } else {
      dx = x - this.mpos[0];
      dy = y - this.mpos[1];
    }
    if (debug) console.log(x, y, dx, dy);
    let tab = this.tab, tbar = this.tbar;
    let axis = tbar.horiz ? 0 : 1;
    let distx, disty;
    if (tbar.horiz) {
      tab.pos[0] += dx;
      disty = Math.abs(y - this.start_mpos[1]);
    } else {
      tab.pos[1] += dy;
      disty = Math.abs(x - this.start_mpos[0]);
    }
    let limit = 50;
    let csize = tbar.horiz ? this.tbar.canvas.width : this.tbar.canvas.height;
    let dragok = tab.pos[axis] + tab.size[axis] < -limit || tab.pos[axis] >= csize + limit;
    dragok = dragok || disty > limit * 1.5;
    dragok = dragok && (this.tbar.draggable || this.tbar.getAttribute("draggable"));
    if (dragok) {
      this.dragstate = true;
      this.dragevent = new DragEvent("dragstart", {
        dataTransfer: new DataTransfer()
      });
      this.dragtab = tab;
      let g = this.tbar.g;
      this.dragimg = g.getImageData(~~tab.pos[0], ~~tab.pos[1], ~~tab.size[0], ~~tab.size[1]);
      this.dragcanvas = document.createElement("canvas");
      let g2 = this.drag_g = this.dragcanvas.getContext("2d");
      this.dragcanvas.visibleToPick = false;
      this.dragcanvas.width = ~~tab.size[0];
      this.dragcanvas.height = ~~tab.size[1];
      this.dragcanvas.style["width"] = tab.size[0] / dpi + "px";
      this.dragcanvas.style["height"] = tab.size[1] / dpi + "px";
      this.dragcanvas.style["position"] = UIBase11.PositionKey;
      this.dragcanvas.style["left"] = e.x + "px";
      this.dragcanvas.style["top"] = e.y + "px";
      this.dragcanvas.style["z-index"] = "500";
      document.body.appendChild(this.dragcanvas);
      g2.putImageData(this.dragimg, 0, 0);
      this.tbar.dispatchEvent(this.dragevent);
      return;
    }
    let ti = tbar.tabs.indexOf(tab);
    let next = ti < tbar.tabs.length - 1 ? tbar.tabs[ti + 1] : void 0;
    let prev = ti > 0 ? tbar.tabs[ti - 1] : void 0;
    if (next !== void 0 && next.movable && tab.pos[axis] > next.pos[axis]) {
      tbar.swapTabs(tab, next);
    } else if (prev !== void 0 && prev.movable && tab.pos[axis] < prev.pos[axis] + prev.size[axis] * 0.5) {
      tbar.swapTabs(tab, prev);
    }
    tbar.update(true);
    this.mpos[0] = x;
    this.mpos[1] = y;
    let e2 = tab.sendEvent("tabdragmove", e);
    if (e2.defaultPrevented) {
      this.finish();
    }
  }
  on_keydown(e) {
    if (debug) console.log(e.keyCode);
    switch (e.keyCode) {
      case keymap.Escape:
      //escape
      case keymap.Space:
      //space
      case keymap.Enter:
      //enter
      case keymap.Tab:
        this.finish();
        break;
    }
  }
};
var TabBar = class extends UIBase11 {
  static {
    __name(this, "TabBar");
  }
  constructor() {
    super();
    let style = document.createElement("style");
    let canvas = document.createElement("canvas");
    this.iconsheet = 0;
    this.movableTabs = true;
    this.tabFontScale = 1;
    this.tabs = [];
    this.tabs.active = void 0;
    this.tabs.highlight = void 0;
    this._last_style_key = void 0;
    canvas.style["width"] = "145px";
    canvas.style["height"] = "45px";
    this.r = this.getDefault("TabBarRadius", void 0, 8);
    this.canvas = canvas;
    this.g = canvas.getContext("2d");
    this.canvas.style["touch-action"] = "none";
    style.textContent = `
    `;
    this.shadow.appendChild(style);
    this.shadow.appendChild(canvas);
    this._last_dpi = void 0;
    this._last_pos = void 0;
    this.horiz = true;
    this.onchange = null;
    this.onselect = null;
    let mx, my;
    this.canvas.addEventListener("pointermove", (e) => {
      this.on_pointermove(e);
    }, false);
    this.canvas.addEventListener("pointerdown", (e) => {
      this.on_pointerdown(e);
    });
  }
  _doelement(e, mx, my) {
    for (let tab of this.tabs) {
      let ok;
      if (this.horiz) {
        ok = mx >= tab.pos[0] && mx <= tab.pos[0] + tab.size[0];
      } else {
        ok = my >= tab.pos[1] && my <= tab.pos[1] + tab.size[1];
      }
      if (ok && this.tabs.highlight !== tab) {
        this.tabs.highlight = tab;
        this.update(true);
      }
    }
  }
  _domouse(e) {
    let r = this.canvas.getClientRects()[0];
    let mx = e.x - r.x;
    let my = e.y - r.y;
    let dpi = this.getDPI();
    mx *= dpi;
    my *= dpi;
    this._doelement(e, mx, my);
    const is_mdown = e.type === "mousedown" || e.type == "pointerdown";
    if (is_mdown && this.onselect && this._fireOnSelect().defaultPrevented) {
      e.preventDefault();
    }
  }
  _doclick(e) {
    this._domouse(e);
    if (e.defaultPrevented) {
      return;
    }
    if (debug) console.log("mdown");
    if (e.button !== 0) {
      return;
    }
    let ht = this.tabs.highlight;
    let acte = {};
    for (let k in e) {
      if (k === "defaultPrevented" || k === "cancelBubble") {
        continue;
      }
      acte[k] = e[k];
    }
    acte.target = ht;
    acte.pointerId = e.pointerId;
    acte = new PointerEvent("tabactive", acte);
    let e2 = ht.sendEvent("tabclick", e);
    if (e2.defaultPrevented) {
      acte.preventDefault();
    }
    if (ht !== void 0 && this.tool === void 0) {
      this.setActive(ht, acte);
      if (this.movableTabs && !acte.defaultPrevented) {
        this._startMove(ht, e);
      }
      e.preventDefault();
      e.stopPropagation();
    }
  }
  on_pointerdown(e) {
    this._doclick(e);
  }
  on_pointermove(e) {
    let r = this.canvas.getClientRects()[0];
    this._domouse(e);
    e.preventDefault();
    e.stopPropagation();
  }
  on_pointerup(e) {
  }
  static setDefault(e) {
    e.setAttribute("bar_pos", "top");
    e.updatePos(true);
    return e;
  }
  static define() {
    return {
      tagname: "tabbar-x",
      style: "tabs"
    };
  }
  _ensureNoModal() {
    if (this.tool) {
      this.tool.finish();
      this.tool = void 0;
    }
  }
  get tool() {
    return this._tool;
  }
  set tool(v) {
    this._tool = v;
  }
  _startMove(tab = this.tabs.active, event, pointerId = event ? event.pointerId : void 0, pointerElem = tab) {
    if (this.movableTabs) {
      let e2 = tab.sendEvent("tabdragstart", event);
      if (e2.defaultPrevented) {
        return;
      }
      if (this.tool) {
        this.tool.finish();
      }
      let edom = this.getScreen();
      let tool = this.tool = new ModalTabMove(tab, this, edom);
      if (event && pointerElem && pointerId !== void 0) {
        tool.pushPointerModal(pointerElem, pointerId);
      } else {
        tool.pushModal(edom, false);
      }
    }
  }
  _fireOnSelect() {
    let e = this._makeOnSelectEvt();
    if (this.onselect) {
      this.onselect(e);
    }
    return e;
  }
  _makeOnSelectEvt() {
    return {
      tab: this.tabs.highlight,
      defaultPrevented: false,
      preventDefault() {
        this.defaultPrevented = true;
      }
    };
  }
  getTab(name_or_id) {
    for (let tab of this.tabs) {
      if (tab.id === name_or_id || tab.name === name_or_id)
        return tab;
    }
    return void 0;
  }
  clear() {
    for (let t of this.tabs) {
      if (t.dom) {
        t.dom.remove();
      }
      t.remove();
    }
    this.tabs = [];
    this.setCSS();
    this._redraw();
  }
  saveData() {
    let taborder = [];
    for (let tab of this.tabs) {
      taborder.push(tab.name);
    }
    let act2 = this.tabs.active !== void 0 ? this.tabs.active.name : "null";
    return {
      taborder,
      active: act2
    };
  }
  loadData(obj) {
    if (!obj.taborder) {
      return;
    }
    let tabs = this.tabs;
    let active = void 0;
    let ntabs = [];
    ntabs.active = void 0;
    ntabs.highlight = void 0;
    for (let tname of obj.taborder) {
      let tab = this.getTab(tname);
      if (tab === void 0) {
        continue;
      }
      if (tab.name === obj.active) {
        active = tab;
      }
      ntabs.push(tab);
    }
    for (let tab of tabs) {
      if (ntabs.indexOf(tab) < 0) {
        ntabs.push(tab);
      }
    }
    this.tabs = ntabs;
    try {
      if (active !== void 0) {
        this.setActive(active);
      } else if (this.tabs.length > 0) {
        this.setActive(this.tabs[0]);
      }
    } catch (error2) {
      print_stack2(error2);
    }
    this.update(true);
    return this;
  }
  swapTabs(a2, b) {
    let tabs = this.tabs;
    let ai = tabs.indexOf(a2);
    let bi = tabs.indexOf(b);
    tabs[ai] = b;
    tabs[bi] = a2;
    this.update(true);
  }
  addIconTab(icon, id2, tooltip, movable = true) {
    let tab = this.addTab("", id2, tooltip, movable);
    tab.icon = icon;
    return tab;
  }
  addTab(name2, id2, tooltip = "", movable) {
    let tab = UIBase11.createElement("tab-item-x", true);
    this.shadow.appendChild(tab);
    tab.parentWidget = this;
    tab.name = name2;
    tab.id = id2;
    tab.tooltip = tooltip;
    tab.movable = movable;
    tab.tbar = this;
    this.tabs.push(tab);
    this.update(true);
    if (this.tabs.length === 1) {
      this.setActive(this.tabs[0]);
    }
    return tab;
  }
  updatePos(force_update = false) {
    let pos = this.getAttribute("bar_pos");
    if (pos !== this._last_pos || force_update) {
      this._last_pos = pos;
      this.horiz = pos === "top" || pos === "bottom";
      if (debug) console.log("tab bar position update", this.horiz);
      if (this.horiz) {
        this.style["width"] = "100%";
        delete this.style["height"];
      } else {
        this.style["height"] = "100%";
        delete this.style["width"];
      }
      this._redraw();
    }
  }
  updateDPI(force_update = false) {
    let dpi = this.getDPI();
    if (dpi !== this._last_dpi) {
      if (debug) console.log("DPI update!");
      this._last_dpi = dpi;
      this.updateCanvas(true);
    }
  }
  updateCanvas(force_update = false) {
    let canvas = this.canvas;
    let dpi = this.getDPI();
    let rwidth = getpx(this.canvas.style["width"]);
    let rheight = getpx(this.canvas.style["height"]);
    let width = ~~(rwidth * dpi);
    let height = ~~(rheight * dpi);
    let update = force_update;
    update = update || canvas.width !== width || canvas.height !== height;
    if (update) {
      canvas.width = width;
      canvas.height = height;
      this._redraw();
    }
  }
  _getFont(tsize) {
    let font = this.getDefault("TabText");
    if (this.tabFontScale !== 1) {
      font = font.copy();
      font.size *= this.tabFontScale;
    }
    return font;
  }
  _layout() {
    if ((!this.ctx || !this.ctx.screen) && !this.isDead()) {
      this.doOnce(this._layout);
    }
    let g = this.g;
    if (debug) console.log("tab layout");
    let dpi = this.getDPI();
    let font = this._getFont();
    let tsize = font.size * dpi;
    g.font = font.genCSS(tsize);
    let axis = this.horiz ? 0 : 1;
    let pad = 4 * dpi + Math.ceil(tsize * 0.25);
    let hpad = this.getDefault("TabPadding", void 0, 0);
    let x = pad;
    let y = 0;
    let h = tsize + Math.ceil(tsize * 0.5) + hpad;
    let iconsize = iconmanager2.getTileSize(this.iconsheet);
    let have_icons = false;
    for (let tab of this.tabs) {
      if (tab.icon !== void 0) {
        have_icons = true;
        h = Math.max(h, iconsize + 4);
        break;
      }
    }
    let r1 = this.parentWidget ? this.parentWidget.getClientRects()[0] : void 0;
    let r2 = this.canvas.getClientRects()[0];
    let rx = 0, ry = 0;
    if (r2) {
      rx = r2.x;
      ry = r2.y;
    }
    let ti = -1;
    let makeTabWatcher = /* @__PURE__ */ __name((tab) => {
      if (tab.watcher) {
        clearInterval(tab.watcher.timer);
      }
      let watcher = /* @__PURE__ */ __name(() => {
        let dead = this.tabs.indexOf(tab) < 0;
        dead = dead || this.isDead();
        if (dead) {
          if (tab.dom)
            tab.dom.remove();
          tab.dom = void 0;
          if (tab.watcher.timer)
            clearInterval(tab.watcher.timer);
        }
      }, "watcher");
      tab.watcher = watcher;
      tab.watcher.timer = window.setInterval(watcher, 750);
      return tab.watcher.timer;
    }, "makeTabWatcher");
    let haveTabDom = false;
    for (let tab of this.tabs) {
      if (tab.extra) {
        haveTabDom = true;
      }
    }
    if (haveTabDom && this.ctx && this.ctx.screen && !this._size_cb) {
      this._size_cb = () => {
        if (this.isDead()) {
          this.ctx.screen.removeEventListener("resize", this._size_cb);
          this._size_cb = void 0;
          return;
        }
        if (!this.ctx) return;
        this._layout();
        this._redraw();
      };
      this.ctx.screen.addEventListener("resize", this._size_cb);
    }
    for (let tab of this.tabs) {
      ti++;
      if (tab.extra && !tab.dom) {
        tab.dom = document.createElement("div");
        tab.dom.style["margin"] = tab.dom.style["padding"] = "0px";
        document.body.appendChild(tab.dom);
        tab.dom.style["position"] = UIBase11.PositionKey;
        tab.dom.style["display"] = "flex";
        tab.dom.style["flex-direction"] = this.horiz ? "row" : "column";
        tab.dom.style["pointer-events"] = "none";
        if (!this.horiz) {
          tab.dom.style["width"] = tab.size[0] / dpi + "px";
          tab.dom.style["height"] = tab.size[1] / dpi + "px";
          tab.dom.style["left"] = rx + tab.pos[0] / dpi + "px";
          tab.dom.style["top"] = ry + tab.pos[1] / dpi + "px";
        } else {
          tab.dom.style["width"] = tab.size[0] / dpi + "px";
          tab.dom.style["height"] = tab.size[1] / dpi + "px";
          tab.dom.style["left"] = rx + tab.pos[0] / dpi + "px";
          tab.dom.style["top"] = ry + tab.pos[1] / dpi + "px";
        }
        let font2 = this._getFont();
        tab.dom.style["font"] = font2.genCSS();
        tab.dom.style["color"] = font2.color;
        tab.dom.appendChild(tab.extra);
        makeTabWatcher(tab);
      }
      let w = g.measureText(tab.name).width;
      if (tab.extra) {
        w += tab.extraSize || tab.extra.getClientRects()[0].width;
      }
      if (tab.icon !== void 0) {
        w += iconsize;
      }
      let bad = this.tool !== void 0 && tab === this.tabs.active;
      if (!bad) {
        tab.pos[axis] = x;
        tab.pos[axis ^ 1] = y;
      }
      tab.size[axis] = w + pad * 2;
      tab.size[axis ^ 1] = h;
      x += w + pad * 2;
    }
    x = ~~(x + pad) / dpi;
    h = ~~h / dpi;
    if (this.horiz) {
      this.canvas.style["width"] = x + "px";
      this.canvas.style["height"] = h + "px";
    } else {
      this.canvas.style["height"] = x + "px";
      this.canvas.style["width"] = h + "px";
    }
    for (let tab of this.tabs) {
      tab.setCSS();
    }
  }
  /** tab is a TabItem instance */
  setActive(tab, event) {
    if (tab.noSwitch) {
      return;
    }
    let update = tab !== this.tabs.active;
    this.tabs.active = tab;
    if (update) {
      if (!isMobile() && this.getDefault("focus-on-tab-click")) {
        tab.focus({ preventScroll: true, focusVisible: false });
      }
      if (this.onchange)
        this.onchange(tab, event);
      this.update(true);
    }
  }
  _redraw() {
    let g = this.g;
    let activecolor = this.getDefault("TabActive") || "rgba(0,0,0,0)";
    if (debug) console.log("tab draw");
    g.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let dpi = this.getDPI();
    let font = this._getFont();
    let tsize = font.size;
    let iconsize = iconmanager2.getTileSize(this.iconsheet);
    tsize = tsize * dpi;
    g.font = font.genCSS(tsize);
    g.lineWidth = 2;
    g.strokeStyle = this.getDefault("TabStrokeStyle1");
    let r = this.r * dpi;
    this._layout();
    let tab;
    const draw_text = /* @__PURE__ */ __name((name2, x2, y2) => {
      let hpad = this.getDefault("TabPadding", void 0, 0);
      if (this.horiz) {
        y2 += hpad * 0.5;
      } else {
        y2 -= hpad * 0.5;
      }
      g.fillText(tab.name, x2, y2);
    }, "draw_text");
    let ti = -1;
    for (tab of this.tabs) {
      ti++;
      if (tab === this.tabs.active)
        continue;
      let x = tab.pos[0], y = tab.pos[1];
      let w = tab.size[0], h = tab.size[1];
      let tw = measureText(this, tab.name, this.canvas, g, tsize, font).width;
      let x2 = x + (tab.size[this.horiz ^ 1] - tw) * 0.5;
      let y2 = y + tsize;
      if (tab === this.tabs.highlight) {
        let p = 2;
        g.beginPath();
        g.rect(x + p, y + p, w - p * 2, h - p * 2);
        g.fillStyle = this.getDefault("TabHighlight");
        g.fill();
      }
      g.fillStyle = this.getDefault("TabText").color;
      if (!this.horiz) {
        let x3 = 0, y3 = y2;
        g.save();
        g.translate(x3, y3);
        g.rotate(Math.PI / 2);
        g.translate(x3 - tsize, -y3 - tsize * 0.5);
      }
      if (tab.icon !== void 0) {
        iconmanager2.canvasDraw(this, this.canvas, g, tab.icon, x, y, this.iconsheet);
        x2 += iconsize + 4;
      }
      draw_text(tab.name, x2, y2);
      if (!this.horiz) {
        g.restore();
      }
      let prev = this.tabs[Math.max(ti - 1 + this.tabs.length, 0)];
      let next = this.tabs[Math.min(ti + 1, this.tabs.length - 1)];
      if (tab !== this.tabs[this.tabs.length - 1] && prev !== this.tabs.active && next !== this.tabs.active) {
        g.beginPath();
        if (this.horiz) {
          g.moveTo(x + w, h - 5);
          g.lineTo(x + w, 5);
        } else {
          g.moveTo(w - 5, y + h);
          g.lineTo(5, y + h);
        }
        g.strokeStyle = this.getDefault("TabStrokeStyle1");
        g.stroke();
      }
    }
    let th = tsize;
    tab = this.tabs.active;
    if (tab) {
      let x = tab.pos[0], y = tab.pos[1];
      let w = tab.size[0], h = tab.size[1];
      let tw = measureText(this, tab.name, this.canvas, g, tsize, font).width;
      if (this.horiz) {
        h += 2;
      } else {
        w += 2;
      }
      let x2 = x + (tab.size[this.horiz ^ 1] - tw) * 0.5;
      let y2 = y + tsize;
      if (tab === this.tabs.active) {
        g.beginPath();
        let ypad = 2;
        g.strokeStyle = this.getDefault("TabStrokeStyle2");
        g.fillStyle = activecolor;
        let r2 = r * 1.5;
        if (this.horiz) {
          g.moveTo(x - r, h);
          g.quadraticCurveTo(x, h, x, h - r);
          g.lineTo(x, r2);
          g.quadraticCurveTo(x, ypad, x + r2, ypad);
          g.lineTo(x + w - r2, ypad);
          g.quadraticCurveTo(x + w, 0, x + w, r2);
          g.lineTo(x + w, h - r2);
          g.quadraticCurveTo(x + w, h, x + w + r, h);
          g.stroke();
          g.closePath();
        } else {
          g.moveTo(w, y - r);
          g.quadraticCurveTo(w, y, w - r, y);
          g.lineTo(r2, y);
          g.quadraticCurveTo(ypad, y, ypad, y + r2);
          g.lineTo(ypad, y + h - r2);
          g.quadraticCurveTo(0, y + h, r2, y + h);
          g.lineTo(w - r2, y + h);
          g.quadraticCurveTo(w, y + h, w, y + h + r);
          g.stroke();
          g.closePath();
        }
        let cw = this.horiz ? this.canvas.width : this.canvas.height;
        let worig = g.lineWidth;
        g.lineWidth *= 0.5;
        g.fill();
        g.lineWidth = worig;
        if (!this.horiz) {
          let x3 = 0, y3 = y2;
          g.save();
          g.translate(x3, y3);
          g.rotate(Math.PI / 2);
          g.translate(-x3 - tsize, -y3 - tsize * 0.5);
        }
        g.fillStyle = this.getDefault("TabText").color;
        draw_text(tab.name, x2, y2);
        if (!this.horiz) {
          g.restore();
        }
      }
    }
  }
  removeTab(tab) {
    this.tabs.remove(tab);
    if (tab === this.tabs.active) {
      this.tabs.active = this.tabs[0];
    }
    this._layout();
    this._redraw();
    this.setCSS();
  }
  setCSS() {
    super.setCSS(false);
    this.style["contain"] = "layout";
    this.r = this.getDefault("TabBarRadius", void 0, 8);
    let r = this.r !== void 0 ? this.r : 3;
    this.style["touch-action"] = "none";
    this.canvas.style["background-color"] = this.getDefault("TabInactive");
    this.canvas.style["border-radius"] = r + "px";
  }
  updateStyle() {
    let key = "" + this.getDefault("background-color");
    key += this.getDefault("TabActive");
    key += this.getDefault("TabInactive");
    key += this.getDefault("TabBarRadius");
    key += this.getDefault("TabStrokeStyle1");
    key += this.getDefault("TabStrokeStyle2");
    key += this.getDefault("TabHighlight");
    key += JSON.stringify(this.getDefault("TabText"));
    key += this.tabFontScale;
    if (key !== this._last_style_key) {
      this._last_style_key = key;
      this._layout();
      this.setCSS();
      this._redraw();
    }
  }
  update(force_update = false) {
    let rect = this.getClientRects()[0];
    if (rect) {
      let key = Math.floor(rect.x * 4) + ":" + Math.floor(rect.y * 4);
      if (key !== this._last_p_key) {
        this._last_p_key = key;
        this._layout();
      }
    }
    super.update();
    this.updateStyle();
    this.updatePos(force_update);
    this.updateDPI(force_update);
    this.updateCanvas(force_update);
  }
};
UIBase11.internalRegister(TabBar);
var TabContainer = class extends UIBase11 {
  static {
    __name(this, "TabContainer");
  }
  constructor() {
    super();
    this._last_style_key = "";
    this.dataPrefix = "";
    this.inherit_packflag = 0;
    this.packflag = 0;
    this.tabFontScale = 1;
    this.tbar = UIBase11.createElement("tabbar-x");
    this.tbar.parentWidget = this;
    this.tbar.setAttribute("class", "_tbar_" + this._id);
    this.tbar.constructor.setDefault(this.tbar);
    this.tbar.tabFontScale = this.tabFontScale;
    this._remakeStyle();
    this.tabs = {};
    this._last_horiz = void 0;
    this._last_bar_pos = void 0;
    this._tab = void 0;
    let div = document.createElement("div");
    div.setAttribute("class", `_tab_${this._id}`);
    div.appendChild(this.tbar);
    this.shadow.appendChild(div);
    this.tbar.parentWidget = this;
    this.tbar.onselect = (e) => {
      if (this.onselect) {
        this.onselect(e);
      }
    };
    this.tbar.onchange = (tab, event) => {
      if (this._tab) {
        HTMLElement.prototype.remove.call(this._tab);
      }
      this._tab = this.tabs[tab.id];
      this._tab.parentWidget = this;
      for (let i = 0; i < 2; i++) {
        this._tab.flushUpdate();
      }
      let div2 = document.createElement("div");
      this.tbar.setCSS.once(() => div2.style["background-color"] = this.getDefault("background-color"), div2);
      div2.setAttribute("class", `_tab_${this._id}`);
      div2.appendChild(this._tab);
      this.shadow.appendChild(div2);
      if (this.onchange) {
        this.onchange(tab, event);
      }
    };
  }
  get movableTabs() {
    let attr;
    if (!this.hasAttribute("movable-tabs")) {
      attr = this.getDefault("movable-tabs");
      if (attr === void 0 || attr === null) {
        attr = "true";
      }
      if (typeof attr === "boolean" || typeof attr === "number") {
        attr = attr ? "true" : "false";
      }
    } else {
      attr = "" + this.getAttribute("movable-tabs");
    }
    attr = attr.toLowerCase();
    return attr === "true";
  }
  set movableTabs(val) {
    val = !!val;
    this.setAttribute("movable-tabs", val ? "true" : "false");
    this.tbar.movableTabs = this.movableTabs;
  }
  get hideScrollBars() {
    let attr = ("" + this.getAttribute("hide-scrollbars")).toLowerCase();
    return attr === "true" || attr === "yes";
  }
  set hideScrollBars(val) {
    val = !!val;
    this.setAttribute("hide-scrollbars", "" + val);
  }
  static setDefault(e) {
    e.setAttribute("bar_pos", "top");
    return e;
  }
  static define() {
    return {
      tagname: "tabcontainer-x",
      style: "tabs"
    };
  }
  _startMove(tab = this.tbar.tabs.active, event) {
    return this.tbar._startMove(tab, event);
  }
  _ensureNoModal() {
    return this.tbar._ensureNoModal();
  }
  saveData() {
    let json = super.saveData() || {};
    json.tabs = {};
    for (let k in this.tabs) {
      let tab = this.tabs[k];
      if (k === this.tbar.tabs.active.id) {
        continue;
      }
      try {
        json.tabs[tab.id] = JSON.parse(saveUIData(tab, "tab"));
      } catch (error2) {
        console.error("Failed to save tab UI layout", tab.id);
      }
    }
    return json;
  }
  loadData(json) {
    if (!json.tabs) {
      return;
    }
    for (let k in json.tabs) {
      if (!(k in this.tabs)) {
        continue;
      }
      let uidata = JSON.stringify(json.tabs[k]);
      loadUIData(this.tabs[k], uidata);
    }
  }
  enableDrag() {
    this.tbar.draggable = this.draggable = true;
    this.tbar.addEventListener("dragstart", (e) => {
      this.dispatchEvent(new DragEvent("dragstart", e));
    });
    this.tbar.addEventListener("dragover", (e) => {
      this.dispatchEvent(new DragEvent("dragover", e));
    });
    this.tbar.addEventListener("dragexit", (e) => {
      this.dispatchEvent(new DragEvent("dragexit", e));
    });
  }
  clear() {
    this.tbar.clear();
    if (this._tab !== void 0) {
      HTMLElement.prototype.remove.call(this._tab);
      this._tab = void 0;
    }
    this.tabs = {};
  }
  init() {
    super.init();
    this.background = this.getDefault("background-color");
  }
  setCSS() {
    super.setCSS();
    this.background = this.getDefault("background-color");
    this._remakeStyle();
  }
  _remakeStyle() {
    let horiz = this.tbar.horiz;
    let display = "flex";
    let flexDir = !horiz ? "row" : "column";
    let bgcolor = this.__background;
    let style = document.createElement("style");
    style.textContent = `
      ._tab_${this._id} {
        display : ${display};
        flex-direction : ${flexDir};
        margin : 0px;
        padding : 0px;
        align-self : flex-start;
        ${!horiz ? "vertical-align : top;" : ""}
      }
      
      ._tbar_${this._id} {
        list-style-type : none;
        align-self : flex-start;
        background-color : ${bgcolor};
        flex-direction : ${flexDir};
        ${!horiz ? "vertical-align : top;" : ""}
      }
    `;
    if (this._style)
      this._style.remove();
    this._style = style;
    this.shadow.prepend(style);
  }
  icontab(icon, id2, tooltip) {
    let t = this.tab("", id2, tooltip);
    t._tab.icon = icon;
    return t;
  }
  removeTab(tab) {
    let tab2 = tab._tab;
    this.tbar.removeTab(tab2);
    tab.remove();
  }
  tab(name2, id2 = void 0, tooltip = void 0, movable = true) {
    if (id2 === void 0) {
      id2 = tab_idgen++;
    }
    let col = UIBase11.createElement("colframe-x");
    this.tabs[id2] = col;
    col.dataPrefix = this.dataPrefix;
    col.ctx = this.ctx;
    col._tab = this.tbar.addTab(name2, id2, tooltip, movable);
    col.inherit_packflag |= this.inherit_packflag;
    col.packflag |= this.packflag;
    col.parentWidget = this;
    if (col.ctx) {
      col._init();
    }
    col.setCSS();
    if (this._tab === void 0) {
      this.setActive(col);
    }
    col.noSwitch = function() {
      this._tab.noSwitch = true;
      return this;
    };
    function defineTabEvent(key) {
      key = "on" + key;
      Object.defineProperty(col, key, {
        get() {
          return this._tab[key];
        },
        set(v) {
          this._tab[key] = v;
        }
      });
    }
    __name(defineTabEvent, "defineTabEvent");
    defineTabEvent("tabclick");
    defineTabEvent("tabdragmove");
    defineTabEvent("tabdragstart");
    defineTabEvent("tabdragend");
    return col;
  }
  setActive(tab) {
    if (typeof tab === "string") {
      tab = this.getTab(tab);
    }
    if (!tab) {
      return;
    }
    if (tab._tab !== this.tbar.tabs.active) {
      this.tbar.setActive(tab._tab);
    }
  }
  getTabCount() {
    return this.tbar.tabs.length;
  }
  moveTab(tab, i) {
    tab = tab._tab;
    let tab2 = this.tbar.tabs[i];
    if (tab !== tab2) {
      this.tbar.swapTabs(tab, tab2);
    }
    this.tbar.setCSS();
    this.tbar._layout();
    this.tbar._redraw();
  }
  getTab(name_or_id) {
    if (name_or_id in this.tabs) {
      return this.tabs[name_or_id];
    }
    for (let k in this.tabs) {
      let t = this.tabs[k];
      if (t.name === name_or_id) {
        return t;
      }
    }
    throw new Error("Unknown tab " + name_or_id);
  }
  updateBarPos() {
    let barpos = this.getAttribute("bar_pos");
    if (barpos !== this._last_bar_pos) {
      this.horiz = barpos === "top" || barpos === "bottom";
      this._last_bar_pos = barpos;
      this.tbar.setAttribute("bar_pos", barpos);
      this.tbar.update(true);
      this.update();
    }
  }
  updateHoriz() {
    let horiz = this.tbar.horiz;
    if (this._last_horiz !== horiz) {
      this._last_horiz = horiz;
      this._remakeStyle();
    }
  }
  updateStyle() {
    let key = "" + this.getDefault("background-color");
    if (key !== this._last_style_key) {
      this._last_style_key = key;
      this.setCSS();
    }
  }
  getActive() {
    return this.tbar.tabs.active;
  }
  update() {
    super.update();
    this.tbar.movableTabs = this.movableTabs;
    if (this._tab !== void 0) {
      this._tab.update();
    }
    this.style["display"] = "flex";
    this.style["flex-direction"] = !this.horiz ? "row" : "column";
    this.tbar.tabFontScale = this.tabFontScale;
    this.updateStyle();
    this.updateHoriz();
    this.updateBarPos();
    this.tbar.update();
    let act2 = this.tbar.tabs.active;
    if (act2 && !this.hideScrollBars) {
      let container = this.tabs[act2.id];
      if (container.hasAttribute("overflow-y") && this.style["overflow-y"] !== container.getAttribute("overflow-y")) {
        this.style["overflow-y"] = container.getAttribute("overflow-y");
      } else if (!container.hasAttribute("overflow-y")) {
        this.style["overflow-y"] = this.getDefault("overflow-y") || "unset";
      }
      if (container.hasAttribute("overflow") && this.style["overflow"] !== container.getAttribute("overflow")) {
        this.style["overflow"] = container.getAttribute("overflow");
      } else if (!container.hasAttribute("overflow")) {
        this.style["overflow"] = this.getDefault("overflow") || "unset";
      }
    } else if (this.hideScrollBars) {
      this.style["overflow"] = this.style["overflow-y"] = "unset";
    }
  }
};
UIBase11.internalRegister(TabContainer);

// scripts/path.ux/scripts/widgets/ui_table.js
var _ui3 = void 0;
var PropFlags4 = PropFlags;
var PropSubTypes4 = PropSubTypes;
var EnumProperty6 = EnumProperty;
var Vector28 = Vector2, UIBase12 = UIBase2, PackFlags8 = PackFlags, PropTypes6 = PropTypes;
var list2 = list;
var TableRow = class extends Container {
  static {
    __name(this, "TableRow");
  }
  constructor() {
    super();
    this.dom.remove();
    this.dom = document.createElement("tr");
    this.dom.setAttribute("class", "containerx");
  }
  static define() {
    return {
      tagname: "tablerow-x"
    };
  }
  _add(child) {
    child.ctx = this.ctx;
    child.parentWidget = this;
    let td = document.createElement("td");
    td.appendChild(child);
    this.dom.appendChild(td);
    child.onadd();
  }
};
;
UIBase12.internalRegister(TableRow);
var TableFrame = class extends Container {
  static {
    __name(this, "TableFrame");
  }
  constructor() {
    super();
    this.dom = document.createElement("table");
    this.shadow.appendChild(this.dom);
    this.dom.setAttribute("class", "containerx");
  }
  update() {
    super.update();
  }
  _add(child) {
    child.ctx = this.ctx;
    child.parentWidget = this;
    this.dom.appendChild(child);
    child.onadd();
  }
  add(child) {
    this._add(child);
  }
  row() {
    let tr = document.createElement("tr");
    let cls = "table-tr";
    tr.setAttribute("class", cls);
    this.dom.appendChild(tr);
    let this2 = this;
    function maketd() {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.style["margin"] = tr.style["margin"];
      td.style["padding"] = tr.style["padding"];
      let container = UIBase12.createElement("rowframe-x");
      container.ctx = this2.ctx;
      container.parentWidget = this2;
      container.setAttribute("class", cls);
      td.setAttribute("class", cls);
      td.appendChild(container);
      return container;
    }
    __name(maketd, "maketd");
    let ret = {
      _tr: tr,
      style: tr.style,
      focus: /* @__PURE__ */ __name(function(args) {
        tr.focus(args);
      }, "focus"),
      blur: /* @__PURE__ */ __name(function(args) {
        tr.blur(args);
      }, "blur"),
      remove: /* @__PURE__ */ __name(() => {
        tr.remove();
      }, "remove"),
      addEventListener: /* @__PURE__ */ __name(function(type, cb, arg) {
        tr.addEventListener(type, cb, arg);
      }, "addEventListener"),
      removeEventListener: /* @__PURE__ */ __name(function(type, cb, arg) {
        tr.removeEventListener(type, cb, arg);
      }, "removeEventListener"),
      setAttribute: /* @__PURE__ */ __name(function(attr, val) {
        if (attr == "class") {
          cls = val;
        }
        tr.setAttribute(attr, val);
      }, "setAttribute"),
      scrollTo: /* @__PURE__ */ __name(function() {
        return this._tr.scrollTo(...arguments);
      }, "scrollTo"),
      scrollIntoView: /* @__PURE__ */ __name(function() {
        return this._tr.scrollIntoView(...arguments);
      }, "scrollIntoView"),
      clear: /* @__PURE__ */ __name(function() {
        for (let node of list2(tr.childNodes)) {
          tr.removeChild(node);
        }
      }, "clear")
    };
    function makefunc(f) {
      ret[f] = function() {
        let container = maketd();
        container.background = tr.style["background-color"];
        return container[f].apply(container, arguments);
      };
    }
    __name(makefunc, "makefunc");
    let _bg = "";
    Object.defineProperty(ret, "tabIndex", {
      set: /* @__PURE__ */ __name(function(f) {
        tr.tabIndex = f;
      }, "set"),
      get: /* @__PURE__ */ __name(function(f) {
        return tr.tabIndex;
      }, "get")
    });
    Object.defineProperty(ret, "background", {
      set: /* @__PURE__ */ __name(function(bg) {
        _bg = bg;
        tr.style["background-color"] = bg;
        for (let node of tr.childNodes) {
          if (node.childNodes.length > 0) {
            node.childNodes[0].background = bg;
            node.style["background-color"] = bg;
          }
        }
      }, "set"),
      get: /* @__PURE__ */ __name(function() {
        return _bg;
      }, "get")
    });
    ret.cell = () => {
      let container = maketd();
      container.background = tr.style["background-color"];
      return container;
    };
    makefunc("label");
    makefunc("tool");
    makefunc("prop");
    makefunc("pathlabel");
    makefunc("button");
    makefunc("iconbutton");
    makefunc("textbox");
    makefunc("col");
    makefunc("row");
    makefunc("table");
    makefunc("listenum");
    makefunc("check");
    return ret;
  }
  clear() {
    super.clear();
    for (let child of list2(this.dom.childNodes)) {
      child.remove();
    }
  }
  static define() {
    return {
      tagname: "tableframe-x"
    };
  }
};
UIBase12.internalRegister(TableFrame);

// scripts/path.ux/scripts/widgets/ui_listbox.js
var EnumProperty7 = EnumProperty, PropTypes7 = PropTypes;
var UIBase13 = UIBase2, PackFlags9 = PackFlags, IconSheets6 = IconSheets;
function getpx2(css) {
  return parseFloat(css.trim().replace("px", ""));
}
__name(getpx2, "getpx");
var ListItem = class extends RowFrame {
  static {
    __name(this, "ListItem");
  }
  constructor() {
    super();
    let highlight = /* @__PURE__ */ __name(() => {
      this.highlight = true;
      this.setBackground();
    }, "highlight");
    let unhighlight = /* @__PURE__ */ __name(() => {
      this.highlight = false;
      this.setBackground();
    }, "unhighlight");
    this.addEventListener("mouseover", highlight);
    this.addEventListener("mousein", highlight);
    this.addEventListener("mouseleave", unhighlight);
    this.addEventListener("mouseout", unhighlight);
    this.addEventListener("blur", unhighlight);
    let style = document.createElement("style");
    style.textContent = `
      .listitem {
        -moz-user-focus: normal;
        moz-user-focus: normal;
        user-focus: normal;
      }
    `;
    this.shadowRoot.prepend(style);
  }
  static define() {
    return {
      tagname: "listitem-x",
      style: "listbox"
    };
  }
  init() {
    super.init();
    this.setAttribute("class", "listitem");
    this.style["width"] = "100%";
    this.style["height"] = this.getDefault("ItemHeight") + "px";
    this.style["flex-grow"] = "unset";
    this.setCSS();
  }
  setBackground() {
    if (this.highlight && this.is_active) {
      this.background = this.getDefault("ListActiveHighlight");
    } else if (this.highlight) {
      this.background = this.getDefault("ListHighlight");
    } else if (this.is_active) {
      this.background = this.getDefault("ListActive");
    } else {
      this.background = this.getDefault("background-color");
    }
  }
  setCSS() {
    super.setCSS();
    this.setBackground();
  }
};
UIBase13.internalRegister(ListItem);
var ListBox = class extends Container {
  static {
    __name(this, "ListBox");
  }
  constructor() {
    super();
    this.items = [];
    this.idmap = {};
    this.items.active = void 0;
    this.highlight = false;
    this.is_active = false;
    let style = document.createElement("style");
    style.textContent = `
      .listbox {
        -moz-user-focus: normal;
        moz-user-focus: normal;
        user-focus: normal;
      }
    `;
    this.shadow.prepend(style);
    this.onkeydown = (e) => {
      switch (e.keyCode) {
        case keymap["Up"]:
        case keymap["Down"]:
          if (this.items.length == 0)
            return;
          if (this.items.active === void 0) {
            this.setActive(this.items[0]);
            return;
          }
          let i = this.items.indexOf(this.items.active);
          let dir = e.keyCode == keymap["Up"] ? -1 : 1;
          i = Math.max(Math.min(i + dir, this.items.length - 1), 0);
          this.setActive(this.items[i]);
          break;
      }
    };
  }
  static define() {
    return {
      tagname: "listbox-x",
      style: "listbox"
    };
  }
  setCSS() {
    super.setCSS();
  }
  init() {
    super.init();
    this.setCSS();
    this.style["width"] = this.getDefault("width") + "px";
    this.style["height"] = this.getDefault("height") + "px";
    this.style["overflow"] = "scroll";
  }
  addItem(name2, id2) {
    let item = UIBase13.createElement("listitem-x");
    item._id = id2 === void 0 ? this.items.length : id2;
    this.idmap[item._id] = item;
    this.tabIndex = 1;
    this.setAttribute("tabindex", 1);
    this.add(item);
    this.items.push(item);
    item.label(name2);
    let this2 = this;
    item.onclick = function() {
      this2.setActive(this);
      this.setBackground();
    };
    return item;
  }
  removeItem(item) {
    if (typeof item == "number") {
      item = this.idmap[item];
    }
    item.remove();
    delete this.idmap[item._id];
    this.items.remove(item);
  }
  setActive(item) {
    if (typeof item == "number") {
      item = this.idmap[item];
    }
    if (item === this.items.active) {
      return;
    }
    if (this.items.active !== void 0) {
      this.items.active.highlight = false;
      this.items.active.is_active = false;
      this.items.active.setBackground();
    }
    this.items.active = item;
    if (item) {
      item.is_active = true;
      item.setBackground();
      item.scrollIntoViewIfNeeded();
    }
    if (this.onchange) {
      this.onchange(item ? item._id : void 0, item);
    }
  }
  clear() {
  }
};
UIBase13.internalRegister(ListBox);

// scripts/path.ux/scripts/widgets/ui_progress.js
var ProgressCircle = class extends UIBase2 {
  static {
    __name(this, "ProgressCircle");
  }
  constructor() {
    super();
    this.canvas = document.createElement("canvas");
    this.g = this.canvas.getContext("2d");
    this.shadow.appendChild(this.canvas);
    this.size = 150;
    this.animreq = void 0;
    this._value = 0;
    this.startTime = time_ms();
  }
  init() {
    super.init();
    this.flagRedraw();
    this.update();
    this.tabIndex = 0;
    this.setAttribute("tab-index", 0);
    this.setAttribute("tabindex", 0);
    let onkey = /* @__PURE__ */ __name((e) => {
      switch (e.keyCode) {
        case keymap["Escape"]:
          if (this.oncancel) {
            this.oncancel(this);
          }
          break;
      }
    }, "onkey");
    this.addEventListener("keydown", onkey);
    this.canvas.addEventListener("keydown", onkey);
  }
  flagRedraw() {
    if (this.animreq !== void 0) {
      return;
    }
    this.animreq = requestAnimationFrame(() => {
      this.animreq = void 0;
      this.draw();
    });
  }
  draw() {
    let c = this.canvas, g = this.g;
    let clr1 = "rgb(68,69,83)";
    let clr2 = "rgb(141,154,196)";
    let clr3 = "rgb(214,110,54)";
    let t = (time_ms() - this.startTime) / 1e3;
    g.save();
    g.clearRect(0, 0, c.width, c.height);
    g.lineWidth /= c.width * 0.5;
    g.scale(c.width, c.height);
    g.translate(0.5, 0.5);
    g.fillStyle = clr2;
    g.strokeStyle = clr1;
    g.beginPath();
    g.moveTo(0, 0);
    g.arc(0, 0, 0.45, Math.PI, -Math.PI);
    g.moveTo(0, 0);
    g.arc(0, 0, 0.2, Math.PI, -Math.PI);
    g.clip("evenodd");
    g.beginPath();
    g.arc(0, 0, 0.45, -Math.PI, Math.PI);
    g.fill();
    g.stroke();
    g.beginPath();
    g.arc(0, 0, 0.2, Math.PI, -Math.PI);
    g.stroke();
    g.beginPath();
    let th = this._value * Math.PI * 2;
    let steps = 12;
    let dth = Math.PI * 2 / steps;
    let lwid = g.lineWidth;
    g.lineWidth *= 3;
    for (let i = 0; i < steps; i++) {
      let th1 = i * dth;
      th1 += t;
      let r1 = 0.2;
      let r2 = 0.45;
      let th2 = th1 + dth * 0.5;
      g.beginPath();
      g.moveTo(Math.cos(th1) * r1, Math.sin(th1) * r1);
      g.lineTo(Math.cos(th2) * r2, Math.sin(th2) * r2);
      g.strokeStyle = "rgba(255,255,255,0.5)";
      g.stroke();
    }
    g.lineWidth = lwid;
    g.beginPath();
    g.moveTo(0, 0);
    g.arc(0, 0, 0.4, Math.PI, -Math.PI);
    g.clip("evenodd");
    g.beginPath();
    g.fillStyle = clr3;
    g.moveTo(0, 0);
    g.arc(0, 0, 0.45, 0, th);
    g.lineTo(0, 0);
    g.fill();
    g.strokeStyle = "rgb(141,154,196)";
    g.stroke();
    g.restore();
  }
  set value(percent) {
    this._value = percent;
    this.flagRedraw();
  }
  get value() {
    return this._value;
  }
  startTimer() {
    if (this.timer !== void 0) {
      return;
    }
    this.focus();
    window.setInterval(() => {
      if (!this.isConnected) {
        this.endTimer();
        return;
      }
      this.flagRedraw();
    }, 50);
  }
  endTimer() {
    if (this.timer !== void 0) {
      window.clearInterval(this.timer);
    }
    this.timer = void 0;
  }
  update() {
    if (!this.isConnected && this.timer) {
      this.endTimer();
    }
    let size = ~~(this.size * UIBase2.getDPI());
    if (size !== this.canvas.width) {
      this.setCSS();
    }
  }
  setCSS() {
    let c = this.canvas;
    let size = ~~(this.size * UIBase2.getDPI());
    if (c.width !== size) {
      c.width = c.height = size;
      size /= UIBase2.getDPI();
      c.style["width"] = size + "px";
      c.style["height"] = size + "px";
      c.style["display"] = "flex";
      this.style["width"] = size + "px";
      this.style["height"] = size + "px";
      this.draw();
    }
    this.style["display"] = "flex";
    this.style["align-items"] = "center";
    this.style["justify-content"] = "center";
    this.style["width"] = "100%";
    this.style["height"] = "100%";
  }
  static define() {
    return {
      tagname: "progress-circle-x"
    };
  }
};
UIBase2.register(ProgressCircle);

// scripts/path.ux/scripts/widgets/ui_lasttool.js
var LastKey = Symbol("LastToolPanelId");
var tool_idgen = 0;
function getLastToolStruct(ctx) {
  let ret = ctx.state._last_tool;
  if (!ret) {
    ret = ctx.toolstack.head;
  } else {
    let msg = "Passing the last tool to last-tool-panel via appstate._last_tool is deprecated;";
    msg += "\nctx.toolstack.head is now used instead.";
    console.warn(msg);
  }
  return ret;
}
__name(getLastToolStruct, "getLastToolStruct");
var last_tool_eventmap = [];
window.setInterval(() => {
  for (const entry of last_tool_eventmap) {
    const panel = entry.panel;
    if (!panel.isConnected || panel.hidden) {
      if (window.DEBUG && window.DEBUG.lastToolPanel) {
        console.log("Disconnecting last tool panel from toolstack.");
      }
      panel.unlinkEvents();
      panel.needsRebuild = true;
      break;
    }
  }
}, 500);
var LastToolPanel = class extends ColumnFrame {
  static {
    __name(this, "LastToolPanel");
  }
  constructor() {
    super();
    this.ignoreOnChange = false;
    this.on_change = null;
    this._tool_id = void 0;
    this.useDataPathUndo = false;
    this.needsRebuild = false;
  }
  init() {
    super.init();
    this.useDataPathUndo = false;
    this.rebuild();
  }
  /** client code can subclass and override this method */
  getToolStackHead(ctx) {
    let bad = ctx.toolstack.length === 0 || ctx.toolstack.cur >= ctx.toolstack.length;
    bad = bad || ctx.toolstack.cur < 0;
    bad = bad || ctx.toolstack[ctx.toolstack.cur].undoflag & UndoFlags.IS_UNDO_ROOT;
    if (bad) {
      return void 0;
    }
    return ctx.toolstack[ctx.toolstack.cur];
  }
  rebuild() {
    let ctx = this.ctx;
    if (ctx === void 0) {
      this._tool_id = -1;
      return;
    }
    this.needsRebuild = false;
    this.clear();
    this.label("Recent Command Settings");
    let tool = this.getToolStackHead(ctx);
    if (!tool) {
      this.setCSS();
      return;
    }
    let def = tool.constructor.tooldef();
    let name2 = def.uiname !== void 0 ? def.uiname : def.name;
    let panel = this.panel(def.uiname);
    this.on_change = () => {
      if (this.ignoreOnChange) {
        return;
      }
      if (tool.modalRunning) {
        return;
      }
      if (tool === ctx.toolstack.head) {
        this.ignoreOnChange = true;
        ctx.toolstack.rerun(tool);
        this.ignoreOnChange = false;
      } else {
        this.unlinkEvents();
      }
    };
    this.buildTool(ctx, tool, panel);
    this.flushUpdate();
    this.flushUpdate();
  }
  unlinkEvents() {
    for (const entry of Array.from(last_tool_eventmap)) {
      if (entry.panel === this || !entry.panel.isConnected) {
        entry.prop.off("change", entry.cb);
        last_tool_eventmap.remove(entry);
        if (entry.panel !== this) {
          entry.panel.needsRebuild = true;
        }
      }
    }
  }
  /** client code can subclass and override this method */
  buildTool(ctx, tool, panel) {
    if (tool.flag & ToolFlags.PRIVATE) {
      return;
    }
    this.unlinkEvents();
    this.last_tool = tool;
    panel.useDataPathUndo = false;
    for (let k in tool.inputs) {
      let prop = tool.inputs[k];
      if (prop.flag & (PropFlags.PRIVATE | PropFlags.READ_ONLY)) {
        continue;
      }
      prop.on("change", this.on_change);
      last_tool_eventmap.push({
        panel: this,
        cb: this.on_change,
        prop
      });
      let path = `last_tool.${k}`;
      let uiname = prop.uiname ?? ToolProperty2.makeUIName(k);
      panel.label(uiname);
      let packflag = 0;
      if (!(prop.flag & PropFlags.SIMPLE_SLIDER)) {
        packflag |= PackFlags.FORCE_ROLLER_SLIDER;
      }
      let ret = panel.prop(path, packflag);
      if (ret) {
      }
    }
    this.setCSS();
  }
  update() {
    super.update();
    let ctx = this.ctx;
    if (!ctx) {
      return;
    }
    let tool = this.getToolStackHead(ctx);
    this.needsRebuild |= tool && (!(LastKey in tool) || tool[LastKey] !== this._tool_id);
    if (this.needsRebuild) {
      tool[LastKey] = tool_idgen++;
      this._tool_id = tool[LastKey];
      this.rebuild();
    }
  }
  static define() {
    return {
      tagname: "last-tool-panel-x"
    };
  }
};
UIBase2.internalRegister(LastToolPanel);

// scripts/path.ux/scripts/platforms/platform.js
var platform_exports = {};
__export(platform_exports, {
  getPlatformAsync: () => getPlatformAsync,
  platform: () => platform
});
var promise;
if (window.haveElectron) {
  promise = import("./electron_api-HNYB53RJ.js");
} else {
  promise = import("./web_api-NR63DXSL.js");
}
var platform;
promise.then((module) => {
  platform = module.platform;
  promise = void 0;
});
function getPlatformAsync() {
  if (promise) {
    return new Promise((accept, reject) => {
      promise.then((mod) => {
        accept(mod.platform);
      });
    });
  }
  return new Promise((accept, reject) => {
    accept(platform);
  });
}
__name(getPlatformAsync, "getPlatformAsync");

// scripts/path.ux/scripts/util/ScreenOverdraw.js
var SVG_URL = "http://www.w3.org/2000/svg";
var Vector29 = Vector2;
var CanvasOverdraw = class extends UIBase2 {
  static {
    __name(this, "CanvasOverdraw");
  }
  constructor() {
    super();
    this.canvas = document.createElement("canvas");
    this.shadow.appendChild(this.canvas);
    this.g = this.canvas.getContext("2d");
    this.screen = void 0;
    this.shapes = [];
    this.otherChildren = [];
    this.font = void 0;
    let style = document.createElement("style");
    style.textContent = `
      .overdrawx {
        pointer-events : none;
      }
    `;
    this.shadow.appendChild(style);
  }
  static define() {
    return {
      tagname: "screen-overdraw-canvas-x"
    };
  }
  startNode(node, screen) {
    if (screen) {
      this.screen = screen;
      this.ctx = screen.ctx;
    }
    if (!this.parentNode) {
      node.appendChild(this);
    }
    this.style["display"] = "float";
    this.style["z-index"] = this.zindex_base;
    this.style["position"] = "absolute";
    this.style["left"] = "0px";
    this.style["top"] = "0px";
    this.style["width"] = "100%";
    this.style["height"] = "100%";
    this.style["pointer-events"] = "none";
    this.svg = document.createElementNS(SVG_URL, "svg");
    this.svg.style["width"] = "100%";
    this.svg.style["height"] = "100%";
    this.svg.style["pointer-events"] = "none";
    this.shadow.appendChild(this.svg);
  }
  start(screen) {
    this.screen = screen;
    this.ctx = screen.ctx;
    screen.parentNode.appendChild(this);
    this.style["display"] = "float";
    this.style["z-index"] = this.zindex_base;
    this.style["position"] = "absolute";
    this.style["left"] = "0px";
    this.style["top"] = "0px";
    this.style["width"] = screen.size[0] + "px";
    this.style["height"] = screen.size[1] + "px";
    this.style["pointer-events"] = "none";
    this.svg = document.createElementNS(SVG_URL, "svg");
    this.svg.style["width"] = "100%";
    this.svg.style["height"] = "100%";
    this.shadow.appendChild(this.svg);
  }
};
var Overdraw = class extends UIBase2 {
  static {
    __name(this, "Overdraw");
  }
  constructor() {
    super();
    this.visibleToPick = false;
    this.screen = void 0;
    this.shapes = [];
    this.otherChildren = [];
    this.font = void 0;
    let style = document.createElement("style");
    style.textContent = `
      .overdrawx {
        pointer-events : none;
      }
    `;
    this.shadow.appendChild(style);
    this.zindex_base = 1e3;
  }
  startNode(node, screen, cssPosition = "relative") {
    if (screen) {
      this.screen = screen;
      this.ctx = screen.ctx;
    }
    if (!this.parentNode) {
      node.appendChild(this);
    }
    this.style["z-index"] = this.zindex_base;
    this.style["position"] = cssPosition;
    this.style["margin"] = this.style["padding"] = "0px";
    this.style["width"] = "100%";
    this.style["height"] = "100%";
    this.style["pointer-events"] = "none";
    this.svg = document.createElementNS(SVG_URL, "svg");
    this.svg.style["width"] = "100%";
    this.svg.style["height"] = "100%";
    this.svg.style["pointer-events"] = "none";
    this.shadow.appendChild(this.svg);
  }
  start(screen) {
    this.screen = screen;
    this.ctx = screen.ctx;
    screen.parentNode.appendChild(this);
    this.style["display"] = "float";
    this.style["z-index"] = this.zindex_base;
    this.style["position"] = "absolute";
    this.style["left"] = "0px";
    this.style["top"] = "0px";
    this.style["width"] = screen.size[0] + "px";
    this.style["height"] = screen.size[1] + "px";
    this.style["pointer-events"] = "none";
    this.svg = document.createElementNS(SVG_URL, "svg");
    this.svg.style["width"] = "100%";
    this.svg.style["height"] = "100%";
    this.shadow.appendChild(this.svg);
  }
  clear() {
    for (let child of list(this.svg.childNodes)) {
      child.remove();
    }
    for (let child of this.otherChildren) {
      child.remove();
    }
    this.otherChildren.length = 0;
  }
  drawTextBubbles(texts, cos, colors) {
    let boxes = [];
    let elems = [];
    let cent = new Vector29();
    for (let i = 0; i < texts.length; i++) {
      let co = cos[i];
      let text2 = texts[i];
      let color;
      if (colors !== void 0) {
        color = colors[i];
      }
      cent.add(co);
      let box = this.text(texts[i], co[0], co[1], { color });
      boxes.push(box);
      let font = box.style["font"];
      let pat = /[0-9]+px/;
      let size = font.match(pat)[0];
      if (size === void 0) {
        size = this.getDefault("DefaultText").size;
      } else {
        size = parsepx2(size);
      }
      let tsize = measureTextBlock(this, text2, void 0, void 0, size, font);
      box.minsize = [
        ~~tsize.width,
        ~~tsize.height
      ];
      let pad = parsepx2(box.style["padding"]);
      box.minsize[0] += pad * 2;
      box.minsize[1] += pad * 2;
      let x = parsepx2(box.style["left"]);
      let y = parsepx2(box.style["top"]);
      box.grads = new Array(4);
      box.params = [x, y, box.minsize[0], box.minsize[1]];
      box.startpos = new Vector29([x, y]);
      box.setCSS = function() {
        this.style["padding"] = "0px";
        this.style["margin"] = "0px";
        this.style["left"] = ~~this.params[0] + "px";
        this.style["top"] = ~~this.params[1] + "px";
        this.style["width"] = ~~this.params[2] + "px";
        this.style["height"] = ~~this.params[3] + "px";
      };
      box.setCSS();
      elems.push(box);
    }
    if (boxes.length === 0) {
      return;
    }
    cent.mulScalar(1 / boxes.length);
    function error2() {
      let p1 = [0, 0], p2 = [0, 0];
      let s1 = [0, 0], s2 = [0, 0];
      let ret = 0;
      for (let box1 of boxes) {
        for (let box2 of boxes) {
          if (box2 === box1) {
            continue;
          }
          s1[0] = box1.params[2];
          s1[1] = box1.params[3];
          s2[0] = box2.params[2];
          s2[1] = box2.params[3];
          let overlap = aabb_overlap_area(box1.params, s1, box2.params, s2);
          ret += overlap;
        }
        ret += box1.startpos.vectorDistance(box1.params) * 0.25;
      }
      return ret;
    }
    __name(error2, "error");
    function solve() {
      let r1 = error2();
      if (r1 === 0) {
        return;
      }
      let df = 1e-4;
      let totgs = 0;
      for (let box of boxes) {
        for (let i = 0; i < box.params.length; i++) {
          let orig = box.params[i];
          box.params[i] += df;
          let r2 = error2();
          box.params[i] = orig;
          box.grads[i] = (r2 - r1) / df;
          totgs += box.grads[i] ** 2;
        }
      }
      if (totgs === 0) {
        return;
      }
      r1 /= totgs;
      let k = 0.4;
      for (let box of boxes) {
        for (let i = 0; i < box.params.length; i++) {
          box.params[i] += -r1 * box.grads[i] * k;
        }
        box.params[2] = Math.max(box.params[2], box.minsize[0]);
        box.params[3] = Math.max(box.params[3], box.minsize[1]);
        box.setCSS();
      }
    }
    __name(solve, "solve");
    for (let i = 0; i < 15; i++) {
      solve();
    }
    for (let box of boxes) {
      elems.push(this.line(box.startpos, box.params));
    }
    return elems;
  }
  text(text2, x, y, args = {}) {
    args = Object.assign({}, args);
    if (args.font === void 0) {
      if (this.font !== void 0)
        args.font = this.font;
      else
        args.font = this.getDefault("DefaultText").genCSS();
    }
    if (!args["background-color"]) {
      args["background-color"] = "rgba(75, 75, 75, 0.75)";
    }
    args.color = args.color ? args.color : "white";
    if (typeof args.color === "object") {
      args.color = color2css2(args.color);
    }
    args["padding"] = args["padding"] === void 0 ? "5px" : args["padding"];
    args["border-color"] = args["border-color"] ? args["border-color"] : "grey";
    args["border-radius"] = args["border-radius"] ? args["border-radius"] : "25px";
    args["border-width"] = args["border-width"] !== void 0 ? args["border-width"] : "2px";
    if (typeof args["border-width"] === "number") {
      args["border-width"] = "" + args["border-width"] + "px";
    }
    if (typeof args["border-radius"] === "number") {
      args["border-radius"] = "" + args["border-radius"] + "px";
    }
    let box = document.createElement("div");
    box.setAttribute("class", "overdrawx");
    box.style["position"] = "fixed";
    box.style["width"] = "min-contents";
    box.style["height"] = "min-contents";
    box.style["border-width"] = args["border-width"];
    box.style["border-radius"] = "25px";
    box.style["pointer-events"] = "none";
    box.style["z-index"] = this.zindex_base + 1;
    box.style["background-color"] = args["background-color"];
    box.style["padding"] = args["padding"];
    box.style["left"] = x + "px";
    box.style["top"] = y + "px";
    box.style["display"] = "flex";
    box.style["justify-content"] = "center";
    box.style["align-items"] = "center";
    box.innerText = text2;
    box.style["font"] = args.font;
    box.style["color"] = args.color;
    this.otherChildren.push(box);
    this.shadow.appendChild(box);
    return box;
  }
  circle(p, r, stroke = "black", fill = "none") {
    let circle = document.createElementNS(SVG_URL, "circle");
    circle.setAttribute("cx", p[0]);
    circle.setAttribute("cy", p[1]);
    circle.setAttribute("r", r);
    if (fill) {
      circle.setAttribute("style", `stroke:${stroke};stroke-width:2;fill:${fill}`);
    } else {
      circle.setAttribute("style", `stroke:${stroke};stroke-width:2`);
    }
    this.svg.appendChild(circle);
    return circle;
  }
  line(v1, v2, color = "black") {
    let line = document.createElementNS(SVG_URL, "line");
    line.setAttribute("x1", v1[0]);
    line.setAttribute("y1", v1[1]);
    line.setAttribute("x2", v2[0]);
    line.setAttribute("y2", v2[1]);
    line.setAttribute("style", `stroke:${color};stroke-width:2`);
    this.svg.appendChild(line);
    return line;
  }
  rect(p, size, color = "black") {
    let line = document.createElementNS(SVG_URL, "rect");
    line.setAttribute("x", p[0]);
    line.setAttribute("y", p[1]);
    line.setAttribute("width", size[0]);
    line.setAttribute("height", size[1]);
    line.setAttribute("style", `fill:${color};stroke-width:2`);
    line.setColor = (color2) => {
      line.setAttribute("style", `fill:${color2};stroke-width:2`);
    };
    this.svg.appendChild(line);
    return line;
  }
  end() {
    this.clear();
    this.remove();
  }
  static define() {
    return {
      tagname: "overdraw-x",
      style: "overdraw"
    };
  }
};
UIBase2.internalRegister(Overdraw);

// scripts/path.ux/scripts/widgets/ui_treeview.js
var TreeItem = class extends Container {
  static {
    __name(this, "TreeItem");
  }
  constructor() {
    super();
    this.treeParent = void 0;
    this.treeChildren = [];
    this.treeView = void 0;
    this.treeDepth = 0;
    this.header = this.row();
    this._icon1 = this.header.iconbutton(Icons.TREE_COLLAPSE);
    this._icon1.iconsheet = 0;
    this._icon1.drawButtonBG = false;
    this._icon2 = void 0;
    this._icon1.onclick = () => {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    };
    this.opened = true;
    this._label = this.header.label("unlabeled");
    this._labelText = "unlabeled";
  }
  set icon(id2) {
    if (this._icon2) {
      this._icon2 = id2;
    } else {
      this._icon2 = UIBase2.createElement("icon-label-x");
      this._icon2.icon = id2;
      this._icon2.iconsheet = 0;
      this.header.insert(1, this._icon2);
    }
  }
  get icon() {
    if (this._icon2)
      return this._icon2.icon;
    else
      return -1;
  }
  open() {
    this._icon1.icon = Icons.TREE_COLLAPSE;
    this.opened = true;
    this.treeView._open(this);
  }
  close() {
    this._icon1.icon = Icons.TREE_EXPAND;
    this.opened = false;
    this.treeView._close(this);
  }
  set text(b) {
    if (typeof b === "string") {
      this._label.text = b;
      this._labelText = b;
    } else if (b instanceof HTMLElement) {
      this._label.remove();
      this.header.add(b);
      this._label = b;
      this._labelText = b;
    }
  }
  get text() {
    return this._labelText;
  }
  item(name2, args = {}) {
    args.treeParent = this;
    return this.parentWidget.item(name2, args);
  }
  init() {
    super.init();
  }
  static define() {
    return {
      tagname: "tree-item-x",
      style: "treeview"
    };
  }
};
UIBase2.internalRegister(TreeItem);
var TreeView = class extends Container {
  static {
    __name(this, "TreeView");
  }
  constructor() {
    super();
    this.items = [];
    this.strokes = [];
  }
  init() {
    super.init();
    this.style["display"] = "flex";
    this.style["flex-direction"] = "column";
    this.overdraw = UIBase2.createElement("overdraw-x");
    console.log(this.overdraw.startNode);
    this.overdraw.startNode(this);
    this.style["margin"] = this.style["padding"] = "0px";
    this.updateOverdraw();
  }
  _forAllChildren(item, cb) {
    let visit = /* @__PURE__ */ __name((n) => {
      cb(n);
      for (let c of n.treeChildren) {
        visit(c);
      }
    }, "visit");
    for (let c of item.treeChildren) {
      visit(c);
    }
  }
  _open(item) {
    this._forAllChildren(item, (c) => {
      if (c.opened) {
        c.unhide();
      }
    });
    this._makeStrokes();
  }
  _close(item) {
    this._forAllChildren(item, (c) => {
      c.hide();
    });
    this._makeStrokes();
  }
  _makeStrokes() {
    if (!this.overdraw) {
      return;
    }
    for (let elem2 of this.strokes) {
      elem2.remove();
    }
    this.strokes.length = 0;
    let hidden = /* @__PURE__ */ __name((item) => {
      return item.hidden;
      let p = item;
      while (p) {
        if (!p.opened)
          return true;
        p = p.treeParent;
      }
      return false;
    }, "hidden");
    let items = this.items;
    if (items.length == 0) {
      return;
    }
    this.overdraw.clear();
    let next = /* @__PURE__ */ __name((i2) => {
      i2++;
      while (i2 < items.length && hidden(items[i2])) {
        i2++;
        continue;
      }
      return i2;
    }, "next");
    let i = 0;
    if (hidden(items[i]))
      i = next(i);
    let origin = this.overdraw.getBoundingClientRect();
    let overdraw = this.overdraw;
    let line = /* @__PURE__ */ __name(function(x1, y1, x2, y2) {
      let ox = origin.x, oy = origin.y;
      x1 -= ox;
      y1 -= oy;
      x2 -= ox;
      y2 -= oy;
      overdraw.line([x1, y1], [x2, y2]);
    }, "line");
    console.log("making lines", i);
    let indent = this.getDefault("itemIndent");
    let rowh = this.getDefault("rowHeight");
    let getx = /* @__PURE__ */ __name((depth) => {
      return (depth + 2.2) * indent + origin.x;
    }, "getx");
    this.overdraw.style["z-index"] = "0";
    let prev = void 0;
    for (; i < items.length; i = next(i)) {
      let item = this.items[i];
      let item2 = next(i);
      item2 = item2 < items.length ? items[item2] : void 0;
      let r = item._icon1.getBoundingClientRect();
      if (!r) continue;
      let x1 = getx(item.treeDepth);
      let y1 = origin.y + (i + 1) * rowh - rowh * 0.25;
      if (item2 && item2.treeDepth > item.treeDepth) {
        let y2 = y1 + rowh * 0.75;
        line(x1, y1, x1, y2);
        line(x1, y2, getx(item2.treeDepth) - 3, y2);
      } else if (item2 && item2.treeDepth === item.treeDepth) {
        line(x1, y1, x1, y1 + rowh * 0.5);
      }
      prev = item;
    }
  }
  updateOverdraw() {
    let mm = new MinMax(2);
    let ok = false;
    for (let item of this.items) {
      if (item.hidden) {
      }
      for (let r2 of item.getClientRects()) {
        mm.minmax([r2.x, r2.y]);
        mm.minmax([r2.x + r2.width, r2.y + r2.height]);
        ok = true;
      }
    }
    if (!ok) {
      return;
    }
    let r = this.getClientRects()[0];
    if (!r) return;
    let x = r.left;
    let y = r.top;
    let od = this.overdraw;
    let w = mm.max[0] - mm.min[0];
    let h = mm.max[1] - mm.min[1];
    od.style["margin"] = "0px";
    od.style["padding"] = "0px";
    od.svg.style["margin"] = "0px";
    od.style["position"] = UIBase2.PositionKey;
    od.style["width"] = r.width - 1 + "px";
    od.style["height"] = r.height - 1 + "px";
    od.style["left"] = x + "px";
    od.style["top"] = y + "px";
  }
  update() {
    super.update();
    this.updateOverdraw();
  }
  item(name2, args = { icon: void 0 }) {
    let ret = UIBase2.createElement("tree-item-x");
    this.add(ret);
    ret._init();
    ret.text = name2;
    if (args.icon) {
      ret.icon = args.icon;
    }
    ret.treeParent = args.treeParent;
    ret.treeView = this;
    ret.style["max-height"] = this.getDefault("rowHeight") + "px";
    if (ret.treeParent) {
      ret.treeParent.treeChildren.push(ret);
      ret.treeDepth = ret.treeParent.treeDepth + 1;
    }
    let p = ret.treeParent;
    let i = 1;
    while (p) {
      p = p.treeParent;
      i++;
    }
    ret.style["margin-left"] = i * this.getDefault("itemIndent") + "px";
    this.items.push(ret);
    this.doOnce(() => {
      this._makeStrokes();
    });
    return ret;
  }
  static define() {
    return {
      tagname: "tree-view-x",
      style: "treeview"
    };
  }
};
UIBase2.internalRegister(TreeView);

// scripts/path.ux/scripts/widgets/dragbox.js
function startDrag(box) {
  if (box._modal) {
    popModalLight(box._modal);
    box._modal = void 0;
    return;
  }
  let first = true;
  let lastx = 0;
  let lasty = 0;
  let handlers = {
    on_mousemove(e) {
      let x = e.x, y = e.y;
      if (first) {
        lastx = x;
        lasty = y;
        first = false;
        return;
      }
      let dx = x - lastx;
      let dy = y - lasty;
      let hx = parsepx2(box.style["left"]);
      let hy = parsepx2(box.style["top"]);
      hx += dx;
      hy += dy;
      console.log(hx, hy);
      box.style["left"] = hx + "px";
      box.style["top"] = hy + "px";
      lastx = x;
      lasty = y;
    },
    end() {
      if (box._modal) {
        popModalLight(box._modal);
        box._modal = void 0;
      }
    },
    on_mouseup(e) {
      this.end();
    },
    on_keydown(e) {
      switch (e.keyCode) {
        case keymap["Escape"]:
        case keymap["Return"]:
          this.end();
          break;
      }
    }
  };
  box._modal = pushModalLight(handlers);
}
__name(startDrag, "startDrag");
var DragBox = class extends Container {
  static {
    __name(this, "DragBox");
  }
  constructor() {
    super();
    this._done = false;
    this.header = UIBase2.createElement("rowframe-x");
    this.contents = UIBase2.createElement("container-x");
    this.header.style["border-radius"] = "20px";
    this.header.parentWidget = this;
    this.contents.parentWidget = this;
    this.shadow.appendChild(this.header);
    this.shadow.appendChild(this.contents);
  }
  init() {
    super.init();
    let header = this.header;
    header.ctx = this.ctx;
    this.contents.ctx = this.ctx;
    header._init();
    this.contents._init();
    this.style["min-width"] = "350px";
    header.style["height"] = "35px";
    let icon = header.iconbutton(Icons.DELETE, "Hide", () => {
      this.end();
    });
    icon.iconsheet = 0;
    this.addEventListener("mousedown", (e) => {
      console.log("start drag");
      startDrag(this);
      e.preventDefault();
    }, { capture: false });
    header.background = this.getDefault("background-color");
    this.setCSS();
  }
  add() {
    return this.contents.add(...arguments);
  }
  prepend(n) {
    return this.contents.prepend(n);
  }
  appendChild(n) {
    return this.contents.appendChild(n);
  }
  col() {
    return this.contents.col(...arguments);
  }
  row() {
    return this.contents.row(...arguments);
  }
  strip() {
    return this.contents.strip(...arguments);
  }
  button() {
    return this.contents.button(...arguments);
  }
  iconbutton() {
    return this.contents.iconbutton(...arguments);
  }
  iconcheck() {
    return this.contents.iconcheck(...arguments);
  }
  tool() {
    return this.contents.tool(...arguments);
  }
  menu() {
    return this.contents.menu(...arguments);
  }
  prop() {
    return this.contents.prop(...arguments);
  }
  listenum() {
    return this.contents.listenum(...arguments);
  }
  check() {
    return this.contents.check(...arguments);
  }
  iconenum() {
    return this.contents.iconenum(...arguments);
  }
  slider() {
    return this.contents.slider(...arguments);
  }
  simpleslider() {
    return this.contents.simpleslider(...arguments);
  }
  curve() {
    return this.contents.curve(...arguments);
  }
  textbox() {
    return this.contents.textbox(...arguments);
  }
  textarea() {
    return this.contents.textarea(...arguments);
  }
  viewer() {
    return this.contents.viewer(...arguments);
  }
  panel() {
    return this.contents.panel(...arguments);
  }
  tabs() {
    return this.contents.tabs(...arguments);
  }
  table() {
    return this.contents.table(...arguments);
  }
  end() {
    if (this._done) {
      return;
    }
    this.remove();
    if (this._onend) {
      this._onend();
    }
    if (this.onend) {
      this.onend();
    }
  }
  setCSS() {
    super.setCSS();
    this.background = this.getDefault("background-color");
  }
  static define() {
    return {
      tagname: "drag-box-x",
      style: "panel"
    };
  }
};
UIBase2.internalRegister(DragBox);

// scripts/path.ux/scripts/screen/AreaDocker.js
var ignore = 0;
function dockerdebug() {
  if (const_default.DEBUG.areadocker) {
    console.warn(...arguments);
  }
}
__name(dockerdebug, "dockerdebug");
window.testSnapScreenVerts = function(arg) {
  let screen = CTX.screen;
  screen.unlisten();
  screen.on_resize([screen.size[0] - 75, screen.size[1]], screen.size);
  screen.on_resize = screen.updateSize = () => {
  };
  let p = CTX.propsbar;
  p.pos[0] += 50;
  p.owning_sarea.loadFromPosSize();
  screen.regenBorders();
  screen.size[0] = window.innerWidth - 5;
  screen.snapScreenVerts(arg);
};
var AreaDocker = class extends Container {
  static {
    __name(this, "AreaDocker");
  }
  constructor() {
    super();
    this._last_update_key = void 0;
    this.mpos = new Vector2();
    this.needsRebuild = true;
    this.ignoreChange = 0;
  }
  static define() {
    return {
      tagname: "area-docker-x",
      style: "areadocker"
    };
  }
  rebuild() {
    if (!this.parentWidget) {
      return;
    }
    let sarea = this.getArea().parentWidget;
    if (!sarea) {
      this.needsRebuild = true;
      return;
    }
    this.needsRebuild = false;
    this.ignoreChange++;
    dockerdebug("Rebuild", this.getArea());
    let uidata = sarea.switcherData = saveUIData(this, "switcherTabs");
    this.clear();
    let tabs = this.tbar = this.tabs();
    tabs.onchange = this.tab_onchange.bind(this);
    let tab;
    dockerdebug(sarea._id, sarea.area ? sarea.area._id : "(no active area)", sarea.editors);
    sarea.switcherData = uidata;
    for (let editor of sarea.editors) {
      let def = editor.constructor.define();
      let name2 = def.uiname;
      if (!name2) {
        name2 = def.areaname || def.tagname.replace(/-x/, "");
        name2 = ToolProperty.makeUIName(name2);
      }
      let tab2 = tabs.tab(name2, editor._id);
      let start_mpos = new Vector2();
      let mpos = new Vector2();
      tab2._tab.addEventListener("tabdragstart", (e) => {
        if (e.x !== 0 && e.y !== 0) {
          start_mpos.loadXY(e.x, e.y);
          this.mpos.loadXY(e.x, e.y);
        } else {
          start_mpos.load(this.mpos);
        }
        dockerdebug("tab drag start!", start_mpos, e);
      });
      tab2._tab.addEventListener("tabdragmove", (e) => {
        this.mpos.loadXY(e.x, e.y);
        let rect = this.tbar.tbar.canvas.getBoundingClientRect();
        let x = e.x, y = e.y;
        let m = 8;
        if (x < rect.x - m || x > rect.x + rect.width + m || y < rect.y - m || y >= rect.y + rect.height + m) {
          dockerdebug("tab detach!");
          e.preventDefault();
          this.detach(e);
        }
      });
      tab2._tab.addEventListener("tabdragend", (e) => {
        this.mpos.loadXY(e.x, e.y);
        dockerdebug("tab drag end!", e);
      });
    }
    tab = this.tbar.icontab(Icons.SMALL_PLUS, "add", "Add Editor", false).noSwitch();
    dockerdebug("Add Menu Tab", tab);
    let icon = this.addicon = tab._tab;
    icon.ontabclick = (e) => this.on_addclick(e);
    icon.setAttribute("menu-button", "true");
    icon.setAttribute("simple", "true");
    this.loadTabData(uidata);
    this.ignoreChange--;
  }
  detach(event) {
    this.tbar._ensureNoModal();
    let area = this.getArea();
    let sarea = this.ctx.screen.floatArea(area);
    sarea.size.min([300, 300]);
    sarea.loadFromPosSize();
    let mpos = event ? new Vector2([event.x, event.y]) : this.mpos;
    dockerdebug("EVENT", event);
    if (event && event instanceof PointerEvent) {
      this.ctx.screen.moveAttachTool(sarea, mpos, document.body, event.pointerId);
    } else {
      this.ctx.screen.moveAttachTool(sarea, mpos);
    }
  }
  loadTabData(uidata) {
    this.ignoreChange++;
    loadUIData(this, uidata);
    this.ignoreChange--;
  }
  on_addclick(e) {
    let mpos = new Vector2([e.x, e.y]);
    if (this.addicon.menu && !this.addicon.menu.closed) {
      this.addicon.menu.close();
    } else {
      this.addTabMenu(e.target, mpos);
    }
  }
  tab_onchange(tab, event) {
    if (this.ignoreChange) {
      return;
    }
    dockerdebug("EVENT", event);
    if (event && (!(event instanceof PointerEvent) || event.pointerType === "mouse")) {
    }
    this.select(tab.id, event);
  }
  init() {
    super.init();
    this.style["touch-action"] = "none";
    this.addEventListener("pointermove", (e) => {
      this.mpos.loadXY(e.x, e.y);
    });
    this.rebuild();
  }
  setCSS() {
    super.setCSS();
  }
  getArea() {
    let p = this.parentWidget;
    let lastp = p;
    let name2 = UIBase2.getInternalName("screenarea-x");
    while (p && p.tagName.toLowerCase() !== name2) {
      lastp = p;
      p = p.parentWidget;
    }
    return lastp;
  }
  flagUpdate() {
    this.needsRebuild = true;
    return this;
  }
  update() {
    super.update();
    let active = this.tbar.getActive();
    let area = this.getArea();
    let key = this.parentWidget._id;
    for (let area2 of area.parentWidget.editors) {
      key += area2._id + ":";
    }
    if (key !== this._last_update_key) {
      this._last_update_key = key;
      this.needsRebuild = true;
    }
    if (this.needsRebuild) {
      this.rebuild();
      return;
    }
    if (this.addicon) {
      let tabs = this.tbar.tbar.tabs;
      let idx = tabs.indexOf(this.addicon);
      if (idx !== tabs.length - 1) {
        this.tbar.tbar.swapTabs(this.addicon, tabs[tabs.length - 1]);
      }
    }
    if (!active || active._id !== area._id) {
      this.ignoreChange++;
      try {
        this.tbar.setActive(area._id);
      } catch (error2) {
        print_stack2(error2);
        this.needsRebuild = true;
      }
      this.ignoreChange--;
    }
    window.tabs = this.tbar;
    this.ignoreChange = 0;
  }
  select(areaId, event) {
    dockerdebug("Tab Select!", areaId);
    this.ignoreChange++;
    let area = this.getArea();
    let sarea = area.parentWidget;
    let uidata = saveUIData(this.tbar, "switcherTabs");
    let newarea;
    for (let area2 of sarea.editors) {
      if (area2._id === areaId) {
        newarea = area2;
        sarea.switchEditor(area2.constructor);
        break;
      }
    }
    if (newarea === area || !newarea.switcher) {
      return;
    }
    sarea.flushSetCSS();
    sarea.flushUpdate();
    newarea = sarea.area;
    let parentw = area.switcher.parentWidget;
    let newparentw = newarea.switcher.parentWidget;
    let parent = area.switcher.parentNode;
    let newparent = newarea.switcher.parentNode;
    area.switcher = newarea.switcher;
    newarea.switcher = this;
    HTMLElement.prototype.remove.call(area.switcher);
    HTMLElement.prototype.remove.call(newarea.switcher);
    if (parent instanceof UIBase2) {
      parent.shadow.appendChild(area.switcher);
    } else {
      parent.appendChild(area.switcher);
    }
    if (newparent instanceof UIBase2) {
      newparent.shadow.prepend(newarea.switcher);
    } else {
      newparent.prepend(newarea.switcher);
    }
    area.switcher.parentWidget = parentw;
    newarea.switcher.parentWidget = newparentw;
    area.switcher.tbar._ensureNoModal();
    newarea.switcher.tbar._ensureNoModal();
    newarea.switcher.loadTabData(uidata);
    area.switcher.loadTabData(uidata);
    newarea.switcher.setCSS();
    newarea.switcher.update();
    if (event && (event instanceof PointerEvent || event instanceof MouseEvent || event instanceof TouchEvent)) {
      event.preventDefault();
      event.stopPropagation();
      newarea.switcher.tbar._startMove(void 0, event);
    }
    sarea.switcherData = uidata;
    this.ignoreChange--;
  }
  addTabMenu(tab, mpos) {
    let rect = tab.getClientRects()[0];
    dockerdebug(tab, tab.getClientRects());
    if (!mpos) {
      mpos = this.ctx.screen.mpos;
    }
    let menu = UIBase2.createElement("menu-x");
    menu.closeOnMouseUp = false;
    menu.ctx = this.ctx;
    menu._init();
    let prop = Area.makeAreasEnum();
    let sarea = this.getArea().parentWidget;
    if (!sarea) {
      return;
    }
    for (let k in Object.assign({}, prop.values)) {
      let ok = true;
      for (let area of sarea.editors) {
        if (area.constructor.define().uiname === k) {
          ok = false;
        }
      }
      if (!ok) {
        continue;
      }
      let icon = prop.iconmap[k];
      menu.addItemExtra(k, prop.values[k], void 0, icon);
    }
    if (!rect) {
      console.warn("no rect!");
      return;
    }
    dockerdebug(mpos[0], mpos[1], rect.x, rect.y);
    menu.onselect = (val) => {
      dockerdebug("menu select", val, this.getArea().parentWidget);
      this.addicon.menu = void 0;
      let sarea2 = this.getArea().parentWidget;
      if (sarea2) {
        let cls = areaclasses[val];
        this.ignoreChange++;
        let area, ud;
        try {
          let uidata = saveUIData(this.tbar, "switcherTabs");
          sarea2.switchEditor(cls);
          dockerdebug("switching", cls);
          area = sarea2.area;
          area._init();
          if (area.switcher) {
            area.switcher.rebuild();
            area.switcher.loadTabData(uidata);
            sarea2.switcherData = uidata;
          }
        } catch (error2) {
          print_stack2(error2);
          throw error2;
        } finally {
          this.ignoreChange = Math.max(this.ignoreChange - 1, 0);
        }
        dockerdebug("AREA", area.switcher, area);
        if (area.switcher) {
          this.ignoreChange++;
          try {
            area.parentWidget = sarea2;
            area.owning_sarea = sarea2;
            area.switcher.parentWidget = area;
            area.switcher.ctx = area.ctx;
            area.switcher._init();
            area.switcher.update();
            dockerdebug("loading data", ud);
            area.switcher.loadTabData(ud);
            area.switcher.rebuild();
            area.flushUpdate();
          } catch (error2) {
            throw error2;
          } finally {
            this.ignoreChange = Math.max(this.ignoreChange - 1, 0);
          }
        }
      }
    };
    this.addicon.menu = menu;
    startMenu(menu, mpos[0] - 35, rect.y + rect.height, false, 0);
    return menu;
  }
};
UIBase2.internalRegister(AreaDocker);

// scripts/path.ux/scripts/widgets/ui_dialog.js
function makePopupArea(area_class, screen, args = {}) {
  let sarea = UIBase.createElement("screenarea-x");
  let width = args.width || screen.size[0] * 0.7;
  let height = args.height || screen.size[1] * 0.7;
  let addEscapeKeyHandler = args.addEscapeKeyHandler !== void 0 ? args.addEscapeKeyHandler : true;
  sarea.ctx = screen.ctx;
  sarea.size[0] = width;
  sarea.size[1] = height;
  sarea.pos[0] = 100;
  sarea.pos[1] = 100;
  sarea.pos[0] = Math.min(sarea.pos[0], screen.size[0] - sarea.size[0] - 2);
  sarea.pos[1] = Math.min(sarea.pos[1], screen.size[1] - sarea.size[1] - 2);
  sarea.switch_editor(area_class);
  sarea.overrideClass("popup");
  sarea.style["background-color"] = sarea.getDefault("background-color");
  sarea.style["border-radius"] = sarea.getDefault("border-radius") + "px";
  sarea.style["border-color"] = sarea.getDefault("border-color");
  sarea.style["border-style"] = sarea.getDefault("border-style");
  sarea.style["border-width"] = sarea.getDefault("border-width") + "px";
  sarea.flag |= AreaFlags.FLOATING | AreaFlags.INDEPENDENT;
  screen.appendChild(sarea);
  sarea.setCSS();
  if (addEscapeKeyHandler) {
    sarea.on_keydown = (e) => {
      if (e.keyCode === keymap.Escape) {
        screen.removeArea(sarea);
      }
    };
  }
  sarea.bringToFront();
  return sarea;
}
__name(makePopupArea, "makePopupArea");

// scripts/path.ux/scripts/screen/FrameManager.js
var _FrameManager = void 0;
var Area2 = Area;
function list3(iter) {
  let ret = [];
  for (let item of iter) {
    ret.push(item);
  }
  return ret;
}
__name(list3, "list");
startMenuEventWrangling();
var _events_started = false;
function registerToolStackGetter2(func2) {
  registerToolStackGetter(func2);
}
__name(registerToolStackGetter2, "registerToolStackGetter");
var Vector210 = Vector2, UIBase14 = UIBase2, styleScrollBars2 = styleScrollBars;
var update_stack = new Array(8192);
update_stack.cur = 0;
var screen_idgen = 0;
function purgeUpdateStack() {
  for (let i = 0; i < update_stack.length; i++) {
    update_stack[i] = void 0;
  }
}
__name(purgeUpdateStack, "purgeUpdateStack");
var Screen2 = class extends UIBase2 {
  static {
    __name(this, "Screen");
  }
  constructor() {
    super();
    this.snapLimit = 1;
    this.fullScreen = true;
    this.globalCSS = document.createElement("style");
    this.shadow.prepend(this.globalCSS);
    this._do_updateSize = true;
    this._resize_callbacks = [];
    this.allBordersMovable = const_default.DEBUG.allBordersMovable;
    this.needsBorderRegen = true;
    this._popup_safe = 0;
    this.testAllKeyMaps = false;
    this.needsTabRecalc = true;
    this._screen_id = screen_idgen++;
    this._popups = [];
    this._ctx = void 0;
    this.keymap = new KeyMap();
    this.size = new Vector210([window.innerWidth, window.innerHeight]);
    this.pos = new Vector210();
    this.oldpos = new Vector210();
    this.idgen = 0;
    this.sareas = [];
    this.sareas.active = void 0;
    this.mpos = [0, 0];
    this.screenborders = [];
    this.screenverts = [];
    this._vertmap = {};
    this._edgemap = {};
    this._idmap = {};
    this._aabb = [new Vector210(), new Vector210()];
    let on_mousemove = /* @__PURE__ */ __name((e, x, y) => {
      let dragging = e.type === "mousemove" || e.type === "touchmove" || e.type === "pointermove";
      dragging = dragging && (e.buttons || e.touches && e.touches.length > 0);
      if (!dragging && Math.random() > 0.9) {
        let elem2 = this.pickElement(x, y, {
          sx: 1,
          sy: 1,
          nodeclass: ScreenArea,
          mouseEvent: e
        });
        if (0) {
          let elem22 = this.pickElement(x, y, 1, 1);
          console.log("" + this.sareas.active, elem22 ? elem22.tagName : void 0, elem2 !== void 0);
        }
        if (elem2 !== void 0) {
          if (elem2.area) {
            elem2.area.push_ctx_active();
            elem2.area.pop_ctx_active();
          }
          this.sareas.active = elem2;
        }
      }
      this.mpos[0] = x;
      this.mpos[1] = y;
    }, "on_mousemove");
    this.shadow.addEventListener("mousemove", (e) => {
      return on_mousemove(e, e.x, e.y);
    }, { passive: true });
  }
  get borders() {
    let this2 = this;
    return function* () {
      for (let k in this2._edgemap) {
        yield this2._edgemap[k];
      }
    }();
  }
  get listening() {
    return this.listen_timer !== void 0;
  }
  get ctx() {
    return this._ctx;
  }
  set ctx(val) {
    this._ctx = val;
    let rec = /* @__PURE__ */ __name((n) => {
      if (n instanceof UIBase14) {
        n.ctx = val;
      }
      for (let n2 of n.childNodes) {
        rec(n2);
      }
      if (n.shadow) {
        for (let n2 of n.shadow.childNodes) {
          rec(n2);
        }
      }
    }, "rec");
    for (let n of this.childNodes) {
      rec(n);
    }
    for (let n of this.shadow.childNodes) {
      rec(n);
    }
  }
  static fromJSON(obj, schedule_resize = false) {
    let ret = UIBase14.createElement(this.define().tagname);
    return ret.loadJSON(obj, schedule_resize);
  }
  static define() {
    return {
      tagname: "pathux-screen-x"
    };
  }
  static newSTRUCT() {
    return UIBase14.createElement(this.define().tagname);
  }
  setPosSize(x, y, w, h) {
    this.pos[0] = x;
    this.pos[1] = y;
    this.size[0] = w;
    this.size[1] = h;
    this.setCSS();
    this._internalRegenAll();
  }
  setSize(w, h) {
    this.size[0] = w;
    this.size[1] = h;
    this.setCSS();
    this._internalRegenAll();
  }
  setPos(x, y) {
    this.pos[0] = x;
    this.pos[1] = y;
    this.setCSS();
    this._internalRegenAll();
  }
  init() {
    super.init();
    if (this.hasAttribute("listen")) {
      this.listen();
    }
  }
  /**
   *
   * @param {*} style May be a string, a CSSStyleSheet instance, or a style tag
   * @returns Promise fulfilled when style has been merged
   */
  mergeGlobalCSS(style) {
    return new Promise((accept, reject) => {
      let sheet;
      let finish = /* @__PURE__ */ __name(() => {
        let sheet2 = this.globalCSS.sheet;
        if (!sheet2) {
          this.doOnce(finish);
          return;
        }
        let map = {};
        for (let rule of sheet2.rules) {
          map[rule.selectorText] = rule;
        }
        for (let rule of sheet.rules) {
          let k = rule.selectorText;
          if (k in map) {
            let rule2 = map[k];
            if (!rule.styleMap) {
              for (let k2 in rule.style) {
                let desc = Object.getOwnPropertyDescriptor(rule.style, k2);
                if (!desc || !desc.writable) {
                  continue;
                }
                let v = rule.style[k2];
                if (v) {
                  rule2.style[k2] = rule.style[k2];
                }
              }
              continue;
            }
            for (let [key, val] of list3(rule.styleMap.entries())) {
              if (1) {
                let sval = "";
                if (Array.isArray(val)) {
                  for (let item of val) {
                    sval += " " + val;
                  }
                  sval = sval.trim();
                } else {
                  sval = ("" + val).trim();
                }
                rule2.style[key] = sval;
                rule2.styleMap.set(key, val);
              } else {
                rule2.styleMap.append(key, val);
              }
            }
          } else {
            sheet2.insertRule(rule.cssText);
          }
        }
      }, "finish");
      if (typeof style === "string") {
        try {
          sheet = new CSSStyleSheet();
        } catch (error2) {
          sheet = void 0;
        }
        if (sheet && sheet.replaceSync) {
          sheet.replaceSync(style);
          finish();
        } else {
          let tag = document.createElement("style");
          tag.textContent = style;
          document.body.appendChild(tag);
          let cb = /* @__PURE__ */ __name(() => {
            if (!tag.sheet) {
              this.doOnce(cb);
              return;
            }
            sheet = tag.sheet;
            finish();
            tag.remove();
          }, "cb");
          this.doOnce(cb);
        }
      } else if (!(style instanceof CSSStyleSheet)) {
        sheet = style.sheet;
        finish();
      } else {
        sheet = style;
        finish();
      }
    });
  }
  newScreenArea() {
    let ret = UIBase14.createElement("screenarea-x");
    ret.ctx = this.ctx;
    if (ret.ctx) {
      ret.init();
    }
    return ret;
  }
  copy() {
    let ret = UIBase14.createElement(this.constructor.define().tagname);
    ret.ctx = this.ctx;
    ret._init();
    for (let sarea of this.sareas) {
      let sarea2 = sarea.copy(ret);
      sarea2._ctx = this.ctx;
      sarea2.screen = ret;
      sarea2.parentWidget = ret;
      ret.appendChild(sarea2);
    }
    for (let sarea of ret.sareas) {
      sarea.ctx = this.ctx;
      sarea.area.ctx = this.ctx;
      sarea.area.push_ctx_active();
      sarea._init();
      sarea.area._init();
      sarea.area.pop_ctx_active();
      for (let area of sarea.editors) {
        area.ctx = this.ctx;
        area.push_ctx_active();
        area._init();
        area.pop_ctx_active();
      }
    }
    ret.update();
    ret.regenBorders();
    ret.setCSS();
    return ret;
  }
  findScreenArea(x, y) {
    for (let i = this.sareas.length - 1; i >= 0; i--) {
      let sarea = this.sareas[i];
      let ok = x >= sarea.pos[0] && x <= sarea.pos[0] + sarea.size[0];
      ok = ok && (y >= sarea.pos[1] && y <= sarea.pos[1] + sarea.size[1]);
      if (ok) {
        return sarea;
      }
    }
  }
  /**
   * @param x
   * @param y
   * @param args arguments : {sx, sy, nodeclass, excluded_classes}
   */
  pickElement(x, y, args, marginy, nodeclass, excluded_classes) {
    let marginx;
    if (typeof args === "object") {
      nodeclass = args.nodeclass;
      excluded_classes = args.excluded_classes;
    } else {
      args = {
        nodeclass,
        excluded_classes
      };
    }
    if (!this.ctx) {
      console.warn("no ctx in screen");
      return;
    }
    let ret;
    for (let i = this._popups.length - 1; i >= 0; i--) {
      let popup = this._popups[i];
      ret = ret || popup.pickElement(x, y, args);
    }
    ret = ret || super.pickElement(x, y, args);
    return ret;
  }
  _enterPopupSafe() {
    if (this._popup_safe === void 0) {
      this._popup_safe = 0;
    }
    this._popup_safe++;
  }
  *_allAreas() {
    for (let sarea of this.sareas) {
      for (let area of sarea.editors) {
        yield [area, area._area_id, sarea];
      }
    }
  }
  _exitPopupSafe() {
    this._popup_safe = Math.max(this._popup_safe - 1, 0);
  }
  popupMenu(menu, x, y) {
    startMenu(menu, x, y);
    for (let i = 0; i < 3; i++) {
      menu.flushSetCSS();
      menu.flushUpdate();
    }
    return menu;
  }
  /**
   *
   * @param popupDelay : if non-zero, wait for popup to layout for popupDelay miliseconds,
   *                     then move the popup so it's fully inside the window (if it's outsize).
   *
   * */
  popup(owning_node, elem_or_x, y, closeOnMouseOut = true, popupDelay = 5) {
    let ret = this._popup(...arguments);
    for (let i = 0; i < 2; i++) {
      ret.flushUpdate();
      ret.flushSetCSS();
    }
    if (popupDelay === 0) {
      return ret;
    }
    let z = ret.style["z-index"];
    ret.style["z-index"] = "-10";
    let cb = /* @__PURE__ */ __name(() => {
      let rect = ret.getClientRects()[0];
      let size = this.size;
      if (!rect) {
        this.doOnce(cb);
        return;
      }
      if (rect.bottom > size[1]) {
        ret.style["top"] = size[1] - rect.height - 10 + "px";
      } else if (rect.top < 0) {
        ret.style["top"] = "10px";
      }
      if (rect.right > size[0]) {
        ret.style["left"] = size[0] - rect.width - 10 + "px";
      } else if (rect.left < 0) {
        ret.style["left"] = "10px";
      }
      ret.style["z-index"] = z;
      ret.flushUpdate();
      ret.flushSetCSS();
    }, "cb");
    setTimeout(cb, popupDelay);
    return ret;
  }
  draggablePopup(x, y) {
    let ret = UIBase14.createElement("drag-box-x");
    ret.ctx = this.ctx;
    ret.parentWidget = this;
    ret._init();
    this._popups.push(ret);
    ret._onend = () => {
      if (this._popups.indexOf(ret) >= 0) {
        this._popups.remove(ret);
      }
    };
    ret.style["z-index"] = 205;
    ret.style["position"] = UIBase14.PositionKey;
    ret.style["left"] = x + "px";
    ret.style["top"] = y + "px";
    document.body.appendChild(ret);
    return ret;
  }
  /** makes a popup at x,y and returns a new container-x for it */
  _popup(owning_node, elem_or_x, y, closeOnMouseOut = true) {
    let x;
    let sarea = this.sareas.active;
    let w = owning_node;
    while (w) {
      if (w instanceof ScreenArea) {
        sarea = w;
        break;
      }
      w = w.parentWidget;
    }
    if (typeof elem_or_x === "object") {
      let r = elem_or_x.getClientRects()[0];
      x = r.x;
      y = r.y;
    } else {
      x = elem_or_x;
    }
    x += window.scrollX;
    y += window.scrollY;
    let container = UIBase14.createElement("container-x");
    container.ctx = this.ctx;
    container._init();
    let remove = container.remove;
    container.remove = () => {
      if (this._popups.indexOf(container) >= 0) {
        this._popups.remove(container);
      }
      return remove.apply(container, arguments);
    };
    container.overrideClass("popup");
    container.background = container.getDefault("background-color");
    container.style["border-radius"] = container.getDefault("border-radius") + "px";
    container.style["border-color"] = container.getDefault("border-color");
    container.style["border-style"] = container.getDefault("border-style");
    container.style["border-width"] = container.getDefault("border-width") + "px";
    container.style["box-shadow"] = container.getDefault("box-shadow");
    container.style["position"] = UIBase14.PositionKey;
    container.style["z-index"] = "2205";
    container.style["left"] = x + "px";
    container.style["top"] = y + "px";
    container.style["margin"] = "0px";
    container.parentWidget = this;
    let mm = new MinMax(2);
    let p = new Vector210();
    let _update = container.update;
    container.update.after(() => {
      container.style["z-index"] = "2205";
    });
    document.body.appendChild(container);
    this.setCSS();
    this._popups.push(container);
    let touchpick, mousepick, keydown;
    let done = false;
    let end = /* @__PURE__ */ __name(() => {
      if (this._popup_safe) {
        return;
      }
      if (done) return;
      this.ctx.screen.removeEventListener("mousedown", mousepick, true);
      this.ctx.screen.removeEventListener("mousemove", mousepick, { passive: true });
      this.ctx.screen.removeEventListener("mouseup", mousepick, true);
      window.removeEventListener("keydown", keydown);
      done = true;
      container.remove();
    }, "end");
    container.end = end;
    let _remove = container.remove;
    container.remove = function() {
      if (arguments.length == 0) {
        end();
      }
      _remove.apply(this, arguments);
    };
    container._ondestroy = () => {
      end();
    };
    let bad_time = time_ms();
    let last_pick_time = time_ms();
    mousepick = /* @__PURE__ */ __name((e, x2, y2, do_timeout = true) => {
      if (!container.isConnected) {
        end();
        return;
      }
      if (sarea && sarea.area) {
        sarea.area.push_ctx_active();
        sarea.area.pop_ctx_active();
      }
      if (time_ms() - last_pick_time < 350) {
        return;
      }
      last_pick_time = time_ms();
      x2 = x2 === void 0 ? e.x : x2;
      y2 = y2 === void 0 ? e.y : y2;
      let elem2 = this.pickElement(x2, y2, {
        sx: 2,
        sy: 2,
        excluded_classes: [ScreenBorder],
        mouseEvent: e
      });
      let startelem = elem2;
      if (elem2 === void 0) {
        if (closeOnMouseOut) {
          end();
        }
        return;
      }
      let ok = false;
      let elem22 = elem2;
      while (elem2) {
        if (elem2 === container) {
          ok = true;
          break;
        }
        elem2 = elem2.parentWidget;
      }
      if (!ok) {
        do_timeout = !do_timeout || time_ms() - bad_time > 100;
        if (closeOnMouseOut && do_timeout) {
          end();
        }
      } else {
        bad_time = time_ms();
      }
    }, "mousepick");
    touchpick = /* @__PURE__ */ __name((e) => {
      let x2 = e.touches[0].pageX, y2 = e.touches[0].pageY;
      return mousepick(e, x2, y2, false);
    }, "touchpick");
    keydown = /* @__PURE__ */ __name((e) => {
      if (!container.isConnected) {
        window.removeEventListener("keydown", keydown);
        return;
      }
      switch (e.keyCode) {
        case keymap["Escape"]:
          end();
          break;
      }
    }, "keydown");
    this.ctx.screen.addEventListener("mousedown", mousepick, true);
    this.ctx.screen.addEventListener("mousemove", mousepick, { passive: true });
    this.ctx.screen.addEventListener("mouseup", mousepick, true);
    window.addEventListener("keydown", keydown);
    this.calcTabOrder();
    return container;
  }
  _recalcAABB(save = true) {
    let mm = new MinMax(2);
    for (let v of this.screenverts) {
      mm.minmax(v);
    }
    if (save) {
      this._aabb[0].load(mm.min);
      this._aabb[1].load(mm.max);
    }
    return [new Vector210(mm.min), new Vector210(mm.max)];
  }
  //XXX look at if this is referenced anywhere
  load() {
  }
  //XXX look at if this is referenced anywhere
  save() {
  }
  popupArea(area_class) {
    return makePopupArea(area_class, this);
  }
  remove(trigger_destroy = true) {
    this.unlisten();
    if (trigger_destroy) {
      return super.remove();
    } else {
      HTMLElement.prototype.remove.call(this);
    }
  }
  unlisten() {
    if (this.listen_timer !== void 0) {
      window.clearInterval(this.listen_timer);
      this.listen_timer = void 0;
    }
  }
  checkCSSSize() {
    let w = this.style.width.toLowerCase().trim();
    let h = this.style.height.toLowerCase().trim();
    if (w.endsWith("px") && h.endsWith("px")) {
      w = parseFloat(w.slice(0, w.length - 2).trim());
      h = parseFloat(h.slice(0, h.length - 2).trim());
      if (w !== this.size[0] || h !== this.size[1]) {
        this.on_resize([this.size[0], this.size[1]], [w, h]);
        this.size[0] = w;
        this.size[1] = h;
      }
    }
  }
  getBoolAttribute(attr, defaultval = false) {
    if (!this.hasAttribute(attr)) {
      return defaultval;
    }
    let ret = this.getAttribute(attr);
    if (typeof ret === "number") {
      return !!ret;
    } else if (typeof ret === "string") {
      ret = ret.toLowerCase().trim();
      ret = ret === "true" || ret === "1" || ret === "yes";
    }
    return !!ret;
  }
  updateSize() {
    if (this.getBoolAttribute("inherit-scale") || !this.fullScreen || !const_default.autoSizeUpdate) {
      this.checkCSSSize();
      return;
    }
    let width = window.innerWidth;
    let height = window.innerHeight;
    let ratio = window.outerHeight / window.innerHeight;
    let scale = visualViewport.scale;
    let pad = 4;
    width = visualViewport.width * scale - pad;
    height = visualViewport.height * scale - pad;
    let ox = visualViewport.offsetLeft;
    let oy = visualViewport.offsetTop;
    if (const_default.DEBUG.customWindowSize) {
      let s = const_default.DEBUG.customWindowSize;
      width = s.width;
      height = s.height;
      ox = 0;
      oy = 0;
      window._DEBUG = const_default.DEBUG;
    }
    let key = this._calcSizeKey(width, height, ox, oy, devicePixelRatio, scale);
    document.body.style.margin = document.body.style.padding = "0px";
    document.body.style["transform-origin"] = "top left";
    document.body.style["transform"] = `translate(${ox}px,${oy}px) scale(${1 / scale})`;
    if (key !== this._last_ckey1) {
      this._last_ckey1 = key;
      this.on_resize(this.size, [width, height], false);
      this.on_resize(this.size, this.size, false);
      let scale2 = visualViewport.scale;
      this.regenBorders();
      this.setCSS();
      this.completeUpdate();
    }
  }
  listen(args = { updateSize: true }) {
    setWranglerScreen(this);
    let ctx = this.ctx;
    startEvents(() => ctx.screen);
    if (this.listen_timer !== void 0) {
      return;
    }
    this._do_updateSize = args.updateSize !== void 0 ? args.updateSize : true;
    this.listen_timer = window.setInterval(() => {
      if (this.isDead()) {
        console.log("dead screen");
        this.unlisten();
        return;
      }
      this.update();
    }, 150);
  }
  _calcSizeKey(w, h, x, y, dpi, scale) {
    if (arguments.length !== 6) {
      throw new Error("eek");
    }
    let s = "";
    for (let i = 0; i < arguments.length; i++) {
      s += arguments[i].toFixed(0) + ":";
    }
    return s;
  }
  _ondestroy() {
    if (getWranglerScreen() === this) {
    }
    this.unlisten();
    let recurse = /* @__PURE__ */ __name((n, second_pass, parent) => {
      if (n.__pass === second_pass) {
        console.warn("CYCLE IN DOM TREE!", n, parent);
        return;
      }
      n.__pass = second_pass;
      n._forEachChildWidget((n2) => {
        if (n === n2)
          return;
        recurse(n2, second_pass, n);
        try {
          if (!second_pass && !n2.__destroyed) {
            n2.__destroyed = true;
            n2._ondestroy();
          }
        } catch (error2) {
          print_stack(error2);
          console.log("failed to exectue an ondestroy callback");
        }
        n2.__destroyed = true;
        try {
          if (second_pass) {
            n2.remove();
          }
        } catch (error2) {
          print_stack(error2);
          console.log("failed to remove element after ondestroy callback");
        }
      });
    }, "recurse");
    let id2 = ~~(Math.random() * 1024 * 1024);
    recurse(this, id2);
    recurse(this, id2 + 1);
  }
  destroy() {
    this._ondestroy();
  }
  clear() {
    this._ondestroy();
    this.sareas = [];
    this.sareas.active = void 0;
    for (let child of list3(this.childNodes)) {
      child.remove();
    }
    for (let child of list3(this.shadow.childNodes)) {
      child.remove();
    }
  }
  _test_save() {
    let obj = JSON.parse(JSON.stringify(this));
    console.log(JSON.stringify(this));
    this.loadJSON(obj);
  }
  loadJSON(obj, schedule_resize = false) {
    this.clear();
    super.loadJSON();
    for (let sarea of obj.sareas) {
      let sarea2 = UIBase14.createElement("screenarea-x");
      sarea2.ctx = this.ctx;
      sarea2.screen = this;
      this.appendChild(sarea2);
      sarea2.loadJSON(sarea);
    }
    this.regenBorders();
    this.setCSS();
    if (schedule_resize) {
      window.setTimeout(() => {
        this.on_resize(this.size, [window.innerWidth, window.innerHeight]);
      }, 50);
    }
  }
  toJSON() {
    let ret = {
      sareas: this.sareas
    };
    ret.size = this.size;
    ret.idgen = this.idgen;
    return Object.assign(super.toJSON(), ret);
  }
  getHotKey(toolpath) {
    let test = /* @__PURE__ */ __name((keymap5) => {
      for (let hk of keymap5) {
        if (typeof hk.action != "string")
          continue;
        if (hk.action.trim().startsWith(toolpath.trim())) {
          return hk;
        }
      }
    }, "test");
    let ret = test(this.keymap);
    if (ret)
      return ret;
    if (this.sareas.active && this.sareas.active.keymap) {
      let area = this.sareas.active.area;
      for (let keymap5 of area.getKeyMaps()) {
        ret = test(keymap5);
        if (ret)
          return ret;
      }
    }
    if (ret === void 0) {
      for (let sarea of this.sareas) {
        let area = sarea.area;
        for (let keymap5 of area.getKeyMaps()) {
          ret = test(keymap5);
          if (ret) {
            return ret;
          }
        }
      }
    }
    return void 0;
  }
  addEventListener(type, cb, options) {
    if (type === "resize") {
      this._resize_callbacks.push(cb);
    } else {
      return super.addEventListener(type, cb, options);
    }
  }
  removeEventListener(type, cb, options) {
    if (type === "resize") {
      if (this._resize_callbacks.indexOf(cb) >= 0)
        this._resize_callbacks.remove(cb);
    } else {
      return super.removeEventListener(type, cb, options);
    }
  }
  execKeyMap(e) {
    let handled = false;
    if (window.DEBUG && window.DEBUG.keymap) {
      console.warn("execKeyMap called", e.keyCode, document.activeElement.tagName);
    }
    if (this.sareas.active) {
      let area = this.sareas.active.area;
      if (!area) {
        return;
      }
      area.push_ctx_active();
      for (let keymap5 of area.getKeyMaps()) {
        if (keymap5 === void 0) {
          continue;
        }
        if (keymap5.handle(area.ctx, e)) {
          handled = true;
          break;
        }
      }
      area.pop_ctx_active();
    }
    handled = handled || this.keymap.handle(this.ctx, e);
    if (!handled && this.testAllKeyMaps) {
      for (let sarea of this.sareas) {
        if (handled) {
          break;
        }
        sarea.area.push_ctx_active();
        for (let keymap5 of sarea.area.getKeyMaps()) {
          if (keymap5.handle(sarea.area.ctx, e)) {
            handled = true;
            break;
          }
        }
        sarea.area.pop_ctx_active();
      }
    }
    return handled;
  }
  calcTabOrder() {
    let nodes = [];
    let visit = {};
    let rec = /* @__PURE__ */ __name((n) => {
      let bad = n.tabIndex < 0 || n.tabIndex === void 0 || n.tabIndex === null;
      bad = bad || !(n instanceof UIBase14);
      if (n._id in visit || n.hidden) {
        return;
      }
      visit[n._id] = 1;
      if (!bad) {
        n.__pos = n.getClientRects()[0];
        if (n.__pos) {
          nodes.push(n);
        }
      }
      n._forEachChildWidget((n2) => {
        rec(n2);
      });
    }, "rec");
    for (let sarea of this.sareas) {
      rec(sarea);
    }
    for (let popup of this._popups) {
      rec(popup);
    }
    for (let i = 0; i < nodes.length; i++) {
      let n = nodes[i];
      n.tabIndex = i + 1;
    }
  }
  drawUpdate() {
    if (window.redraw_all !== void 0) {
      window.redraw_all();
    }
  }
  update() {
    let move = [];
    for (let child of this.childNodes) {
      if (child instanceof ScreenArea_exports) {
        move.push(child);
      }
    }
    for (let child of move) {
      console.warn("moved screen area to shadow");
      HTMLElement.prototype.remove.call(child);
      this.shadow.appendChild(child);
    }
    if (this._do_updateSize) {
      this.updateSize();
    }
    if (this.needsTabRecalc) {
      this.needsTabRecalc = false;
      this.calcTabOrder();
    }
    outer: for (let sarea of this.sareas) {
      for (let b of sarea._borders) {
        let movable = this.isBorderMovable(b);
        if (movable !== b.movable) {
          console.log("detected change in movable borders");
          this.regenBorders();
          break outer;
        }
      }
    }
    if (this._update_gen) {
      let ret;
      try {
        ret = this._update_gen.next();
      } catch (error2) {
        if (!(error2 instanceof DataPathError)) {
          print_stack2(error2);
          console.log("error in update_intern tasklet");
        }
        return;
      }
      if (ret !== void 0 && ret.done) {
        this._update_gen = void 0;
      }
    } else {
      this._update_gen = this.update_intern();
    }
  }
  purgeUpdateStack() {
    this._update_gen = void 0;
    purgeUpdateStack();
  }
  completeSetCSS() {
    let rec = /* @__PURE__ */ __name((n) => {
      n.setCSS();
      if (n.packflag & PackFlags.NO_UPDATE) {
        return;
      }
      n._forEachChildWidget((c) => {
        rec(c);
      });
    }, "rec");
    rec(this);
  }
  completeUpdate() {
    for (let step of this.update_intern()) {
    }
  }
  updateScrollStyling() {
    let s = theme.scrollbars;
    if (!s || !s.color) return;
    let key = "" + s.color + ":" + s.color2 + ":" + s.border + ":" + s.contrast + ":" + s.width;
    if (key !== this._last_scrollstyle_key) {
      this._last_scrollstyle_key = key;
      this.mergeGlobalCSS(styleScrollBars2(s.color, s.color2, s.contrast, s.width, s.border, "*"));
    }
  }
  //XXX race condition warning
  update_intern() {
    this.updateScrollStyling();
    let popups = this._popups;
    let cssText = "";
    let sheet = this.globalCSS.sheet;
    if (sheet) {
      for (let rule of sheet.rules) {
        cssText += rule.cssText + "\n";
      }
      window.cssText = cssText;
    }
    let cssTextHash = strhash(cssText);
    if (this.needsBorderRegen) {
      this.needsBorderRegen = false;
      this.regenBorders();
    }
    super.update();
    let this2 = this;
    for (let sarea of this.sareas) {
      if (!sarea.ctx) {
        sarea.ctx = this.ctx;
      }
    }
    return function* () {
      let stack = update_stack;
      stack.cur = 0;
      let lastn = this2;
      function push(n) {
        stack[stack.cur++] = n;
      }
      __name(push, "push");
      function pop(n) {
        if (stack.cur < 0) {
          throw new Error("Screen.update(): stack overflow!");
        }
        return stack[--stack.cur];
      }
      __name(pop, "pop");
      let ctx = this2.ctx;
      let SCOPE_POP = Symbol("pop");
      let AREA_CTX_POP = Symbol("pop2");
      let scopestack = [];
      let areastack = [];
      let t = time_ms();
      push(this2);
      for (let p of popups) {
        push(p);
      }
      while (stack.cur > 0) {
        let n = pop();
        if (n === void 0) {
          continue;
        } else if (n === SCOPE_POP) {
          scopestack.pop();
          continue;
        } else if (n === AREA_CTX_POP) {
          areastack.pop().pop_ctx_active(ctx, true);
          continue;
        }
        if (n instanceof Area2) {
          areastack.push(n);
          n.push_ctx_active(ctx, true);
          push(AREA_CTX_POP);
        }
        if (!n.hidden && n !== this2 && n instanceof UIBase14) {
          if (!n._ctx) {
            n._ctx = ctx;
          }
          if (n._screenStyleUpdateHash !== cssTextHash) {
            n._screenStyleTag.textContent = cssText;
            n._screenStyleUpdateHash = cssTextHash;
          }
          if (scopestack.length > 0 && scopestack[scopestack.length - 1]) {
            n.parentWidget = scopestack[scopestack.length - 1];
          }
          n.update();
        }
        if (time_ms() - t > 20) {
          yield;
          t = time_ms();
        }
        for (let n2 of n.childNodes) {
          if (!(n2 instanceof UIBase14) || !(n2.packflag & PackFlags.NO_UPDATE)) {
            push(n2);
          }
        }
        if (n.shadow === void 0) {
          continue;
        }
        for (let n2 of n.shadow.childNodes) {
          if (!(n2 instanceof UIBase14) || !(n2.packflag & PackFlags.NO_UPDATE)) {
            push(n2);
          }
        }
        if (n instanceof UIBase14) {
          if (!(n.packflag & PackFlags.NO_UPDATE)) {
            scopestack.push(n);
            push(SCOPE_POP);
          }
        }
      }
    }();
  }
  //load pos/size from screenverts
  loadFromVerts() {
    let old = [0, 0];
    for (let sarea of this.sareas) {
      old[0] = sarea.size[0];
      old[1] = sarea.size[1];
      sarea.loadFromVerts();
      sarea.on_resize(old);
      sarea.setCSS();
    }
    this.setCSS();
  }
  /** merges sarea into the screen area opposite to sarea*/
  collapseArea(sarea, border) {
    let sarea2;
    if (!border) {
      for (let b of sarea._borders) {
        let sarea22 = b.getOtherSarea(sarea);
        if (sarea22 && !b.locked) {
          border = b;
          break;
        }
      }
    } else if (border.locked) {
      console.warn("Cannot remove screen border");
    }
    console.warn("SAREA2", border, sarea2, sarea2 !== sarea);
    if (border) {
      sarea2 = border.getOtherSarea(sarea);
      if (!sarea2) {
        console.error("Error merging sarea");
        return;
      }
      let size1 = new Vector210(sarea.pos).add(sarea.size);
      let size2 = new Vector210(sarea2.pos).add(sarea2.size);
      sarea2.pos.min(sarea.pos);
      sarea2.size.load(size1).max(size2).sub(sarea2.pos);
      sarea2.loadFromPosSize();
    }
    this.sareas.remove(sarea);
    sarea.remove();
    this.regenScreenMesh();
    this._internalRegenAll();
    return this;
  }
  splitArea(sarea, t = 0.5, horiz = true) {
    let w = sarea.size[0], h = sarea.size[1];
    let x = sarea.pos[0], y = sarea.size[1];
    let s1, s2;
    if (!horiz) {
      s1 = sarea;
      if (s1.ctx === void 0) {
        s1.ctx = this.ctx;
      }
      s2 = s1.copy(this);
      s1.size[0] *= t;
      s2.size[0] *= 1 - t;
      s2.pos[0] += w * t;
    } else {
      s1 = sarea;
      if (s1.ctx === void 0) {
        s1.ctx = this.ctx;
      }
      s2 = s1.copy(this);
      s1.size[1] *= t;
      s2.size[1] *= 1 - t;
      s2.pos[1] += h * t;
    }
    s2.ctx = this.ctx;
    this.appendChild(s2);
    s1.on_resize(s1.size);
    s2.on_resize(s2.size);
    this.regenBorders();
    this.solveAreaConstraints();
    s1.setCSS();
    s2.setCSS();
    this.setCSS();
    if (s2.area !== void 0)
      s2.area.onadd();
    return s2;
  }
  setCSS() {
    if (!this.getBoolAttribute("inherit-scale")) {
      this.style["width"] = this.size[0] + "px";
      this.style["height"] = this.size[1] + "px";
    }
    this.style["overflow"] = "hidden";
    for (let key in this._edgemap) {
      let b = this._edgemap[key];
      b.setCSS();
    }
  }
  regenScreenMesh(snapLimit = SnapLimit) {
    this.snapLimit = snapLimit;
    this.regenBorders();
  }
  regenBorders_stage2() {
    for (let b of this.screenborders) {
      b.halfedges = [];
    }
    function hashHalfEdge(border, sarea) {
      return border._id + ":" + sarea._id;
    }
    __name(hashHalfEdge, "hashHalfEdge");
    function has_he(border, border2, sarea) {
      for (let he of border.halfedges) {
        if (border2 === he.border && sarea === he.sarea) {
          return true;
        }
      }
      return false;
    }
    __name(has_he, "has_he");
    for (let b1 of this.screenborders) {
      for (let sarea of b1.sareas) {
        let he = new ScreenHalfEdge(b1, sarea);
        b1.halfedges.push(he);
      }
      let axis = b1.horiz ? 1 : 0;
      let min = Math.min(b1.v1[axis], b1.v2[axis]);
      let max = Math.max(b1.v1[axis], b1.v2[axis]);
      for (let b2 of this.walkBorderLine(b1)) {
        if (b1 === b2) {
          continue;
        }
        let ok = b2.v1[axis] >= min && b2.v1[axis] <= max;
        ok = ok || b2.v2[axis] >= min && b2.v2[axis] <= max;
        for (let sarea of b2.sareas) {
          let ok2 = ok && !has_he(b2, b1, sarea);
          if (ok2) {
            let he22 = new ScreenHalfEdge(b2, sarea);
            b1.halfedges.push(he22);
          }
        }
      }
    }
    for (let b of this.screenborders) {
      let movable = true;
      for (let sarea of b.sareas) {
        movable = movable && this.isBorderMovable(b);
      }
      b.movable = movable;
    }
  }
  hasBorder(b) {
    return b._id in this._idmap;
  }
  killScreenVertex(v) {
    this.screenverts.remove(v);
    delete this._edgemap[ScreenVert.hash(v, void 0, this.snapLimit)];
    delete this._idmap[v._id];
    return this;
  }
  freeBorder(b, sarea) {
    if (b.sareas.indexOf(sarea) >= 0) {
      b.sareas.remove(sarea);
    }
    let dels = [];
    for (let he of b.halfedges) {
      if (he.sarea === sarea) {
        dels.push([b, he]);
      }
      for (let he22 of he.border.halfedges) {
        if (he22 === he)
          continue;
        if (he22.sarea === sarea) {
          dels.push([he.border, he22]);
        }
      }
    }
    for (let d of dels) {
      if (d[0].halfedges.indexOf(d[1]) < 0) {
        console.warn("Double remove detected; use util.set?");
        continue;
      }
      d[0].halfedges.remove(d[1]);
    }
    if (b.sareas.length === 0) {
      this.killBorder(b);
    }
  }
  killBorder(b) {
    console.log("killing border", b._id, b);
    if (this.screenborders.indexOf(b) < 0) {
      console.log("unknown border", b);
      b.remove();
      return;
    }
    this.screenborders.remove(b);
    let del = [];
    for (let he of b.halfedges) {
      if (he === he2)
        continue;
      for (let he22 of he.border.halfedges) {
        if (he22.border === b) {
          del.push([he.border, he22]);
        }
      }
    }
    for (let d of del) {
      d[0].halfedges.remove(d[1]);
    }
    delete this._edgemap[ScreenBorder.hash(b.v1, b.v2)];
    delete this._idmap[b._id];
    b.v1.borders.remove(b);
    b.v2.borders.remove(b);
    if (b.v1.borders.length === 0) {
      this.killScreenVertex(b.v1);
    }
    if (b.v2.borders.length === 0) {
      this.killScreenVertex(b.v2);
    }
    b.remove();
    return this;
  }
  //XXX rename to regenScreenMesh
  regenBorders() {
    for (let b of this.screenborders) {
      b.remove();
    }
    this._idmap = {};
    this.screenborders = [];
    this._edgemap = {};
    this._vertmap = {};
    this.screenverts = [];
    for (let sarea of this.sareas) {
      if (sarea.hidden) continue;
      sarea.makeBorders(this);
    }
    for (let key in this._edgemap) {
      let b = this._edgemap[key];
      b.setCSS();
    }
    this.regenBorders_stage2();
    this._recalcAABB();
    for (let b of this.screenborders) {
      b.outer = this.isBorderOuter(b);
      b.movable = this.isBorderMovable(b);
      b.setCSS();
    }
    this.updateDebugBoxes();
  }
  _get_debug_overlay() {
    if (!this._debug_overlay) {
      this._debug_overlay = UIBase14.createElement("overdraw-x");
      let s = this._debug_overlay;
      s.startNode(this, this);
    }
    return this._debug_overlay;
  }
  updateDebugBoxes() {
    if (const_default.DEBUG.screenborders) {
      let overlay = this._get_debug_overlay();
      overlay.clear();
      for (let b of this.screenborders) {
        overlay.line(b.v1, b.v2, "red");
      }
      let del = [];
      for (let child of document.body.childNodes) {
        if (child.getAttribute && child.getAttribute("class") === "__debug") {
          del.push(child);
        }
      }
      for (let n of del) {
        n.remove();
      }
      let box = /* @__PURE__ */ __name((x, y, s, text2, color = "red") => {
        x -= s * 0.5;
        y -= s * 0.5;
        x = Math.min(Math.max(x, 0), this.size[0] - s);
        y = Math.min(Math.max(y, 0), this.size[1] - s);
        let ret = UIBase14.createElement("div");
        ret.setAttribute("class", "__debug");
        ret.style["position"] = UIBase14.PositionKey;
        ret.style["left"] = x + "px";
        ret.style["top"] = y + "px";
        ret.style["height"] = s + "px";
        ret.style["width"] = s + "px";
        ret.style["z-index"] = "1000";
        ret.style["pointer-events"] = "none";
        ret.style["padding"] = ret.style["margin"] = "0px";
        ret.style["display"] = "float";
        ret.style["background-color"] = color;
        document.body.appendChild(ret);
        let colors = [
          "orange",
          "black",
          "white"
        ];
        for (let i = 2; i >= 0; i--) {
          ret = UIBase14.createElement("div");
          ret.setAttribute("class", "__debug");
          ret.style["position"] = UIBase14.PositionKey;
          ret.style["left"] = x + "px";
          ret.style["top"] = y + "px";
          ret.style["height"] = s + "px";
          ret.style["width"] = "250px";
          ret.style["z-index"] = "" + (1005 - i - 1);
          ret.style["pointer-events"] = "none";
          ret.style["color"] = colors[i];
          let w = i * 2;
          ret.style["-webkit-text-stroke-width"] = w + "px";
          ret.style["-webkit-text-stroke-color"] = colors[i];
          ret.style["text-stroke-width"] = w + "px";
          ret.style["text-stroke-color"] = colors[i];
          ret.style["padding"] = ret.style["margin"] = "0px";
          ret.style["display"] = "float";
          ret.style["background-color"] = "rgba(0,0,0,0)";
          ret.innerText = "" + text2;
          document.body.appendChild(ret);
        }
      }, "box");
      for (let v of this.screenverts) {
        box(v[0], v[1], 10 * v.borders.length, "" + v.borders.length, "rgba(255,0,0,0.5)");
      }
      for (let b of this.screenborders) {
        for (let he of b.halfedges) {
          let txt = `${he.side}, ${b.sareas.length}, ${b.halfedges.length}`;
          let p = new Vector210(b.v1).add(b.v2).mulScalar(0.5);
          let size = 10 * b.halfedges.length;
          let wadd = 25 + size * 0.5;
          let axis = b.horiz & 1;
          if (p[axis] > he.sarea.pos[axis]) {
            p[axis] -= wadd;
          } else {
            p[axis] += wadd;
          }
          box(p[0], p[1], size, txt, "rgba(155,255,75,0.5)");
        }
      }
    }
  }
  checkAreaConstraint(sarea, checkOnly = false) {
    let min = sarea.minSize, max = sarea.maxSize;
    let vs = sarea._verts;
    let chg = 0;
    let mask = 0;
    let moveBorder = /* @__PURE__ */ __name((sidea, sideb, dh) => {
      let b1 = sarea._borders[sidea];
      let b2 = sarea._borders[sideb];
      let bad = 0;
      for (let i = 0; i < 2; i++) {
        let b = i ? b2 : b1;
        let bad2 = sarea.borderLock & 1 << sidea;
        bad2 = bad2 || !b.movable;
        bad2 = bad2 || this.isBorderOuter(b);
        if (bad2)
          bad |= 1 << i;
      }
      if (bad === 0) {
        this.moveBorder(b1, dh * 0.5);
        this.moveBorder(b2, -dh * 0.5);
      } else if (bad === 1) {
        this.moveBorder(b2, -dh);
      } else if (bad === 2) {
        this.moveBorder(b1, dh);
      } else if (bad === 3) {
        if (!this.isBorderOuter(b1)) {
          this.moveBorder(b1, dh);
        } else if (!this.isBorderOuter(b2)) {
          this.moveBorder(b2, -dh);
        } else {
          this.moveBorder(b1, dh * 0.5);
          this.moveBorder(b2, -dh * 0.5);
        }
      }
    }, "moveBorder");
    if (max[0] !== void 0 && sarea.size[0] > max[0]) {
      let dh = sarea.size[0] - max[0];
      chg += Math.abs(dh);
      mask |= 1;
      moveBorder(0, 2, dh);
    }
    if (min[0] !== void 0 && sarea.size[0] < min[0]) {
      let dh = min[0] - sarea.size[0];
      chg += Math.abs(dh);
      mask |= 2;
      moveBorder(2, 0, dh);
    }
    if (max[1] !== void 0 && sarea.size[1] > max[1]) {
      let dh = sarea.size[1] - max[1];
      chg += Math.abs(dh);
      mask |= 4;
      moveBorder(3, 1, dh);
    }
    if (min[1] !== void 0 && sarea.size[1] < min[1]) {
      let dh = min[1] - sarea.size[1];
      chg += Math.abs(dh);
      mask |= 8;
      moveBorder(1, 3, dh);
    }
    if (sarea.pos[0] + sarea.size[0] > this.size[0]) {
      mask |= 16;
      let dh = this.size[0] - sarea.size[0] - sarea.pos[0];
      chg += Math.abs(dh);
      if (sarea.floating) {
        sarea.pos[0] = this.size[0] - sarea.size[0];
        sarea.loadFromPosSize();
      } else {
        this.moveBorder(sarea._borders[0], dh);
        this.moveBorder(sarea._borders[2], dh);
      }
    }
    if (chg === 0) {
      return false;
    }
    return mask;
  }
  walkBorderLine(b) {
    let visit = new set();
    let ret = [b];
    visit.add(b);
    let rec = /* @__PURE__ */ __name((b2, v) => {
      for (let b22 of v.borders) {
        if (b22 === b2) {
          continue;
        }
        if (b22.horiz === b2.horiz && !visit.has(b22)) {
          visit.add(b22);
          ret.push(b22);
          rec(b22, b22.otherVertex(v));
        }
      }
    }, "rec");
    rec(b, b.v1);
    let ret2 = ret;
    ret = [];
    rec(b, b.v2);
    ret2.reverse();
    return ret2.concat(ret);
  }
  moveBorderWithoutVerts(halfedge, df) {
    let side = halfedge.side;
    let sarea = halfedge.sarea;
    switch (side) {
      case 0:
        sarea.pos[0] += df;
        sarea.size[0] -= df;
        break;
      case 1:
        sarea.size[1] += df;
        break;
      case 2:
        sarea.size[0] += df;
        break;
      case 3:
        sarea.pos[1] += df;
        sarea.size[1] -= df;
        break;
    }
  }
  moveBorder(b, df, strict = true) {
    return this.moveBorderSimple(b, df, strict);
  }
  moveBorderSimple(b, df, strict = true) {
    let axis = b.horiz & 1;
    let axis2 = axis ^ 1;
    let min = Math.min(b.v1[axis2], b.v2[axis2]);
    let max = Math.max(b.v1[axis2], b.v2[axis2]);
    let test = /* @__PURE__ */ __name((v) => {
      return v[axis2] >= min && v[axis2] <= max;
    }, "test");
    let vs = new set();
    for (let b2 of this.walkBorderLine(b)) {
      if (strict && !test(b2.v1) && !test(b2.v2)) {
        return false;
      }
      vs.add(b2.v1);
      vs.add(b2.v2);
    }
    for (let v of vs) {
      v[axis] += df;
    }
    for (let v of vs) {
      for (let b2 of v.borders) {
        for (let sarea of b2.sareas) {
          sarea.loadFromVerts();
        }
      }
    }
    return true;
  }
  moveBorderUnused(b, df, strict = true) {
    if (!b) {
      console.warn("missing border");
      return false;
    }
    let axis = b.horiz & 1;
    let vs = new set();
    let visit = new set();
    let axis2 = axis ^ 1;
    let min = Math.min(b.v1[axis2], b.v2[axis2]);
    let max = Math.max(b.v1[axis2], b.v2[axis2]);
    let test = /* @__PURE__ */ __name((v) => {
      return v[axis2] >= min && v[axis2] <= max;
    }, "test");
    let first = true;
    let found = false;
    let halfedges = new set();
    let borders = new set();
    for (let b2 of this.walkBorderLine(b)) {
      if (!strict) {
        vs.add(b2.v1);
        vs.add(b2.v2);
        continue;
      }
      let t1 = test(b2.v1), t2 = test(b2.v2);
      if (!t1 || !t2) {
        found = true;
        if (first) {
          first = false;
          df = Math.max(Math.abs(df), SnapLimit) * Math.sign(df);
        }
      }
      if (!t1 && !t2) {
        continue;
      }
      borders.add(b2);
      for (let sarea of b2.sareas) {
        halfedges.add(new ScreenHalfEdge(b2, sarea));
      }
      vs.add(b2.v1);
      vs.add(b2.v2);
    }
    for (let b2 of this.walkBorderLine(b)) {
      if (borders.has(b2)) {
        continue;
      }
      for (let he of b2.halfedges) {
        borders.remove(he.border);
        if (halfedges.has(he)) {
          halfedges.remove(he);
        }
      }
    }
    for (let v of vs) {
      let ok = v[axis2] >= min && v[axis2] <= max;
      if (!ok && strict) {
      }
    }
    if (!found || !strict) {
      for (let v of vs) {
        v[axis] += df;
      }
    } else {
      let borders2 = new set();
      for (let he of halfedges) {
        borders2.add(he.border);
        this.moveBorderWithoutVerts(he, df);
      }
      for (let he of halfedges) {
        he.sarea.loadFromPosSize();
      }
      for (let b2 of borders2) {
        let sareas = b2.sareas.slice(0, b2.sareas.length);
        this.killBorder(b2);
        for (let sarea of sareas) {
          sarea.loadFromPosSize();
        }
      }
      return halfedges.length > 0;
    }
    for (let sarea of b.sareas) {
      sarea.loadFromVerts();
    }
    for (let he of b.halfedges) {
      he.sarea.loadFromVerts();
      for (let sarea of he.border.sareas) {
        sarea.loadFromVerts();
        for (let b2 of sarea._borders) {
          b2.setCSS();
        }
      }
    }
    b.setCSS();
    return true;
  }
  solveAreaConstraints(snapArgument = true) {
    let repeat = false;
    let found = false;
    let time = time_ms();
    for (let i = 0; i < 10; i++) {
      repeat = false;
      for (let sarea of this.sareas) {
        if (sarea.hidden) continue;
        repeat = repeat || this.checkAreaConstraint(sarea);
      }
      found = found || repeat;
      if (repeat) {
        for (let sarea of this.sareas) {
          sarea.loadFromVerts();
        }
        this.snapScreenVerts(snapArgument);
      } else {
        break;
      }
    }
    if (found) {
      this.snapScreenVerts(snapArgument);
      if (const_default.DEBUG.areaConstraintSolver) {
        time = time_ms() - time;
        console.log(`enforced area constraint ${time.toFixed(2)}ms`);
      }
      this._recalcAABB();
      this.setCSS();
    }
  }
  snapScreenVerts(fitToSize = true) {
    let this2 = this;
    function* screenverts() {
      for (let v of this2.screenverts) {
        let ok = 0;
        for (let sarea of v.sareas) {
          if (!(sarea.flag & AreaFlags.INDEPENDENT)) {
            ok = 1;
          }
        }
        if (ok) {
          yield v;
        }
      }
    }
    __name(screenverts, "screenverts");
    let mm = new MinMax(2);
    for (let v of screenverts()) {
      mm.minmax(v);
    }
    let min = mm.min, max = mm.max;
    if (fitToSize) {
      let vec = new Vector210(max).sub(min);
      let sz = new Vector210(this.size);
      sz.div(vec);
      for (let v of screenverts()) {
        v.sub(min).mul(sz);
      }
      for (let v of screenverts()) {
        v[0] += this.pos[0];
        v[1] += this.pos[1];
      }
    } else {
      for (let v of screenverts()) {
      }
      [min, max] = this._recalcAABB();
      this.size.load(max).sub(min);
    }
    let found = 1;
    for (let sarea of this.sareas) {
      if (sarea.hidden) continue;
      let old = new Vector210(sarea.size);
      let oldpos = new Vector210(sarea.pos);
      sarea.loadFromVerts();
      found = found || old.vectorDistance(sarea.size) > 1;
      found = found || oldpos.vectorDistance(sarea.pos) > 1;
      sarea.on_resize(old);
    }
    if (found) {
      this._recalcAABB();
      this.setCSS();
    }
  }
  on_resize(oldsize, newsize = this.size, _set_key = true) {
    if (_set_key) {
      this._last_ckey1 = this._calcSizeKey(newsize[0], newsize[1], this.pos[0], this.pos[1], devicePixelRatio, visualViewport.scale);
    }
    let ratio = [newsize[0] / oldsize[0], newsize[1] / oldsize[1]];
    let offx = this.pos[0] - this.oldpos[0];
    let offy = this.pos[1] - this.oldpos[1];
    this.oldpos.load(this.pos);
    for (let v of this.screenverts) {
      v[0] *= ratio[0];
      v[1] *= ratio[1];
      v[0] += offx;
      v[1] += offy;
    }
    let min = [1e17, 1e17], max = [-1e17, -1e17];
    let olds = [];
    for (let sarea of this.sareas) {
      olds.push([sarea.size[0], sarea.size[1]]);
      sarea.loadFromVerts();
    }
    this.size[0] = newsize[0];
    this.size[1] = newsize[1];
    this.snapScreenVerts();
    this.solveAreaConstraints();
    this._recalcAABB();
    let i = 0;
    for (let sarea of this.sareas) {
      sarea.on_resize(sarea.size, olds[i]);
      sarea.setCSS();
      i++;
    }
    this.regenBorders();
    this.setCSS();
    this.calcTabOrder();
    this._fireResizeCB(oldsize);
  }
  _fireResizeCB(oldsize = this.size) {
    for (let cb of this._resize_callbacks) {
      cb(oldsize);
    }
  }
  getScreenVert(pos, added_id = "", floating = false) {
    let key = ScreenVert.hash(pos, added_id, this.snapLimit);
    if (floating || !(key in this._vertmap)) {
      let v = new ScreenVert(pos, this.idgen++, added_id);
      this._vertmap[key] = v;
      this._idmap[v._id] = v;
      this.screenverts.push(v);
    }
    return this._vertmap[key];
  }
  isBorderOuter(border) {
    let sides = 0;
    for (let he of border.halfedges) {
      sides |= 1 << he.side;
    }
    let bits = 0;
    for (let i = 0; i < 4; i++) {
      bits += sides & 1 << i ? 1 : 0;
    }
    let ret = bits < 2;
    let floating = false;
    for (let sarea of border.sareas) {
      floating = floating || sarea.floating;
    }
    if (floating) {
      let axis = border.horiz ? 1 : 0;
      ret = Math.abs(border.v1[axis] - this.pos[axis]) < 4;
      ret = ret || Math.abs(border.v1[axis] - this.pos[axis] - this.size[axis]) < 4;
    }
    border.outer = ret;
    return ret;
  }
  isBorderMovable(b, limit = 5) {
    if (this.allBordersMovable)
      return true;
    for (let he of b.halfedges) {
      if (he.sarea.borderLock & 1 << he.side) {
        return false;
      }
    }
    let ok = !this.isBorderOuter(b);
    for (let sarea of b.sareas) {
      if (sarea.floating) {
        ok = true;
        break;
      }
    }
    return ok;
  }
  getScreenBorder(sarea, v1, v2, side) {
    let suffix = sarea._get_v_suffix();
    if (!(v1 instanceof ScreenVert)) {
      v1 = this.getScreenVert(v1, suffix);
    }
    if (!(v2 instanceof ScreenVert)) {
      v2 = this.getScreenVert(v2, suffix);
    }
    let hash = ScreenBorder.hash(v1, v2);
    if (!(hash in this._edgemap)) {
      let sb = this._edgemap[hash] = UIBase14.createElement("screenborder-x");
      sb._hash = hash;
      sb.screen = this;
      sb.v1 = v1;
      sb.v2 = v2;
      sb._id = this.idgen++;
      v1.borders.push(sb);
      v2.borders.push(sb);
      sb.ctx = this.ctx;
      this.screenborders.push(sb);
      this.appendChild(sb);
      sb.setCSS();
      this._edgemap[hash] = sb;
      this._idmap[sb._id] = sb;
    }
    return this._edgemap[hash];
  }
  minmaxArea(sarea, mm = void 0) {
    if (mm === void 0) {
      mm = new MinMax(2);
    }
    for (let b of sarea._borders) {
      mm.minmax(b.v1);
      mm.minmax(b.v2);
    }
    return mm;
  }
  //does sarea1 border sarea2?
  areasBorder(sarea1, sarea2) {
    for (let b of sarea1._borders) {
      for (let sa of b.sareas) {
        if (sa === sarea2)
          return true;
      }
    }
    return false;
  }
  //regenerates borders, sets css and calls this.update
  replaceArea(dst, src) {
    if (dst === src)
      return;
    src.pos[0] = dst.pos[0];
    src.pos[1] = dst.pos[1];
    src.size[0] = dst.size[0];
    src.size[1] = dst.size[1];
    src.floating = dst.floating;
    src._borders = dst._borders;
    src._verts = dst._verts;
    if (this.sareas.indexOf(src) < 0) {
      this.sareas.push(src);
      this.shadow.appendChild(src);
    }
    if (this.sareas.active === dst) {
      this.sareas.active = src;
    }
    this.sareas.remove(dst);
    dst.remove();
    this.regenScreenMesh();
    this.snapScreenVerts();
    this._updateAll();
  }
  _internalRegenAll() {
    this.snapScreenVerts();
    this._recalcAABB();
    this.calcTabOrder();
    this.setCSS();
    this.completeUpdate();
    this.completeSetCSS();
    this.completeUpdate();
  }
  _updateAll() {
    for (let sarea of this.sareas) {
      sarea.setCSS();
    }
    this.setCSS();
    this.update();
  }
  removeArea(sarea) {
    if (this.sareas.indexOf(sarea) < 0) {
      console.warn(sarea, "<- Warning: tried to remove unknown area");
      return;
    }
    this.sareas.remove(sarea);
    sarea.remove();
    for (let i = 0; i < 2; i++) {
      this.snapScreenVerts();
      this.regenScreenMesh();
    }
    this._updateAll();
    this.drawUpdate();
  }
  appendChild(child) {
    if (child instanceof ScreenArea) {
      child.screen = this;
      child.ctx = this.ctx;
      child.parentWidget = this;
      this.sareas.push(child);
      if (child.size.dot(child.size) === 0) {
        child.size[0] = this.size[0];
        child.size[1] = this.size[1];
      }
      if (!child._has_evts) {
        child._has_evts = true;
        let onfocus = /* @__PURE__ */ __name((e) => {
          this.sareas.active = child;
        }, "onfocus");
        let onblur = /* @__PURE__ */ __name((e) => {
        }, "onblur");
        child.addEventListener("focus", onfocus);
        child.addEventListener("mouseenter", onfocus);
        child.addEventListener("blur", onblur);
        child.addEventListener("mouseleave", onblur);
      }
      this.regenBorders();
      child.setCSS();
      this.drawUpdate();
      child._init();
    }
    return this.shadow.appendChild(child);
  }
  add(child) {
    return this.appendChild(child);
  }
  hintPickerTool() {
    new ToolTipViewer(this).start();
  }
  removeAreaTool(border) {
    let tool = new RemoveAreaTool(this, border);
    tool.start();
  }
  moveAttachTool(sarea, mpos = this.mpos, elem2, pointerId) {
    let tool = new AreaMoveAttachTool(this, sarea, mpos);
    tool.start(elem2, pointerId);
  }
  splitTool() {
    let tool = new SplitTool(this);
    tool.start();
  }
  areaDragTool(sarea = this.sareas.active) {
    if (sarea === void 0) {
      console.warn("no active screen area");
      return;
    }
    let mpos = this.mpos;
    let tool = new AreaDragTool(this, this.sareas.active, mpos);
    tool.start();
  }
  makeBorders() {
    for (let sarea of this.sareas) {
      sarea.makeBorders(this);
    }
  }
  cleanupBorders() {
    let del = /* @__PURE__ */ new Set();
    for (let b of this.screenborders) {
      if (b.halfedges.length === 0) {
        del.add(b);
      }
    }
    for (let b of del) {
      delete this._edgemap[b._hash];
      HTMLElement.prototype.remove.call(b);
    }
  }
  mergeBlankAreas() {
    for (let b of this.screenborders) {
      if (b.locked) {
        continue;
      }
      let blank, sarea;
      for (let he of b.halfedges) {
        if (!he.sarea.area) {
          blank = he.sarea;
          sarea = b.getOtherSarea(blank);
          let axis = b.horiz ^ 1;
          if (blank && sarea && blank.size[axis] !== sarea.size[axis]) {
            blank = sarea = void 0;
          }
          if (blank && sarea) {
            break;
          } else {
            blank = void 0;
            sarea = void 0;
          }
        }
      }
      if (blank && sarea && blank !== sarea) {
        this.collapseArea(blank, b);
      }
    }
    this.cleanupBorders();
  }
  floatArea(area) {
    let sarea = area.parentWidget;
    if (sarea.floating) {
      return sarea;
    }
    sarea.editors.remove(area);
    delete sarea.editormap[area.constructor.define().areaname];
    sarea.area = void 0;
    HTMLElement.prototype.remove.call(area);
    let sarea2 = UIBase14.createElement("screenarea-x", true);
    sarea2.floating = true;
    sarea2.pos = new Vector210(sarea.pos);
    sarea2.pos.addScalar(5);
    sarea2.size = new Vector210(sarea.size);
    sarea2.editors.push(area);
    sarea2.editormap[area.constructor.define().areaname] = area;
    sarea2.shadow.appendChild(area);
    sarea2.area = area;
    area.push_ctx_active();
    area.pop_ctx_active();
    area.pos = sarea2.pos;
    area.size = sarea2.size;
    area.parentWidget = sarea2;
    area.owning_sarea = sarea2;
    sarea.flushSetCSS();
    sarea.flushUpdate();
    sarea2.flushSetCSS();
    sarea2.flushUpdate();
    this.appendChild(sarea2);
    if (sarea.editors.length > 0) {
      let area2 = sarea.editors[0];
      sarea.switch_editor(area2.constructor);
      sarea.flushSetCSS();
      sarea.flushUpdate();
    }
    sarea2.loadFromPosSize();
    sarea2.bringToFront();
    this.mergeBlankAreas();
    this.cleanupBorders();
    return sarea2;
  }
  on_keydown(e) {
    if (checkForTextBox(this, this.mpos[0], this.mpos[1])) {
      console.log("textbox detected");
      return;
    }
    if (!haveModal() && this.execKeyMap(e)) {
      e.preventDefault();
      return;
    }
    if (!haveModal() && this.sareas.active !== void 0 && this.sareas.active.on_keydown) {
      let area = this.sareas.active;
      return this.sareas.active.on_keydown(e);
    }
  }
  on_keyup(e) {
    if (!haveModal() && this.sareas.active !== void 0 && this.sareas.active.on_keyup) {
      return this.sareas.active.on_keyup(e);
    }
  }
  on_keypress(e) {
    if (!haveModal() && this.sareas.active !== void 0 && this.sareas.active.on_keypress) {
      return this.sareas.active.on_keypress(e);
    }
  }
  draw() {
    for (let sarea of this.sareas) {
      sarea.draw();
    }
  }
  afterSTRUCT() {
    for (let sarea of this.sareas) {
      sarea._ctx = this.ctx;
      sarea.afterSTRUCT();
    }
  }
  loadSTRUCT(reader) {
    this.clear();
    reader(this);
    this.size = new Vector210(this.size);
    let sareas = this.sareas;
    this.sareas = [];
    for (let sarea of sareas) {
      sarea.screen = this;
      sarea.parentWidget = this;
      this.appendChild(sarea);
    }
    this.regenBorders();
    this.setCSS();
    this.doOnce(() => {
      this.loadUIData(this.uidata);
      this.uidata = void 0;
    });
    return this;
  }
  test_struct(appstate = _appstate) {
    let data = [];
    struct_default.manager.write_object(data, this);
    data = new DataView(new Uint8Array(data).buffer);
    let screen2 = struct_default.manager.read_object(data, this.constructor);
    screen2.ctx = this.ctx;
    for (let sarea of screen2.sareas) {
      sarea.screen = screen2;
      sarea.ctx = this.ctx;
      sarea.area.ctx = this.ctx;
    }
    let parent = this.parentElement;
    this.remove();
    appstate.screen = screen2;
    parent.appendChild(screen2);
    screen2.regenBorders();
    screen2.update();
    screen2.listen();
    screen2.doOnce(() => {
      screen2.on_resize(screen2.size, [window.innerWidth, window.innerHeight]);
    });
    console.log(data);
    return screen2;
  }
  saveUIData() {
    try {
      return saveUIData(this, "screen");
    } catch (error2) {
      print_stack2(error2);
      console.log("Failed to save UI state data");
    }
  }
  loadUIData(str) {
    try {
      loadUIData(this, str);
    } catch (error2) {
      print_stack2(error2);
      console.log("Failed to load UI state data");
    }
  }
};
Screen2.STRUCT = `
pathux.Screen { 
  size  : vec2;
  pos   : vec2;
  sareas : array(pathux.ScreenArea);
  idgen : int;
  uidata : string | obj.saveUIData();
}
`;
struct_default.register(Screen2);
UIBase2.internalRegister(Screen2);
setScreenClass(Screen2);
_setScreenClass(Screen2);
var get_screen_cb;
var _on_keydown;
var start_cbs = [];
var stop_cbs = [];
var keyboardDom = window;
var key_event_opts;
function startEvents(getScreenFunc) {
  get_screen_cb = getScreenFunc;
  if (_events_started) {
    return;
  }
  _events_started = true;
  _on_keydown = /* @__PURE__ */ __name((e) => {
    if (e.keyCode === keymap["Alt"]) {
      e.preventDefault();
    }
    let screen = get_screen_cb();
    return screen.on_keydown(e);
  }, "_on_keydown");
  window.addEventListener("keydown", _on_keydown, key_event_opts);
  for (let cb of start_cbs) {
    cb();
  }
}
__name(startEvents, "startEvents");
function stopEvents() {
  window.removeEventListener("keydown", _on_keydown, key_event_opts);
  _on_keydown = void 0;
  _events_started = false;
  for (let cb of stop_cbs) {
    try {
      cb();
    } catch (error2) {
      print_stack2(error2);
    }
  }
  return get_screen_cb;
}
__name(stopEvents, "stopEvents");
function setKeyboardDom(dom) {
  let started = _events_started;
  if (started) {
    stopEvents();
  }
  keyboardDom = dom;
  if (started) {
    startEvents(get_screen_cb);
  }
}
__name(setKeyboardDom, "setKeyboardDom");
function setKeyboardOpts(opts) {
  key_event_opts = opts;
}
__name(setKeyboardOpts, "setKeyboardOpts");
function _onEventsStart(cb) {
  start_cbs.push(cb);
}
__name(_onEventsStart, "_onEventsStart");
function _onEventsStop(cb) {
  stop_cbs.push(cb);
}
__name(_onEventsStop, "_onEventsStop");

// scripts/path.ux/scripts/simple/simple.js
var simple_exports = {};
__export(simple_exports, {
  AppState: () => AppState,
  DataModel: () => DataModel,
  DataModelClasses: () => DataModelClasses,
  Editor: () => Editor,
  EmptyStruct: () => EmptyStruct,
  FileArgs: () => FileArgs,
  FileFull: () => FileFull,
  FileHeader: () => FileHeader,
  Icons: () => Icons3,
  Menu: () => Menu,
  MenuBarEditor: () => MenuBarEditor,
  SideBar: () => SideBar,
  SimpleContext: () => SimpleContext,
  SimpleScreen: () => SimpleScreen,
  StartArgs: () => StartArgs,
  iconSvg: () => iconSvg,
  loadDefaultIconSheet: () => loadDefaultIconSheet,
  loadFile: () => loadFile,
  makeAPI: () => makeAPI,
  registerMenuBarEditor: () => registerMenuBarEditor,
  saveFile: () => saveFile
});

// scripts/path.ux/scripts/simple/editor.js
var sidebar_hash = new HashDigest();
var SideBar = class extends Container {
  static {
    __name(this, "SideBar");
  }
  constructor() {
    super();
    this.header = this.row();
    this.header.style["height"] = "45px";
    this._last_resize_key = void 0;
    this._closed = false;
    this.closeIcon = this.header.iconbutton(Icons.RIGHT_ARROW, "Close/Open sidebar", () => {
      console.log("click!");
      this.closed = !this._closed;
    });
    this._openWidth = void 0;
    this.needsSetCSS = true;
    this.tabbar = this.tabs("left");
  }
  saveData() {
    return {
      closed: this.closed
    };
  }
  loadData(obj) {
    this.closed = obj.closed;
  }
  set closed(val) {
    if (!!this._closed === !!val) {
      return;
    }
    if (this._openWidth === void 0 && !this._closed && val) {
      this._openWidth = this.width;
    }
    console.log("animate!");
    let w = val ? 50 : this._openWidth;
    this.animate().goto("width", w, 500);
    if (val) {
      this.closeIcon.icon = Icons.LEFT_ARROW;
    } else {
      this.closeIcon.icon = Icons.RIGHT_ARROW;
    }
    this._closed = val;
  }
  get closed() {
    return this._closed;
  }
  get width() {
    return parsepx2("" + this.getAttribute("width"));
  }
  set width(val) {
    this.setAttribute("width", "" + val + "px");
    this.update();
  }
  get height() {
    return parsepx2("" + this.getAttribute("height"));
  }
  set height(val) {
    this.setAttribute("height", "" + val + "px");
    this.update();
  }
  static define() {
    return {
      tagname: "sidebar-base-x",
      style: "sidebar"
    };
  }
  tab(name2) {
    return this.tabbar.tab(name2);
  }
  init() {
    super.init();
    let closed = this._closed;
    this._closed = false;
    if (!this.getAttribute("width")) {
      this.width = 300;
    }
    if (!this.getAttribute("height")) {
      this.height = 700;
    }
    this.setCSS();
    if (closed) {
      this.closed = true;
    }
  }
  setCSS() {
    if (!this.parentWidget) {
      return;
    }
    let editor = this.parentWidget;
    if (!editor.pos || !editor.size) {
      return;
    }
    this.needsSetCSS = false;
    let w = this.width, h = this.height;
    w = isNaN(w) ? 500 : w;
    h = isNaN(h) ? 500 : h;
    h = Math.min(h, editor.size[1] - 25);
    this.style["position"] = "absolute";
    this.style["width"] = w + "px";
    this.style["height"] = h + "px";
    this.style["z-index"] = "100";
    this.style["overflow"] = "scroll";
    this.style["background-color"] = this.getDefault("AreaHeaderBG");
    this.tabbar.style["height"] = h - 45 + "px";
    this.style["left"] = editor.size[0] - w + "px";
  }
  update() {
    sidebar_hash.reset();
    sidebar_hash.add(this.width);
    sidebar_hash.add(this.height);
    let key = sidebar_hash.get();
    if (key !== this._last_resize_key) {
      this._last_resize_key = key;
      this.needsSetCSS = true;
    }
    if (this.needsSetCSS) {
      this.setCSS();
    }
  }
};
UIBase2.register(SideBar);
var Editor = class _Editor extends Area {
  static {
    __name(this, "Editor");
  }
  constructor() {
    super();
    this.container = UIBase2.createElement("container-x");
    this.container.parentWidget = this;
    this.shadow.appendChild(this.container);
  }
  static define() {
    return {
      areaname: "areaname",
      tagname: "tagname-x"
    };
  }
  static defineAPI(api, strct) {
    return strct;
  }
  /** \param makeMenuBar function(ctx, container, menuBarEditor)
   *
   * example:
   *
   * function makeMenuBar(ctx, container, menuBarEditor) {
   *
   *  container.menu("File", [
   *    "app.new()",
   *    simple.Menu.SEP,
   *    "app.save()",
   *    "app.save(forceDialog=true)|Save As",
   *    "app.open"
   *  ]);
   * }
   * */
  static registerAppMenu(makeMenuBar) {
    if (this !== _Editor) {
      throw new Error("must call registerAppMenu from simple.Editor base class");
    }
    this.makeMenuBar = makeMenuBar;
  }
  /** Registers class with Area system
   *  and nstructjs.  Uses nstructjs.inlineRegister
   *  to handle inheritance.
   **/
  static register(cls) {
    if (!cls.hasOwnProperty("define")) {
      throw new Error("missing define() method");
    }
    if (!cls.hasOwnProperty("STRUCT")) {
      cls.STRUCT = struct_default.inherit(cls, this) + `
}`;
      struct_default.register(cls);
    } else {
      cls.STRUCT = struct_default.inlineRegister(cls, cls.STRUCT);
    }
    super.register(cls);
  }
  makeSideBar() {
    if (this.sidebar) {
      this.sidebar.remove();
    }
    let sidebar = this.sidebar = UIBase2.createElement("sidebar-base-x");
    sidebar.parentWidget = this;
    sidebar.ctx = this.ctx;
    this.shadow.appendChild(sidebar);
    if (this.ctx) {
      sidebar._init();
      this.sidebar.flushSetCSS();
      this.sidebar.flushUpdate();
    }
    return this.sidebar;
  }
  on_resize(size, oldsize) {
    super.on_resize(size, oldsize);
    if (this.sidebar) {
      if (this.ctx && this.pos) {
        this.sidebar.setCSS();
      } else {
        this.sidebar.needsSetCSS = true;
      }
    }
  }
  static findEditor(cls) {
    return contextWrangler.getLastArea(cls);
  }
  getScreen() {
    return this.ctx.screen;
  }
  init() {
    super.init();
    this.makeHeader(this.container);
  }
  /** creates default header and puts it in this.header */
  makeHeader(container, add_note_area = true, make_draggable = true) {
    return super.makeHeader(container, add_note_area, make_draggable);
  }
  /** called regularly */
  update() {
    super.update();
  }
  /** */
  setCSS() {
    super.setCSS();
  }
};

// scripts/path.ux/scripts/simple/iconsheet.js
var text = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="512"
   height="512"
   id="svg16099"
   version="1.1"
   inkscape:version="1.0 (4035a4fb49, 2020-05-01)"
   sodipodi:docname="iconsheet.svg"
   inkscape:export-filename="C:devallshapesrcdatafilesiconsheet16.png"
   inkscape:export-xdpi="45"
   inkscape:export-ydpi="45">
  <defs
     id="defs16101">
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1587"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1307"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1303"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1299"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1295"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1291"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1231"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1186"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1182"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4974"
       is_visible="true" />
    <linearGradient
       id="linearGradient5481">
      <stop
         id="stop4865"
         offset="0"
         style="stop-color:#e66700;stop-opacity:1;" />
      <stop
         style="stop-color:#f47712;stop-opacity:1;"
         offset="0.52777779"
         id="stop4867" />
      <stop
         id="stop4869"
         offset="1"
         style="stop-color:#f8bb8a;stop-opacity:1;" />
    </linearGradient>
    <linearGradient
       id="linearGradient17116-6">
      <stop
         id="stop4860"
         offset="0"
         style="stop-color:#b3a500;stop-opacity:1;" />
      <stop
         id="stop4862"
         offset="1"
         style="stop-color:#eaa500;stop-opacity:1;" />
    </linearGradient>
    <linearGradient
       id="linearGradient17116">
      <stop
         id="stop4853"
         offset="0"
         style="stop-color:#b3a500;stop-opacity:1;" />
      <stop
         id="stop4855"
         offset="1"
         style="stop-color:#eaa500;stop-opacity:1;" />
    </linearGradient>
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4290"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4286"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4122"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4118"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4194"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect3225"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect5012"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect5008"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4108"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect3264"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect5465"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4613"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4609"
       is_visible="true" />
    <linearGradient
       id="linearGradient5609">
      <stop
         id="stop5611"
         offset="0"
         style="stop-color:#0089e6;stop-opacity:1;" />
      <stop
         style="stop-color:#1280f4;stop-opacity:1;"
         offset="0.52777779"
         id="stop5613" />
      <stop
         id="stop5615"
         offset="1"
         style="stop-color:#d4eefc;stop-opacity:1;" />
    </linearGradient>
    <linearGradient
       id="linearGradient5481-8">
      <stop
         style="stop-color:#ffc700;stop-opacity:1"
         offset="0"
         id="stop5483" />
      <stop
         id="stop5491"
         offset="0.52777779"
         style="stop-color:#ffc700;stop-opacity:1" />
      <stop
         style="stop-color:#ffa41c;stop-opacity:1"
         offset="1"
         id="stop5485" />
    </linearGradient>
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="-108.10967 : 516.24314 : 1"
       inkscape:vp_y="0 : 323.31882 : 0"
       inkscape:vp_z="57.429562 : 516.24314 : 1"
       inkscape:persp3d-origin="-25.340056 : 488.65327 : 1"
       id="perspective18342" />
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0.0"
       refX="0.0"
       id="Arrow2Send"
       style="overflow:visible;">
      <path
         id="path17173"
         style="fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round;"
         d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
         transform="scale(0.3) rotate(180) translate(-2.3,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Mend"
       orient="auto"
       refY="0.0"
       refX="0.0"
       id="Arrow2Mend"
       style="overflow:visible;">
      <path
         id="path17167"
         style="fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round;"
         d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
         transform="scale(0.6) rotate(180) translate(0,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow1Send"
       orient="auto"
       refY="0.0"
       refX="0.0"
       id="Arrow1Send"
       style="overflow:visible;">
      <path
         id="path17155"
         d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
         style="fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;"
         transform="scale(0.2) rotate(180) translate(6,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Lend"
       orient="auto"
       refY="0.0"
       refX="0.0"
       id="Arrow2Lend"
       style="overflow:visible;">
      <path
         id="path17161"
         style="fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round;"
         d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
         transform="scale(1.1) rotate(180) translate(1,0)" />
    </marker>
    <linearGradient
       id="linearGradient17126">
      <stop
         style="stop-color:#008080;stop-opacity:1;"
         offset="0"
         id="stop17128" />
      <stop
         style="stop-color:#00b3b3;stop-opacity:1;"
         offset="1"
         id="stop17130" />
    </linearGradient>
    <linearGradient
       id="linearGradient17116-6-9">
      <stop
         style="stop-color:#b3a500;stop-opacity:1;"
         offset="0"
         id="stop17118" />
      <stop
         style="stop-color:#eaa500;stop-opacity:1;"
         offset="1"
         id="stop17120" />
    </linearGradient>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-2"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-2"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-6"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-8"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-7"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-6"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-8"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-9"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-79"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-5"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-3"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-1"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-33"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-4"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <marker
       inkscape:stockid="Arrow2Send"
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow2Send-1"
       style="overflow:visible">
      <path
         inkscape:connector-curvature="0"
         id="path17173-3"
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
         transform="matrix(-0.3,0,0,-0.3,0.69,0)" />
    </marker>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient5481-5"
       id="linearGradient5489-4"
       x1="355.89935"
       y1="17.125025"
       x2="380.47559"
       y2="17.125025"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       id="linearGradient5481-5">
      <stop
         style="stop-color:#e66700;stop-opacity:1;"
         offset="0"
         id="stop5483-2" />
      <stop
         id="stop5491-9"
         offset="0.52777779"
         style="stop-color:#f47712;stop-opacity:1;" />
      <stop
         style="stop-color:#f8bb8a;stop-opacity:1;"
         offset="1"
         id="stop5485-9" />
    </linearGradient>
    <linearGradient
       y2="17.125025"
       x2="380.47559"
       y1="17.125025"
       x1="355.89935"
       gradientUnits="userSpaceOnUse"
       id="linearGradient5588"
       xlink:href="#linearGradient5609"
       inkscape:collect="always"
       gradientTransform="matrix(1.2151103,0,0,1.1804992,-207.06775,536.98221)" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4108-1"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4108-4"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4108-9"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect3225-1"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect3225-4"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4122-2"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4122-7"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect1587-6"
       is_visible="true" />
    <inkscape:path-effect
       effect="spiro"
       id="path-effect4194-5"
       is_visible="true" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#9c9c9c"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:zoom="3.8325453"
     inkscape:cx="144.17961"
     inkscape:cy="49.96269"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     inkscape:window-width="1606"
     inkscape:window-height="962"
     inkscape:window-x="177"
     inkscape:window-y="71"
     inkscape:window-maximized="0"
     inkscape:snap-global="false"
     inkscape:pagecheckerboard="true"
     inkscape:document-rotation="0">
    <inkscape:grid
       type="xygrid"
       id="grid16107"
       empspacing="1"
       visible="true"
       enabled="true"
       snapvisiblegridlinesonly="false"
       spacingx="32"
       spacingy="32"
       dotted="false"
       originx="0"
       originy="0" />
  </sodipodi:namedview>
  <metadata
     id="metadata16104">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-540.36218)">
    <ellipse
       style="opacity:0.79203539;fill:url(#linearGradient5588);fill-opacity:1;stroke:#3c3c3c;stroke-width:1.1393038;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="path3171-8"
       cx="240.32063"
       cy="557.19836"
       rx="14.353489"
       ry="14.165989" />
    <flowRoot
       xml:space="preserve"
       id="flowRoot5564"
       style="font-style:normal;font-weight:normal;line-height:0.01%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
       transform="matrix(0.64571833,0,0,0.61432912,8.6966653,558.72048)"><flowRegion
         id="flowRegion5566"
         style="font-family:sans-serif"><rect
           id="rect5568"
           width="78.749992"
           height="72.5"
           x="346.24997"
           y="-21.999973"
           style="font-family:sans-serif" /></flowRegion><flowPara
         id="flowPara5570"
         style="font-weight:bold;font-size:40px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'Sans Bold'">?</flowPara></flowRoot>
    <path
       style="fill:none;stroke:#ec6900;stroke-width:4.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker-mid:none;marker-end:none"
       d="m 187.1235,559.26606 c -3.71166,-5.87882 -12.04056,-10.0009 -18.86169,0.34701"
       id="path4144-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc" />
    <path
       style="fill:#ec6900;fill-opacity:1;stroke:none;stroke-width:0.001;stroke-miterlimit:4;stroke-dasharray:none"
       d="m 170.01417,560.40163 2.05175,2.63036 -9.89352,4.33226 2.83717,-13.08504 z"
       id="path5370-7"
       inkscape:connector-curvature="0" />
    <path
       style="fill:none;stroke:#1f9000;stroke-width:4.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker-mid:none;marker-end:none"
       d="m 197.1805,559.70121 c 3.69186,-5.88365 11.97631,-10.00911 18.76103,0.3473"
       id="path4144-1-9"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc" />
    <path
       style="fill:#1f9000;fill-opacity:1;stroke:none"
       d="m 213.95021,560.59037 -2.0408,2.63252 9.84072,4.33582 -2.82203,-13.09579 z"
       id="path5370-7-4"
       inkscape:connector-curvature="0" />
    <rect
       style="fill:#000000;fill-opacity:1;stroke:none"
       id="rect3224"
       width="23.641272"
       height="8.4057856"
       x="487.73776"
       y="552.41565" />
    <path
       style="fill:none;stroke:#000000;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 498.18023,567.81152 484.7754,556.20378 498.93081,545.77569"
       id="path4074"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc" />
    <path
       style="fill:#000000;fill-opacity:1;stroke:none"
       d="m 17.866009,585.82436 -0.09,-4.53232 -14.5167501,7.49748 14.5683701,7.84238 z"
       id="path5370-5-0-6-5"
       inkscape:connector-curvature="0" />
    <path
       style="fill:#000000;fill-opacity:1;stroke:none"
       d="m 46.366429,592.31275 0.0109,4.6129 14.90287,-7.37024 -14.68289,-8.23782 z"
       id="path5370-5-1-2"
       inkscape:connector-curvature="0" />
    <rect
       style="opacity:0.94690265;fill:#000000;fill-opacity:1;stroke:none"
       id="rect5558-3-3"
       width="10.726034"
       height="5.6689787"
       x="-3.0812507"
       y="587.85645"
       transform="matrix(1,0,0.06880209,0.99763033,0,0)" />
    <rect
       style="opacity:0.94690265;fill:#000000;fill-opacity:1;stroke:none"
       id="rect5558-1"
       width="10.540748"
       height="5.5710502"
       x="-22.93788"
       y="587.9295"
       transform="matrix(1,0,0.06880209,0.99763033,0,0)" />
    <path
       style="fill:#2e2e2e;fill-opacity:1;stroke:none;stroke-width:0.685581"
       d="m 71.46269,592.27473 0.01481,6.27371 20.268436,-10.02379 -19.969263,-11.20374 z"
       id="path5370-5-1-2-1"
       inkscape:connector-curvature="0" />
    <path
       style="fill:#2e2e2e;fill-opacity:1;stroke:none;stroke-width:0.685581"
       d="m 108.87703,578.56977 -6.27262,0.11779 10.35514,20.10117 10.87444,-20.15049 z"
       id="path5370-5-1-2-1-7"
       inkscape:connector-curvature="0" />
    <path
       style="fill:#000000;fill-opacity:1;stroke:#363636;stroke-width:2.23946524;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 69.769603,567.95981 5.60449,-5.39601"
       id="path5452-5-5-1-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc"
       inkscape:transform-center-x="3.061478"
       inkscape:transform-center-y="-0.63275351" />
    <path
       style="fill:#000000;fill-opacity:1;stroke:#363636;stroke-width:2.23946524;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 75.172083,567.8747 -5.47097,-5.53134"
       id="path5452-5-5-1-7-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc"
       inkscape:transform-center-x="3.196728"
       inkscape:transform-center-y="-0.78552851" />
    <path
       style="fill:#ffe87e;fill-opacity:1;stroke:#a58000;stroke-width:1.02573335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 36.512525,599.08328 -0.0847,-15.30469 14.76623,-0.079 1.13455,-5.3121 h 6.7663 l 0.52197,5.56549 h 2.38874 l -0.0349,15.41642 z"
       id="path4607"
       inkscape:path-effect="#path-effect4609"
       inkscape:original-d="m 36.512525,599.08328 -0.0847,-15.30469 14.76623,-0.079 1.13455,-5.3121 h 6.7663 l 0.52197,5.56549 h 2.38874 l -0.0349,15.41642 z"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccc"
       transform="translate(-33.065965,-31.819347)" />
    <path
       style="fill:#dfc449;fill-opacity:1;stroke:#a58000;stroke-width:1.04236829px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 38.651325,583.64804 2.27904,-5.34039 8.11475,0.19058 1.53729,4.93611 z"
       id="path5463"
       inkscape:path-effect="#path-effect5465"
       inkscape:original-d="m 38.651325,583.64804 2.27904,-5.34039 8.11475,0.19058 1.53729,4.93611 z"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccc"
       transform="translate(-33.065965,-31.819347)" />
    <path
       style="fill:#d7f0fb;fill-opacity:1;stroke:#4f4f4f;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
       d="m 71.789265,599.90744 0.17512,-24.69199 h 15.41061 l 4.378,4.90337 0.17513,19.96374 z"
       id="path3262"
       inkscape:path-effect="#path-effect3264"
       inkscape:original-d="m 71.789265,599.90744 0.17512,-24.69199 h 15.41061 l 4.378,4.90337 0.17513,19.96374 z"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccc"
       transform="translate(-33.561281,-31.819347)" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 73.190225,596.58015 16.81157,-0.35024"
       id="path4106"
       inkscape:path-effect="#path-effect4108"
       inkscape:original-d="m 73.190225,596.58015 16.81157,-0.35024"
       inkscape:connector-curvature="0"
       transform="translate(-33.561281,-31.819347)" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 73.540465,591.50166 16.81157,-0.35024"
       id="path4106-7"
       inkscape:path-effect="#path-effect4108-1"
       inkscape:original-d="m 73.540465,591.50166 16.81157,-0.35024"
       inkscape:connector-curvature="0"
       transform="translate(-33.561281,-31.819347)" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 73.365345,586.59829 16.81157,-0.35024"
       id="path4106-0"
       inkscape:path-effect="#path-effect4108-4"
       inkscape:original-d="m 73.365345,586.59829 16.81157,-0.35024"
       inkscape:connector-curvature="0"
       transform="translate(-33.561281,-31.819347)" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 73.365345,582.22027 16.81157,-0.35024"
       id="path4106-4"
       inkscape:path-effect="#path-effect4108-9"
       inkscape:original-d="m 73.365345,582.22027 16.81157,-0.35024"
       inkscape:connector-curvature="0"
       transform="translate(-33.561281,-31.819347)" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#f1f1f1;stroke-width:4.65793133;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 103.19489,558.19446 16.18158,0.0627"
       id="path5452-5-5-1-7-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc"
       inkscape:transform-center-x="3.6534509"
       inkscape:transform-center-y="-5.3788766" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#f4f4f4;stroke-width:4.65793133;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 111.38254,565.89244 -0.15492,-16.18101"
       id="path5452-5-5-1-7-4-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc"
       inkscape:transform-center-x="3.6340509"
       inkscape:transform-center-y="-5.8027516" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#f1f1f1;stroke-width:4.54087734;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 135.53124,558.66024 15.77493,0.0612"
       id="path5452-5-5-1-7-7-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc"
       inkscape:transform-center-x="3.561639"
       inkscape:transform-center-y="-5.2436726" />
    <path
       style="fill:#bfbfbf;fill-opacity:1;stroke:#ffffff;stroke-width:1.39999998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 273.79736,565.92624 4.84986,4.15066 7.44379,-12.0346 -3.26109,-1.20718 -4.82074,8.91974 -2.46038,-2.39761 z"
       id="path1157"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccc" />
    <path
       style="fill:#ff9d00;fill-opacity:1;stroke:#808080;stroke-width:0.78749156px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 306.19903,566.65065 4.84985,4.15066 7.4438,-12.0346 -3.26109,-1.20718 -4.82075,8.91974 -2.46037,-2.39761 z"
       id="path1157-6"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccc" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:4.85740042;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 419.41366,537.85807 12.87326,7.64338 12.79438,-7.33068"
       id="path1585"
       inkscape:connector-curvature="0"
       inkscape:path-effect="#path-effect1587"
       inkscape:original-d="m 419.41366,537.85807 12.87326,7.64338 c 4.40656,-2.37267 3.01422,-8.5404 12.79438,-7.33068"
       sodipodi:nodetypes="ccc"
       transform="matrix(0.82348572,0,0,0.82348572,75.604975,111.95505)" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:4.85740042;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 419.41366,537.85807 12.87326,7.64338 12.79438,-7.33068"
       id="path1585-6"
       inkscape:connector-curvature="0"
       inkscape:path-effect="#path-effect1587-6"
       inkscape:original-d="m 419.41366,537.85807 12.87326,7.64338 c 4.40656,-2.37267 3.01422,-8.5404 12.79438,-7.33068"
       sodipodi:nodetypes="ccc"
       transform="matrix(-0.82326686,0.01898429,-0.01898429,-0.82326686,829.82733,995.45395)" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:1.4972775px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 325.7796,560.88703 9.22114,7.89176 14.15308,-22.88169 -6.20039,-2.29524 -9.16581,16.95932 -4.67796,-4.55863 z"
       id="path1157-6-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccc" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:none"
       d="m 338.27455,603.35315 -4.55847,-12.13972 -4.42325,4.14941 0.29119,-21.42993 14.0532,13.84869 -5.29334,1.40046 4.98485,11.66133 z"
       id="path4192-0"
       inkscape:path-effect="#path-effect4194-5"
       inkscape:original-d="m 338.27455,603.35315 -4.55847,-12.13972 -4.42325,4.14941 0.29119,-21.42993 14.0532,13.84869 -5.29334,1.40046 c 11.73953,18.68506 2.52594,6.89719 4.98485,11.66133 z"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccc"
       transform="rotate(-9.319008,159.52768,371.93318)" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.712px;line-height:0%;font-family:'MV Boli';-inkscape-font-specification:'MV Boli';letter-spacing:0px;word-spacing:0px;fill:#ffdc00;fill-opacity:1;stroke:none;stroke-width:1.476"
       x="179.14906"
       y="751.84772"
       id="text3255-0"
       transform="matrix(1.2141217,-0.1513943,0.23126622,0.79480305,0,0)"><tspan
         sodipodi:role="line"
         id="tspan3257-0"
         x="179.14906"
         y="751.84772"
         style="font-size:44.4154px;line-height:1.25;stroke-width:1.476">!</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:32.4516px;line-height:1.25;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.81129"
       x="131.62856"
       y="599.63672"
       id="text1309"><tspan
         sodipodi:role="line"
         id="tspan1307"
         x="131.62856"
         y="599.63672"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';stroke-width:0.81129">B</tspan></text>
    <text
       id="text1309-2"
       y="658.43152"
       x="153.61592"
       style="font-style:normal;font-weight:normal;font-size:41.6588px;line-height:1.25;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.04147"
       xml:space="preserve"
       transform="scale(1.0962314,0.91221617)"><tspan
         style="font-style:italic;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:serif;-inkscape-font-specification:'serif Bold Italic';stroke-width:1.04147"
         y="658.43152"
         x="153.61592"
         id="tspan1307-4"
         sodipodi:role="line">i</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:38.431px;line-height:1.25;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.960773"
       x="264.23669"
       y="522.23657"
       id="text1309-0-9"
       transform="scale(0.87011438,1.1492742)"><tspan
         sodipodi:role="line"
         id="tspan1307-3-4"
         x="264.23669"
         y="522.23657"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';stroke-width:0.960773"><tspan
           style="font-weight:normal;stroke-width:0.960773"
           id="tspan1365">s</tspan></tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:31.7797px;line-height:1.25;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.794494"
       x="195.07664"
       y="596.5979"
       id="text1309-0-2"
       transform="scale(0.99519471,1.0048285)"><tspan
         sodipodi:role="line"
         id="tspan1307-3-1"
         x="195.07664"
         y="596.5979"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';stroke-width:0.794494">U</tspan></text>
    <path
       style="fill:none;stroke:#ffffff;stroke-width:3.47724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 194.05959,600.03363 25.702,0.14808"
       id="path1375" />
    <path
       id="path1375-2"
       d="m 227.04774,587.38832 25.63991,0.14772"
       style="fill:none;stroke:#ffffff;stroke-width:3.46884;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       inkscape:transform-center-x="1.1856386"
       inkscape:transform-center-y="-0.33875464" />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:#484848;stroke-width:1.623;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 262.93706,592.38036 0.0134,5.70131 18.41916,-9.10923 -18.14729,-10.18151 z"
       id="path5370-5-1-2-1-4"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       id="path5370-5-1-2-1-4-0"
       d="m 301.44451,581.20782 -5.70129,0.0197 9.12976,18.40899 10.16128,-18.15862 z"
       style="fill:#ffffff;fill-opacity:1;stroke:#484848;stroke-width:1.623;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="fill:none;stroke:#242424;stroke-width:2.80047;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:20;stroke-opacity:1"
       id="path1040"
       ry="8.7032747"
       rx="8.4312963"
       cy="583.49023"
       cx="331.71524" />
    <path
       style="fill:none;stroke:#242424;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 336.4644,589.47097 10.10632,10.66173"
       id="path1042"
       sodipodi:nodetypes="cc" />
    <path
       style="fill:none;stroke:#242424;stroke-width:2.17621;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 325.36075,583.26941 12.63506,0.34484"
       id="path1044" />
    <ellipse
       cx="364.00839"
       cy="584.36328"
       rx="9.6165609"
       ry="9.9267731"
       id="path1040-0"
       style="fill:none;stroke:#242424;stroke-width:3.19416;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:20;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="cc"
       id="path1042-6"
       d="m 369.73697,590.7899 10.89694,10.89694"
       style="fill:none;stroke:#242424;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       id="path1044-4"
       d="m 357.64269,584.09303 12.63506,0.34484"
       style="fill:none;stroke:#242424;stroke-width:2.17621;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       style="fill:none;stroke:#242424;stroke-width:2.17621;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 363.94156,590.78154 0.20796,-12.63806"
       id="path1044-4-9" />
  </g>
</svg>
`.trim();
text = btoa(text);
var iconSvg = `data:image/svg+xml;base64,` + text;

// scripts/path.ux/scripts/simple/icons.js
var Icons3 = {
  FOLDER: 0,
  //file folder
  FILE: 1,
  TINY_X: 2,
  //'x' in bottom left corner
  SMALL_PLUS: 3,
  SMALL_MINUS: 4,
  UNDO: 5,
  REDO: 6,
  HELP: 7,
  ENUM_UNCHECKED: 8,
  //overlaid on icon checkboxes when unchecked
  ENUM_CHECKED: 9,
  //overlaid on icon checkboxes when checked
  LARGE_CHECK: 10,
  //default check mark for non-icon checkboxes
  CURSOR_ARROW: 11,
  NOTE_EXCL: 12,
  //notification exclamation mark
  SCROLL_DOWN: 13,
  SCROLL_UP: 14,
  BACKSPACE: 15,
  LEFT_ARROW: 16,
  RIGHT_ARROW: 17,
  UI_EXPAND: 18,
  //triangle
  UI_COLLAPSE: 19,
  //triangle
  BOLD: 20,
  ITALIC: 21,
  UNDERLINE: 22,
  STRIKETHRU: 23,
  TREE_EXPAND: 24,
  TREE_COLLAPSE: 25,
  ZOOM_OUT: 26,
  ZOOM_IN: 27
};
function loadDefaultIconSheet() {
  let iconSheet = document.createElement("img");
  iconSheet.src = iconSvg;
  return iconSheet;
}
__name(loadDefaultIconSheet, "loadDefaultIconSheet");

// scripts/path.ux/scripts/simple/file.js
var FileHeader = class {
  static {
    __name(this, "FileHeader");
  }
  constructor(version, magic, flags) {
    this.magic = magic;
    this.flags = flags;
    this.version_major = version ? version[0] : 0;
    this.version_minor = version ? version[1] : 0;
    this.version_micro = version ? version[2] : 0;
    this.schema = struct_default.write_scripts();
  }
};
FileHeader.STRUCT = `
simple.FileHeader {
  magic         : static_string[4];
  version_major : short;
  version_minor : short;
  version_micro : short;
  flags         : short;
  schema        : string; 
}
`;
struct_default.register(FileHeader);
var FileFull = class extends FileHeader {
  static {
    __name(this, "FileFull");
  }
  constructor(version, magic, flags) {
    super(version, magic, flags);
    this.objects = [];
  }
};
FileFull.STRUCT = struct_default.inherit(FileFull, FileHeader) + `
  objects : array(abstract(Object));
  screen  : abstract(Object);
}
`;
struct_default.register(FileFull);
var FileArgs = class {
  static {
    __name(this, "FileArgs");
  }
  constructor(args = {}) {
    this.ext = args.ext || ".data";
    this.magic = args.magic || "STRT";
    this.doScreen = args.doScreen !== void 0 ? args.doScreen : true;
    this.resetOnLoad = args.resetOnLoad !== void 0 ? args.resetOnLoad : true;
    this.useJSON = args.useJSON !== void 0 ? args.useJSON : false;
    this.version = args.version !== void 0 ? args.version : 0;
    this.fileFlags = args.fileFlags !== void 0 ? args.fileFlags : 0;
    this.fromFileOp = false;
  }
};
var EmptyStruct = class {
  static {
    __name(this, "EmptyStruct");
  }
};
EmptyStruct.STRUCT = `
EmptyStruct {
}
`;
struct_default.register(EmptyStruct);
function saveFile(appstate, args, objects) {
  if (args.useJSON === void 0) {
    args.useJSON = appstate.saveFilesInJSON;
  }
  args = new FileArgs(args);
  let version = args.version;
  if (typeof version === "number") {
    if (version === Math.floor(version)) {
      version = [version, 0, 0];
    } else {
      let major = ~~version;
      let minor = ~~(Math.fract(version) * 10);
      let micro = (Math.fract(version) - minor) * 100;
      version = [major, minor, micro];
    }
  }
  let file = new FileFull(version, args.magic, args.fileFlags);
  if (args.doScreen) {
    file.screen = appstate.screen;
  } else {
    file.screen = new EmptyStruct();
  }
  for (let ob of objects) {
    file.objects.push(ob);
  }
  if (args.useJSON) {
    return struct_default.writeJSON(file);
  } else {
    let data = [];
    struct_default.writeObject(data, file);
    return new Uint8Array(data).buffer;
  }
}
__name(saveFile, "saveFile");
function loadFile(appstate, args, data) {
  let header;
  if (args.useJSON === void 0) {
    args.useJSON = appstate.saveFilesInJSON;
  }
  args = new FileArgs(args);
  if (!args.useJSON) {
    if (data instanceof Array) {
      data = new Uint8Array(data).buffer;
    }
    if (data instanceof Uint8Array) {
      data = data.buffer;
    }
    if (data instanceof ArrayBuffer) {
      data = new DataView(data);
    }
    header = struct_default.readObject(data, FileHeader);
  } else {
    if (typeof data === "string") {
      data = JSON.parse(data);
    }
    header = struct_default.readJSON(data, FileHeader);
  }
  if (header.magic !== args.magic) {
    throw new Error("invalid file");
  }
  let istruct = new struct_default.STRUCT();
  istruct.parse_structs(header.schema);
  let ret;
  if (!args.useJSON) {
    ret = istruct.readObject(data, FileFull);
  } else {
    ret = istruct.readJSON(data, FileFull);
  }
  if (args.resetOnLoad) {
    appstate.reset();
  }
  if (args.doScreen) {
    if (appstate.screen) {
      appstate.screen.unlisten();
      appstate.screen.remove();
    }
    ret.screen.ctx = appstate.ctx;
    if (!(ret.screen instanceof appstate.screenClass)) {
      let screen = UIBase2.createElement(appstate.screenClass.define().tagname);
      screen.ctx = appstate.ctx;
      for (let sarea of ret.screen.sareas) {
        screen.appendChild(sarea);
        sarea.area.afterSTRUCT();
        sarea.area.on_fileload();
      }
      ret.screen = screen;
    }
    appstate.screen = ret.screen;
    document.body.appendChild(appstate.screen);
    appstate.screen.listen();
  }
  return ret;
}
__name(loadFile, "loadFile");

// scripts/path.ux/scripts/simple/menubar.js
var MenuBarEditor = class extends Editor {
  static {
    __name(this, "MenuBarEditor");
  }
  constructor() {
    super();
    this.updateHeight();
    this.borderLock = 1 | 2 | 4 | 8;
    this.areaDragToolEnabled = false;
    this._height = 25;
    this.needsRebuild = false;
  }
  get height() {
    return this._height;
  }
  set height(v) {
    this._height = v;
    this.updateHeight();
  }
  static define() {
    return {
      tagname: "simple-menu-editor-x",
      areaname: "menu",
      uiname: "Menu Bar",
      icon: -1,
      //hide in editor list
      flag: AreaFlags.HIDDEN | AreaFlags.NO_HEADER_CONTEXT_MENU | AreaFlags.NO_COLLAPSE | AreaFlags.NO_SWITCHER
    };
  }
  updateHeight(force = false) {
    if (!this.header)
      return;
    if (window.haveElectron) {
      this.maxSize[1] = this.minSize[1] = 1;
      electron_api.initMenuBar(this);
      return;
    }
    if (this._height === void 0) {
      let rect = this.header.getClientRects()[0];
      if (rect) {
        this._height = rect.height;
      }
    }
    let update = force || this._height !== this.minSize[1];
    this.minSize[1] = this.maxSize[1] = this._height;
    if (update && this.ctx && this.getScreen()) {
      this.getScreen().solveAreaConstraints();
    }
  }
  makeMenuBar(container) {
    if (Editor.makeMenuBar) {
      Editor.makeMenuBar(this.ctx, container, this);
    }
  }
  flagRebuild() {
    this.needsRebuild = true;
  }
  init() {
    super.init();
    this.background = this.getDefault("AreaHeaderBG");
    this.menuRow = this.header.row();
    this.makeMenuBar(this.menuRow);
    this.doOnce(() => {
      if (window.haveElectron) {
        this.height = 1;
        electron_api.initMenuBar(this);
      }
    });
    this.updateHeight(true);
    this.flushUpdate();
  }
  rebuild() {
    this.needsRebuild = false;
    this.menuRow.clear();
    this.makeMenuBar(this.menuRow);
    this.flushUpdate();
  }
  update() {
    if (this.needsRebuild) {
      this.rebuild();
    }
  }
};
MenuBarEditor.STRUCT = struct_default.inherit(MenuBarEditor, Editor, "MenuBarEditor") + `
}
`;
function registerMenuBarEditor() {
  Editor.register(MenuBarEditor);
}
__name(registerMenuBarEditor, "registerMenuBarEditor");

// scripts/path.ux/scripts/simple/app_ops.js
var SimpleAppNewOp = class extends ToolOp {
  static {
    __name(this, "SimpleAppNewOp");
  }
  static tooldef() {
    return {
      uiname: "New",
      toolpath: "app.new",
      inputs: {},
      undoflag: UndoFlags.NO_UNDO
    };
  }
  exec(ctx) {
    _appstate.createNewFile();
  }
};
var SimpleAppSaveOp = class extends ToolOp {
  static {
    __name(this, "SimpleAppSaveOp");
  }
  static tooldef() {
    return {
      uiname: "Save",
      toolpath: "app.save",
      inputs: {
        forceDialog: new BoolProperty()
      },
      undoflag: UndoFlags.NO_UNDO
    };
  }
  exec(ctx) {
    let ext = _appstate.fileExt;
    let useJSON = _appstate.startArgs.saveFilesInJSON;
    _appstate.saveFile({
      doScreen: true,
      useJSON,
      fromFileOp: true
    }).then((data) => {
      function save() {
        return data;
      }
      __name(save, "save");
      platform.showSaveDialog("Save As", save, {
        multi: false,
        addToRecentList: true,
        filters: [{
          name: "File",
          mime: useJSON ? "text/json" : "application/x-octet-stream",
          extensions: ["." + ext.toLowerCase()]
        }]
      }).then((path) => {
        _appstate.currentFileRef = path;
        message("File saved");
      }).catch((err) => {
        if (typeof err === "object" && err.message) {
          err = err.message;
        }
        error("Failed to save file " + err);
      });
    });
  }
};
var SimpleAppOpenOp = class extends ToolOp {
  static {
    __name(this, "SimpleAppOpenOp");
  }
  static tooldef() {
    return {
      uiname: "Open",
      toolpath: "app.open",
      inputs: {
        forceDialog: new BoolProperty()
      },
      undoflag: UndoFlags.NO_UNDO
    };
  }
  exec(ctx) {
    let ext = _appstate.fileExt;
    let useJSON = _appstate.startArgs.saveFilesInJSON;
    let mime = useJSON ? "text/json" : "application/x-octet-stream";
    platform.showOpenDialog("Open File", {
      multi: false,
      addToRecentList: true,
      filters: [{
        name: "File",
        mime,
        extensions: ["." + ext.toLowerCase()]
      }]
    }).then((paths) => {
      for (let path of paths) {
        platform.readFile(path, mime).then((data) => {
          console.log("got data!", data);
          _appstate.loadFile(data, { useJSON, doScreen: true, fromFileOp: true }).catch((err) => {
            error("File error: " + err.message);
          });
        });
      }
    }).catch((error2) => {
      ctx.error(error2.message);
    });
  }
};
function register() {
  ToolOp.register(SimpleAppSaveOp);
  ToolOp.register(SimpleAppOpenOp);
  ToolOp.register(SimpleAppNewOp);
}
__name(register, "register");

// scripts/path.ux/scripts/simple/app.js
var DataModelClasses = [];
var DataModel = class {
  static {
    __name(this, "DataModel");
  }
  static defineAPI(api, strct) {
    return strct;
  }
  /** Automatically registers cls with nstructjs
   *  and handles STRUCT inheritance.
   */
  static register(cls) {
    if (!cls.hasOwnProperty("defineAPI")) {
    }
    DataModelClasses.push(cls);
    if (cls.hasOwnProperty("STRUCT") && !struct_default.isRegistered(cls)) {
      cls.STRUCT = struct_default.inlineRegister(cls, cls.STRUCT);
    }
  }
};
var EmptyContextClass = class extends Context {
  static {
    __name(this, "EmptyContextClass");
  }
  static defineAPI(api, strct) {
  }
};
function GetContextClass(ctxClass) {
  let ok = 0;
  let cls = ctxClass;
  while (cls) {
    if (cls === Context) {
      ok = 1;
    } else if (cls === ContextOverlay) {
      ok = 2;
    }
    cls = cls.__proto__;
  }
  if (ok === 1) {
    return ctxClass;
  }
  let OverlayDerived;
  if (ok === 2) {
    OverlayDerived = ctxClass;
  } else {
    OverlayDerived = makeDerivedOverlay(ctxClass);
  }
  class Overlay extends OverlayDerived {
    static {
      __name(this, "Overlay");
    }
    constructor(state) {
      super(state);
    }
    get screen() {
      return this.state.screen;
    }
    get api() {
      return this.state.api;
    }
    get toolstack() {
      return this.state.toolstack;
    }
    get toolDefaults() {
      return SavedToolDefaults;
    }
    get last_tool() {
      return this.toolstack.head;
    }
    message(msg, timeout = 2500) {
      return message(this.screen, msg, timeout);
    }
    error(msg, timeout = 2500) {
      return error(this.screen, msg, timeout);
    }
    warning(msg, timeout = 2500) {
      return warning(this.screen, msg, timeout);
    }
    progressBar(msg, percent, color, timeout = 1e3) {
      return progbarNote(this.screen, msg, percent, color, timeout);
    }
  }
  Context.register(Overlay);
  return class ContextDerived extends Context {
    static {
      __name(this, "ContextDerived");
    }
    constructor(state) {
      super(state);
      this.pushOverlay(new Overlay(state));
    }
    static defineAPI(api, st) {
      return Overlay.defineAPI(api, st);
    }
  };
}
__name(GetContextClass, "GetContextClass");
function makeAPI(ctxClass) {
  let api = new DataAPI();
  for (let cls of DataModelClasses) {
    if (cls.defineAPI) {
      cls.defineAPI(api, api.mapStruct(cls, true));
    }
  }
  for (let k in areaclasses) {
    areaclasses[k].defineAPI(api, api.mapStruct(areaclasses[k], true));
  }
  if (ctxClass.defineAPI) {
    ctxClass.defineAPI(api, api.mapStruct(ctxClass, true));
  } else {
    throw new Error("Context class should have a defineAPI static method");
  }
  api.rootContextStruct = api.mapStruct(ctxClass, api.mapStruct(ctxClass, true));
  buildToolSysAPI(api, false, api.rootContextStruct, ctxClass, true);
  return api;
}
__name(makeAPI, "makeAPI");
var StartArgs = class {
  static {
    __name(this, "StartArgs");
  }
  constructor() {
    this.singlePage = true;
    this.icons = Icons3;
    this.iconsheet = void 0;
    this.iconSizes = [16, 24, 32, 48];
    this.iconTileSize = 32;
    this.iconsPerRow = 16;
    this.theme = void 0;
    this.registerSaveOpenOps = true;
    this.autoLoadSplineTemplates = true;
    this.showPathsInToolTips = true;
    this.enableThemeAutoUpdate = false;
    this.addHelpPickers = false;
    this.useNumSliderTextboxes = true;
    this.numSliderArrowLimit = const_default.numSliderArrowLimit;
    this.simpleNumSliders = const_default.simpleNumSliders;
  }
};
var SimpleScreen = class extends Screen2 {
  static {
    __name(this, "SimpleScreen");
  }
  constructor() {
    super();
    this.keymap = new KeyMap([
      new HotKey("Z", ["CTRL"], () => {
        this.ctx.toolstack.undo(this.ctx);
      }),
      new HotKey("Z", ["CTRL", "SHIFT"], () => {
        this.ctx.toolstack.redo(this.ctx);
      })
    ]);
  }
  static define() {
    return {
      tagname: "simple-screen-x"
    };
  }
  init() {
    if (this.ctx.state.startArgs.registerSaveOpenOps) {
      this.keymap.add(new HotKey("S", ["CTRL"], "app.save()"));
      this.keymap.add(new HotKey("O", ["CTRL"], "app.open()"));
    }
  }
  setCSS() {
    super.setCSS();
    this.style["position"] = UIBase2.PositionKey;
    this.style["left"] = this.pos[0] + "px";
    this.style["top"] = this.pos[1] + "px";
  }
};
UIBase2.register(SimpleScreen);
var AppState = class _AppState {
  static {
    __name(this, "AppState");
  }
  /** ctxClass is the context class.  It can be either a simple class
   *  or a subclass of the more complex path.ux Context class.  Note that
   *  using Context will avoid subtle undo stack errors caused by the context
   *  changing after a tool is run (this is why Context has a serialization
   *  mechanism).
   *
   *  Path.ux will actually subclass ctxClass and add a few standard methods
   *  and properties, see GetContextClass.*/
  constructor(ctxClass, screenClass = SimpleScreen) {
    this._ctxClass = ctxClass;
    ctxClass = GetContextClass(ctxClass);
    this.startArgs = void 0;
    this.currentFileRef = void 0;
    this.api = makeAPI(ctxClass);
    this.ctx = new ctxClass(this);
    this.ctx._state = this;
    this.toolstack = new ToolStack();
    this.screenClass = screenClass;
    this.screen = void 0;
    this.fileMagic = "STRT";
    this.fileVersion = [0, 0, 1];
    this._fileExt = "data";
    this._fileExtSet = false;
    this.saveFilesInJSON = false;
    this.defaultEditorClass = void 0;
  }
  get fileExt() {
    return this._fileExt;
  }
  set fileExt(ext) {
    this._fileExt = ext;
    this._fileExtSet = true;
  }
  /** resets the undo stack */
  reset() {
    this.toolstack.reset();
  }
  /** Create a new file. See this.makeScreen() if you wish
   *  to create a new screen at this time, and this.reset()
   *  if you wish to reset the undo stack*/
  createNewFile() {
    console.warn("appstate.createNewFile: implement me, using default hack");
    let state = new this.constructor(this.ctx._ctxClass);
    state.api = this.api;
    state.ctx = this.ctx;
    state.startArgs = this.startArgs;
    state.saveFilesInJSON = this.saveFilesInJSON;
    state.toolstack = this.toolstack;
    state.toolstack.reset();
    this.screen.unlisten();
    this.screen.remove();
    for (let k in state) {
      this[k] = state[k];
    }
    this.makeScreen();
  }
  saveFileSync(objects, args = {}) {
    args = new FileArgs(Object.assign({
      magic: this.fileMagic,
      version: this.fileVersion,
      ext: this.fileExt
    }, args));
    return saveFile(this, args, objects);
  }
  /** Serialize the application state. Takes
   *  a list of objects to save (with nstructjs);
   *  Subclasses should override this, like so:
   *
   *  saveFile(args={}) {
   *    let objects = app state;
   *    return super.saveFile(objects, args);
   *  }
   **/
  saveFile(objects, args = {}) {
    args = new FileArgs(Object.assign({
      magic: this.fileMagic,
      version: this.fileVersion,
      ext: this.fileExt
    }, args));
    return new Promise((accept, reject) => {
      accept(this.saveFileSync(objects, args));
    });
  }
  loadFileSync(data, args = {}) {
    args = new FileArgs(Object.assign({
      magic: this.fileMagic,
      version: this.fileVersion,
      ext: this.fileExt
    }, args));
    let ret = loadFile(this, args, data);
    if (args.doScreen) {
      try {
        this.ensureMenuBar();
      } catch (error2) {
        console.error(error2.stack);
        console.error(error2.message);
        console.error("Failed to add menu bar");
      }
      this.screen.completeSetCSS();
      this.screen.completeUpdate();
    }
    return ret;
  }
  /**
   *  Loads a new file. The default behavior is a
   *  complete state reset (you can control this
   *  with args.reset_toolstack, args.reset_context
   *  and args.doScreen).
   *
   *  As the base class cannot know just what to do
   *  with the loaded data (the objects parameter
   *  passed to saveFile) it is recommended you
   *  override this function like so:
   *
   *  loadFile(data, args) {
   *    return super.loadFile(data, args).then(fileData) => {
   *      // load fileData.objects into appropriate properties
   *      // this is the same objects array originally passed
   *      // to this.saveFile
   *      this.data = fileData.objects;
   *    });
   *  }
   *
   *  @param {ArrayBuffer|JSON|DataView} data
   *  @param {FileArgs} args
   *  */
  loadFile(data, args = {}) {
    return new Promise((accept, reject) => {
      accept(this.loadFileSync(data, args));
    });
  }
  ensureMenuBar() {
    let screen = this.screen;
    let ok = false;
    for (let sarea2 of screen.sareas) {
      if (sarea2.area instanceof MenuBarEditor) {
        ok = true;
        break;
      }
    }
    if (ok) {
      return;
    }
    if (!Editor.makeMenuBar) {
      return;
    }
    screen.update();
    let sarea = UIBase2.createElement("screenarea-x");
    screen.appendChild(sarea);
    let h = 55;
    let min = new Vector2().addScalar(1e17);
    let max = new Vector2().addScalar(-1e17);
    let tmp = new Vector2();
    for (let sarea2 of screen.sareas) {
      if (sarea2 === sarea) {
        continue;
      }
      min.min(sarea2.pos);
      tmp.load(sarea2.pos).add(sarea2.size);
      max.max(tmp);
    }
    let scale = (max[1] - min[1] - h) / (max[1] - min[1]);
    for (let sarea2 of screen.sareas) {
      if (sarea2 === sarea) {
        continue;
      }
      sarea2.pos[1] *= scale;
      sarea2.size[1] *= scale;
      sarea2.pos[1] += h;
    }
    sarea.pos.zero();
    sarea.size[0] = screen.size[0];
    sarea.size[1] = h;
    screen.regenScreenMesh();
    screen.snapScreenVerts();
    sarea.switch_editor(MenuBarEditor);
    screen.solveAreaConstraints();
    screen.completeSetCSS();
    screen.completeUpdate();
  }
  makeScreen() {
    if (this.screen) {
      this.screen.unlisten();
      this.screen.remove();
    }
    let screen = this.screen = UIBase2.createElement(this.screenClass.define().tagname);
    let sarea = UIBase2.createElement("screenarea-x");
    screen.ctx = this.ctx;
    sarea.ctx = this.ctx;
    document.body.appendChild(screen);
    let cls = this.defaultEditorClass;
    if (!cls) {
      for (let k in areaclasses) {
        cls = areaclasses[k];
        if (cls !== MenuBarEditor) {
          break;
        }
      }
    }
    sarea.switch_editor(cls);
    screen.appendChild(sarea);
    screen._init();
    screen.listen();
    screen.update();
    screen.completeSetCSS();
    screen.completeUpdate();
    if (Editor.makeMenuBar) {
      this.ensureMenuBar();
    }
  }
  start(args = new StartArgs()) {
    struct_default.validateStructs();
    let args2 = new StartArgs();
    let methodsCheck = [
      "saveFile",
      "createNewFile",
      "loadFile"
    ];
    for (let method of methodsCheck) {
      let m1 = _AppState.prototype[method];
      let m2 = this[method];
      if (m1 === m2) {
        console.warn(`Warning: it is recommended to override .${method} when subclassing simple.AppState`);
      }
    }
    document.body.style["touch-action"] = "none";
    registerMenuBarEditor();
    for (let k in args2) {
      if (args[k] === void 0) {
        args[k] = args2[k];
      }
    }
    if (args.registerSaveOpenOps) {
      register();
    }
    if (!args.iconsheet) {
      args.iconsheet = loadDefaultIconSheet();
    }
    this.startArgs = args;
    const_default.loadConstants(args);
    if (args.autoLoadSplineTemplates) {
      initSplineTemplates();
    }
    let sizes = [];
    let images = [];
    for (let size of args.iconSizes) {
      sizes.push([args.iconTileSize, size]);
      images.push(args.iconsheet);
    }
    window.iconsheet = args.iconsheet;
    let iconManager = new IconManager(images, sizes, args.iconsPerRow);
    setIconManager(iconManager);
    setIconMap(args.icons);
    if (args.theme) {
      setTheme(args.theme);
    }
    document.body.style["margin"] = "0px";
    document.body.style["padding"] = "0px";
    if (args.singlePage) {
      document.body.style["overflow"] = "hidden";
    }
    this.makeScreen();
    Object.defineProperty(window, "C", {
      get() {
        return this._appstate.ctx;
      }
    });
    struct_default.validateStructs();
    if (this.saveFilesInJSON && !this._fileExtSet) {
      this._fileExt = "json";
    }
    if (this._fileExt.startsWith(".")) {
      this._fileExt = this._fileExt.slice(1, this._fileExt.length).trim();
    }
  }
};

// scripts/path.ux/scripts/simple/context_class.js
var SimpleContext = class {
  static {
    __name(this, "SimpleContext");
  }
  constructor() {
  }
  static getContextClass() {
    let props = {};
    let rec = /* @__PURE__ */ __name((cls) => {
      let prototype = cls.prototype;
      if (cls.__proto__ !== Object.__proto__) {
        rec(cls);
      }
      for (let k in cls) {
        let descr = Object.getOwnPropertyDescriptor(prototype, k);
        if (descr) {
          props[k] = descr;
        }
      }
    }, "rec");
    console.log(props);
    for (let k in props) {
      if (k.search("_save") >= 0 || k.search("_load") >= 0) {
        continue;
      }
    }
  }
};

// scripts/path.ux/scripts/pathux.js
setNotifier(ui_noteframe_exports);

// scripts/core/mesh_base.ts
var MeshTypes = /* @__PURE__ */ ((MeshTypes2) => {
  MeshTypes2[MeshTypes2["VERTEX"] = 1] = "VERTEX";
  MeshTypes2[MeshTypes2["EDGE"] = 2] = "EDGE";
  MeshTypes2[MeshTypes2["HANDLE"] = 4] = "HANDLE";
  MeshTypes2[MeshTypes2["LOOP"] = 8] = "LOOP";
  MeshTypes2[MeshTypes2["LOOPLIST"] = 16] = "LOOPLIST";
  MeshTypes2[MeshTypes2["FACE"] = 32] = "FACE";
  return MeshTypes2;
})(MeshTypes || {});
var MeshFlags = /* @__PURE__ */ ((MeshFlags2) => {
  MeshFlags2[MeshFlags2["NONE"] = 0] = "NONE";
  MeshFlags2[MeshFlags2["SELECT"] = 1] = "SELECT";
  MeshFlags2[MeshFlags2["HIDE"] = 2] = "HIDE";
  return MeshFlags2;
})(MeshFlags || {});
var MeshFeatures = /* @__PURE__ */ ((MeshFeatures2) => {
  MeshFeatures2[MeshFeatures2["NONE"] = 0] = "NONE";
  MeshFeatures2[MeshFeatures2["HANDLES"] = 1] = "HANDLES";
  return MeshFeatures2;
})(MeshFeatures || {});

// scripts/config/config.js
var config_default = {
  MESH_HANDLES: true,
  SELECTMASK: 1 /* VERTEX */ | 4 /* HANDLE */ | 2 /* EDGE */ | 32 /* FACE */,
  ENABLE_EXTRUDE: true,
  AUTOSAVE: false,
  AUTOSAVE_INTERVAL_MS: 1500,
  DRAW_TEST_IMAGES: false
};

// scripts/toolmode/toolmode_base.js
var ToolModeClasses = [];
var ToolModeBase = class extends simple_exports.DataModel {
  static {
    __name(this, "ToolModeBase");
  }
  static STRUCT = struct_default.inlineRegister(this, `
ToolModeBase {
  sideBarUIData : string;
}
  `);
  static toolModeDef() {
    return {
      uiName: "",
      typeName: "",
      icon: -1,
      description: ""
    };
  }
  static getClass(name2) {
    for (let cls of ToolModeClasses) {
      if (cls.toolModeDef().typeName === name2) {
        return name2;
      }
    }
  }
  static makeEnumProp() {
    let enumdef = {};
    let uinames = {};
    let icons = {};
    let descr = {};
    let i = 0;
    for (let cls of ToolModeClasses) {
      let def = cls.toolModeDef();
      let key = def.typeName;
      enumdef[key] = i;
      uinames[key] = def.uiName ?? ToolProperty.makeUIName(key);
      icons[key] = def.icon ?? -1;
      descr[key] = def.description ?? "";
      i++;
    }
    return new EnumProperty(0, enumdef).addUINames(uinames).addDescriptions(descr).addIcons(icons);
  }
  static register(cls) {
    let def = cls.toolModeDef();
    if (!cls.hasOwnProperty("toolModeDef")) {
      throw new Error("Missing toolModeDef!");
    }
    if (!cls.hasOwnProperty("STRUCT")) {
      throw new Error("Missing STRUCT script");
    }
    if (!def.typeName) {
      throw new Error("missing typeName for toolmode");
    }
    simple_exports.DataModel.register(cls);
    ToolModeClasses.push(cls);
  }
  constructor(ctx) {
    super();
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
};
var PickData = class {
  static {
    __name(this, "PickData");
  }
  constructor(elem2, type, dist) {
    this.elem = elem2;
    this.type = type;
    this.dist = dist;
  }
  load(elem2, type, dist) {
    this.elem = elem2;
    this.type = type;
    this.dist = dist;
    return this;
  }
};

// scripts/core/bezier.js
function cubic(k1, k2, k3, k4, s) {
  return -(k1 * s ** 3 - 3 * k1 * s ** 2 + 3 * k1 * s - k1 - 3 * k2 * s ** 3 + 6 * k2 * s ** 2 - 3 * k2 * s + 3 * k3 * s ** 3 - 3 * k3 * s ** 2 - k4 * s ** 3);
}
__name(cubic, "cubic");
function dcubic(k1, k2, k3, k4, s) {
  return -3 * ((s - 1) ** 2 * k1 - k4 * s ** 2 + (3 * s - 2) * k3 * s - (3 * s - 1) * (s - 1) * k2);
}
__name(dcubic, "dcubic");
function d2cubic(k1, k2, k3, k4, s) {
  return -6 * (k1 * s - k1 - 3 * k2 * s + 2 * k2 + 3 * k3 * s - k3 - k4 * s);
}
__name(d2cubic, "d2cubic");
var offsetdvs = util_exports.cachering.fromConstructor(Vector3, 64);
function cubicOffsetDv(a2, b, c, d, s, radius) {
  let dv = offsetdvs.next();
  let dv2 = offsetdvs.next();
  for (let i = 0; i < 2; i++) {
    dv[i] = dcubic(a2[i], b[i], c[i], d[i], s);
    dv2[i] = d2cubic(a2[i], b[i], c[i], d[i], s);
  }
  let [dx, dy] = dv;
  let [dx2, dy2] = dv2;
  let sqrt = Math.sqrt;
  let ret = offsetdvs.next();
  if (dx === 0 && dy === 0) {
    return ret.load(d).sub(a2);
  }
  const div = sqrt(dx ** 2 + dy ** 2) * (dx ** 2 + dy ** 2);
  ret[0] = (sqrt(dx ** 2 + dy ** 2) * dx ** 2 + sqrt(dx ** 2 + dy ** 2) * dy ** 2 + dx * dy2 * radius - dx2 * dy * radius) * dx / div;
  ret[1] = (sqrt(dx ** 2 + dy ** 2) * dx ** 2 + sqrt(dx ** 2 + dy ** 2) * dy ** 2 + dx * dy2 * radius - dx2 * dy * radius) * dy / div;
  return ret;
}
__name(cubicOffsetDv, "cubicOffsetDv");

// scripts/core/mesh.ts
"use strict";
var MeshVector = Vector3;
var sel = [1, 0.8, 0, 1];
var high = [1, 0.8, 0.7, 1];
var act = [0, 0.3, 0.8, 1];
var actsel = [0.5, 0.3, 0.8, 1];
var mix = /* @__PURE__ */ __name((a2, b, fac) => new Vector4(a2).interp(b, fac), "mix");
var ElemColors = [
  [0, 0, 0, 1],
  //0    0
  sel,
  //001  1 Select
  act,
  //010  2 Active
  mix(sel, actsel, 0.25),
  //011  3 Select+Active
  high,
  //100  4 Highlight
  mix(high, sel, 0.5),
  //101  5 Highlight+Select
  mix(high, actsel, 0.5),
  //110  6 Highlight+Active
  new Vector4(high).add(sel).add(actsel).mulScalar(0.3333)
  //111  7 Highlight+Select+Active
];
for (let i = 0; i < ElemColors.length; i++) {
  ElemColors[i] = new Vector4(ElemColors[i]);
}
console.log(ElemColors);
function getElemColor(list4, e) {
  let mask = 0;
  if (e.flag & 1 /* SELECT */) {
    mask |= 1;
  }
  if (e === list4.active) {
    mask |= 2;
  }
  if (e === list4.highlight) {
    mask |= 4;
  }
  return ElemColors[mask];
}
__name(getElemColor, "getElemColor");
var Element = class {
  static {
    __name(this, "Element");
  }
  static {
    this.STRUCT = struct_default.inlineRegister(
      this,
      `
mesh.Element {
  type     : int;
  flag     : int;
  index    : int;
  eid      : int;
}`
    );
  }
  constructor(type) {
    this.type = type;
    this.flag = this.index = 0;
    this.eid = -1;
    this._index = -1;
  }
  [Symbol.keystr]() {
    return this.eid;
  }
  toJSON() {
    return {
      type: this.type,
      flag: this.flag,
      index: this.index,
      eid: this.eid
    };
  }
  loadSTRUCT(reader) {
    reader(this);
  }
};
var Vertex = class extends Element {
  static {
    __name(this, "Vertex");
  }
  static {
    this.STRUCT = struct_default.inlineRegister(
      this,
      `
mesh.Vertex {
  co          : ${MeshVector.structName};
  edges       : array(e, int) | e.eid;
}`
    );
  }
  constructor(co) {
    super(1 /* VERTEX */);
    this.co = new MeshVector(co);
    this.edges = [];
  }
  get 0() {
    debugger;
    return NaN;
  }
  get 1() {
    debugger;
    return NaN;
  }
  get 2() {
    debugger;
    return NaN;
  }
  otherEdge(e) {
    if (this.edges.length !== 2) {
      throw new Error("otherEdge only works on 2-valence vertices");
    }
    if (e === this.edges[0]) return this.edges[1];
    else if (e === this.edges[1]) return this.edges[0];
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
    this.co = new MeshVector(this.co);
  }
};
var Handle = class extends Element {
  static {
    __name(this, "Handle");
  }
  static {
    this.STRUCT = struct_default.inlineRegister(
      this,
      `
mesh.Handle {
  co          : ${MeshVector.structName};
  owner       : int | this.owner ? this.owner.eid : -1;
}`
    );
  }
  constructor(co) {
    super(4 /* HANDLE */);
    this.co = new MeshVector();
    if (co !== void 0) {
      this.co.load(co);
    }
    this.owner = void 0;
  }
  get 0() {
    debugger;
    return NaN;
  }
  get 1() {
    debugger;
    return NaN;
  }
  get 2() {
    debugger;
    return NaN;
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
    this.co = new MeshVector(this.co);
  }
};
var _evaluate_vs = util_exports.cachering.fromConstructor(MeshVector, 64);
var _offset_dvs = util_exports.cachering.fromConstructor(MeshVector, 64);
var _derivative_vs = util_exports.cachering.fromConstructor(MeshVector, 64);
var _derivative2_vs = util_exports.cachering.fromConstructor(MeshVector, 64);
var _normal_vs = util_exports.cachering.fromConstructor(MeshVector, 64);
var Edge = class extends Element {
  static {
    __name(this, "Edge");
  }
  constructor() {
    super(2 /* EDGE */);
    this.h1 = this.h2 = void 0;
    this.l = void 0;
  }
  get loops() {
    let this2 = this;
    return function* () {
      if (!this2.l) {
        return;
      }
      let l = this2.l;
      let _i = 0;
      do {
        if (_i++ > 100) {
          console.warn("Infinite loop detected!", this2.eid);
          break;
        }
        yield l;
        l = l.radial_next;
      } while (l !== this2.l);
    }();
  }
  evaluate(t) {
    const p = _evaluate_vs.next();
    if (this.h1) {
      const { v1, h1, h2, v2 } = this;
      for (let i = 0; i < p.length; i++) {
        p[i] = cubic(v1.co[i], h1.co[i], h2.co[i], v2.co[i], t);
      }
      return p;
    } else {
      return p.load(this.v1.co).interp(this.v2.co, t);
    }
  }
  derivative(t) {
    const p = _derivative_vs.next();
    if (this.h1) {
      const { v1, h1, h2, v2 } = this;
      for (let i = 0; i < p.length; i++) {
        p[i] = dcubic(v1.co[i], h1.co[i], h2.co[i], v2.co[i], t);
      }
    } else {
      return p.load(this.v2.co).sub(this.v1.co);
    }
    return p;
  }
  derivative2(t) {
    const p = _derivative2_vs.next();
    if (this.h1) {
      const { v1, h1, h2, v2 } = this;
      for (let i = 0; i < p.length; i++) {
        p[i] = d2cubic(v1.co[i], h1.co[i], h2.co[i], v2.co[i], t);
      }
    } else {
      return p.zero();
    }
    return p;
  }
  normal(t) {
    let p = _normal_vs.next().load(this.derivative(t));
    p.normalize().swapAxes(0, 1);
    p[1] = -p[1];
    return p;
  }
  offsetDv(t, radius) {
    let dv = cubicOffsetDv(this.v1.co, this.h1.co, this.h2.co, this.v2.co, t, radius);
    return _offset_dvs.next().zero().loadXY(dv[0], dv[1]);
  }
  curvature(t) {
    let dv1 = this.derivative(t);
    let dv2 = this.derivative2(t);
    let ret = (dv1[0] * dv2[1] - dv1[1] * dv2[0]) / Math.pow(dv1.dot(dv1), 3 / 2);
    return ret;
  }
  handle(v) {
    return v === this.v1 ? this.h1 : this.h2;
  }
  vertex(h) {
    return h === this.h1 ? this.v1 : this.v2;
  }
  otherVertex(v) {
    if (v === void 0) throw new Error("v cannot be undefined in Edge.prototype.otherVertex()");
    if (v === this.v1) return this.v2;
    if (v === this.v2) return this.v1;
    throw new Error("vertex " + v.eid + " not in edge");
  }
};
Edge.STRUCT = struct_default.inherit(Edge, Element, "mesh.Edge") + `
  v1   : int | this.v1.eid;
  v2   : int | this.v2.eid;
  h1   : int | this.h1 ? this.h1.eid : -1;
  h2   : int | this.h2 ? this.h2.eid : -1;
  l    : int | this.l ? this.l.eid : -1;
}`;
struct_default.register(Edge);
var Loop = class extends Element {
  static {
    __name(this, "Loop");
  }
  constructor() {
    super(8 /* LOOP */);
    this.radial_next = void 0;
    this.radial_prev = void 0;
  }
  evaluate(t) {
    if (this.v === this.e.v2) {
      t = 1 - t;
    }
    return this.e.evaluate(t);
  }
  normal(t) {
    let sign = 1;
    if (this.v === this.e.v2) {
      t = 1 - t;
      sign = -1;
    }
    return this.e.normal(t).mulScalar(sign);
  }
  derivative(t) {
    let sign = 1;
    if (this.v === this.e.v2) {
      t = 1 - t;
      sign = -1;
    }
    return this.e.derivative(t).mulScalar(sign);
  }
  derivative2(t) {
    let sign = 1;
    if (this.v === this.e.v2) {
      t = 1 - t;
      sign = -1;
    }
    return this.e.derivative2(t).mulScalar(sign);
  }
  offsetDv(t, radius) {
    let sign = 1;
    if (this.v === this.e.v2) {
      t = 1 - t;
      sign = -1;
    }
    return this.e.offsetDv(t, radius).mulScalar(sign);
  }
  get h1() {
    return this.v === this.e.v1 ? this.e.h1 : this.e.h2;
  }
  get h2() {
    return this.v === this.e.v1 ? this.e.h2 : this.e.h1;
  }
};
Loop.STRUCT = struct_default.inherit(Loop, Element, "mesh.Loop") + `
  v : int | this.v.eid;
  e : int | this.e.eid;
}`;
struct_default.register(Loop);
var LoopListIter = class {
  static {
    __name(this, "LoopListIter");
  }
  constructor() {
    this.ret = { done: false, value: void 0 };
    this.stack = void 0;
    this.l = void 0;
    this.list = void 0;
    this.done = false;
    this.i = 0;
  }
  [Symbol.iterator]() {
    return this;
  }
  reset(list4, stack) {
    this.stack = stack;
    this.list = list4;
    this.done = false;
    this.l = list4.l;
    this.i = 0;
    return this;
  }
  next() {
    let ret = this.ret;
    let l = this.l;
    if (this.i++ > 1e5) {
      console.warn("Infinite loop error!");
      return this.finish();
    }
    if (!l) {
      return this.finish();
    }
    this.l = this.l.next;
    if (this.l === this.list.l) {
      this.l = void 0;
    }
    ret.value = l;
    ret.done = false;
    return ret;
  }
  finish() {
    if (!this.done) {
      this.list = void 0;
      this.l = void 0;
      this.ret.value = void 0;
      this.ret.done = true;
      this.stack.cur--;
      this.done = true;
    }
    return this.ret;
  }
  return() {
    return this.finish();
  }
};
var loopstack = new Array(1024);
loopstack.cur = 0;
for (let i = 0; i < loopstack.length; i++) {
  loopstack[i] = new LoopListIter();
}
var LoopList = class extends Element {
  static {
    __name(this, "LoopList");
  }
  constructor() {
    super(16 /* LOOPLIST */);
    this.length = 0;
  }
  get verts() {
    let this2 = this;
    return function* () {
      for (let l of this2) {
        yield l.v;
      }
    }();
  }
  [Symbol.iterator]() {
    return loopstack[loopstack.cur++].reset(this, loopstack);
  }
  _save_loops() {
    return Array.from(this).map((l) => l.eid);
  }
};
LoopList.STRUCT = struct_default.inherit(LoopList, Element, "mesh.LoopList") + `
  _loops : iter(int) | this._save_loops();
}
`;
struct_default.register(LoopList);
var Face = class extends Element {
  static {
    __name(this, "Face");
  }
  constructor() {
    super(32 /* FACE */);
    this.lists = [];
    this.blur = 0;
    this.center = new Vector3();
    this.fillColor = new Vector4([0.5, 0.5, 0.5, 1]);
  }
  get loops() {
    let this2 = this;
    let ret = function* () {
      for (let list4 of this2.lists) {
        for (let l of list4) {
          yield l;
        }
      }
    }();
    Object.defineProperty(ret, "length", {
      get: /* @__PURE__ */ __name(function() {
        let count = 0;
        for (let list4 of this2.lists) {
          for (let l of list4) {
            count++;
          }
        }
        return count;
      }, "get")
    });
    return ret;
  }
  get verts() {
    let this2 = this;
    let ret = function* () {
      for (let list4 of this2.lists) {
        for (let l of list4) {
          yield l.v;
        }
      }
    }();
    Object.defineProperty(ret, "length", {
      get: /* @__PURE__ */ __name(function() {
        let count = 0;
        for (let list4 of this2.lists) {
          for (let l of list4) {
            count++;
          }
        }
        return count;
      }, "get")
    });
    return ret;
  }
  calcCenter() {
    this.center.zero();
    let tot = 0;
    for (let l of this.loops) {
      this.center.add(l.v);
      tot++;
    }
    if (tot) {
      this.center.mulScalar(1 / tot);
    }
    return this.center;
  }
};
Face.STRUCT = struct_default.inherit(Face, Element, "mesh.Face") + `
  lists     : iter(list, int) | list.eid;
  fillColor : vec4;
  blur      : float;
}
`;
struct_default.register(Face);
var ElementSetVisibleIter = class _ElementSetVisibleIter {
  static {
    __name(this, "ElementSetVisibleIter");
  }
  constructor(set2) {
    this.set = set2;
    this.iter = set2[Symbol.iterator]();
  }
  copy() {
    return new _ElementSetVisibleIter(this.set);
  }
  [Symbol.iterator]() {
    return this.copy();
  }
  next() {
    let ret = this.iter.next();
    while (!ret.done && ret.value.flag & 2 /* HIDE */) {
      ret = this.iter.next();
    }
    return ret;
  }
};
var ElementSet = class extends Set {
  static {
    __name(this, "ElementSet");
  }
  constructor(type) {
    super();
    this.type = type;
  }
  get visible() {
    return new ElementSetVisibleIter(this);
  }
  get editable() {
    return this.visible;
  }
  get length() {
    return this.size;
  }
  remove(item) {
    this.delete(item);
  }
};
var ElementListIter = class {
  constructor(list4) {
    this.i = 0;
    this.list = null;
    this.ret = { done: true, value: void 0 };
    this.reset(list4);
  }
  static {
    __name(this, "ElementListIter");
  }
  [Symbol.iterator]() {
    return this.copy().reset(this.list);
  }
  copy() {
    return new VisibleIter(this.list);
  }
  reset(list4) {
    this.list = list4;
    this.i = 0;
    this.skipInvalid();
    return this;
  }
  invalidElem(e) {
    return false;
  }
  skipInvalid() {
    let list4 = this.list;
    while (this.i < list4.length) {
      if (list4[this.i] !== void 0 && !this.invalidElem(list4[this.i])) {
        break;
      }
      this.i++;
    }
  }
  next() {
    if (this.i >= this.list.length) {
      this.ret.value = void 0;
      this.ret.done = true;
      return this.ret;
    }
    this.ret.value = this.list[this.i];
    this.ret.done = false;
    this.i++;
    this.skipInvalid();
    return this.ret;
  }
};
var VisibleIter = class extends ElementListIter {
  static {
    __name(this, "VisibleIter");
  }
  invalidElem(e) {
    return !!(e.flag & 2 /* HIDE */);
  }
};
var ElementArray = class {
  static {
    __name(this, "ElementArray");
  }
  static {
    this.STRUCT = struct_default.inlineRegister(
      this,
      `
  mesh.ElementArray {
    this        : iter(abstract(mesh.Element));
    highlight   : int | this.highlight ? this.highlight.eid : -1;
    active      : int | this.active ? this.active.eid : -1;
    type        : int;
  }
  `
    );
  }
  constructor(type) {
    this.list = [];
    this.length = 0;
    this.type = type;
    this.selected = new ElementSet(type);
    this.on_selected = void 0;
    this.highlight = this.active = void 0;
    this.freelist = [];
  }
  get visible() {
    return new VisibleIter(this.list);
  }
  get editable() {
    return this.visible;
  }
  [Symbol.iterator]() {
    return new ElementListIter(this.list);
  }
  concat(b) {
    let ret = [];
    for (let item of this) {
      ret.push(item);
    }
    for (let item of b) {
      ret.push(item);
    }
    return ret;
  }
  toJSON() {
    let arr = [];
    for (let item of this) {
      arr.push(item);
    }
    let sel2 = [];
    for (let v of this.selected) {
      sel2.push(v.eid);
    }
    return {
      type: this.type,
      array: arr,
      selected: sel2,
      active: this.active !== void 0 ? this.active.eid : -1,
      highlight: this.highlight !== void 0 ? this.highlight.eid : -1
    };
  }
  push(e) {
    e._index = this.list.length;
    this.list.push(e);
    this.length++;
    if (e.flag & 1 /* SELECT */) {
      this.selected.add(e);
    }
    return this;
  }
  remove(e) {
    if (this.selected.has(e)) {
      this.selected.remove(e);
    }
    if (this.active === e) this.active = void 0;
    if (this.highlight === e) this.highlight = void 0;
    if (e._index < 0 || this.list[e._index] !== e) {
      throw new Error("element not in array");
    }
    this.freelist.push(e._index);
    this.list[e._index] = void 0;
    e._index = -1;
    this.length--;
    return this;
  }
  selectNone() {
    for (let e of this) {
      this.setSelect(e, false);
    }
  }
  selectAll() {
    for (let e of this) {
      this.setSelect(e, true);
    }
  }
  setSelect(e, state) {
    if (state) {
      e.flag |= 1 /* SELECT */;
      this.selected.add(e);
    } else {
      e.flag &= ~1 /* SELECT */;
      this.selected.remove(e);
    }
    return this;
  }
  loadSTRUCT(reader) {
    reader(this);
    for (let elem2 of this) {
      if (elem2.flag & 1 /* SELECT */) {
        this.selected.add(elem2);
      }
    }
  }
};
var Mesh = class {
  constructor() {
    this.structureGen = 0;
    this.eidgen = new util_exports.IDGen();
    this.eidMap = /* @__PURE__ */ new Map();
    this.elists = {};
    this.makeElists();
    this.features = 0;
    if (config_default.MESH_HANDLES) {
      this.features |= 1 /* HANDLES */;
    }
  }
  static {
    __name(this, "Mesh");
  }
  static {
    this.STRUCT = struct_default.inlineRegister(
      this,
      `
  mesh.Mesh {
    elists : array(mesh.ElementArray) | this.getElists();
    eidgen : IDGen;  
  }
  `
    );
  }
  clear() {
    this.elists = {};
    this.eidMap = /* @__PURE__ */ new Map();
    this.makeElists();
    return this;
  }
  get haveHandles() {
    return this.features & 1 /* HANDLES */;
  }
  get elements() {
    return this.eidMap.values();
  }
  get hasHighlight() {
    for (let k in this.elists) {
      if (this.elists[k].highlight) {
        return true;
      }
    }
    return false;
  }
  getElists() {
    let ret = [];
    for (let k in this.elists) {
      ret.push(this.elists[k]);
    }
    return ret;
  }
  addElistAliases() {
    this.verts = this.elists[1 /* VERTEX */];
    this.handles = this.elists[4 /* HANDLE */];
    this.edges = this.elists[2 /* EDGE */];
    this.loops = this.elists[8 /* LOOP */];
    this.lists = this.elists[16 /* LOOPLIST */];
    this.faces = this.elists[32 /* FACE */];
  }
  makeElists() {
    for (let k in MeshTypes) {
      if (typeof k === "string" && isNaN(parseFloat(k))) {
        let type = parseInt(MeshTypes[k]);
        this.elists[type] = new ElementArray(type);
      }
    }
    this.addElistAliases();
  }
  _element_init(e) {
    e.eid = this.eidgen.next();
    this.eidMap.set(e.eid, e);
  }
  setActive(elem2) {
    if (!elem2) {
      for (let k in this.elists) {
        this.elists[k].active = void 0;
      }
    } else {
      this.elists[elem2.type].active = elem2;
    }
    return this;
  }
  setHighlight(elem2) {
    let ret = false;
    if (!elem2) {
      for (let k in this.elists) {
        ret = ret || this.elists[k].highlight !== void 0;
        this.elists[k].highlight = void 0;
      }
    } else {
      ret = this.elists[elem2.type].highlight !== elem2;
      this.elists[elem2.type].highlight = elem2;
    }
    return ret;
  }
  makeVertex(co) {
    let v = new Vertex(co instanceof Vertex || co instanceof Handle ? co.co : co);
    this._element_init(v);
    this.verts.push(v);
    return v;
  }
  makeHandle(co) {
    let h = new Handle(co);
    this._element_init(h);
    this.handles.push(h);
    return h;
  }
  getEdge(v1, v2) {
    for (let e of v1.edges) {
      if (e.otherVertex(v1) === v2) return e;
    }
    return void 0;
  }
  ensureEdge(v1, v2) {
    let e = this.getEdge(v1, v2);
    if (!e) {
      e = this.makeEdge(v1, v2);
    }
    return e;
  }
  makeEdge(v1, v2) {
    let e = new Edge();
    e.v1 = v1;
    e.v2 = v2;
    if (this.features & 1 /* HANDLES */) {
      e.h1 = this.makeHandle(v1.co);
      e.h1.co.interp(v2.co, 1 / 2);
      e.h1.owner = e;
      e.h2 = this.makeHandle(v1.co);
      e.h2.co.interp(v2.co, 2 / 3);
      e.h2.owner = e;
    }
    v1.edges.push(e);
    v2.edges.push(e);
    this._element_init(e);
    this.edges.push(e);
    return e;
  }
  killVertex(v) {
    if (v.eid === -1) {
      console.trace("Warning: vertex", v.eid, "already freed", v);
      return;
    }
    let _i = 0;
    while (v.edges.length > 0) {
      this.killEdge(v.edges[0]);
      if (_i++ >= 100) {
        console.warn("mesh integrity warning, infinite loop detected in killVertex");
      }
    }
    this.eidMap.delete(v.eid);
    this.verts.remove(v);
    v.eid = -1;
  }
  killEdge(e) {
    if (e.eid === -1) {
      console.trace("Warning: edge", e.eid, "already freed", e);
      return;
    }
    let _i = 0;
    while (e.l) {
      this.killFace(e.l.f);
      if (_i++ > 1e3) {
        console.log("infinite loop detected");
        break;
      }
    }
    this.edges.remove(e);
    this.eidMap.delete(e.eid);
    if (this.features & 1 /* HANDLES */) {
      this.eidMap.delete(e.h1.eid);
      this.handles.remove(e.h1);
      this.eidMap.delete(e.h2.eid);
      this.handles.remove(e.h2);
    }
    e.eid = -1;
    e.v1.edges.remove(e);
    e.v2.edges.remove(e);
  }
  radialLoopRemove(e, l) {
    if (e.l === l) {
      e.l = e.l.radial_next;
    }
    if (e.l === l) {
      e.l = void 0;
      return;
    }
    l.radial_next.radial_prev = l.radial_prev;
    l.radial_prev.radial_next = l.radial_next;
  }
  radialLoopInsert(e, l) {
    if (!e.l) {
      e.l = l;
      l.radial_next = l.radial_prev = l;
    } else {
      l.radial_prev = e.l;
      l.radial_next = e.l.radial_next;
      e.l.radial_next.radial_prev = l;
      e.l.radial_next = l;
    }
  }
  _killList(list4) {
    this.eidMap.delete(list4.eid);
    this.lists.remove(list4);
    list4.eid = -1;
  }
  killFace(f) {
    for (let list4 of f.lists) {
      for (let l of list4) {
        this.radialLoopRemove(l.e, l);
        this._killLoop(l);
      }
      this._killList(list4);
    }
    this.eidMap.delete(f.eid);
    this.faces.remove(f);
    f.eid = -1;
  }
  addLoopList(f, vs) {
    let list4 = new LoopList();
    this._element_init(list4);
    this.lists.push(list4);
    let lastl, firstl;
    for (let i = 0; i < vs.length; i++) {
      let v1 = vs[i], v2 = vs[(i + 1) % vs.length];
      let e = this.getEdge(v1, v2);
      if (!e) {
        e = this.makeEdge(v1, v2);
      }
      let l = new Loop();
      this._element_init(l);
      this.loops.push(l);
      l.v = v1;
      l.e = e;
      l.f = f;
      l.list = list4;
      this.radialLoopInsert(e, l);
      if (!firstl) {
        firstl = l;
      } else {
        lastl.next = l;
        l.prev = lastl;
      }
      lastl = l;
    }
    firstl.prev = lastl;
    lastl.next = firstl;
    list4.l = firstl;
    f.lists.push(list4);
  }
  makeFace(vs) {
    let f = new Face();
    this._element_init(f);
    this.faces.push(f);
    let list4 = new LoopList();
    this._element_init(list4);
    this.lists.push(list4);
    let lastl, firstl;
    for (let i = 0; i < vs.length; i++) {
      let v1 = vs[i], v2 = vs[(i + 1) % vs.length];
      let e = this.getEdge(v1, v2);
      if (!e) {
        e = this.makeEdge(v1, v2);
      }
      let l = new Loop();
      this._element_init(l);
      this.loops.push(l);
      l.v = v1;
      l.e = e;
      l.f = f;
      l.list = list4;
      this.radialLoopInsert(e, l);
      if (!firstl) {
        firstl = l;
      } else {
        lastl.next = l;
        l.prev = lastl;
      }
      lastl = l;
      list4.length++;
    }
    firstl.prev = lastl;
    lastl.next = firstl;
    list4.l = firstl;
    f.lists.push(list4);
    return f;
  }
  selectFlush(selmode) {
    if (selmode & 1 /* VERTEX */) {
      this.edges.selectNone();
      this.faces.selectNone();
      let set_active = this.edges.active === void 0;
      set_active = set_active || !(this.edges.active && (this.edges.active.v1.flag | this.edges.active.v2.flag) & 1 /* SELECT */);
      for (let e of this.edges) {
        if (e.v1.flag & 1 /* SELECT */ && e.v2.flag & 1 /* SELECT */) {
          this.edges.setSelect(e, true);
          if (this.features & 1 /* HANDLES */) {
            this.handles.setSelect(e.h1, true);
            this.handles.setSelect(e.h2, true);
          }
          if (set_active) {
            this.edges.active = e;
          }
        }
      }
      for (let f of this.faces) {
        let ok = true;
        for (let l of f.loops) {
          if (!(l.e.flag & 1 /* SELECT */)) {
            ok = false;
            break;
          }
        }
        if (ok) {
          this.faces.setSelect(f, true);
        }
      }
    } else if (selmode & 2 /* EDGE */) {
      this.verts.selectNone();
      for (let v of this.verts) {
        for (let e of v.edges) {
          if (e.flag & 1 /* SELECT */) {
            this.verts.setSelect(v, true);
            break;
          }
        }
      }
    }
  }
  reverseEdge(e) {
    let tmp = e.v1;
    e.v1 = e.v2;
    e.v2 = tmp;
    if (e.h1) {
      let tmp2 = e.h1;
      e.h1 = e.h2;
      e.h2 = tmp2;
    }
  }
  splitEdgeMulti(e, steps) {
    let n = steps + 1;
    for (let i = 0; i < steps; i++) {
      let t = 1 / n;
      n--;
      e = this.splitEdge(e, t)[0];
    }
  }
  splitEdge(e, t = 0.5) {
    let nv = this.makeVertex(e.evaluate(t));
    let ne = this.makeEdge(nv, e.v2);
    if (this.features & 1 /* HANDLES */) {
      let dv1 = e.derivative(0).mulScalar(1 / 3);
      let dv2 = e.derivative(t).mulScalar(1 / 3);
      let dv3 = e.derivative(1).mulScalar(1 / 3);
      e.h1.co.load(dv1).mulScalar(t).add(e.v1.co);
      e.h2.co.load(dv2).mulScalar(-t).add(nv.co);
      ne.h1.co.load(dv2).mulScalar(1 - t).add(ne.v1.co);
      ne.h2.co.load(dv3).mulScalar(t - 1).add(ne.v2.co);
    }
    e.v2.edges.remove(e);
    e.v2 = nv;
    nv.edges.push(e);
    if (e.flag & 1 /* SELECT */) {
      this.edges.setSelect(ne, true);
      this.verts.setSelect(nv, true);
    }
    if (e.l) {
      let l = e.l;
      let ls = [];
      let _i = 0;
      do {
        if (_i++ > 10) {
          console.warn("infinite loop detected");
          break;
        }
        ls.push(l);
        l = l.radial_next;
      } while (l !== e.l);
      for (let l2 of ls) {
        let l22 = new Loop();
        this._element_init(l22);
        this.loops.push(l22);
        l22.f = l2.f;
        l22.list = l2.list;
        if (l2.v === e.v1) {
          l22.v = nv;
          l22.e = ne;
          l22.prev = l2;
          l22.next = l2.next;
          l2.next.prev = l22;
          l2.next = l22;
          this.radialLoopInsert(ne, l22);
        } else {
          this.radialLoopRemove(e, l2);
          l22.v = nv;
          l2.e = ne;
          l22.e = e;
          this.radialLoopInsert(ne, l2);
          this.radialLoopInsert(e, l22);
          l2.next.prev = l22;
          l22.prev = l2;
          l22.next = l2.next;
          l2.next = l22;
        }
      }
    }
    return [ne, nv];
  }
  copyElemData(dst, src) {
    this.setSelect(dst, !!(src.flag & 1 /* SELECT */));
    dst.flag = src.flag;
    if (dst instanceof Vertex || dst instanceof Handle) {
      dst.co.load(src.co);
    }
  }
  validate() {
    let ls = /* @__PURE__ */ new Set();
    for (let f of this.faces) {
      for (let l of f.loops) {
        ls.add(l);
      }
    }
    for (let l of ls) {
      this.radialLoopRemove(l.e, l);
    }
    for (let l of this.loops) {
      if (!ls.has(l)) {
        console.warn("Orphaned loop");
        this._killLoop(l);
      }
    }
    for (let l of ls) {
      let e = l.e;
      l.e = this.ensureEdge(l.v, l.next.v);
      if (l.e !== e) {
        console.warn("Loop had wrong edge");
      }
      this.radialLoopInsert(l.e, l);
    }
    this.structureGen++;
  }
  reverseWinding(f) {
    for (let list4 of f.lists) {
      for (let l of list4) {
        this.radialLoopRemove(l.e, l);
      }
    }
    for (let list4 of f.lists) {
      let es = [];
      let ls = [];
      for (let l of new Set(list4)) {
        let t = l.next;
        l.next = l.prev;
        l.prev = t;
        es.push(l.e);
        ls.push(l);
      }
      let i = 0;
      for (let l of ls) {
        l.e = es[(i - 1 + es.length) % es.length];
        i++;
      }
    }
    for (let list4 of f.lists) {
      for (let l of list4) {
        this.radialLoopInsert(l.e, l);
      }
    }
  }
  clearHighlight() {
    let exist = this.hasHighlight;
    for (let k in this.elists) {
      this.elists[k].highlight = void 0;
    }
    return exist;
  }
  unlinkFace(f) {
    for (let list4 of f.lists) {
      for (let l of list4) {
        this.radialLoopRemove(l.e, l);
      }
    }
  }
  linkFace(f, forceRelink = true) {
    for (let list4 of f.lists) {
      for (let l of list4) {
        if (forceRelink || !l.e) {
          l.e = this.getEdge(l.v, l.next.v);
          if (!l.e) {
            l.e = this.makeEdge(l.v, l.next.v);
          }
        }
        this.radialLoopInsert(l.e, l);
      }
    }
  }
  _killLoop(l) {
    this.eidMap.delete(l.eid);
    this.loops.remove(l);
    l.eid = -1;
  }
  dissolveVertex(v) {
    if (v.edges.length !== 2) {
      throw new Error("can't dissolve vertex with more than two edges");
    }
    let loops = /* @__PURE__ */ new Set();
    let faces = /* @__PURE__ */ new Set();
    for (let e of v.edges) {
      for (let l of e.loops) {
        if (l.v !== v) {
          l = l.next;
        }
        loops.add(l);
        faces.add(l.f);
      }
    }
    for (let f of faces) {
      this.unlinkFace(f);
    }
    for (let l of loops) {
      if (l.v !== v) {
        l = l.next;
      }
      l.prev.next = l.next;
      l.next.prev = l.prev;
      if (l === l.list.l) {
        l.list.l = l.list.l.next;
      }
      if (l === l.list.l) {
        console.warn("Destroying face");
        l.f.lists.remove(l.list);
        this._killList(l.list);
        if (l.f.lists.length === 0) {
          faces.delete(l.f);
          this.killFace(l.f);
          continue;
        }
      } else {
        l.list.length--;
      }
      this._killLoop(l);
    }
    let e1 = v.edges[0], e2 = v.edges[1];
    let v1 = e1.otherVertex(v), v2 = e2.otherVertex(v);
    let flag = (e1.flag | e2.flag) & ~2 /* HIDE */;
    this.killVertex(v);
    if (1) {
      let e3 = this.makeEdge(v1, v2);
      if (flag & 1 /* SELECT */) {
        this.edges.setSelect(e3, true);
      }
      e3.flag |= flag;
    }
    for (let f of faces) {
      this.linkFace(f, true);
    }
  }
  getList(type) {
    return this.elists[type];
  }
  setSelect(e, state) {
    this.getList(e.type).setSelect(e, state);
  }
  selectNone() {
    for (let k in this.elists) {
      this.elists[k].selectNone();
    }
  }
  selectAll() {
    for (let k in this.elists) {
      this.elists[k].selectAll();
    }
  }
  regen_render() {
    globalThis.redraw_all();
  }
  loadSTRUCT(reader) {
    reader(this);
    let elists = this.elists;
    this.elists = {};
    for (let elist of elists) {
      this.elists[elist.type] = elist;
    }
    this.addElistAliases();
    let eidMap = this.eidMap = /* @__PURE__ */ new Map();
    for (let list4 of this.getElists()) {
      for (let elem2 of list4) {
        eidMap.set(elem2.eid, elem2);
      }
    }
    for (let v of this.verts) {
      for (let i = 0; i < v.edges.length; i++) {
        v.edges[i] = eidMap.get(v.edges[i]);
      }
    }
    for (let h of this.handles) {
      h.owner = eidMap.get(h.owner);
    }
    let eloops = /* @__PURE__ */ new Map();
    for (let e of this.edges) {
      e.v1 = eidMap.get(e.v1);
      e.v2 = eidMap.get(e.v2);
      e.h1 = eidMap.get(e.h1);
      e.h2 = eidMap.get(e.h2);
      eloops.set(e, eidMap.get(e.l));
      e.l = void 0;
      if (e.h1) {
        this.features |= 1 /* HANDLES */;
      }
    }
    for (let l of this.loops) {
      l.v = eidMap.get(l.v);
      l.e = eidMap.get(l.e);
    }
    for (let list4 of this.lists) {
      let loops = list4._loops.map((l) => eidMap.get(l));
      list4._loops = void 0;
      list4.l = loops[0];
      for (let i = 0; i < loops.length; i++) {
        let l1 = loops[(i - 1 + loops.length) % loops.length];
        let l2 = loops[i];
        let l3 = loops[(i + 1) % loops.length];
        l1.next = l2;
        l2.prev = l1;
        l2.next = l3;
        l3.prev = l2;
      }
    }
    for (let f of this.faces) {
      for (let i = 0; i < f.lists.length; i++) {
        f.lists[i] = eidMap.get(f.lists[i]);
      }
      for (let list4 of f.lists) {
        list4.length = 0;
        for (let l of list4) {
          l.f = f;
          l.list = list4;
          this.radialLoopInsert(l.e, l);
          list4.length++;
        }
      }
    }
    for (let [e, l] of eloops) {
      e.l = l;
    }
    for (let elist of this.getElists()) {
      elist.active = eidMap.get(elist.active);
      elist.highlight = eidMap.get(elist.highlight);
    }
  }
};

// scripts/core/workspace.js
var pick_cachering = util_exports.cachering.fromConstructor(PickData, 32);
var LoadDefaultsOp = class extends ToolOp {
  static {
    __name(this, "LoadDefaultsOp");
  }
  static tooldef() {
    return {
      uiname: "Load Defaults",
      toolpath: "app.load_defaults",
      inputs: {},
      outputs: {}
    };
  }
  exec(ctx) {
    ctx.state.createNewFile(true);
    window.redraw_all();
  }
};
ToolOp.register(LoadDefaultsOp);
var Workspace = class extends simple_exports.Editor {
  static {
    __name(this, "Workspace");
  }
  static STRUCT = struct_default.inlineRegister(this, `
Workspace {
}
  `);
  constructor() {
    super();
    this.toolModePanel = void 0;
    this.oldToolMode = void 0;
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
    let eventBad = /* @__PURE__ */ __name((e) => {
      if (haveModal()) {
        return true;
      }
      let elem2 = this.ctx.screen.pickElement(e.x, e.y);
      return elem2 && elem2 !== this && elem2 !== this.canvas;
    }, "eventBad");
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
    return this.ctx?.toolmode;
  }
  static defineAPI(api, st) {
  }
  static define() {
    return {
      tagname: "workspace-editor-x",
      areaname: "workspace-editor-x",
      uiname: "Workspace"
    };
  }
  getGlobalMouse(x, y) {
    let mpos = new Vector2();
    let r = this.canvas.getBoundingClientRect();
    let dpi = UIBase2.getDPI();
    mpos[0] = x / dpi + r.x;
    mpos[1] = y / dpi + r.y;
    return mpos;
  }
  getLocalMouse(x, y) {
    let mpos = new Vector2();
    let r = this.canvas.getBoundingClientRect();
    let dpi = UIBase2.getDPI();
    mpos[0] = (x - r.x) * dpi;
    mpos[1] = (y - r.y) * dpi;
    return mpos;
  }
  getKeyMaps() {
    if (this.toolmode) {
      return [this.keymap, this.toolmode.keymap];
    } else {
      return [this.keymap];
    }
  }
  init() {
    super.init();
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
    });
    row.tool("app.load_defaults()");
    row.useIcons();
    row.prop("toolmodes.activeIndex");
    this.rebuildSideBar();
  }
  rebuildSideBar() {
    console.warn("Rebuilding sidebar");
    let uidata = this.sidebar ? saveUIData(this.sidebar, "sidebar") : void 0;
    if (this.sidebar && this.oldToolMode) {
      this.oldToolMode.sideBarUIData = saveUIData(this.toolModePanel, "toolmodepanel");
    }
    let sidebar = this.makeSideBar();
    let tab;
    tab = sidebar.tab("Options");
    if (config_default.DRAW_TEST_IMAGES) {
      this.ctx.state.testImages.makeUI(tab, "testImages");
    }
    let props = UIBase2.createElement("props-bag-editor-x");
    props.setAttribute("datapath", "properties");
    tab.add(props);
    const toolmode = this.ctx.toolmode;
    if (toolmode) {
      let col = this.toolModePanel = tab.col();
      col.dataPrefix = "toolmode";
      toolmode.buildSideBar(col);
    }
    tab = sidebar.tab("Tools");
    tab.toolPanel("mesh.split_edge");
    tab.toolPanel("mesh.vertex_smooth");
    tab.tool("mesh.fix_windings");
    tab.tool("mesh.make_face");
    tab.tool("mesh.reverse_edge");
    tab = sidebar.tab("Last Command");
    tab.add(UIBase2.createElement("last-tool-panel-x"));
    this.oldToolMode = toolmode;
    loadUIData(this.sidebar, uidata);
    if (toolmode.sideBarUIData.length > 0) {
      loadUIData(this.toolModePanel, toolmode.sideBarUIData);
    }
    for (let i = 0; i < 3; i++) {
      this.flushUpdate();
    }
  }
  update() {
    super.update();
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
    let dpi = UIBase2.getDPI();
    let w = ~~(this.size[0] * dpi);
    let h = ~~(this.size[1] * dpi) - 50 * dpi;
    if (w !== canvas.width || h !== canvas.height) {
      canvas.width = w;
      canvas.height = h;
      canvas.style["width"] = "" + w / dpi + "px";
      canvas.style["height"] = "" + h / dpi + "px";
    }
    this.g.clearRect(0, 0, canvas.width, canvas.height);
    if (config_default.DRAW_TEST_IMAGES) {
      this.ctx.state.testImages.draw(canvas, this.g);
    }
    if (this.toolmode) {
      this.toolmode.draw(this.ctx, this.canvas, this.g);
    }
  }
  setCSS() {
    this.canvas.style["position"] = "absolute";
  }
  pick(localX, localY, selmask = config_default.SELECTMASK, limit = void 0) {
    let mesh = this.ctx.mesh;
    if (limit === void 0) {
      limit = selmask & 32 /* FACE */ ? 15 : 25;
    }
    let mpos = new MeshVector();
    mpos[0] = localX;
    mpos[1] = localY;
    mpos[2] = 0;
    let dpi = UIBase2.getDPI();
    limit *= dpi;
    let mindis, minret;
    let vlist = /* @__PURE__ */ __name((list4) => {
      for (let v of list4) {
        if (v.flag & 2 /* HIDE */) {
          continue;
        }
        mpos[2] = v.co.length > 2 ? v.co[2] : 0;
        let dis = v.co.vectorDistance(mpos);
        if (dis >= limit) {
          continue;
        }
        if (!minret || dis < mindis) {
          mindis = dis;
          minret = pick_cachering.next().load(v, v.type, dis);
        }
      }
    }, "vlist");
    if (selmask & 1 /* VERTEX */) {
      vlist(mesh.verts);
    }
    if (selmask & 4 /* HANDLE */) {
      vlist(mesh.handles);
    }
    const EDGE_WEIGHT = Math.max(limit * 0.9, 2);
    if (selmask & 2 /* EDGE */) {
      for (let e of mesh.edges) {
        if (e.flag & 2 /* HIDE */) {
          continue;
        }
        let steps = 8;
        let t = 0, dt = 1 / (steps - 1);
        let p1;
        for (let i = 0; i < steps; i++, t += dt) {
          let p2 = e.evaluate(t);
          if (p1) {
            let dis = math_exports.dist_to_line_2d(mpos, p1, p2);
            if (dis >= limit) {
              continue;
            }
            if (mindis === void 0 || dis + EDGE_WEIGHT < mindis) {
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
    if (selmask & 32 /* FACE */) {
      let p2 = new MeshVector().addScalar(-1e4);
      let steps = mesh.haveHandles ? 8 : 2;
      for (let f of mesh.faces) {
        let cross = 0;
        for (let list4 of f.lists) {
          for (let l of list4) {
            let t = 0, dt = 1 / (steps - 1);
            let b;
            for (let i = 0; i < steps; i++, t += dt) {
              let a2 = l.evaluate(t);
              if (b && math_exports.line_line_cross(mpos, p2, a2, b)) {
                cross++;
              }
              b = a2;
            }
          }
        }
        if (cross % 2 === 0) {
          continue;
        }
        let ok = !minret;
        ok = ok || minret.elem.flag & 1 /* SELECT */ && !(f.flag & 1 /* SELECT */);
        if (ok) {
          minret = pick_cachering.next().load(f, f.type, 0);
        }
      }
    }
    return minret ? minret.elem : void 0;
  }
};
simple_exports.Editor.register(Workspace);

// scripts/core/property_templ.js
var PropTypeMap = {
  "float": PropTypes.FLOAT,
  "int": PropTypes.INT,
  "vec2": PropTypes.VEC2,
  "vec3": PropTypes.VEC3,
  "vec4": PropTypes.VEC4,
  "color3": PropTypes.VEC3,
  "color4": PropTypes.VEC4,
  "string": PropTypes.STRING,
  "enum": PropTypes.ENUM,
  "flags": PropTypes.FLAG,
  "bool": PropTypes.BOOL
};
for (let k in PropTypeMap) {
  if (k !== "color3" && k !== "color4") {
    PropTypeMap[PropTypeMap[k]] = k;
  }
}
var idgen = 0;
var PropertiesBag = class {
  static {
    __name(this, "PropertiesBag");
  }
  constructor(template) {
    this._props = [];
    this._struct = new DataStruct();
    this.sourceTemplate = {};
    this._updateGen = 0;
    this._id = idgen++;
    if (template) {
      this.loadTemplate(template);
    }
  }
  static defineAPI(api, st) {
    api.mapStructCustom(this, this.getStruct.bind(this));
  }
  static getStruct(obj) {
    return obj._struct;
  }
  _getTemplValue(item) {
    let val = item.value;
    if (val === void 0) {
      if (item.type === "string") {
        val = "";
      } else if (item.type === "vec2") {
        val = [0, 0];
      } else if (item.type === "vec3" || item.type === "color3") {
        val = [0, 0, 0];
      } else if (item.type === "vec4" || item.type === "color4") {
        val = [0, 0, 0, 1];
      } else {
        val = 0;
      }
    }
    return val;
  }
  #getPropDefs(templ, flat_templ = {}) {
    for (let k in templ) {
      if (typeof k === "symbol") {
        continue;
      }
      let v = templ[k];
      if (k === "type" && v === "panel") {
        continue;
      }
      if (typeof v === "object" && v.type === "panel") {
        this.#getPropDefs(v, flat_templ);
      } else {
        flat_templ[k] = v;
      }
    }
    return flat_templ;
  }
  patchTemplate(templ) {
    this.sourceTemplate = templ;
    this._props.length = 0;
    this._updateGen++;
    let flat_templ = this.#getPropDefs(templ);
    for (let k in flat_templ) {
      let item = flat_templ[k];
      if (typeof item !== "object") {
        item = { type: item };
      }
      if (this[k] === void 0) {
        this[k] = this._getTemplValue(item);
      }
    }
    let st = this._struct;
    st.clear();
    for (let k in flat_templ) {
      let item = flat_templ[k];
      if (typeof item !== "object") {
        item = { type: item };
      }
      let uiname = item.uiName ?? ToolProperty.makeUIName(k);
      let descr = item.description ?? "";
      let def;
      if (item.type === "float") {
        def = st.float(k, k, uiname, descr);
      } else if (item.type === "int") {
        def = st.int(k, k, uiname, descr);
      } else if (item.type === "vec2") {
        def = st.vec2(k, k, uiname, descr);
      } else if (item.type === "vec3") {
        def = st.vec3(k, k, uiname, descr);
      } else if (item.type === "vec4") {
        def = st.vec4(k, k, uiname, descr);
      } else if (item.type === "color3") {
        def = st.color3(k, k, uiname, descr);
      } else if (item.type === "color4") {
        def = st.color4(k, k, uiname, descr);
      } else if (item.type === "string") {
        def = st.string(k, k, uiname, descr);
      } else if (item.type === "enum") {
        def = st.enum(k, k, item.def, uiname, descr);
      } else if (item.type === "flags") {
        def = st.flags(k, k, item.def, uiname, descr);
      } else if (item.type === "bool") {
        def = st.bool(k, k, uiname, descr);
      }
      if (item.type === "enum" || item.type === "flags") {
        if ("checkStrip" in item) {
          def.checkStrip(item.checkStrip);
        }
      }
      if (!def) {
        console.error("Unknown property type " + item.type, item);
        continue;
      }
      def.on("change", window.redraw_all);
      if (item.onchange) {
        def.on("change", item.onchange);
      }
      this._props.push(def.data.copy());
      let pr = PropTypes;
      let numberTypes = pr.FLOAT | pr.INT | pr.VEC2 | pr.VEC3 | pr.VEC4;
      def.data.apiname = k;
      if (def.data.type & numberTypes) {
        def.data.baseUnit = def.data.displayUnit = "none";
        for (let key of NumberConstraints) {
          if (key in item) {
            def.data[key] = item[key];
          }
        }
        if (item.slider) {
          def.simpleSlider();
        }
        if ("unit" in item) {
          def.data.baseUnit = def.data.displayUnit = item.unit;
        }
        if ("min" in item) {
          def.data.range[0] = item.min;
        }
        if ("max" in item) {
          def.data.range[1] = item.max;
        }
        if ("uiMin" in item) {
          if (!def.data.uiRange) {
            def.data.uiRange = util_exports.list(def.data.range);
          }
          def.data.uiRange[0] = item.uiMin;
        }
        if ("uiMax" in item) {
          if (!def.data.uiRange) {
            def.data.uiRange = util_exports.list(def.data.range);
          }
          def.data.uiRange[1] = item.uiMax;
        }
      }
    }
  }
  loadTemplate(templ) {
    this.sourceTemplate = templ;
    templ = this.#getPropDefs(templ);
    for (let k in templ) {
      let item = templ[k];
      if (typeof item !== "object") {
        item = { type: item };
      }
    }
    this.patchTemplate(templ);
  }
  static templateFromProps(props) {
    let templ = {};
    for (let prop of props) {
      let item = {};
      templ[prop.apiname] = item;
      let type = PropTypeMap[prop.type];
      if (prop.subtype === PropSubTypes.COLOR) {
        type = prop.type === PropTypes.VEC3 ? "color3" : "color4";
      }
      item.type = type;
      item.uiName = prop.uiname;
      item.value = prop.getValue();
      let pr = PropTypes;
      let numberTypes = pr.FLOAT | pr.INT | pr.VEC2 | pr.VEC3 | pr.VEC4;
      if (prop.type & numberTypes) {
        for (let key of NumberConstraints) {
          if (prop[key] === void 0) {
            continue;
          }
          if (key === "range") {
            [item.min, item.max] = prop.range;
          } else if (key === "uiRange") {
            [item.uiMin, item.uiMax] = prop.uiRange;
          } else if (key === "unit") {
            item.baseUnit = item.displayUnit = prop[key];
          } else {
            item[key] = prop[key];
          }
        }
      }
    }
    return templ;
  }
  _save() {
    window.draw_ignore_push();
    try {
      for (let prop of this._props) {
        prop.setValue(this[prop.apiname]);
      }
    } finally {
      window.draw_ignore_pop();
    }
    return this._props;
  }
  loadSTRUCT(reader) {
    reader(this);
    let templ = this.constructor.templateFromProps(this._props);
    this.loadTemplate(templ);
  }
  testStruct() {
    let json = struct_default.writeJSON(this);
    console.log(json);
    let obj = struct_default.readJSON(json, this.constructor);
    console.log(obj);
    return obj;
  }
};
PropertiesBag.STRUCT = `
PropertiesBag {
  _props : array(abstract(ToolProperty)) | this._save();
}
`;
simple_exports.DataModel.register(PropertiesBag);
var PropsEditor = class extends Container {
  static {
    __name(this, "PropsEditor");
  }
  constructor() {
    super();
    this.needsRebuild = true;
    this._last_update_key = void 0;
  }
  static define() {
    return {
      tagname: "props-bag-editor-x"
    };
  }
  init() {
    super.init();
    if (this.ctx && this.hasAttribute("datapath")) {
      this.rebuild();
    }
  }
  get columns() {
    if (this.hasAttribute("columns")) {
      return parseInt(this.getAttribute("columns"));
    } else {
      return 1;
    }
  }
  set columns(v) {
    this.setAttribute("columns", "" + v);
  }
  rebuild() {
    let uidata = saveUIData(this, "props editor");
    let cols = this.columns;
    let path = this.getAttribute("datapath");
    let props = this.ctx.api.getValue(this.ctx, path);
    if (!props) {
      console.warn("Bad datapath", path);
      return;
    }
    this.needsRebuild = false;
    this.dataPrefix = path;
    this.clear();
    console.log("Columns", cols);
    cols = new Array(cols).fill(1).map((c) => this.col());
    let i = 0;
    let templ = props.sourceTemplate;
    let rec = /* @__PURE__ */ __name((obj, cols2) => {
      for (let k in obj) {
        let v = obj[k];
        if (k === "type" && v === "panel") {
          continue;
        }
        let ci = i++ % cols2.length;
        if (typeof v === "object" && v.type === "panel") {
          let panel = cols2[ci].panel(ToolProperty.makeUIName(k));
          let cols22 = new Array(cols2).fill(1).map((c) => panel.col());
          rec(v, cols22);
          continue;
        }
        cols2[ci].prop(k);
      }
    }, "rec");
    rec(templ, cols);
    loadUIData(this, uidata);
  }
  update() {
    super.update();
    if (!this.ctx) {
      return;
    }
    let path = this.getAttribute("datapath");
    let props = this.ctx.api.getValue(this.ctx, path);
    if (!props) {
      console.warn("Bad datapath", path);
      return;
    }
    let key = "" + props._updateGen + ":" + props._id + ":" + props._props.length;
    if (key !== this._last_update_key) {
      this._last_update_key = key;
      this.needsRebuild = true;
    }
    if (this.needsRebuild) {
      this.rebuild();
    }
  }
};
UIBase2.register(PropsEditor);

// scripts/core/image_wrangler.js
var ImageItemIF = class {
  static {
    __name(this, "ImageItemIF");
  }
  name = "name";
  size = [512, 512];
  description = "";
  uiName = void 0;
};
var ImageTile = class _ImageTile {
  static {
    __name(this, "ImageTile");
  }
  image = null;
  size = new Vector2([512, 512]);
  name = "name";
  pos = new Vector2();
  id = 0;
  enumkey = "";
  description = "";
  enabled = true;
  constructor(size, name2, description = "", uiName = void 0) {
    this.size.load(size);
    this.name = name2;
    this.description = description;
    this.uiName = uiName;
  }
  static fromImageItem(item) {
    return new _ImageTile(item.size, item.name, item.description, item.uiName);
  }
};
var ImageWrangler = class extends simple_exports.DataModel {
  static {
    __name(this, "ImageWrangler");
  }
  _tiles = [];
  images = {};
  columns = 2;
  singletonMode = false;
  /* Show only one image at a time. */
  apiStructNeedsDefine = true;
  visible = true;
  _enabled_images = void 0;
  static apiStruct = void 0;
  static STRUCT = `
ImageWrangler {
  visible         : bool;
  _enabled_images : int | this.enabled_images;
}
  `;
  constructor(template = void 0, singletonMode = false) {
    super();
    this.singletonMode = singletonMode;
    if (template !== void 0) {
      this.loadFromTemplate(template);
    }
  }
  loadSTRUCT(reader) {
    reader(this);
  }
  static defineAPI(api, st) {
    this.apiStruct = st;
    st.bool("visible", "visible", "Visible").description("Show or hide all images.").on("change", () => window.redraw_all());
  }
  checkApiStruct() {
    if (!this.constructor.apiStruct || !this.apiStructNeedsDefine) {
      return;
    }
    this.apiStructNeedsDefine = false;
    let st = this.constructor.apiStruct;
    let enumdef = {};
    let flagdef = {};
    let uinames = {};
    let descr = {};
    for (let tile of this._tiles) {
      enumdef[tile.enumkey] = tile.id;
      flagdef[tile.enumkey] = 1 << tile.id;
      uinames[tile.enumkey] = tile.uiName ? tile.uiName : ToolProperty2.makeUIName(tile.name);
      descr[tile.enumkey] = tile.description;
    }
    console.error("UINAMES", uinames);
    st.flags("enabled_images", "enabled_images", flagdef, "Enabled Images").uiNames(uinames).descriptions(descr);
    st.enum("active_image", "active_image", enumdef, "Active Image").uiNames(uinames).descriptions(descr).checkStrip();
  }
  get active_image() {
    for (let tile of this._tiles) {
      if (tile.enabled) {
        return tile.id;
      }
    }
    return -1;
  }
  set active_image(v) {
    for (let tile of this._tiles) {
      tile.enabled = v === tile.id;
    }
    window.redraw_all();
  }
  get enabled_images() {
    let mask = 0;
    for (let tile of this._tiles) {
      if (tile.enabled) {
        mask |= 1 << tile.id;
      }
    }
    return mask;
  }
  set enabled_images(v) {
    for (let tile of this._tiles) {
      tile.enabled = v & 1 << tile.id;
    }
    window.redraw_all();
  }
  makeUI(container, datapath) {
    console.log(container);
    container.label("Test Images");
    container.prop(`${datapath}.visible`);
    if (this.singletonMode) {
      container.prop(`${datapath}.active_image`);
    } else {
      container.prop(`${datapath}.enabled_images`);
    }
  }
  loadFromTemplate(template, columns = template.imageColumns || this.columns) {
    this.columns = columns;
    template = Object.assign(template);
    if ("singletonMode" in template) {
      this.singletonMode = template.singletonMode;
      delete template.singletonMode;
    }
    if ("imageColumns" in template) {
      delete template.imageColumns;
    }
    this._tiles = [];
    this.images = {};
    let defaultSize;
    for (let k in template) {
      let idef = template[k];
      if (idef.size) {
        defaultSize = new Vector2(idef.size);
      }
    }
    let i = 0;
    for (let k in template) {
      let idef = Object.assign({}, template[k]);
      if (!idef.name) {
        idef.name = k;
      }
      if (idef.size === void 0 && idef.dimen) {
        idef.size = [idef.dimen, idef.dimen];
      }
      let tile = ImageTile.fromImageItem(idef);
      if (!("size" in idef) && defaultSize) {
        tile.size.load(defaultSize);
      }
      tile.image = new ImageData(tile.size[0], tile.size[1]);
      let idata = tile.image.data;
      for (let i2 = 0; i2 < idata.length; i2 += 4) {
        idata[i2 + 3] = 255;
      }
      let idname = tile.name.replace(/[ \t\-]/g, "_");
      tile.id = i++;
      tile.enumkey = idname;
      this._tiles.push(tile);
      this.images[k] = tile.image;
    }
    this.layoutTiles();
    this.checkApiStruct();
    console.log("_enabled_images", this._enabled_images);
    if (this._enabled_images !== void 0) {
      this.enabled_images = this._enabled_images;
      delete this._enabled_images;
    }
  }
  layoutTiles() {
    let maxsize = new Vector2();
    for (let tile of this._tiles) {
      maxsize.max(tile.size);
    }
    let pad = 5;
    maxsize.addScalar(pad);
    let x = pad, y = pad;
    let col = 0;
    for (let tile of this._tiles) {
      tile.pos.loadXY(x, y);
      if (this.singletonMode) {
        continue;
      }
      if (col === this.columns - 1) {
        x = pad;
        y += maxsize[1];
      } else {
        x += maxsize[0];
      }
      col++;
    }
  }
  draw(canvas, g) {
    this.checkApiStruct();
    if (!this.visible) {
      return;
    }
    for (let tile of this._tiles) {
      if (tile.enabled) {
        g.putImageData(tile.image, tile.pos[0], tile.pos[1]);
      }
    }
  }
};
DataModel.register(ImageWrangler);

// scripts/core/mesh_utils.js
function vertexSmooth(mesh, verts = mesh.verts, fac = 0.5, doHandles = true) {
  let co = new Vertex();
  let edges;
  edges = /* @__PURE__ */ new Set();
  if (mesh.haveHandles && doHandles) {
    for (let v of verts) {
      for (let e of v.edges) {
        edges.add(e);
      }
    }
    for (let e of edges) {
      e.h1.co.sub(e.v1.co);
      e.h2.co.sub(e.v2.co);
    }
  }
  for (let v of verts) {
    co.zero();
    let tot = 0;
    for (let e of v.edges) {
      let v2 = e.otherVertex(v);
      co.add(v2.co);
      tot += 1;
    }
    if (tot !== 0) {
      co.mulScalar(1 / tot);
      v.co.interp(co, 0.5);
    }
  }
  if (mesh.haveHandles && doHandles) {
    for (let e of edges) {
      e.h1.co.add(e.v1.co);
      e.h2.co.add(e.v2.co);
    }
  }
}
__name(vertexSmooth, "vertexSmooth");
function duplicate(mesh, geom) {
  let verts = /* @__PURE__ */ new Set();
  let edges = /* @__PURE__ */ new Set();
  let faces = /* @__PURE__ */ new Set();
  let map = /* @__PURE__ */ new Map();
  for (let elem2 of geom) {
    switch (elem2.type) {
      case 1 /* VERTEX */:
        verts.add(elem2);
        break;
      case 2 /* EDGE */:
        edges.add(elem2);
        break;
      case 32 /* FACE */:
        faces.add(elem2);
        break;
    }
  }
  for (let f of faces) {
    for (let l of f.loops) {
      edges.add(l.e);
    }
  }
  for (let e of edges) {
    verts.add(e.v1);
    verts.add(e.v2);
  }
  for (let v of verts) {
    let v2 = mesh.makeVertex(v.co);
    mesh.copyElemData(v2, v);
    map.set(v, v2);
  }
  for (let e of edges) {
    let e2 = mesh.makeEdge(map.get(e.v1), map.get(e.v2));
    mesh.copyElemData(e2, e);
    map.set(e, e2);
    if (e.h1) {
      e2.h1.co.load(e.h1);
      e2.h2.co.load(e.h2);
      mesh.copyElemData(e2.h1, e.h1);
      mesh.copyElemData(e2.h2, e.h2);
    }
  }
  for (let f of faces) {
    let vs = Array.from(f.lists[0]).map((l) => map.get(l.v));
    let f2 = mesh.makeFace(vs);
    for (let i = 1; i < f.lists.length; i++) {
      let list4 = f.lists[i];
      let vs2 = Array.from(list4).map((l) => map.get(l.v));
      mesh.addLoopList(f2, vs2);
    }
    mesh.copyElemData(f2, f);
  }
  return {
    oldNewMap: map,
    geom: Array.from(map.values())
  };
}
__name(duplicate, "duplicate");

// scripts/core/transform_ops.js
var VecProperty = new Vertex().co.length === 3 ? Vec3Property : Vec2Property;
var Vector = MeshVector;
var VectorSize = new Vector().length;
var TransformList = class extends Array {
  static {
    __name(this, "TransformList");
  }
  constructor(typeName, selmask) {
    super();
    this.typeName = typeName;
    this.selMask = selmask;
  }
};
var TransformClasses = [];
var TransformElem = class {
  static {
    __name(this, "TransformElem");
  }
  constructor() {
  }
  static undoPre(mesh, selMask, list4) {
    throw new Error("implement me!");
  }
  static undo(mesh, selMask, data) {
    throw new Error("implement me!");
  }
  static create(mesh, selMask) {
    throw new Error("implement me!");
  }
  static transformDefine() {
    return {
      typeName: "",
      uiName: "",
      selMask: 0
    };
  }
  static register(cls) {
    TransformClasses.push(cls);
  }
  static getClass(typeName) {
    for (let cls of TransformClasses) {
      if (cls.transformDefine().typeName === typeName) {
        return cls;
      }
    }
  }
  minmax(min, max) {
    throw new Error("implement me!");
  }
  apply(matrix) {
    throw new Error("implement me!");
  }
};
var TransformVert = class extends TransformElem {
  static {
    __name(this, "TransformVert");
  }
  constructor(v) {
    super();
    this.v = v;
    this.start = new Vector(v.co);
  }
  static create(mesh, selMask) {
    let list4 = new TransformList(this.transformDefine().typeName, selMask);
    let doList = /* @__PURE__ */ __name((elist) => {
      for (let v of elist.selected.editable) {
        list4.push(new this(v));
      }
    }, "doList");
    if (selMask & 1 /* VERTEX */) {
      doList(mesh.verts);
    }
    if (mesh.haveHandles && selMask & 4 /* HANDLE */) {
      doList(mesh.handles);
    }
    return list4;
  }
  static undoPre(mesh, selMask, list4) {
    let ret = [];
    for (let td of list4) {
      ret.push(td.v.eid);
      for (let i = 0; i < VectorSize; i++) {
        ret.push(td.v.co[i]);
      }
    }
    return ret;
  }
  static undo(mesh, selMask, data) {
    let vlen = VectorSize + 1;
    for (let i = 0; i < data.length; i += vlen) {
      let eid = data[i];
      let elem2 = mesh.eidMap.get(eid);
      if (!elem2) {
        console.error("Missing element " + eid);
        continue;
      }
      for (let j = 0; j < VectorSize; j++) {
        elem2.co[j] = data[i + j + 1];
      }
    }
  }
  static transformDefine() {
    return {
      typeName: "verts",
      uiName: "verts",
      selMask: 1 /* VERTEX */ | 4 /* HANDLE */
    };
  }
  minmax(min, max) {
    min.min(this.start);
    max.max(this.start);
  }
  apply(matrix) {
    this.v.co.load(this.start);
    this.v.co.multVecMatrix(matrix);
  }
};
TransformElem.register(TransformVert);
var TransformOp = class extends ToolOp {
  static {
    __name(this, "TransformOp");
  }
  constructor() {
    super();
    this.transData = void 0;
    this.deltaMpos = new Vector2();
    this.startMpos = new Vector2();
    this.lastMpos = new Vector2();
    this._lastMpos = new Vector2();
    this.mpos = new Vector2();
    this.first = true;
  }
  static tooldef() {
    return {
      inputs: {
        selMask: new FlagProperty(config_default.SELECTMASK, MeshTypes),
        center: new VecProperty()
      }
    };
  }
  calcTransCenter(tdata) {
    let min = new Vector();
    let max = new Vector();
    min.addScalar(1e17);
    max.addScalar(-1e17);
    for (let list4 of tdata) {
      for (let td of list4) {
        td.minmax(min, max);
      }
    }
    this.inputs.center.setValue(min.interp(max, 0.5));
  }
  getTransData(ctx, doCenter = true) {
    if (this.transData) {
      if (doCenter) {
        this.calcTransCenter(this.transData);
      }
      return this.transData;
    }
    let ret = [];
    let mesh = ctx.mesh;
    let selMask = this.inputs.selMask.getValue();
    for (let list4 of TransformClasses) {
      ret.push(list4.create(mesh, selMask));
    }
    if (doCenter) {
      this.calcTransCenter(ret);
    }
    this.transData = ret;
    return ret;
  }
  execPost(ctx) {
    this.transData = void 0;
    window.redraw_all();
  }
  execPre(ctx) {
    this.getTransData(ctx);
    window.redraw_all();
  }
  modalStart(ctx) {
    super.modalStart(ctx);
    this.getTransData(ctx);
  }
  undoPre(ctx) {
    this._undo = {};
    this._undoSelMask = this.inputs.selMask.getValue();
    let tdata = this.getTransData(ctx);
    let selMask = this.inputs.selMask.getValue();
    let mesh = ctx.mesh;
    for (let list4 of tdata) {
      let cls = TransformElem.getClass(list4.typeName);
      this._undo[list4.typeName] = cls.undoPre(ctx.mesh, selMask, list4);
    }
    window.redraw_all();
  }
  undo(ctx) {
    let mesh = ctx.mesh;
    for (let k in this._undo) {
      TransformElem.getClass(k).undo(mesh, this._undoSelMask, this._undo[k]);
    }
    window.redraw_all();
  }
  on_pointerup(e) {
    this.modalEnd(false);
  }
  on_pointercancel(e) {
    this.modalEnd(true);
  }
  on_keydown(e) {
    switch (e.keyCode) {
      case keymap["Enter"]:
      case keymap["Space"]:
        this.modalEnd(false);
        break;
      case keymap["Escape"]:
      case keymap["Backspace"]:
      case keymap["Delete"]:
        this.modalEnd(true);
        break;
    }
  }
  on_pointermove(e) {
    let ctx = this.modal_ctx;
    let workspace = ctx.workspace;
    let mpos = workspace.getLocalMouse(e.x, e.y);
    if (this.first) {
      this.startMpos.load(mpos);
      this.lastMpos.load(mpos);
      this.deltaMpos.zero();
      this.mpos.load(mpos);
      this._lastMpos.load(mpos);
      this.first = false;
      return;
    }
    this.lastMpos.load(this._lastMpos);
    this.deltaMpos.load(mpos).sub(this.lastMpos);
    this.mpos.load(mpos);
    this._lastMpos.load(mpos);
  }
};
var TranslateOp = class extends TransformOp {
  static {
    __name(this, "TranslateOp");
  }
  constructor() {
    super();
  }
  static tooldef() {
    return {
      uiname: "Move",
      toolpath: "transform.translate",
      inputs: ToolOp.inherit({
        offset: new VecProperty()
      }),
      is_modal: true
    };
  }
  on_pointermove(e) {
    super.on_pointermove(e);
    let delta = new Vector2(this.mpos).sub(this.startMpos);
    delta = new Vector().loadXY(delta[0], delta[1]);
    this.inputs.offset.setValue(delta);
    this.exec(this.modal_ctx);
  }
  exec(ctx) {
    let delta = this.inputs.offset.getValue();
    let matrix = new Matrix4();
    matrix.translate(delta[0], delta[1], delta[2] ?? 0);
    let tdata = this.getTransData(ctx);
    console.log(tdata);
    for (let tlist of tdata) {
      for (let td of tlist) {
        td.apply(matrix);
      }
    }
    window.redraw_all();
  }
};
ToolOp.register(TranslateOp);
var ScaleOp = class extends TransformOp {
  static {
    __name(this, "ScaleOp");
  }
  constructor() {
    super();
  }
  static tooldef() {
    return {
      uiname: "Move",
      toolpath: "transform.scale",
      inputs: ToolOp.inherit({
        scale: new VecProperty()
      }),
      is_modal: true
    };
  }
  on_pointermove(e) {
    let ctx = this.modal_ctx;
    let workspace = ctx.workspace;
    super.on_pointermove(e);
    this.resetTempGeom();
    let delta = new Vector2(this.mpos).sub(this.startMpos);
    delta = new Vector().loadXY(delta[0], delta[1]);
    let center = this.inputs.center.getValue();
    let l1 = this.startMpos.vectorDistance(center);
    let l2 = this.mpos.vectorDistance(center);
    if (l1 === 0 || l2 === 0) {
      return;
    }
    let scenter = workspace.getGlobalMouse(center[0], center[1]);
    this.makeTempLine([e.x, e.y], scenter);
    let ratio = l2 / l1;
    let scale = new Vector().addScalar(1);
    scale.loadXY(ratio, ratio);
    this.inputs.scale.setValue(scale);
    this.exec(this.modal_ctx);
  }
  exec(ctx) {
    let scale = this.inputs.scale.getValue();
    let center = this.inputs.center.getValue();
    let tmat1 = new Matrix4();
    let tmat2 = new Matrix4();
    tmat1.translate(-center[0], -center[1], -(center[2] ?? 0));
    tmat2.translate(center[0], center[1], center[2] ?? 0);
    let matrix = new Matrix4();
    matrix.multiply(tmat2);
    matrix.scale(scale[0], scale[1], scale[2] ?? 1);
    matrix.multiply(tmat1);
    let tdata = this.getTransData(ctx);
    for (let tlist of tdata) {
      for (let td of tlist) {
        td.apply(matrix);
      }
    }
    window.redraw_all();
  }
};
ToolOp.register(ScaleOp);
var RotateOp = class extends TransformOp {
  static {
    __name(this, "RotateOp");
  }
  constructor() {
    super();
  }
  static tooldef() {
    return {
      uiname: "Move",
      toolpath: "transform.rotate",
      inputs: ToolOp.inherit({
        th: new FloatProperty()
      }),
      is_modal: true
    };
  }
  on_pointermove(e) {
    let ctx = this.modal_ctx;
    let workspace = ctx.workspace;
    super.on_pointermove(e);
    this.resetTempGeom();
    let { center, th } = this.getInputs();
    let scenter = workspace.getGlobalMouse(center[0], center[1]);
    this.makeTempLine([e.x, e.y], scenter);
    let d1 = new Vector2(this.lastMpos);
    let d2 = new Vector2(this.mpos);
    d1.sub(center).normalize();
    d2.sub(center).normalize();
    let dth = Math.asin((d1[0] * d2[1] - d1[1] * d2[0]) * 0.99999);
    th += dth;
    this.inputs.th.setValue(th);
    this.exec(this.modal_ctx);
    this.lastMpos.load(this.mpos);
  }
  exec(ctx) {
    let { center, th } = this.getInputs();
    let tmat1 = new Matrix4();
    let tmat2 = new Matrix4();
    tmat1.translate(center[0], center[1], center[2] ?? 0);
    tmat2.translate(-center[0], -center[1], -(center[2] ?? 0));
    let matrix = new Matrix4();
    let rotmat = new Matrix4();
    rotmat.euler_rotate(0, 0, th);
    matrix.multiply(tmat1);
    matrix.multiply(rotmat);
    matrix.multiply(tmat2);
    let tdata = this.getTransData(ctx);
    for (let tlist of tdata) {
      for (let td of tlist) {
        td.apply(matrix);
      }
    }
    window.redraw_all();
  }
};
ToolOp.register(RotateOp);

// scripts/core/mesh_ops.js
var SelToolModes = {
  ADD: 0,
  SUB: 1,
  AUTO: 2
};
function saveUndoMesh(mesh) {
  let data = [];
  struct_default.writeObject(data, mesh);
  return new DataView(new Uint8Array(data).buffer);
}
__name(saveUndoMesh, "saveUndoMesh");
function loadUndoMesh(mesh, data) {
  let mesh2 = struct_default.readObject(data, Mesh);
  for (let k in mesh2) {
    mesh[k] = mesh2[k];
  }
  window.redraw_all();
}
__name(loadUndoMesh, "loadUndoMesh");
var MeshOp = class extends ToolOp {
  static {
    __name(this, "MeshOp");
  }
  undoPre(ctx) {
    this._undo = saveUndoMesh(ctx.mesh);
  }
  undo(ctx) {
    loadUndoMesh(ctx.mesh, this._undo);
  }
  execPost(ctx) {
    window.redraw_all();
  }
};
var SplitEdgeOp = class extends MeshOp {
  static {
    __name(this, "SplitEdgeOp");
  }
  static tooldef() {
    return {
      uiname: "Split Edge",
      toolpath: "mesh.split_edge",
      inputs: ToolOp.inherit({
        steps: new IntProperty(1).setRange(1, 100).noUnits().saveLastValue()
      })
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    const { steps } = this.getInputs();
    for (let e of new Set(mesh.edges.selected.editable)) {
      mesh.splitEdgeMulti(e, steps);
    }
  }
};
ToolOp.register(SplitEdgeOp);
var DissolveVertOp = class extends MeshOp {
  static {
    __name(this, "DissolveVertOp");
  }
  static tooldef() {
    return {
      uiname: "Dissolve Vertex",
      toolpath: "mesh.dissolve_vertex",
      inputs: ToolOp.inherit({})
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    for (let v of new Set(mesh.verts.selected.editable)) {
      mesh.dissolveVertex(v);
    }
  }
};
ToolOp.register(DissolveVertOp);
var DeleteOp = class extends MeshOp {
  static {
    __name(this, "DeleteOp");
  }
  static tooldef() {
    return {
      uiname: "Delete",
      toolpath: "mesh.delete",
      inputs: ToolOp.inherit({
        selMask: new FlagProperty(config_default.SELECTMASK, MeshTypes)
      })
    };
  }
  static invoke(ctx, args) {
    let tool = super.invoke(ctx, args);
    if (!("selMask" in args)) {
      tool.inputs.selMask.setValue(ctx.selMask);
    }
    return tool;
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    let { selMask } = this.getInputs();
    console.log("Delete!", selMask);
    if (selMask & 32 /* FACE */) {
      for (let v of new Set(mesh.faces.selected.editable)) {
        mesh.killFace(v);
      }
    }
    if (selMask & 2 /* EDGE */) {
      for (let v of new Set(mesh.edges.selected.editable)) {
        mesh.killEdge(v);
      }
    }
    if (selMask & 1 /* VERTEX */) {
      for (let v of new Set(mesh.verts.selected.editable)) {
        mesh.killVertex(v);
      }
    }
  }
};
ToolOp.register(DeleteOp);
var TriangulateOp = class extends MeshOp {
  static {
    __name(this, "TriangulateOp");
  }
  static tooldef() {
    return {
      uiname: "Triangulate",
      toolpath: "mesh.triangulate",
      inputs: ToolOp.inherit({})
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    mesh.triangulate();
    window.redraw_all();
  }
};
ToolOp.register(TriangulateOp);
var ExtrudeVertOp = class extends MeshOp {
  static {
    __name(this, "ExtrudeVertOp");
  }
  static tooldef() {
    return {
      uiname: "Extrude Vertex",
      toolpath: "mesh.extrude_vertex",
      inputs: ToolOp.inherit({
        co: new Vec3Property()
      })
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    let { co } = this.getInputs();
    let actv = mesh.verts.active;
    let v = mesh.makeVertex(co);
    let ne;
    if (actv && actv.flag & 1 /* SELECT */) {
      ne = mesh.makeEdge(v, actv);
    }
    mesh.selectNone();
    mesh.verts.setSelect(v, true);
    mesh.verts.active = v;
    if (ne) {
      mesh.edges.setSelect(ne, true);
      mesh.edges.active = ne;
    }
    window.redraw_all();
  }
};
ToolOp.register(ExtrudeVertOp);
var MakeFaceOp = class extends MeshOp {
  static {
    __name(this, "MakeFaceOp");
  }
  static tooldef() {
    return {
      uiname: "Make Face",
      toolpath: "mesh.make_face",
      inputs: ToolOp.inherit({
        co: new Vec3Property()
      })
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    let vs = util_exports.list(mesh.verts.selected.editable);
    vs = vs.sort((a2, b) => a2.edges.length - b.edges.length);
    vs = new Set(vs);
    debugger;
    let segs = [];
    let visit = /* @__PURE__ */ new WeakSet();
    for (let v of vs) {
      if (visit.has(v)) {
        continue;
      }
      let v2 = v;
      let seg = [v];
      segs.push(seg);
      let _i = 0;
      while (1) {
        let newe;
        for (let e of v2.edges) {
          let v3 = e.otherVertex(v2);
          if (vs.has(v3) && !visit.has(e)) {
            newe = e;
            break;
          }
        }
        if (!newe) {
          break;
        }
        visit.add(newe);
        v2 = newe.otherVertex(v2);
        visit.add(v2);
        seg.push(v2);
        if (_i++ > 1e4) {
          console.error("Infinite loop error!");
          break;
        }
      }
    }
    for (let seg of segs) {
      let f = mesh.makeFace(seg);
      let rev = false;
      for (let l of f.loops) {
        if (l.radial_next !== l && l.radial_next.v === l.v) {
          rev = true;
          break;
        }
      }
      if (rev) {
        mesh.reverseWinding(f);
      }
      for (let l of f.loops) {
        if (l.radial_next === l) {
          continue;
        }
        let l2 = l.radial_next;
        if (l2.v === l.v) {
          l2 = l2.next;
        }
        mesh.copyElemData(l, l2);
      }
    }
  }
};
ToolOp.register(MakeFaceOp);
var FixWindingsOp = class extends MeshOp {
  static {
    __name(this, "FixWindingsOp");
  }
  static tooldef() {
    return {
      uiname: "Fix Windings",
      toolpath: "mesh.fix_windings",
      inputs: ToolOp.inherit({})
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    for (let f of mesh.faces.selected.editable) {
      let l = f.lists[0].l;
      const v1 = new Vector3(l.v.co);
      const v2 = new Vector3(l.next.v.co);
      const v3 = new Vector3(l.next.next.v.co);
      if (v1.length === 2) {
        v1[2] = v2[2] = v3[2] = 0;
      }
      if (math_exports.normal_tri(v1, v2, v3)[2] < 0) {
        mesh.reverseWinding(f);
        console.log(f.eid, f);
      }
    }
  }
};
ToolOp.register(FixWindingsOp);
var FixMeshOp = class extends MeshOp {
  static {
    __name(this, "FixMeshOp");
  }
  static tooldef() {
    return {
      uiname: "Fix Mesh",
      toolpath: "mesh.repair",
      inputs: ToolOp.inherit({})
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    mesh.validate();
  }
};
ToolOp.register(FixMeshOp);
var VertexSmoothOp = class extends MeshOp {
  static {
    __name(this, "VertexSmoothOp");
  }
  static tooldef() {
    return {
      uiname: "Vertex Smooth",
      toolpath: "mesh.vertex_smooth",
      inputs: ToolOp.inherit({
        repeat: new IntProperty(1).setRange(1, 100).noUnits().saveLastValue(),
        factor: new FloatProperty(0.5).setRange(0, 1).noUnits().saveLastValue()
      })
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    const { repeat, factor } = this.getInputs();
    for (let i = 0; i < repeat; i++) {
      vertexSmooth(mesh, mesh.verts.selected.editable, factor);
    }
  }
};
ToolOp.register(VertexSmoothOp);
var ReverseEdgeOp = class extends MeshOp {
  static {
    __name(this, "ReverseEdgeOp");
  }
  static tooldef() {
    return {
      uiname: "Reverse Edge Order",
      toolpath: "mesh.reverse_edge",
      inputs: ToolOp.inherit({})
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    for (let e of mesh.edges.selected.editable) {
      mesh.reverseEdge(e);
    }
  }
};
ToolOp.register(ReverseEdgeOp);
var DuplicateOp = class extends MeshOp {
  static {
    __name(this, "DuplicateOp");
  }
  static tooldef() {
    return {
      uiname: "Duplicate",
      toolpath: "mesh.duplicate",
      inputs: ToolOp.inherit({
        doTransform: new BoolProperty(true)
      })
    };
  }
  static invoke(ctx, args) {
    let tool = super.invoke(ctx, args);
    if (tool.inputs.doTransform.getValue()) {
      let macro = new ToolMacro();
      macro.add(tool);
      macro.add(new TranslateOp());
      return macro;
    }
    return tool;
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    let geom = new Set([
      Array.from(mesh.verts.selected.editable),
      Array.from(mesh.edges.selected.editable),
      Array.from(mesh.faces.selected.editable)
    ].flat());
    let { oldNewMap } = duplicate(mesh, geom);
    for (let elist of mesh.getElists()) {
      if (!elist.active) {
        continue;
      }
      let newact = oldNewMap.get(elist.active);
      if (newact) {
        elist.active = newact;
      }
    }
    for (let elem2 of geom) {
      if (elem2.type === 2 /* EDGE */ && elem2.h1) {
        mesh.setSelect(elem2.h1, false);
        mesh.setSelect(elem2.h2, false);
      }
      mesh.setSelect(elem2, false);
    }
  }
};
ToolOp.register(DuplicateOp);

// scripts/core/mesh_selectops.js
var SelectOpBase = class extends ToolOp {
  static {
    __name(this, "SelectOpBase");
  }
  static tooldef() {
    return {
      inputs: {
        mode: new EnumProperty(SelToolModes.AUTO, SelToolModes),
        selMask: new FlagProperty(1 | 2 | 4 | 8 | 16, MeshTypes)
      }
    };
  }
  static create(ctx, args) {
    let tool = super.create(ctx, args);
    if (!("selMask" in args)) {
      tool.inputs.selMask.setValue(ctx.selMask);
    }
    return tool;
  }
  getSelMask(ctx) {
    let mask = this.inputs.selMask.getValue();
    if (ctx.mesh.haveHandles) {
      mask |= 4 /* HANDLE */;
    }
    return mask;
  }
  undoPre(ctx) {
    this._undo = [];
    let mesh = ctx.mesh;
    let mask = this.getSelMask(ctx);
    for (let list4 of mesh.getElists()) {
      let data = {
        elems: [],
        type: list4.type,
        active: list4.active ? list4.active.eid : -1,
        highlight: list4.highlight ? list4.highlight.eid : -1
      };
      this._undo.push(data);
      data = data.elems;
      if (!(list4.type & mask)) {
        continue;
      }
      for (let e of list4) {
        data.push(e.eid);
        data.push(e.flag);
      }
    }
  }
  undo(ctx) {
    let mesh = ctx.mesh;
    let eidMap = mesh.eidMap;
    for (let list4 of this._undo) {
      let elist = mesh.elists[list4.type];
      elist.active = eidMap.get(list4.active);
      elist.highlight = eidMap.get(list4.highlight);
      let data = list4.elems;
      for (let i = 0; i < data.length; i += 2) {
        let eid = data[i], state = data[i + 1];
        let elem2 = eidMap.get(eid);
        if (!elem2) {
          console.error("Missing mesh element " + eid + ":" + list4.tyoe);
          continue;
        }
        if (state === elem2.flag) {
          continue;
        }
        elist.setSelect(elem2, state & 1 /* SELECT */);
      }
    }
    window.redraw_all();
  }
  execPost(ctx) {
    window.redraw_all();
  }
};
var SelectOneOp = class extends SelectOpBase {
  static {
    __name(this, "SelectOneOp");
  }
  static tooldef() {
    return {
      uiname: "Select One",
      toolpath: "mesh.select_one",
      inputs: ToolOp.inherit({
        elemEid: new IntProperty(),
        flush: new BoolProperty(true),
        setActive: new BoolProperty(true),
        unique: new BoolProperty(true)
      })
    };
  }
  static invoke(ctx, args) {
    let tool = super.invoke(ctx, args);
    if (!("selMask" in args)) {
      tool.inputs.selMask.setValue(ctx.selMask);
    }
    return tool;
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    let { mode, elemEid, flush, setActive, unique } = this.getInputs();
    let selMask = this.getSelMask(ctx);
    let elem2 = mesh.eidMap.get(elemEid);
    const haveHandles = mesh.haveHandles;
    console.log("unique", unique, flush, setActive, elemEid, mode, elem2);
    if (unique) {
      mesh.selectNone();
    }
    if (mode === SelToolModes.ADD || mode === SelToolModes.AUTO) {
      const select = mode !== SelToolModes.SUB;
      mesh.setSelect(elem2, select);
      if (select && haveHandles && elem2.type === 1 /* VERTEX */) {
        for (let e of elem2.edges) {
          mesh.setSelect(e.handle(elem2), true);
        }
      }
    }
    if (setActive) {
      mesh.setActive(elem2);
    }
    if (flush) {
      mesh.selectFlush(selMask);
    }
  }
};
ToolOp.register(SelectOneOp);
var ToggleSelectOp = class extends SelectOpBase {
  static {
    __name(this, "ToggleSelectOp");
  }
  static tooldef() {
    return {
      uiname: "Select All/None",
      toolpath: "mesh.toggle_select_all",
      inputs: ToolOp.inherit({
        setActive: new BoolProperty(false)
      }),
      outputs: ToolOp.inherit({})
    };
  }
  exec(ctx) {
    let mesh = ctx.mesh;
    let { setActive, mode, selMask } = this.getInputs();
    let hasActive;
    if (mode === SelToolModes.AUTO) {
      mode = SelToolModes.ADD;
      for (let elist of mesh.getElists()) {
        if (!(elist.type & selMask)) {
          continue;
        }
        if (elist.active) {
          hasActive = true;
        }
        if (elist.selected.length > 0) {
          mode = SelToolModes.SUB;
        }
      }
    }
    if (setActive && mode === SelToolModes.SUB) {
      mesh.setActive(void 0);
    } else if (setActive && mode === SelToolModes.ADD) {
      setActive = setActive && !hasActive;
    }
    console.log(setActive, selMask, mode);
    for (let elist of mesh.getElists()) {
      if (!(elist.type & selMask)) {
        continue;
      }
      let setActive2 = setActive;
      for (let elem2 of elist.editable) {
        elist.setSelect(elem2, mode === SelToolModes.ADD);
        if (setActive2) {
          mesh.setActive(elem2);
          setActive2 = false;
        }
      }
    }
    mesh.selectFlush(selMask);
  }
};
ToolOp.register(ToggleSelectOp);
var SelectLinked = class extends SelectOpBase {
  static {
    __name(this, "SelectLinked");
  }
  static tooldef() {
    return {
      uiname: "Select Linked",
      toolpath: "mesh.select_linked",
      inputs: ToolOp.inherit({
        pick: new BoolProperty(false),
        elemEid: new IntProperty(-1),
        onlyElem: new BoolProperty(false)
      }),
      outputs: ToolOp.inherit({})
    };
  }
  static invoke(ctx, args) {
    let tool = super.invoke(ctx, args);
    if (tool.inputs.pick.getValue()) {
      let workspace = ctx.workspace;
      let elem2 = workspace.pick(workspace.mpos[0], workspace.mpos[1], tool.inputs.selMask.getValue());
      if (elem2) {
        switch (elem2.type) {
          case 4 /* HANDLE */:
            elem2 = elem2.owner.v1;
            break;
          case 2 /* EDGE */:
            elem2 = elem2.v1;
            break;
          case 32 /* FACE */:
            elem2 = elem2.lists[0].l.v;
            break;
          case 8 /* LOOP */:
            elem2 = elem2.v;
            break;
        }
        tool.inputs.elemEid.setValue(elem2.eid);
        tool.inputs.onlyElem.setValue(true);
      }
    }
    return tool;
  }
  exec(ctx) {
    let visit = /* @__PURE__ */ new WeakSet();
    let stack = [];
    let mesh = ctx.mesh;
    let { selMask, mode, pick, onlyElem, elemEid } = this.getInputs();
    let vs;
    if (onlyElem && elemEid >= 0) {
      let v = mesh.eidMap.get(elemEid);
      if (!v || v.type !== 1 /* VERTEX */) {
        console.warn("Invalid element " + elemEid + "; got", v);
        return;
      } else {
        vs = /* @__PURE__ */ new Set([v]);
      }
    } else {
      vs = new Set(mesh.verts.selected.editable);
    }
    for (let v of vs) {
      if (visit.has(v)) {
        continue;
      }
      stack.length = 0;
      stack.push(v);
      visit.add(v);
      while (stack.length > 0) {
        let v2 = stack.pop();
        mesh.setSelect(v2, mode === SelToolModes.ADD);
        for (let e of v2.edges) {
          let v3 = e.otherVertex(v2);
          if (!visit.has(v3)) {
            visit.add(v3);
            stack.push(v3);
          }
        }
      }
    }
    mesh.selectFlush(selMask);
  }
};
ToolOp.register(SelectLinked);

// scripts/core/context.js
ToolOp.prototype.undoPre = function(ctx) {
  this._undo = ctx.state.saveFileSync({
    doScreen: false
  });
};
ToolOp.prototype.undo = function(ctx) {
  ctx.state.loadFileSync(this._undo, {
    resetToolStack: false,
    resetContext: false,
    doScreen: false,
    resetOnLoad: false
  });
};
var Context2 = class {
  static {
    __name(this, "Context");
  }
  constructor(state) {
    this.state = state;
  }
  get workspace() {
    return simple_exports.Editor.findEditor(Workspace);
  }
  get selMask() {
    return config_default.SELECTMASK;
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
};

// assets/icon_enum.js
var Icons4 = {
  FOLDER: 0,
  //file folder
  FILE: 1,
  TINY_X: 2,
  //'x' in bottom left corner
  SMALL_PLUS: 3,
  SMALL_MINUS: 4,
  UNDO: 5,
  REDO: 6,
  HELP: 7,
  ENUM_UNCHECKED: 8,
  //overlaid on icon checkboxes when unchecked
  ENUM_CHECKED: 9,
  //overlaid on icon checkboxes when checked
  LARGE_CHECK: 10,
  //default check mark for non-icon checkboxes
  CURSOR_ARROW: 11,
  NOTE_EXCL: 12,
  //notification exclamation mark
  SCROLL_DOWN: 13,
  SCROLL_UP: 14,
  BACKSPACE: 15,
  LEFT_ARROW: 16,
  RIGHT_ARROW: 17,
  UI_EXPAND: 18,
  //triangle
  UI_COLLAPSE: 19,
  //triangle
  BOLD: 20,
  ITALIC: 21,
  UNDERLINE: 22,
  STRIKETHRU: 23,
  TREE_EXPAND: 24,
  TREE_COLLAPSE: 25,
  ZOOM_OUT: 26,
  ZOOM_IN: 27,
  LARGE_X: 28,
  TOOLMODE_MESH: 29,
  BRUSH: 30
};

// scripts/toolmode/toolmode_mesh.js
var pick_cachering2 = util_exports.cachering.fromConstructor(PickData, 32);
var MeshEditor = class extends ToolModeBase {
  static {
    __name(this, "MeshEditor");
  }
  static STRUCT = struct_default.inlineRegister(this, `
MeshToolMode {
}
  `);
  static toolModeDef() {
    return {
      typeName: "mesh",
      uiName: "Mesh",
      icon: Icons4.TOOLMODE_MESH,
      description: "Mesh tool"
    };
  }
  static {
    ToolModeBase.register(this);
  }
  constructor(ctx) {
    super(ctx);
    this.startMpos = new Vector2();
    this.mpos = new Vector2();
    this.keymap = new KeyMap([
      new HotKey("A", ["CTRL"], "mesh.toggle_select_all(mode='ADD')"),
      new HotKey("A", [], "mesh.toggle_select_all(mode='ADD')"),
      new HotKey("A", ["ALT"], "mesh.toggle_select_all(mode='SUB')"),
      new HotKey("A", ["CTRL", "SHIFT"], "mesh.toggle_select_all(mode='SUB')"),
      new HotKey("G", [], "transform.translate()"),
      new HotKey("S", [], "transform.scale()"),
      new HotKey("R", [], "transform.rotate()"),
      new HotKey("E", [], "mesh.split_edge()"),
      new HotKey("D", [], "mesh.dissolve_vertex()"),
      new HotKey("D", ["SHIFT"], "mesh.duplicate(doTransform=true)"),
      new HotKey("X", [], "mesh.delete()"),
      new HotKey("Delete", [], "mesh.delete()"),
      new HotKey("L", [], "mesh.select_linked(pick=true mode='ADD')"),
      new HotKey("L", ["SHIFT"], "mesh.select_linked(pick=true mode='SUB')"),
      new HotKey("F", [], "mesh.make_face")
    ]);
    this.mdown = false;
  }
  draw(ctx, canvas, g) {
    this.ctx = ctx;
    this.constructor.drawMesh(ctx, canvas, g);
  }
  static drawMesh(ctx, canvas, g, drawControls = ctx.properties.drawControls) {
    let mesh = ctx.mesh;
    let w = 8;
    const haveHandles = mesh.haveHandles;
    if (!haveHandles) {
      for (let e of mesh.edges.visible) {
        g.strokeStyle = color2css2(getElemColor(mesh.edges, e));
        g.beginPath();
        g.moveTo(e.v1.co[0], e.v1.co[1]);
        g.lineTo(e.v2.co[0], e.v2.co[1]);
        g.stroke();
      }
    } else {
      for (let e of mesh.edges.visible) {
        g.strokeStyle = color2css2(getElemColor(mesh.edges, e));
        g.beginPath();
        g.moveTo(e.v1.co[0], e.v1.co[1]);
        g.bezierCurveTo(e.h1.co[0], e.h1.co[1], e.h2.co[0], e.h2.co[1], e.v2.co[0], e.v2.co[1]);
        g.stroke();
      }
    }
    if (haveHandles && drawControls) {
      for (let h of mesh.handles.visible) {
        g.strokeStyle = color2css2(getElemColor(mesh.handles, h));
        let v = h.owner.vertex(h);
        g.beginPath();
        g.moveTo(v.co[0], v.co[1]);
        g.lineTo(h.co[0], h.co[1]);
        g.stroke();
      }
    }
    if (drawControls) {
      let vlists = [mesh.verts];
      if (haveHandles) {
        vlists.push(mesh.handles);
      }
      for (let list4 of vlists) {
        for (let v of list4.visible) {
          g.fillStyle = color2css2(getElemColor(list4, v));
          g.beginPath();
          g.rect(v.co[0] - w * 0.5, v.co[1] - w * 0.5, w, w);
          g.fill();
        }
      }
    }
    for (let f of mesh.faces.visible) {
      g.beginPath();
      let color = new Vector4(getElemColor(mesh.faces, f));
      color[3] = 0.15;
      g.fillStyle = color2css2(color);
      for (let list4 of f.lists) {
        let l = list4.l.prev;
        g.moveTo(l.v.co[0], l.v.co[1]);
        for (let l2 of list4) {
          if (haveHandles) {
            let { h1, h2 } = l2.prev;
            g.bezierCurveTo(h1.co[0], h1.co[1], h2.co[0], h2.co[1], l2.v.co[0], l2.v.co[1]);
          } else {
            g.lineTo(l2.v.co[0], l2.v.co[1]);
          }
        }
        g.closePath();
      }
      g.fill();
    }
  }
  on_mousedown(localX, localY, e) {
    this.mdown = e.button === 0;
    this.startMpos.loadXY(localX, localY);
    this.updateHighlight(localX, localY);
    let mesh = this.ctx.mesh;
    if (mesh.hasHighlight) {
      let type, elem2;
      for (let k in mesh.elists) {
        let elist = mesh.elists[k];
        if (elist.highlight) {
          type = elist.type;
          elem2 = elist.highlight;
        }
      }
      let mode;
      if (e.shiftKey) {
        mode = elem2.flag & 1 /* SELECT */ ? SelToolModes.SUB : SelToolModes.ADD;
      } else {
        mode = SelToolModes.ADD;
      }
      this.ctx.api.execTool(this.ctx, "mesh.select_one", {
        mode,
        unique: !e.shiftKey,
        elemEid: elem2.eid
      });
    } else if (e.button === 0 && config_default.ENABLE_EXTRUDE) {
      let co = new Vector3([localX, localY, 0]);
      this.ctx.api.execTool(this.ctx, "mesh.extrude_vertex", {
        co
      });
      this.updateHighlight(localX, localY);
    }
  }
  updateHighlight(localX, localY) {
    if (!this.ctx.workspace) {
      return;
    }
    let elem2 = this.ctx.workspace.pick(localX, localY);
    let mesh = this.ctx.mesh;
    let update = false;
    mesh.setHighlight(void 0);
    update = mesh.setHighlight(elem2);
    if (update) {
      window.redraw_all();
    }
    return update;
  }
  on_mousemove(localX, localY, e) {
    this.mpos.loadXY(localX, localY);
    if (haveModal()) {
      this.mdown = false;
      return;
    }
    this.updateHighlight(localX, localY);
    if (this.mdown) {
      let mesh = this.ctx.mesh;
      let act2 = false;
      let selmask = this.ctx.selMask;
      for (let elist of mesh.getElists()) {
        if (!(elist.type & selmask)) {
          continue;
        }
        act2 = act2 || elist.selected.length > 0;
      }
      if (act2 && this.mpos.vectorDistance(this.startMpos) > 10) {
        this.mdown = false;
        this.ctx.api.execTool(this.ctx, "transform.translate()");
      }
    }
  }
  on_mouseup(localX, localY, e) {
    this.mdown = false;
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
  }
};

// scripts/toolmode/toolmode_pen.js
var PenToolMode = class extends ToolModeBase {
  static {
    __name(this, "PenToolMode");
  }
  static STRUCT = struct_default.inlineRegister(this, `
PenToolMode {
  color    : vec4;
  strength : float;
  radius   : float;
}
  `);
  static toolModeDef() {
    return {
      typeName: "pen",
      uiName: "Pen",
      icon: Icons4.BRUSH
    };
  }
  static {
    ToolModeBase.register(this);
  }
  constructor(ctx = void 0) {
    super(ctx);
    this.strength = 1;
    this.radius = 25;
    this.color = new Vector4([0, 0.5, 1, 1]);
  }
  static defineAPI(api, st) {
    st.float("strength", "strength", "Strength").range(0, 1).step(0.1).decimalPlaces(2).noUnits();
    st.float("radius", "radius", "Radius").range(0.1, 512).step(0.1).expRate(2).decimalPlaces(1).unit("pixel");
  }
  buildSideBar(container) {
    container.prop("strength");
    container.prop("radius");
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
  }
  draw(ctx, canvas, g) {
    MeshEditor.drawMesh(ctx, canvas, g, false);
  }
};

// scripts/core/app.js
struct_default.setWarningMode(0);
var STARTUP_FILE_KEY = "_startup_file_1";
var Properties = {
  drawControls: { type: "bool", value: true },
  steps: { type: "int", value: 1, min: 0, max: 10, slideSpeed: 5 },
  boolVal: { type: "bool", value: true },
  panel: {
    type: "panel",
    float: { type: "float", value: 0, min: 0, max: 10, step: 0.05, decimalPlaces: 3 },
    slider: { type: "float", slider: true, value: 0, min: 0, max: 10, step: 0.05, decimalPlaces: 3 }
  }
};
var TestImages = {
  imageColumns: 2,
  singletonMode: false,
  test1: {
    size: [128, 256]
  },
  test2: {
    dimen: 256
  },
  test3: {
    dimen: 128
  }
};
window.addEventListener("contextmenu", (e) => {
  console.log(e);
  if (window._appstate && _appstate.screen) {
    let elem2 = _appstate.screen.pickElement(e.x, e.y);
    if (elem2 instanceof TextBoxBase || elem2.tagName === "INPUT") {
      return;
    }
  }
  e.preventDefault();
});
var ToolModeSet = class extends Array {
  static {
    __name(this, "ToolModeSet");
  }
  active = void 0;
  activeIndex = 0;
  static STRUCT = struct_default.inlineRegister(
    this,
    `
ToolModeSet {
  this        : array(abstract(ToolModeBase));
  activeIndex : int; 
}
  `
  );
  loadSTRUCT(reader) {
    reader(this);
  }
  push(...toolmodes) {
    for (let toolmode of toolmodes) {
      if (this.active === void 0) {
        this.active = toolmode;
      }
    }
    return super.push(...toolmodes);
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
  static defineAPI(api, st) {
    st.enum("activeIndex", "activeIndex", ToolModeBase.makeEnumProp()).on("change", () => window.redraw_all());
    return st;
  }
  constructor() {
    super();
    Object.defineProperty(this, "activeIndex", {
      get() {
        return this.indexOf(this.active);
      },
      set(i) {
        this.active = this[i];
      }
    });
  }
};
var App = class extends simple_exports.AppState {
  static {
    __name(this, "App");
  }
  constructor() {
    super(Context2);
    this.mesh = void 0;
    this.properties = void 0;
    this.toolmodes = new ToolModeSet();
    this.createNewFile(true);
    this.saveFilesInJSON = true;
    let dimen = 128;
    this.testImages = new ImageWrangler(TestImages);
  }
  get toolmode() {
    return this.toolmodes.active;
  }
  createNewFile(noReset = false) {
    if (!noReset) {
      this.reset();
      this.makeScreen();
    }
    this.properties = new PropertiesBag(Properties);
    this.mesh = new Mesh();
    let s = 50;
    let d = 200;
    let v1 = this.mesh.makeVertex([s, s, 0]);
    let v2 = this.mesh.makeVertex([s, s + d, 0]);
    let v3 = this.mesh.makeVertex([s + d, s + d, 0]);
    let v4 = this.mesh.makeVertex([s + d, s, 0]);
    this.mesh.makeFace([v1, v2, v3, v4]);
    this.toolmodes = new ToolModeSet();
    for (let cls of ToolModeClasses) {
      this.toolmodes.push(new cls(this.ctx));
    }
  }
  saveStartupFile() {
    this.saveFile().then((json) => {
      json = JSON.stringify(json);
      localStorage[STARTUP_FILE_KEY] = json;
      console.log("Saved startup file", (json.length / 1024).toFixed(2) + "kb");
    });
  }
  loadStartupFile() {
    if (!(STARTUP_FILE_KEY in localStorage)) {
      return;
    }
    try {
      let json = JSON.parse(localStorage[STARTUP_FILE_KEY]);
      this.loadFile(json);
    } catch (error2) {
      util_exports.print_stack(error2);
      console.warn("Failed to load startup file");
      this.createNewFile();
    }
  }
  getFileObjects() {
    return [this.mesh, this.properties, this.testImages, this.toolmodes];
  }
  saveFileSync(objects, args = {}) {
    if (args.useJSON === void 0) {
      args.useJSON = true;
    }
    return super.saveFileSync(this.getFileObjects(), args);
  }
  saveFile(args = {}) {
    return new Promise((accept, reject) => {
      accept(this.saveFileSync(this.getFileObjects(), args));
    });
  }
  loadFileSync(data, args = {}) {
    if (args.useJSON === void 0) {
      args.useJSON = true;
    }
    let file = super.loadFileSync(data, args);
    console.log(file.objects);
    this.mesh = file.objects[0];
    this.properties = file.objects[1] ?? this.properties;
    this.properties.patchTemplate(Properties);
    for (let obj of file.objects) {
      if (obj instanceof ImageWrangler) {
        this.testImages = obj;
        this.testImages.loadFromTemplate(TestImages);
      }
    }
    for (let obj of file.objects) {
      if (obj instanceof ToolModeSet) {
        this.toolmodes = new ToolModeSet();
        this.toolmodes.length = 0;
        for (let toolmode of obj) {
          let i = ToolModeClasses.indexOf(toolmode.constructor);
          if (i < 0) {
            console.warn("Missing tool mode " + toolmode.constructor.name, obj);
            continue;
          }
          this.toolmodes[i] = toolmode;
        }
        this.toolmodes.active = obj.active;
        for (let i = 0; i < this.toolmodes.length; i++) {
          if (this.toolmodes[i] === void 0) {
            this.toolmodes[i] = new ToolModeClasses[i](this.ctx);
          }
        }
        break;
      }
    }
    window.redraw_all();
    return file;
  }
  loadFile(data, args = {}) {
    return new Promise((accept, reject) => {
      accept(this.loadFileSync(data, args));
    });
  }
  draw() {
    for (let sarea of this.screen.sareas) {
      if (sarea.area && sarea.area.draw) {
        sarea.area.draw();
      }
    }
  }
  start() {
    super.start({
      DEBUG: {
        modalEvents: true
      },
      iconsheet: document.getElementById("iconsheet"),
      icons: Icons4
    });
    this.loadStartupFile();
  }
};
function start() {
  console.log("start!");
  let animreq = void 0;
  function f() {
    animreq = void 0;
    _appstate.draw();
  }
  __name(f, "f");
  let ignore_lvl = 0;
  window.draw_ignore_push = function() {
    ignore_lvl++;
  };
  window.draw_ignore_pop = function() {
    ignore_lvl = Math.max(ignore_lvl - 1, 0);
  };
  window.redraw_all = function() {
    if (animreq || ignore_lvl) {
      return;
    }
    animreq = requestAnimationFrame(f);
  };
  window._appstate = new App();
  _appstate.start();
  if (config_default.AUTOSAVE) {
    window.setInterval(() => {
      _appstate.saveStartupFile();
    }, config_default.AUTOSAVE_INTERVAL_MS);
  }
  window.redraw_all();
}
__name(start, "start");

// scripts/index.ts
var a = 1;
export {
  App,
  Properties,
  STARTUP_FILE_KEY,
  TestImages,
  ToolModeSet,
  a,
  start
};
//!eventWasTouch(e)) {
//# sourceMappingURL=index.js.map
