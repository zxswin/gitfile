import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { routes } from './base-price.routes';
import { WidgetsModuleModule } from '../../../widgets/widgets-module.module';
import { CommonModuleModule } from '../../../commons/common-module.module';

import { BasePriceComponent } from './base-price/base-price.component';
import { BaseInfoPriceComponent } from './base-price-info/base-price-info.component';
import { BasePriceHistroyComponent } from './base-price-histroy/base-price-histroy.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);


const componentsList = [
  BasePriceComponent,
  BasePriceHistroyComponent,
  BaseInfoPriceComponent,
];

@NgModule({
  imports: [
    WidgetsModuleModule,
    CommonModuleModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    componentsList,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN } ,   //添加对应的依赖提供商
  ],
})
export class BasePriceModule { }

























