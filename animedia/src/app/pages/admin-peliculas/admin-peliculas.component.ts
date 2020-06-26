import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {Pelicula} from '../../model/peliculas';
import {PeliculasService} from  '../../services/peliculas.service';
//import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {

  @ViewChild('imgPeli') img:ElementRef;
  @ViewChild('vidPeli') vid:ElementRef;

  public peliculaTrabajada: Pelicula;
  public url: String;

  public archivoSubirImg: File;
  public archivoSubirTrailer: File;

  public rutaImagenP;
  public rutaTrailer;
  public listaPeliculas:any;


  constructor(private peliculaService:PeliculasService)
  {
    this.peliculaTrabajada = new Pelicula('','','','','','',[],'','','','','','');
    this.url = peliculaService.url;
    
  }

  ngOnInit(): void {
    this.ListarPeliculas();
  }

  ngAfterViewInit()
  {
    
  }

  ngDoCheck()
  {
    if(this.peliculaTrabajada.image)
    {
      this.img.nativeElement.src = this.url+'getMovieImage/'+this.peliculaTrabajada.image;
    }
    if(this.peliculaTrabajada.trailer)
    {
      this.vid.nativeElement.src = this.url+'uploadMovieTrailer/'+this.peliculaTrabajada.trailer;
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
            alert("Error al registrar pelicula");

          }else{
            //reasignacion de pelicula despues de ser grabada
          this.peliculaTrabajada = newPelicula;
          alert(`se ha creado correctamente ${newPelicula.title}`);
          }
        });
    
    }else{
      //modificar
      this.peliculaService.actualizarPeli(this.peliculaTrabajada,this.peliculaTrabajada._id).subscribe(
        (response:any)=>{
          let modPelicula=response.movie;
          if(!modPelicula._id)
          {
            alert("Error al modificar la pelicula");

          }else{
          this.peliculaTrabajada = modPelicula;
          alert(`se ha modificado correctamente ${modPelicula.title}`);
          }
        });

    }
      
    if(this.peliculaTrabajada._id)
        {
          if(this.archivoSubirImg)
              {
                  this.peliculaService.cargarImagenPeli(this.archivoSubirImg,this.peliculaTrabajada._id).subscribe(
                    (resImg:any)=>{
                      this.peliculaTrabajada.image = resImg.image;
                      this.img.nativeElement.src = this.url+'getMovieImage/'+this.peliculaTrabajada.image;
                  });
              }

              if(this.archivoSubirTrailer)
              {
                this.peliculaService.cargarTrailer(this.archivoSubirTrailer,this.peliculaTrabajada._id).subscribe(
                  (resVid:any)=>{
                    this.peliculaTrabajada.trailer = resVid.video;

                    this.vid.nativeElement.src = this.url+'uploadMovieTrailer/'+this.peliculaTrabajada.trailer;
                });
              }
              
        }
        this.ListarPeliculas();
      
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
  buscarPelicula(){

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
        
        alert(response.message);
      }
      );
      this.ListarPeliculas();
  }

  
}
