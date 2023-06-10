import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent{

  serverdba: any = {};
  show_tables:any = {};
  query:string = "select * from producto;";
  result_query:any = {};
  message:string = "";
  show:string = "show databases;";
  result_show:any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let temporal = localStorage.getItem("db");
    if(temporal){
      this.serverdba = JSON.parse(temporal);
      this.show_tables = this.serverdba;
      console.log(this.serverdba);
           
      }
      // aqui
  }

  execute_query(){
    if(this.query.length > 0){
      this.serverdba.query = this.query;
      // this.show_tables.query = this.show;
      console.log(this.serverdba);

      this.servicioquery().subscribe(
        (respuesta: any) => this.resultQuery(respuesta)
      )

    }
  }

  resultQuery(res:any){
    this.result_query = res.data;
    this.message = (res.responseMessage == 'success execute query' ? 'Ejecutado con exito' : 'Hubo un error');
  }

  servicioquery() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>(" http://localhost:8015/serverdba/api/execute/query", this.serverdba, httpOptions).pipe(
      catchError(e => "error")
    )

  }

}
