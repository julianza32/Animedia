import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public imagenLogo: string = "../../../assets/imagenes/logoAnimediabb.png"
 /* https://giphy.com/gifs/l6mBchxYZc7Sw/html5 */
  // public imagenLogo: file = "../../../assets/imagenes/logoAnimediabb.png"


  constructor() { }

  ngOnInit(): void {
  }

}
