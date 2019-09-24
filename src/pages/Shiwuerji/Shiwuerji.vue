<template>
  <div class="wrapper">
    <div class="content">
      <div class="shili">
        <div class="xiaozhou">
          <img src="https://yanxuan.nosdn.127.net/0d598863e22ec3e40ae27397628463cf.jpg" alt />
          <span>{{}}</span>
        </div>
        <div class="da">秋天最要紧的,就是吃大闸蟹</div>
        <span>大闸蟹礼券限时8.8折</span>
        <p>6689人看过</p>
        <img
          class="datu"
          src="https://yanxuan.nosdn.127.net/debe90c6dbfa8593f4a17b59ddbcf466.jpg"
          alt
        />
      </div>
      <div class="xuanmei">
        <div class="xue">
          <img src="https://yanxuan.nosdn.127.net/d9d036fac85df6b30cf8c184e030323c.png" alt />
          <span class="meimei">选妹</span>
        </div>
        <div class="changnian">常年断货的严选爆品终于上架了，回头客都在抢!</div>
        <div class="duanhuo">
          <img src="https://yanxuan.nosdn.127.net/6f5e7bb94350b7eed05134a9b1d83200.jpg" alt />
        </div>
        <div class="guankan">92w人观看</div>
      </div>
      <div class="xuanmei">
        <div class="xue">
          <img src="https://yanxuan.nosdn.127.net/d9d036fac85df6b30cf8c184e030323c.png" alt />
          <span class="meimei">选妹</span>
        </div>
        <div class="changnian">产地直供农产品大赏！</div>
        <div class="duanhuo">
          <img src="https://yanxuan.nosdn.127.net/904058d32b7a4add853e8308caf55710.jpg" alt />
        </div>
        <div class="guankan">60.5k人看过</div>
      </div>
      <div class="xuanmei">
        <div class="xue">
          <img src="https://yanxuan.nosdn.127.net/d9d036fac85df6b30cf8c184e030323c.png" alt />
          <span class="meimei">选妹</span>
        </div>
        <div class="changnian">9月到了，秋天还会远吗？看看这个月都上了哪些换季必买的好物</div>
        <div class="duanhuo">
          <img src="https://yanxuan.nosdn.127.net/0214857510d17934f3189dbd25e33949.jpg" alt />
        </div>
        <div class="guankan">12.7k人看过</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      shi: {}
    };
  },
  computed: {
    ...mapState(["shiwu"])
  },
  mounted() {
    this.$store.dispatch("getShiwu");
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>