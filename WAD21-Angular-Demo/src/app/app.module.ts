import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demo/demo01/demo01.component';
import { Demo02Component } from './demo/demo02/demo02.component';
import { Demo03Component } from './demo/demo03/demo03.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { FormsModule } from '@angular/forms';
import { Demo04Component } from './demo/demo04/demo04.component';
import { Demo05Component } from './demo/demo05/demo05.component';
import { Demo06Component } from './demo/demo06/demo06.component';
import { ConvertSecondsToDHMSPipe } from './demo/demo06/convert-seconds-to-dhms.pipe';
import { PowPipe } from './demo/demo06/pow.pipe';
import { ConvertTempPipe } from './exos/exo01/convert-temp.pipe';
import { Exo02Component } from './exos/exo02/exo02.component';
import { Demo07Component } from './demo/demo07/demo07.component';
import { Demo08Component } from './demo/demo08/demo08.component';
import { Demo09Component } from './demo/demo09/demo09.component';
import { PrepareRenderDirective } from './demo/demo09/prepare-render.directive';
import { HighlightDirective } from './demo/demo09/highlight.directive';
import { Exo03Component } from './exos/exo03/exo03.component';
import { Demo10Component } from './demo/demo10/demo10.component';
import { ChildInputComponent } from './demo/demo10/child-input/child-input.component';
import { ChildOutputComponent } from './demo/demo10/child-output/child-output.component';
import { ChildNgcontentComponent } from './demo/demo10/child-ngcontent/child-ngcontent.component';
import { Exo04Component } from './exos/exo04/exo04.component';
import { ListeComponent } from './exos/exo04/liste/liste.component';
import { Demo11Component } from './demo/demo11/demo11.component';
import { Exo05Component } from './exos/exo05/exo05.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    Demo06Component,
    Demo07Component,
    Demo08Component,
    Demo09Component,
    Exo01Component,
    Exo02Component,
    ConvertSecondsToDHMSPipe,
    PowPipe,
    ConvertTempPipe,
    PrepareRenderDirective,
    HighlightDirective,
    Exo03Component,
    Demo10Component,
    ChildInputComponent,
    ChildOutputComponent,
    ChildNgcontentComponent,
    Exo04Component,
    ListeComponent,
    Demo11Component,
    Exo05Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Pour le Two Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
