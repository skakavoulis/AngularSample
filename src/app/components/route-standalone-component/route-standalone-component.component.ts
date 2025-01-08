import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-standalone-component',
  standalone: true,
  templateUrl: './route-standalone-component.component.html',
  styleUrl: './route-standalone-component.component.css',
})
export class RouteStandaloneComponentComponent {
  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }
}
