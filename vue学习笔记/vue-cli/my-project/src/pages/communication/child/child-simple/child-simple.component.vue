<template lang="pug">
  div(class="child-simple")
    p 子组件{{message.msg}}
    button(@click="incrementCounter") {{ counter }}
</template>

<script>

export default {
  name: 'ChildSimple',
  components:{},
  props: ['message'],
  data () {
    return {
      counter: 0
      
    }
  }, 
 
  created:function(){  //创建完毕状态
    
  },

  mounted:function(){ //挂载结束状态
   

  },

  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
  computed:{
  }
}
</script>

<style src="./child-simple.component.less" lang="less" scoped></style>
