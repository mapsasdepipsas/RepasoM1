"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    //Metodos Públicos: 
    //Crear los métodos setters y getters para todos los atributos de la clase. 
    //name 
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    //trademark 
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    //model 
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    //color 
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    //price 
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //Crear un nuevo método que imprima por consola todas las características de la clase. 
    Mobile.prototype.allCharact = function () {
        return ("The characteristics of the mobile ".concat(this.name, " are: \n Name: ").concat(this.name, " \n Trademark: ").concat(this.trademark, " \n Model: ").concat(this.model, " \n Color: ").concat(this.color, " \n Price: ").concat(this.price));
    };
    return Mobile;
}());
exports.Mobile = Mobile;
