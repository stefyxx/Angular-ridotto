import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HellowordComponent } from './components/helloword/helloword.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';


const routes: Routes = [
  {path:"demo_01", component:HellowordComponent},
  {path:"pipes", component: PipeDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
