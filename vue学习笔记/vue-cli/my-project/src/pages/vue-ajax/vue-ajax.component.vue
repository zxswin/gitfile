<template lang="pug">
  div(class="vue-ajax")
    p vue-resource用于服务器端ajax数据交互
    button(@click="getData") ajax获取接口数据get
    button(@click="postData") ajax获取接口数据post
</template>

<script>

export default {
  name: 'VueAjax',
  components:{},
  data () {
    return {
    }
  }, 
 
  created:function(){  //创建完毕状态
  },

  mounted:function(){ //挂载结束状态
    console.log('this.$http',this.$http);

  },

  methods: {
    //如何实现不带后缀访问php文件 关键词搜索
    getData:function(){
      console.log('开始获取ajax数据');
      this.$http.get('/api/get/getApi.php',{params:{a:1}})
      .then((response) => {
          console.log('成功返回数据',response)
      })
      .catch(function(response) {
          console.log('返回数据失败',response)
      })
    },
    postData:function(){
      console.log('开始获取ajax数据');
      this.$http.post('/api/get/getApi.php',{a:1},{params:{a:1}})
      .then((response) => {
          console.log('成功返回数据',response)
      })
      .catch(function(response) {
          console.log('返回数据失败',response)
      })
    
    }
  },
  computed:{
  }
}
</script>

<style src="./vue-ajax.component.less" lang="less" scoped></style>
