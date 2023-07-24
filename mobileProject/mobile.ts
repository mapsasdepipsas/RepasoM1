export class Mobile{ 

    private name: string 

    private trademark: string 

    private model: string 

    private color: string 

    private price: number 

 
 

    constructor(name: string, trademark: string, model: string, color: string, price: number){ 

        this.name = name; 

        this.trademark = trademark; 

        this.model = model; 

        this.color = color; 

        this.price = price; 

    } 

 
 
 

//Metodos Públicos: 

//Crear los métodos setters y getters para todos los atributos de la clase. 

 
 

//name 

public setName(name:string): void{ 

    this.name = name 

    } 

 
 

public getName(): string{ 

    return this.name 

    } 

 
 

//trademark 

public setTrademark(trademark:string): void{ 

    this.trademark = trademark 

    } 

public getTrademark(): string{ 

    return this.trademark 

    } 

 
 

//model 

public setModel(model:string): void{ 

    this.model = model 

    } 

public getModel(): string{ 

    return this.model 

    } 

 
 

//color 

public setColor(color:string): void{ 

    this.color = color 

    } 

public getColor(): string{ 

    return this.color 

    } 

 
 

//price 

public setPrice(price:number): void{ 

    this.price = price 

    } 

public getPrice(): number{ 

    return this.price 

    } 

 
 

//Crear un nuevo método que imprima por consola todas las características de la clase. 

public allCharact(){ 

    console.log(`The characteristics of the mobile ${this.name} are: \n`) 

    console.log(`Name: ${this.name} \n`)  

    console.log(`Trademark: ${this.trademark} \n`)  

    console.log(`Model: ${this.model} \n`)  

    console.log(`Color: ${this.color} \n`)  

    console.log(`Price: ${this.price}`) 

} 

} 