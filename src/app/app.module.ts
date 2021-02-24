import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RitualComponent } from './componentes/ritual/ritual.component';
import { CocteleriaComponent } from './componentes/cocteleria/cocteleria.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PresentacionComponent,
    NavbarComponent,
    RitualComponent,
    CocteleriaComponent,
    HistoriaComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
