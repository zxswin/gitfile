import { Component, OnInit, Input , EventEmitter , Output} from '@angular/core';


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
  styleUrls: ['./bottom-button-group.component.less'],
})

export class BottomButtonGroupComponent implements OnInit {
  @Input() buttonGroupOption: ButtonGroupObj[];
  @Output() buttonEvent = new EventEmitter<string>(); // 不能用on的前缀

  constructor() { }

  ngOnInit() {
    /** 数据初始化  */
    if (!this.buttonGroupOption) {
      this.buttonGroupOption = [];
    }
  }

  /** 按钮点击事件  */
  buttonClick(name: string) {
    this.buttonEvent.emit(name);
  }
}
