import { Routes } from '@angular/router';
import { RouteComponent } from './routes-module/route-component/route-component';
import { RouteStandaloneComponentComponent } from './components/route-standalone-component/route-standalone-component.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { canMatchGuard } from './guards/can-match.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'route1',
    component: RouteComponent,
    canActivate: [authGuard],
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'route2/:id',
    component: RouteStandaloneComponentComponent,
  },
  {
    path: 'route3',
    canMatch: [canMatchGuard],
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
