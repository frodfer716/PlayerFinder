import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { isEqual } from 'lodash';
import { Jugador } from 'src/app/models/jugador.model';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent {

  @Input()
  listaJugadores!: Jugador[];
  listaFavoritos!: Jugador[];

  constructor( private jugadoresService:JugadoresService, private loginService:LoginService, private router:Router ) { }

  ngOnInit(): void {
    if (!(window.location.href.split("/").includes("favoritos"))) {
      this.jugadoresService.obtenerFavoritos().subscribe(misFavoritos => {
        if (misFavoritos != undefined) {
          console.log(misFavoritos);
          this.listaFavoritos=Object.values(misFavoritos);
          this.jugadoresService.setFavoritos(this.listaFavoritos);
        }
      });
    }
  }

  eliminaJugador(indice:number) {
    if (this.esFavorito(indice)) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "ERROR",
        text: 'No puedes borrar un jugador que está en favoritos.',
        width: 400,
      })
    } else {
      this.jugadoresService.eliminarJugador(indice);
    }
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  estaEnFavoritos() {
    if (window.location.href.split("/").includes("favoritos")) {
      return true;
    } else {
      return false;
    }
  }

  esFavorito(indice:number) {
    return this.jugadoresService.esFavorito(indice);
  }

  agregarFavorito(indice:number) {
    this.jugadoresService.agregarFavoritos(indice);
    this.router.navigateByUrl("");
  }

  eliminarFavorito(indice:number) {
    let indiceFavorito = 0;
      for (let i = 0; i < this.listaFavoritos.length; i++) {
        let posibleFavorito = this.listaFavoritos[i];
        if (isEqual(posibleFavorito, this.jugadoresService.encontrarJugador(indice))) {
          indiceFavorito = i;
          break;
        }
      }
      this.jugadoresService.eliminarFavorito(indiceFavorito);
      this.router.navigateByUrl("");
  }

}
