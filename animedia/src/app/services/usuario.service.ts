import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    url='http://localhost:3000/api/'
  constructor(
    private _http: HttpClient
  ) { }
// registrar cancion 
  registarUsuario(usuarioNuevo){
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers: new HttpHeaders({' Content-Type ':'application/json'})
    };
    return this._http.post(
      this.url + 'registerUser',params,options).pipe(map(res=>res));
  }
}
