<template lang="pug">
  div(class="simple-demo")
    p 简单例子
    p total:{{ total }}
    button(@click="changeMsg") 改变message
    ChildSimple(v-bind:message = "parentMsg",@increment="incrementTotal") 
    ChildSimple(v-bind:message = "parentMsg",@increment="incrementTotal")
    //-相当于是通过子组件触发了increment 自定义事件 
</template>

<script>
import ChildSimple from '../child/child-simple/child-simple.component';
export default {
  name: 'SimpleDemo',
  components:{ChildSimple},
  data () {
    return {
      parentMsg:{
        msg:'hello world!'
      },
      total: 0
      
    }
  }, 
  created:function(){  //创建完毕状态
  },

  mounted:function(){ //挂载结束状态
  },

  methods: {
    changeMsg:function(){
      this.parentMsg.msg = 'welcome'
    },
    incrementTotal: function () {
      this.total += 1
    }
  },
  computed:{
  }
}
</script>

<style src="./simple-demo.component.less" lang="less" scoped></style>
