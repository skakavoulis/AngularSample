import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesModuleRouting as RoutesModuleRouting } from './routes-routing.module';
import { RouteComponent } from './route-component/route-component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RoutesModuleRouting, RouteComponent],
})
export class RoutesModule {}
