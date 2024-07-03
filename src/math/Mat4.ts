import {t_mat4, t_vec4} from "../types";

const create = (i: number = 1): t_mat4 => {
    return [
        i, 0, 0, 0,
        0, i, 0, 0,
        0, 0, i, 0,
        0, 0, 0, i,
    ]
}


const ortho = (): t_mat4 => {
    const res = create(1.0);
    return res;
}


const multiply = (m1: t_mat4, m2: t_mat4): t_mat4 => {
    const res: t_mat4 = create(0.0);
    for (let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                const v1 = m1[i * 4 + k];
                const v2 = m2[k * 4 + j];
                res[i * 4 + j] += v1 * v2;
            }
        }
    }
    return res;
}


const multiplyVector = (v: t_vec4, m: t_mat4): t_mat4 => {
    const res: t_mat4 = create(1.0);
    console.error("Not implemented");
    return res;
}


export {
    create,
    multiply
}