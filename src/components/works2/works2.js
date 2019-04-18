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
                        description: '完全使用原生JS实现，<span class="m-red m-bold">七牛云API</span>实现媒体文件存储，<span class="m-red m-bold">LeanCloud</span>实现数据库功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/admin.html',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/music-client.jpg',
                    title: '网易云 - 用户界面',
                    intro: {
                        keywords: '关键词：<span class="m-red  m-bold">原生JS 七牛云 LeanCloud</span>',
                        description: '完全使用原生JS实现，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/admin.html',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/blog.jpg',
                    title: '多人共享博客',
                    intro: {
                        keywords: '关键词：<span class="m-red  m-bold">vue-cli、vue-router、vuex、axios、es6、element-ui</span>',
                        description: '完全使用原生JS实现，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/admin.html',
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
                scale: 1.3,
            })
        }
    },
    components: {
        Card,
    }
}
