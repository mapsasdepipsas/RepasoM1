//Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
//par o impar la suma de los caracteres de cada uno de los siguientes arrays:

//• [“Casa”, “Coche”, “Ciudad”, “Cesta”]
//• [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
//• [“Venezuela”, “Veneno”, “Voltaje”]

//Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
//También tendrás que importar dichos ficheros en el fichero actual.

import {isEven} from './condicionales';
import {add} from './buclesFor'; 

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"]

console.log(isEven(add(array1)));
console.log(isEven(add(array2)));
console.log(isEven(add(array3)));