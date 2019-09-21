<template>
  <div class="login">
    <div class="headerTop">
      <span class="room iconfont icon-menu-home-normal"></span>

      <span class="wangyi">网易严选</span>
      <!-- <span class="fangda iconfont icon-gouwuche"></span> -->
      <!-- <span class="gouwu iconfont icon-fangdajing"></span>  -->
      <span class="fangda iconfont icon-gouwuche"></span>
      <span class="gouwu iconfont icon-fangdajing"></span>
    </div>
    <!-- 静态显示的两种登录方式 -->
    <div class="middle" v-if="a==1">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div id="phone" :class="{'on':isOn}"  @click="a=2">
        <span class="iconfont icon-shouji" @click="qieHuan=!qieHuan">手机号快捷登录</span>
      </div>
      <div id="phonee" :class="{'on':!isOn}" @click="a=3">
        <span class="iconfont icon-message">邮箱账号登录</span>
      </div>
    </div> 
    <!-- 手机登录方式 -->
    <div class="xia" v-else-if="a==2">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="midd">
        <form action>
          <section>
            <input type="tel" maxlength="11" v-model="phone" v-validate="'required|phone'" name="phone" placeholder="请输入手机号" />
            <span
                style="color:green"
                v-show="errors.has('phone')"
                class="help is-danger"
              >{{ errors.first('phone') }}</span>
          </section>
          <section>
            <input type="tel" maxlength="6" v-model="messge" v-validate="'required|messge'" name="messge" placeholder="请输入短信验证码" />
            <span
                style="color:green"
                v-show="errors.has('messge')"
                class="help is-danger"
              >{{ errors.first('messge') }}</span>
            <button :class="{col:isRight}" :disabled="!isRight||this.time>0" @click.prevent="sendCode">{{time>0?`过${time}再发送`:`获取验证码`}}</button>
          </section>
        </form>
      </div>
      <div class="dd">
        <div class="shang">
          <a>遇到问题?</a>
          <div>使用密码验证登录</div>
        </div>
        <button class="zhong" @click.prevent="login">登录</button>
        <form action="form_action.asp" method="get">
          <input type="checkbox" name="vehicle" value="Car" checked="checked" />我同意服务条款
        </form>
      </div>
    </div>
    <!-- 短信登录方式 -->
    <div class="duanXin" v-else-if="a==3">
      <div class="duanx">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="duanxi">
        <form action>
          <section>
            <input type="tel" maxlength="11" placeholder="请输入邮箱账号" />
          </section>
          <section>
            <input type="tel" maxlength="6" placeholder="请输入密码" />
            <button>获取验证码</button>
          </section>
        </form>
      </div>

      <div class="duanxx">
        <div class="shang">
          <a>忘记密码?</a>
          <div>短信快捷登录</div>
        </div>
        <button class="zhong">登录</button>
        <form action="form_action.asp" method="get">
          <input type="checkbox" name="vehicle" value="Car" checked="checked" />我同意服务条款
        </form>
      </div>
      <div class="duanxFooter">
        <span>其他登录的方式 ></span>
      </div>
    </div>
  </div>
