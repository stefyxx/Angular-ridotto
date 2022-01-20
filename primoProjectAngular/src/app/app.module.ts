import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowordComponent } from './components/helloword/helloword.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HellowordComponent,
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
