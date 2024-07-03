import { Mat4Composition } from "../math/Mat4Composition.js";
export class Node {
    parent;
    children = [];
    _w = 0;
    _h = 0;
    matrix = new Mat4Composition();
    constructor(parent = null) {
        this.parent = parent;
        this._w = (parent?._w || 0);
        this._h = (parent?._h || 0);
    }
    addChild(child) {
        this.children.push(child);
    }
    get allChildren() { return this.children; }
}
