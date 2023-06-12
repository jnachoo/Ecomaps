import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient){}

  postUsuario(usuario:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(usuario);
    console.log(body)
    return this.http.post(this.baseURL + 'usuarios', body,{'headers':headers});
  }
}
