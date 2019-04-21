<template>
  <div id="app">
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <Intro></Intro>
      </div>
      <div class="section">
        <Works></Works>
      </div>
      <div class="section">
        <Works2></Works2>
      </div>
      <div class="section" >
        <Skills></Skills>
      </div> 
      <div class="section" >
        <Experience></Experience>
      </div> 
    </full-page>
  </div>
</template>

<script src='./App.js'></script>
<style lang="less" src='@/assets/init.less'></style>
<style lang="less" src='./App.less'></style>

