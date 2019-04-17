<template>
    <article>
        <div class="img-wrapper">
            <img :src="imgsrc"  alt="作品图片" v-if="imgsrc">
        </div>
        <header>{{title}}</header>
        <section class="introduction">
            <div class="keywords" v-html="keywords"></div>
            <p class="description" v-html="description"></p>
        </section>
    </article>
</template>

<style lang="less" scoped src='./card.less'></style>
<script src='./card.js'></script>

