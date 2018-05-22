<template lang="pug">
  div(class="velocity")
    button(@click="velocitySimple") velocitySimple
    button(@click="velocityRunSequence") RunSequence
    .i-animation
      h1.i-demo 1
      h1 2
      h1.i-d1 3
      h1.i-d2 4
      h1.i-d3 5
</template>

<script>

export default {
  name: 'Velocity',
  data () {
    return {
      
    }
  }, 
  created:function(){
  },
  methods: {
    velocitySimple:function(){
      $(".i-demo").velocity({
        left: ["2rem",[ 250, 15 ]],
        backgroundColor: ["#888", "#fff"]
        },{
          progress: function(elements, complete, remaining, start, tweenValue) {
            console.log((complete * 100) + "%");
            console.log(remaining + "ms remaining!");
            console.log("The current tween value is " + tweenValue)
          }
      }).velocity("reverse");
    },
    velocityRunSequence:function(){
      let id1 = $(".i-d1");
      let id2 = $(".i-d2");
      let id3 = $(".i-d3");

      var mySequence = [
        { e: id1, p: { translateZ: 100 }, o: { duration: 1000 } },
        { e: id2, p: { translateZ: 200 }, o: { duration: 1000 } },
        { e: id3, p: { translateZ: 300 }, o: { duration: 1000 } }
      ];
      $.Velocity.RunSequence(mySequence);
    }

  },



  computed:{
  }
}
</script>

<style src="./velocity.component.less" lang="less" scoped></style>
