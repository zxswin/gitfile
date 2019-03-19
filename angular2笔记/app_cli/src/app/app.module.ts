import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { RouterModule, PreloadingStrategy, PreloadAllModules, Routes, Router } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { routes } from './app.routes';

import { WidgetsModuleModule } from './widgets/widgets-module.module';

import { CommonModuleModule } from './commons/common-module.module';

import { TextComponentModuleModule } from './test-component/test-component-module.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { LogService } from './services/log.service';

import { HttpService } from './services/http.service';

import { AuthGuard } from './auth/auth.guard';
import { CanDeactivateGuard } from './auth/can-deactivate.guard';
import { ResolverService } from './auth/resolver.service';

import { PreloadConfigService } from './config/preload-config.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';


import { FlyingHeroesPipe } from './pages/login/login.pipe';
import { UnlessDirective } from './pages/login/unless.directive';
import { HighlightDirective } from './pages/login/highlight.directive';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';


/** 其他服务部分  */
import { AlertModalService } from '../app/widgets/alert-modal/alert-modal.service';
import { AppApiProgressService } from '../app/widgets/app-api-progress/app-api-progress.service';
import { ThreeLevNavServices } from './commons/three-lev-nav/three-lev-nav.services';
import { HttpClientModule, HttpClient } from '@angular/common/http';

registerLocaleData(zh);

const appCompProviders = [
  HttpService,
  LogService,
  AuthGuard,
  CanDeactivateGuard,
  ResolverService,
  PreloadConfigService,
  AlertModalService,
  AppApiProgressService,
  ThreeLevNavServices,
];

const componentsList = [
  AppComponent,
  LoginComponent,
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WidgetsModuleModule,
    CommonModuleModule,
    TextComponentModuleModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: PreloadConfigService, // PreloadConfigService 自定义预加载模块
    }),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateLoader),
    //     deps: [HttpClient]
    //   }
    // }),
  ],
  declarations: [
    componentsList,
    FlyingHeroesPipe,
    UnlessDirective,
    HighlightDirective,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NZ_I18N, useValue: zh_CN },
    appCompProviders],
})
export class AppModule {
  // 打印路由配置信息 可选
  constructor(router: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

























