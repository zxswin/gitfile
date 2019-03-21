import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './base-info.routes';
import { WidgetsModuleModule } from '../../../widgets/widgets-module.module';
import { CommonModuleModule } from '../../../commons/common-module.module';

import { BaseInfoComponent } from './base-info.component';
import { BaseInfoFundComponent } from '../base-info-fund/base-info-fund.component';
import { BaseInfoBundComponent } from '../base-info-bund/base-info-bund.component';


const componentsList = [
  BaseInfoComponent,
  BaseInfoFundComponent,
  BaseInfoBundComponent,
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
export class BaseInfoModule { }

























