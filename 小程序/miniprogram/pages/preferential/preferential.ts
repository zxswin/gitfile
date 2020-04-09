Component({
  data: {
    /** 展示用户收集信息面板 */
    isShowGetClient: false,
    /** 展示结算信息面板  */
    isShowSettle: false,
    /** 与购物车相关的数据  */
    shopCarData: {
      /** 是否展示购物结算栏  */
      isShowShopSettle: false,
      /** 购物车结算列表  */
      shopList: []
    },

    preferList: [
      {
        /** 类型  */
        type: 'prefer',
        /** 产品id  */
        id: 0,
        /** 图片地址  */
        imageSrc: '../../src/img/preferential-01.jpg',
        /** 剩余天数  */
        daysLeft: 5,
        /** 主标签  */
        mainLabel: '限量版',
        /** 是否能使用优惠券  */
        isCoupon: true,
        /**  商品主标题  */
        title: '套餐产品主标题1',
        /** 商品副标题  */
        subTitle: '套餐产品副标题1',
        /** 产品的标准  */
        standards: '套餐产品的标准1',
        /** 商品最终价格  */
        finallPrice: 188,
        /** 商品折扣  */
        discount: 1.2,
        /** 详情对象  */
        detail: {
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
            unique: 'prefer0',
            title: '套餐产品主标题1',
            subTitle: '套餐产品副标题1',
            detailInfo: '产品详情描述信息1',
            price: 188,
            standards: '套餐产品的标准1'
          }
        },
        /** 计数器对象  */
        counterData: {
          /** 当前的数量  */
          currentNum: 1,
          /** 最大数量  */
          max: 10000,
          /** 最小数量  */
          min: 0,
          /** 是否只显示添加按钮  */
          onlyShowAdd: false,
          /** 商品单价  */
          price: 188,
          /** 计数器步长  */
          step: 1,
          /** 商品总价格  */
          totalPrice: 188
        }
      },
      {
        /** 类型  */
        type: 'prefer',
        /** 产品id  */
        id: 1,
        /** 图片地址  */
        imageSrc: '../../src/img/preferential-01.jpg',
        /** 剩余天数  */
        daysLeft: 3,
        /** 主标签  */
        mainLabel: '至尊版',
        /** 是否能使用优惠券  */
        isCoupon: false,
        /**  商品主标题  */
        title: '套餐产品主标题2',
        /** 商品副标题  */
        subTitle: '套餐产品副标题2',
        /** 产品的标准  */
        standards: '套餐产品的标准2',
        /** 商品最终价格  */
        finallPrice: 166,
        /** 商品折扣  */
        discount: 1.6,
        /** 详情对象  */
        detail: {
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
            unique: 'prefer1',
            title: '套餐产品主标题2',
            subTitle: '套餐产品副标题2',
            detailInfo: '产品详情描述信息2',
            price: 188,
            standards: '套餐产品的标准2'
          }
        },
        /** 计数器对象  */
        counterData: {
          /** 当前的数量  */
          currentNum: 1,
          /** 最大数量  */
          max: 10000,
          /** 最小数量  */
          min: 0,
          /** 是否只显示添加按钮  */
          onlyShowAdd: false,
          /** 商品单价  */
          price: 166,
          /** 计数器步长  */
          step: 1,
          /** 商品总价格  */
          totalPrice: 166
        }
      },
      {
        /** 类型  */
        type: 'prefer',
        /** 产品id  */
        id: 2,
        /** 图片地址  */
        imageSrc: '../../src/img/preferential-01.jpg',
        /** 剩余天数  */
        daysLeft: 4,
        /** 主标签  */
        mainLabel: '白金版',
        /** 是否能使用优惠券  */
        isCoupon: true,
        /**  商品主标题  */
        title: '套餐产品主标题3',
        /** 商品副标题  */
        subTitle: '套餐产品副标题3',
        /** 产品的标准  */
        standards: '套餐产品的标准3',
        /** 商品最终价格  */
        finallPrice: 199,
        /** 商品折扣  */
        discount: 1.5,
        /** 详情对象  */
        detail: {
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
            unique: 'prefer2',
            title: '套餐产品主标题3',
            subTitle: '套餐产品副标题3',
            detailInfo: '产品详情描述信息3',
            price: 199,
            standards: '套餐产品的标准3'
          }
        },
        /** 计数器对象  */
        counterData: {
          /** 当前的数量  */
          currentNum: 1,
          /** 最大数量  */
          max: 10000,
          /** 最小数量  */
          min: 0,
          /** 是否只显示添加按钮  */
          onlyShowAdd: false,
          /** 商品单价  */
          price: 199,
          /** 计数器步长  */
          step: 1,
          /** 商品总价格  */
          totalPrice: 199
        }
      }
    ],
    /** 是否展示详情弹出层  */
    isShowDetail: false,
    /** 当前的详情信息  */
    currentDetail: {},
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
    }
  },

  methods: {
    onShow() {
      console.log('preferential页面重新展示了');
      this.shopListInit();
    },
    onLoad() {
      console.log('加载了');
      const preferList = this.data.preferList;
      (preferList as any[]).forEach(item => {
        item.unique = item.type + item.id;
      });

      this.setData({ preferList });
      this.shopListInit();
    },
    /** 获取并初始化购物车相关数据  */
    shopListInit() {
      console.log('执行了shopListInit');
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
        console.log('preferential获取到的全局购物车缓存数据', shopList);
      } catch (e) {
        console.log('preferential全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      this.setData({ 'shopCarData.shopList': shopList });
    },
    /** 点击了购物车按钮  */
    addShopCar($event) {
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
      } catch (e) {
        console.log('preferential全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      console.log('$event', $event);
      console.log('$event.detail.counter', $event.detail.counter);
      const productItem = $event.currentTarget.dataset.item;

      let counterData;
      if ($event.detail.counter) {
        counterData = $event.detail.counter;
      } else {
        counterData = productItem.counterData;
      }

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

      console.log('productItem', productItem);
      if (!findItem) {
        const shopItem = {
          counterData: counterData,
          standards: productItem.standards,
          title: productItem.title,
          unique: productItem.type + productItem.id
        };

        shopList.push(shopItem);
      }

      try {
        // 同步设置全局购物车缓存
        wx.setStorageSync('shopList', shopList);
      } catch (e) {
        console.log('preferential全局购物车缓存设置失败');
      }

      this.setData({
        'shopCarData.shopList': shopList,
        'shopCarData.isShowShopSettle': true,
        isShowDetail: false
      });
    },
    /** 购物车被隐藏的时候触发  */
    shopCarHide() {
      console.log('触发隐藏购物车');
      this.setData({
        'shopCarData.isShowShopSettle': false
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
    /** 点击了结算按钮  */
    settleBtnClick() {
      console.log('父组件接收点击结算按钮事件');
      this.setData({
        isShowGetClient: true,
        'shopCarData.isShowShopSettle': false
      });
    },
    /** 关闭弹出层  */
    closePopup() {
      this.setData({
        isShowGetClient: false,
        isShowSettle: false
      });
    },
    /** 关闭详情弹出层  */
    closeDetailView($event) {
      this.setData({
        isShowDetail: false
      });
    },
    /** 点击了产品列表  */
    productItemClick($event) {
      const productItem = $event.currentTarget.dataset.proditem;
      const currentDetail = productItem.detail;

      const index = $event.currentTarget.dataset.index;
      const price = currentDetail.describe.price;
      const counterData = this.data.counterData;

      counterData.currentNum = 1;
      counterData.price = price;
      counterData.totalPrice = price * counterData.currentNum;
      counterData.index = index;

      console.log('counterData110', counterData);

      this.setData({
        counterData: counterData,
        currentDetail,
        isShowDetail: true,
        currentProductItem: productItem
      });
      console.log('productItem', productItem);
      console.log('counterData', counterData);
    },
    /** 用户收集信息提交  */
    getClientInfo($event) {
      const clientInfo = $event.detail.clientInfo;
      console.log('用户收集信息提交', clientInfo);

      this.setData({
        isShowGetClient: false,
        isShowSettle: true,
        clientInfo
      });
    }
  }
});
