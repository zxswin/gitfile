Component({
  data: {},

  observers: {},

  properties: {
    /** 组件入参  */
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
    // attached: function() {
    //   const counterData = this.data.counterData;
    //   this.setData({ counterData });
    // }
  },

  methods: {
    /** 点击了减号  */
    minusTap() {
      /** 当前计算的数量  */
      const counterData = this.data.counterData;
      const price = counterData.price;
      const min = counterData.min;
      const step = counterData.step;
      if (counterData.currentNum - 1 < min) return;

      counterData.currentNum -= step;

      /** 当前计算的总价  */
      counterData.totalPrice = counterData.currentNum * price;

      this.setData({ counterData });
      // 发送最终计数器数据到父组件
      this.triggerEvent('counterdata', { counterData });
    },
    /** 点击了加号  */
    addTap() {
      /** 当前计算的数量  */
      const counterData = this.data.counterData;
      const price = counterData.price;
      const max = counterData.max;
      const step = counterData.step;

      if (counterData.currentNum + 1 > max) return;

      counterData.currentNum += step;

      /** 当前计算的总价  */
      counterData.totalPrice = counterData.currentNum * price;

      this.setData({ counterData });

      // 发送最终计数器数据到父组件
      this.triggerEvent('counterdata', { counterData });
    }
  }
});
