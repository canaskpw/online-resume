import VanillaTilt from 'vanilla-tilt'
import Card from '@/components/card/card.vue'

export default {
    data(){
        return {
            works: [
                {
                    imgsrc: require('../../static/img/works/tomato.jpg'),
                    title: '定个小目标 <span class="m-pink">小程序</span>',
                    intro: {
                        keywords: '<p>关键词：<span class="m-pink">原生小程序</span></p>',
                        description: '<p>该项目是使用<span class="m-pink">小程序原生API</span>制作，' + 
                            '基于<span class="m-pink">番茄工作法</span>实现的一个todo类应用。</p>' +
                            '<p>主要功能如下。</p><p>首页：todolist展示，以及对应的<span class="m-pink">增删改查</span>。</p><p>' + 
                            '<p>倒计时页面：提供<span class="m-pink">倒计时</span>功能。</p>' + 
                            '<p>个人页面：用户信息展示与<span class="m-pink">todo信息总览</span>。</p>'
                    },
                    previewLink: '',
                    isQRCode: 'tomato',
                },
                {
                    imgsrc: require('../../static/img/works/blog.jpg'),
                    title: '多人共享博客',
                    intro: {
                        keywords: '关键词：<span class="m-pink">vue-cli、vue-router、vuex、axios、es6、element-ui、grid、marked.js、less</span>',
                        description: '<p>使用 Vue 实现了在线博客平台。包含首页、用户文章列表、个人管理等页面，</p>' + 
                            '实现了<span class="m-pink">登录、注册、编辑、发布</span>等功能，marked.js实现<span class="m-pink">markdown支持</span>'+
                            '。<p>Less 作 CSS 预处理。' + 
                            '通过 Vue Router 实现<span class="m-pink">路由跳转</span>、<span class="m-pink">路由懒加载</span>、'+
                            '<span class="m-pink">权限验证</span>等，vuex 管理状态，用封装的 <span class="m-pink">Axios 接口</span>获取数据。</p>'
                    },
                    previewLink: 'https://inkymountain.github.io/blog/dist',
                    isQRCode: '',
                },
                {
                    imgsrc: require('../../static/img/works/music-client.jpg'),
                    title: '网易云-用户界面 <span class="m-pink">手机端</span>',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS MVC  发布订阅</span>',
                        description: '<p>使用原生JS实现了音乐网站的客户端页面，包含<span class="m-pink">首页、歌单、播放</span>等界面，。' + 
                        '支持歌曲的在线播放。</p>' + 
                        '<p>该项目运用了<span class="m-pink">MVC</span>设计模式，模块之间使用<span class="m-pink">EventHub发布订阅</span>的模式进行通信。' + 
                        '<p>使用<span class="m-pink">LeanCloud API</span>进行数据库读取，JS动态生成歌曲列表。主要的布局方式为<span class="m-pink">flex</span>。' + 
                            '使用<span class="m-pink">audio标签</span>实现音乐的<span class="m-pink">播放、暂停、进度条</span>等功能。</p>',
                    },
                    previewLink: 'http://chenyitao.top/music/src/',
                    isQRCode: 'music',
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
