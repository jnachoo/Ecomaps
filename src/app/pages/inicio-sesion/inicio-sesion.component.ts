import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {

  public siteKey : any;

  buttonClicked: boolean = false;
  captchaResolved: boolean = false;

  formInicioSesion!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    let formulario = {
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
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
    let datos = this.formInicioSesion.value;
    this.buttonClicked = true;

    if (this.formInicioSesion.status === 'VALID') {
    }
  }
}
