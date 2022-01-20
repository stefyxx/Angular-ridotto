import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';

const routes: Routes = [
  {path:"demo_01", component : HelloWorldComponent},
  {path:"demo_02", component : PipeDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
