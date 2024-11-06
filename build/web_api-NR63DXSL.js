import {
  FileDialogArgs,
  FilePath,
  PlatformAPI,
  __name,
  isMimeText,
  mimeMap,
  saveFile
} from "./chunk-6V7YOTV2.js";

// scripts/path.ux/scripts/platforms/web/web_api.js
function getWebFilters(filters = []) {
  let types = [];
  for (let item of filters) {
    let mime = item.mime;
    let exts = [];
    for (let ext of item.extensions) {
      ext = "." + ext;
      if (ext.toLowerCase() in mimeMap) {
        mime = mime !== void 0 ? mime : mimeMap[ext.toLowerCase()];
      }
      exts.push(ext);
    }
    if (!mime) {
      mime = "application/x-octet-stream";
    }
    types.push({
      description: item.name,
      accept: {
        [mime]: exts
      }
    });
  }
  return types;
}
__name(getWebFilters, "getWebFilters");
var platform = class extends PlatformAPI {
  static {
    __name(this, "platform");
  }
  //returns a promise
  static showOpenDialog(title, args = new FileDialogArgs()) {
    let types = getWebFilters(args.filters);
    return new Promise((accept, reject) => {
      try {
        window.showOpenFilePicker({
          multiple: args.multi,
          types
        }).then((arg) => {
          let paths = [];
          for (let file of arg) {
            paths.push(new FilePath(file, file.name));
          }
          accept(paths);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  static writeFile(data, handle, mime) {
    handle = handle.data;
    return handle.createWritable().then((file) => {
      file.write(data);
      file.close();
    });
  }
  static showSaveDialog(title, savedata_cb, args = new FileDialogArgs()) {
    if (!window.showSaveFilePicker) {
      return this.showSaveDialog_old(...arguments);
    }
    let types = getWebFilters(args.filters);
    return new Promise((accept, reject) => {
      let fname;
      let saveHandle;
      try {
        saveHandle = window.showSaveFilePicker({ types });
      } catch (error) {
        reject(error);
      }
      let handle;
      saveHandle.then((handle1) => {
        handle = handle1;
        fname = handle.name;
        console.log("saveHandle", handle);
        return handle.createWritable();
      }).then((file) => {
        let savedata = savedata_cb();
        if (savedata instanceof Uint8Array || savedata instanceof DataView) {
          savedata = savedata.buffer;
        }
        file.write(savedata);
        file.close();
        let path = new FilePath(handle, fname);
        accept(path);
      });
    });
  }
  //returns a promise
  static showSaveDialog_old(title, savedata, args = new FileDialogArgs()) {
    let exts = [];
    for (let list of args.filters) {
      if (!Array.isArray(list) && list.filters) {
        list = list.filters;
      }
      for (let ext of list) {
        exts.push(ext);
      }
    }
    return new Promise((accept, reject) => {
      saveFile(savedata);
      window.setTimeout(() => {
        accept("undefined");
      });
    });
  }
  //path is a FilePath instance, for web this is the actual file data
  static readFile(path, mime = "") {
    if (mime === "") {
      mime = path.filename;
      let i = mime.length - 1;
      while (i > 0 && mime[i] !== ".") {
        i--;
      }
      mime = mime.slice(i, mime.length).trim().toLowerCase();
      if (mime in mimeMap) {
        mime = mimeMap[mime];
      }
    }
    return new Promise((accept, reject) => {
      path.data.getFile().then((file) => {
        console.log("file!", file);
        let promise;
        if (isMimeText(mime)) {
          promise = file.text();
        } else {
          promise = file.arrayBuffer();
        }
        promise.then((data) => {
          accept(data);
        });
      });
    });
    return new Promise((accept, reject) => {
      let data = path.data;
      if (isMimeText(mime)) {
        let s = "";
        data = new Uint8Array(data);
        for (let i = 0; i < data.length; i++) {
          s += String.fromCharCode(data[i]);
        }
        data = s;
      }
      accept(data);
    });
  }
};
export {
  getWebFilters,
  platform
};
//# sourceMappingURL=web_api-NR63DXSL.js.map
