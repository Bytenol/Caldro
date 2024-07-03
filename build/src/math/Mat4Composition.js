import * as mat4 from "../math/Mat4.js";
export class Mat4Composition {
    #stack = [];
    #stackIndex = -1;
    #savedState = mat4.create(1.0);
    constructor(m = mat4.create(1.0)) {
        this.#stack.push(m);
        this.#stackIndex++;
    }
    push(m) {
        const res = mat4.multiply(this.currentData, m);
        this.#stack.push(res);
    }
    pop() {
        if (this.#stackIndex > -1)
            this.#stackIndex--;
        return (this.#stack.pop() || mat4.create(1.0));
    }
    get currentData() {
        return this.#stack[this.#stackIndex];
    }
    save() {
        this.#savedState = this.currentData;
    }
    restore() {
        this.#stack.push(this.#savedState);
    }
}
