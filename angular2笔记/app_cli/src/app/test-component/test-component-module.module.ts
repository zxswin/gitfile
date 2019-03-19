import { CommonModule }        from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from './view-child/view-child.component';

import { HeroJobAdComponent }   from './ad-banner/hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner/ad-banner.component';
import { HeroProfileComponent } from './ad-banner/hero-profile.component';
import { AdDirective }          from './ad-banner/ad.directive';
import { AdService }            from './ad-banner/ad.service';

const componentsList = [
  ViewChildComponent,
  HeroJobAdComponent,
  AdBannerComponent,
  HeroProfileComponent,
  AdDirective,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    componentsList,
  ],
  providers: [AdService],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ], //确保编译器照常生成工厂类，就要把这些动态加载的组件添加到 NgModule 的 entryComponents 数组中：
  exports:[CommonModule,FormsModule,componentsList],
})

export class TextComponentModuleModule  { }

























