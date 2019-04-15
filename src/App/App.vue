<template>
  <div id="app">
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <Intro></Intro>
      </div>
      <div class="section" >
        <section class="box-wrapper">
          <div class="contentBox">
            <div class="content">
              Section2
            </div>
          </div>
        </section>
      </div>
      <div class="section" >
        <section class="box-wrapper">
          <div class="contentBox">
            <div class="content">
              Section3
            </div>
          </div>
        </section>
      </div>
        <!-- <button class="prev" @click="$refs.fullpage.api.moveSectionUp() or moveSectionDown()">Prev</button> -->
    </full-page>
  </div>
</template>

<script src='./App.js'></script>
<style lang="less" src='@/assets/init.less'></style>
<style lang="less" src='@/App/App.less'></style>

