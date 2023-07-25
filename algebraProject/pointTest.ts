import { Point } from "./point";

//Crear un nuevo objeto myPoint de la clase Point y probar sus métodos
let myPoint = new Point(54, -78);
console.log(myPoint);
console.log(myPoint.toString());

//Prueba de métodos distanceToOrigin y calculateDistance
console.log(myPoint.distanceToOrigin());

let myPoint2 = new Point(-33,0);
console.log(myPoint.calculateDistance(myPoint2));

//Prueba método calculateQuadrant
console.log(myPoint.calculateQuadrant());
console.log(myPoint2.calculateQuadrant());

//Prueba método calculateNearest
let myPoints = [myPoint, myPoint2];
console.log(myPoint.calculateNearest(myPoints));
