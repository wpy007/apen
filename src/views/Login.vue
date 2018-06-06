<template>
  <div id="login-page">
    <canvas id="login-canvas"></canvas>
    <div class="login-content">
      <div class="input-box">
        <input class="input-area" type="text" placeholder="请输入用户名">
      </div>
      <div class="input-box">
        <input class="input-area" :type="passwordInput" placeholder="请输入密码">
        <i style="color: pink" @click="isPasswordShow = !isPasswordShow">{{isPasswordShow ? 'see' : 'hide'}}</i>
      </div>
    </div>
    <router-link
      tag="p" to="/HelloWorld"
      class="no-login">免登录入口</router-link>
    <router-link tag="p"
      to="/Caculator"
      class="no-login caculator">
      计算器入口
    </router-link>
    <router-link tag="p"
      to="/Audio"
      class="no-login audio">
      音频进度条入口
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isPasswordShow: false,
    }
  },
  computed: {
    passwordInput() {
      return this.isPasswordShow ? 'text' : 'password'
    },
  },
  created() {
    // vue每次进入页面，无论是前进还是后退，都会触发生命周期
    // console.log('come')
  },
  mounted() {
    // console.log('login route', this.$router, this.$route)
    // console.log(this.$router)
  },
  beforeRouteLeave(to, from, next) {
    // console.log('login leave')
    // console.log('to && from && next', to, from, next)
    next(true)
  },
}
</script>

<style lang="stylus" scoped>
  #login-page
    position: relative
  #login-canvas
    position: absolute
    top: 0
    left: 0
    z-index: -1
    width: 100%
    height: 100%
  .login-content
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 300px
    height: 140px
    background: cyan
    display: flex
    flex-direction: column

    .input-box
      flex: 1

    .input-area
      margin-left: 5%
      margin-top: 10px
      width: 80%
      height: 40px
      border: 1px solid #ccc
      border-radius: 5px
      text-indent: 8px

  .no-login
    z-index: 1
    position: absolute
    left: calc(50%)
    top: calc(50% + 70px + 20px)
    transform: translateX(-50%)
    color: #e76594

  .caculator
    margin-top: 50px

  .audio
    margin-top 80px
</style>

