"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
//Crear un nuevo objeto myPoint de la clase Point y probar sus métodos
var myPoint = new point_1.Point(54, -78);
console.log(myPoint);
console.log(myPoint.toString());
//Prueba de métodos distanceToOrigin y calculateDistance
console.log(myPoint.distanceToOrigin());
var myPoint2 = new point_1.Point(-33, 0);
console.log(myPoint.calculateDistance(myPoint2));
//Prueba método calculateQuadrant
console.log(myPoint.calculateQuadrant());
console.log(myPoint2.calculateQuadrant());
//Prueba método calculateNearest
var myPoints = [myPoint, myPoint2];
console.log(myPoint.calculateNearest(myPoints));
