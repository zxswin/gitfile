import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './base-price.routes';
import { WidgetsModuleModule } from '../../../widgets/widgets-module.module';
import { CommonModuleModule } from '../../../commons/common-module.module';

import { BasePriceComponent } from './base-price.component';
import { BaseInfoPriceComponent } from '../base-price-info/base-price-info.component';
import { BasePriceHistroyComponent } from '../base-price-histroy/base-price-histroy.component';

const componentsList = [
  BasePriceComponent,
  BasePriceHistroyComponent,
  BaseInfoPriceComponent,
];

@NgModule({
  imports: [
    WidgetsModuleModule,
    CommonModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    componentsList,
  ],
  providers: [],
})
export class BasePriceModule { }

























