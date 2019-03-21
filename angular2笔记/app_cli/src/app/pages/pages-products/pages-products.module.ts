import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './pages-products.routes';
import { WidgetsModuleModule } from '../../widgets/widgets-module.module';
import { CommonModuleModule } from '../../commons/common-module.module';
import { PagesProductsComponent } from './pages-products.component';


const componentsList = [
  PagesProductsComponent,
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
export class PagesProductsModule { }

























