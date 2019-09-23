<template>
  <div class="shiwu">
    <div class="headerTop">
      <span class="room iconfont icon-menu-home-normal"></span>
      <span class="wangyi">发现</span>
      <span class="zhenView">甄选家</span>
      <!-- <span class="fangda iconfont icon-gouwuche"></span> -->
      <!-- <span class="gouwu iconfont icon-fangdajing"></span>  -->
      <span class="fangda iconfont icon-gouwuche"></span>
      <span class="gouwu iconfont icon-fangdajing"></span>
    </div>
    <div class="menu">
      <ul class="menuu">
        <li>推荐</li>
        <li>好货内部价</li>
        <li>选购指南</li>
        <li>回购榜</li>
        <li>晒单</li>
        <li>达人</li>
        <li>HOME</li>
      </ul>
    </div>
    <div class="shili">
        <div class="xiaozhou">
            <img src="https://yanxuan.nosdn.127.net/0d598863e22ec3e40ae27397628463cf.jpg" alt="">
            <span>网易未央:小周</span>
        </div>
        <div class="da">秋天最要紧的,就是吃大闸蟹</div>
        <span>大闸蟹礼券限时8.8折</span>
        <p>6689人看过</p>
        <img  class="datu" src="https://yanxuan.nosdn.127.net/debe90c6dbfa8593f4a17b59ddbcf466.jpg" alt="">
    </div>
    <div class="xuanmei">
        <div class="xue">
          <img src="https://yanxuan.nosdn.127.net/d9d036fac85df6b30cf8c184e030323c.png" alt="">
          <span class="meimei">选妹</span>
        </div>
        <div class="changnian">常年断货的严选爆品终于上架了，回头客都在抢!</div>
        <div class="duanhuo">
          <img src="https://yanxuan.nosdn.127.net/6f5e7bb94350b7eed05134a9b1d83200.jpg" alt="">
          </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.scroll = new BScroll(".menu", {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        click: true
    });
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shiwu
  width: 100%
  height: 100%
  .headerTop
    z-index 10
    width: 100%
    height: 45px
    position fixed
    top 0
    // background-color green
    overflow: hidden
    background-color white
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
      font-size: 13px
      font-weight: 700
      color: red
  .menu
    z-index 10
    height: 36px
    width 100%
    position fixed
    top 50px
    // background-color: cyan
    text-align: center
    background-color white
    .menuu
      width 100%
      border-bottom 1px solid #ddd 
      display: block
      width: 375px
      white-space: nowrap
      overflow: hidden
      display: block
      // white-space:nowrap;
      // width:500px;
      // overflow:auto;
      li
        display: inline-block
        // float left
        height: 36px
        text-align: center
        line-height: 36px
        margin-left: 18px
        font-size: 14px
        font-weight: 400
  .shili
    margin-top 100px
    height 250px

    border-bottom 1px solid #ddd
    position relative
    // background-color red
    .xiaozhou
      // height 100%
      width 50%
      height 60px
      // background-color cyan 
      img
        width 30px
        height 30px
        padding 5px
        border-radius 50%
        margin-left 10px
        margin-top 10px
        float left 
        // folat left
        // margin 18px
      span
        height 60px
        font-size 12px
        line-height 60px
        float left

    .da
      margin-top 20px
      height 40px
      width 50%
      // background-color green
      font-size 18px
      font-weight 400
      padding 10px
      margin-bottom 10px
    span 
      margin-left 10px
      color #bbb
    p
      color #bbb
      margin-left 10px
      margin-top 30px
         
    .datu 
      position absolute
      top 20%
      right 8%
      width 120px 
      height 120px
      border-radius 5px
  .xuanmei
    margin-top 10px
    height 400px
    // background-color red
    .xue
      height 60px
      img
        width 30px
        height 30px
        padding 5px
        border-radius 50%
        margin-left 10px
        margin-top 10px
        float left 
          // folat left
          // margin 18px
      .meimei
        height 60px
        font-size 12px
        line-height 60px
        // vertical-align:middle
        // float left
        // display inline
        // vertical-align:center
    .changnian
      padding 10px
      font-size 18px
    .duanhuo
      width 90%
      background-color cyan 
      height 240px
      margin 0 auto
      // border-radius 5px
      img 
        width 100%
        height 240px
        border-radius 6px
</style>