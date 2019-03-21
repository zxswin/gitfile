import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MuneComponent } from './menu/menu.component';
import { ThreeLevNavComponent } from './three-lev-nav/three-lev-nav.component';
import { TopNoticeComponent } from './top-notice/top-notice.component';
import { BackTopComponent } from './back-top/back-top.component';
import { FooterComponent } from './footer/footer.component';

import { WidgetsModuleModule } from '../widgets/widgets-module.module';


const componentsList = [
  MuneComponent,
  ThreeLevNavComponent,
  TopBarComponent,
  TopNoticeComponent,
  BackTopComponent,
  FooterComponent
];
@NgModule({
  imports: [WidgetsModuleModule],
  declarations: [componentsList],
  providers: [],
  exports: [componentsList] // 需要对其他模块输出componentsList 这样其他模块才能正常使用 该模块下的组件
})
export class CommonModuleModule {}