</template>
<script>
import {reqMessge,reqPhoneLogin,reqPasswordLogin} from '../../api/index'
export default {
  //只是放置初始化的数据和表达式中的值，不能放静态属性的值
  data() {
    return {
      isOn: true ,//切换是否常亮
      qieHuan:true,//手机登录方式，还是短信登录方式
      phone:'',//输入手机号码内容
      time:0,//手机发请求时的倒计时
      messge:'',//发送过来的短信验证码
      name:'',//获取到的用户名
      password:'',//登录密码
      a:1
    };
  },
  computed: {
    //isRight不写在data中的原因就是isRight是根据计算属性计算出来的不是状态值，
    isRight(){
      //使用正则表达式匹配手机号
      return /^1(3|4|5|7|8)\d{9}$/.test(this.phone)
    }
  },
  methods: {
    // goPhone(){
    //   this.$router.replace('/login')
    // }

    //sendCode的作用有两个，其中一个点击之后是倒计时，另一个是点击发送请求，获取短信验证码
    async sendCode(){
      //倒计时功能，
      this.time=10
       this.timeId=setInterval(() => {
         this.time--
         //只有当time小于0才能被清除
         if(this.time<0){
           this.time=0
           clearInterval(this.timeId)
         }
       }, 1000);
      //点击发送请求，获取短信验证码,需要引入api接口
      const result=await reqMessge(this.phone)
      if(result.code===0){
          alert('获取成功！')
        }else{
          this.time=0
          clearInterval(this.timeId)
          alert('获取失败！')
        }
      // console.log(result)
    },
    //根据手机号获取到验证码，拿到验证码之后，输入进行登录
    async login(){
      const result=await reqPhoneLogin(this.phone,this.messge)
      // console.log('result')
      if(result.code===0){
        alert()
        this.$store.replace('')
      }
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login
  width: 100%
  height: 100%
  position: relative
  // 头部样式
  .headerTop
    width: 100%
    height: 45px
    // background-color green
    overflow: hidden
    border-bottom: 1px solid #ddd
    .room
      font-size: 25px
      height: 40px
      line-height: 40px
      text-align: center
    .fangda
      font-size: 22px
      height: 40px
      line-height: 40px
      text-align: center
      float: right
      margin-right: 20px
    .gouwu
      font-size: 22px
      height: 40px
      line-height: 40px
      text-align: center
      float: right
      margin-right: 10px
    .wangyi
      font-size: 30px
      height: 40px
      line-height: 40px
      text-align: center
      // width 100%
      margin-left: 100px
      //两部分样式
  .middle
    width: 100%
    height: 100%
    // background-color red
    // position: fixed
    left: auto
    top: 300px
    .logo
      width 100%
      height 200px
      img
        // display: block
        width: 100px
        height: 40px
        margin: 100px auto
        margin-left 140px
    #phone
      width: 90%
      height: 40px
      margin: 0 auto
      border: 1px solid red
      &.on
        background-color: red
      span
        display: inline-block
        text-align: center
        width: 100%
        height: 40px
        font-size: 16px
        line-height: 40px
        font-color white
    #phonee
      width: 90%
      height: 40px
      // background-color: green
      margin: 5px auto
      &.on
        background-color: red
      span
        text-align: center
        height: 40px
        width: 100%
        font-size: 16px
        line-height: 40px
        display: inline-block
        border: 1px solid red
        //手机端样式
  .xia
    width 100%
    height 100%
    .logo
      img
        width: 100px
        height: 40px
        display: block
        margin: 30px auto
    .midd
      width: 100%
      height: 120px
      form
        section, position relative
          width: 100%
          height: 45px
          margin-top: 15px
          input
            width: 90%
            height: 45px
            margin-left: 20px
            // border 0
            outline: none
            border-bottom: red
            // text-align center
          button
            position: absolute
            right: 20px
            height: 40px
            font-size: 12px
            background-color: white
            margin-top: 3px
            border: 1px solid #ddd
            border-radius: 4px
            color #cccccc
            &.col
              color black 
          span
            display: inline-block
            margin-left: 20px
    .dd
      width: 100%
      height: 300px
      // background-color: cyan
      .shang
        width: 100%
        height: 50px
        a
          float: left
          margin-left: 20px
        div
          float: right
          margin-right: 20px
          font-size: 14px
      .zhong
        width: 90%
        height: 40px
        border: 1px solid #ddd
        margin-left: 18px
        background-color: white
        border-radius: 5px
        background-color: red
        color: white
      form
        margin: 20px
  
  .duanXin
    width: 100%
    height: 100%
    .duanx
      img
        width: 100px
        height: 40px
        display: block
        margin: 30px auto
    .duanxi
      width: 100%
      height: 120px
      form
        section, position relative
          width: 100%
          height: 45px
          margin-top: 10px
          input
            width: 90%
            height: 45px
            margin-left: 20px
            // border 0
            outline: none
            border-bottom: red
            // text-align center
          button
            position: absolute
            right: 20px
            height: 40px
            font-size: 12px
            background-color: white
            margin-top: 3px
            border: 1px solid #ddd
            border-radius: 2px
          span
            display: inline-block
            margin-left: 20px
    .duanxx
      width: 100%
      height: 160px
      // background-color: cyan
      .shang
        width: 100%
        height: 50px
        a
          float: left
          margin-left: 20px
        div
          float: right
          margin-right: 20px
          font-size: 14px
      .zhong
        width: 90%
        height: 40px
        border: 1px solid #ddd
        margin-left: 18px
        background-color: white
        border-radius: 5px
        background-color: red
        color: white
      form
        margin: 20px
    .duanxFooter
      width 100%
      height 30px
      text-align center
</style>