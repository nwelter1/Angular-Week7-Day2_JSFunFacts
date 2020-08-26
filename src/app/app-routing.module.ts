import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MaphlComponent } from './maphl/maphl.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    path: 'author', component: AuthorComponent
  },
  {
    path: 'callbacks', component: CallbacksComponent
  },
  {
    path: 'maphl', component: MaphlComponent
  },
  {
    path: 'promises', component: PromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
