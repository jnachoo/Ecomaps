import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent {

  formRegistro!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    let formulario = {
      nombre: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      rut: ['', Validators.required],
      telefono: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8)
      ])],
      fechaNac: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
      ])],
      repassword: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
      ])],
      tyc: [false, Validators.required]
    }
    this.formRegistro = this.formBuilder.group(formulario);

  }

  registrarse() {
    console.log(this.formRegistro.status);
    if (this.formRegistro.status === 'VALID') {
      this.router.navigate(['/inicioSesion'])
    }
  }

}
