import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './pages.routes';
import { CommonModule } from '@angular/common';
import { WidgetsModuleModule } from '../widgets/widgets-module.module';
import { CommonModuleModule } from '../commons/common-module.module';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetlostComponent } from './getlost/getlost.component';
import { TwooutletComponent } from '../pages/twooutlet/twooutlet.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);


const componentsList = [
  HomeComponent,
  WelcomeComponent,
  GetlostComponent,
  TwooutletComponent,
];

@NgModule({
  imports: [
    CommonModule,
    WidgetsModuleModule,
    CommonModuleModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    componentsList,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class PagesModule { }

























