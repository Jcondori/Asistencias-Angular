import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlternanciaService {

 url = 'http://rest.jcondori.com/Asistencias/v1/alternancia/detalle';
  constructor(private http: HttpClient ) { }

  traerCodigoAltdet() {
    let codalu  = localStorage.getItem('user');
    codalu =  codalu.valueOf().replace(/['"]+/g, '');
    const url = 'http://rest.jcondori.com/Asistencias/v1/alternancia/detalle/' + codalu ;
    console.log(url);
    return this.http.get(url);
  }
}
