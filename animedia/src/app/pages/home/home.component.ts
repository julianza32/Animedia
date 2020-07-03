import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  @ViewChild('intro')intro:ElementRef;

  public url;
  public peliculasEstreno = [];
  constructor(private peliculaService:PeliculasService, public pedido: PedidoService) {
    this.url = peliculaService.url;
  }


  ngOnInit(): void {
    this.buscarpelis();
    document.getElementById('menu').setAttribute('class','oculto');
    document.getElementById('footer').setAttribute('class','oculto');
    
    if(this.peliculaService.mostrarIntro)
    {
    let interval = window.setInterval(this.videoM, 10000);//esconde el video
    /*  clearInterval(interval); */
    //let interval2 = window.setInterval(this.visibleAnimedia, 8888);
    let interval3 = window.setInterval(this.apearAnimedia, 10000);
      /* document.getElementsByTagName('video')[0].play(); */
      this.peliculaService.mostrarIntro = false;
    }else{
      let interval = window.setInterval(this.videoM, 0);
      let interval3 = window.setInterval(this.apearAnimedia, 0);
    }
  }
  videoM() {
    
    /* document.getElementById('videoInicio').setAttribute('class','oculto'); */
    if(document.getElementById('intro')!=null)
    {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('intro').pause();
    }
   /*  document.getElementsByTagName('video')[0].pause(); */
    document.getElementById('menu').setAttribute('class','navbar navbar-expand-lg navbar-light text-white sticky-top fondoGradient ');
    document.getElementById('footer').setAttribute('class','page-footer font-small blue footer sticky-top fixed-buttom ');
  }

  visibleAnimedia() {
   
  }
  
  apearAnimedia() {
    if(document.getElementById('animedia') != null)
    {
    document.getElementById('animedia').setAttribute('class', 'animedia ');
    }
    
 /*    document.getElementById('animedia').style.transition = 'width 2s, height 2s, margin 2s';
    document.getElementById('animedia').style.width = '100%';
    document.getElementById('animedia').style.margin = '0'; */
    
  }
  buscarpelis()
  {
    this.peliculaService.listarPelis().subscribe(
      (response:any)=>{
        response.movies;
        
        for(let i=0;i<response.movies.length;i++)
        {
          this.peliculaService.obtenerPelicula(response.movies[i]._id).subscribe(
            (respuesta:any)=>{
              if(this.peliculasEstreno.length<6)
              {
                respuesta.movie.image=this.url+"getMovieImage/"+respuesta.movie.image;
                this.peliculasEstreno.push(respuesta.movie);
              }
            }
          );
        }
        
      }
    );
  }
  prueba() {
    var men=document.getElementById('menu');
    console.log(men);

  }
  
  
}
