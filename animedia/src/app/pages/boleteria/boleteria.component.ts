import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';


@Component({
  selector: 'app-boleteria',
  templateUrl: './boleteria.component.html',
  styleUrls: ['./boleteria.component.css']
})
export class BoleteriaComponent implements OnInit {

  public puestos=0;
  public puestosE=0;

  constructor() { 
   
  }
  columnas=[1,2,3,4,];
  columnas2=[5,6,7,8,9,10,11,12,13,14];
  columnas3=[15,16,17,18];
  columnas4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  sillas=['A','B','C','D','E','F','G','H']
  sillas2=['I','J','K']

  ngOnInit(): void {
    
  }
 /*  ngDoCheck(){
    
  } */
puestosSeleccionados(silla){
  let sillaCol = document.getElementById(silla);
  if (this.puestos<this.puestosE){
    this.puestos++;
    
  }else{
    alert(`Ya escogiste tus puestos, puedes dirigirte a pagos ${this.puestosE}`);
  }
  
}
}
