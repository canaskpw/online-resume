import Card from '@/components/card/card.vue'

export default {
    data(){
        return {
            works: [
                {
                    imgsrc: require('../../static/img/works/drawing-board.jpg'),
                    title: '画板',
                    intro: {
                        keywords: '关键词：<span class="m-pink">canvas 画板</span>',
                        description: '<p>主要使用canvas API，提供在<span class="m-pink">PC及手机端</span>在线画画、橡皮擦等功能，'+
                            '并支持画笔颜色与粗细调整、画作删除、画作下载。</p>' + 
                            '<p>该项目针对画笔的作画方式进行了优化，在<span class="m-pink">不同粗细</span>的情况下，' + 
                            '采用<span class="m-pink">适合</span>的canvas API作画，' + 
                            '使线条更为<span class="m-pink">流畅与柔和</span>。</p>',
                    },
                    previewLink: 'https://inkymountain.github.io/Drawing-board/',
                    isQRCode: false,
                },
                {
                    imgsrc: require('../../static/img/works/dynamic-resume.jpg'),
                    title: '动效简历',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS 动效 markdown</span>',
                        description: '<p>该项目由原生JS实现。以一定频率遍历一个模板字符串，截取' + 
                        '不同长度的字符串，同时添加到页面元素和style标签中，从而实现<span class="m-pink">动态</span>' 
                        + '增加页面文字的效果。</p>'+
                        '<p>通过box-shadow属性实现<span class="m-pink">像素画</span>效果，'+
                        '<span class="m-pink">marked.js</span>实现markdown转换, 并使用css定制markdown最终效果。</p>',
                    },
                    previewLink: 'https://inkymountain.github.io/Dynamic-Resume/',
                    isQRCode: false,
                },
                {
                    imgsrc: require('../../static/img/works/nav.jpg'),
                    title: '网址导航',
                    intro: {
                        keywords: '<p>关键词：<span class="m-pink">键盘导航 随机壁纸</span>',
                        description: '该项目使用原生JS实现了一个键盘导航网站，按下键盘上对应字母跳转相应网站' + 
                            '支持自动获取网址icon，支持网站的编辑和移除。</p>'+ 
                            '<p>另外使用了<span class="m-pink">pixabay图库（图片资源网站）的接口</span>，XMLHttpRequest发出异步请求，' + 
                            '获取json，实现随机壁纸效果。</p>',
                    },
                    previewLink: 'https://inkymountain.github.io/navigation/',
                    isQRCode: false,
                },
        ]
        }
    },
    methods:{

    },
    components: {
        Card,
    }
}
