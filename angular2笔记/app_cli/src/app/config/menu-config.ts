import { MenuConfig , MenuDataObj } from '@app-types/menu';

const menuItems: MenuDataObj[] = [
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
        url: '/home/products/base',
        threeLevel: [
          {
            menuSite: 'AAA',
            title: '基金页面',
            url: '/home/products/base/fund',
          },
          {
            menuSite: 'AAB',
            title: '债券页面',
            url: '/home/products/base/bund/111',
          }
        ],
      },
      {
        menuSite: 'AB',
        title: '价格',
        url: '/home/products/price',
        threeLevel: [
          {
            menuSite: 'ABA',
            title: '价格管理',
            url: '/home/products/price/info',
          },
          {
            menuSite: 'ABB',
            title: '历史价格',
            url: '/home/products/price/histroy',
          }
        ]
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
        menuSite: 'BA',
        title: '账户设置',
        url: '/home/user/base'
      },
      {
        menuSite: 'BB',
        title: '账户查询',
        url: '/home/user/price'
      }
    ]
  },
  {
    icon: 'file',
    topLevel: [
      {
        menuSite: 'C',
        title: '订单',
        url: '/home/order'
      }
    ],
    secondLevel: [
      {
        menuSite: 'CA',
        title: '订单录入',
        url: '/home/order/base'
      },
      {
        menuSite: 'CB',
        title: '订单查询',
        url: '/home/order/price'
      }
    ]
  },
];

export const MENU_CONFIG: MenuConfig = {
  isCollapsed: false,
  isNzOpen: false,
  menuItems,
};
