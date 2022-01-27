import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demo/demo01/demo01.component';
import { FootherComponent } from './shared/foother/foother.component';
import { Exo01Component } from './exercise/exo01/exo01.component';
import { Exo02Component } from './exercise/exo02/exo02.component';
import { FormsModule } from '@angular/forms';
import { Exo03Component } from './exercise/exo03/exo03.component';
import { Exo04Component } from './exercise/exo04/exo04.component';
import { Demo02Component } from './demo/demo02/demo02.component';
import { Demo03Component } from './demo/demo03/demo03.component';
import { ConvertSecondsPipe } from './demo/demo03/convert-seconds.pipe';
import { PowPipe } from './demo/demo03/pow.pipe';
import { Demo04Component } from './demo/demo04/demo04.component';
import { TemperatureFarenheitPipe } from './demo/demo04/temperature-farenheit.pipe';
import { TemperatureCelsiusPipe } from './demo/demo04/temperature-celsius.pipe';
import { Demo05TemperatureProfComponent } from './demo/demo05-temperature-prof/demo05-temperature-prof.component';
import { ConvertTempPipe } from './demo/demo05-temperature-prof/convert-temp.pipe';
import { Demo06DirettiveComponentComponent } from './demo/demo06-direttive-component/demo06-direttive-component.component';
import { Demo07Component } from './demo/demo07/demo07.component';
import { TiAttaccoComponent } from './demo/demo07/ti-attacco/ti-attacco.component';
import { ExoInputOutput05Component } from './exercise/exo-input-output05/exo-input-output05.component';
import { InputOutputFiglioComponent } from './exercise/exo-input-output05/input-output-figlio/input-output-figlio.component';
import { Demo08Component } from './demo/demo08/demo08.component';
import { Exo05Component } from './exercise/exo05/exo05.component';
import { FiglioListaComponent } from './exercise/exo05/figlio-lista/figlio-lista.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FootherComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    ConvertSecondsPipe,
    PowPipe,
    Demo04Component,
    ConvertTempPipe,
    TemperatureFarenheitPipe,
    TemperatureCelsiusPipe,
    Demo05TemperatureProfComponent,
    Demo06DirettiveComponentComponent,
    TiAttaccoComponent,
    Demo07Component,
    Exo01Component,
    Exo02Component,
    Exo03Component,
    Exo04Component,
    ExoInputOutput05Component,
    InputOutputFiglioComponent,
    Demo08Component,
    Exo05Component,
    FiglioListaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //export: [],
  providers: [],
  bootstrap: [AppComponent] //dove parte nostra applicaz
})
export class AppModule { }
