import VanillaTilt from 'vanilla-tilt'
import Card from '@/components/card/card.vue'

export default {
    data(){
        return {
            works: [
                {
                    imgsrc: '/static/img/works/blog.jpg',
                    title: '多人共享博客',
                    intro: {
                        keywords: '关键词：<span class="m-pink">vue-cli、vue-router、vuex、axios、es6、element-ui</span>',
                        description: '完全使用原生JS实现，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    },
                    previewLink: 'https://inkymountain.github.io/blog/dist',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/music-admin.jpg',
                    title: '网易云-管理界面(PC端)',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS 七牛云 LeanCloud</span>',
                        description: '未使用框架。具备文件的<span class="m-pink">上传与编辑</span>功能，<span class="m-pink">七牛云API</span>实现媒体文件存储，<span class="m-pink">LeanCloud</span>实现数据库功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/admin.html',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/music-client.jpg',
                    title: '网易云-用户界面(手机端)',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS 七牛云 LeanCloud</span>',
                        description: '未使用框架。具备文件的上传与编辑功能，七牛云API实现媒体文件存储，LeanCloud实现数据库功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/',
                    isQRCode: true,
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
