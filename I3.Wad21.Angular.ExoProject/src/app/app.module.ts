import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { TimerViewPipe } from './pipes/timer-view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactComponent,
    HomeComponent,
    ChronoComponent,
    TimerViewPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
