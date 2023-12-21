import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private loginService:LoginService ) { }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logout() {
    this.loginService.logout();
  }

  pageFinder() {
    if (window.location.href.split("/").includes("login")) {
      return true;
    } else {
      return false;
    }
  }

}
