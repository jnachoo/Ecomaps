import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { InicioSesionComponent } from '../app/pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from '../app/pages/registro/registro.component';
import { PerfilComponent} from '../app/pages/perfil/perfil.component';
import { TresRComponent } from '../app/pages/tres-r/tres-r.component'
import { ReciclaComponent} from '../app/pages/recicla/recicla.component'
import { ReduceComponent} from '../app/pages/reduce/reduce.component';
import { ReutilizaComponent} from '../app/pages/reutiliza/reutiliza.component';
import { AyudaComponent } from '../app/pages/ayuda/ayuda.component';
import { CambiarClaveComponent } from './pages/cambiar-clave/cambiar-clave.component';
import { MapaComponent } from './pages/mapa/mapa.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'inicioSesion', component: InicioSesionComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: '3r', component: TresRComponent},
  { path: 'recicla', component: ReciclaComponent},
  { path: 'reduce', component: ReduceComponent},
  { path: 'reutiliza', component: ReutilizaComponent},
  { path: 'ayuda', component: AyudaComponent},
  { path: 'cambiarClave', component: CambiarClaveComponent},
  { path: 'mapa', component: MapaComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
