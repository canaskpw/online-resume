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
                        description: '使用 Vue 实现了一个在线博客分享的平台。包含首页、用户文章列表、个人管理等页面，' + 
                            '实现了<span class="m-pink">登录、注册、编辑、发布</span>等功能，marked.js实现<span class="m-pink">markdown支持</span>'+
                            '。<br>使用Grid布局，Less 作 CSS 预处理。' + 
                            '通过 Vue Router 实现<span class="m-pink">路由跳转</span>、<span class="m-pink">路由懒加载</span>、'+
                            '<span class="m-pink">权限验证</span>等，vuex 管理状态，用封装的 <span class="m-pink">Axios 接口</span>获取数据。'
                    },
                    previewLink: 'https://inkymountain.github.io/blog/dist',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/music-admin.jpg',
                    title: '网易云-管理界面 <span class="m-pink">PC端</span>',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS 七牛云 LeanCloud</span>',
                        description: '未使用框架。具备文件的<span class="m-pink">上传与编辑</span>功能，<span class="m-pink">七牛云API</span>实现媒体文件存储，<span class="m-pink">LeanCloud</span>实现数据库功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/admin.html',
                    isQRCode: false,
                },
                {
                    imgsrc: '/static/img/works/music-client.jpg',
                    title: '网易云-用户界面 <span class="m-pink">手机端</span>',
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
