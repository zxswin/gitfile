import './common/css/main.less';
import './common/js/resize/resize.js';

import Vue from 'vue'
import Vuex from 'vuex';
import store from './store/'
import App from './App'
import router from './router'
import vueResource from 'vue-resource';
Vue.config.productionTip = false;

Vue.use(vueResource);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

