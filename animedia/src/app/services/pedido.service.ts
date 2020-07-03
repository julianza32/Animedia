import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  public peliculas=new Array();
  public producto = new Array(); 
  public tituloP:String = 'No seleccionada aún';

  constructor() { }
}

/*
nombre producto : Boleta(Jack)-Tarjeta platino - Combo 1
imagen producto : imagen.png-imagen.jpg - imagenCombo.jpg
descripcion : puestos/sala - 6 meses de membresia de platino -descripcion del combo 
valor unitario: 12000 - 50000 - 20000
cantidad: cantidad sillas - 1 (no editable) - 1 o + 
*/
