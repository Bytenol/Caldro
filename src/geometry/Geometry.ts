import {Scene} from "../core/Scene.js";
import * as mat4 from "../math/Mat4.js";
import {t_mat4} from "../types";

export class Geometry {

    #transformationMatrix: Array<t_mat4> = [];

    constructor(protected scene: Scene, private _vertices: Array<number> = [],
                public colors: Array<number> = [], public uvs: Array<number> = [])
    {
        // this.vertices = vertices;
        // this.colors = colors;
        // this.uvs = uvs;
        this.#transformationMatrix.push(mat4.create(1.0));
    }
    
    #pushToTransformationMatrix() {
        // this.#transformationMatrix
    }

    public get vertices(): Array<number> {
        return this._vertices;
    }
    public set vertices(value: Array<number>) {
        this._vertices = value;
    }
    
}