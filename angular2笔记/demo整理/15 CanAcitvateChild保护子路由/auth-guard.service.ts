import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
   CanActivateChild
}                           from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("state.url",state.url);
    return this.checkLogin(url);
  };
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     if (1>2) { return true; }
    this.router.navigate(['/22']);
  };
  checkLogin(url: string): boolean {
    if (1<2) { return true; }
    this.router.navigate(['/111']);
    return false;
  };
}