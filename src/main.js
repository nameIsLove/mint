// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/global.css'
import store from './store/store'

Vue.config.productionTip = false

// 引入全部组件
/* eslint-disable*/
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
// import MyMintUIPlugin  from './MyMintUIPlugin'
// Vue.ues(MyMintUIPlugin)

import obj from './GoodsTools'
window.test = obj

import Axios from 'axios'
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = 'http://localhost:8080/'
Axios.interceptors.request.use(function(config){
  Mint.Indicator.open({
    text: '拼命加载中...',
    spinnerType: 'fading-circle'
  });
  return config
})
Axios.interceptors.response.use(function(response){
  Mint.Indicator.close()
  return response
})

// 自己插件
import Installer from '@/plugins/installer.js'
Vue.use(Installer)

import MyUl from '@/components/common/MyUl.vue'
Vue.component(MyUl.name, MyUl)
import MyLi from '@/components/common/MyLi.vue'
Vue.component(MyLi.name, MyLi)
import NavBar from '@/components/common/NavBar.vue'
Vue.component(NavBar.name, NavBar)
import Comment from '@/components/common/Comment.vue'
Vue.component(Comment.name,Comment)
import Swipe from '@/components/common/Swipe.vue'
Vue.component(Swipe.name,Swipe)
//  over

// 过滤
Vue.filter('controllShow', (str, num)=>{
  if(str.length <= num){
    return str
  }
  if(str.length > num){
    return str.substr(0, num-1) + '...'
  }
  
})

// over

// vue-preview   loading动画
import VuePreview from 'vue-preview'
 
// defalut install
Vue.use(VuePreview)
 
// over

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
