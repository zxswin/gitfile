Component({
  data: {
    /** 购物车数量  */
    shopAmounts: 0,
    /** 结算价格  */
    clearPrices: 0,
    /** 遮罩组件入参相关数据  */
    markData: {
      position: 'bottom'
    }
  },

  observers: {
    // shopAmounts: data => {
    //   //单个监听
    //   console.log('数量改变了888', data);
    // }
  },

  properties: {
    shopCarData: {
      type: Object,
      value: {
        /** 是否展示购物结算栏  */
        isShowShopSettle: false,
        /** 购物车结算列表  */
        shopList: [
          {
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
              price: 20,
              /** 计数器步长  */
              step: 1,
              /** 商品总价格  */
              totalPrice: 20
            },
            /** 产品的标准  */
            standards: '产品的标准1',
            /** 产品的标题  */
            title: '产品的标题1'
          },
          {
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
              price: 20,
              /** 计数器步长  */
              step: 1,
              /** 商品总价格  */
              totalPrice: 20
            },
            /** 产品的标准  */
            standards: '产品的标准2',
            /** 产品的标题  */
            title: '产品的标题2'
          }
        ]
      }
    }
  },

  /** 组件的生命周期  */
  lifetimes: {
    ready() {
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
      } catch (e) {
        console.log('shop-car全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      console.log('购物车组件在生命周期中重新加载', shopList);
      const shopInfo = this.getShopInfo(shopList);
      this.setData({
        shopAmounts: shopInfo.shopAmounts,
        clearPrices: shopInfo.clearPrices
      });
      this.shopAnimationControll('show');
    }
  },

  methods: {
    maskClick() {
      console.log('遮罩层被点击了');
      /** 隐藏购物车动画  */
      this.shopAnimationControll('hide');
      this.triggerEvent('shopCarHide', false);
    },
    /** 展示购物车遮罩  */
    showMarkBox() {
      this.shopAnimationControll('show');
    },
    /** 点击了购物袋按钮  */
    shopBagClick() {
      this.showShopListAnimation();
    },
    /** 隐藏及展示动画  */
    shopAnimationControll(type: string) {
      /** 隐藏  */
      if (type === 'hide') {
        const shopListHideAnimation = this.createAnimationobj(500);
        const settleBoxHideAnimation = this.createAnimationobj(500, 300);

        this.setData({
          shopListAnimation: shopListHideAnimation.export(),
          settleAnimation: settleBoxHideAnimation.export()
        });

        setTimeout(() => {
          this.setData({
            'shopCarData.isShowShopSettle': false
          });
        }, 600);
      }
      /** 展示  */
      if (type === 'show') {
        this.setData({
          'shopCarData.isShowShopSettle': true
        });

        const settleBoxShowAnimation = this.createAnimationobj(0);

        this.setData({
          settleAnimation: settleBoxShowAnimation.export()
        });
      }
    },

    /** 展示shopList动画  */
    showShopListAnimation() {
      const shopListShowAnimation = this.createAnimationobj(0);
      this.setData({
        shopListAnimation: shopListShowAnimation.export()
      });
    },
    /** 产生一个微信动画对象  */
    createAnimationobj(top: number, delay = 0) {
      const animation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease',
        delay
      });
      animation.top(top).step();
      return animation;
    },
    shopboxClick() {
      console.log('点击了购物车列表了用于阻止事件冒泡');
    },
    onShopCounterClick($event) {
      // 更新产品计数器数据
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
      } catch (e) {
        console.log('shop-car全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      const shopCarData = this.data.shopCarData;
      const index = $event.currentTarget.dataset.index;
      const counterData = $event.detail.counterData;
      const shopAmounts = counterData.currentNum;

      shopList[index].counterData = counterData;
      console.log('更新产品计数器数据', index, shopList);

      // 当数量是0的时候从购物车列表中删除
      if (!shopAmounts) {
        (shopList as any[]).splice(index, 1);
      }

      const shopInfo = this.getShopInfo(shopList);

      this.setData({
        'shopCarData.shopList': shopList,
        shopAmounts: shopInfo.shopAmounts,
        clearPrices: shopInfo.clearPrices
      });

      // 通知父组件更新最新的购物车组件数据
      this.triggerEvent('shopCarDataChange', { shopCarData });

      // 如果shopList数量为空,此时需要隐藏购物车列表组件
      if (!this.data.shopAmounts) {
        this.shopAnimationControll('hide');
        this.triggerEvent('shopCarHide', false);
      }

      try {
        // 同步设置全局购物车缓存
        wx.setStorageSync('shopList', shopList);
      } catch (e) {
        console.log('shop-car全局购物车缓存设置失败');
      }
    },
    /** 通过购物车列表更新购物袋数量及结算价格  */
    getShopInfo(shopList: any[]) {
      // 更新其他展示数据
      let shopAmounts = 0;
      let clearPrices = 0;

      shopList.forEach(item => {
        const counter = item.counterData;
        shopAmounts += counter.currentNum;
        clearPrices += counter.totalPrice;
      });

      const resultData = {
        shopAmounts,
        clearPrices
      };
      return resultData;
    },
    /** 清空购物车  */
    clearShopCar() {
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
      } catch (e) {
        console.log('shop-car全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      const shopCarData = this.data.shopCarData;
      (shopList as any[]).length = 0;

      console.log('清空购物车', shopList);

      try {
        // 同步设置全局购物车缓存
        wx.setStorageSync('shopList', shopList);
      } catch (e) {
        console.log('shop-car全局购物车缓存设置失败');
      }

      this.setData({
        'shopCarData.shopList': shopList,
        'shopCarData.isShowShopSettle': false
      });

      this.shopAnimationControll('hide');
      this.triggerEvent('shopCarHide', false);
      this.triggerEvent('shopCarDataChange', { shopCarData });
    },
    /** 点击了结算按钮  */
    settleBtnClick() {
      console.log('点击了结算按钮');
      this.triggerEvent('settleBtnClick', true);
    }
  }
});
