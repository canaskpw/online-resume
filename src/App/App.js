import Intro from "@/components/intro/intro.vue";
import Works from "@/components/works/works.vue";
import Works2 from "@/components/works2/works2.vue";
import Skills from "@/components/skills/skills.vue";




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
        Works2,
        Skills,
    },
  }
