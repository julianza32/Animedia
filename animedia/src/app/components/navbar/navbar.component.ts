import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('botones') botones: ElementRef;
  @ViewChild('nUsua') nUsua: ElementRef;



  public imagenLogo: string = "../../../assets/imagenes/logoAnimediabb.png"

  public Lsesion = JSON.parse(localStorage.getItem('sesion'));


  constructor(public usuarioService: UsuarioService) {
    this.imagenLogo
  }




  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (this.Lsesion) {
      this.usuarioService.sesion = true;
    } else {
      this.usuarioService.sesion = false;
    }
    if (this.usuarioService.sesion === true) {
      this.botones.nativeElement.display = 'none';
      this.nUsua.nativeElement.innerText = this.Lsesion.names;
    } else {
      this.botones.nativeElement.display = 'flex';
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    this.usuarioService.identidad = '';
    this.usuarioService.sesion = false;
  }
  // ngDoCheck(){
  //   // alert("ca")
  // }
}
