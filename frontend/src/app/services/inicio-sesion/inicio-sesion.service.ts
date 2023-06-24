import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  url='/api'

  constructor(private http: HttpClient) {}

  inicio(user: Usuario){
    return this.http.post(this.url+'/inicioSesion', user);
  }
}
