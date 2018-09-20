import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import DemoHome from './components/DemoHome'
import DemoAbout from './components/DemoAbout'
import DemoContact from './components/DemoContact'
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes:[
    {path: '/', component : DemoHome},
    {path: '/about', component: DemoAbout},
    {path: '/contact', component: DemoContact}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})