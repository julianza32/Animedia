import { Injectable } from '@angular/core';

// import httpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import map
import { map } from 'rxjs/operators';
//import observable
import { Observable } from "rxjs"; 





@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url = "http://localhost:3000/api/";


  constructor(
    private _http: HttpClient
  ) { }

  // Servicio registrar Peli
  registrarPeli(peliNueva){
    let params = JSON.stringify(peliNueva);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this._http.post(
      this.url + 'registerMovie',
      params,
      options
    ).pipe(map(res => res));
  }

  //servicio actualizar Peli
  actualizarPeli(peliActualizar, id) {
    let params = JSON.stringify(peliActualizar);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.put(
      this.url + 'updateMusic/updateMovie/' + id,
      params,
      options
    ).pipe(map(res => res));
  }
  // servicio eliminar canción
  eliminarPeli(id) {

    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.delete(
      this.url + 'deleteMovie/' + id,
      options
    ).pipe(map(res => res));
  }
  //servicio cargar imagen del albúm
  cargarImagenPeli(file: File, id) {
    let formData = new FormData();
    formData.append('image', file);
    return this._http.put(
      this.url +'uploadMovieImage/' + id,
      formData
    ).pipe(map(res => res));
  }



  obtenerImagenPeli(file)
  {
    return this._http.get(this.url+'getMovieImage/'+file).pipe(map(res => res));
  }

  //servicio cargar Peli
  cargarPeli(file: File, id) {
    let formData = new FormData();
    formData.append('trailer', file);
    return this._http.put(
      this.url + 'updateMovie/' + id,
      formData
    ).pipe(map(res => res));
  }

  //servicio traer todas las canciones orden asc
  listarCanciones()
  {
    return this._http.get(this.url+'listarCanciones').pipe(map(res=>res));
  }
  listarGeneros()
  {
    return this._http.get(this.url+'obtenerCancionesGenero').pipe(map(res=>res));
  }

  buscarCancion(id)
  {
    return this._http.get(this.url+'buscarCancion/'+id).pipe(map(res=>res));
  } 

  filtrarCancion(busqueda)
  {
    let params = JSON.stringify(busqueda);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.post(this.url+'buscarCancionEsp',params,options).pipe(map(res=>res));
  }
   //servicio mostrar canciones disponibles
   obtenerCanciones(){
    return this._http.get(this.url+'obtenerCanciones').pipe(map(res=>res));
  }

 
}

