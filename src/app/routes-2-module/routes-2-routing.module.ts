import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route2Component } from './route-2/route-2.component';

const routes: Routes = [
  {
    path: '',
    component: Route2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routes2RoutingModule {}
