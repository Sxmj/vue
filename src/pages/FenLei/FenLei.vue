<template>
  <div class="fenLei">
    <div class="header">
      <input class="search iconfont icon-fangdajing" type="text" placeholder="搜索商品，共22893款好物" />
    </div>
    <div class="list">
      <div class="ht">
        <li v-for="(sho,index) in shop" :key="index">
          <div
           class="lit"
           :class="{'on':isShow}" 
           @click="ht"
           >{{sho.name}}</div>
        </li>
        
      </div>
      <div class="right">
        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../../public/img/content/40ee9e553e6a2c228b0544bff65a618d (1).jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../../public/img/content/f7f216f5d01874f8f768ccfd78a7112e.jpg" alt />
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="lei">
          <div class="yuan">
            <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
              <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
              <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
              <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
              <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
            <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
            <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
            <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
          <div class="yuan">
            <img src="../../../public/img/content/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
            <span>明星单品</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import axios from "axios"
export default {
  data() {
    return {
      isShow:false,//默认不显示
      shop:[],
    }
  },
  methods: {
    ht(){
      this.isShow=!this.isShow
    }
  },
 async mounted() {
    // this.$store.dispatch()
    /* eslint-disable */
    try {
       const result = await axios.get('/fenlei')
       console.log(result.data.data)
       if(result.data.code==0){
         console.log('hah')
         this.shop=result.data.data
         console.log(this.shop)
       }
    } catch (error) {
      console.log("页面加载错误")
    }
      // .then(function (response) {
      //   console.log(response);
      // })
      // const result= await this.$http.get('/fenlei')
      // console.log(result)
        
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
    
  }
  
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.fenLei
  width 100%
  height 100%
  // background-color green
  .header
    width: 100%
    height: 50px
    // background-color cyan
    display: flex
    justify-content: center
    align-items: center
    border-bottom: 1px solid #ddd
    .search
      width: 95%
      height: 30px
      border-radius: 5px
      background-color: #EDEDED
      font-size: 14px
  .list
    margin-top: 15px
    width: 100%
    height: 500px
    // background-color cyan
    position: relative
    .ht
      margin-top: 10px
      width: 20%
      height: 100%
      text-align: center
      float: left
      li
        width: 100%
        height: 50px
        .lit
          width: 100%
          height: 30px
          font-size: 14px
          line-height: 30px
          text-align: center
          &.on
            border-left: 3px solid red
    .right
      width: 300px
      float: right
      height: 100%
      position relative
      .swiper-container
        width 250px
        height 100px
        margin: 10px 30px
        .swiper-wrapper
          .swiper-slide
            img
              width: 100%
              height: 100%
      .lei
        width 90%
        height 350px
        // background-color: red
        position absolute 
        left 50%
        top 50%
        transform translate(-50%, -50%)
        margin-top 40px
        display flex
        justify-content center
        flex-wrap wrap
        align-items center
        .yuan
          width 80px
          height 80px
          // background-color green
          margin 5px
          img 
            display inline-block
            width 75px
            height 75px
            margin auto
            // background-color cyan
          span 
            margin-left 8px

</style>