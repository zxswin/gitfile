Component({
  data: {
    /** 遮罩组件入参相关数据  */
    markData: {
      position: 'center'
    },
    /** 商品总价格  */
    totalPrice: 0,
    /** 结算价格  */
    clearPrice: 0,
    /** 费用列表  */
    fearList: [
      {
        fearType: '包装费用',
        fearRemark: '纸箱*1、泡沫箱*1、保温袋*1、冰袋*2',
        fearValue: 10
      },
      {
        fearType: '顺丰快递',
        fearRemark: '寄往广州首重13/公斤,续重2元/公斤,商品重量3公斤',
        fearValue: 24
      }
    ],
    /** 优惠券列表  */
    couponList: [
      {
        couponType: '首单减免',
        couponRemark: '凡第一次购买的用户享受折扣',
        couponValue: 10
      }
    ],
    /** 是否展示截图界面  */
    isShowScreenshot: false
  },

  observers: {},

  properties: {
    /**  客户信息  */
    clientInfo: {
      type: Object,
      value: {
        /**  客户姓名  */
        name: '',
        /**  手机号码  */
        phoneNum: '',
        /** 省市区  */
        regionList: [],
        region: '',
        /** 街道地址  */
        address: '',
        /** 邮编  */
        postcode: '',
        /** 订单备注  */
        remark: ''
      }
    },
    /** 订单信息  */
    shopList: {
      type: Object,
      value: []
    }
  },

  /** 组件的生命周期  */
  lifetimes: {
    attached: function() {
      console.log('组件获取到的', this.data.clientInfo);
      console.log('购物车中的商品列表', this.data.shopList);
      // 生成订单明细列表数据
      const orderList = [];
      const shopList = this.data.shopList;
      let totalPrice = 0;
      shopList.forEach(item => {
        const counterData = item.counterData;
        const json = {
          name: item.title,
          standards: item.standards,
          amount: counterData.currentNum,
          price: counterData.price,
          totalPrice: counterData.totalPrice
        };
        orderList.push(json);
        totalPrice += counterData.totalPrice;
      });

      console.log('orderList', orderList);

      // 计算结算价格
      /** 费用  */
      let fearPrice = 0;
      const fearList = this.data.fearList;
      fearList.forEach(item => {
        fearPrice += item.fearValue;
      });

      /** 优惠费用  */
      let couponPrice = 0;
      const couponList = this.data.couponList;
      couponList.forEach(item => {
        couponPrice += item.couponValue;
      });

      const clearPrice = totalPrice + fearPrice - couponPrice;

      console.log('clearPrice', clearPrice);

      // 创建生成截图所需要的数据
      const screenshotData = {
        orderList,
        totalPrice,
        clearPrice,
        clientInfo: this.data.clientInfo,
        fearList: this.data.fearList,
        couponList: this.data.couponList
      };

      this.setData({
        orderList,
        totalPrice,
        clearPrice,
        screenshotData
      });
    }
  },

  methods: {
    /** 点击了关闭按钮  */
    closeMask() {
      // 发送关闭事件到父组件
      this.triggerEvent('close', { close: true });
    },
    /** 显示截图界面  */
    showScreenshot() {
      this.setData({
        isShowScreenshot: true
      });
    },
    /** 关闭画布组件  */
    closeCanvasView() {
      this.setData({
        isShowScreenshot: false
      });
    },
    /** 阻止点击主内容取事件冒泡  */
    contentClick() {
      console.log('阻止点击主内容取事件冒泡');
    }
  }
});
