<template>
    <a :href='href' :class='classObject'>{{textContent}}</a>    
</template>


<style lang="less" scoped>
@import '../assets/var.less';
    a{
        padding: 15px 20px;
        background-color: rgb(238, 231, 215);
        border-radius: 5px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.1s;
        &:hover{
            box-shadow: @goldShadow;
        }
    }
</style>


<script>
export default {
    props: {
        href: String,
        textContent: String,
        classObject: Object,
    }
}
</script>

