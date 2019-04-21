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
                        description: '主要使用canvas API，提供在<span class="m-pink">PC及手机端</span>在线画画、橡皮擦等功能，'+
                            '并支持画笔颜色与粗细调整、画作删除、画作下载。',
                    },
                    previewLink: 'https://inkymountain.github.io/Drawing-board/',
                    isQRCode: false,
                },
                {
                    imgsrc: require('../../static/img/works/dynamic-resume.jpg'),
                    title: '动效简历',
                    intro: {
                        keywords: '关键词：<span class="m-pink">原生JS 动效 markdown</span>',
                        description: '使用原生JS实现<span class="m-pink">动态</span>增加页面文字的效果，'+
                            'box-shadow属性实现<span class="m-pink">像素画</span>效果，'+
                            '<span class="m-pink">marked.js</span>实现markdown转换。',
                    },
                    previewLink: 'https://inkymountain.github.io/Dynamic-Resume/',
                    isQRCode: false,
                },
                {
                    imgsrc: require('../../static/img/works/nav.jpg'),
                    title: '网址导航',
                    intro: {
                        keywords: '关键词：<span class="m-pink">键盘导航 随机壁纸</span>',
                        description: '原生JS实现键盘导航网站，按下键盘跳转对应网站，支持网址的编辑。'+ 
                            '使用<span class="m-pink">pixabay图库API</span>实现随机壁纸效果。',
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
