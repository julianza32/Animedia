import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { BoleteriaComponent } from './boleteria/boleteria.component';
import { CineCasaComponent } from './cine-casa/cine-casa.component';
import { ConfiteriaComponent } from './confiteria/confiteria.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { AdminPeliculasComponent } from './admin-peliculas/admin-peliculas.component';



@NgModule({
  declarations: [HomeComponent, CarteleraComponent, BoleteriaComponent, CineCasaComponent, ConfiteriaComponent, TarjetaComponent, LoginComponent, RegistroUsuarioComponent, AdminPeliculasComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
