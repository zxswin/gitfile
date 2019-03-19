# query-filter.component 过滤栏控件
## 字段说明
``` bash
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
```
## 使用

### 初始化控件数据
``` bash
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
```

### 在pug中使用
```bash
app-query-filter([queryFilterData]="queryFilterData",(queryEvent)="onQueryEmit($event)")
```
### 点击了查询按钮产生的数据流
```bash
onQueryEmit($event) {
  console.log('点击查询后的数据' , $event);
}
```







