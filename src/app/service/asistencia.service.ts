import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  asistencia( codaltdet: String) {
  let url = 'http://rest.jcondori.com/Asistencias/v1/asistencia/' + codaltdet;
  console.log(codaltdet);
  console.log(url);
  return this.http.get(url);
  }
}
