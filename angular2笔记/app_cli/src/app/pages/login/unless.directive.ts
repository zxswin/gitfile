import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appUnless]'}) //定义CSS属性选择器 拼写成小驼峰形式 这个前缀不能用 ng
export class UnlessDirective {

  constructor(
    //使用TemplateRef取得 <ng-template> 的内容，并通过ViewContainerRef来访问这个视图容器。
    private templateRef: TemplateRef<any>, //创建一个内嵌的视图
    private viewContainer: ViewContainerRef) { } //获取视图容器

  @Input() set appUnless(condition: boolean) { //它定义一个设置器
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef); //创建视图并插入内容
    } else if (condition) {
      this.viewContainer.clear(); //清除该容器，并销毁该视图
    }
  }
}