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
console.log((0, condicionales_1.isEven)((0, buclesFor_1.add)(array1)));
console.log((0, condicionales_1.isEven)((0, buclesFor_1.add)(array2)));
console.log((0, condicionales_1.isEven)((0, buclesFor_1.add)(array3)));
