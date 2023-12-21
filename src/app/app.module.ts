import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ErrorCustomComponent } from './components/error-custom/error-custom.component';
import { AgregadoJugadorComponent } from './components/agregado-jugador/agregado-jugador.component';
import { ListadoJugadoresComponent } from './components/listado-jugadores/listado-jugadores.component';
import { JugadoresService } from './services/jugadores.service';
import { LoginService } from './services/login.service';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { ActualizadoJugadorComponent } from './components/actualizado-jugador/actualizado-jugador.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoginGuardian } from './services/login-guardian';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ErrorCustomComponent,
    ListadoJugadoresComponent,
    AgregadoJugadorComponent,
    LoginComponent,
    ActualizadoJugadorComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JugadoresService,
    LoginService,
    DataService,
    JugadoresService,
    CookieService,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
