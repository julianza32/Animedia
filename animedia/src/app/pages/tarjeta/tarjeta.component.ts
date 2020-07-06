import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import Swal from 'sweetalert2';

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
    "valor":"300000",
    "cantidad": 1
  },
  {
    "nombre": "Dorada",
    "imagen":this.cardRick,
    "descripcion": `Con esta tarjeta podrás tener un 25% de descuentos en tus compras. `,
    "valor":"150000",
    "cantidad": 1
  }
    ];

    if (memb=='platino') {
      this.pedidoService.producto.push(this.membresia[0]);//para que al producto que va a comprar le agregue la membresía
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Felicidades, ya eres parte de nuestro equipo Platino! Empieza a disfrutar de todos los beneficios`,
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      this.pedidoService.producto.push(this.membresia[1]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Felicidades, ya eres parte de nuestro equipo Dorado! Empieza a disfrutar de todos los beneficios`,
        showConfirmButton: false,
        timer: 2000
      })
    }

      
  }
}
