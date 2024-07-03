import { Geometry } from "./Geometry.js";
const vertexShaderSource = `
attribute vec3 position;

void main() {
    gl_Position = vec4(position, 1.0);
}
`;
const fragmentShaderSource = `
precision highp float;
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;
const _Caldro_Rectangle_Vertices = [
    0, 0,
    1, 0,
    1, 1,
];
export class RectangleShape extends Geometry {
    scene;
    x;
    y;
    w;
    h;
    constructor(scene, x, y, w, h) {
        super(scene, _Caldro_Rectangle_Vertices, [], []);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
