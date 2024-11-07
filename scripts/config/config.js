import {MeshTypes} from '../core/mesh_base.js';

export default {
  MESH_HANDLES        : true,
  SELECTMASK          : MeshTypes.VERTEX | MeshTypes.HANDLE | MeshTypes.EDGE | MeshTypes.FACE,
  ENABLE_EXTRUDE      : true,
  AUTOSAVE            : true,
  AUTOSAVE_INTERVAL_MS: 1000,
  DRAW_TEST_IMAGES    : true,
};
