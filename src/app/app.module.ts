import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { CambiarClaveComponent } from './pages/cambiar-clave/cambiar-clave.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReciclaComponent } from './pages/recicla/recicla.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { ReutilizaComponent } from './pages/reutiliza/reutiliza.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TresRComponent } from './pages/tres-r/tres-r.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InicioSesionComponent,
    MapasComponent,
    AyudaComponent,
    CambiarClaveComponent,
    PerfilComponent,
    ReciclaComponent,
    ReduceComponent,
    ReutilizaComponent,
    RegistroComponent,
    TresRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
