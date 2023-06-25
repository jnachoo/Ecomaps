import { Component } from '@angular/core';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.scss']
})
export class CambiarClaveComponent {
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  cambiarClave() {
    // Aquí puedes realizar la llamada a la API en el backend para cambiar la contraseña
    // utilizando los valores de this.email, this.password y this.confirmPassword
    // Puedes utilizar el método HTTP correspondiente (por ejemplo, HttpClient en Angular)
    // para enviar una solicitud POST al endpoint adecuado de la API.

    // Por ejemplo:
    /*
    this.http.post('/api/cambiar-contraseña', {
      email: this.email,
      password: this.password
    }).subscribe(response => {
      // Aquí puedes manejar la respuesta de la API
      console.log(response);
    }, error => {
      // Aquí puedes manejar el error en caso de que la solicitud falle
      console.error(error);
    });
    */

    // Recuerda importar el módulo HttpClient en tu componente para utilizarlo

    // Luego de realizar la solicitud a la API, puedes hacer cualquier acción adicional que necesites,
    // como mostrar un mensaje de éxito o redirigir al usuario a otra página.
  }
}
