// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'

import 'vant/lib/vant-css/index.css'

import App from './App'
import router from './router'
import store from './store'

// add eruda when not in production
if (process.env.NODE_ENV !== 'prod' || process.env.NODE_ENV !== 'production') {
  const src = '//cdn.jsdelivr.net/npm/eruda'
  document.write(`<script src=${src}></script>`)
  document.write('<script>eruda.init();</script>')
}

Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
