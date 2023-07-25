"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = 0;
        this.totalPriceCalculation();
    }
    //setters y getters
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
        this.totalPriceCalculation();
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    //Crear un método privado denominado totalPriceCalculation sin parámetros de entrada,
    //que te calcule el precio total de la colección.
    MobileCollection.prototype.totalPriceCalculation = function () {
        this.totalPrice = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            this.totalPrice += mobile.getPrice();
        }
    };
    //Crear un nuevo método denominado printCollection que recorra todos los objetos del
    //atributo mobile y los muestre por consola
    MobileCollection.prototype.printCollection = function () {
        var y = "";
        console.log("These are all my mobiles: \n");
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            y += mobile.allCharact() + "\n";
        }
        return y;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
