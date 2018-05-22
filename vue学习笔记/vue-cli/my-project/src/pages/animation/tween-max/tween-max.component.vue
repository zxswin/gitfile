<template lang="pug">
  div(class="tween-max")
    p tween-max 组件
    button(@click="twento") to 
    button(@click="twenfrom") from 
    button(@click="twenset") set 
    button(@click="twenfromto") fromTo 
    button(@click="bounce") bounce曲线
    button(@click="twenOnStart") onStart动画开始回调
    button(@click="twenstaggerFrom") staggerFrom多个元素执行统一动画
    button(@click="twenstaggerFromCycle") cycle多个元素执行属性的不同值
    button(@click="twenchain") 链式运动

    .box
      span.twto to 
      span.twfrom from 
      span.twset set  
      span.twfromto twenfromto 
      span.bounce bounce
      span.twstart twenOnStart

      span.twstaggerfrom staggerFrom
      span.twstaggerfrom staggerFrom
      span.twstaggerfrom staggerFrom
      span.twstaggerfrom staggerFrom
      span.twstaggerfrom staggerFrom

      span.twstaggerfromCycle staggerFromCycle
      span.twstaggerfromCycle staggerFromCycle
      span.twstaggerfromCycle staggerFromCycle
      span.twstaggerfromCycle staggerFromCycle
      span.twstaggerfromCycle staggerFromCycle

      span.twchain1 twchain
      span.twchain2 twchain
      span.twchain3 twchain

    .box
      .i-box
        span.i-control1
        span.i-control2
        span.i-control3
      button(@click="congo") 动起来
      button(@click="conplay") play 
      button(@click="conpause") pause 
      button(@click="conresume") resume
      button(@click="conreverse") reverse
      button(@click="contimeScale") timeScale
      button(@click="contimeScaleSlow") timeScaleSlow 废弃
      button(@click="conseek") seek
      button(@click="conrestart") restart
      button(@click="conprogress") progress

    .box
      p 3D动画效果
      .i-box
        span.i-3d 1
        span.i-3d 2
        span.i-3d 3
      button(@click="change3d") 启动3D变化
      
   
    

</template>

<script>
/**animation-css
 
 */
export default {
  name: 'TweenMax',
  data () {
    return {
      conT1 :new TimelineMax()
      
    }
  }, 
  created:function(){
  },
  mounted:function(){
   
  },
  methods: {
    twento:function(){
      var $twto = $('.twto');
      TweenMax.to($twto, 0.7, {x:'100%'});
    },
    twenfrom:function(){
      var $twfrom = $('.twfrom');
      TweenMax.from($twfrom, 2, {x: 0});
    },
    twenset:function(){
      var $twset = $('.twset');
      TweenMax.set($twset, {x: '100px'});
      TweenMax.set($twset, {x: '+=100px',delay: 1});
      TweenMax.set($twset, {x: '-50%', delay: 2});
    },
    twenfromto:function(){
      var $twfromto = $('.twfromto');
      TweenMax.fromTo($twfromto, 2, {x: '-=200px'}, {x: 150});
    },

    bounce:function(){
      var $bounce = $('.bounce');
      TweenMax.fromTo($bounce, 2, {x: '-=200px'}, {x: 150, ease: Bounce.easeOut});
    },

    twenOnStart:function(){
      var $twstart = $('.twstart');
      TweenMax.fromTo($twstart, 2, {y: '-=200px'}, {
        y: 100, 
        ease: Bounce.easeOut,
        onStart:this.twOnStart,
        onUpdate:this.twOnUpdate,
        onComplete:this.twOncomplete
      });
    },

    twOnStart:function(){
      console.log('动画开始前执行')
    },
    twOnUpdate:function(){
      console.log('动画进行中……')
    },
    twOncomplete:function(){
      console.log('动画结束')
    },

    twenstaggerFrom:function(){
      var $twstaggerfrom = $('.twstaggerfrom');
      TweenMax.staggerFrom(".twstaggerfrom", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

      // $(".btn").click(function(){
      //   TweenMax.staggerTo(".btn", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
      // });
    },

    twenstaggerFromCycle:function(){
     // var $twstaggerfromCycle = $('.twstaggerfromCycle');
      var tl = new TimelineMax();
      TweenMax.staggerFrom(".twstaggerfromCycle",0.5,{
        opacity:0,
        cycle:{
          x:[-100,100],   //x:[-100,100,200,300]  rotationX:[-90,90]
          //rotationX:[-90,90],
          //transformOrigin:["50% top -100","50% bottom 100"]
          //x:function(i){
            //return Math.random() * 300;
            //return (i+1) * 50;
          //},
          ease:function(i) {
            return Back.easeOut.config(i * 0.3);
          }
        }
      },0.1)
      tl.timeScale(0.5);
    },

    twenchain:function(){
      var tl = new TimelineMax();
      tl.to(".twchain1", 1, {x:550})
        .to(".twchain2", 1, {x:550})
        .to(".twchain3", 1, {x:550})
    },

    congo:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.pause();
    },
    conplay:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.play();
    },
    conpause:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.pause();
    },
    conresume:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.resume();
    },
    conreverse:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.reverse();
    },
    contimeScale:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.timeScale(5);
    },
    contimeScaleSlow:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      //this.conT1.timeScaleSlow(0.5); //好像没有定义这个函数
      console.log('this.conT1',this.conT1);
    },
    conseek:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.seek(1);
    },
    conrestart:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.restart();
    },
    conrestart:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.restart();
    },
    conprogress:function(){
      this.conT1.to(".i-control1", 1, {x:550})
        .to(".i-control2", 1, {x:550})
        .to(".i-control3", 1, {x:550})
      this.conT1.progress(0.5);
    },
    change3d:function(){
      TweenMax.to(".i-3d", 5, {rotationY:360, transformOrigin:"left top"});
    },

  },
  computed:{
  }
}
</script>

<style src="./tween-max.component.less" lang="less" scoped></style>
