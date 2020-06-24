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
  // servicio eliminar peli
  eliminarPeli(id) {

    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.delete(
      this.url + 'deleteMovie/' + id,
      options
    ).pipe(map(res => res));
  }
  //servicio cargar imagen de la  peli
  cargarImagenPeli(file: File, id) {
    let formData = new FormData();
    formData.append('image', file);
    return this._http.put(
      this.url +'uploadMovieImage/' + id,
      formData
    ).pipe(map(res => res));
  }

// Servicio cargar imagen peli

  obtenerImagenPeli(file)
  {
    return this._http.get(this.url+'getMovieImage/'+file).pipe(map(res => res));
  }

  //servicio cargar Trailer
  cargarTrailer(file: File, id) {
    let formData = new FormData();
    formData.append('trailer', file);
    return this._http.put(
      this.url + 'uploadMovieTrailer/' + id,
      formData
    ).pipe(map(res => res));
  }


  //servicio mostrar Pelis disponibles
  obtenerTrailer(){
    return this._http.get(this.url+'getMovieTrailer').pipe(map(res=>res));
  }

  //servicio traer todas las canciones orden asc
  listarPelis()
  {
    return this._http.get(this.url+'getAllMovies').pipe(map(res=>res));
  }
  
  // +++++++++++++++++++++De aqui para abajo falta terminar con lo que se traiga de busqueda

  filtrarCancion(busqueda)
  {
    let params = JSON.stringify(busqueda);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.post(this.url+'buscarCancionEsp',params,options).pipe(map(res=>res));
  }
   

 
}

