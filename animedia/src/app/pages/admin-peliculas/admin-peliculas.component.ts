import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../model/peliculas';
import {PeliculasService} from  '../../services/peliculas.service';
import {Router, RouterPreloader} from '@angular/router';
import {Usuario} from '../../model/usuario';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {
  public peliculaTrabajada: Pelicula;
  public url: String;

  public archivoSubirImg: File;
  public archivoSubirTrailer: File;

  public rutaImagenP;
  public rutaTrailer;
  public listaPeliculas:any;
  

  constructor(private peliculaService:PeliculasService, private _router: Router)
   {

    }

  ngOnInit(): void {
  }

/* -----------------------------Funciones ------------------------------ */
  //procesar formulario
  ProcesarFormulario(){

  }
// función dubir archivo de imagen de la película
  subirArchivoImg(){

  }

  //funcion subir archivo del trailer de la película
  subirArchivoTrailer(){
    
  }

  deleteId(){

  }
  //funcion de listar peliculas
  ListarPeliculas(){

  }
  //función de buscar películas
  buscarPelicula(){

  }
//actualizar la pelicula
  modPelicula(id){

  }
  //eliminar pelicula
  delPelicula(id){

  }
}
