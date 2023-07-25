"use strict";
//Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
//par o impar la suma de los caracteres de cada uno de los siguientes arrays:
Object.defineProperty(exports, "__esModule", { value: true });
//• [“Casa”, “Coche”, “Ciudad”, “Cesta”]
//• [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
//• [“Venezuela”, “Veneno”, “Voltaje”]
//Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
//También tendrás que importar dichos ficheros en el fichero actual.
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];
function sumacaracteres(array) {
    var suma = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var string = array_1[_i];
        suma += (0, buclesFor_1.add)([string]);
    }
    return suma;
}
function paroimpar(suma) {
    var par = (0, condicionales_1.isEven)(suma);
    return par ? 'par' : 'impar';
}
console.log("Array 1");
var sumaArray1 = sumacaracteres(array1);
console.log("Suma de caracteres: ".concat(sumaArray1, " - Es ").concat(paroimpar(sumaArray1)));
console.log("Array 2");
var sumaArray2 = sumacaracteres(array2);
console.log("Suma de caracteres: ".concat(sumaArray2, " - Es ").concat(paroimpar(sumaArray2)));
console.log("Array 3");
var sumaArray3 = sumacaracteres(array3);
console.log("Suma de caracteres: ".concat(sumaArray3, " - Es ").concat(paroimpar(sumaArray3)));
