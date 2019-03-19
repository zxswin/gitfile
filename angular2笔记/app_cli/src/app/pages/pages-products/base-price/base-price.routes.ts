import { RouterModule,Routes } from '@angular/router';
import { BasePriceComponent } from './base-price/base-price.component';
import { BaseInfoPriceComponent } from './base-price-info/base-price-info.component';
import { BasePriceHistroyComponent } from './base-price-histroy/base-price-histroy.component';


export const routes: Routes = [
    { path: '' , 
      component: BasePriceComponent,
      children: [
        {
          path: '',
          children:[
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path:'info' , component:BaseInfoPriceComponent },
            { path:'histroy' , component:BasePriceHistroyComponent },
          ]
        }
      ]
    },
]

