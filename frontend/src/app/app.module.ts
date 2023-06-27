import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Componentes
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

//Paginas
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
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';


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
    TresRComponent,
    EditarPerfilComponent,
    GestionarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
