import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { Jugador } from "../models/jugador.model";

@Injectable()
export class DataService {

    user = this.loginService.getUser().split(".").join();
    conn = "https://playerfinder-5c924-default-rtdb.europe-west1.firebasedatabase.app/datos";
    connFav = "https://playerfinder-5c924-default-rtdb.europe-west1.firebasedatabase.app/" + this.user + "-fav";
    connUsers = "https://playerfinder-5c924-default-rtdb.europe-west1.firebasedatabase.app/users";

    constructor( private httpClient:HttpClient, private loginService:LoginService ) { }

    cargarJugadores() {
        const token = this.loginService.getIdToken();
        const url = this.conn + ".json?auth=" + token;
        return this.httpClient.get(url);
    }

    guardarJugadores(jugadores:Jugador[]) {
        const token = this.loginService.getIdToken();
        const url = this.conn + ".json?auth=" + token;
        this.httpClient.put(url, jugadores).subscribe(
            response=>console.log("Se han guardado los jugadores:" + response),
            error=>console.log("ERROR: " + error)
        );
    }

    actualizarJugadores(indice:number, jugador:Jugador) {
        const token = this.loginService.getIdToken();
        const url = this.conn + "/" + indice + ".json?auth=" + token;
        
        this.httpClient.put(url, jugador).subscribe(
            response=>console.log("Se ha actualizado el jugador:" + response),
            error=>console.log("ERROR: " + error)
        );
    }

    eliminarJugadores(indice:number) {
        const token = this.loginService.getIdToken();
        const url = this.conn + "/" + indice + ".json?auth=" + token;

        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el jugador:" + response),
            error=>console.log("ERROR: " + error)
        );
    }

    cargarFavoritos() {
        const token = this.loginService.getIdToken();
        const url = this.connFav + ".json?auth=" + token;
        return this.httpClient.get(url);
    }

    guardarFavoritos(favoritos:Jugador[]) {
        const token = this.loginService.getIdToken();
        const url = this.connFav + ".json?auth=" + token;
        this.httpClient.put(url, favoritos).subscribe(
            response=>console.log("Se han guardado los favoritos:" + response),
            error=>console.log("ERROR: " + error)
        );
    }

    actualizarFavoritos(indice:number, jugador:Jugador) {
        const token = this.loginService.getIdToken();
        const url = this.connFav + "/" + indice + ".json?auth=" + token;
        
        this.httpClient.put(url, jugador).subscribe(
            response=>console.log("Se ha actualizado el favorito:" + response),
            error=>console.log("ERROR: " + error)
        );
    }

    eliminarFavoritos(indice:number) {
        const token = this.loginService.getIdToken();
        const url = this.connFav + "/" + indice + ".json?auth=" + token;

        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el favorito:" + response),
            error=>console.log("ERROR: " + error)
        );
    }

}