import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const rolPermitido = route.data['role'];
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  const rol = usuarioService.obtenerRol();
  if ( rolPermitido == rol){
    return true;
  }
  else{
    router.navigate(['perfil']);
    return false;
  }
  
};
