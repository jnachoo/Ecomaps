import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


export const authGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);
  if(usuarioService.estaLogeado()){
    return true;
  }
  else{
    router.navigate(['sesion']);
    return false;
  }
};
