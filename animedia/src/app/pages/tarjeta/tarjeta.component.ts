import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public cardRick: String = "../../../assets/imagenes/cardRick.jpg"
  public cardMorty : String = "../../../assets/imagenes/mortyCard.jpg";
  public membresia;
  constructor(private pedidoService:PedidoService) { 
    this.cardMorty;
    this.cardRick;
  }

  ngOnInit(): void {
  }

  pagos(memb) {

  

    this.membresia = [
       
      {
    "nombre": "Platino",
    "imagen":this.cardMorty,
    "descripcion": `Con esta tarjeta podrás tener un 50% de descuentos en tus compras. `,
    "valor":"300.000 COP",
    "cantidad": 1
  },
  {
    "nombre": "Dorada",
    "imagen":this.cardRick,
    "descripcion": `Con esta tarjeta podrás tener un 25% de descuentos en tus compras. `,
    "valor":"150.000 COP",
    "cantidad": 1
  }
    ];

    if (memb=='platino') {
      this.pedidoService.producto.push(this.membresia[0]);//para que al producto que va a comprar le agregue la membresía
    } else {
      this.pedidoService.producto.push(this.membresia[1]);
    }

      
  }
}
