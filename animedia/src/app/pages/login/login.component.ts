import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public imagenLogo: string = "../../../assets/imagenes/logoAnimediabb.png"
 
/*   public imagenCinema: string = "../../../assets/imagenes/cinema.gif"
 */

  constructor() { }

  ngOnInit(): void {
  }

}
