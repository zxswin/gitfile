import { RouterModule, Routes } from '@angular/router';
import { PagesProductsComponent } from './pages-products.component';

import { AuthGuard } from '../../auth/auth.guard'; // 引入守卫服务



export const routes: Routes = [
  {
    path: '',
    component: PagesProductsComponent,
    canActivate: [AuthGuard], // 提供路由守卫
    // 无组件路由：分组路由，而不需要组件，方便添加子组件路由守卫 而不需要每个都去单独添加
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard], // 提供子路由守卫
        children: [
          { path: '', redirectTo: 'base', pathMatch: 'full' },
          {
            path: 'base',
            loadChildren: './base-info/base-info.module#BaseInfoModule',
            data: {
              animation: 'products',
              preload: true  // 自定义预加载策略属性 为true进行预加载 为false 或 不设置该属性则不预先加载
            }
          },

          {
            path: 'price',
            loadChildren: './base-price/base-price.module#BasePriceModule',
            data: {
              animation: 'products',
              preload: true  // 自定义预加载策略属性 为true进行预加载 为false 或 不设置该属性则不预先加载
            }
          },

        ]
      }
    ]
  },
]

