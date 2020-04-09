import { MenuConfig } from './config';
Component({
  data: {
    /** 与购物车相关的数据  */
    shopCarData: {
      /** 是否展示购物结算栏  */
      isShowShopSettle: false,
      /** 购物车结算列表  */
      shopList: []
    },

    /** 计数器初始化数据  */
    counterData: {
      /** 当前在列表中选购商品的索引  */
      index: 0,
      /** 是否仅显示加号按钮  */
      onlyShowAdd: false,
      /** 当前展示的计算值  */
      currentNum: 1,
      /** 单价  */
      price: 0,
      /** 总价格  */
      totalPrice: 0,
      /** 最小计算值  */
      min: 1,
      /** 最大计算值  */
      max: 10000,
      /** 计算步长  */
      step: 1
    },

    /** 当前展示产品类型 */
    type: 'fish',
    /** 当前产品列表的定位id  */
    listAnchorId: 'fish1',
    /** 菜单配置项 */
    menuConfig: MenuConfig,
    /** 是否展示产品详情 */
    isShowDetail: false,
    /** 是否展示结算弹出层  */
    isShowSettle: false,
    /** 展示用户收集信息面板 */
    isShowGetClient: false
  },

  methods: {
    // 自定义分享内容
    onShareAppMessage(res) {
      console.log('自定义转发内容', res);
      if (res.from === 'menu') {
        // 来自主菜单的转发按钮
        console.log('res.target', res.target);
      }
      return {
        title: '潮味生鲜在线选购商城',
        path: '/pages/index/index',
        imageUrl: '../../src/img/sqrcode.jpg'
      };
    },
    onShow() {
      console.log('index页面重新展示了');
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
        console.log('index.ts全局购物车缓存数据', shopList);
      } catch (e) {
        console.log('index.ts全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      this.setData({ 'shopCarData.shopList': shopList });
    },
    onLoad() {
      console.log('menuConfig', MenuConfig);
      wx.showShareMenu({
        withShareTicket: true
      });
      /** 全部的产品列表 */
      const produceLists: any[] = [];
      /** 个品类的最后一个dom Id 列表 */
      this.data.typeLastItemDomIdList = [];
      /** 各种类的最好一个产品dom id标识 */
      MenuConfig.forEach(item => {
        const itemList = item.list;
        const itemListLast = itemList[itemList.length - 1];
        const itemLastDomId = itemListLast.type + itemListLast.id;

        const json = {
          lastDomId: itemLastDomId,
          type: itemListLast.type,
          id: itemListLast.id
        };

        this.data.typeLastItemDomIdList.push(json);

        produceLists.push(...itemList);
      });

      produceLists.forEach(item => {
        item.typeId = item.type + item.id;
        item.detail = {
          swiper: [
            {
              src: '../../../src/lists/fish/01/swiper01.jpg',
              title: '轮播图1',
              id: 1
            },
            {
              src: '../../../src/lists/fish/01/swiper01.jpg',
              title: '轮播图2',
              id: 2
            },
            {
              src: '../../../src/lists/fish/01/swiper01.jpg',
              title: '轮播图3',
              id: 3
            }
          ],
          describe: {
            unique: item.id + item.type,
            title: item.title,
            subTitle: '副标题',
            detailInfo: '产品详情描述信息',
            price: item.price,
            standards: '一斤三条，每条约3.3两'
          }
        };
      });

      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
        console.log('index.ts全局购物车缓存数据', shopList);
      } catch (e) {
        console.log('index.ts全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      this.setData({
        produceLists: produceLists,
        'shopCarData.shopList': shopList
      });

      // 获取所有锚点距离顶部的距离
      this.data.typeLastItemDomIdList.forEach(lastItemDom => {
        wx.createSelectorQuery()
          .select(`#${lastItemDom.lastDomId}`)
          .boundingClientRect(function(rect) {
            console.log(`#${lastItemDom.lastDomId}`, rect.top);
            lastItemDom.top = rect.top;
          })
          .exec();
      });
    },

    /** 点击了菜单  */
    menuTap(item) {
      console.log('点击的菜单', item.currentTarget.dataset.type);
      const type = item.currentTarget.dataset.type;

      this.setData({
        type: type,
        listAnchorId: type + '1'
      });
    },
    /** 点击了选购按钮  */
    choose($event) {
      console.log('点击了选购按钮', $event);
      const chooseItem = $event.currentTarget.dataset.item;
      /** 是否有库存  */
      const stock = chooseItem.stock;
      if (!stock) {
        wx.showToast({
          title: '该商品已经售罄',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      const index = $event.currentTarget.dataset.index;
      const price = chooseItem.price;
      const counterData = this.data.counterData;

      counterData.currentNum = 1;
      counterData.price = price;
      counterData.totalPrice = price * counterData.currentNum;
      counterData.index = index;

      // 设置计数器数据并弹出遮罩层
      this.setData({
        counterData: counterData,
        isShowDetail: true,
        currentDetail: chooseItem.detail
      });
    },
    /** 点击关闭弹层  */
    closeMask() {
      this.setData({
        isShowDetail: false
      });
    },

    /** 菜单栏滚动事件  */
    menuScroll($event) {
      console.log('菜单栏滚动了', $event);
    },

    /** 产品列表滚动事件   */
    produceListScroll($event) {
      /** 根据产品列表滚动当前需要定位到的菜单  */
      const typeLastItemDomIdList = this.data.typeLastItemDomIdList;
      const lastItem = typeLastItemDomIdList[typeLastItemDomIdList.length - 1];

      /** 菜单滚动配置  */
      for (let i = 0; i < typeLastItemDomIdList.length; i++) {
        // 设置滚动到最后
        if (
          $event.detail.scrollTop >
          typeLastItemDomIdList[typeLastItemDomIdList.length - 2].top - 180
        ) {
          this.setData({
            type: lastItem.type
          });
          return;
        }

        // 其他菜单滚动配置
        const item = typeLastItemDomIdList[i];

        const preOffsetTop = i > 0 ? typeLastItemDomIdList[i - 1].top : 0;
        if (
          this.data.type !== item.type &&
          $event.detail.scrollTop > preOffsetTop &&
          $event.detail.scrollTop <= item.top - 50
        ) {
          this.setData({
            type: item.type
          });
          return;
        }
      }

      return;
    },

    /** 滚动到底部  */
    scrolltolower() {
      const typeLastItemDomIdList = this.data.typeLastItemDomIdList;
      const lastItem = typeLastItemDomIdList[typeLastItemDomIdList.length - 1];
      // 设置滚动到最后
      this.setData({
        type: lastItem.type
      });
    },

    /** 点击了购物车按钮  */
    addShopCar($event) {
      console.log('点击了详情里的购物车', $event);
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
        console.log('获取缓存的shopList', shopList);
      } catch (e) {
        console.log('index.ts全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      const productItem = $event.detail.item.describe;
      const counterData = $event.detail.counter;
      counterData.min = 0;
      const currentNum = counterData.currentNum;

      // 如果新添加的商品在购物车列表中已经存在则在原有数量的基础上进行累加处理
      const findItem = (shopList as any[]).find(
        item => productItem.unique === item.unique
      );

      // 如果选购的商品再购物车列表中已经存在则累加数量

      if (findItem) {
        (shopList as any[]).forEach(item => {
          if (item.unique === productItem.unique) {
            item.counterData.currentNum += currentNum;
            item.counterData.totalPrice =
              item.counterData.price * item.counterData.currentNum;
          }
        });
      }

      // 如果选购的商品在购物车列表中并不存在则往购物车列表中添加该产品
      if (!findItem) {
        const shopItem = {
          counterData: counterData,
          standards: productItem.standards,
          title: productItem.title,
          unique: productItem.unique
        };

        shopList.push(shopItem);
      }

      try {
        // 同步设置全局购物车缓存
        wx.setStorageSync('shopList', shopList);
        console.log('设置缓存的shopList', shopList);
      } catch (e) {
        console.log('index.ts全局购物车缓存设置失败');
      }

      this.setData({
        'shopCarData.shopList': shopList,
        'shopCarData.isShowShopSettle': true,
        isShowDetail: false
      });
    },

    /** 关闭详情弹出层  */
    closeDetailView($event) {
      const closeFlag = $event.detail.close;
      this.setData({
        isShowDetail: !closeFlag,
        isShowSettle: !closeFlag,
        isShowGetClient: !closeFlag
      });
    },
    /** 用户收集信息提交  */
    getClientInfo($event) {
      const closeFlag = $event.detail.close;
      const clientInfo = $event.detail.clientInfo;
      console.log('客户信息获取', clientInfo);
      this.setData({
        isShowGetClient: !closeFlag,
        isShowSettle: closeFlag,
        clientInfo
      });
    },
    /** 购物车组件数据发生变化父组件需同步更新  */
    shopCarDataChange($event) {
      console.log('购物车组件数据发生变化父组件需同步更新', $event);
      const shopCarData = $event.detail.shopCarData;
      this.setData({
        shopCarData
      });
    },
    /** 购物车被隐藏的时候触发  */
    shopCarHide() {
      console.log('触发隐藏购物车');
      this.setData({
        'shopCarData.isShowShopSettle': false
      });
    },
    /** 点击了结算按钮  */
    settleBtnClick() {
      console.log('父组件接收点击结算按钮事件');
      this.setData({
        isShowGetClient: true,
        'shopCarData.isShowShopSettle': false
      });
    },
    /** 展示购物车组件  */
    showShopCarMarkBox() {
      console.log('展示购物车组件');
      // 如果购物车列表为空
      const shopList = wx.getStorageSync('shopList');
      if (!shopList || !Array.isArray(shopList) || !shopList.length) {
        wx.showToast({
          title: '当前购物车没有任何商品，请选购！',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      this.setData({
        'shopCarData.isShowShopSettle': true
      });
    },
    /** 跳转到独立的详情界面  */
    navigateToDetail($event) {
      console.log('准备跳转独立的详情界面');

      console.log('$event', $event);

      const item = $event.currentTarget.dataset.item;

      // 已经售罄
      if (!item.stock) {
        wx.showToast({
          title: '该商品已经售罄',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      const barTitle = item.title;

      wx.navigateTo({
        url: `../../indepages/detail-view/detail-view?barTitle=${barTitle}`,
        success: function() {
          console.log('成功后的回调');
        },
        fail: function() {
          console.log('失败后的回调');
        },
        complete: function() {
          console.log('结束后的回调(成功，失败都会执行)');
        }
      });
    }
  }
});
