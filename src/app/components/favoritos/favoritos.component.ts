import { Component } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.model';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

  title = 'Jugadores favoritos';
  listaFavoritos:Jugador[] = [];

  constructor( private jugadoresService:JugadoresService, private loginService:LoginService ) { }

  ngOnInit(): void {
    console.log(this.loginService.getUser());
    
    this.jugadoresService.obtenerFavoritos().subscribe(misFavoritos => {
      if (misFavoritos != undefined) {
        console.log(misFavoritos);
        this.listaFavoritos=Object.values(misFavoritos);
        this.jugadoresService.setFavoritos(this.listaFavoritos);
      }
    });
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

}
