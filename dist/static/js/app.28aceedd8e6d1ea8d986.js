webpackJsonp([1],{"+BTi":function(t,s){},"0jnt":function(t,s){},"22wk":function(t,s){},"2RzJ":function(t,s){},"9z2G":function(t,s){},ENfL:function(t,s){},GXEp:function(t,s){},NHnr:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});n("oq7i"),n("+BTi");var e=n("+TD8"),i=n.n(e),a=(n("GXEp"),n("mtrD")),c=n.n(a),l=n("/5sW"),r=n("Jo8l"),o=n.n(r),p=n("TQvf"),d=n.n(p),h={data:function(){return{}},methods:{showContact:function(){i()({title:"点击复制联系方式",message:"\n                    <div class='email contactList'>\n                        <span class='m-bold name'>email: </span>\n                        <span class='m-hightlight m-pointer content' id='email'>cyitao@foxmail.com</span>\n                        <span></span>\n                    </div>\n                    <div class='qq contactList'>\n                        <span class='m-bold name'>QQ: </span>\n                        <span class='m-hightlight m-pointer content' id='qq'>285345240</span>\n                        <span></span>\n                    </div>\n                    <div class='phone contactList'>\n                        <span class='m-bold name'>phone & wechat: </span> \n                        <span class='m-hightlight m-pointer content' id='phone'>17767212383</span>\n                        <span></span>\n                    </div>\n                ",dangerouslyUseHTMLString:!0}).catch(function(){}),new d.a(".contactList .content",{target:function(t){return t.nextElementSibling.textContent=" 已复制",t}})}},mounted:function(){var t=document.querySelector(".avatar");o.a.init(t,{scale:1.3})},components:{}},v={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"box-wrapper"},[n("div",{staticClass:"contentBox"},[n("div",{staticClass:"content"},[n("div",{staticClass:"dashedCircle"}),t._v(" "),n("div",{staticClass:"blank-left"}),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"avatar"}),t._v(" "),n("div",{staticClass:"text"},[n("span",{staticClass:"self"},[n("span",{staticClass:"name"},[t._v("陈亦涛")]),t._v(" "),n("span",{staticClass:"age"},[t._v("22")]),t._v(" "),n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-nan"}})])]),t._v(" "),n("span",{staticClass:"target"},[t._v("意向岗位：前端工程师")]),t._v(" "),n("span",{staticClass:"collage"},[t._v("浙江工业大学")]),t._v(" "),n("div",{staticClass:"buttons"},[n("span",{staticClass:"pdf"},[n("Button",{attrs:{classObject:{button:!0},textContent:"PDF下载",href:"../../static/resume.pdf"}})],1),t._v(" "),n("span",{staticClass:"contact",on:{click:function(s){return s.stopPropagation(),t.showContact(s)}}},[n("Button",{attrs:{classObject:{button:!0},textContent:"联系方式"}})],1)]),t._v(" "),n("span",{staticClass:"suggestion"},[t._v("下滑查看更多内容")])])]),t._v(" "),n("div",{staticClass:"blank-right"})])])])},staticRenderFns:[]};var u=n("VU/8")(h,v,!1,function(t){n("22wk"),n("9z2G")},"data-v-7c69ddb1",null).exports,g=n("BO1k"),m=n.n(g),C={data:function(){return{innerWidth:window.innerWidth}},props:{title:String,imgsrc:String,intro:Object,previewLink:String,isQRCode:Boolean},computed:{keywords:function(){return this.intro.keywords},description:function(){return this.intro.description}},components:{}},_={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("article",[n("a",{staticClass:"img-wrapper",attrs:{href:t.previewLink,target:"_blank"}},[t.imgsrc?n("img",{attrs:{src:t.imgsrc,alt:"作品图片"}}):t._e()]),t._v(" "),n("header",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("section",{staticClass:"introduction"},[n("div",{staticClass:"keywords",domProps:{innerHTML:t._s(t.keywords)}}),t._v(" "),n("p",{staticClass:"description",domProps:{innerHTML:t._s(t.description)}})]),t._v(" "),n("footer",{staticClass:"preview"},[!t.isQRCode||t.innerWidth<=500?n("Button",{attrs:{classObject:{button:!0},textContent:"预览",href:t.previewLink}}):t._e(),t._v(" "),t.isQRCode&&t.innerWidth>500?n("img",{attrs:{src:"/static/img/musicClient-preview.jpg",alt:""}}):t._e()],1)])},staticRenderFns:[]};var x=n("VU/8")(C,_,!1,function(t){n("o7Mw")},"data-v-72b8f8f0",null).exports,b={data:function(){return{works:[{imgsrc:"/static/img/works/blog.jpg",title:"多人共享博客",intro:{keywords:'关键词：<span class="m-pink">vue-cli、vue-router、vuex、axios、es6、element-ui</span>',description:'使用 Vue 实现了一个在线博客分享的平台。包含首页、用户文章列表、个人管理等页面，实现了<span class="m-pink">登录、注册、编辑、发布</span>等功能，marked.js实现<span class="m-pink">markdown支持</span>。<br>使用Grid布局，Less 作 CSS 预处理。通过 Vue Router 实现<span class="m-pink">路由跳转</span>、<span class="m-pink">路由懒加载</span>、<span class="m-pink">权限验证</span>等，vuex 管理状态，用封装的 <span class="m-pink">Axios 接口</span>获取数据。'},previewLink:"https://inkymountain.github.io/blog/dist",isQRCode:!1},{imgsrc:"/static/img/works/music-admin.jpg",title:'网易云-管理界面 <span class="m-pink">PC端</span>',intro:{keywords:'关键词：<span class="m-pink">原生JS 七牛云 LeanCloud</span>',description:'使用原生JS实现了音乐网站的后台管理页面。具备文件的<span class="m-pink">上传与编辑</span>功能，<span class="m-pink">七牛云API</span>实现媒体文件存储，<span class="m-pink">LeanCloud</span>实现数据库功能。'},previewLink:"http://chenyitao.top/music/src/admin.html",isQRCode:!1},{imgsrc:"/static/img/works/music-client.jpg",title:'网易云-用户界面 <span class="m-pink">手机端</span>',intro:{keywords:'关键词：<span class="m-pink">原生JS MVC 发布订阅</span>',description:'使用原生JS实现了音乐网站的客户端页面，包含<span class="m-pink">首页、歌单、播放</span>等界面。运用了<span class="m-pink">MVC</span>设计模式，模块之间使用<span class="m-pink">EventHub订阅</span>的模式进行通信。使用<span class="m-pink">audio标签</span>实现音乐的播放、暂停、进度条等功能。'},previewLink:"http://chenyitao.top/music/src/",isQRCode:!0}]}},methods:{},mounted:function(){if(this.innerWidth>=500){var t=document.querySelectorAll(".card"),s=!0,n=!1,e=void 0;try{for(var i,a=m()(t);!(s=(i=a.next()).done);s=!0){var c=i.value;o.a.init(c,{scale:1.1,glare:!0,"max-glare":1})}}catch(t){n=!0,e=t}finally{try{!s&&a.return&&a.return()}finally{if(n)throw e}}}},components:{Card:x}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"box-wrapper"},[s("div",{staticClass:"contentBox"},[s("div",{staticClass:"content"},[this._m(0),this._v(" "),s("main",{staticClass:"cards"},this._l(this.works,function(t,n){return s("div",{key:n,staticClass:"card"},[s("Card",{attrs:{imgsrc:t.imgsrc,title:t.title,previewLink:t.previewLink,intro:t.intro,isQRCode:t.isQRCode}})],1)}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"title"},[s("h1",[this._v("作品展示")])])}]};var k=n("VU/8")(b,f,!1,function(t){n("0jnt"),n("2RzJ")},null,null).exports,y={data:function(){return{works:[{imgsrc:"/static/img/works/drawing-board.jpg",title:"画板",intro:{keywords:'关键词：<span class="m-pink">canvas 画板</span>',description:'主要使用canvas API，提供在<span class="m-pink">PC及手机端</span>在线画画、橡皮擦等功能，并支持画笔颜色与粗细调整、画作删除、画作下载。'},previewLink:"https://inkymountain.github.io/Drawing-board/",isQRCode:!1},{imgsrc:"/static/img/works/dynamic-resume.jpg",title:"动效简历",intro:{keywords:'关键词：<span class="m-pink">原生JS 动效 markdown</span>',description:'使用原生JS实现<span class="m-pink">动态</span>增加页面文字的效果，box-shadow属性实现<span class="m-pink">像素画</span>效果，<span class="m-pink">marked.js</span>实现markdown转换。'},previewLink:"https://inkymountain.github.io/Dynamic-Resume/",isQRCode:!1},{imgsrc:"/static/img/works/nav.jpg",title:"网址导航",intro:{keywords:'关键词：<span class="m-pink">键盘导航 随机壁纸</span>',description:'原生JS实现键盘导航网站，按下键盘跳转对应网站，支持网址的编辑。使用<span class="m-pink">pixabay图库API</span>实现随机壁纸效果。'},previewLink:"https://inkymountain.github.io/navigation/",isQRCode:!1}]}},methods:{},components:{Card:x}},w={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"box-wrapper"},[s("div",{staticClass:"contentBox"},[s("div",{staticClass:"content"},[this._m(0),this._v(" "),s("main",{staticClass:"cards"},this._l(this.works,function(t,n){return s("div",{key:n,staticClass:"card"},[s("Card",{attrs:{imgsrc:t.imgsrc,title:t.title,previewLink:t.previewLink,intro:t.intro,isQRCode:t.isQRCode}})],1)}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"title"},[s("h1",[this._v("作品展示")])])}]};var j=n("VU/8")(y,w,!1,function(t){n("ENfL")},null,null).exports,O={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"box-wrapper"},[n("div",{staticClass:"contentBox"},[n("div",{staticClass:"content",attrs:{id:"skillsContent"}},[n("main",[n("div",{staticClass:"left skillBlock"},[n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-left":!0},textContent:"HTML5 & CSS3 & JS"}})],1),t._v(" "),n("p",[t._v("\n                        熟悉常用"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"语义化标签"}}),t._v("\n                        。"),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"高保真度"}}),t._v("\n                        还原设计稿，具有\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"良好审美"}}),t._v("\n                        ，追求优雅设计。\n                    ")],1),t._v(" "),n("p",[t._v("\n                        掌握"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"CSS3动画"}}),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"过渡"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"垂直居中"}}),t._v("等常用技术。\n                    ")],1),t._v(" "),n("p",[t._v("\n                        JS基础扎实，理解"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"原型"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"闭包"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"异步流程控制"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"面向对象"}}),t._v("等重要概念，熟悉\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"ES6"}}),t._v("常用新特性。\n                    ")],1),t._v(" "),n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-left":!0},textContent:"移动端页面"}})],1),t._v(" "),n("p",[t._v("\n                        掌握 "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"REM"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"vw/vh"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"媒体查询"}}),t._v("等移动端适配技术，熟悉 \n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Flex"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Grid"}}),t._v("\n                        布局，用于复杂页面制作，拥有\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"项目实践经验"}}),t._v("\n                        。\n                    ")],1),t._v(" "),n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-left":!0},textContent:"JQuery"}})],1),t._v(" "),n("p",[t._v("\n                        熟悉"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"JQuery"}}),t._v("\n                        常用 API ，了解其内部机制。可使用 JQuery 制作较为复杂的组件，如 \n                        "),t._v(" "),n("span",{staticClass:"lowerLineHeight"},[n("Button",{attrs:{href:"https://inkymountain.github.io/Slide-demo1/",classObject:{button:!0},textContent:"无缝轮播"}})],1)],1)]),t._v(" "),n("div",{staticClass:"right skillBlock"},[n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-right":!0},textContent:"Vue"}})],1),t._v(" "),n("p",[t._v("熟悉 \n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Vue"}}),t._v(" \n                        常用功能，能够使用 "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Vue全家桶"}}),t._v("开发项目，理解\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"生命周期"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"双向绑定"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"组件"}}),t._v(" \n                        等重要概念。\n                    ")],1),t._v(" "),n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-right":!0},textContent:"其它"}})],1),t._v(" "),n("p",[t._v("\n                        熟悉\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"HTTP"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Ajax"}})],1),t._v(" "),n("p",[t._v("\n                        掌握 Npm、Git、Webpack、Less、VsCode 等开发辅助工具，熟悉\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"模块化"}}),t._v(" \n                        开发流程。\n                    ")],1),t._v(" "),n("p",[n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"流畅阅读"}}),t._v(" \n                        英文文档，以官方文档为\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"第一选择"}}),t._v(" \n                        。\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"科学上网"}}),t._v(" \n                        面向Google、Stack Overflow编程。:)\n                    ")],1),t._v(" "),n("p",[t._v("\n                        拥有较强的踩坑后\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"填坑能力"}}),t._v("，对前端抱有热情。\n                    ")],1)])])])])])},staticRenderFns:[]};var T=n("VU/8")({data:function(){return{}},components:{},mounted:function(){}},O,!1,function(t){n("Y3cD")},"data-v-0da155a2",null).exports,S={props:{textContent:String,classObject:Object}},L={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classObject},[this._v(this._s(this.textContent))])},staticRenderFns:[]};var R=n("VU/8")(S,L,!1,function(t){n("uWGr")},"data-v-7e418691",null).exports,Q={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"box-wrapper"},[n("div",{staticClass:"contentBox"},[n("div",{staticClass:"content",attrs:{id:"experienceBlobk"}},[n("h1",[t._v("个人经历")]),t._v(" "),n("main",{staticClass:"experience"},[n("div",{staticClass:"text"},[n("p",[t._v("\n                        2018 年 7 月毕业于浙江工业大学药学专业。\n                        毕业后从事雅培心脏起搏器技术岗位至今。\n                    ")]),t._v(" "),n("p",[t._v("\n                        2019年1月开始利用业余时间学习前端，拥有较强的学习能力，3个月的业余时间掌握前端必要知识，并完成作品及该简历制作。\n                    ")]),t._v(" "),n("p",[t._v("\n                        前端于我，是美与理性的结合，新技术的接触总使我兴奋不已。Bug使我成长，优雅的页面是成长的果实。\n                    ")]),t._v(" "),n("styledText",{attrs:{textContent:"Phone&Wechat: 17767212383",classObject:{highlight:!0,blue:!0}}}),t._v(" "),n("styledText",{attrs:{textContent:"Mail: cyitao@foxmail.com",classObject:{highlight:!0,blue:!0}}}),t._v(" "),n("styledText",{attrs:{textContent:"QQ: 285345240",classObject:{highlight:!0,blue:!0}}})],1),t._v(" "),n("footer")])])])])},staticRenderFns:[]};var E=n("VU/8")({},Q,!1,function(t){n("a9qV")},"data-v-22a7f5ac",null).exports,V={props:{href:String,textContent:String,classObject:Object}},B={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{class:this.classObject,attrs:{href:this.href,target:"_blank"}},[this._v(this._s(this.textContent))])},staticRenderFns:[]};var J=n("VU/8")(V,B,!1,function(t){n("tjbn")},"data-v-db994f6e",null).exports;l.default.component("styledText",R),l.default.component("Button",J);var P={name:"App",data:function(){return{options:{menu:"#menu",anchors:["intro","works1","works2","skills","Experience"]}}},components:{Intro:u,Works:k,Works2:j,Skills:T,Experience:E,Card:x}},W={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("full-page",{ref:"fullpage",attrs:{options:this.options}},[s("div",{staticClass:"section"},[s("Intro")],1),this._v(" "),s("div",{staticClass:"section"},[s("Works")],1),this._v(" "),s("div",{staticClass:"section"},[s("Works2")],1),this._v(" "),s("div",{staticClass:"section"},[s("Skills")],1),this._v(" "),s("div",{staticClass:"section"},[s("Experience")],1)])],1)},staticRenderFns:[]};var M=n("VU/8")(P,W,!1,function(t){n("xCse"),n("Q0Ao")},null,null).exports,F=n("9yT1"),$=n.n(F);l.default.component(c.a.name,c.a),l.default.component(i.a.name,i.a),l.default.config.productionTip=!1,l.default.use($.a),new l.default({el:"#app",render:function(t){return t(M)}})},Q0Ao:function(t,s){},Y3cD:function(t,s){},a9qV:function(t,s){},o7Mw:function(t,s){},oq7i:function(t,s){},tjbn:function(t,s){},uWGr:function(t,s){},xCse:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.28aceedd8e6d1ea8d986.js.map