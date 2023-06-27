import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  
  user: any;
  constructor(private usuarioService:UsuarioService,private router:Router) {}
  
  ngOnInit(): void {
    const data = localStorage.getItem("userData");
    if (data!=null){
      this.user=JSON.parse(data);
    }
  }
  editarPerfil(){
    this.router.navigate(['editar-perfil']);
  }
  cerrarSesion(){
    this.usuarioService.cerrarSesion();
  }
}
