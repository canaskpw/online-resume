<template>
    <section class="box-wrapper">
        <div class="contentBox">
            <div class="content">
                <div class="dashedCircle" ></div>
                <div class="blank-left"></div>
                <div class="intro">
                    <div class="avatar"></div>
                    <div class="text">
                        <span class="self">
                            <span class="name">陈亦涛</span>  
                            <span class="age">22</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-nan"></use>
                            </svg>
                        </span>
                        <span class="target">岗位：前端工程师</span>
                        <span class="collage">浙江工业大学</span>
                        <div class="buttons">
                            <a class="pdf"  href='../../static/resume.pdf'>PDF简历下载</a>
                            <a class="contact" @click="showContact" href="#">联系方式</a>
                        </div>
                        <span class="suggestion">下滑查看更多内容</span>
                    </div>
                </div>
                <div class="blank-right"></div>
            </div>
        </div>
    </section>
</template>

<style lang="less" src='./intro.less'></style>
<style lang="less" src='../../assets/base.less' ></style>
<script src='./intro.js'></script>




