import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador.model';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-agregado-jugador',
  templateUrl: './agregado-jugador.component.html',
  styleUrls: ['./agregado-jugador.component.css']
})
export class AgregadoJugadorComponent {

  constructor( private jugadoresService:JugadoresService, private router:Router ) { }

  cuadroNombre:string = "";
  cuadroEdad:number = 0;
  cuadroPosicion:string = "";
  cuadroEquipo:string = "";
  cuadroValor:number = 0;

  agregarEmpleado() {
    let nuevoJugador = new Jugador(this.cuadroNombre, this.cuadroEdad, this.cuadroPosicion, this.cuadroEquipo, this.cuadroValor);
    this.jugadoresService.agregarJugador(nuevoJugador);
    this.router.navigateByUrl("");
  }

}
