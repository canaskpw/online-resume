import Intro from "@/components/intro/intro.vue";
import Works from "@/components/works/works.vue";
import Vue from 'vue'



Vue.directive('tilt', function (el, binding) {
  VanillaTilt.init(el, Object.assign({}, binding.value));
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
        Intro,
        Works,
    },
  }
