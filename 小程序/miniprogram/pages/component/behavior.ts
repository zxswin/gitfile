module.exports = Behavior({
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log("在组件实例进入页面节点树时执行111");
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log("在组件实例被从页面节点树移除时执行111");
    }
  },
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function() {},
  methods: {
    myBehaviorMethod: function() {}
  }
});
