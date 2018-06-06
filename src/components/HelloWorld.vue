<template>
  <div class="hello">
    <van-notice-bar mode="closeable">
      {{msg}}
    </van-notice-bar>
    <p>我的{{tokenId}}</p>

    <router-link tag="button"
      to="/Caculator">跳转计算器</router-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

// console.log(1)
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    ...mapGetters({
      tokenId: 'TOKEN_ID',

    }),
  },
  mounted() {
    // console.log(this.$store)
    // console.log(this.tokenId)
    // setTimeout(() => {
    //   console.log(321);
    //   this.setTokenId(312);
    // }, 2300);
    this.asyncSetTokenId(9527)
    console.log('main route', this.$router, this.$route)
    // console.log(this.$router)
    // console.log(this.$route)
  },
  methods: {
    ...mapMutations({
      setTokenId: 'SET_TOKEN_ID',
    }),
    ...mapActions({
      asyncSetTokenId: 'ASYNC_SET_TOKENID',
    }),
  },
  beforeRouteLeave(to, from, next) {  // eslint-disable-line no-unused-vars
    // console.log('come')
    next()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
