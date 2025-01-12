import { Component } from '@angular/core';

@Component({
  selector: 'app-route-component',
  imports: [],
  templateUrl: './route-component.html',
  styleUrl: './route-component.css',
})
export class RouteComponent {
  canDeactivate() {
    return false;
  }
}
