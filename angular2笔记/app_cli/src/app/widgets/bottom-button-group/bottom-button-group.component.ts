import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../../commons/menu/menu.service';

interface ButtonGroupObj {
  /** 按钮的名称  */
  name?: string;
  /** 按钮的图标  */
  icon?: string;
  /** 是否启用幽灵按钮  */
  nzGhost?: boolean;
}

@Component({
  selector: 'app-bottom-button',
  templateUrl: './bottom-button-group.component.pug',
  styleUrls: ['./bottom-button-group.component.less']
})
export class BottomButtonGroupComponent implements OnInit {
  @Input() buttonGroupOption: ButtonGroupObj[];
  @Output() buttonEvent = new EventEmitter<string>(); // 不能用on的前缀

  buttonWidthClass: { [key: string]: boolean };

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // 数据初始化
    this.buttonWidthClass = {
      'button-open-w': true
    };

    if (!this.buttonGroupOption) {
      this.buttonGroupOption = [];
    }
    // 订阅菜单变化事件
    this.menuService.MenuStateSource$.subscribe(v => {
      if (v) {
        // 菜单面板已经收缩了
        this.buttonWidthClass = {
          'button-collapsed-w': true
        };
      } else {
        // 菜单展开了
        this.buttonWidthClass = {
          'button-open-w': true
        };
      }
    });
  }

  /** 按钮点击事件  */
  buttonClick(name: string) {
    this.buttonEvent.emit(name);
  }
}
