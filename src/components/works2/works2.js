import VanillaTilt from 'vanilla-tilt'
import Card from '@/components/card/card.vue'

export default {
    data(){
        return {
            works: [
                {
                    imgsrc: '/static/img/works/drawing-board.jpg',
                    title: '画板',
                    intro: {
                        keywords: '关键词：<span class="m-red  m-bold">原生JS 七牛云 LeanCloud</span>',
                        description: '完全使用原生JS实现，<span class="m-pink">七牛云API</span>实现媒体文件存储，<span class="m-pink">LeanCloud</span>实现数据库功能。',
                    },
                    previewLink: 'https://inkymountain.github.io/Drawing-board/',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/dynamic-resume.jpg',
                    title: '动效简历',
                    intro: {
                        keywords: '关键词：<span class="m-red  m-bold">原生JS 七牛云 LeanCloud</span>',
                        description: '完全使用原生JS实现，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    },
                    previewLink: 'https://inkymountain.github.io/Dynamic-Resume/',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/nav.jpg',
                    title: '网址导航',
                    intro: {
                        keywords: '关键词：<span class="m-red  m-bold">vue-cli、vue-router、vuex、axios、es6、element-ui</span>',
                        description: '完全使用原生JS实现，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    },
                    previewLink: 'https://inkymountain.github.io/navigation/',
                    isQRCode: false,
                },
        ]
        }
    },
    methods:{

    },
    mounted(){
        let cards = document.querySelectorAll(".card")
        for (const card of cards) {
            VanillaTilt.init(card, {
                scale: 1.2,
            })
        }
    },
    components: {
        Card,
    }
}
