import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";
import Swal from "sweetalert2";

@Injectable()
export class LoginService {

    token!: string;
    mail!: string;

    constructor( private router:Router, private cookies:CookieService ) { }

    login(email:string, password:string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.mail= email;
                        this.token = token;
                        this.cookies.set("token", token);
                        this.cookies.set("mail", email);
                        this.router.navigate(["/listado", "refresh"]);
                    }
                );
            },
            error=>Swal.fire({
                position: "top",
                icon: "warning",
                title: "ERROR",
                text: 'Correo o contraseña incorrecto.',
                width: 400,
              })
        );
    }

    register(credentials: {email:string, password:string}) {
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password). then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.mail= credentials.email;
                        this.token = token;
                        this.cookies.set("token", token);
                        this.cookies.set("mail", credentials.email);
                        this.router.navigate(["/listado", "refresh"]);
                    }
                );
            },
            error=>Swal.fire({
                position: "top",
                icon: "warning",
                title: "ERROR",
                text: 'Correo o contraseña incorrecto.',
                width: 400,
              })
        )
    }

    getIdToken() {
        return this.cookies.get("token");
    }

    getUser() {
        return this.cookies.get("mail");
    }

    estaLogueado() {
        return this.getIdToken();
    }

    logout() {
        firebase.auth().signOut().then(() => {
            this.token="";
            this.cookies.set("token", this.token);
            this.mail="";
            this.cookies.set("mail", this.mail);
            this.router.navigate(["/listado", "refresh"]);
        });
    }

}