<template lang="pug">
  div(class="goodFood")
    p good-food页面
    router-link(to="/") 去home页面
    router-link(to="/good-food/all-food:222?age=18") 去all-food页面
    router-link(to="/good-food/lunch-food") lunch-food页面
    router-view
</template>

<script>

export default {
  name: 'GoodFood',
  components:{},
  data () {
    return {
      
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
  },
  computed:{
  }
}
</script>

<style src="./good-food.component.less" lang="less" scoped></style>
