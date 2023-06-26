import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  
  user: any;
  constructor(private usuarioService:UsuarioService) {}
  
  ngOnInit(): void {
    const data = localStorage.getItem("userData");
    if (data!=null){
      this.user=JSON.parse(data);
    }
  }
  apretame(){
    this.usuarioService.obtenerRol();
  }
  cerrarSesion(){
    this.usuarioService.cerrarSesion();
  }
}
