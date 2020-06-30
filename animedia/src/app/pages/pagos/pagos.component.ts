import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  public opcionSeleccionada;
  public listaProductos= this.pedido.producto;
  public descuento= 10;

 public datos={
   "nombre": "",
   "direccion":"",
   "celular":"",
   "observaciones":"",
   "banco":"",
   "titular":"",
   "tipoI":"",
   "identificacion":"",
   "correo":"",

 }


  constructor(public pedido : PedidoService) { }

  ngOnInit(): void {
    this.calculoSubtotal();
    this.pedido;
    
  }
  ngDoCheck(){
    this.calculoSubtotal();
  }
  
  calculoSubtotal(){
    for(var i=0;i<this.listaProductos.length;i++){
      let sub=(this.listaProductos[i].valor*this.listaProductos[i].cantidad*(1-this.descuento/100));
      /* this.listaProductos[i].subtotal=sub */
      this.listaProductos[i]["subtotal"]= sub;
      
    }
  }
  //muestra pagos por debito o credito
  mostrar(){
    var id=this.opcionSeleccionada;
    if(id==1){
      document.getElementById("credito").setAttribute("class","visible");
    }else{
      document.getElementById("credito").setAttribute("class","oculto");
    }
    if(id==2){
      document.getElementById('pse').setAttribute("class","visible");
    }else{
      document.getElementById("pse").setAttribute("class","oculto");
    }
  }
  //procesa el envio de datos
  envioDatos(){
    alert(`Compra exitosa !!. Tu pedido se encuentra en camino`);
  }
}
