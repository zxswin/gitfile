import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './pages-products.routes';
import { ProductsShowComponent } from './products-show/products-show.component';

import { WidgetsModuleModule } from '../../widgets/widgets-module.module';
import { CommonModuleModule } from '../../commons/common-module.module';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

const componentsList = [
  ProductsShowComponent,
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
export class PagesProductsModule { }

























