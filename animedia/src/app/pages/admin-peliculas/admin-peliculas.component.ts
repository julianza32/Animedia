import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {Pelicula} from '../../model/peliculas';
import {PeliculasService} from  '../../services/peliculas.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
//import { Route } from '@angular/compiler/src/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {

  @ViewChild('imgPeli') img:ElementRef;
  @ViewChild('vidPeli') vid:ElementRef;

  public identidad:Usuario;

  public peliculaTrabajada: Pelicula;
  public url: String;

  public archivoSubirImg: File;
  public archivoSubirTrailer: File;

  public rutaImagenP;
  public rutaTrailer;
  public listaPeliculas:any;


  constructor(private peliculaService:PeliculasService,private _router:Router)
  {
    this.peliculaTrabajada = new Pelicula('','','','','','',[],'','','','','','');
    this.url = peliculaService.url;
    
  }

  ngOnInit(): void {
    this.ListarPeliculas();
  }

  ngAfterViewInit()
  {
    if(localStorage.getItem('sesion'))
    {
      this.identidad = JSON.parse(localStorage.getItem('sesion'));
      console.log(this.identidad.rol);
      if(this.identidad.rol == 'administrador' || this.identidad.rol == 'Administrador')
      {
        
      }else{
        this._router.navigate(['/home']);
      }
    }else{
      this._router.navigate(['/home']);
    }
  }

  ngDoCheck()
  {
    if(this.peliculaTrabajada.image)
    {
      this.img.nativeElement.src = this.url+'getMovieImage/'+this.peliculaTrabajada.image;
    }
    if(this.peliculaTrabajada.trailer)
    {
      this.vid.nativeElement.src = this.url+'getMovieTrailer/'+this.peliculaTrabajada.trailer;
    }
    
  }
/* -----------------------------Funciones ------------------------------ */
  //procesar formulario
  ProcesarFormulario(){
    
    if(!this.peliculaTrabajada._id)//validar si el formulario tiene un id
    {
      //agregar
      this.peliculaService.registrarPeli(this.peliculaTrabajada).subscribe(
        (response:any)=>{
          let newPelicula=response.movie;
          console.log(newPelicula);
          if(!newPelicula._id)
          {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al registrar pelicula',
            })
            //alert("Error al registrar pelicula");

          }else{
            //reasignacion de pelicula despues de ser grabada
          this.peliculaTrabajada = newPelicula;
          this.subirarchivos(newPelicula._id);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se ha creado correctamente ${newPelicula.title}`,
            showConfirmButton: false,
            timer: 1500
          })
         // alert(`se ha creado correctamente ${newPelicula.title}`);
          }
        });
    
    }else{
      //modificar
      this.peliculaService.actualizarPeli(this.peliculaTrabajada,this.peliculaTrabajada._id).subscribe(
        (response:any)=>{
          let modPelicula=response.movie;
          if(!modPelicula._id)
          {

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al modificar pelicula',
            })
           // alert("Error al modificar la pelicula");

          }else{
          this.peliculaTrabajada = modPelicula;
          this.subirarchivos(modPelicula._id);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se ha modificado correctamente ${modPelicula.title}`,
            showConfirmButton: false,
            timer: 1500
          })
          //alert(`se ha modificado correctamente ${modPelicula.title}`);
          }
        });

    }
      
        this.ListarPeliculas();
      
  }

  subirarchivos(id)
  {
      if(this.archivoSubirImg)
          {
              this.peliculaService.cargarImagenPeli(this.archivoSubirImg,id).subscribe(
                (resImg:any)=>{
                  this.peliculaTrabajada.image = resImg.imagen;
                  this.img.nativeElement.src = this.url+'getMovieImage/'+this.peliculaTrabajada.image;
              });
          }

          if(this.archivoSubirTrailer)
          {
            this.peliculaService.cargarTrailer(this.archivoSubirTrailer,id).subscribe(
              (resVid:any)=>{
                this.peliculaTrabajada.trailer = resVid.video;

                this.vid.nativeElement.src = this.url+'getMovieTrailer/'+this.peliculaTrabajada.trailer;
            });
          }
          
  }
  //agregar actor
  agregarActor(){
    
  }
// función dubir archivo de imagen de la película
  subirArchivoImg(file:any){
    this.archivoSubirImg = <File>file.target.files[0];
  }

  //funcion subir archivo del trailer de la película
  subirArchivoTrailer(file:any){
    this.archivoSubirTrailer = <File>file.target.files[0];
  }

  deleteId(){
    this.peliculaTrabajada = new Pelicula('','','','','','',[],'','','','','','');
    this.img.nativeElement.src='';
    this.vid.nativeElement.src='';
  }
  
  //funcion de listar peliculas
  ListarPeliculas(){
    this.peliculaService.listarPelis().subscribe(
      (response:any)=>{
        this.listaPeliculas = response.movies;
        console.log(this.listaPeliculas);
      }
    );
  }
  //función de buscar películas
  buscarPelicula(find){
    let parametro = {busqueda:find};
    this.peliculaService.filtrarPeli(parametro).subscribe(
      (respuesta:any)=>
      {
        console.log(respuesta);
        this.listaPeliculas = respuesta.movie;
      }
    );
  }
//actualizar la pelicula
  modPelicula(id){
    this.peliculaService.obtenerPelicula(id).subscribe(
      (response:any)=>{
        this.peliculaTrabajada = response.movie;
      }
      );
  }
  //eliminar pelicula
  delPelicula(id){
    this.peliculaService.eliminarPeli(id).subscribe(
      (response:any)=>{
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })
        //alert(response.message);
      }
      );
      this.deleteId();
      this.ListarPeliculas();
  }

  
}
