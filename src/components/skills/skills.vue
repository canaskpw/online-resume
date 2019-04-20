<template>
    <section class="box-wrapper">
        <div class="contentBox">
            <div class="content" id="skillsContent">
                <main>
                    <div class="left skillBlock">
                        <div class="title">
                            <styledText :classObject='{"title-left": true}' textContent='HTML5 & CSS3 & JS' ></styledText>
                        </div>
                        <p>
                            熟悉常用<styledText :classObject='{highlight: true, blue: true}' textContent='语义化标签'></styledText>
                            。<styledText :classObject='{highlight: true, pink: true}' textContent='高保真度'></styledText>
                            还原设计稿，具有
                            <styledText :classObject='{highlight: true, pink: true}' textContent='良好审美'></styledText>
                            ，追求优雅设计。
                        </p>
                        <p>
                            掌握<styledText :classObject='{highlight: true, blue: true}' textContent='CSS3动画' >
                            </styledText><styledText :classObject='{highlight: true, blue: true}' textContent='过渡' ></styledText>
                            <styledText :classObject='{highlight: true, blue: true}' textContent='垂直居中' ></styledText>等常用技术。
                        </p>
                        <p>
                            JS基础扎实，理解<styledText :classObject='{highlight: true, blue: true}' textContent='原型' ></styledText>
                            <styledText :classObject='{highlight: true, blue: true}' textContent='闭包' ></styledText>
                            <styledText :classObject='{highlight: true, blue: true}' textContent='异步流程控制' ></styledText>
                            <styledText :classObject='{highlight: true, blue: true}' textContent='面向对象' ></styledText>等重要概念，熟悉
                            <styledText :classObject='{highlight: true, blue: true}' textContent='ES6' ></styledText>常用新特性。
                        </p>

                        <div class="title">
                            <styledText :classObject='{"title-left": true}' textContent='移动端页面' ></styledText>
                        </div>
                        <p>
                            掌握 <styledText :classObject='{highlight: true, blue: true}' textContent='REM' ></styledText>
                            <styledText :classObject='{highlight: true, blue: true}' textContent='vw/vh' ></styledText>
                            <styledText :classObject='{highlight: true, blue: true}' textContent='媒体查询' ></styledText>等移动端适配技术，熟悉 
                            <styledText :classObject='{highlight: true, blue: true}' textContent='Flex' ></styledText>
                            <styledText :classObject='{highlight: true, blue: true}' textContent='Grid' ></styledText>
                            布局，用于复杂页面制作，拥有
                            <styledText :classObject='{highlight: true, blue: true}' textContent='项目实践经验'></styledText>
                            。
                        </p>

                        <div class="title">
                            <styledText :classObject='{"title-left": true}' textContent='JQuery'></styledText>
                        </div>
                        <p>
                            熟悉<styledText :classObject='{highlight: true, blue: true}' textContent='JQuery'></styledText>
                            常用 API ，了解其内部机制。可使用 JQuery 制作较为复杂的组件，如 
                            <!-- <goldlink href="https://inkymountain.github.io/Slide-demo1/" textContent='无缝轮播'></goldlink>。 -->
                            <span class="lowerLineHeight">
                                <Button href='https://inkymountain.github.io/Slide-demo1/' :classObject='{button: true}' textContent='无缝轮播'></Button>
                            </span>
                        </p>
                    </div>
                    <div class="right skillBlock">

                        <div class="title">
                            <styledText :classObject='{"title-right": true}' textContent='Vue'></styledText>
                        </div>
                        <p>熟悉 
                            <styledText :classObject='{highlight: true, blue: true}' textContent='Vue' ></styledText> 
                            常用功能，能够使用 <styledText :classObject='{highlight: true, blue: true}' textContent='Vue全家桶' ></styledText>开发项目，理解
                            <styledText :classObject='{highlight: true, blue: true}' textContent='生命周期'></styledText> 
                            <styledText :classObject='{highlight: true, blue: true}' textContent='双向绑定'></styledText> 
                            <styledText :classObject='{highlight: true, blue: true}' textContent='组件'></styledText> 
                            等重要概念。
                        </p> 

                        <div class="title">
                            <styledText :classObject='{"title-right": true}' textContent='其它' ></styledText>
                        </div>
                        <p>
                            熟悉
                            <styledText :classObject='{highlight: true, blue: true}' textContent='HTTP'></styledText> 
                            <styledText :classObject='{highlight: true, blue: true}' textContent='Ajax'></styledText> 
                        </p> 
                        <p>
                            掌握 Npm、Git、Webpack、Less、VsCode 等开发辅助工具，熟悉
                            <styledText :classObject='{highlight: true, blue: true}' textContent='模块化'></styledText> 
                            开发流程。
                        </p> 
                        <p>
                            <styledText :classObject='{highlight: true, pink: true}' textContent='流畅阅读'></styledText> 
                            英文文档，以官方文档为
                            <styledText :classObject='{highlight: true, pink: true}' textContent='第一选择'></styledText> 
                            。
                            <styledText :classObject='{highlight: true, pink: true}' textContent='科学上网'></styledText> 
                            面向Google、Stack Overflow编程。:)
                        </p>
                        <p>
                            拥有较强的踩坑后
                            <styledText :classObject='{highlight: true, pink: true}' textContent='填坑能力'></styledText>，对前端抱有热情。
                        </p>
                    </div>
                </main>
            </div>
        </div>
    </section>
</template>

<style lang="less" scoped src='./skills.less'></style>

<script src='./skills.js'>

</script>


