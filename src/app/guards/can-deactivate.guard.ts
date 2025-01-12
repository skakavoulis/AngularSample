import { CanDeactivateFn } from '@angular/router';
import { RouteComponent } from '../routes-module/route-component/route-component';

export const canDeactivateGuard: CanDeactivateFn<RouteComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.canDeactivate()) {
    return true;
  }

  return window.confirm('Are you sure you want to leave the page?');
};
