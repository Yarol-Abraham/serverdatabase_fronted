import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mostrar: boolean = false;
  serverdba: any = {};
  usuario: any = {};
  usuarioInvalido: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  mostrarmensaje() {
    this.mostrar = !this.mostrar;
  }

  formulariologin() {
    let formularioValido: any = document.getElementById("loginForm");
    if (formularioValido.reportValidity()) {
      this.serviciologin().subscribe(
        (respuesta: any) => this.login(respuesta)
      )
    }
  }

  login(res: any) {

    if (res.length == 0) {
      this.usuarioInvalido = true;
    }
    else {
     // const dbname = document.getElementById('dbName')
     // const usu = document.getElementById('username')
     // const pass = document.getElementById('password')

      localStorage.setItem("db", JSON.stringify(this.serverdba));
      location.href = "/manager";
    }
    console.log(res);
  }

  serviciologin() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8015/serverdba/api/connection", this.serverdba, httpOptions).pipe(
      catchError(e => "error")
    )

  }
}
