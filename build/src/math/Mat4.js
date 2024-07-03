const create = (i = 1) => {
    return [
        i, 0, 0, 0,
        0, i, 0, 0,
        0, 0, i, 0,
        0, 0, 0, i,
    ];
};
const ortho = () => {
    const res = create(1.0);
    return res;
};
const multiply = (m1, m2) => {
    const res = create(0.0);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                const v1 = m1[i * 4 + k];
                const v2 = m2[k * 4 + j];
                res[i * 4 + j] += v1 * v2;
            }
        }
    }
    return res;
};
const multiplyVector = (v, m) => {
    const res = create(1.0);
    console.error("Not implemented");
    return res;
};
export { create, multiply };
