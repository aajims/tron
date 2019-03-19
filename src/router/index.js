import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Lang from '@/components/Language'
import Privacy from '@/components/tnc/Privacy'
import Term from '@/components/tnc/Term'
import Privacys from '@/components/tnc/En/Privacys'
import Terms from '@/components/tnc/En/Terms'

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
      path: '/En-privacy',
      name: 'privacys',
      component: Privacys
    },
    {
      path: '/En-Term',
      name: 'terms',
      component: Terms
    },
  ]
})
