<template>
  <div class="fenLei">
    <div class="header">
      <input class="search iconfont icon-fangdajing" type="text" placeholder="搜索商品，共22893款好物" />
    </div>
    <div class="list">
      <div class="ht">
        <ul class="content">
          <li v-for="(sho,index) in shop" :key="index" style="list-style-type:none">
          <div
           class="lit"
           @click="ht(index)"
          :class="{'on':isFlag==index}"
           >{{sho.name}}</div>
        </li>
        </ul>
      </div>
      <div class="right">
        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../../public/img/content/40ee9e553e6a2c228b0544bff65a618d (1).jpg" alt />
            <!-- <img :src="sho.bigImg" alt=""> -->
            </div>
            <div class="swiper-slide">
              <img src="../../../public/img/content/f7f216f5d01874f8f768ccfd78a7112e.jpg" alt />
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- <div class="lei">
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
        </div> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import axios from "axios";
import BScroll from "better-scroll";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isShow:false,//默认不显示
      // shop:[],
      isFlag:0,//设定一个变量存储当前li的索引，
    }
  },
  computed: {
    ...mapState(['shop'])
    // ...mapState(['shop']),
  },
  methods: {
    //点击哪一个让那一个常亮，将这个状态放到data中去管理
    ht(index){
      //存储当前点击状态的这个索引值
      this.isFlag=index
      // console.log(this.isFlag)
      this.$router.push(`/fenlei/firstleilist/${index}`)
    }
  },
 async mounted() {
    // this.$store.dispatch()
    /* eslint-disable */
    // try {
    //    const result = await axios.get('/fenlei')
    //   //  console.log(result.data.data)
    //    if(result.data.code==0){
    //      console.log('hah')
    //      //发请求拿到数据之后，更新data中的shop状态
    //      this.shop=result.data.data
    //      console.log(this.shop)
    //    }
    // } catch (error) {
    //   console.log("页面加载错误")
    // }
    this.$store.dispatch('getList')
    
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
      //配置自动轮播
      autoplay: {
            disableOnInteraction: false,
            delay:2000
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

    this.scroll = new BScroll(".ht", {
      scrollY: true,
      click: true
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
    position fixed
    top 0
    z-index 10

    width: 100%
    height: 50px
    background-color white
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
    margin-top 50px
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
            border-left: 1px solid red
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
        left 37%
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