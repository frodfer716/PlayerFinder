import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isEqual } from 'lodash';
import { Jugador } from 'src/app/models/jugador.model';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-actualizado-jugador',
  templateUrl: './actualizado-jugador.component.html',
  styleUrls: ['./actualizado-jugador.component.css']
})
export class ActualizadoJugadorComponent {

  title = 'Edición de jugador - ';
  indice!: number;
  accion!: number;
  jugadores:Jugador[] = [];
  
  listaFavoritos!: Jugador[];

  constructor( private router: Router, private route:ActivatedRoute, private jugadoresService:JugadoresService ) { }

  ngOnInit(): void {
    this.jugadores = this.jugadoresService.jugadores;
    this.indice = this.route.snapshot.params['id'];

    let jugador:Jugador = this.jugadoresService.encontrarJugador(this.indice);
    this.cuadroNombre = jugador.nombre;
    this.cuadroEdad = jugador.edad;
    this.cuadroPosicion = jugador.posicion;
    this.cuadroEquipo = jugador.equipo;
    this.cuadroValor = jugador.valor;
    
    this.title = this.title + jugador.nombre;

    this.jugadoresService.obtenerFavoritos().subscribe(misFavoritos => {
      if (misFavoritos != undefined) {
        console.log(misFavoritos);
        this.listaFavoritos=Object.values(misFavoritos);
        this.jugadoresService.setFavoritos(this.listaFavoritos);
      }
    });
  }

  cuadroNombre:string = "";
  cuadroEdad:number = 0;
  cuadroPosicion:string = "";
  cuadroEquipo:string = "";
  cuadroValor:number = 0;

  actualizaEmpleado() {
    let miEmpleado = new Jugador(this.cuadroNombre, this.cuadroEdad, this.cuadroPosicion, this.cuadroEquipo, this.cuadroValor);
    
    if (this.listaFavoritos != undefined) {
      let indiceFavorito = 0;
      for (let i = 0; i < this.listaFavoritos.length; i++) {
        let posibleFavorito = this.listaFavoritos[i];
        if (isEqual(posibleFavorito, this.jugadoresService.encontrarJugador(this.indice))) {
          indiceFavorito = i;
          break;
        }
      }
      this.jugadoresService.actualizarFavorito(indiceFavorito, miEmpleado);
    }
    
    this.jugadoresService.actualizarJugador(this.indice, miEmpleado);

    this.router.navigate(["/listado", "refresh"]);
  }

}
