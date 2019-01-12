import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/pages/Book'
import Group from '@/pages/Group'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Movie from '@/pages/Movie'
import Radio from '@/pages/Radio'
import Registration from '../components/login/Registration'

Vue.use(Router)
// 路由配置
export default new Router({
  routes: [{
    path: '/book',
    name: 'Book',
    component: Book
  }, {
    path: '/group',
    name: 'Group',
    component: Group
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/movie',
    name: 'Movie',
    component: Movie
  }, {
    path: '/radio',
    name: 'Radio',
    component: Radio
  }, {
    path: '/registration',
    name: 'Registration',
    component: Registration
  }
]
})
