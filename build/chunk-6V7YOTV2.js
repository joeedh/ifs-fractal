var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// scripts/path.ux/scripts/path-controller/util/html5_fileapi.js
var html5_fileapi_exports = {};
__export(html5_fileapi_exports, {
  loadFile: () => loadFile,
  saveFile: () => saveFile
});
function saveFile(data, filename = "unnamed", exts = [], mime = "application/x-octet-stream") {
  let blob = new Blob([data], { type: mime });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  a.click();
}
__name(saveFile, "saveFile");
function loadFile(filename = "unnamed", exts = []) {
  let input = document.createElement("input");
  input.type = "file";
  exts = exts.join(",");
  input.setAttribute("accept", exts);
  return new Promise((accept, reject) => {
    input.onchange = function(e) {
      if (this.files === void 0 || this.files.length !== 1) {
        reject("file load error");
        return;
      }
      let file = this.files[0];
      let reader = new FileReader();
      reader.onload = function(e2) {
        accept(e2.target.result);
      };
      reader.readAsArrayBuffer(file);
    };
    input.click();
  });
}
__name(loadFile, "loadFile");
window._testLoadFile = function(exts = ["*.*"]) {
  loadFile(void 0, exts).then((data) => {
    console.log("got file data:", data);
  });
};
window._testSaveFile = function() {
  let buf = _appstate.createFile();
  saveFile(buf, "unnamed.w3d", [".w3d"]);
};

// scripts/path.ux/scripts/platforms/platform_base.js
var mimeMap = {
  ".js": "application/javascript",
  ".json": "text/json",
  ".html": "text/html",
  ".txt": "text/plain",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".tiff": "image/tiff",
  ".gif": "image/gif",
  ".bmp": "image/bitmap",
  ".tga": "image/targa",
  ".svg": "image/svg+xml",
  ".xml": "text/xml",
  ".webp": "image/webp",
  "svg": "image/svg+xml",
  "txt": "text/plain",
  "html": "text/html",
  "css": "text/css",
  "ts": "application/typescript",
  "py": "application/python",
  "c": "application/c",
  "cpp": "application/cpp",
  "cc": "application/cpp",
  "h": "application/c",
  "hh": "application/cpp",
  "hpp": "application/cpp",
  "sh": "application/bash",
  "mjs": "application/javascript",
  "cjs": "application/javascript",
  "gif": "image/gif"
};
var textMimes = /* @__PURE__ */ new Set([
  "application/javascript",
  "application/x-javscript",
  "image/svg+xml",
  "application/xml"
]);
function isMimeText(mime) {
  if (!mime) {
    return false;
  }
  if (mime.startsWith("text")) {
    return true;
  }
  return textMimes.has(mime);
}
__name(isMimeText, "isMimeText");
function getExtension(path) {
  if (!path) {
    return "";
  }
  let i = path.length;
  while (i > 0 && path[i] !== ".") {
    i--;
  }
  return path.slice(i, path.length).trim().toLowerCase();
}
__name(getExtension, "getExtension");
function getMime(path) {
  let ext = getExtension(path);
  if (ext in mimeMap) {
    return mimeMap[ext];
  }
  return "application/x-octet-stream";
}
__name(getMime, "getMime");
var PlatformAPI = class {
  static {
    __name(this, "PlatformAPI");
  }
  static writeFile(data, handle, mime) {
    throw new Error("implement me");
  }
  static resolveURL(path, base = location.href) {
    base = base.trim();
    if (path.startsWith("./")) {
      path = path.slice(2, path.length).trim();
    }
    while (path.startsWith("/")) {
      path = path.slice(1, path.length).trim();
    }
    while (base.endsWith("/")) {
      base = base.slice(0, base.length - 1).trim();
    }
    let exts = ["html", "txt", "js", "php", "cgi"];
    for (let ext of exts) {
      ext = "." + ext;
      if (base.endsWith(ext)) {
        let i = base.length - 1;
        while (i > 0 && base[i] !== "/") {
          i--;
        }
        base = base.slice(0, i).trim();
      }
    }
    while (base.endsWith("/")) {
      base = base.slice(0, base.length - 1).trim();
    }
    path = (base + "/" + path).split("/");
    let path2 = [];
    for (let i = 0; i < path.length; i++) {
      if (path[i] === "..") {
        path2.pop();
      } else {
        path2.push(path[i]);
      }
    }
    return path2.join("/");
  }
  //returns a promise that resolves to a FilePath that can be used for re-saving.
  static showOpenDialog(title, args = new FileDialogArgs()) {
    throw new Error("implement me");
  }
  //returns a promise
  static showSaveDialog(title, savedata_cb, args = new FileDialogArgs()) {
    throw new Error("implement me");
  }
  //returns a promise.  if mime is a text type, a string will be fed to the promise,
  //otherwise it will be an ArrayBuffer
  static readFile(path, mime) {
    throw new Error("implement me");
  }
};
var FileDialogArgs = class {
  static {
    __name(this, "FileDialogArgs");
  }
  constructor() {
    this.multi = false;
    this.addToRecentList = false;
    this.filters = [];
  }
};
var FilePath = class {
  static {
    __name(this, "FilePath");
  }
  constructor(data, filename = "unnamed") {
    this.data = data;
    this.filename = filename;
  }
};

export {
  __name,
  __require,
  __commonJS,
  __export,
  __toESM,
  saveFile,
  html5_fileapi_exports,
  mimeMap,
  isMimeText,
  PlatformAPI,
  FileDialogArgs,
  FilePath
};
//# sourceMappingURL=chunk-6V7YOTV2.js.map
