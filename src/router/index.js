import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Member = () => import('@/components/Member/Member.vue')
const Shopcart = () => import('@/components/Shopcart/Shopcart.vue')
const Search = () => import('@/components/Search/Search.vue')
const NewsList = () => import('@/components/News/NewsList.vue')
const NewsDetail = () => import('@/components/News/NewsDetail.vue')
const PhotoList = () => import('@/components/photo/PhotoList.vue')
const PhotoDetail = () => import('@/components/photo/PhotoDetail.vue')
const GoodsShow = () => import('@/components/Goods/GoodsShow.vue')
const GoodsDetail = () => import('@/components/Goods/GoodsDetail.vue')
const GoodsComment = () => import('@/components/Goods/GoodsComment.vue')



Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/Home',
      name: '/Home',
      component: Home
    },
    {
      path: 'Home',
      name: 'Home',
      redirect: '/Home'
    },
    {
      path: '/',
      name: '/',
      redirect: '/Home'
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/news/list',
      name: 'NewsList',
      component: NewsList
    },
    // params方式
    {
      path: '/news/detail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    // query方式
    {
      path: '/photo/list',
      name: 'PhotoList',
      component: PhotoList
    },
    {
      path: '/photo/detail/:id',
      name: 'PhotoDetail',
      component: PhotoDetail
    },
    {
      path: '/goods/list/:page',
      name: 'GoodsShow',
      component: GoodsShow
    },
    {
      path: '/goods/detail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/goods/comment',
      name: 'GoodsComment',
      component: GoodsComment
    }
  ]
})
