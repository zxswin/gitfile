<template lang="pug">
  div.showHide
  
    div.show-box
      button(v-on:click="fade=!fade") 消失隐藏
      transition(name="fade")
        p.p-show(v-if="fade") hello

    div.show-box
      button(v-on:click="slideFade=!slideFade") CSS过渡
      transition(name="slide-fade")
        p.p-show(v-if="slideFade") hello

    div.show-box
      button(v-on:click="bounce=!bounce") CSS动画
      transition(name="bounce")
        p.p-show(v-if="bounce") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.

    div.show-box
      button(v-on:click="custom=!custom") 自定义过渡类名
      transition(name="custom",enter-active-class="animated tada",leave-active-class="animated bounceOutRight")
        p.p-show(v-if="custom") hello

    div.show-box
      button(v-on:click="hookjs=!hookjs") javscript钩子函数
      transition(name="hookjs",v-on:before-enter="beforeEnter",v-on:enter="enter",v-on:leave="leave",v-bind:css="false")
        p.p-show(v-if="hookjs") hello
   
    div.show-box
      button(v-on:click="initRender=!initRender") 初始渲染过渡
      transition(name="initRender",appear,appear-class="render-appear-class",appear-to-class="render-appear-to-class",appear-active-class="render-appear-active-class")
        p.p-show(v-if="initRender") hello

    div.show-box
      button(v-on:click="transition = !transition") 过渡行为
      transition(name="transition",mode="out-in")
        button(v-if="transition",key="btn1") on
        button(v-if="!transition",key="btn2") off

    div.show-box
      button(v-on:click="changeComponent") 多组件过渡动态组件
      transition(name="component",mode="out-in")
        component(v-bind:is="view")
    
    div.show-box
      button 列表过渡
      button(v-on:click="add") Add 
      button(v-on:click="remove") Remove 
      button(v-on:click="shuffle") Shuffle 
      
      transition-group(name="list",tag="p")
        span.list-item(v-for="item in items",v-bind:key="item") {{ item }}

    div.show-box
      button 列表交错过渡
      input(v-model="query")
      transition-group(name="staggered-fade",tag="ul",v-bind:css="false", v-on:before-enter="beforeEnterList",v-on:enter="enterList",v-on:leave="leaveList")
        li(v-for="(item, index) in computedList",v-bind:key="item.msg", v-bind:data-index="index") {{ item.msg }}
    
    div.show-box
      button 动态过渡
      label Fade In:
      input(type="range",v-model="fadeInDuration" ,min="0" ,v-bind:max="maxFadeDuration")
      label Fade Out:
      input(type="range",v-model="fadeOutDuration", min="0", v-bind:max="maxFadeDuration")
      transition(v-bind:css="false",v-on:before-enter="beforeEnterRange",v-on:enter="enterRange",v-on:leave="leaveRange")
        p(v-if="showRange") hello
      p
        button(v-if="stop", v-on:click="stop = false; showRange = false") Start animating
        button(v-else , v-on:click="stop = true;showRange = true") Stop it!

</template>

<script>

import Va from '../components/v-a/v-a.component';
import Vb from '../components/v-b/v-b.component';

export default {
  name: 'ShowHide',
  components:{Va,Vb},
  data () {
    return {
      fade:true,
      slideFade:true,
      bounce:true,
      custom:true,
      hookjs:true,
      initRender:true,
      transition:true,
      component:true,
      showRange:true,
      view: 'Va',
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      query: '',
      list: [
      { msg: 'Bruce Lee' },
      { msg: 'Jackie Chan' },
      { msg: 'Chuck Norris' },
      { msg: 'Jet Li' },
      { msg: 'Kung Fury' }
    ],
    fadeInDuration: 1000,
    fadeOutDuration: 1000,
    maxFadeDuration: 1500,
    stop: true
    }
  }, 

  mounted: function () {
    this.show = false
  },

  created:function(){  //创建完毕状态
  },

  methods: {
    beforeEnter: function (el) {
      console.log('beforeEnter');
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      console.log('enter');
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      console.log('leave');
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    },


    beforeEnterList: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enterList: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '0.16rem' },
          { complete: done }
        )
      }, delay)
    },
    leaveList: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    },


    changeComponent:function(){
      if(this.view =='Va'){
        this.view = 'Vb'
      }else{
        this.view = 'Va'
      }
    },

    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    },


    beforeEnterRange: function (el) {
      el.style.opacity = 0
    },
    enterRange: function (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete: function () {
            done()
            if (!vm.stop) vm.show = false
          }
        }
      )
    },
    leaveRange: function (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete: function () {
            done()
            vm.show = true
          }
        }
      )
    }


  },
  computed:{
    computedList: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  watch:{
    
  },
}
</script>

<style src="./show-hide.component.less" lang="less" scoped></style>
