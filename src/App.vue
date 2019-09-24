<template>
<div>
  <router-view></router-view>
  <Footer v-show="$route.meta.isShow"/>
</div>
</template>
<script>
import Footer from './components/Footer/Footer'
export default {
  components:{
    Footer
  }
}
</script>
<style scoped>
</style>