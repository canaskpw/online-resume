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
        // &::before{
        //     content: '';
        //     display: block;
        //     position: absolute;
        //     left: 50%;
        //     bottom: 15px;
        //     transform: translateX(-50%);
        //     background-color: rgba(153, 216, 241, 0.4);
        //     height: 5px;
        //     border-radius: 5px;
        //     width: 100%;
        // }
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

