import Vue from 'vue'
import Router from 'vue-router'
// import test from '@/components/test'
import Home from '@/components/Home'
// import MainCalendar1 from '@/components/MainCalendar1'
import AddEvent from '@/components/AddEvent'
import IntoEvent from '@/components/IntoEvent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      meta: {index: 0},
      component: Home 
    },
    {
      path: '/addevent',
      name: 'AddEvent',
      meta: {index: 1},
      component: AddEvent 
    },
    {
      path: '/intoevent',
      name: 'IntoEvent',
      meta: {index: 1},
      component: IntoEvent 
    },
  ]
})
