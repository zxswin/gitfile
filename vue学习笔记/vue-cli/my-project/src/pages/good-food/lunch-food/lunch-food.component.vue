<template lang="pug">
  div(class="lunchFood")
    p lunch-food页面
    router-link(to="/good-food/lunch-food/fruits") fruits页面
    router-link(to="/good-food/lunch-food/vegetables") vegetables页面
    
    router-view
</template>

<script>

export default {
  name: 'LunchFood',
  components:{},
  data () {
    return {
      
    }
  }, 
  methods: {
  },
  computed:{
  }
}
</script>

<style src="./lunch-food.component.less" lang="less" scoped></style>
