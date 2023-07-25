import { Point } from "./point";

export class Triangle{
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(vertex1: Point, vertex2: Point, vertex3: Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

//Programa el método calculateLengthSides() : number[] que debe devolver un array de tres posiciones,
//cada una de las cuales debe ser la longitud de uno de los lados del triángulo. Usa el método calculateDistance de la clase Point.
public calculateLengthSides(): number[]{
    let lado1Length = this.vertex1.calculateDistance(this.vertex2);
    let lado2Length = this.vertex2.calculateDistance(this.vertex3);
    let lado3Length = this.vertex3.calculateDistance(this.vertex1);

    return [lado1Length, lado2Length, lado3Length];
}

}