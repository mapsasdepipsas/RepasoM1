//En otro fichero denominado mobileTest.ts importar la clase Mobile. 

import { Mobile } from "./mobile"; 

 
 

//Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar 

//todos sus métodos. 

 
 

let myMobile = new Mobile("Redmi Note 8", "Xiaomi", "M56J789HRT", "negro", 350); 

console.log(myMobile); 

 
 

//Crear tres objetos de la clase Mobile en el fichero mobileTest.ts. 

let myMobile2 = new Mobile("Galaxy 12", "Samsung", "M543902J", "blanco", 1000); 

let myMobile3 = new Mobile("iPhone 13", "Apple", "TU829107D", "azul", 1200); 

let myMobile4 = new Mobile("HTC One S", "HTC", "JWOQ4502I", "gris", 50); 

 
 

//Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres 

//objetos creados en el punto 2. 

let myMobiles = [myMobile2, myMobile3, myMobile4]; 

 
 

for (let mobile of myMobiles) { 

    mobile.allCharact(); 

    console.log(' ');    

} 