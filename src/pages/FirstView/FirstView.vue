<template>
  <div class="wrapper">
    <div class="headerTop">
      <div class="logo">
        <span>网易严选</span>
      </div>
      <input
        class="inp"
        type="text"
        placeholder="搜索内容"
        style="background:#EDEDED;height:30px;border-radius:5px"
      />
      <div class="btn" style="background:#EDEDED" @click="gotoLogin">登录</div>
    </div>
    <div class="wrapper">
      <ul class="content">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <!-- <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>-->
      </ul>
      <span class="iconfont icon-icon_affiliations_li" @click="isShow=!isShow"></span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../public/img/96055517125bb2233636dee9fc1ca183.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/img/b0098527aac5942dfefc0efd9a27e4f6 (1).jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/img/e03c9b74a854d4c31c77720dc1e8433a.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/img/e47220bbd8030b9c26f574eeb769dfde.jpg" alt />
        </div>
        <ul  class="swiper-pagination"></ul>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <div class="moreCate" v-show="isShow">
      <div class="rig1">全部频道</div>
      <transition name="fade">
        <div class="rig" @click="isShow=!isShow">
          <span class="iconfont icon-icon_affiliations_li"></span>
        </div>
      </transition>
      <div class="lei">
        <div style="color:red">推荐</div>
        <div>居家生活</div>
        <div>服饰鞋包</div>
        <div>美食酒水</div>
        <div>个护清洁</div>
        <div>母婴亲子</div>
        <div>运动旅行</div>
        <div>数码家电</div>
        <div>全球特色</div>
      </div>
    </div>
    <div class="zhezhao" v-show="isShow" @click="isShow=!isShow"></div>
    <div class="mid">
      <div class="midContent">
        <img src="../../../public/img/zuo.png" />
        <span>网易自营品牌</span>
      </div>
      <div class="midContent">
        <img src="../../../public/img/zhong.png" />
        <span>30天无忧退货</span>
      </div>
      <div class="midContent">
        <img src="../../../public/img/you1.png" />
        <span>48小时快速退款</span>
      </div>
    </div>
    <div class="list">
      <div class="one">
        <img src="../../../public/img/c6fd8835a6400b7da7a016ad85506b69.png" alt />
        <span>新品首发</span>
      </div>
      <div class="one">
        <img src="../../../public/img/content/fede8b110c502ec5799702d5ec824792.png" alt />
        <span>居家生活</span>
      </div>
      <div class="one">
        <img src="../../../public/img/content/896a3beac514ae8f40aafe028e5fec56.png" alt />
        <span>服饰鞋包</span>
      </div>
      <div class="one">
        <img src="../../../public/img/content/37520d1204a0c55474021b43dac2a69e.png" alt />
        <span>美食酒水</span>
      </div>
      <div class="one">
        <img src="../../../public/img/content/6c3bd9d885c818b1f73e497335a68b47.png" alt />
        <span>个人清洁</span>
      </div>
      <div class="one">
        <img src="../../../public/img/content/559d2a240ec20b096590a902217009ff.png" alt />
        <span>母婴亲子</span>
      </div>
      <div class="one">
        <img src="../../../public/img/c6fd8835a6400b7da7a016ad85506b69.png" alt />
        <span>运动旅行</span>
      </div>
      <div class="one">
        <img src="../../../public/img/c6fd8835a6400b7da7a016ad85506b69.png" alt />
        <span>数码家电</span>
      </div>
      <div class="one">
        <img src="../../../public/img/c6fd8835a6400b7da7a016ad85506b69.png" alt />
        <span>全球特色</span>
      </div>
      <div class="one">
        <img src="../../../public/img/c6fd8835a6400b7da7a016ad85506b69.png" alt />
        <span>好货抄底</span>
      </div>
    </div>
    <div class="new">
      <div class="title">
        <span class="iconfont icon-line"></span>
        <span>新人专享礼</span>
        <span class="iconfont icon-line"></span>
      </div>
      <div class="neiRong">
        <div class="neiLeft">
          <span>新人专享礼包</span>
          <div class="datu">
            <img src="../../../public/img/content/ba4d635ec94ad95b28bfab6500900659.png" />
          </div>
        </div>
        <div class="neiRight">
          <div class="top" style="background-image:url(?imageView&amp;thumbnail=343x220&amp;quality=75);background-size:100% 100%;" >
            <div>福利社</div>
            <span>今日特价</span>
            <!-- <img src="https://yanxuan-item.nosdn.127.net/1dea60fa9535d452a080c05e4befe244.png?imageView&amp;thumbnail=200x200&amp;quality=75"> -->
          </div>
          <div class="bottom">
            <div>福利社</div>
            <span>今日特价</span>
          </div>
        </div>
      </div>
    </div>
    <div class="zhiGong"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      //配置自动轮播
      autoplay: {
            disableOnInteraction: false,
            delay:2000
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    this.scroll = new BScroll(".wrapper", {
      scrollY: true,
      click: true
    });
  },
  methods: {
    gotoLogin() {
      this.$router.replace("/personal");
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.wrapper
  background-color: white
  // position relative
  .headerTop
    margin-top: 10px
    display: flex
    flex-direction: row
    text-align: center
    .logo
      font-size: 20px
      padding: 0 10px
      margin-top: 5px
    .inp
      height: 30px
    .btn
      width: 60px
      height: 30px
      border-radius: 5px
      margin-left: 10px
      font-size: 12px
      text-align: center
      line-height: 30px
  .wrapper
    margin-top: 10px
    width: 80%
    height: 45px
    text-align: center
    // background-color red
    .content
      width: 100%
      display: flex
      justify-content: center
      // width 1000px
      overflow: hidden
      li
        display: inline-block
        width: 60px
        height: 45px
        margin-left 10px
          // margin-left 12px
          // background-color red
        font-size: 12px
        line-height: 45px
.icon
  span
    position: flexd
    right: 0
    top: 0
.swiper-container
  width: 100%
  height: 200px
  .swiper-wrapper
    .swiper-slide
      img
        width: 100%
        height: 100%

        //修改小圆点的默认样式失败
  // .swiper-pagination
  //   width 10px
  //   height 3px
  //   border-radius 0
  //   &.active
  //     background red
  //     width .8rem !important




.moreCate
  width: 100%
  height: 200px
  background-color: white
  overflow: hidden
  position: absolute
  z-index: 10
  top: 50px
  div
    font-size: 16px
    padding: 10px
    float: left
  .rig
    float: right
    &.fade-enter-active, &.fade-leave-active
      transition: all 3s
    &.fade-enter, &.fade-leave-to
      transform: rotate(180deg)
  .lei
    display: flex
    // justify-content center;
    flex-wrap: wrap
    div
      font-size: 12px
      width: 50px
      height: 10px
      border: 1px solid #CCC
      margin: 7px
      font-color: #333
      text-align: center
      border-radius: 0.05333rem
      background: #FAFAFA
.zhezhao
  position: absolute
  width: 100%
  height: 100%
  z-index: 2
  top: 0
  bottom: 0
  background-color: rgba(0, 0, 0, 0.5)
.mid
  width: 100%
  // height 60px
  // background-color cyan
  display: flex
  justify-content: center
  .midContent
    margin: 8px auto
    img
      width: 14px
      height: 14px
      // text-align center
      margin-right: 2px
      display: inline-block
      vertical-align: middle
    span
      // height 12px
      // display inline-block
      font-size: 12px
      // line-height 12px
      // text-align center
      display: inline-block
      vertical-align: middle
.list
  width: 100%
  height: 200px
  display: flex
  // flex 4
  text-align: center
  flex-direction: column
  align-items: center
  justify-content: center
  flex-wrap: wrap
  .one
    width: 70px
    height: 80px
    padding: 10px auto
    // background-color red
    img
      width: 60px
      height: 60px
    span
      display: inline-block
      font-size: 12px
      text-align: center
.new
  margin-top: 10px
  width: 100%
  height: 300px
  position: relative
  .title
    text-align: center
    line-height: 40px
    height: 40px
    font-size: 18px
    span
      margin: 0 6px
  .neiRong
    width: 90%
    height: 240px
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    margin-top: 10px
    overflow: hidden
    .neiLeft
      width: 49%
      height: 100%
      background-color: #F9E9CF
      float: left
      position: relative
      span
        display: inline-block
        margin: 10px
      .datu
        margin-top: 10px
        width: 140px
        height: 140px
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        img
          width: 100%
          height: 100%
    .neiRight
      width: 49%
      height: 100%
      float: right
      background-color: #F9E9CF
      .top 
        width 100%
        height 49%
        // position relative
        margin-bottom 5px
        div
          width 80%
          margin 10px auto
        img
          width 100px
          height 100px
          margin-left 50px
          // position absolute
        span 
          display inline-block
          width 80px
          font-size 12px
          margin 0 auto
          text-align center
      .bottom
        width 100%
        height 100%
        background-color  #FFECC2

        position relative
        div
          width 80%
          margin 10px auto
        img
          width 100px
          height 100px
          margin-left 50px
          position absolute
        span 
          display inline-block
          width 80px
          font-size 12px
          margin 0 auto
          text-align center
</style>