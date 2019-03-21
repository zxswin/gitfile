import { Component , OnInit} from '@angular/core';
import {
  AlertModalService,
  RenderData
} from '../../../widgets/alert-modal/alert-modal.service';
import { AppApiProgressService } from '../../../widgets/app-api-progress/app-api-progress.service';

import { OperationState} from '@app-types/global';

import { HttpService } from '../../../services/http.service';

import { NzTableData } from '@app-types/show.table';

@Component({
  selector: 'app-base-info-fund',
  templateUrl: './base-info-fund.component.pug',
  styleUrls: ['./base-info-fund.component.less']
})
export class BaseInfoFundComponent implements OnInit {

  isContentShow = true;
  operationStatu: OperationState = {
    add: false,
    modify: false,
    delete: false,
  };



  constructor(
    private alertModalService: AlertModalService,
    private http: HttpService,
    private appApiProgressService: AppApiProgressService
  ) {}

  buttonGroupOption = [
    {
      name: '全选',
      icon: 'check',
      nzGhost: true,
    },
    {
      name: '新增',
      icon: 'plus-circle',
      nzGhost: false,
    },
    {
      name: '修改',
      icon: 'edit',
      nzGhost: true,
    },
    {
      name: '删除',
      icon: 'delete',
      nzGhost: true,
    },
  ];
  queryFilterData = [
    {
      type: 'input',
      label: '控件文字1',
      field: 'name1',
      value: '1',
      placeholder: '请输入1',
    },
    {
      type: 'sin-select',
      label: '控件文字2',
      field: 'name2',
      value: '2',
      placeholder: '请输入2',
      multipSelectData: {
        listOfOption: [
          { label: '基金市场', value: 1 },
          { label: '债券市场债券市场债券市场债券市场债券市场', value: '2' },
          { label: 'caaaaaaa', value: '3' }
        ],
        listOfSelectedValue: '2',
        method: {}
      }
    },
    {
      type: 'input',
      label: '控件文字3',
      field: 'name3',
      value: '3',
      placeholder: '请输入3',
    },
  ];







  multipSelectData = {
    listOfOption: [
      { label: '基金市场', value: 1 },
      { label: '债券市场债券市场债券市场债券市场债券市场', value: '2' },
      { label: 'caaaaaaa', value: '3' }
    ],
    listOfSelectedValue: '2',
    method: {}
  };

  multipSelectData1 = {
    listOfOption: [
      { label: 'a', value: 1 },
      { label: 'b', value: '2' },
      { label: 'c', value: '3' }
    ],
    listOfSelectedValue: '3',
    method: {}
  };
  title = 'base-info-fund';

  data = [
    {
      name: '1',
      gender: '女',
      email: '12345678@qq.com',
      phone: '1'
    },
    {
      name: '3',
      gender: '女',
      email: '12345678@qq.com',
      phone: '11'
    },
    {
      name: '2',
      gender: '男',
      email: '12345678@qq.com',
      phone: '3'
    },
    {
      name: '6',
      gender: '女',
      email: '12345678@qq.com',
      phone: '5'
    },
    {
      name: '9',
      gender: '男',
      email: '12345678@qq.com',
      phone: '7'
    },
    {
      name: '5',
      gender: '男',
      email: '12345678@qq.com',
      phone: '99'
    },
    {
      name: '2',
      gender: '女',
      email: '12345678@qq.com',
      phone: '888'
    },
    {
      name: '2',
      gender: '女',
      email: '12345678@qq.com',
      phone: '666'
    },
    {
      name: '1',
      gender: '男',
      email: '12345678@qq.com',
      phone: '3'
    },
    {
      name: '7',
      gender: '女',
      email: '12345678@qq.com',
      phone: '5'
    },
    {
      name: '8',
      gender: '男',
      email: '12345678@qq.com',
      phone: '2'
    },
    {
      name: '4',
      gender: '男',
      email: '12345678@qq.com',
      phone: '1'
    }
  ];

  tableLocalData: NzTableData = {
    nzFrontPagination: true,
    pageSize: 10,
    nzBordered: true,
    action: [
      {
        eventName: '明细',
        action: $event => {
          this.detailClick($event);
        },
        isShow: true
      },
      {
        eventName: '修改',
        action: $event => {
          this.modifyClick($event);
        },
        isShow: true
      },
      {
        eventName: '删除',
        action: $event => {
          this.deleteClick($event);
        },
        isShow: true
      }
    ],
    check: {
      isShwo: true // 是否展示多选框
    },
    method: {
    },
    tableData: {
      localData: this.data,
      columnData: [
        {
          field: 'name',
          fieldName: '姓名',
          sort: true,
          filter: {
            isShowFilter: true,
            list: [{ text: '男', value: '1' }, { text: '女', value: '2' }]
          }
        },
        {
          field: 'gender',
          fieldName: '性别',
          sort: true,
          filter: {
            isShowFilter: true,
            list: [{ text: '男', value: '男' }, { text: '女', value: '女' }]
          }
        },
        {
          field: 'phone',
          fieldName: '电话',
          sort: true,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        }
      ]
    }
  };

