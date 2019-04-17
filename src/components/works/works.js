import VanillaTilt from 'vanilla-tilt'
import Card from '@/components/card/card.vue'

export default {
    data(){
        return {
            works: [
                {
                    imgsrc: '/static/img/works/music-admin.jpg',
                    title: '网易云管理界面',
                    intro: {
                        keywords: '关键词：<span class="m-red  m-bold">原生JS 七牛云 LeanCloud</span>',
                        description: '完全使用原生JS实现，<span class="m-red m-bold">七牛云API</span>实现媒体文件存储，<span class="m-red m-bold">LeanCloud</span>实现数据库功能。',
                    }
                },
                {
                    imgsrc: '/static/img/works/music-admin.jpg',
                    title: '网易云管理界面',
                    intro: {
                        keywords: '原生JS 七牛云 LeanCloud',
                        description: '完全使用原生JS实现，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    }
                },
                {
                    imgsrc: '/static/img/works/music-admin.jpg',
                    title: '网易云管理界面',
                    intro: {
                        keywords: '原生JS 七牛云 LeanCloud',
                        description: '完全使用原生JS实现，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    }
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
                glare: true,
                scale: 1.5,
            })
        }
    },
    components: {
        Card,
    }
}
