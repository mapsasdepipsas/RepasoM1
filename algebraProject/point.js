"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //setters y getters
    //x
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    //y
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    //Crear un método toString() que convierta a texto las coordenadas del punto.
    //Debe devolver: “(x,y)”
    Point.prototype.toString = function () {
        return ("\"".concat(this.x.toString(), "\", \"").concat(this.y.toString(), "\""));
    };
    //Crear un método denominado distanceToOrigin():number que devuelva la distancia del
    //punto al origen de coordenadas (0,0).
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(this.x * this.y + this.y * this.y);
    };
    //Crear un método denominado calculateDistance(anotherPoint:Point):number, que
    //devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
    //instancia de Punto que se recibe como parámetro denominada anotherPoint.
    Point.prototype.calculateDistance = function (anotherPoint) {
        var xDist = anotherPoint.x - this.x;
        var yDist = anotherPoint.y - this.y;
        return Math.sqrt(xDist * xDist + yDist * yDist);
    };
    //Programa un método denominado calculateQuadrant():number que devuelva el
    //cuadrante en el que se encuentra el punto.
    Point.prototype.calculateQuadrant = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    //Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
    //como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
    //de dicho array que esté más cercano al punto actual. Utilizar para ello el método calculateDistance.
    Point.prototype.calculateNearest = function (points) {
        var puntoMasCercano = points[0];
        var minDistancia = this.calculateDistance(points[0]);
        for (var index = 1; index < points.length; index++) {
            var distancia = this.calculateDistance(points[index]);
            if (distancia < minDistancia) {
                minDistancia = distancia;
                puntoMasCercano = points[index];
            }
        }
        return puntoMasCercano;
    };
    return Point;
}());
exports.Point = Point;
