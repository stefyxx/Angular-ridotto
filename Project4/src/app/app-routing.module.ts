import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo/demo01/demo01.component';
import { Demo02Component } from './demo/demo02/demo02.component';
import { Demo03Component } from './demo/demo03/demo03.component';
import { Demo04Component } from './demo/demo04/demo04.component';
import { Demo05TemperatureProfComponent } from './demo/demo05-temperature-prof/demo05-temperature-prof.component';
import { Demo06DirettiveComponentComponent } from './demo/demo06-direttive-component/demo06-direttive-component.component';
import { Demo07Component } from './demo/demo07/demo07.component';
import { Exo01Component } from './exercise/exo01/exo01.component';
import { Exo02Component } from './exercise/exo02/exo02.component';
import { Exo03Component } from './exercise/exo03/exo03.component';
import { Exo04Component } from './exercise/exo04/exo04.component';
import { HomeComponent } from './home/home.component';
//Routes é una tab con i diversi link delle diverse pag
const routes: Routes = [
  {path:"",component: HomeComponent},
  //non proprio; percé sono a stesso livello del Componente Home
  //{path:"demo/demo01",component: Demo01Component}
  {path:"demo", children:[
    {path:"demo01", component: Demo01Component},
    {path:"demo02", component: Demo02Component},
    {path:"demo03", component: Demo03Component},
    {path:"demo04", component: Demo04Component},
    {path:"demo05", component: Demo05TemperatureProfComponent},
    {path:"demo06", component: Demo06DirettiveComponentComponent},
    {path:"demo07", component: Demo07Component}
  ]},
  //oppure, direttamente
  /* {path:"",component: HomeComponent, children:[
    {path:"demo" ...
  ]]},*/
  {path:"exercise", children:[
    {path:"exo01", component: Exo01Component},
    {path:"exo02", component: Exo02Component},
    {path:"exo03", component: Exo03Component},
    {path:"exo04", component: Exo04Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
