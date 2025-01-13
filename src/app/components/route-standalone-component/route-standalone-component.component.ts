import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-standalone-component',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './route-standalone-component.component.html',
  styleUrl: './route-standalone-component.component.css',
})
export class RouteStandaloneComponentComponent {
  id = '';
  queryParams: any;
  subscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  addOnePage() {
    const newParams = { ...this.queryParams, page: 5 };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: newParams,
      queryParamsHandling: 'merge',
    });
  }
}
