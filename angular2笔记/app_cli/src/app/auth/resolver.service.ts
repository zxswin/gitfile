import { Injectable } from '@angular/core';
// tslint:disable-next-line: import-blacklist
import { Observable } from 'rxjs/Rx';
import { Bund } from './bund'; // 引入 Resolve: 需要预先获取的数据结构
import { tap, delay } from 'rxjs/operators';

import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class ResolverService implements Resolve<Bund> {
  constructor(private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Bund> | Promise<Bund> | Bund {
    if (false) {
      this.router.navigate(['/home']); // 当条件不匹配的时候可以重定向到其他页面
      return { id: 111, name: 'name11' };
    } else {
      let id = route.paramMap.get('id');
      console.log('预先获取路由信息id', id);

      return Observable.of({
        // 返回一个数据结构为Bund类的可观察对象
        id: 11,
        name: 'name'
      })
        .pipe
        // delay(5000), //延迟5秒 模仿接口返回
        ();
    }
  }
}
