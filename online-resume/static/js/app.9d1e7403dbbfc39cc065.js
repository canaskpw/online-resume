webpackJsonp([1],{"+BTi":function(t,s){},"0jnt":function(t,s){},"2RzJ":function(t,s){},"5YGw":function(t,s){},AcUC:function(t,s,n){t.exports=n.p+"static/img/avatar.6863446.jpg"},BD8k:function(t,s){},BXdO:function(t,s){},E0uJ:function(t,s){},ENfL:function(t,s){},GXEp:function(t,s){},I2Ep:function(t,s){},NHnr:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});n("oq7i"),n("+BTi");var e=n("+TD8"),i=n.n(e),a=(n("GXEp"),n("mtrD")),c=n.n(a),l=n("/5sW"),r=n("Jo8l"),o=n.n(r),p=n("TQvf"),d=n.n(p),u={data:function(){return{avatarUrl:"background-image: url("+n("AcUC")+");",bluebgUrl:"background-image: url("+n("ebOp")+");",innerWidth:window.innerWidth}},methods:{},mounted:function(){var t=document.querySelector(".avatar");this.innerWidth>=500&&o.a.init(t,{scale:1.3}),new d.a(".condition",{target:function(t){var s=t.querySelector(".copy");return s.textContent="已复制",setTimeout(function(){s.textContent=""},3e3),t.querySelector(".text")}})},components:{}},v={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"box-wrapper"},[n("div",{staticClass:"contentBox"},[n("div",{staticClass:"content"},[n("div",{staticClass:"dashedCircle",style:t.bluebgUrl}),t._v(" "),n("div",{staticClass:"blank-left"}),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"avatar",style:t.avatarUrl}),t._v(" "),n("ul",{staticClass:"detail"},[n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-nan"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("陈亦涛 22 男")]),n("span",{staticClass:"copy"})]),t._v(" "),n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-zhiwei"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("应聘职位 前端工程师")]),n("span",{staticClass:"copy"})]),t._v(" "),n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-icon-"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("意向城市 杭州")]),n("span",{staticClass:"copy"})]),t._v(" "),n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-xuexiao"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("浙江工业大学 一本")]),n("span",{staticClass:"copy"})]),t._v(" "),n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-star"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("工作一年")]),n("span",{staticClass:"copy"})]),t._v(" "),n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-email"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("cyitao@foxmail.com")]),n("span",{staticClass:"copy"})]),t._v(" "),n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-qq"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("285345240")]),n("span",{staticClass:"copy"})])]),t._v(" "),n("span",{staticClass:"suggestion"},[t._v("下滑查看更多内容")])])]),t._v(" "),n("div",{staticClass:"blank-right"})])])},staticRenderFns:[]};var h=n("VU/8")(u,v,!1,function(t){n("l6Od"),n("5YGw")},"data-v-261115c1",null).exports,C=n("BO1k"),g=n.n(C),x={data:function(){return{innerWidth:window.innerWidth}},props:{title:String,imgsrc:String,intro:Object,previewLink:String,isQRCode:Boolean},computed:{keywords:function(){return this.intro.keywords},description:function(){return this.intro.description}},components:{}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",[e("a",{staticClass:"img-wrapper",attrs:{href:t.previewLink,target:"_blank"}},[t.imgsrc?e("img",{attrs:{src:t.imgsrc,alt:"作品图片"}}):t._e()]),t._v(" "),e("header",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("section",{staticClass:"introduction"},[e("div",{staticClass:"keywords",domProps:{innerHTML:t._s(t.keywords)}}),t._v(" "),e("p",{staticClass:"description",domProps:{innerHTML:t._s(t.description)}})]),t._v(" "),e("footer",{staticClass:"preview"},[!t.isQRCode||t.innerWidth<=500?e("Button",{attrs:{classObject:{button:!0},textContent:"预览",href:t.previewLink}}):t._e(),t._v(" "),t.isQRCode&&t.innerWidth>500?e("img",{attrs:{src:n("a+mx"),alt:""}}):t._e()],1)])},staticRenderFns:[]};var m=n("VU/8")(x,_,!1,function(t){n("E0uJ")},"data-v-ea654bce",null).exports,f={data:function(){return{works:[{imgsrc:n("zd5L"),title:"多人共享博客",intro:{keywords:'关键词：<span class="m-pink">vue-cli、vue-router、vuex、axios、es6、element-ui、grid、marked.js、less</span>',description:'<p>使用 Vue 实现了在线博客平台。包含首页、用户文章列表、个人管理等页面，</p>实现了<span class="m-pink">登录、注册、编辑、发布</span>等功能，marked.js实现<span class="m-pink">markdown支持</span>。<p>Less 作 CSS 预处理。通过 Vue Router 实现<span class="m-pink">路由跳转</span>、<span class="m-pink">路由懒加载</span>、<span class="m-pink">权限验证</span>等，vuex 管理状态，用封装的 <span class="m-pink">Axios 接口</span>获取数据。</p>'},previewLink:"https://inkymountain.github.io/blog/dist",isQRCode:!1},{imgsrc:n("oyWh"),title:'网易云-管理界面 <span class="m-pink">PC端</span>',intro:{keywords:'<p>关键词：<span class="m-pink">原生JS 七牛云 LeanCloud</span>',description:'使用原生JS实现了音乐网站的后台管理页面。具备文件的<span class="m-pink">上传、编辑、标签</span>功能，支持拖拽与多文件上传。</p><p>通过<span class="m-pink">七牛云API</span>实现媒体文件存储，<span class="m-pink">LeanCloud</span>作为后端数据库，进行歌曲记录的存储。</p>'},previewLink:"http://chenyitao.top/music/src/admin.html",isQRCode:!1},{imgsrc:n("zeub"),title:'网易云-用户界面 <span class="m-pink">手机端</span>',intro:{keywords:'关键词：<span class="m-pink">原生JS MVC  发布订阅</span>',description:'<p>使用原生JS实现了音乐网站的客户端页面，包含<span class="m-pink">首页、歌单、播放</span>等界面，。支持歌曲的在线播放。</p><p>该项目运用了<span class="m-pink">MVC</span>设计模式，模块之间使用<span class="m-pink">EventHub发布订阅</span>的模式进行通信。<p>使用<span class="m-pink">LeanCloud API</span>进行数据库读取，JS动态生成歌曲列表。主要的布局方式为<span class="m-pink">flex</span>。使用<span class="m-pink">audio标签</span>实现音乐的<span class="m-pink">播放、暂停、进度条</span>等功能。</p>'},previewLink:"http://chenyitao.top/music/src/",isQRCode:!0}],innerWidth:window.innerWidth}},methods:{},mounted:function(){if(this.innerWidth>=500){var t=document.querySelectorAll(".card"),s=!0,n=!1,e=void 0;try{for(var i,a=g()(t);!(s=(i=a.next()).done);s=!0){var c=i.value;o.a.init(c,{scale:1.1,glare:!0,"max-glare":1})}}catch(t){n=!0,e=t}finally{try{!s&&a.return&&a.return()}finally{if(n)throw e}}}},components:{Card:m}},k={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"box-wrapper"},[s("div",{staticClass:"contentBox"},[s("div",{staticClass:"content"},[this._m(0),this._v(" "),s("main",{staticClass:"cards"},this._l(this.works,function(t,n){return s("div",{key:n,staticClass:"card"},[s("Card",{attrs:{imgsrc:t.imgsrc,title:t.title,previewLink:t.previewLink,intro:t.intro,isQRCode:t.isQRCode}})],1)}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"title"},[s("h1",[this._v("作品展示")])])}]};var b=n("VU/8")(f,k,!1,function(t){n("0jnt"),n("2RzJ")},null,null).exports,y={data:function(){return{works:[{imgsrc:n("hlaB"),title:"画板",intro:{keywords:'关键词：<span class="m-pink">canvas 画板</span>',description:'<p>主要使用canvas API，提供在<span class="m-pink">PC及手机端</span>在线画画、橡皮擦等功能，并支持画笔颜色与粗细调整、画作删除、画作下载。</p><p>该项目针对画笔的作画方式进行了优化，在<span class="m-pink">不同粗细</span>的情况下，采用<span class="m-pink">适合</span>的canvas API作画，使线条更为<span class="m-pink">流畅与柔和</span>。</p>'},previewLink:"https://inkymountain.github.io/Drawing-board/",isQRCode:!1},{imgsrc:n("RTGl"),title:"动效简历",intro:{keywords:'关键词：<span class="m-pink">原生JS 动效 markdown</span>',description:'<p>该项目由原生JS实现。以一定频率遍历一个模板字符串，截取不同长度的字符串，同时添加到页面元素和style标签中，从而实现<span class="m-pink">动态</span>增加页面文字的效果。</p><p>通过box-shadow属性实现<span class="m-pink">像素画</span>效果，<span class="m-pink">marked.js</span>实现markdown转换, 并使用css定制markdown最终效果。</p>'},previewLink:"https://inkymountain.github.io/Dynamic-Resume/",isQRCode:!1},{imgsrc:n("Zl4j"),title:"网址导航",intro:{keywords:'<p>关键词：<span class="m-pink">键盘导航 随机壁纸</span>',description:'该项目使用原生JS实现了一个键盘导航网站，按下键盘上对应字母跳转相应网站支持自动获取网址icon，支持网站的编辑和移除。</p><p>另外使用了<span class="m-pink">pixabay图库（图片资源网站）的接口</span>，XMLHttpRequest发出异步请求，获取json，实现随机壁纸效果。</p>'},previewLink:"https://inkymountain.github.io/navigation/",isQRCode:!1}]}},methods:{},components:{Card:m}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"box-wrapper"},[s("div",{staticClass:"contentBox"},[s("div",{staticClass:"content"},[this._m(0),this._v(" "),s("main",{staticClass:"cards"},this._l(this.works,function(t,n){return s("div",{key:n,staticClass:"card"},[s("Card",{attrs:{imgsrc:t.imgsrc,title:t.title,previewLink:t.previewLink,intro:t.intro,isQRCode:t.isQRCode}})],1)}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"title"},[s("h1",[this._v("作品展示")])])}]};var w=n("VU/8")(y,j,!1,function(t){n("ENfL")},null,null).exports,O={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"box-wrapper"},[n("div",{staticClass:"contentBox"},[n("div",{staticClass:"content",attrs:{id:"skillsContent"}},[n("main",[n("div",{staticClass:"left skillBlock"},[n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-left":!0},textContent:"HTML5 & CSS3 & JS"}})],1),t._v(" "),n("p",[t._v("\n                        熟悉常用"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"语义化标签"}}),t._v("\n                        。"),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"高保真度"}}),t._v("\n                        还原设计稿，具有\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"良好审美"}}),t._v("\n                        ，追求优雅设计。\n                    ")],1),t._v(" "),n("p",[t._v("\n                        掌握"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"CSS3动画"}}),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"过渡"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"垂直居中"}}),t._v("等常用技术。\n                    ")],1),t._v(" "),n("p",[t._v("\n                        JS基础扎实，理解"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"原型"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"闭包"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"异步流程控制"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"面向对象"}}),t._v("等重要概念，熟悉\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"ES6"}}),t._v("常用新特性。\n                    ")],1),t._v(" "),n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-left":!0},textContent:"移动端页面"}})],1),t._v(" "),n("p",[t._v("\n                        掌握 "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"REM"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"vw/vh"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"媒体查询"}}),t._v("等移动端适配技术，熟悉 \n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Flex"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Grid"}}),t._v("\n                        布局，用于复杂页面制作，拥有\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"项目实践经验"}}),t._v("\n                        。\n                    ")],1),t._v(" "),n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-left":!0},textContent:"JQuery"}})],1),t._v(" "),n("p",[t._v("\n                        熟悉"),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"JQuery"}}),t._v("\n                        常用 API ，了解其内部机制。可使用 JQuery 制作较为复杂的组件，如 \n                        "),t._v(" "),n("span",{staticClass:"lowerLineHeight"},[n("Button",{attrs:{href:"https://inkymountain.github.io/Slide-demo1/",classObject:{button:!0},textContent:"无缝轮播"}})],1)],1)]),t._v(" "),n("div",{staticClass:"right skillBlock"},[n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-right":!0},textContent:"Vue"}})],1),t._v(" "),n("p",[t._v("熟悉 \n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Vue"}}),t._v(" \n                        常用功能，能够使用 "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Vue全家桶"}}),t._v("开发项目，理解\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"生命周期"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"双向绑定"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"组件"}}),t._v(" \n                        等重要概念。\n                    ")],1),t._v(" "),n("div",{staticClass:"title"},[n("styledText",{attrs:{classObject:{"title-right":!0},textContent:"其它"}})],1),t._v(" "),n("p",[t._v("\n                        熟悉\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"HTTP"}}),t._v(" "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"Ajax"}})],1),t._v(" "),n("p",[t._v("\n                        掌握 Npm、Git、Webpack、Less、VsCode 等开发辅助工具，熟悉\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,blue:!0},textContent:"模块化"}}),t._v(" \n                        开发流程。\n                    ")],1),t._v(" "),n("p",[n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"流畅阅读"}}),t._v(" \n                        英文文档，以官方文档为\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"第一选择"}}),t._v(" \n                        。\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"科学上网"}}),t._v(" \n                        面向Google、Stack Overflow编程。:)\n                    ")],1),t._v(" "),n("p",[t._v("\n                        拥有较强的踩坑后\n                        "),n("styledText",{attrs:{classObject:{highlight:!0,pink:!0},textContent:"填坑能力"}}),t._v("，对前端抱有热情。\n                    ")],1)])])])])])},staticRenderFns:[]};var T=n("VU/8")({data:function(){return{}},components:{},mounted:function(){}},O,!1,function(t){n("Y3cD")},"data-v-0da155a2",null).exports,S={props:{textContent:String,classObject:Object}},R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classObject},[this._v(this._s(this.textContent))])},staticRenderFns:[]};var L=n("VU/8")(S,R,!1,function(t){n("BD8k")},"data-v-2d77e067",null).exports,E={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"box-wrapper"},[n("div",{staticClass:"contentBox"},[n("div",{staticClass:"content",attrs:{id:"experienceBlock"}},[n("h1",[t._v("个人经历")]),t._v(" "),n("main",{staticClass:"experience"},[n("div",{staticClass:"paragraph"},[t._m(0),t._v(" "),n("ul",{staticClass:"detail"},[n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-email"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("cyitao@foxmail.com")]),n("span",{staticClass:"copy"})]),t._v(" "),n("li",{staticClass:"condition",attrs:{title:"点击复制"}},[n("span",{staticClass:"category"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-qq"}})])]),t._v(" "),n("span",{staticClass:"text"},[t._v("285345240")]),n("span",{staticClass:"copy"})])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",[this._v("\n                            2018年7月毕业于浙江工业大学药学专业,在校期间平均绩点3.0，获校级奖学金，\n                            并参与浙工大勤工中心工作，致力于为学生提供免费的校内外兼职与实习中介平台。\n                            后就职于上海紫凡医疗器械有限公司。\n                        ")]),this._v(" "),s("p",[this._v("\n                            编程之路始于大学时对JAVA的学习，接触前端后，\n                            发现界面与代码的结合，比起单纯数据库操作更令人兴奋，遂转至前端学习。\n                        ")]),this._v(" "),s("p",[this._v("\n                            前端最令人欣喜的地方，就是反复调试后终得到的精致界面和流畅的交互效果。\n                        ")]),this._v(" "),s("p",[this._v("\n                            狭小的窗口展现无限可能，这是前端区别于其他coder的独特魅力。\n                        ")])])}]};var B=n("VU/8")({},E,!1,function(t){n("I2Ep")},"data-v-d7439826",null).exports,J={props:{href:String,textContent:String,classObject:Object}},Q={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{class:this.classObject,attrs:{href:this.href,target:"_blank"}},[this._v(this._s(this.textContent))])},staticRenderFns:[]};var V=n("VU/8")(J,Q,!1,function(t){n("BXdO")},"data-v-67025dfd",null).exports;l.default.component("styledText",L),l.default.component("Button",V);var W={name:"App",data:function(){return{options:{menu:"#menu",anchors:["intro","works1","works2","skills","Experience"]}}},components:{Intro:h,Works:b,Works2:w,Skills:T,Experience:B,Card:m}},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("full-page",{ref:"fullpage",attrs:{options:this.options}},[s("div",{staticClass:"section"},[s("Intro")],1),this._v(" "),s("div",{staticClass:"section"},[s("Works")],1),this._v(" "),s("div",{staticClass:"section"},[s("Works2")],1),this._v(" "),s("div",{staticClass:"section"},[s("Skills")],1),this._v(" "),s("div",{staticClass:"section"},[s("Experience")],1)])],1)},staticRenderFns:[]};var U=n("VU/8")(W,A,!1,function(t){n("xCse"),n("Q0Ao")},null,null).exports,P=n("9yT1"),$=n.n(P);l.default.component(c.a.name,c.a),l.default.component(i.a.name,i.a),l.default.config.productionTip=!1,l.default.use($.a),new l.default({el:"#app",render:function(t){return t(U)}})},Q0Ao:function(t,s){},RTGl:function(t,s,n){t.exports=n.p+"static/img/dynamic-resume.39864ce.jpg"},Y3cD:function(t,s){},Zl4j:function(t,s,n){t.exports=n.p+"static/img/nav.f378662.jpg"},"a+mx":function(t,s,n){t.exports=n.p+"static/img/musicClient-preview.828df39.jpg"},ebOp:function(t,s,n){t.exports=n.p+"static/img/bluebg.53c74e9.jpg"},hlaB:function(t,s,n){t.exports=n.p+"static/img/drawing-board.e4e5a04.jpg"},l6Od:function(t,s){},oq7i:function(t,s){},oyWh:function(t,s,n){t.exports=n.p+"static/img/music-admin.eb2d725.jpg"},xCse:function(t,s){},zd5L:function(t,s,n){t.exports=n.p+"static/img/blog.3b48085.jpg"},zeub:function(t,s,n){t.exports=n.p+"static/img/music-client.bf579a3.jpg"}},["NHnr"]);
//# sourceMappingURL=app.9d1e7403dbbfc39cc065.js.map