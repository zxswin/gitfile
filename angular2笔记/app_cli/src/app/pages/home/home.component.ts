import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations/animations';
import { Router, Route, ActivatedRoute } from '@angular/router';

import { MENU_CONFIG } from '../../config/menu-config';

import { PreloadConfigService } from '../../config/preload-config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.less'],
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {

  menuConfig = MENU_CONFIG;

  topBarData = {
    isShow: true
  };

  title = 'home';
  modules;

  constructor(
    private route: ActivatedRoute,
    preloadConfigService: PreloadConfigService
  ) {
    this.modules = preloadConfigService.preloadedModules;
  }

  ngOnInit() {
    console.log('home页面启动8888.....', this.modules);
  }

  /** 接受菜单面板收缩或展开的子组件事件  */
  collapsEvent($event) {
    this.menuConfig.isCollapsed = $event;
  }
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animation
    );
  }
}
