"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = 0;
        //this.totalPriceCalculation();
    }
    //setters y getters
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
        //this.totalPriceCalculation();
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
