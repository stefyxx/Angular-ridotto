import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { NavComponent } from './components/nav/nav.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PipeDemoComponent,
    ToFahrenheitPipe,
    DirectiveDemoComponent,
    NavComponent,
    Exo1Component,
    Exo2Component,
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
