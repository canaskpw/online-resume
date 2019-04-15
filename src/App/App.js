import Intro from "@/components/intro/intro.vue";
// import VanillaTilt from 'vanilla-tilt'
import Vue from 'vue'

Vue.directive('tilt', function (el, binding) {
  VanillaTilt.init(el, Object.assign({}, binding.value) );
});

export default {
    name: 'App',
    data(){
      return {
        options: {
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3'],
        },
      }
    },
    components: {
        Intro
    },
    // mounted(){
    //   console.log(VanillaTilt);
    //   let avatar = document.querySelector(".avatar")
    //   VanillaTilt.init(avatar);
    // }
  }
