import { Component, OnInit, Input } from '@angular/core';

/** 多选数据接口 */
interface MultipSelectData {
  /** 下来列表选项  */
  listOfOption?: { label: string; value: string | number }[];
  /** 下拉选项的选中值  */
  listOfSelectedValue?:
    | string[]
    | number[]
    | Array<string | number>
    | number
    | string;
  /** 控制类型 多选 标签 单选  多选的时候自带搜索功能 */
  nzMode?: 'multiple' | 'tags' | 'default';
  /** 是否支持显示 左边清空小按钮  */
  nzAllowClear?: boolean;
  /** 是否禁用  */
  nzDisabled?: boolean;
  /** 下来菜单的样式 */
  nzDropdownStyle?: { [key: string]: any };
  /** 选择框默认文字  */
  nzPlaceHolder?: string;
  /** 让单选模式可以搜索  */
  nzShowSearch?: boolean;
  /** 最多选中多少个选项  */
  nzMaxMultipleCount?: number;
  /** 限制最多显示多少个tag  */
  nzMaxTagCount?: number;
  /** 选中的 nz-option 发生变化时，调用此函数	EventEmitter<any[]>  */
  ngModelChange?: ($event: any[] | string | number) => void;
  /** 子组件获取选中值的方法  */
  method?: { [key: string]: () => any };
}

@Component({
  selector: 'app-input-select',
  templateUrl: './input-multiple-select.component.pug',
  styleUrls: ['./input-multiple-select.component.less']
})
export class InputMultipleSelectComponent implements OnInit{
  @Input() multipSelectData: MultipSelectData;
  multipDefaultSelectData: MultipSelectData = {
    nzMaxMultipleCount: 1,
    nzMaxTagCount: 1,
    listOfOption: [],
    listOfSelectedValue: [],
    nzMode: 'default',
    nzAllowClear: false,
    nzDisabled: false,
    nzDropdownStyle: {},
    nzPlaceHolder: '全部',
    nzShowSearch: false,
    ngModelChange: $event => {},
    method: {
      getOptionValue: () => []
    }
  };

  ngOnInit(): void {
    /** 多选控件数据初始化  */
    this.multipSelectData = Object.assign(
      {},
      this.multipDefaultSelectData,
      this.multipSelectData
    );
    /** 对下拉选项进行转换处理  */
    /** 选中对应下拉选项后的回调  */
    this.multipSelectData.ngModelChange = $event => {
      this.multipSelectData.listOfSelectedValue = $event;
    };
    /** 子组件获取选中值的方法  */
    this.multipSelectData.method.getOptionValue = () => {
      return this.multipSelectData.listOfSelectedValue;
    };
  }
}
