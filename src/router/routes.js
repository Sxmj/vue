import FenLei from '../pages/FenLei/FenLei.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import FirstView from '../pages/FirstView/FirstView.vue'
import Login from '../pages/Login/Login.vue'




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
    component: FenLei
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
    path: '/',
    redirect: '/firstview'
  },
  

]