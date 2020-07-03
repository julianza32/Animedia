import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { find } from 'rxjs/operators';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('botones') botones: ElementRef;
  @ViewChild('find') busqueda: ElementRef;


  
  public imagenLogo: string = "../../../assets/imagenes/logoAnimediabb.png"
  //public Lsesion = JSON.parse(localStorage.getItem('sesion'));
  public admin:any; 
  
  constructor(public usuarioService: UsuarioService,public pedidoservice:PedidoService,private _router:Router,public peliculasService:PeliculasService) {
    this.imagenLogo;
    usuarioService.identidad = new Usuario('','','',0,'','','','','','');
    usuarioService.nombreUs = usuarioService.identidad.names;
    pedidoservice.producto == null ? []:pedidoservice.producto;
  }

  ngOnInit(): void {
    this.usuarioService.identidad = JSON.parse(localStorage.getItem('sesion'));
  }
  ngAfterViewInit() {
       
    if (this.usuarioService.identidad) {
      this.usuarioService.sesion = true;
      this.botones.nativeElement.display = 'none';
      this.usuarioService.nombreUs = this.usuarioService.identidad.names;
      //No BORRAR !!!!!! 
       if(this.usuarioService.identidad.rol == 'administrador'||this.usuarioService.identidad.rol == 'Administrador')
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
