import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
//'../../services/usuario.service';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

export class RegistroUsuarioComponent implements OnInit {
  public usuarioModel: Usuario;
  public url: String;
  ;

  @ViewChild('tyc') tyc: ElementRef;
  public nombre: String;
  public apellido: String;
  public telefono: String;
  public cumpleanos: Date;
  public email: String;
  public contrasena: String;


  // @ViewChild('apellido') apellido: ElementRef;


  constructor(private usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModel = new Usuario('', '', '', 0, new Date, '', '', '', '');
  }


  ngDoCheck() {
    this.nombre = this.usuarioModel.names;
    this.apellido = this.usuarioModel.lastNames;
    this.telefono = this.usuarioModel.cellphone.toString();
    this.cumpleanos = this.usuarioModel.birthdate;
    this.email = this.usuarioModel.email;
    this.contrasena = this.usuarioModel.pass;


  }

  ngOnInit(): void {
  }
  validarFormulario() {
    if (this.nombre === "") {
      alert("Por favor llena el campo nombre");
    } else {
      if (this.apellido === "") {
        alert("Por favor llena el campo apellido");
      } else {
        if (this.telefono === "0" || this.telefono === "") {
          alert("Por favor llena el campo telefono")
        } else {
          if (this.telefono.length < 10) {
            alert("Por favor ingrese el numero de telefono correcto");
          } else {
            if (this.email === "") {
              alert("Por favor llena el campo de correo");
            } else {
              if (this.contrasena == "") {
                alert("Por favor llena el campo de contraseña")
              } else {
                if (this.tyc.nativeElement.checked) {
                  this.registrarUsuario();
                } else {
                  alert("Por favor Acepta terminos y condiciones");
                }
              }
            }
          }
        }
      }
    }
  }
  registrarUsuario() {
    this.usuarioService.registrarUsuario(this.usuarioModel).subscribe(
      (response: any) => {
        if (response.user) {
          let usuario = response.user;
          this.usuarioService = usuario;
          if (!usuario._id) {
            alert("Error al registrate");
          } else {
            alert(`Te registraste correctamente! inicia sesion con ${usuario.email}`);
            this.usuarioModel = new Usuario('', '', '', 0, new Date, '', '', '', '');
            this._router.navigate(['/login']);
          }
        } else {
          alert(response.message);
        }
      }, error => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
  }
}
