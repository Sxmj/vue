//引入当前的ajax请求
import ajax from './ajax.js'
//BASE = 对应的响应的服务器的地址
const BASE = './api'

//获取分类的列表
export const reqList = () => ajax(`/fenlei`)

//获取短信验证码
export const reqMessge = (phone) => ajax(BASE + `/sendCode`, {
  phone
})
//验证手机号和密码是否正确
export const reqPhoneLogin = (phone, messge) => ajax(BASE + `/login_sms`, {
  phone,
  messge
})
//验证登录名和密码是否正确
export const reqPasswordLogin = (name, password) => ajax(BASE + `/login_pwd`, {
  name,
  password
})


//获取识物的信息
export const reqShiwu = () => ajax('/shiwu')
//获取甄选家信息
export const reqZxj = () => ajax('/faview')