  nzTableData = {
    pageSize: 10,
    nzBordered: true,
    action: [
      {
        eventName: '明细',
        action: $event => {
          this.detailClick($event);
        },
        isShow: true
      },
      {
        eventName: '修改',
        action: $event => {
          this.modifyClick($event);
        },
        isShow: true
      },
      {
        eventName: '删除',
        action: $event => {
          this.deleteClick($event);
        },
        isShow: true
      }
    ],
    check: {
      isShwo: true // 是否展示多选框
    },
    method: {},
    tableData: {
      url: 'produceInfo', // 接口请求的ip地址
      total: 100,
      param: {
        page: 1,
        results: 10,
        sortField: '',
        sortOrder: '',
        gender: ''
      },
      columnData: [
        {
          field: 'name',
          fieldName: '姓名',
          sort: true,
          filter: {
            isShowFilter: true,
            list: [{ text: '男', value: '1' }, { text: '女', value: '2' }]
          }
        },
        {
          field: 'gender',
          fieldName: '性别',
          sort: true,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'email',
          fieldName: '邮箱',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        },
        {
          field: 'phone',
          fieldName: '电话',
          sort: false,
          filter: {
            isShowFilter: false,
            list: []
          }
        }
      ]
    }
  };

  clickchek() {
    console.log('远程加载选中的', (this.nzTableData.check as any).getCheckData());
  }



  detailClick($event) {
    console.log('点击了明细按钮了', $event);
    this.isContentShow = false;
  }

  modifyClick($event) {
    console.log('点击了修改按钮了', $event);
  }

  deleteClick($event) {
    console.log('点击了删除按钮了', $event);
  }

  alertModal() {
    const renderData: RenderData = {
      isVisible: false,
      title: '自定义对话框标题',
      contentHtml: `<h1 style="color:red;">哈哈哈哈哈哈<h1>`,
      handleOk: () => {},
      handleCancel: () => {},
      serverParam: {
        type: 'info',
        title: '标题222222',
        content: '内容333333333',
        nzWrapClassName: 'vertical-center-modal'
        // width:600,
      }
    };

    // 把最新RenderData的数据加到服务的数据流中
    (renderData.handleOk = () => {
      console.log('点击了确认按钮');
    }),
      (renderData.handleCancel = () => {
        console.log('点击了取消按钮');
      });
    this.alertModalService.render(renderData);
  }

  alertModal2() {
    const renderData: RenderData = {
      isVisible: false,
      title: '自定义1',
      okText: '确认11',
      cancelText: '取消111'
      // contentHtml:`<h1 style="color:red;">哈哈哈哈哈哈888<h1>`,
      // handleOk:() =>{},
      // handleCancel: () => {},
    };

    // 把最新RenderData的数据加到服务的数据流中
    // renderData.handleOk = () =>{
    //   console.log('点击了确认按钮');
    // },
    // renderData.handleCancel = () => {
    //   console.log('点击了取消按钮')
    // }
    this.alertModalService.render(renderData);
  }

  ngOnInit() {
    // this.http.apiServer('produceInfo').subscribe(v => {
    //   console.log('接口返回数据' , v);
    // });
    setTimeout(() => {
      this.appApiProgressService.show();
    }, 500);

    setTimeout(() => {
      this.appApiProgressService.hide();
    }, 1000);
  }

  queryData() {
    console.log(
      '选中了multipSelectData',
      (this.multipSelectData.method as any).getOptionValue()
    );
  }

  /** 点击了查询按钮  */
  onQueryEmit($event) {
    console.log('点击查询后的数据' , $event);
    console.log(this.tableLocalData);
    console.log('method' , (this.tableLocalData.method as any).refresh);
    this.tableLocalData.tableData.localData.splice(0 , 9);
    this.tableLocalData.method.refresh(); // 刷新表格
  }

  clickchek2() {
    console.log('this.tableLocalData', this.tableLocalData);
    console.log(
      '本地加载选中的数据',
      (this.tableLocalData.check as any).getCheckData()
    );
  }

  /** 点击了按钮组  */
  buttonEvent($event) {
    console.log('$event' , $event);
  }

  modifyBtnClick() {
    this.isContentShow = true;
  }

  cancelBtnClick() {
    this.isContentShow = true;
  }
}
