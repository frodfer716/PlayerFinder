export class Jugador {

    constructor(nombre:string, edad:number, posicion:string, equipo:string, valor:number) {
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
        this.equipo = equipo;
        this.valor = valor;
    }

    nombre:string = "";
    edad:number = 0;
    posicion:string = "";
    equipo:string = "";
    valor:number = 0;
    
}