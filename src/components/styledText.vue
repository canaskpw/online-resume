<template>
    <div :class='classObject'>{{textContent}}</div>    
</template>


<style lang="less" scoped>
@import '../assets/var.less';
    .highlight{
        background-color: rgb(253, 253, 253);
        border-radius: 5px;
        padding: 3px 4px;
        display: inline;
        font-weight: bold;
        margin: 0 5px;
        @media screen and (max-width: 500px){
            padding: 0 3px;
            margin: 1px;  
            border-radius: 3px;
        }
        @media screen and (max-height: 600px) {
            padding: 0 1px;
        }
    }
    .pink{
        color: rgb(245, 149, 149);
    }
    .blue{
        color: rgb(66, 170, 211);
    }
    .title-left, .title-right{
        font-size: 28px;
        position: relative;
        margin: 5px 0;
        font-weight: bold;
        display: inline-block;
        @media screen and (max-width: 500px){
            font-size: 12px;
            margin: 2px;
        }
    }
    .title-left{
        color: @gold;
    }
    .title-right{
        color: @darkBlue;
    }
    .term{
        padding-left: 20px;
    }
</style>


<script>
export default {
    props: {
        textContent: String,
        classObject: Object,
    }
}
</script>

