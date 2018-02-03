import { Injectable }           from '@angular/core';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from '@angular/router';

import { OnePartOneComponent } from './pageone/onepartone/onepartone';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<OnePartOneComponent> {

  canDeactivate(
    component: OnePartOneComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    console.log('state.url',state.url);

    if (1<2) {
      console.log(component.num);
      return true;
    }
  
    return false;
  }
}