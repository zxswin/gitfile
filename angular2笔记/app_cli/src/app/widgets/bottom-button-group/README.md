# bottom-button-group 底部操作按钮组件
## 字段说明
``` js
interface ButtonGroupObj {
  /** 按钮的名称  */
  name?: string;
  /** 按钮的图标  */
  icon?: string;
  /** 是否启用幽灵按钮  */
  nzGhost?: boolean;
}

```
## 使用

### 初始化控件数据
``` js
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
```

### 在pug中使用
``` pug
app-bottom-button([buttonGroupOption]="buttonGroupOption" , (buttonEvent)="buttonEvent($event)")
```
### 点击了查询按钮产生的数据流
``` js
/** 点击了按钮组  */
buttonEvent($event) {
  console.log('$event' , $event);
}
```







