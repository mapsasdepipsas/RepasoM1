"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    //Programa el método calculateLengthSides() : number[] que debe devolver un array de tres posiciones,
    //cada una de las cuales debe ser la longitud de uno de los lados del triángulo. Usa el método calculateDistance de la clase Point.
    Triangle.prototype.calculateLengthSides = function () {
        var lado1Length = this.vertex1.calculateDistance(this.vertex2);
        var lado2Length = this.vertex2.calculateDistance(this.vertex3);
        var lado3Length = this.vertex3.calculateDistance(this.vertex1);
        return [lado1Length, lado2Length, lado3Length];
    };
    return Triangle;
}());
exports.Triangle = Triangle;
