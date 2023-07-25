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

    return(`The characteristics of the mobile ${this.name} are: \n Name: ${this.name} \n Trademark: ${this.trademark} \n Model: ${this.model} \n Color: ${this.color} \n Price: ${this.price}`) 
} 
} 