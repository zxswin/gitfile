import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: '博巴斯托', bio: '勇敢的到来'}),

      new AdItem(HeroProfileComponent, {name: '智商博士', bio: '当他们聪明地来'}),

      new AdItem(HeroJobAdComponent,   {headline: '招聘几个职位',
                                        body: '今天提交你的简历！'}),

      new AdItem(HeroJobAdComponent,   {headline: '各部门对外开放',
                                        body: '今日适用'}),
    ];
  }
}
