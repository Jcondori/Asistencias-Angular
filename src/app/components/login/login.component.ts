import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
usuario = '';
contra = '';
sesion = '';
  constructor(private _loginService: LoginService) {
  this.sesion = 'i'  // inicio
  }

  ngOnInit() {
  }
  login() {
    this._loginService.login(this.usuario , this.contra).subscribe(data => {
     this.sesion = JSON.stringify(data);
    }) ;
  }
}
