<template lang="pug">
  div(class="css-three")
    .i-animation
      h1.simple 简单动画
      h1.i-bounce bounce
      h1.i-text transform3d效果
        span.i-t-span
    .i-transform
      .i-t-container(@click = "clickTrans")
        .i-tc-tran 1
        .i-tc-tran 2
        .i-tc-tran 3
        .i-tc-tran 4
        .i-tc-tran 5
        .i-tc-tran 6
        .i-tc-tran 7
        .i-tc-tran 8
        .i-tc-tran 9
    
</template>

<script>
/**CSS3动画

 */
export default {
  name: 'CssThree',
  data () {
    return {
      deg :0
      
    }
  }, 
  created:function(){
    
  },
  mounted:function(){
  },
  methods: {
    clickTrans:function(){
      console.log('已经点击了容器了');
      this.deg+=40;
      $('.i-t-container').css({
        "transform": "rotateY("+this.deg+"deg)"
      })

    }
  },
  computed:{
  }
}
</script>

<style src="./css-three.component.less" lang="less" scoped></style>
