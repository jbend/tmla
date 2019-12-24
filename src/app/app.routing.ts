import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ShellComponent,
  PageNotFoundComponent } from './containers';

import { LinksComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: LinksComponent,
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
