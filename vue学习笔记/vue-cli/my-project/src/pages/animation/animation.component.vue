<template lang="pug">
  div(class="animation")
    p(class="tar") 动画页面
    router-link(to="/animation/show-hide") 经典动画
    router-link(to="/animation/animation-css") animation-css
    router-link(to="/animation/css-three") css3动画
    router-link(to="/animation/velocity") velocity动画
    router-link(to="/animation/tween-max") TweenMax动画
    router-link(to="/home") 返回首页


    
    transition(:name="transitionName",mode="out-in")
      router-view

</template>

<script>


export default {
  name: 'Animation',
  components:{},
  data () {
    return {
      transitionName:"slide-left"
      
    }
  }, 

  created:function(){  //创建完毕状态
    console.log('animation 创建完毕状态');
  },

  methods: {
  },
  computed:{
  },
  watch:{
    '$route' (to, from) {
      const toDepth = to.path.indexOf('animation-css')
      this.transitionName = toDepth > 0 ? 'slide-right' : 'slide-left'
    }
    
  },
}
</script>

<style src="./animation.component.less" lang="less" scoped></style>
