const { createApp } = require('vue')
import App from './App.vue'
import createRouter from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './store'

createApp(App)
  .use(store)
  .use(createRouter())
  .mount('#app')
