import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public cardRick: String = "../../../assets/imagenes/cardRick.jpg"
  public cardMorty : String = "../../../assets/imagenes/mortyCard.jpg";
  constructor() { 
    this.cardMorty;
    this.cardRick;
  }

  ngOnInit(): void {
  }

}
