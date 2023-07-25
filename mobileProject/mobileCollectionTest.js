"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobileCollection_1 = require("./mobileCollection");
var mobile_1 = require("./mobile");
//Crear 4 objetos de la clase Mobile y un array que los contenga.
var mobile1 = new mobile_1.Mobile("iPhone 12", "Apple", "WUHS682J", "rojo", 1000);
var mobile2 = new mobile_1.Mobile("iPhone 13", "Apple", "GSIW892U", "amarillo", 1200);
var mobile3 = new mobile_1.Mobile("iPhone 14", "Apple", "OIHS567K", "morado", 1400);
var mobile4 = new mobile_1.Mobile("iPhone 15", "Apple", "KWSG1245K", "verde", 1600);
var arrayMobiles = [mobile1, mobile2, mobile3, mobile4];
//Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
//previamente y comprobar todos sus métodos.
var myCollection = new mobileCollection_1.MobileCollection(arrayMobiles);
//probar
var coleccionMoviles = myCollection.getMobiles();
console.log(coleccionMoviles);
//volver a probar metodo getPrice
console.log(myCollection.getMobiles()[0].getPrice());
//método printCollection que recorra todos los objetos del atributo mobile y los muestre por consola
var caracteristicasCollection = myCollection.printCollection();
console.log(caracteristicasCollection);
//método totalPriceCalculation que muestre el precio total de la colección
var precioCollection = myCollection.getTotalPrice();
console.log("Price overall: ".concat(precioCollection));
