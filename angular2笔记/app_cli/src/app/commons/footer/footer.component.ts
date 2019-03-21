import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../menu/menu.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.pug',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  footerClass: {[key: string]: boolean};

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.footerClass = {
      'i-open-w': true,
    };

    /** 订阅主菜单面板是否收缩的数据流  */
    this.menuService.MenuStateSource$.subscribe(v => {
      if (v) {
        // 菜单面板已经收缩了
        this.footerClass = {
          'i-collapsed-w': true,
        };
      } else {
        // 菜单展开了
        this.footerClass = {
          'i-open-w': true,
        };
      }
    });
  }
}
