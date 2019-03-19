import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
// tslint:disable-next-line: import-blacklist
import { Observable } from 'rxjs/Rx';

// 引入要守卫的组件 可以忽略，仅当需要获取组件中的属性值或方法的时候使用
import { BaseInfoBundComponent } from '../pages/pages-products/base-info/base-info-bund/base-info-bund.component';

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<BaseInfoBundComponent> {
  canDeactivate(
    component: BaseInfoBundComponent, // 这个参数是必须的 可以通过它获取对应组件中的方法或属性
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('准备好离开导航');
    console.log('route.paramMap', route.paramMap); // route.paramMap.get('id')可用于获取路由参数
    console.log('当前准备离开的导航链接', state.url); // 获取当前导航的链接

    const dialogService = (message?: string): Observable<boolean> => {
      // message为一个字符串的可选参数
      // 返回一个可观察者对象 并且这个可观察者对象 发出的值为布尔型
      const confirmation = window.confirm(message); // 如果用户点击确定按钮，则 confirm() 返回 true。如果点击取消按钮，则 confirm() 返回 false。
      return Observable.of(confirmation);
    };
    return dialogService('你确定要离开吗');
  }
}
