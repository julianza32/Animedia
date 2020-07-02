import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { BoleteriaComponent } from './pages/boleteria/boleteria.component';
import { CineCasaComponent } from './pages/cine-casa/cine-casa.component';
import { ConfiteriaComponent } from './pages/confiteria/confiteria.component';
import { TarjetaComponent } from './pages/tarjeta/tarjeta.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import {PagosComponent} from './pages/pagos/pagos.component';
import { ReproductorComponent } from './pages/reproductor/reproductor.component';


const routes: Routes = [{path:'home', component:HomeComponent}, 
                        {path:'cartelera',component:CarteleraComponent},
                        {path:'boleteria',component:BoleteriaComponent},
                        {path:'cineCasa',component:CineCasaComponent},
                        {path:'confiteria',component:ConfiteriaComponent},
                        {path:'tarjeta',component:TarjetaComponent},
                        {path:'login',component:LoginComponent},
                        {path:'registroUsuario',component:RegistroUsuarioComponent},
                        {path:'adminPelis',component:AdminPeliculasComponent},
                        {path:'perfil',component:PerfilUsuarioComponent},
                        {path:'pagos', component: PagosComponent},
                        {path:'reproductor', component: ReproductorComponent},
                        {path:'**', pathMatch:'full', redirectTo:'home'}

                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
