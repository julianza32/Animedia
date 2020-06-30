import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

// Importar el modelo
import { Usuario } from '../../model/usuario'

// Importar el servicio
import { UsuarioService } from '../../services/usuario.service';

// Importar el manejo de rutas
import { Router, ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  @ViewChild('logincont') Login;
  @ViewChild('container') Container;

  // Declaración variable de usuario
  public login: Usuario; 

  // Declaración variable de identidad
  public identidad;


  constructor(
    private usuarioService: UsuarioService,
    private _router: Router
    
  ) {
    this.login = new Usuario('', '', '',  0, '', '', '', 'usuario', '')
   }

   public sesion = JSON.parse(localStorage.getItem('sesion'));

  ngOnInit(): void {
  }
  //  Metodo iniciar sesio o Login

  loginUsuario() {
    console.log(this.login);

    this.usuarioService.iniciarSesion(this.login).subscribe(
      (response: any)=>{
        // console.log(response)
        let usuario = response.user;
        this.login = usuario;

        if (this.login) {
          let usuarioLogueado = new Usuario(
            this.login._id,
            this.login.names,
            this.login.lastNames,
            this.login.cellphone,
            this.login.birthdate,
            this.login.email,
            this.login.pass,
            this.login.rol,
            this.login.image
          );

          // Crear localStorage
          localStorage.setItem('sesion',JSON.stringify(usuarioLogueado));
          // Consumir el servicio obtenerNombreUsuario
          this.identidad = this.usuarioService.obtenerNombreUsuario();
          alert(`Hola ${this.identidad.names}. Empieza a disfurtar de nuestro contenido!`);
          this.usuarioService.sesion = true;
          this.usuarioService.nombreUs = this.identidad.names;

          if(this.identidad.rol == 'administrador'||this.identidad.rol == 'Administrador')
          {
            this.usuarioService.admin = true;
          }else{
            this.usuarioService.admin = false;
          }
          

          // Redirección al perfil
          // alert(this.usuarioService.sesion);
          this._router.navigate(['/home']);
        } else{
          alert("Usuario no identificado")
          this.login = new Usuario('', '', '',  0, '', '','', 'usuario', '');
        }
        // Cierre validación
      },error =>{
        if(error != null){
          console.log(error);
        }
      }
    );  
  }

}
