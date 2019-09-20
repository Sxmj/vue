import Vue from 'vue'
import VeeValidate, {
  Validator
} from 'vee-validate'
//配置为中文
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate);
Validator.localize(Validator.locale, {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    messge: '密码'
  }
});
Validator.extend('phone', {
  getMessage: () => `请输入正确的手机号码`,
  validate: (value) => {
    const reg = /^1(3|4|5|7|8)\d{9}$/;
    return reg.test(value)
  }
});
Validator.extend('messge', {
  getMessage: () => `请输入正确短信验证码`,
  validate: (value) => {
    const reg = /\d{6}/;
    return reg.test(value)
  }
});