<template>
    <article>
        <div class="img-wrapper">
            <img :src="src"  alt="作品图片" v-if="src">
        </div>
        <header>{{text}}</header>
    </article>
</template>

<style lang="less" scoped src='./card.less'></style>
<script src='./card.js'></script>

