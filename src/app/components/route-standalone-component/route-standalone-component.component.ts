import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-standalone-component',
  standalone: true,
  templateUrl: './route-standalone-component.component.html',
  styleUrl: './route-standalone-component.component.css',
})
export class RouteStandaloneComponentComponent {
  id = '';
  subscription?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
