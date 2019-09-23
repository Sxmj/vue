import FenLei from '../pages/FenLei/FenLei.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import FirstView from '../pages/FirstView/FirstView.vue'
import Login from '../pages/Login/Login.vue'
import FenLeiList from '../pages/FenLeiList/FenLeiList.vue'
import FaView from '../pages/FaView/FaView.vue'


export default[
  {
    path:'/login',
    component:Login
  },
  {
    path:'/shiwu',
    component: ShiWu
  },
  {
    path:'/personal',
    component: Personal,
  },
  {
    path:'/fenlei',
    component: FenLei,
    children:[
      {
        path: '/fenlei/firstleilist/:id',
        component:FenLeiList
      },
      {
        path: '/fenlei',
        redirect: '/fenlei/firstleilist/0'
      }
    ]
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
     path: '/firstview',
     component: FirstView
  },
  {
    path: '/faview',
    component: FaView
  },
  {
    path: '/',
    redirect:'firstview'
  },
]