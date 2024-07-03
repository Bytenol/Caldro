import {t_mat4} from "../types";
import * as mat4 from "../math/Mat4.js";

export class Mat4Composition {
    #stack: Array<t_mat4> = [];
    #stackIndex = -1;
    #savedState: t_mat4 = mat4.create(1.0);

    constructor(m: t_mat4 = mat4.create(1.0)) {
        this.#stack.push(m);
        this.#stackIndex++;
    }

    push(m: t_mat4) {
        const res = mat4.multiply(this.currentData, m);
        this.#stack.push(res);
    }

    pop(): t_mat4 {
        if (this.#stackIndex > -1) this.#stackIndex--;
        return (this.#stack.pop() || mat4.create(1.0));
    }

    get currentData(): t_mat4 {
        return this.#stack[this.#stackIndex];
    }

    save(): void {
        this.#savedState = this.currentData;
    }

    restore(): void {
        this.#stack.push(this.#savedState);
    }

}