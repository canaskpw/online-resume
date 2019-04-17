import VanillaTilt from 'vanilla-tilt'
import Card from '@/components/card/card.vue'

export default {
    data(){
        return {

        }
    },
    methods:{

    },
    mounted(){
        let cards = document.querySelectorAll(".card")
        for (const card of cards) {
            VanillaTilt.init(card, {
                glare: true,
                scale: 1.5,
            })
        }
    },
    components: {
        Card,
    }
}
