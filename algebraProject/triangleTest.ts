import { Point } from "./point";
import { Triangle } from "./triangle";

let point1 = new Point(0, 3);
let point2 = new Point(6, 10);
let point3 = new Point(12, 0);

let myTriangle = new Triangle(point1, point2, point3);
let medidasLados = myTriangle.calculateLengthSides();

console.log(medidasLados);