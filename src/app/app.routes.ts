import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RouteComponent } from './routes-module/route-component/route-component';
import { RouteStandaloneComponentComponent } from './components/route-standalone-component/route-standalone-component.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'route1',
    component: RouteComponent,
  },
  {
    path: 'route2/:id',
    component: RouteStandaloneComponentComponent,
  },
  {
    path: 'route3',
    loadComponent: () =>
      import(
        './components/route-standalone-2/route-standalone-2.component'
      ).then((m) => m.RouteStandalone2Component),
  },
  {
    path: 'route4',
    loadChildren: () =>
      import('./routes-2-module/routes-2.module').then((m) => m.Routes2Module),
  },
];
