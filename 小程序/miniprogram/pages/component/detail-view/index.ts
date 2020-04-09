Component({
  data: {},

  observers: {},

  properties: {
    /** 商品详情数据入参  */
    detailData: {
      type: Object,
      value: {
        /** 轮播图  */
        swiper: [],
        /** 商品详情描述  */
        describe: {
          /** 主标题  */
          title: '',
          /** 子标题 */
          subTitle: '',
          /** 描述信息 */
          detailInfo: '',
          /** 商品价格 */
          price: 0,
          /** 商品标准 */
          standards: ''
        }
      }
    },

    /** 计数器入参  */
    counterData: {
      type: Object,
      value: {
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
    }
  },

  /** 组件的生命周期  */
  lifetimes: {
    attached: function() {
      console.log('商品详情数据detailData', this.data.detailData);
    }
  },

  methods: {
    /** 点击了关闭按钮  */
    closeMask() {
      // 发送关闭事件到父组件
      this.triggerEvent('close', { close: true });
    },
    /** 点击计数器触发计数  */
    onCounter($event) {
      console.log('$event.detail.counterData', $event.detail.counterData);
      const counterData = $event.detail.counterData;
      this.setData({
        counterData: counterData
      });
    },
    /** 点击了加入购物车按钮  */
    addShopCar() {
      const counterData = this.data.counterData;
      this.data.detailData.counterData = counterData;
      const detailData = this.data.detailData;
      // 发送到父组件
      this.triggerEvent('addShopCar', {
        item: detailData,
        counter: counterData
      });
    }
  }
});
