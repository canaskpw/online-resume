<template>
    <article>
        <a class="img-wrapper" :href='previewLink' target="_blank">
            <img :src="imgsrc"  alt="作品图片" v-if="imgsrc">
        </a>
        <header v-html="title"></header>
        <section class="introduction">
            <div class="keywords" v-html="keywords"></div>
            <p class="description" v-html="description"></p>
        </section>
        <footer class="preview">
            <Button v-if="!isQRCode||innerWidth<=500" :classObject='{button: true}' textContent='预览' :href='previewLink'></Button>
            <img v-if="isQRCode==='music'&&innerWidth>500" src="../../static/img/musicClient-preview.jpg" alt="音乐网站二维码">
            <img v-if="isQRCode==='tomato'&&innerWidth>500" src="../../static/img/tomato-preview.jpg" alt="番茄工作法小程序二维码">
        </footer>
    </article>
</template>

<style lang="less" scoped src='./card.less'></style>
<script src='./card.js'></script>

