import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginM } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: LoginM) {
  const url = 'http://rest.jcondori.com/Asistencias/v1/alumno/login';
 /*  console.log(usuario);
  console.log(contraseña); */
  const headers = new HttpHeaders ({'Usuario': `${usuario.usuario}`, 'Password': `${usuario.contrasena}`, 'Content-Type': 'application/x-www-form-urlencoded'});
/*   console.log(headers); */
  return this.http.get(url, {headers});
  }
}
