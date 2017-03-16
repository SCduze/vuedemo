// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vueresource from "vue-resource"
Vue.use(VueRouter)
Vue.use(Vueresource)
import Create from './pages/Create.vue'
import Index from './pages/Index.vue'




const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/",component:Index},
    {path:"/Index",component:Index},
     {path:"/Create",component:Create}
  ]
})

new Vue({
  router,
  template:`
    <div>
       <transition name="fade" mode="out-in">
          <router-view></router-view>
       </transition>
    </div>
  `,
  data(){
    return{
      count:1
    }
  },
  created(){
    if(this.count == 0){
      router.push({path:"/Index"})
    }else{
       router.push({path:"/Create"})
    }
  }
}).$mount("#app")
