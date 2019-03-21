import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * 当菜单发送变化的时候 数据变化的主题 提供各子组件订阅
 */

@Injectable()
export class MenuService {
  private MenuStateSource = new Subject<boolean>();
  MenuStateSource$ = this.MenuStateSource.asObservable();

  /* 改变菜单是否收缩状态的数据流 */
  setCollapsed(isCollapsed: boolean) {
    this.MenuStateSource.next(isCollapsed);
  }
}
