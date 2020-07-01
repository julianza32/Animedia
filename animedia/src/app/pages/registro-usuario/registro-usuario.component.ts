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

  @ViewChild('tyc') tyc: ElementRef;
  public nombre: String;
  public apellido: String;
  public telefono: String;
  public cumpleanos: String;
  public email: String;
  public contrasena: String;
  public notificacion: String;

  constructor(private usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModel = new Usuario('', '', '', 0, '', '', '', '', '');
  }

  // @ViewChild('apellido') apellido: ElementRef;

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
          if (this.telefono.length < 9) {
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
         // this.usuarioService = usuario;
          if (!usuario._id) {
            alert("Error al registrate");
          } else {
            alert(`Te registraste correctamente! inicia sesion con ${usuario.email}`);
            this.notificacion = usuario.email;
            this.enviarCorreo();
            this.usuarioModel = new Usuario('', '', '', 0, '', '', '', '', '');
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
    // console.log(this.notificacion);
    // if (this.notificacion) {
    //   console.log(this.notificacion);
    //   this.enviarCorreo();
    // }
  }
  enviarCorreo() {
    console.log(this.notificacion);
    let contEmail = {
      "to": this.usuarioModel.email,
      "subject": `Bienevenid@ ${this.usuarioModel.names} a animedia`,
      "text": "Has creado una cuenta satisfactoriamente con animedia, muchas gracias\nahora podras disfrutar de nuestro contenido."
    }
    this.usuarioService.enviarCorreo(contEmail).subscribe(
      (response: any) => {
        this.notificacion="";
      }, error => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error)
        }
      }
    );
  }
}
