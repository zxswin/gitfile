Component({
  data: {},
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  observers: {},

  properties: {
    /** 遮罩的初始化入参  */
    markData: {
      type: Object,
      value: {
        /** 遮罩中主要内容的展示位置  */
        position: 'center',
        /** 遮罩中的内容距离顶部的位置  */
        top: '0rpx'
      }
    }
  },

  /** 组件的生命周期  */
  lifetimes: {},

  methods: {
    /** 点击了遮罩层  */
    markClick() {
      // 发送最终计数器数据到父组件
      this.triggerEvent('maskClick', true);
    }
  }
});
