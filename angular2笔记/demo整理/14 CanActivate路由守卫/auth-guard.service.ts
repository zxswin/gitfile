import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("state.url",state.url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (1>2) { return true; }
    this.router.navigate(['/sidekicks']);
    return false;
  }
}