import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  {path:"pipe" ,component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
