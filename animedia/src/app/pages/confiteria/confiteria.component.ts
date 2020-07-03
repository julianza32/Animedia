import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';




@Component({
  selector: 'app-confiteria',
  templateUrl: './confiteria.component.html',
  styleUrls: ['./confiteria.component.css']
})
export class ConfiteriaComponent implements OnInit {

  public producto;

  public sesion = JSON.parse(localStorage.getItem('sesion'));

  public confiteriaInfo = [
    {
      "nombre": "Nuggets con salsa Szechuan",
      "precio": "10000",
      "imagen": "https://nerdist.com/wp-content/uploads/2019/06/tenders-szechuan-sauce-615x369.jpg",
      "platino": "5000",
      "gold": "7500"
    },
    {
      "nombre": "Semillas del ermitaño",
      "precio": "2500",
      "imagen": "https://mlm-s2-p.mlstatic.com/682471-MLM26902773925_022018-O.jpg",
      "platino": "1250",
      "gold": "1850"
    },
    {
      "nombre": "Rosquillas",
      "precio": "5000",
      "imagen": "https://ep00.epimg.net/elpais/imagenes/2016/06/02/tentaciones/1464878906_690304_1464950323_noticia_normal.jpg",
      "platino": "2500",
      "gold": "3750"
    },
    {
      "nombre": "Crispetas simples de rick",
      "precio": "13000",
      "imagen": "https://wholefully.com/wp-content/uploads/2017/06/movie-theatre-popcorn-800x1200-720x540.jpg",
      "platino": "6500",
      "gold": "9750"
    },
    {
      "nombre": "Buuz Cola",
      "precio": "7000",
      "imagen": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f7027920043901.562e4915d4800.jpg",
      "platino": "3500",
      "gold": "5250"
    },
    {
      "nombre": "Quesito Puuf (Cheesy poofs)",
      "precio": "3000",
      "imagen": "https://external-preview.redd.it/J6slANecMcHlgzLhKEJFsu6uDbRd7m--3C6bjFgTpf4.jpg?auto=webp&s=56aeb29c8ad9d890f154b44226c279811a65dafe",
      "platino": "1500",
      "gold": "2250"
    },
    {
      "nombre": "Onigiri (Bolas de arroz)",
      "precio": "5000",
      "imagen": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/29/0/FN_Onigiri-Rice-Balls_s4x3.jpg.rend.hgtvcom.826.620.suffix/1485713435783.jpeg",
      "platino": "2500",
      "gold": "3750"
    },
    {
      "nombre": "Takoyaki (buñuelos de pulpo)",
      "precio": "6000",
      "imagen": "https://cookingwithdog.com/wp-content/uploads/2017/02/takoyaki-ebiyaki-00.jpg",
      "platino": "5000",
      "gold": "7500"
    },
    {
      "nombre": "Ramune",
      "precio": "5000",
      "imagen": "https://i.ebayimg.com/images/g/gIgAAOSwIW9eC5aB/s-l1600.jpg",
      "platino": "2500",
      "gold": "3750"
    }];

    /* Combos */
    public confiteriaCombo = [
      {
        "nombre": "Combo Occidental",
        "precio": "21000",
        "imagen": "https://www.upsocl.com/wp-content/uploads/2018/06/donug.jpg",
        "contenido": "Nuggets con salsa Szechuan + Buzz Cola + Rosquillas",
        "platino": "5000",
        "gold": "7500"
        },
      {
        "nombre": "Combo Oriental",
        "precio": "25000",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrWfejjDUwObR9IoWFFfwwKyPQJW05Lhe_6w&usqp=CAU",
        "contenido": "Takoyaki + Onigiri + Semillas del ermitaño + Ramune",
        "platino": "5000",
        "gold": "7500"
        },
      {
        "nombre": "Combo Flickers (pareja)",
        "precio": "40000",
        "imagen": "https://images-na.ssl-images-amazon.com/images/I/81ljEf98jqL._AC_SL1500_.jpg",
        "contenido": "Crispetas+Buzz Cola o Ramune(2) +Quesito Puuf +Takoyaki+ Nuggets",
        "platino": "5000",
        "gold": "7500"
        }];
  constructor(private pedidoService:PedidoService) {
    this.sesion
   }

  ngOnInit(): void {
  }
  pagos(product)
  {

    this.producto = {
      "nombre": product.nombre,
      "imagen": product.imagen,
      "descripcion": product.contenido,
      "valor": product.precio,
      "cantidad": 1
    };

    this.pedidoService.producto.push(this.producto);
  }
}
