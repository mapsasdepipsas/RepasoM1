//1. Realizar una función que imprima los números impares existentes hasta el número
//indicado como parámetro de entrada.
//La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
function evenNumbers(num) {
    for (let item = 1; item <= num; item++) {
        if (item % 2 != 0) {
            console.log(item);  
        }
    }
}
let num = 8;
evenNumbers(num);


//2. Realizar una función que como parámetro de entrada reciba un array y como salida
//devuelva el array revertido. No se puede utilizar el método revert de la clase array
//La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
function myRevert(myArr) {
    let arrayRevertido = [];
    for (let item = myArr.length - 1; item >= 0; item--) {
        arrayRevertido.push(myArr[item]);
    }
    return arrayRevertido;
}

let arrayOriginal = [76, 90, 243, 45, 9];
let arrayRevertido = myRevert(arrayOriginal);
console.log(arrayRevertido);


//3. Realizar una función que reciba como parámetro un array de strings que contenga
//nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
//La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
function isRainbow(colors) {
    let arcoiris = ["rojo", "amarillo", "naranja", "verde", "azul", "morado"];
    for (let color of colors) {

    if (arcoiris.includes(color)) {
        console.log(`El ${color} SÍ está en el arcoíris`);
    } else {
        console.log(`El ${color} NO está en el arcoíris`);
    }
}
}

let arrayColores = ["rojo", "negro", "amarillo", "marrón", "verde", "blanco"];
isRainbow(arrayColores);


//4. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
//almacenadas en un array.
//La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
function add(myWords) {
    let suma = 0;
    for (let item = 0; item < myWords.length; item++) {
        suma += myWords[item].length;
    }
    return suma;
}
let palabras = ["hola", "adios", "alcachofa", "teléfono"];
console.log(add(palabras));

module.exports = {add};