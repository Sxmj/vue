<template>
<div>
  <router-view></router-view>
  <Footer />
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