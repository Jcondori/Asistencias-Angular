import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { LoginM } from '../../model/login.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: LoginM = {
usuario: '',
contrasena: ''
 };

 sesion = '';

  constructor(private _loginService: LoginService, private router: Router, private activerouter: ActivatedRoute) {
    this.sesion = 'i';
  }

  ngOnInit() {
  }
  login() {
    this._loginService.login(this.user).subscribe(data => {
     this.sesion = JSON.stringify(data);
     if (this.sesion === 'true') {
      localStorage.setItem('user', JSON.stringify(this.user.usuario)); // guardando el codalu en memoria
      console.log(localStorage.getItem('user'));
      this.router.navigate(['/index']);
    }}, error => console.error(error));
  }

}
