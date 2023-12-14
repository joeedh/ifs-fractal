import {Vertex} from './mesh.js';

export function vertexSmooth(mesh, verts = mesh.verts, fac = 0.5, doHandles = true) {
  let co = new Vertex();

  let edges;
  edges = new Set();

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
    let tot = 0.0;

    for (let e of v.edges) {
      let v2 = e.otherVertex(v);

      co.add(v2.co);
      tot += 1.0;
    }

    if (tot !== 0.0) {
      co.mulScalar(1.0/tot);
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
