"use strict";
//En otro fichero denominado mobileTest.ts importar la clase Mobile. 
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
//Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar 
//todos sus métodos. 
var myMobile = new mobile_1.Mobile("Redmi Note 8", "Xiaomi", "M56J789HRT", "negro", 350);
console.log(myMobile);
//Crear tres objetos de la clase Mobile en el fichero mobileTest.ts. 
var myMobile2 = new mobile_1.Mobile("Galaxy 12", "Samsung", "M543902J", "blanco", 1000);
var myMobile3 = new mobile_1.Mobile("iPhone 13", "Apple", "TU829107D", "azul", 1200);
var myMobile4 = new mobile_1.Mobile("HTC One S", "HTC", "JWOQ4502I", "gris", 50);
//Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres 
//objetos creados en el punto 2. 
var myMobiles = [myMobile2, myMobile3, myMobile4];
for (var _i = 0, myMobiles_1 = myMobiles; _i < myMobiles_1.length; _i++) {
    var mobile = myMobiles_1[_i];
    mobile.allCharact();
    console.log(' ');
}
