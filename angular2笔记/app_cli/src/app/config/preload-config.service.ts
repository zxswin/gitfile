import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
// tslint:disable-next-line: import-blacklist
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PreloadConfigService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('route.data888', route.data);
    route.path = route.path || '';
    if (route.data && route.data.preload) {
      // 如果路由配置中设置了preload为true 则进行预加载
      this.preloadedModules.push(route.path);
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      // 返回null的可观察者对象 不进行预加载
      return Observable.of(null);
    }
  }

}
