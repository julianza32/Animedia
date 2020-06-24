import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms'
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
import { from } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
// Sujeto al cambio por posibles errores
import { PeliculasService } from '../services/peliculas.service';




@NgModule({
  declarations: [HomeComponent, CarteleraComponent, BoleteriaComponent, CineCasaComponent, ConfiteriaComponent, TarjetaComponent, LoginComponent, RegistroUsuarioComponent, AdminPeliculasComponent],
  imports: [
    CommonModule,FormsModule
  ],providers:[
    UsuarioService,
    PeliculasService //Sujeto a cambio
  ]
})
export class PagesModule { }
