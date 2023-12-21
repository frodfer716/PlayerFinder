import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorCustomComponent } from './components/error-custom/error-custom.component';
import { ActualizadoJugadorComponent } from './components/actualizado-jugador/actualizado-jugador.component';
import { LoginComponent } from './components/login/login.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoginGuardian } from './services/login-guardian';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listado/:refresh', component:HomeComponent},
  {path:'favoritos', component:FavoritosComponent, canActivate:[LoginGuardian]},
  {path:'login/:formType', component:LoginComponent},
  {path:'actualiza/:id', component:ActualizadoJugadorComponent},
  {path:'**', component:ErrorCustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
