<template>
<div class="footer_guide border-1px">
        <a href="javascript:;" 
        :class="{'on':$route.path==='/firstview'}"
        @click="goto('/firstview')"
        class='to'
         >
            <!-- <span class="item">
              <i class='iconfont icon-fuwu'></i>
            </sapn>
            <span class="hh">首页</span> -->
            <span class="item">
              <span class="iconfont icon-icon_calendar"></span>
            </span>
            <span class="hh">首页</span>
      </a>
      <a href="javascript:;" 
      :class="{'on':$route.path==='/fenlei/firstleilist/0'}"
      @click="goto('/fenlei')"
      class='to'
       >
          <span class="item">
            <span class="iconfont icon-icon_certificate_fil"></span>
          </span>
          <span class="hh">分类</span>
      </a>
        <a href="javascript:;"
        :class="{'on':$route.path==='/shiwu/0'}"
        @click="goto('/shiwu')"
        class='to'
          >
          <span class="item">
            <span class="iconfont icon-icon_addresslist"></span>
          </span>
          <span class="hh">识物</span>
      </a>
      <a href="javascript:;" 
      :class="{'on':$route.path==='/shopcart'}"
      @click="goto('/shopcart')"
      class='to'
      >
          <span class="item">
            <span class="iconfont icon-icon_attestation"></span>
          </span>
          <span class="hh">购物</span>
      </a>
      <a href="javascript:;" 
       :class="{'on':$route.path==='/personal'}"
        @click="goto('/personal')"
        class='to'
       >
          <span class="item">
            <span class="iconfont icon-icon_doc"></span>
          </span>
          <span class="hh">个人</span>
      </a>
    </div>
</template>
<script>
export default {
  methods: {
    goto(path){
      if(this.$route.path!==path){
        this.$router.replace(path)
      } 
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
    .footer_guide
      top-border-1px(#e4e4e4)
      position fixed
      left 0
      bottom 0
      z-index 100
      background-color #fff
      width 100%
      height 50px
      display flex
      .to
        display flex
        flex 1
        // text-align center
        flex-direction column
        align-items center
        margin 5px
        &.on
          color green
        span
          font-size 12px
          margin-top 2px
          margin-bottom 2px
          .iconfont
            font-size 22px

</style>