import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-boleteria',
  templateUrl: './boleteria.component.html',
  styleUrls: ['./boleteria.component.css']
})
export class BoleteriaComponent implements OnInit {

  constructor() { }
  columnas=[1,2,3,4,];
  columnas2=[5,6,7,8,9,10,11,12,13,14];
  columnas3=[15,16,17,18];
  sillas=['A','B','C','D','E','F','G','H','I','J','K']

  ngOnInit(): void {
    
  }

}
