import { Component, OnInit, ViewChild, ElementRef, Renderer2,AfterViewInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'app-cine-casa',
  templateUrl: './cine-casa.component.html',
  styleUrls: ['./cine-casa.component.css']
})
export class CineCasaComponent implements OnInit {
  @ViewChild('imagenP') imagenP: ElementRef;
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('anio') anio: ElementRef;
  @ViewChild('sinopsis') sinopsis: ElementRef;
  @ViewChild('video') video: ElementRef;


  public peliculas = [{
    "nombre": "Las golondrinas de Kabul",
    "sinopsis": "Ambientada en el Kabul de 1998, esta película nos traslada a las ruinas que han dejado los Talibanes, y lo hace a través de la mirada de dos adolescentes enamorados. Incluso rodeados de violencia, el amor es posible. Cuando una decisión desafortunada rompa el equilibrio entre ambos y su entorno, el drama social sacará la crudeza de esta película animada de producción francesa dirigida por Zabou Breitman y Eléa Gobbé-Mévellec.",
    "anio": "2019",
    "image": "../../../assets/imagenes/kabul.jpg",
    "trailer": "../../../assets/trailers/LasgolondrinasdeKabul.mp4"
  }, {
    "nombre": "Buñuel en el laberinto de las tortugas' ",
    "sinopsis": "Ambientada en la década de 1930, el espectador adulto y cinéfilo disfrutará como un niño de esta aventura que se introduce en la Historia con personajes como Buñuel y Dalí. Pero los niños y niñas tendrán que seguir descubriendo estas dos grandes figuras de la historia del arte para disfrutar la propuesta del director Salvador Simó.",
    "anio": "2019",
    "image": "../../../assets/imagenes/Buñuel.jpg",
    "trailer": "../../../assets/trailers/Buñuelenellaberintodelastortugas.mp4"
  }, {
    "nombre": "La tortuga roja",
    "sinopsis": "Aunque inofensivo, el primer largometraje del belga Michael Dudok de Wit no es para nada una película infantil aunque, insistimos, cada niño es un mundo y siempre puede haber excepciones. Aunque sus imágenes promocionales puedan invitar a pensar lo contrario, 'La tortuga roja' es una reflexión vital demasiado profunda para determinadas edades. Además, el hecho de que no tenga diálogos puede provocar momentos angustiosos para unos papás inmersos en la belleza poética de la cinta y unos niños que no logran conectar con ella.",
    "anio": "2016",
    "image": "../../../assets/imagenes/toruga.jpg",
    "trailer": "../../../assets/trailers/Latortugaroja.mp4"
  }, {
    "nombre": "Beavis and Butt-Head do America",
    "sinopsis": "Unos adolescentes ineptos investigan el robo de su televisión y son secuestrados por unos distribuidores de armas",
    "anio": "1996",
    "image": "../../../assets/imagenes/america.jpg",
    "trailer": "../../../assets/trailers/BeavisandButtheadDoAmerica.mp4"
  }, {
    "nombre": "BoJack especial de navidad",
    "sinopsis": "Es Navidad y BoJack no quiere saber nada del tema, hasta que aparece Todd con un bastón de caramelo gigante y un antiguo episodio navideño de 'Retozando'",
    "anio": "2014",
    "image": "../../../assets/imagenes/jorse.jpg",
    "trailer": "../../../assets/trailers/Latortugaroja.mp4"
  },{
  "nombre": "Las golondrinas de Kabul",
  "sinopsis": "Ambientada en el Kabul de 1998, esta película nos traslada a las ruinas que han dejado los Talibanes, y lo hace a través de la mirada de dos adolescentes enamorados. Incluso rodeados de violencia, el amor es posible. Cuando una decisión desafortunada rompa el equilibrio entre ambos y su entorno, el drama social sacará la crudeza de esta película animada de producción francesa dirigida por Zabou Breitman y Eléa Gobbé-Mévellec.",
  "anio": "2019",
  "image": "../../../assets/imagenes/kabul.jpg",
  "trailer": "../../../assets/trailers/LasgolondrinasdeKabul.mp4"
}, {
  "nombre": "Buñuel en el laberinto de las tortugas' ",
  "sinopsis": "Ambientada en la década de 1930, el espectador adulto y cinéfilo disfrutará como un niño de esta aventura que se introduce en la Historia con personajes como Buñuel y Dalí. Pero los niños y niñas tendrán que seguir descubriendo estas dos grandes figuras de la historia del arte para disfrutar la propuesta del director Salvador Simó.",
  "anio": "2019",
  "image": "../../../assets/imagenes/Buñuel.jpg",
  "trailer": "../../../assets/trailers/Buñuelenellaberintodelastortugas.mp4"
}, {
  "nombre": "La tortuga roja",
  "sinopsis": "Aunque inofensivo, el primer largometraje del belga Michael Dudok de Wit no es para nada una película infantil aunque, insistimos, cada niño es un mundo y siempre puede haber excepciones. Aunque sus imágenes promocionales puedan invitar a pensar lo contrario, 'La tortuga roja' es una reflexión vital demasiado profunda para determinadas edades. Además, el hecho de que no tenga diálogos puede provocar momentos angustiosos para unos papás inmersos en la belleza poética de la cinta y unos niños que no logran conectar con ella.",
  "anio": "2016",
  "image": "../../../assets/imagenes/toruga.jpg",
  "trailer": "../../../assets/trailers/Latortugaroja.mp4"
}, {
  "nombre": "Beavis and Butt-Head do America",
  "sinopsis": "Unos adolescentes ineptos investigan el robo de su televisión y son secuestrados por unos distribuidores de armas",
  "anio": "1996",
  "image": "../../../assets/imagenes/america.jpg",
  "trailer": "../../../assets/trailers/BeavisandButtheadDoAmerica.mp4"
},{
  "nombre": "Las golondrinas de Kabul",
  "sinopsis": "Ambientada en el Kabul de 1998, esta película nos traslada a las ruinas que han dejado los Talibanes, y lo hace a través de la mirada de dos adolescentes enamorados. Incluso rodeados de violencia, el amor es posible. Cuando una decisión desafortunada rompa el equilibrio entre ambos y su entorno, el drama social sacará la crudeza de esta película animada de producción francesa dirigida por Zabou Breitman y Eléa Gobbé-Mévellec.",
  "anio": "2019",
  "image": "../../../assets/imagenes/kabul.jpg",
  "trailer": "../../../assets/trailers/LasgolondrinasdeKabul.mp4"
}, {
  "nombre": "Buñuel en el laberinto de las tortugas' ",
  "sinopsis": "Ambientada en la década de 1930, el espectador adulto y cinéfilo disfrutará como un niño de esta aventura que se introduce en la Historia con personajes como Buñuel y Dalí. Pero los niños y niñas tendrán que seguir descubriendo estas dos grandes figuras de la historia del arte para disfrutar la propuesta del director Salvador Simó.",
  "anio": "2019",
  "image": "../../../assets/imagenes/Buñuel.jpg",
  "trailer": "../../../assets/trailers/Buñuelenellaberintodelastortugas.mp4"
}, {
  "nombre": "La tortuga roja",
  "sinopsis": "Aunque inofensivo, el primer largometraje del belga Michael Dudok de Wit no es para nada una película infantil aunque, insistimos, cada niño es un mundo y siempre puede haber excepciones. Aunque sus imágenes promocionales puedan invitar a pensar lo contrario, 'La tortuga roja' es una reflexión vital demasiado profunda para determinadas edades. Además, el hecho de que no tenga diálogos puede provocar momentos angustiosos para unos papás inmersos en la belleza poética de la cinta y unos niños que no logran conectar con ella.",
  "anio": "2016",
  "image": "../../../assets/imagenes/toruga.jpg",
  "trailer": "../../../assets/trailers/Latortugaroja.mp4"
}, {
  "nombre": "Beavis and Butt-Head do America",
  "sinopsis": "Unos adolescentes ineptos investigan el robo de su televisión y son secuestrados por unos distribuidores de armas",
  "anio": "1996",
  "image": "../../../assets/imagenes/america.jpg",
  "trailer": "../../../assets/trailers/BeavisandButtheadDoAmerica.mp4"
}, {
  "nombre": "BoJack especial de navidad",
  "sinopsis": "Es Navidad y BoJack no quiere saber nada del tema, hasta que aparece Todd con un bastón de caramelo gigante y un antiguo episodio navideño de 'Retozando'",
  "anio": "2014",
  "image": "../../../assets/imagenes/jorse.jpg",
  "trailer": "../../../assets/trailers/Latortugaroja.mp4"
},{
"nombre": "Las golondrinas de Kabul",
"sinopsis": "Ambientada en el Kabul de 1998, esta película nos traslada a las ruinas que han dejado los Talibanes, y lo hace a través de la mirada de dos adolescentes enamorados. Incluso rodeados de violencia, el amor es posible. Cuando una decisión desafortunada rompa el equilibrio entre ambos y su entorno, el drama social sacará la crudeza de esta película animada de producción francesa dirigida por Zabou Breitman y Eléa Gobbé-Mévellec.",
"anio": "2019",
"image": "../../../assets/imagenes/kabul.jpg",
"trailer": "../../../assets/trailers/LasgolondrinasdeKabul.mp4"
}, {
"nombre": "Buñuel en el laberinto de las tortugas' ",
"sinopsis": "Ambientada en la década de 1930, el espectador adulto y cinéfilo disfrutará como un niño de esta aventura que se introduce en la Historia con personajes como Buñuel y Dalí. Pero los niños y niñas tendrán que seguir descubriendo estas dos grandes figuras de la historia del arte para disfrutar la propuesta del director Salvador Simó.",
"anio": "2019",
"image": "../../../assets/imagenes/Buñuel.jpg",
"trailer": "../../../assets/trailers/Buñuelenellaberintodelastortugas.mp4"
}, {
"nombre": "La tortuga roja",
"sinopsis": "Aunque inofensivo, el primer largometraje del belga Michael Dudok de Wit no es para nada una película infantil aunque, insistimos, cada niño es un mundo y siempre puede haber excepciones. Aunque sus imágenes promocionales puedan invitar a pensar lo contrario, 'La tortuga roja' es una reflexión vital demasiado profunda para determinadas edades. Además, el hecho de que no tenga diálogos puede provocar momentos angustiosos para unos papás inmersos en la belleza poética de la cinta y unos niños que no logran conectar con ella.",
"anio": "2016",
"image": "../../../assets/imagenes/toruga.jpg",
"trailer": "../../../assets/trailers/Latortugaroja.mp4"
}, {
"nombre": "Beavis and Butt-Head do America",
"sinopsis": "Unos adolescentes ineptos investigan el robo de su televisión y son secuestrados por unos distribuidores de armas",
"anio": "1996",
"image": "../../../assets/imagenes/america.jpg",
"trailer": "../../../assets/trailers/BeavisandButtheadDoAmerica.mp4"
},
  ];
  public actual = this.peliculas[0];


  constructor(private peliculaService: PeliculasService, private _router: Router, private renderer: Renderer2, public pedido: PedidoService) {
    this.peliculas;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.video.nativeElement.muted = "true";
  }

  pasarPelicula(pelicula) {

    this.imagenP.nativeElement.src = pelicula.image;
    this.nombre.nativeElement.innerText = pelicula.nombre;
    this.anio.nativeElement.innerText = pelicula.anio;
    this.sinopsis.nativeElement.innerText = pelicula.sinopsis;
    this.video.nativeElement.src=pelicula.trailer;
    document.getElementById("conteneInfo").setAttribute("class","conteneInfo visible");
    document.getElementById("tituloCartelera").setAttribute("class","oculto");
    // this.renderer.setStyle(this.fondo.'')    

    // this.renderer.setAttribute(this.imagenP,"src",pelicula.image);  // this.peliculaService.peliculaCarte = titulo;
    // alert(this.peliculaService.peliculaCarte);
    // this._router.navigate(['/boleteria']);
  }
  verPelicula(){

  }

}
