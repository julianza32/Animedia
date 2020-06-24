import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  @ViewChild('informacion') display:ElementRef;
  @ViewChild('formulario') form:ElementRef;
  public identidad:Usuario;
  public usuarioModel:Usuario;

  constructor(private usuarioService:UsuarioService) { 
    
    this.identidad = new Usuario('','','',0,new Date(),'','','','');
    this.usuarioModel = new Usuario('','','',0,new Date(),'','','','');

  }

  ngOnInit(): void {
    if(localStorage.getItem('sesion'))
    {
      this.identidad = JSON.parse(localStorage.getItem('sesion'));
      this.usuarioModel = this.identidad;
      let fecha = new Date(this.identidad.birthdate);
      console.log(fecha);
      
      console.log(fecha.toISOString().split('T')[0]);

      //presenta error por tipo de dato pero funciona ya que html recibe una cadena como valor.
      //posible modificacion a como se
      this.usuarioModel.birthdate = fecha.toISOString().split('T')[0];
    }
    //console.log(this.usuarioModel.birthdate);
    
    
  }

  ngAfterViewInit()
  {
    this.form.nativeElement.style = 'display:none';
  }

  ngDoCheck()
  {
    console.log(this.usuarioModel.birthdate);
  }

  actualizarUsuario()
  {
   // this.usuarioService.editarUsuario()
  }

  showForm()
  {
    this.display.nativeElement.style = 'display:none';
    this.form.nativeElement.style = 'display:block';
  }
}
