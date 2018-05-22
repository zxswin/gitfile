<template lang="pug">
  div(class="communication")
    p 父子组件通讯实例
    router-link(to="/") 去home页面
    router-view
</template>

<script>

export default {
  name: 'Communication',
  components:{},
  data () {
    return {
      
    }
  }, 
 
  created:function(){  //创建完毕状态
  },

  mounted:function(){ //挂载结束状态
  },

  methods: {
  },
  computed:{
  }
}
</script>

<style src="./communication.component.less" lang="less" scoped></style>
