import { Component, OnInit, Input } from '@angular/core';
import { TopBarService } from './top-bar.service';
import { Router } from '@angular/router';

interface IsSetShow {
  isShow: boolean; // 控制设置栏是否显示
}

interface FlexTopBar {
  [key: string]: boolean; // 使用计算属性
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.pug',
  styleUrls: ['./top-bar.component.less'],
  providers: [TopBarService]
})
export class TopBarComponent implements OnInit {
  @Input() setData: IsSetShow;

  defaultSetData: IsSetShow = {
    isShow: false
  };

  flexTopBar: FlexTopBar;

  constructor(private topBarService: TopBarService, private router: Router) {}

  ngOnInit() {
    this.setData = Object.assign({}, this.defaultSetData, this.setData);

    /* 如果登录页面 */
    if (!this.setData.isShow) {
      this.flexTopBar = {
        'i-flexed': true
      };
    }

    console.log('top-bar页面启动.....', this.setData);
  }

  /**
   * 退出登录
   */
  loginout() {
    this.router.navigate(['/login']);
  }
}
