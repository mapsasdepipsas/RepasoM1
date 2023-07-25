//1. Realizar una función que te devuelva si existe un numero par en el array de números que
//introduces como parámetro de entrada.
//La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
function hasEven(myNums:number[]): boolean{
    
    let item = 0;
    while (item < myNums.length) {
        if(myNums[item] % 2 == 0){
            return true;
        }
        
        item++;
    }
    return false;
}

let arrayNumeros: number[] = [33, 65, 97, 101, 45];
console.log(hasEven(arrayNumeros));

//2. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
//todos los nombres empiezan por M.
//La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
function startWithM(myNames: string[]): boolean {
    let item = 0;
    while (item < myNames.length) {
        if (myNames[item][0] != "M") {
            return false;
        }
        item++;
    }
    return true;
}

let arrayNombre: string[] = ["Maria", "Jose", "Pepe"];
console.log(startWithM(arrayNombre));