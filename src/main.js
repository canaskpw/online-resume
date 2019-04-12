import Vue from 'vue'
import App from './App'
import fullpage from 'fullpage.js';

Vue.config.productionTip = false

let fullPageInstance = new fullpage('#myfullpage', {
  navigation: true,
  sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey'],
  // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
