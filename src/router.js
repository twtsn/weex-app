/*global Vue*/
import Router from 'vue-router'
import Index from '@/view/index'
import MyWallet from '@/view/my/my-wallet'
import MyCollect from '@/view/my/my-collect'
import ChatRoom from '@/view/message/chat-room.vue'
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/chat/:id',
      name: 'chart',
      component: ChatRoom
    },
    {
      path: '/my-wallet',
      name: 'my-wallet',
      component: MyWallet
    },
    {
      path: '/my-collect',
      name: 'my-collect',
      component: MyCollect
    }
  ]
})
