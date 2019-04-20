<template>
    <a  :href="href" target="_blank" >{{textContent}}</a>    
</template>


<style lang="less" scoped>
@import '../assets/var.less';
a{
    font-weight: bold;
}
</style>


<script>
export default {
    props: {
        textContent: String,
        href: String,
    }
}
</script>

