import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent {
  userData:any
  constructor(private usuarioService:UsuarioService){

  }
  ngOnInit(){
    this.usuarioService.obtenerUsuario().subscribe(data =>{
      this.userData = data;
      console.log(data);
    })
  }
  
}
