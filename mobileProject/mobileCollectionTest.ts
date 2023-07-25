import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

//Crear 4 objetos de la clase Mobile y un array que los contenga.
let mobile1 = new Mobile("iPhone 12", "Apple", "WUHS682J", "rojo", 1000);
let mobile2 = new Mobile("iPhone 13", "Apple", "GSIW892U", "amarillo", 1200);
let mobile3 = new Mobile("iPhone 14", "Apple", "OIHS567K", "morado", 1400);
let mobile4 = new Mobile("iPhone 15", "Apple", "KWSG1245K", "verde", 1600);

let arrayMobiles = [mobile1, mobile2, mobile3, mobile4]

//Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
//previamente y comprobar todos sus métodos.
let myCollection = new MobileCollection(arrayMobiles)

//probar
let coleccionMoviles = myCollection.getMobiles();
console.log(coleccionMoviles);

//volver a probar metodo getPrice
console.log(myCollection.getMobiles()[0].getPrice());

//método printCollection que recorra todos los objetos del atributo mobile y los muestre por consola
let caracteristicasCollection = myCollection.printCollection();
console.log(caracteristicasCollection);

//método totalPriceCalculation que muestre el precio total de la colección
let precioCollection = myCollection.getTotalPrice();
console.log(`Price overall: ${precioCollection}`);
