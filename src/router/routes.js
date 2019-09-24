import FenLei from '../pages/FenLei/FenLei.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import FirstView from '../pages/FirstView/FirstView.vue'
import Login from '../pages/Login/Login.vue'
import FenLeiList from '../pages/FenLeiList/FenLeiList.vue'
import FaView from '../pages/FaView/FaView.vue'
import Shiwuerji from '../pages/Shiwuerji/Shiwuerji.vue'

export default[
  {
    path:'/login',
    component:Login,
    meta:{
      isShow:true
    }
  },
  {
    path:'/shiwu',
    component: ShiWu,
    meta: {
      isShow: true
    },
    children:[
      {
        path:'/shiwu/:id',
        component:Shiwuerji,
      },
      {
        path:'/shiwu',
        redirect:'/shiwu/0'
      },
      
    ]
  },
  {
    path:'/personal',
    component: Personal,
    meta: {
      isShow: false
    }
  },
  {
    path:'/fenlei',
    component: FenLei,
    meta: {
      isShow: true
    },
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
    component: ShopCart,
    meta: {
      isShow: true
    }
  },
  {
     path: '/firstview',
     component: FirstView,
     meta: {
       isShow: true
     }
  },
  {
    path: '/faview',
    component: FaView,
    meta: {
      isShow: false
    }
  },
  {
    path: '/',
    redirect:'firstview',
  },
]