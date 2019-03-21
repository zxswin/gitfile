import { Component, OnInit , Input, TemplateRef } from '@angular/core';

import {
  NzTableData,
  TableCheckObj,
  TableData,
  ShowSort,
  Filter,
  CommonObj,
  TableMethod,
} from '@app-types/show.table';
import { HttpService } from '../../services/http.service';

import {
  NzDropdownContextComponent,
  NzDropdownService,
  NzMenuItemDirective
} from 'ng-zorro-antd';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.pug',
  styleUrls: ['./show-table.component.less']
})
export class ShowTableComponent implements OnInit {
  @Input() nzTableData: NzTableData;

  dropdown: NzDropdownContextComponent;

  displayData = []; // 要展示的数据

  showFieldOption: {
    isShowFieldHead: boolean;
    fieldChange: ($event) => void;
  } = {
    isShowFieldHead: true, // 显示字段表头
    fieldChange: $event => {} // 复选框状态改变时候的回调
  };

  // 表格初始化数据
  nzTableDefaultData: NzTableData = {
    pageIndex: 1, // 当前页码
    pageSize: 10, // 每页展示多少条数据
    nzScroll: { x: '1360px' }, // 为大于表格宽度的固定值或百分比
    nzFrontPagination: false, // 是否在前端对数据进行分页 用于本地数据加载
    nzBordered: false, // 是否展示表格边框
    loading: true // 是否显示页面加载中
  };

  /** 表格对外公用方法默认参数  */
  tableDefaultMethod: TableMethod = {
    refresh: () => {},
  };

  // 表格复选框的默认参数
  tableCheckDataDefault: TableCheckObj = {
    isShwo: true, // 是否展示复选框
    allChecked: false, // 全选按钮是否勾选
    indeterminate: false, // 部分选中状态是否展示
    checkData: [], // 选中的数据
    getCheckData: () => [], // 选中的数据
    refreshStatus: () => {}, // 重置复选框选中状态方法
    checkAll: (value: boolean) => {} // 全选方法
  };

  // 表格数据处理默认参数
  tableDefaultData: TableData = {
    localData: [], // 本地数据
    url: '', // 接口请求的ip地址
    total: 0, // 总页数
    param: {}, // 调用接口需要传递的参数
    columnData: [], // 表格需要渲染表头的数据
    sortValue: '', // 排序的值 ascend | descend | null
    sortKey: '', // 排序的字段
    renderData: (reset?: boolean) => {}
  };

  // 表格字段排序功能是否添加
  tableDefaultSort: ShowSort = {
    sortEvent: ($event: { key: string; value: string }) => {}
  };

  // 表格字段过滤功能
  tableDefaultFilter: Filter = {
    updateFilter: ($event, field: string | number): void => {} // 过滤控制函数
  };

  /** 构造函数 */
  constructor(
    private https: HttpService,
    private nzDropdownService: NzDropdownService
  ) {}

  ngOnInit(): void {
    this.tableInit(); // 表格数据初始化
  }

  /** 表格数据初始化 */
  tableInit() {
    /** 排序逻辑数据初始化 */
    this.nzTableData.sort = Object.assign(
      {},
      this.tableDefaultSort,
      this.nzTableData.sort
    );
    /** 复选框数据初始化 */
    this.nzTableData.check = Object.assign(
      {},
      this.tableCheckDataDefault,
      this.nzTableData.check
    );
    /** 过滤数据初始化 */
    this.nzTableData.filter = Object.assign(
      {},
      this.tableDefaultFilter,
      this.nzTableData.filter
    );
    /** 初始化表格渲染数据 */
    this.nzTableData.tableData = Object.assign(
      {},
      this.tableDefaultData,
      this.nzTableData.tableData
    );

    /** 表格公用方法初始化  */
    this.nzTableData.method = Object.assign(
      {},
      this.tableDefaultMethod,
      this.nzTableData.method
    );

    console.log('this.nzTableData.action' , this.nzTableData.action);

    /** 表格数据初始化 */
    this.nzTableData = Object.assign(
      {},
      this.nzTableDefaultData,
      this.nzTableData
    );

    this.renderData(); // 渲染表格数据的逻辑
    this.nzTableCheck(); // 复选框选中逻辑
    this.nzTableSort(); // 控制表格字段排序的逻辑
    this.ngTableFilter(); // 控制表格字段过滤功能

    this.fieldShow(); // 控制哪些字段需要展示
    this.publicMethod(); // 表格对外暴露的公用方法

    this.nzTableData.tableData.renderData(); // 表格数据渲染
  }

