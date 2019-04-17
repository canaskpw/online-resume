import Intro from "@/components/intro/intro.vue";
import Works from "@/components/works/works.vue";




export default {
    name: 'App',
    data(){
      return {
        options: {
          menu: '#menu',
          anchors: ['intro', 'works1', 'works2', 'skills'],
        },
      }
    },
    components: {
        Intro,
        Works,
    },
  }
