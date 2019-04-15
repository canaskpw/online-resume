import Vue from 'vue'
import App from './App/App.vue'
import VueFullPage from 'vue-fullpage.js'
import { Button, MessageBox } from 'element-ui';


Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
Vue.config.productionTip = false
Vue.use(VueFullPage);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
