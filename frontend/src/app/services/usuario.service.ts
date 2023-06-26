import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseURL: string = "http://localhost:5000/api";
 
  constructor(private http: HttpClient, private router:Router){}

  registroUsuario(formvalue:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(formvalue);
    console.log(body)
    return this.http.post(this.baseURL + '/registro', body,{'headers':headers});
  }
  inicioSesionUsuario(formvalue:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(formvalue);
    return this.http.post(this.baseURL + '/iniciosesion', body,{'headers':headers});
  }
  cambiarClaveUsuario(formvalue:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(formvalue);
    return this.http.post(this.baseURL + '/cambiarclave', body,{'headers':headers});
  }
  estaLogeado(){
    return !!localStorage.getItem('token');
  }
  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.router.navigate(['sesion']);
  }
}

