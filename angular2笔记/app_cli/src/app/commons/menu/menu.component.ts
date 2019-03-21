import { Component, Input, Output, EventEmitter, OnInit , Inject} from '@angular/core';
import { Router, Route, ActivatedRoute , Params} from '@angular/router';
import { Location } from '@angular/common';
import { MenuConfig } from '@app-types/menu';
import { MenuService} from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.pug',
  styleUrls: ['./menu.component.less'],
})
export class MuneComponent implements OnInit {
  @Input() menuConfig: MenuConfig;
  @Output() collapsEvent = new EventEmitter<boolean>();


  menuDefaultConfig: MenuConfig = {
    isCollapsed: false,
    isNzOpen: false,
    menuItems: [],
  };

  currentUrl = '';

  constructor(private router: Router,
              private menuService: MenuService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    /** 页面数据初始化  */
    this.menuConfig = Object.assign({} , this.menuDefaultConfig , this.menuConfig);
    this.currentUrl = location.hash;
  }

  /** 点击菜单进行导航  */
  go(url: string) {
    event.stopPropagation(); // 阻止触发父元素的点击事件
    this.router.navigate([url]);
  }

  /** 确认当前的路由是否为激活状态 包括验证父子路由  */
  checkRouteState(url: string) {
    return location.hash.includes(url);
  }

  /** 点击展开或收缩菜单面板  */
  triggerClick() {
    this.menuConfig.isCollapsed = !this.menuConfig.isCollapsed;
    this.collapsEvent.emit(this.menuConfig.isCollapsed);
    /** 产生菜单面板是否收缩的数据流  */
    this.menuService.setCollapsed(this.menuConfig.isCollapsed);
  }

  /** 菜单展开时候的回调函数  */
  openHandler(url: string) {
    // 默认不展开
    if (!this.menuConfig.isNzOpen) {
      return;
    }
    this.currentUrl = url;
  }
}
