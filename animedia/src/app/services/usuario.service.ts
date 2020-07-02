import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class UsuarioService {

  sesion: boolean = false;
  admin: boolean = false;
  nombreUs: string;


  url = 'http://localhost:3000/api/'

  public identidad; //variable de sesion

  constructor(
    private _http: HttpClient
  ) { }
  // registrar cancion 
  registrarUsuario(usuarioNuevo) {
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // let contEmail={
    //   "to": usuarioNuevo.email,
    //   "subject": "Bienevenid@ a animedia",
    //   "text": "Has creado una cuenta satisfactoriamente con animedia, muchas gracias\n ahora podras disfrutar de nuestro contenido." 
    // }
    // this.enviarCorreo(contEmail);
    return this._http.post(
      this.url + 'registerUser', params, options).pipe(map(res => res));
  }
  enviarCorreo(contEmail) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.post(this.url + 'sendMail', contEmail, options).pipe(map(res => res));
  }
  iniciarSesion(usuarioLogueado) {
    let params = JSON.stringify(usuarioLogueado);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this._http.post(
      this.url + 'login',
      params,
      options
    ).pipe(map(res => res));
  }
  //------------------------------------------
  //Declarar el metodo del servicio obtenerNombreUsuaario
  obtenerNombreUsuario() {
    /*En la varible identidad recogemos los datos
    de nuestro usuario una vez que haya iniciado sesion.
    Estos datos se encuentrar en el local storage */
    let usuarioAutorizado = JSON.parse(localStorage.getItem('sesion'));
    if (usuarioAutorizado != 'undefined') {
      this.identidad = usuarioAutorizado;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }
  //-----------------------------------------------------
  //Declarar el metodo del servicio editarUsuario

  editarUsuario(id, usuarioActualizado) {
    let params = JSON.stringify(usuarioActualizado);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this._http.put(
      this.url + 'updateUser/' + id,
      params,
      options
    ).pipe(map(res => res));
  }
  //----------------------------------------------
  //Declarar el metodo del servicio cargarImagenUsuario
  cargarImagenUsuario(file: File, id) {
    // instanciamos el objeto FormData que nos permitira enviar la img

    let formData = new FormData();
    formData.append('image', file);
    return this._http.put(
      this.url + 'uploadUserImage/' + id,
      formData
    ).pipe(map(res => res));
  }

  eliminarUsuario(id) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this._http.delete(
      this.url + 'deleteUser/' + id,
      options
    ).pipe(map(res => res));
  }
}
