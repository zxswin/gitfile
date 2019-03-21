import { RouterModule , Routes } from '@angular/router';
import { BaseInfoComponent } from './base-info.component';
import { BaseInfoFundComponent } from '../base-info-fund/base-info-fund.component';
import { BaseInfoBundComponent } from '../base-info-bund/base-info-bund.component';


import { CanDeactivateGuard } from '../../../auth/can-deactivate.guard';
import { ResolverService } from '../../../auth/resolver.service';


export const routes: Routes = [
    { path: '' ,
      component: BaseInfoComponent,
      children: [
        {
          path: '',
          children: [
            { path: '', redirectTo: 'fund', pathMatch: 'full' },
            { path: 'fund' , component: BaseInfoFundComponent },
            { path: 'bund/:id' ,
              component: BaseInfoBundComponent,
              canDeactivate: [CanDeactivateGuard], // 添加CanDeactivate 守卫,要离开导航的时候
              resolve: {
                // 添加 Resolve: 预先获取组件数据设置
                bund: ResolverService
              }
            },
          ]
        }
      ]
    },
]

