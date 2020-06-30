import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {

  
  public peliculas = [{
    "nombre": "Las golondrinas de Kabul",
    "sinopsis": "Ambientada en el Kabul de 1998, esta película nos traslada a las ruinas que han dejado los Talibanes, y lo hace a través de la mirada de dos adolescentes enamorados. Incluso rodeados de violencia, el amor es posible. Cuando una decisión desafortunada rompa el equilibrio entre ambos y su entorno, el drama social sacará la crudeza de esta película animada de producción francesa dirigida por Zabou Breitman y Eléa Gobbé-Mévellec.",
    "anio": "2019",
    "image": "https://images2.coveralia.com/dvd/l/las-golondrinas-de-kabul-cartel.jpg"
  }, {
    "nombre": "Buñuel en el laberinto de las tortugas' ",
    "sinopsis": "Ambientada en la década de 1930, el espectador adulto y cinéfilo disfrutará como un niño de esta aventura que se introduce en la Historia con personajes como Buñuel y Dalí. Pero los niños y niñas tendrán que seguir descubriendo estas dos grandes figuras de la historia del arte para disfrutar la propuesta del director Salvador Simó.",
    "anio": "2019",
    "image": "https://images2.coveralia.com/dvd/b/bunuel-en-el-laberinto-de-las-tortugas-cartel3.jpg"
  }, {
    "nombre": "La tortuga roja",
    "sinopsis": "Aunque inofensivo, el primer largometraje del belga Michael Dudok de Wit no es para nada una película infantil aunque, insistimos, cada niño es un mundo y siempre puede haber excepciones. Aunque sus imágenes promocionales puedan invitar a pensar lo contrario, 'La tortuga roja' es una reflexión vital demasiado profunda para determinadas edades. Además, el hecho de que no tenga diálogos puede provocar momentos angustiosos para unos papás inmersos en la belleza poética de la cinta y unos niños que no logran conectar con ella.",
    "anio": "2016",
    "image": "https://images2.coveralia.com/dvd/l/la-tortuga-roja-cartel.jpg"
  }, {
    "nombre": "Beavis and Butt-Head do America",
    "sinopsis": "Unos adolescentes ineptos investigan el robo de su televisión y son secuestrados por unos distribuidores de armas",
    "anio": "1996",
    "image": "https://i.pinimg.com/564x/a0/cc/86/a0cc86b60d8fed2519513ec9a951425f.jpg"
  }, {
    "nombre": "BoJack especial de navidad",
    "sinopsis": "Es Navidad y BoJack no quiere saber nada del tema, hasta que aparece Todd con un bastón de caramelo gigante y un antiguo episodio navideño de 'Retozando'",
    "anio": "2014",
    "image": "http://es.web.img2.acsta.net/c_216_288/pictures/15/02/20/10/21/222923.jpg"
  }
  ];
  constructor(private peliculaService: PeliculasService, private _router: Router) {
    this.peliculas;
   }

  ngOnInit(): void {
  }
  pasarPelicula(titulo){
    this.peliculaService.peliculaCarte = titulo;
    alert(this.peliculaService.peliculaCarte);
    this._router.navigate(['/boleteria']);
  }
}
