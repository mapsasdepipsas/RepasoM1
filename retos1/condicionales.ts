//2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
//La fecha de nacimiento vendrá indicada por dos números: dia y mes.
//La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)
function zodiac(day: number, month: string): string {
    if (month == "Enero" && day >= 20 || month == "Febrero" && day <= 18) {
        return "Acuario";
    }
    if (month == "Febrero" && day >= 19 || month == "Marzo" && day <= 20) {
        return "Piscis";
    }
    if (month == "Marzo" && day >= 21 || month == "Abril" && day <= 19) {
        return "Aries";
    }
    if (month == "Abril" && day >= 20 || month == "Mayo" && day <= 20) {
        return "Tauro";
    }
    if (month == "Mayo" && day >= 21 || month == "Junio" && day <= 20) {
        return "Géminis";
    }
    if (month == "Junio" && day >= 21 || month == "Julio" && day <= 22) {
        return "Cáncer";
    }
    if (month == "Julio" && day >= 23 || month == "Agosto" && day <= 22) {
        return "Leo";
    }
    if (month == "Agosto" && day >= 23 || month == "Septiembre" && day <= 22) {
        return "Virgo";
    }
    if (month == "Septiembre" && day >= 23 || month == "Octubre" && day <= 22) {
        return "Libra";
    }
    if (month == "Octubre" && day >= 23 || month == "Noviembre" && day <= 21) {
        return "Escorpio";
    }
    if (month == "Noviembre" && day >= 22 || month == "Diciembre" && day <= 21) {
        return "Sagitario";
    }
    if (month == "Diciembre" && day >= 22 || month == "Enero" && day <= 19) {
        return "Capricornio";
    }
}

let day: number = 9;
let month: string = "Agosto";
let signozodiaco: string = zodiac(day, month);
console.log(signozodiaco);


//3. Realizar un procedimiento que dado el nombre de un país te imprima en qué continente
//estás. (Max 5 países por continente).
//La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)
function continent(country: string): string {
    let europa: string[] = ["España", "Francia", "Alemania"];
    if (europa.includes(country)){
        return "Europa";
    }
    let asia: string[] = ["India", "Japón", "China"];
    if (asia.includes(country)){
        return "Asia";
    }
    let america: string[] = ["Canada", "Mexico", "Colombia"];
    if (america.includes(country)) {
        return "America";
    }
    let africa: string[] = ["Senegal", "Nigeria", "Madagascar"];
    if (africa.includes(country)) {
        return "Africa";
    }
    let oceania: string[] = ["Australia", "Nueva Zelanda", "Polinesia Francesa"];
    if (oceania.includes(country)) {
        return "Oceania";
    }
}

let country: string = "Polinesia Francesa";
let continente: string = continent(country);
console.log(continente);


//4.Realizar una función que te imprima por consola el siguiente mensaje:
//- “El numero es par”, si el numero introducido como parámetro de entrada es par
//- “El numero es impar”, si el numero introducido como parámetro de entrada es impar
//5.La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
function isEven(number:number): string {
    if (number % 2 == 0) {
        return "El número es par";
    } else{
        return "El número es impar";
    }
}

let number: number = 97;
let elnumero: string = isEven(number);
console.log(elnumero);

export {isEven};