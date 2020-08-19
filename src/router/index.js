import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Values from '../views/Values.vue'
import Outreach from '../views/Outreach.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/values',
    name: 'Values',
    component: Values
  },
  {
    path: '/outreach',
    name: 'Outreach',
    component: Outreach
  },
  {
    path: '/otherevents',
    name: 'Other Events',
    component: () => import('../views/OtherEvents.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/socialmedia',
    name: 'Social Media',
    component: () => import('../views/SocialMedia.vue')
  },
  {
    path: '/latestnews',
    name: 'Latest News',
    component: () => import('../views/LatestNews.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
