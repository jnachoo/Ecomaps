import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { Usuario } from 'src/app/interfaces/usuario';
import { InicioSesionService } from 'src/app/services/inicio-sesion/inicio-sesion.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {

  user: any;

  mostrarMensaje:boolean = false;

  public siteKey : any;

  buttonClicked: boolean = false;
  captchaResolved: boolean = false;

  formInicioSesion!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private inicioSesion: InicioSesionService) { }

  ngOnInit(): void {
    let formulario = {
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])],
      recaptcha: ['',Validators.required]
    }
    this.formInicioSesion = this.formBuilder.group(formulario);
    this.siteKey = "6LcCcJkmAAAAAM8lZ_jL7MZeSOI1iKd4exAu2wI1";
  }

  checkCaptcha() {
    this.captchaResolved = true;
  }


  iniciarSesion() {
    let user: Usuario ={
      email: this.formInicioSesion.value.email,
      nombre: '',
      rut: '',
      telefono: '',
      fechaNac: '',
      region: '',
      comuna: '',
      contrasenya: this.formInicioSesion.value.password,
      idTipo: 0
    }

    this.inicioSesion.inicio(user).subscribe( res =>{
      let largo = Object.keys(res).length;
      if(largo == 1){
        this.user = res.valueOf();
        console.log(this.user[0])
        localStorage.setItem('usuario', JSON.stringify(this.user[0]))
        this.router.navigate(['/perfil'])
      }else{
        this.mostrarMensaje = true;
      }
      }, error => console.log(error)
    );
    /*
    let datos = this.formInicioSesion.value;
    this.buttonClicked = true;

    if (this.formInicioSesion.status === 'VALID') {
    }
    */
  }
}
