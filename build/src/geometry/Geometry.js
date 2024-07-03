import * as mat4 from "../math/Mat4.js";
export class Geometry {
    scene;
    _vertices;
    colors;
    uvs;
    #transformationMatrix = [];
    constructor(scene, _vertices = [], colors = [], uvs = []) {
        this.scene = scene;
        this._vertices = _vertices;
        this.colors = colors;
        this.uvs = uvs;
        // this.vertices = vertices;
        // this.colors = colors;
        // this.uvs = uvs;
        this.#transformationMatrix.push(mat4.create(1.0));
    }
    #pushToTransformationMatrix() {
        // this.#transformationMatrix
    }
    get vertices() {
        return this._vertices;
    }
    set vertices(value) {
        this._vertices = value;
    }
}
