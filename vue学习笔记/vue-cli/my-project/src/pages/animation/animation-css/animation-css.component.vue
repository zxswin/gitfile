<template lang="pug">
  div(class="animation-css")
    p animation-css 组件
    h1.yourElement.animated.bounce  bounceAnimation
    h1.animated.bounce  bounce
    h1.animated.flash  flash
    h1.animated.pulse  pulse
    h1.animated.rubberBand  rubberBand
    h1.animated.shake  shake
    h1.animated.headShake  headShake
    h1.animated.swing  swing
    h1.animated.tada  tada
    h1.animated.wobble  wobble
    h1.animated.jello  jello
    h1.animated.bounceIn  bounceIn
    h1.animated.bounceInDown  bounceInDown
    h1.animated.bounceInLeft  bounceInLeft
    h1.animated.bounceInRight  bounceInRight
    h1.animated.bounceInUp  bounceInUp
    h1.animated.bounceOut  bounceOut
    h1.animated.bounceOutDown  bounceOutDown
    h1.animated.bounceOutLeft  bounceOutLeft
    h1.animated.bounceOutRight  bounceOutRight
    h1.animated.bounceOutUp  bounceOutUp
    h1.animated.fadeIn  fadeIn
    h1.animated.fadeInDown  fadeInDown
    h1.animated.fadeInDownBig  fadeInDownBig
    h1.animated.fadeInLeft  fadeInLeft
    h1.animated.fadeInLeftBig  fadeInLeftBig
    h1.animated.fadeInRight  fadeInRight
    h1.animated.fadeInRightBig  fadeInRightBig
    h1.animated.fadeInUp  fadeInUp
    h1.animated.fadeInUpBig  fadeInUpBig
    h1.animated.fadeOut  fadeOut
    h1.animated.fadeOutDown  fadeOutDown
    h1.animated.fadeOutDownBig  fadeOutDownBig
    h1.animated.fadeOutLeft  fadeOutLeft
    h1.animated.fadeOutLeftBig  fadeOutLeftBig
    h1.animated.fadeOutRight  fadeOutRight
    h1.animated.fadeOutRightBig  fadeOutRightBig
    h1.animated.fadeOutUp  fadeOutUp
    h1.animated.fadeOutUpBig  fadeOutUpBig
    h1.animated.flipInX  flipInX
    h1.animated.flipInY  flipInY
    h1.animated.flipOutX  flipOutX
    h1.animated.flipOutY  flipOutY
    h1.animated.lightSpeedIn  lightSpeedIn
    h1.animated.lightSpeedOut  lightSpeedOut
    h1.animated.rotateIn  rotateIn
    h1.animated.rotateInDownLeft  rotateInDownLeft
    h1.animated.rotateInDownRight  rotateInDownRight
    h1.animated.rotateInUpLeft  rotateInUpLeft
    h1.animated.rotateInUpRight  rotateInUpRight
    h1.animated.rotateOut  rotateOut
    h1.animated.rotateOutDownLeft  rotateOutDownLeft
    h1.animated.rotateOutDownRight  rotateOutDownRight
    h1.animated.rotateOutUpLeft  rotateOutUpLeft
    h1.animated.rotateOutUpRight  rotateOutUpRight
    h1.animated.hinge  hinge
    h1.animated.jackInTheBox  jackInTheBox
    h1.animated.rollIn  rollIn
    h1.animated.rollOut  rollOut
    h1.animated.zoomIn  zoomIn
    h1.animated.zoomIn  zoomInDown
    h1.animated.zoomInLeft  zoomInLeft
    h1.animated.zoomInRight  zoomInRight
    h1.animated.zoomInUp  zoomInUp
    h1.animated.zoomOut  zoomOut
    h1.animated.zoomOutDown  zoomOutDown
    h1.animated.zoomOutLeft  zoomOutLeft
    h1.animated.zoomOutRight  zoomOutRight
    h1.animated.zoomOutUp  zoomOutUp
    h1.animated.slideInDown  slideInDown
    h1.animated.slideInLeft  slideInLeft
    h1.animated.slideInRight  slideInRight
    h1.animated.slideInUp  slideInUp
    h1.animated.slideOutDown  slideOutDown
    h1.animated.slideOutLeft  slideOutLeft
    h1.animated.slideOutUp  slideOutUp
    

</template>

<script>
/**animation-css
 * bounce 反弹
 * flash 闪光
 * pulse 脉冲
 * rubberBand 橡皮筋
 * shake 摇动
 * headShake 摇头
 * swing 摆动
 * wobble 晃动
 * jello 果冻
 * flip 轻弹
 * rotate 旋转
 * hinge 铰链
 * jack 千斤顶
 * roll 卷
 * zoom 变焦
 */
export default {
  name: 'AnimationCss',
  data () {
    return {
      
    }
  }, 
  created:function(){
  },
  mounted:function(){
    console.log('已经挂载');
    let hGroupTag = $('h1');
    $.each(hGroupTag,function(i, value){
      console.log(i,value);
     
      $(this).on('click',function(){
         hGroupTag.removeClass('infinite animated');
        $(this).addClass('infinite animated');
      })
     
    });
/**判断动画是否结束 */
    $.fn.extend({
      animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
          var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
          };

          for (var t in animations) {
            if (el.style[t] !== undefined) {
              return animations[t];
            }
          }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);

          if (typeof callback === 'function') callback();
        });

        return this;
      },
    });

    $('.yourElement').animateCss('bounce', function() {
      console.log('bounce动画结束');
    });
/**判断动画是否结束 */

  },
  methods: {
  },
  computed:{
  }
}
</script>

<style src="./animation-css.component.less" lang="less" scoped></style>
