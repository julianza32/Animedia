import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  public peliculasEstreno = [
    {
      "nombre": "Godzilla vs Kong",
      "fechaDeEstreno": "20 Noviembre",
      "imagenC": "https://i.pinimg.com/originals/0e/bf/8d/0ebf8d713b883e18d07fad91b0ef095b.jpg",
      "sinopsis": "DescripciónGodzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch se embarca en una misión."
    },
    {
      "nombre": "Los Croods 2",
      "fechaDeEstreno": "22 Diciembre",
      "imagenC": "https://storage.googleapis.com/isnottv_cine/lv_seo_items/lv_2f22eb9a295b84ef4a6c1ac7ee027890_420.jpg",
      "sinopsis": "La pintoresca familia prehistórica de Los Croods vuelve a hacer de las suyas. Este divertido clan formado por la joven e inquieta Eep, su gruñón padre Grug, su comprensiva aunque despistada madre Ugga, además del friki Thunk y la bebé Sandi."

    },
    {
      "nombre": "Oswald",
      "fechaDeEstreno": "06 Marzo",
      "imagenC": "https://pics.filmaffinity.com/Onward-251117542-large.jpg",
      "sinopsis": "Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre."
    },
    {
      "nombre": "Scooby",
      "fechaDeEstreno": "16 Julio",
      "imagenC": "https://es.web.img3.acsta.net/pictures/20/06/17/13/39/2095384.jpg",
      "sinopsis": "Con cientos de casos resueltos y aventuras compartidas, Scooby y la pandilla se enfrentan al misterio más grande y desafiante de todos los tiempos: un complot para liberar al perro fantasma Cerberus en el mundo."
    },
    {
      "nombre": "Alma",
      "fechaDeEstreno": "17 Junio",
      "imagenC": "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/soul/38383694-1-esl-ES/soul.jpg",
      "sinopsis": "Un músico que ha perdido su pasión por la música es transportado fuera de su cuerpo y debe encontrar el camino de regreso con la ayuda de un alma infantil que aprende sobre sí misma."
    }];
  constructor() {

  }


  ngOnInit(): void {
    console.log(this.peliculasEstreno);
  }

}
