import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  public url;
  public peliculasEstreno = [];
  constructor(private peliculaService:PeliculasService, public pedido: PedidoService) {
    this.url = peliculaService.url;
  }


  ngOnInit(): void {
    this.buscarpelis();
    document.getElementById('menu').setAttribute('class','oculto');
    document.getElementById('footer').setAttribute('class','oculto');
    
    let interval = window.setInterval(this.videoM, 10000);
    /*  clearInterval(interval); */
    let interval2 = window.setInterval(this.visibleAnimedia, 8888);
    let interval3 = window.setInterval(this.apearAnimedia, 9999);
      /* document.getElementsByTagName('video')[0].play(); */

  }
  videoM() {
    
    /* document.getElementById('videoInicio').setAttribute('class','oculto'); */
    document.getElementById('intro').style.display = 'none';
   /*  document.getElementsByTagName('video')[0].pause(); */
    document.getElementById('menu').setAttribute('class','navbar navbar-expand-lg navbar-light text-white sticky-top fondoGradient ');
    document.getElementById('footer').setAttribute('class','page-footer font-small blue footer sticky-top fixed-buttom ');
  }

  visibleAnimedia() {
   
  }
  
  apearAnimedia() {
    document.getElementById('animedia').setAttribute('class', 'animedia ');
    
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
