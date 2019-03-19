import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MuneComponent } from './menu/menu.component';
import { ThreeLevNavComponent } from './three-lev-nav/three-lev-nav.component';
import { TopNoticeComponent } from './top-notice/top-notice.component';
import { BackTopComponent } from './back-top/back-top.component';


import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { WidgetsModuleModule } from '../widgets/widgets-module.module';

registerLocaleData(zh);

const componentsList = [
  MuneComponent,
  ThreeLevNavComponent,
  TopBarComponent,
  TopNoticeComponent,
  BackTopComponent,
];
@NgModule({
  imports: [
    WidgetsModuleModule,
    NgZorroAntdModule],
  declarations: [componentsList],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN } // 添加对应的依赖提供商
  ],
  exports: [componentsList]
})
export class CommonModuleModule {}
