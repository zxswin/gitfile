import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * 用于渲染弹出框的数据
 */

@Injectable()
export class ThreeLevNavService {
  private threeNavSource = new Subject<string[]>();
  threeNavSourceModal$ = this.threeNavSource.asObservable();

  /* 渲染面包屑导航的数据 */
  renderNav(renderData: string[]) {
    this.threeNavSource.next(renderData);
  }
}
