<template>
    <section class="box-wrapper">
        <div class="contentBox">
            <div class="content">
                <div class="dashedCircle" :style="bluebgUrl"></div>
                <div class="blank-left"></div>
                <div class="intro">
                    <div class="avatar" :style="avatarUrl"></div>
                    <ul class="detail">
                        <li class="condition" title='点击复制'>
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-nan"></use>
                                </svg>
                            </span>
                            <span class="text">陈亦涛 22 男</span><span class='copy'></span>
                        </li>
                        <li class="condition" title='点击复制'>
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-zhiwei"></use>
                                </svg>
                            </span>
                            <span class="text">应聘职位 前端工程师</span><span class='copy'></span>
                        </li>
                        <li class="condition" title='点击复制'>
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-icon-"></use>
                                </svg>
                            </span>
                            <span class="text">意向城市 杭州</span><span class='copy'></span>
                        </li>
                        <li class="condition" title='点击复制'>
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-xuexiao"></use>
                                </svg>
                            </span>
                            <span class="text">浙江工业大学 一本</span><span class='copy'></span>
                        </li>
                        <li class="condition" title='点击复制'>
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-star"></use>
                                </svg>
                            </span>
                            <span class="text">工作一年</span><span class='copy'></span>
                        </li>
                        <li class="condition" title='点击复制'>
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-icon"></use>
                                </svg>
                            </span>
                            <span class="text">17767212383</span><span class='copy'></span>
                        </li>
                        <li class="condition" title='点击复制'>
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-email"></use>
                                </svg>
                            </span>
                            <span class="text">cyitao@foxmail.com</span><span class='copy'></span>
                        </li>
                        <li class="condition" title="点击复制">
                            <span class="category">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-qq"></use>
                                </svg>
                            </span>
                            <span class="text">285345240</span><span class='copy'></span>
                        </li>
                    </ul>
                    <div class="socialLinks">
                        <Button :classObject='{button: true}' textContent='个人博客' :href='blogLink'>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-boke"></use>
                            </svg>
                        </Button>
                        <Button :classObject='{button: true}' textContent='GitHub' :href='GitHubLink'>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-git"></use>
                            </svg>
                        </Button>
                    </div>
                    <span class="suggestion">下滑查看更多内容</span>



                    </div>
                </div>
                <div class="blank-right"></div>
            </div>
    </section>
</template>

<style lang="less" scoped src='./intro.less'></style>

<style lang="less" src='../../assets/base.less' ></style>
<script src='./intro.js'></script>





