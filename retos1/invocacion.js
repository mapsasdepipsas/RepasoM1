//Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
//par o impar la suma de los caracteres de cada uno de los siguientes arrays:

//• [“Casa”, “Coche”, “Ciudad”, “Cesta”]
//• [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
//• [“Venezuela”, “Veneno”, “Voltaje”]

//Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
//También tendrás que importar dichos ficheros en el fichero actual.

let {isEven} = require ('./condicionales')
let {add} = require ('./buclesFor') 

let array1 = ["Casa", "Coche", "Ciudad", "Cesta"]
let array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let array3 = ["Venezuela", "Veneno", "Voltaje"]

function sumacaracteres(array) {
    let suma = 0;
    for (let string of array) {
        suma += add(string);
    }
    return suma;
}

function paroimpar(suma) {
    let par = isEven(suma);
    return par ? 'par' : 'impar';
}


console.log("Array 1");
let sumaArray1 = sumacaracteres(array1)
console.log(`Suma de caracteres: ${sumaArray1} - Es ${paroimpar(sumaArray1)}`);

console.log("Array 2");
let sumaArray2 = sumacaracteres(array2)
console.log(`Suma de caracteres: ${sumaArray2} - Es ${paroimpar(sumaArray2)}`);

console.log("Array 3");
let sumaArray3 = sumacaracteres(array3)
console.log(`Suma de caracteres: ${sumaArray3} - Es ${paroimpar(sumaArray3)}`);