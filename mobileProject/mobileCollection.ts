import { Mobile } from "./mobile";

export class MobileCollection{
    private mobiles: Mobile[];
    private totalPrice: number

    constructor(mobiles: Mobile[]){
        this.mobiles = mobiles;
        this.totalPrice = 0;
        //this.totalPriceCalculation();
    }



//setters y getters
public setMobiles(mobiles:Mobile[]): void{ 
    this.mobiles = mobiles
    //this.totalPriceCalculation();
    } 

public getMobiles(): Mobile[]{ 
    return this.mobiles 
    } 

public getTotalPrice(): number{
    return this.totalPrice
}

//Crear un método privado denominado totalPriceCalculation sin parámetros de entrada,
//que te calcule el precio total de la colección.


//Crear un nuevo método denominado printCollection que recorra todos los objetos del
//atributo mobile y los muestre por consola

}