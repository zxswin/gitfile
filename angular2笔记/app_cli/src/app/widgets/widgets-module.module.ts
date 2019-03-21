import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { InputMultipleSelectComponent } from './input-multiple-select/input-multiple-select.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { AppApiProgressComponent } from './app-api-progress/app-api-progress.component';
import { QueryFilterComponent } from './query-filter/query-filter.component';
import { BottomButtonGroupComponent } from './bottom-button-group/bottom-button-group.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

const componentsList = [
  TreeSelectComponent,
  InputMultipleSelectComponent,
  ShowTableComponent,
  AlertModalComponent,
  AppApiProgressComponent,
  QueryFilterComponent,
  BottomButtonGroupComponent,
];
@NgModule({
  imports: [CommonModule, FormsModule, NgZorroAntdModule],
  declarations: [componentsList],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN } // 添加对应的依赖提供商
  ],
  exports: [CommonModule, FormsModule, NgZorroAntdModule , componentsList] // componentsList 必须对外输出 因为其他模块会用到
})
export class WidgetsModuleModule {}
