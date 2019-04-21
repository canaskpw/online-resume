import VanillaTilt from 'vanilla-tilt'
import Card from '@/components/card/card.vue'

export default {
    data(){
        return {
            works: [
                {
                    imgsrc: '../../../static/img/works/blog.jpg',
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
                    imgsrc: '../../../static/img/works/music-admin.jpg',
                    title: '网易云-管理界面 <span class="m-pink">PC端</span>',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS 七牛云 LeanCloud</span>',
                        description: '使用原生JS实现了音乐网站的后台管理页面。具备文件的<span class="m-pink">上传与编辑</span>功能' + 
                            '，<span class="m-pink">七牛云API</span>实现媒体文件存储，<span class="m-pink">LeanCloud</span>实现数据库功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/admin.html',
                    isQRCode: false,
                },
                {
                    imgsrc: '../../../static/img/works/music-client.jpg',
                    title: '网易云-用户界面 <span class="m-pink">手机端</span>',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS MVC 发布订阅</span>',
                        description: '使用原生JS实现了音乐网站的客户端页面，包含<span class="m-pink">首页、歌单、播放</span>等界面。' + 
                            '运用了<span class="m-pink">MVC</span>设计模式，模块之间使用<span class="m-pink">EventHub订阅</span>的模式进行通信。' + 
                            '使用<span class="m-pink">audio标签</span>实现音乐的播放、暂停、进度条等功能。',
                    },
                    previewLink: 'http://chenyitao.top/music/src/',
                    isQRCode: true,
                },
            ],
            innerWidth: window.innerWidth,
        }
    },
    methods:{

    },
    mounted(){
        if (this.innerWidth >= 500) {
            let cards = document.querySelectorAll(".card")
            for (const card of cards) {
                VanillaTilt.init(card, {
                    scale: 1.1,
                    glare: true,
                    "max-glare": 1,
                })
            }
        }
    },
    components: {
        Card,
    }
}
