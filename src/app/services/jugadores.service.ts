import { Injectable } from "@angular/core";
import { Jugador } from "../models/jugador.model";
import { DataService } from "./data.service";
import { isEqual } from "lodash";

@Injectable()
export class JugadoresService {

  jugadores:Jugador[] = [];
  favoritos:Jugador[] = [];

  constructor( private dataService:DataService ) { }

  setjugadores(misJugadores:Jugador[]) {
    this.jugadores=misJugadores;
  }

  obtenerjugadores() {
    return this.dataService.cargarJugadores();
  }

  encontrarJugador(indice:number) {
    let jugador:Jugador = this.jugadores[indice];
    return jugador;
  }

  agregarJugador(jugador:Jugador) {
    this.jugadores.push(jugador);
    this.dataService.guardarJugadores(this.jugadores);
  }

  actualizarJugador(indice:number, jugador:Jugador) {
    let jugadorModificado = this.jugadores[indice];
    jugadorModificado.nombre = jugador.nombre;
    jugadorModificado.edad = jugador.edad;

    this.dataService.actualizarJugadores(indice, jugador);
  }

  eliminarJugador(indice:number) {
    this.jugadores.splice(indice, 1);

    this.dataService.eliminarJugadores(indice);
    this.dataService.guardarJugadores(this.jugadores);
  }

  esFavorito(indice:number) {
    if (window.location.href.split("/").includes("favoritos")) {
      if (this.favoritos.includes(this.encontrarFavoritos(indice))) {
        return true;
      } else {
        return false;
      }
    } else {
      let res = false;
      for (let i = 0; i < this.favoritos.length; i++) {
        let posibleFavorito = this.favoritos[i];
        if (isEqual(posibleFavorito, this.encontrarJugador(indice))) {
          res = true;
          break;
        }
      }
      return res;
    }
  }

  setFavoritos(misFavoritos:Jugador[]) {
    this.favoritos=misFavoritos;
  }

  obtenerFavoritos() {
    return this.dataService.cargarFavoritos();
  }

  encontrarFavoritos(indice:number) {
    let jugador:Jugador = this.favoritos[indice];
    return jugador;
  }

  agregarFavoritos(indice:number) {
    let jugadorFavorito = this.encontrarJugador(indice);
    this.favoritos.push(jugadorFavorito);
    this.dataService.guardarFavoritos(this.favoritos);
  }

  actualizarFavorito(indice:number, favorito:Jugador) {
    let favoritoModificado = this.favoritos[indice];
    favoritoModificado.nombre = favorito.nombre;
    favoritoModificado.edad = favorito.edad;

    this.dataService.actualizarFavoritos(indice, favorito);
  }

  eliminarFavorito(indice:number) {
    console.log("Eliminando favorito " + this.favoritos[indice].nombre);
    this.favoritos.splice(indice, 1);

    this.dataService.eliminarFavoritos(indice);
    this.dataService.guardarFavoritos(this.favoritos);
  }

}