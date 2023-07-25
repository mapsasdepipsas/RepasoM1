export class Point{
    private x: number 
    private y: number

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }


//setters y getters
//x
public setX(x: number): void{
    this.x = x
}
public getX(): number{
    return this.x
}

//y
public setY(y: number): void{
    this.y = y
}
public getY(): number{
    return this.y
}

//Crear un método toString() que convierta a texto las coordenadas del punto.
//Debe devolver: “(x,y)”
public toString(): string{
    return(`"${this.x.toString()}", "${this.y.toString()}"`)
}

//Crear un método denominado distanceToOrigin():number que devuelva la distancia del
//punto al origen de coordenadas (0,0).
public distanceToOrigin(): number{
    return Math.sqrt(this.x * this.y + this.y * this.y);
}

//Crear un método denominado calculateDistance(anotherPoint:Point):number, que
//devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
//instancia de Punto que se recibe como parámetro denominada anotherPoint.
public calculateDistance(anotherPoint: Point): number{
    let xDist = anotherPoint.x - this.x;
    let yDist = anotherPoint.y - this.y;
    return Math.sqrt(xDist * xDist + yDist * yDist);
}

//Programa un método denominado calculateQuadrant():number que devuelva el
//cuadrante en el que se encuentra el punto.
public calculateQuadrant(): number{
    if(this.x == 0 || this.y == 0){
        return 0;
    } else if (this.x > 0 && this.y > 0) {
        return 1;
    } else if (this.x < 0 && this.y > 0){
        return 2;
    } else if(this.x < 0 && this.y < 0){
        return 3;
    } else{
        return 4;
    }
}

//Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
//como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
//de dicho array que esté más cercano al punto actual. Utilizar para ello el método calculateDistance.
public calculateNearest(points: Point[]): Point{
    let puntoMasCercano = points[0];
    let minDistancia = this.calculateDistance(points[0]);
    for (let index = 1; index < points.length; index++) {
        let distancia = this.calculateDistance(points[index]);
        if(distancia < minDistancia){
            minDistancia = distancia;
            puntoMasCercano = points[index];
        }
    }
    return puntoMasCercano;
}
}