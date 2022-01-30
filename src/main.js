const { createApp } = require('vue')
import App from './App.vue'
import createRouter from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(createRouter())
  .mount('#app')
