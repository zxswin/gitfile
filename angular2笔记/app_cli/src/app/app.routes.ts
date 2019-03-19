import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    data: { animation: 'login' }
  },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  {
    path: 'home',
    loadChildren: './pages/pages.module#PagesModule',
    data: {
      animation: 'home',
      preload: true // 自定义预加载策略属性 为true进行预加载 为false 或 不设置该属性则不预先加载
    }
  },
  { path: '**', component: LoginComponent }
];
