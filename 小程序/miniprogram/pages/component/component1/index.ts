const myBehavior = require("../behavior");

Component({
  behaviors: [myBehavior],

  data: {
    // 这里是一些组件内部数据
    text: 0,
    sum: 0,
    numberA: 1,
    numberB: 2
  },

  observers: {
    "numberA, numberB": function(numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: numberA + numberB
      });
    }
  },

  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: "default value888999"
    }
  },

  methods: {
    // 这里是一个自定义方法
    customMethod: function() {
      this.setData({
        numberA: 10,
        numberB: 2
      });
      const preson: Obj = {
        name: "name",
        age: 1
      };
      this.setData({
        text: preson.name
      });
    },
    onTap: function() {
      const myEventDetail = {
        a: 1
      }; // detail对象，提供给事件监听函数
      this.triggerEvent("myevent", myEventDetail);
    }
  }
});
