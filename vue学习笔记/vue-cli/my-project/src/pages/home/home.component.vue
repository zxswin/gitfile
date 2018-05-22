<template lang="pug">
  div(class="home")
    p home页面
    p 状态管理 {{countNum}}
    p useName  {{useName}}
    button(@click="incrementAsync") 增加状态
    p(v-bind:title = "message") 绑定元素属性
    TopBar
    SearchInput
    router-link(to="/good-food") goodFood
    router-link(to="/animation") Animation
    router-link(to="/communication") 父子组件通讯
    router-link(to="/vue-ajax") ajax数据交互




</template>

<script>
import TopBar from '../../components/top-bar/top-bar.component';
import SearchInput from '../../components/search-input/search-input.component';

import { mapState } from 'vuex';  //mapState 辅助函数当生命多个计算属性的时候比较方便

export default {
  name: 'HomeComponent',
  components:{TopBar,SearchInput},
  data () {
    return {
      count1:this.$store.state.count,
      useName:this.$store.state.cart.useName,
      message:"message"
    }
  }, 
  beforeCreate:function(){ //创建前状态
    console.log('创建前状态');

  },

  created:function(){  //创建完毕状态
    console.log('创建完毕状态');
  },

  beforeMount:function(){ //挂载前状态
    console.log('挂载前状态');

  },
  mounted:function(){ //挂载结束状态
    console.log('挂载结束状态');

  },
  beforeUpdate:function(){ //更新前状态
    console.log('更新前状态');

  },
  updated:function(){ //更新完成状态
    console.log('');

  },
  beforeDestroy:function(){ //销毁前状态
    console.log('更新完成状态');

  },
  destroyed:function(){  //销毁完成状态
    console.log('销毁完成状态');

  },

  methods: {
    incrementAsync:function(){
      this.$store.dispatch('incrementAsync',100);
      this.count1 = this.$store.state.count;
      console.log('this.$store.state.count;',this.$store.state.count);
      console.log('this.$store.getters',this.$store.getters.doneTodosCount);
      console.log('getTodoById',this.$store.getters.getTodoById(10));
    }
  },
  computed:{
    countNum:function(){
      return this.$store.getters.getTodoById(10)
    }
  },
  watch:{
    // 如果 `count1` 发生改变，这个函数就会运行
    count1: function (newQuestion, oldQuestion) {
      console.log('数据发生了变化',oldQuestion,newQuestion);
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    console.log('渲染路由前调用……');
    next();
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('在当前路由改变，但是该组件被复用时调用……');
    next();
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('导航离开该组件的对应路由时调用……');
    next();
        
  }
}
</script>

<style src="./home.component.less" lang="less" scoped></style>
