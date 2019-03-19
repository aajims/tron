import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Lang from '@/components/Language'
import Privacy from '@/components/tnc/Privacy'
import Term from '@/components/tnc/Term'
import Privacys from '@/components/tnc/En/Privacy'
import Terms from '@/components/tnc/En/Term'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/language',
      name: 'lang',
      component: Lang
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/term',
      name: 'term',
      component: Term
    },
    {
      path: '/En/privacy',
      name: 'privacys',
      component: Privacys
    },
    {
      path: '/En/Terms',
      name: 'terms',
      component: Terms
    },
  ]
})
