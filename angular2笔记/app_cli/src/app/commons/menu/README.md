# menu.component 组件使用说明

## 参数说明

``` ts
interface MenuItem {
  /** 菜单标识  */
  menuSite:string;
  /** 菜单标题  */
  title:string;
  /** 菜单的url  */
  url:string;
}

export interface MenuDataObj {
  /** 一级导航菜单的图标  */
  icon?: string;
  /** 一级导航菜单项  */
  topLevel?: MenuItem[];
  /** 二级导航菜单项  */
  secondLevel?: MenuItem[];
}

export interface MenuConfig {
  /** 是否展开或收缩菜单  */
  isCollapsed?: boolean;
  /** 是否值展开当前活动菜单面板 其他菜单面板收缩  */
  isNzOpen?: boolean;
  /** 菜单渲染的数据  */
  menuItems?: MenuDataObj[];

}
```

## 使用
### ts文件
``` ts
 menuItems = [
    {
      icon: 'team',
      topLevel: [
        {
          menuSite: 'A',
          title: '金融产品',
          url: '/home/products'
        }
      ],
      secondLevel: [
        {
          menuSite: 'AA',
          title: '基本资讯',
          url: '/home/products/base'
        },
        {
          menuSite: 'AB',
          title: '价格',
          url: '/home/products/price'
        }
      ]
    },
    {
      icon: 'user',
      topLevel: [
        {
          menuSite: 'B',
          title: '账户',
          url: '/home/user'
        }
      ],
      secondLevel: [
        {
          menuSite: 'AA',
          title: '账户设置',
          url: '/home/user/base'
        },
        {
          menuSite: 'AB',
          title: '账户查询',
          url: '/home/user/price'
        }
      ]
    },
    {
      icon: 'file',
      topLevel: [
        {
          menuSite: 'B',
          title: '订单',
          url: '/home/order'
        }
      ],
      secondLevel: [
        {
          menuSite: 'AA',
          title: '订单录入',
          url: '/home/order/base'
        },
        {
          menuSite: 'AB',
          title: '订单查询',
          url: '/home/order/price'
        }
      ]
    },
  ];

  menuConfig = {
    isCollapsed: false,
    isNzOpen: false,
    menuItems: this.menuItems,
  };

```
### pug文件
``` pug
app-menu([menuConfig]="menuConfig",(collapsEvent)="collapsEvent($event)")
```

### ts文件中 接受子组件的事件
``` ts
/** 接受菜单面板收缩或展开的子组件事件  */
collapsEvent($event) {
  this.menuConfig.isCollapsed = $event;
}
```
