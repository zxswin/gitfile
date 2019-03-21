import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './pages.routes';
import { WidgetsModuleModule } from '../widgets/widgets-module.module';
import { CommonModule } from '@angular/common';
import { CommonModuleModule } from '../commons/common-module.module';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetlostComponent } from './getlost/getlost.component';
import { TwooutletComponent } from '../pages/twooutlet/twooutlet.component';



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
    RouterModule.forChild(routes),
  ],
  declarations: [
    componentsList,
  ],
  providers: [],
})
export class PagesModule { }

























