import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.scss']
})
export class CambiarClaveComponent {
  formCambiarClave!: FormGroup;
  error_id:any;

  constructor( 
    private usuarioService:UsuarioService,) {}
  
  ngOnInit(): void {
    this.formCambiarClave= new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      contrasenya: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])),
      recontrasenya: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])),
    })
    

  }

  cambiarClave() {
    if (this.formCambiarClave.status === 'VALID') {
      this.usuarioService.cambiarClaveUsuario(this.formCambiarClave.value).subscribe(data => {
        this.error_id=data.id;
        if(this.error_id==1){
          this.usuarioService.cerrarSesion();
        }
      }); 
    }
  }
}
