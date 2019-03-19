import { Type } from '@angular/core';

export class AdItem {
  //定义了一共广告数据类型  Type应该表示这是一个组件类型
  constructor(public component: Type<any>, public data: any) {}
}
