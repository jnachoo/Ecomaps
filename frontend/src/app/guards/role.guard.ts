import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const rolPermitido = route.data['role'];
  const usuarioService = inject(UsuarioService);
  const rol = usuarioService.obtenerRol();
  if ( rolPermitido == rol){
    return true;
  }
  else{
    return false;
  }
  
};
