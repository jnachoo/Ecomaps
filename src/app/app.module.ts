import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReciclaComponent } from './pages/recicla/recicla.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { ReutilizaComponent } from './pages/reutiliza/reutiliza.component';
import { TresRComponent } from './pages/tres-r/tres-r.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { CambiarClaveComponent } from './pages/cambiar-clave/cambiar-clave.component';
import { MapaComponent } from './pages/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InicioSesionComponent,
    RegistroComponent,
    PerfilComponent,
    ReciclaComponent,
    ReduceComponent,
    ReutilizaComponent,
    TresRComponent,
    AyudaComponent,
    CambiarClaveComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
