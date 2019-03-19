import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetlostComponent } from './getlost/getlost.component';
import { TwooutletComponent } from '../pages/twooutlet/twooutlet.component';
import { AuthGuard } from '../auth/auth.guard'; // 引入守卫服务

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
        data: { animation: 'welcome' }
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: { animation: 'welcome' }
      },
      {
        path: 'products',
        loadChildren:
          './pages-products/pages-products.module#PagesProductsModule',
        // canLoad: [AuthGuard], //添加CanLoad 守卫：保护对特性模块的未授权加载  优先级高于预加载 会阻止预加载
        data: {
          animation: 'products',
          preload: true // 自定义预加载策略属性 为true进行预加载 为false 或 不设置该属性则不预先加载
        }
      },
      {
        path: 'two',
        component: TwooutletComponent,
        outlet: 'popup'
      },
      {
        path: '**',
        component: GetlostComponent,
        data: { animation: 'getlost' }
      }
    ]
  }
];
