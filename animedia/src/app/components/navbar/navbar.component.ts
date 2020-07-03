import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';


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
  public admin:any; 
  
  constructor(public usuarioService: UsuarioService,public pedidoservice:PedidoService,private _router:Router) {
    this.imagenLogo;
    usuarioService.identidad = JSON.parse(localStorage.getItem('sesion'));
  //  usuarioService.nombreUs = this.Lsesion.names;
    pedidoservice.producto == null ? []:pedidoservice.producto;
  }

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
    if (this.Lsesion) {
      this.usuarioService.sesion = true;
      this.botones.nativeElement.display = 'none';
      //this.nUsua.nativeElement.innerText = this.Lsesion.names;
      //No BORRAR !!!!!! 
       if(this.Lsesion.rol == 'administrador'||this.Lsesion.rol == 'Administrador')
      {
        this.usuarioService.admin = true;
      }else{
        this.usuarioService.admin = false;
      }
     
    // } else {
    //   this.usuarioService.sesion = false;
      
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    this.usuarioService.identidad = '';
    this.usuarioService.sesion = false;
    this._router.navigate(['/home'])
  }
}
