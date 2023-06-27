import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent {
  userData:any
  constructor(private usuarioService:UsuarioService,
    private router:Router){

  }
  ngOnInit(){
    this.usuarioService.obtenerUsuario().subscribe(data =>{
      this.userData = data;
      //console.log(data);
    })
  }
  borrarUsuario(index:any){
    //console.log(this.userData[index]);
    this.usuarioService.eliminarUsuario(this.userData[index].email).subscribe(data =>{
      if(data.id==1){
        this.router.navigate(['gestionar-usuarios'])
      }
    });
  }
}
