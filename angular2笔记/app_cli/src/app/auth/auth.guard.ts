import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  // AuthGuard 实现了 CanActivate接口
  // CanActivate接口中定义了canActivate的方法 接收next,state两个参数 并且返回一个布尔值
  // state应该是路由导航被激化前的回调函数
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('路由守护 已经导航到products模块页面');
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('子路由守护 已经导航到products模块页面的子路由页面');
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: '11111111111111111111' },
      fragment: 'anchor'
    };

    // 127.0.0.1:8080/dist/#/login?session_id=11111111111111111111#anchor
    // this.router.navigate(['/login'], navigationExtras);

    return true;
  }

  canLoad(route: Route): boolean {
    // 添加 CanLoad 守卫
    return true;
  }
}