  /** 渲染表格数据的逻辑 */
  renderData() {
    /** 判断是否为本地数据  加载本地数据 */
    if (this.nzTableData.nzFrontPagination) {
      this.nzTableData.tableData.renderData = (
        reset: boolean = false
      ): void => {
        this.nzTableData.loading = false; // 隐藏加载中图标

        // 当页数改变的时候 重置页数为第一页
        if (reset) {
          this.nzTableData.pageIndex = 1;
        }

        let data = [...this.nzTableData.tableData.localData];

        // 进行过滤操作
        const filterKeysArr: string[] = [];
        const paramkeysArr: string[] = Object.keys(
          this.nzTableData.tableData.param
        );
        paramkeysArr.forEach(val => {
          if (
            this.nzTableData.tableData.param[val] &&
            (this.nzTableData.tableData.param[val] as string[]).length !== 0
          ) {
            filterKeysArr.push(val);
          }
        });

        const filterFunc = item => {
          const filterFlagArr: boolean[] = [];
          filterKeysArr.forEach((val: string) => {
            filterFlagArr.push(
              this.nzTableData.tableData.param[val].includes(item[val])
            );
          });
          return filterFlagArr.every(itemVal => itemVal);
        };

        data = data.filter(filterFunc);

        // 进行排序操作
        if (
          this.nzTableData.tableData.sortKey &&
          this.nzTableData.tableData.sortValue
        ) {
          this.displayData = data.sort((a, b) => {
            if (this.nzTableData.tableData.sortValue === 'ascend') {
              return (
                a[this.nzTableData.tableData.sortKey] -
                b[this.nzTableData.tableData.sortKey]
              );
            }
            return (
              b[this.nzTableData.tableData.sortKey] -
              a[this.nzTableData.tableData.sortKey]
            );
          });
        } else {
          this.displayData = data;
        }
      };
      return;
    }

    /* 渲染表格数据的方法 加载远程数据 */
    this.nzTableData.tableData.renderData = (reset: boolean = false): void => {
      // 当页数改变的时候 重置页数为第一页
      if (reset) {
        this.nzTableData.pageIndex = 1;
      }

      // 排序字段值更新
      this.nzTableData.tableData.param.sortKey = this.nzTableData.tableData.sortKey;
      this.nzTableData.tableData.param.sortValue = this.nzTableData.tableData.sortValue;

      this.nzTableData.tableData.param.pageSize = this.nzTableData.pageSize;

      this.nzTableData.tableData.param.pageIndex = this.nzTableData.pageIndex;

      this.nzTableData.loading = true; // 展示加载中图标

      // 调用接口 获取表格数据
      this.https
        .apiServer(this.nzTableData.tableData.url)
        .subscribe((data: CommonObj) => {
          this.nzTableData.loading = false; // 隐藏加载中图标
          this.nzTableData.tableData.total = data.total; // 这里是数据的总条数 应该是后端接口返回
          this.displayData = data.data; // 获取表格数据
        });
    };
  }

  /** 表格对外暴露的公用方法  */
  publicMethod() {
    this.nzTableData.method.refresh = () => {
      this.nzTableData.tableData.renderData(); // 表格数据渲染
    };
  }

  /** 复选框选中逻辑 */
  nzTableCheck() {
    /** 获取中的数据  */
    this.nzTableData.check.getCheckData = () => {
      this.nzTableData.check.checkData = this.displayData
        .filter(value => !value.disabled)
        .filter(value => value.checked === true);
      return this.nzTableData.check.checkData;
    };

    /** 更新复选框选中状态 */
    this.nzTableData.check.refreshStatus = () => {
      // 过滤当前页面数据中value.disabled=false(不可选的数据) 并 检查过滤结果数据中是否全部为选中状态 如果全部选中返回 true
      const allChecked = this.displayData
        .filter(value => !value.disabled)
        .every(value => value.checked === true);
      // 过滤当前页面数据中value.disabled=false(不可选的数据) 并 检查过滤结果数据中是全部为未选中状态  如果全部未选中返回 false
      const allUnChecked = this.displayData
        .filter(value => !value.disabled)
        .every(value => !value.checked);
      this.nzTableData.check.allChecked = allChecked;
      this.nzTableData.check.indeterminate = !allChecked && !allUnChecked; // 选择某条的情况下 indeterminate 为true
    };

    /** 点击复选框的全选按钮  */
    this.nzTableData.check.checkAll = (value: boolean) => {
      this.displayData.forEach(data => {
        if (!data.disabled) {
          data.checked = value; // 如果数据为可选择 则改变其值
        }
      });
      this.nzTableData.check.refreshStatus(); // 根据当前数据 更新数据选中状态
    };
  }

  /** 控制表格字段排序的逻辑 */
  nzTableSort() {
    // 更新排序方法
    this.nzTableData.sort.sortEvent = ($event: {
      key: string;
      value: string;
    }): void => {
      this.nzTableData.tableData.sortKey = $event.key;
      this.nzTableData.tableData.sortValue = $event.value;
      this.nzTableData.tableData.renderData(); // 更新数据
    };
  }

  /** 控制表格字段过滤功能 */
  ngTableFilter() {
    /** 过滤字段更新方法 */
    this.nzTableData.filter.updateFilter = (
      $event,
      field: string | number
    ): void => {
      this.nzTableData.tableData.param[field] = $event;
      this.nzTableData.tableData.renderData(true);
    };
  }

  /** 右键菜单 */
  contextMenu($event: MouseEvent, template: TemplateRef<void>, data): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  /** 右键菜单关闭 */
  close(e: NzMenuItemDirective): void {
    this.dropdown.close();
  }

  /** 表格字段的选择性展示 字段显示  */
  fieldShow() {
    this.nzTableData.tableData.columnData.forEach((v: CommonObj) => {
      v.checked = true;
    });
    this.showFieldOption.fieldChange = $event => {
      this.refreshFieldHead();
    };
  }

  /** 刷新表头  */
  refreshFieldHead() {
    this.showFieldOption.isShowFieldHead = false;
    setTimeout(() => {
      this.showFieldOption.isShowFieldHead = true;
    }, 1);
  }
}
