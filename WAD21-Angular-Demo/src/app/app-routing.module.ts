import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HomeComponent } from './components/home/home.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';

const routes: Routes = [
{path : "demo", component : DemoComponent, children : [
  {path:"demo_01", component : HelloWorldComponent},
  {path:"demo_02", component : PipeDemoComponent},
  {path:"demo_03", component : DirectiveDemoComponent},
]},
  
  {path:"exo1", component : Exo1Component},
  {path:"exo2", component : Exo2Component},
  {path:"home", component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
