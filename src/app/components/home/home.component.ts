import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador.model';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Lista de Jugadores';
  refresh: string = "";
  jugadores:Jugador[] = [];
  listaFavoritos:Jugador[] = [];

  constructor( private router: Router, private route:ActivatedRoute, private jugadoresService:JugadoresService, private loginService:LoginService ) { }

  ngOnInit(): void {
    if (this.estaLogueado()) {
      console.log(this.loginService.getUser());
    }

    this.jugadoresService.obtenerjugadores().subscribe(misJugadores => {
      console.log(misJugadores);
      this.jugadores=Object.values(misJugadores);
      this.jugadoresService.setjugadores(this.jugadores);
    });
    
    this.refresh = this.route.snapshot.params['refresh'];
    if (this.refresh == "refresh") {
      this.router.navigateByUrl("");
    }
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  abrirAgrega(id1:string, id2:string) {
    let estilo1 = document.getElementById(id1);
    let estilo2 = document.getElementById(id2);

    if (estilo1 !== null) {
      if (estilo1.style.display === "none") {
          estilo1.style.display = "block";
      } else {
          estilo1.style.display = "none";
      }
    }

    if (estilo2 !== null) {
      if (estilo2.style.width === "fit-content") {
          estilo2.style.width = "30%";
      } else {
          estilo2.style.width = "fit-content";
      }
    }
  }

}
