import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import createTodo from '@/components/CreateTodo'
import updateTodo from '@/components/UpdateTodo'
import DetailTodo from '@/components/DetailTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      component: DetailTodo,
      props: true
    },
    {
      path: '/createTodo',
      name: 'createTodo',
      component: createTodo
    },
    {
      path: '/updateTodo/:id',
      name: 'updateTodo',
      component: updateTodo,
      props: true
    }
  ]
})
