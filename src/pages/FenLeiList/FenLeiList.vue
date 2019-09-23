<template>
  <div class="lei">
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
    <div class="yuan">
      <img :src=list.img alt />
      <span>{{list.nam}}</span>
    </div>
  </div>
  <!-- <div>{{$route.params.id}}</div> -->
</template>
<script>
import {mapState} from 'vuex'
import axios from "axios";
export default {
  data() {
    return {
      list:{}//需要显示的消息详情对象
    }
  },
  computed: {
    // ...mapState(['shop'])
  },
 async mounted() {
    // this.$store.dispatch('getList')
    try {
       const result = await axios.get('/fenlei')
      //  console.log(result.data.data)
       if(result.data.code==0){
         const shop=result.data.data
        //  console.log(shop)
        const id=this.$route.params.id*1
        const detail=shop.find(detail=>detail.id===id)
        // console.log(detail)
        this.list=detail
       }
    } catch (error) {
      // console.log("页面加载错误")
      alert('页面加载错误！')
    }
  },
  watch: {
   async $route(value){
      try {
       const result = await axios.get('/fenlei')
      //  console.log(result.data.data)
       if(result.data.code==0){
        //  console.log('watch')
         const shop=result.data.data
        const id=value.params.id*1
        const detail=shop.find(detail=>detail.id===id)
        this.list=detail
       }
    } catch (error) {
      // console.log("页面加载错误")
      alert('页面加载错误！')
    }
    }
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.lei
  margin-top 300px
  width: 90%
  height: 350px
  // background-color: red
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  margin-top: 40px
  display: flex
  justify-content: center
  flex-wrap: wrap
  margin-left: 40px
  align-items: center
  .yuan
    width: 80px
    height: 80px
    // background-color green
    margin: 5px
    img
      display: inline-block
      width: 75px
      height: 75px
      margin: auto
      // background-color cyan
    span
      margin-left: 8px
</style>