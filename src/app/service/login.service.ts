import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: String , contraseña: String) {
  const url = 'http://rest.jcondori.com/Asistencias/v1/alumno/login';
 /*  console.log(usuario);
  console.log(contraseña); */
  const headers = new HttpHeaders ({'Usuario': `${usuario}`, 'Password': `${contraseña}`, 'Content-Type': 'application/x-www-form-urlencoded'});
/*   console.log(headers); */
  return this.http.get(url, {headers});
  }
}
