import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-confiteria',
  templateUrl: './confiteria.component.html',
  styleUrls: ['./confiteria.component.css']
})
export class ConfiteriaComponent implements OnInit {

  public confiteriaInfo = [
    {
      "nombre": "Nuggets con salsa Szechuan",
      "precio": "10.000",
      "imagenL": "https://nerdist.com/wp-content/uploads/2019/06/tenders-szechuan-sauce-615x369.jpg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    },
    {
      "nombre": "Semillas del ermitaño",
      "precio": "2.500 COP",
      "imagenL": "https://mlm-s2-p.mlstatic.com/682471-MLM26902773925_022018-O.jpg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"

    },
    {
      "nombre": "Rosquillas",
      "precio": "5.000",
      "imagenL": "https://ep00.epimg.net/elpais/imagenes/2016/06/02/tentaciones/1464878906_690304_1464950323_noticia_normal.jpg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    },
    {
      "nombre": "Crispetas simples de rick",
      "precio": "13.000",
      "imagenL": "https://wholefully.com/wp-content/uploads/2017/06/movie-theatre-popcorn-800x1200-720x540.jpg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    },
    {
      "nombre": "Buuz Cola",
      "precio": "7.000",
      "imagenL": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f7027920043901.562e4915d4800.jpg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    },
    {
      "nombre": "Quesito Puuf (Cheesy poofs)",
      "precio": "3.000",
      "imagenL": "https://external-preview.redd.it/J6slANecMcHlgzLhKEJFsu6uDbRd7m--3C6bjFgTpf4.jpg?auto=webp&s=56aeb29c8ad9d890f154b44226c279811a65dafe",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    },
    {
      "nombre": "Onigiri (Bolas de arroz)",
      "precio": "5.000",
      "imagenL": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/29/0/FN_Onigiri-Rice-Balls_s4x3.jpg.rend.hgtvcom.826.620.suffix/1485713435783.jpeg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    },
    {
      "nombre": "Takoyaki (buñuelos de pulpo)",
      "precio": "6.000",
      "imagenL": "https://cookingwithdog.com/wp-content/uploads/2017/02/takoyaki-ebiyaki-00.jpg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    },
    {
      "nombre": "Ramune",
      "precio": "5.000",
      "imagenL": "https://i.ebayimg.com/images/g/gIgAAOSwIW9eC5aB/s-l1600.jpg",
      "Descuentos": "Tarjeta Platino 50% , Tarjeta Gold 25%"
    }];

    /* Combos */
    public confiteriaCombo = [
      {
        "nombre": "Combo Occidental",
        "precio": "21.000 COP",
        "imagenC": "https://www.upsocl.com/wp-content/uploads/2018/06/donug.jpg",
        "contenido": "Nuggets + Buzz Cola + Rosquillas                   "
      },
      {
        "nombre": "Combo Oriental",
        "precio": "25.000 COP",
        "imagenC": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrWfejjDUwObR9IoWFFfwwKyPQJW05Lhe_6w&usqp=CAU",
        "contenido": "Takoyaki + Onigiri + Semillas del ermitaño + Ramune"
      },
      {
        "nombre": "Combo Flickers (pareja)",
        "precio": "40.000 COP",
        "imagenC": "https://images-na.ssl-images-amazon.com/images/I/81ljEf98jqL._AC_SL1500_.jpg",
        "contenido": "Crispetas + Buzz Cola o Ramune (2) + Quesito Puuf + Takoyaki + Nuggets"
      }];
  constructor() { }

  ngOnInit(): void {
  }

}
