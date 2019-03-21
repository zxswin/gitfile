import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Inject
} from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MenuConfig, MenuDataObj, MenuItem } from '@app-types/menu';
import { MENU_CONFIG } from '../../config/menu-config';
import { ThreeLevNavService } from '../three-lev-nav/three-lev-nav.service';

@Component({
  selector: 'app-three-nav',
  templateUrl: './three-lev-nav.component.pug',
  styleUrls: ['./three-lev-nav.component.less']
})
export class ThreeLevNavComponent implements OnInit {
  menuData: MenuConfig = MENU_CONFIG;
  levelThreeNav: MenuItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private threeLevNavService: ThreeLevNavService,
  ) {}

  ngOnInit() {
    this.levelThreeData(location.hash);
  }

  /** 通过 当前地址信息 生成三级菜单的渲染数据 和 产生面包屑导航数据流
   * @param locationHash 当前页面地址
   */
  levelThreeData(locationHash: string) {
    /**  三级菜单渲染数据 */
    let levelThreeData: MenuItem[] = [];
    /** 面包屑导航数据流  */
    const threeLevNavBreadcrumb: string[] = [];

    for (const itme of this.menuData.menuItems) {
      // 获取三级菜单渲染数据后跳出循环
      if (levelThreeData.length > 0) {
        break;
      }
      const secondLevel = itme.secondLevel;
      secondLevel.forEach((val: MenuItem) => {
        if (!val.threeLevel) {
          return;
        }
        val.threeLevel.forEach((v: MenuItem) => {
          if (locationHash.includes(v.url)) {
            levelThreeData = val.threeLevel;
            threeLevNavBreadcrumb.push(itme.topLevel[0].title);
            threeLevNavBreadcrumb.push(val.title);
            threeLevNavBreadcrumb.push(v.title);
          }
        });
      });
    }
    /** 渲染三级菜单的数据  */
    this.levelThreeNav = levelThreeData;
    /** 产生面包屑导航的数据流  */
    this.threeLevNavService.renderNav(threeLevNavBreadcrumb);
  }

  /** 点击菜单进行导航  */
  go(url: string) {
    /** 产生面包屑导航的数据流  */
    this.levelThreeData(url);
    this.router.navigate([url]);
  }

  /** 确认当前的路由是否为激活状态 包括验证父子路由  */
  checkRouteState(url: string) {
    return location.hash.includes(url);
  }
}
