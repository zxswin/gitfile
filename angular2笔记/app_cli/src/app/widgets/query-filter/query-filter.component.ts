import { Component, OnInit, Input , EventEmitter , Output} from '@angular/core';


interface QueryFilterObj {
  /** 过滤栏控件的类型  */
  type?: 'input' | 'sin-select' | 'mul-select';
  /** 过滤栏控件的名称  */
  label?: string;
  /** 控件的字段  */
  field?: string;
  /** 控件的默认值  */
  value?: string;
  /** 控件的初始替代文字  */
  placeholder?: string;
  /** 多选控件数据  */
  multipSelectData?: Array<any>;
}


@Component({
  selector: 'app-query-filter',
  templateUrl: './query-filter.component.pug',
  styleUrls: ['./query-filter.component.less'],
})

export class QueryFilterComponent implements OnInit {
  @Input() queryFilterData: QueryFilterObj[];
  @Output() queryEvent = new EventEmitter<{field: string, value: string | string[]}[]>(); // 不能用on的前缀

  constructor() { }

  ngOnInit() {
    /** 数据初始化  */
    if (!this.queryFilterData) {
      this.queryFilterData = [];
    }
  }

  /** 点击了查询按钮  */
  queryData() {
    const queryResult: {field: string, value: string | string[]}[] = [];
    this.queryFilterData.forEach(item => {
      const json = {
        field: item.field.trim(),
        value: item.value.trim(),
      };
      queryResult.push(json);
    });
    this.queryEvent.emit(queryResult);
  }
}
