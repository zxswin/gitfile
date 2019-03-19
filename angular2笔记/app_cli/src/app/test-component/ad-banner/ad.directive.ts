import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  //把viewContainerRef 作为公共属性输出出去
  constructor(public viewContainerRef: ViewContainerRef) { }
}

