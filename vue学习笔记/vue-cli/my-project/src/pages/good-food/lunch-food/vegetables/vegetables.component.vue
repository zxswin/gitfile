<template lang="pug">
  div(class="fruits")
    p vegetables 页面 
    input(type="text",v-model="a")
</template>

<script>

export default {
  name: 'Vegetables',
  components:{},
  data () {
    return {
      a: 1,
      b: 2,
      c: 3
    }
  }, 
  methods: {
  },
  computed:{
  },
  watch: {
     // 监控a变量变化的时候，自动执行此函数
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 深度 watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    }
  }
}
</script>

<style src="./vegetables.component.less" lang="less" scoped></style>
