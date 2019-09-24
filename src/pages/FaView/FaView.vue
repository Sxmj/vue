<template>
  <div class="zx">
    <div class="headerTop">
      <span class="room iconfont icon-menu-home-normal" @click="$router.push('/firstview')"></span>
      <span class="wangyi" @click="goFaXian">发现</span>
      <span class="zhen">甄选家</span>
      <!-- <span class="fangda iconfont icon-gouwuche"></span> -->
      <!-- <span class="gouwu iconfont icon-fangdajing"></span>  -->
      <span class="fangda iconfont icon-gouwuche"></span>
      <span class="gouwu iconfont icon-fangdajing"></span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/cbd1f75b06ad2d740956e4e46a721b57.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ac5bdd0277eed0e2cb5a52e270381f8a.jpg" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    <div class="zhengJi">
      <div class="zhengjizhengji">
        <span>{{zxj.zhentitle}}</span>
        <span></span>
      </div>
      <div class="gaosu">{{zxj.zhenwenben}}</div>
      <div class="niHui">
        <div class="juzicha">
          <img :src=zxj.zhenmintu alt />
        </div>
        <div class="wenBen">
          <div class="nihuixihuan">{{zxj.zhenhua}}</div>
          <div class="tiao">
            {{zxj.zhenjianyi}}
            <span>{{zxj.zhenkanguo}}</span>
          </div>
        </div>
        <p
          class="women"
        >{{zxj.zhenneirong}}</p>
        <div class="jianyi">我要建议</div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import BScroll from "better-scroll";
import {mapState} from "vuex"
export default {
  computed: {
    ...mapState(['zxj'])
  },
  methods: {
    goFaXian() {
      this.$router.push("/shiwu");
    }
  },
  mounted() {

    this.$store.dispatch('getZxj')
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      //配置自动轮播
      autoplay: {
        disableOnInteraction: false,
        delay: 1000
      },

      
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // }
    });
    // this.scroll = new BScroll(".wrapper", {
    //   scrollX: true,
    //   scrollY: false,
    //   momentum: false,
    //   snap: {
    //     loop: this.loop,
    //     threshold: 0.3,
    //     speed: 400
    //   },
    //   click: true
    // });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.zx
  width: 100%
  height: 100%
  background-color: #eee
  .headerTop
    width: 100%
    height: 45px
    background-color: white
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
      // font-size: 30px
      height: 40px
      line-height: 40px
      text-align: center
      // width 100%
      margin-left: 100px
    .zhen
      font-size: 28px
      height: 40px
      line-height: 40px
      text-align: center
      color: red
      font-weight: 700
      margin-left: 10px
  .swiper-container
    height: 230px
    // margin-top 10px
    background-color: white
    // display: flex
    // justify-content: center
    // align-items: center
    // background-color cyan
    .swiper-wrapper
      .swiper-slide
        display: flex
        justify-content: center
        align-items: center
        // background-color cyan
        img
          height: 200px
          width: 90%
          border-radius: 10px
  .zhengJi
    margin-top: 10px
    background-color: white
    text-align: center
    .zhengjizhengji
      height: 45px
      line-height: 45px
      font-size: 16px
      color: black
    .gaosu
      font-size: 13px
      color: #bbb
    .niHui
      height: 150px
      width: 90%
      margin: 0 auto
      background-color: #ddd
      position: relative
      .juzicha
        width: 45%
        height: 100%
        margin-left: 10px
        margin-top: 10px
        display: flex
        justify-content: center
        align-items: center
        img
          // display block
          // margin-top 10px
          width: 100%
          height: 80%
      .wenBen
        // float right
        position: absolute
        top: 0
        right: 0
        // background-color red
        width: 50%
        height: 100%
        .nihuixihuan
          margin-top: 30px
          font-size: 18px
          text-align: left
          margin-left: 10px
        .tiao
          margin-top: 20px
          font-size: 14px
          color: #aaa
          text-align: left
          margin-left: 10px
          span
            margin-left: 20px
      .women
        margin-top: 20px
        font-size: 12px
        color: black
        text-align: left
      .jianyi
        height: 40px
        margin-top: 20px
        // background-color red
        text-align: center
        line-height: 40px
        border: 1px solid #ccc
        border-radius 10px
</style>