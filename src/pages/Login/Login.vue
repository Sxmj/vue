<template>
  <div class="phone">
    <div class="headerTop">
      <span class="room iconfont icon-menu-home-normal"></span>

      <span class="wangyi">网易严选</span>
      <!-- <span class="fangda iconfont icon-gouwuche"></span> -->
      <!-- <span class="gouwu iconfont icon-fangdajing"></span>  -->
      <span class="fangda iconfont icon-gouwuche"></span>
      <span class="gouwu iconfont icon-fangdajing"></span>
    </div>
    <div class="duanXin">
      <div class="duanx">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="duanxi">
        <form action>
          <section>
            <input type="tel" maxlength="11" placeholder="请输入手机号" />
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
        <span @click="goshouji">其他登录的方式 ></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.phone
  width: 100%
  height: 100%
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