<template>
    <section class="box-wrapper">
        <div class="contentBox">
            <div class="content">
                <header class="title">
                    <h1>作品展示</h1>
                </header>
                <main class="cards">
                    <div class="card" v-for="(work, index) in works" :key="index" >
                        <Card :imgsrc='work.imgsrc' :title='work.title' :previewLink='work.previewLink' :intro='work.intro' :isQRCode='work.isQRCode'></Card>
                    </div>
                </main>
            </div>
        </div>
    </section>
</template>

<style lang="less" src='./works.less'></style>
<style lang="less" src='../../assets/base.less' ></style>
<script src='./works.js'></script>





