import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PipeDemoComponent,
    ToFahrenheitPipe
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
