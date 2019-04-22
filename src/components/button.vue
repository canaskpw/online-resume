<template>
    <a :href='href' target="_blank" :class='classObject'>{{textContent}}</a>    
</template>


<style lang="less" scoped>
@import '../assets/var.less';
    .button{
        padding: 10px 10px;
        background-color: rgba(238, 231, 215, 0.9);
        border-radius: 5px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.2s;
        color: @gold;
        display: inline-block;
        @media screen and (max-width: 500px){
            font-size: 12px;
            padding: 3px;
        }
        @media screen and (max-height: 600px) {
            font-size: 15px;
            padding: 5px;
        }
        @media screen and (max-height: 500px) {
            padding: 1px;
            font-size: 12px;
        }
        &:hover{
            box-shadow: @goldShadow;
        }
    }
    .highlight{
        background-color: rgb(235, 235, 235);
        color: @gold;
        padding: 3px 4px;
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

