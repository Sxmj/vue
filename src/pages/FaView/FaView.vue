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
    </div>
</template>
<script>
export default {
  methods: {
    
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  // 头部样式
.shiwu
  width 100%
  height 100%
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
</style>