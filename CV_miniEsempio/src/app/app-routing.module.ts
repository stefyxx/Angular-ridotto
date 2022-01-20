import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DirettiveComponent } from './components/direttive/direttive.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"skills", component:SkillsComponent},
  {path:"contact", component:ContactComponent},
  {path:"direttiva", component:DirettiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
