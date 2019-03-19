import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.pug',
  styleUrls: ['./ad-banner.component.less'],
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective; //获取指令元素 可直接调用其中的方法 adHost变量类型为指令
  interval: any;

  // ComponentFactoryResolver 来动态添加组件。
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    //提取动态组件模板
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    //生成动态组件插入的视图容器
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear(); //清空视图容器

    let componentRef = viewContainerRef.createComponent(componentFactory); //把动态组件插入到视图容器中
    //<AdComponent>componentRef.instance 打印出来是  HeroJobAdComponent {} 或 HeroProfileComponent {}

    console.log('componentRef',componentRef);
    //(<AdComponent>componentRef.instance).data = adItem.data;
    componentRef.instance.data = adItem.data;  //可以去掉 <AdComponent> 传入动态组件入参
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
