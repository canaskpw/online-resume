<template>
    <section class="box-wrapper">
        <div class="contentBox">
            <div class="content">
                <div class="title">
                    <h1>作品展示</h1>
                </div>
                <div class="cards">
                    <!-- <div class="card" v-for="card in cards" :key="card.work.name"></div> -->
                    <div class="card" v-for="(work, index) in works" :key="index">
                        <Card :imgsrc='work.imgsrc' :title='work.title' :intro='work.intro'></Card>
                    </div>
                    <!-- <div class="card">
                        <Card text='多人共享博客'></Card>
                    </div>
                    <div class="card">
                        <Card text='多人共享博客'></Card>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="less" src='./works.less'></style>
<style lang="less" src='../../assets/base.less' ></style>
<script src='./works.js'></script>





