import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { CambiarClaveComponent } from './pages/cambiar-clave/cambiar-clave.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TresRComponent } from './pages/tres-r/tres-r.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { ReutilizaComponent } from './pages/reutiliza/reutiliza.component';
import { ReciclaComponent } from './pages/recicla/recicla.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"sesion",component:InicioSesionComponent},
  {path:"mapas",component:MapasComponent},
  {path:"ayuda",component:AyudaComponent},
  {path:"cambiar",component:CambiarClaveComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"registro",component:RegistroComponent},
  {path:"reduce",component:ReduceComponent},
  {path:"reutiliza",component:ReutilizaComponent},
  {path:"recicla",component:ReciclaComponent},
  {path:"3r",component:TresRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
