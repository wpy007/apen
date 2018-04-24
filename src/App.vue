<template>
  <div id="app">
    <van-nav-bar
      :left-text="leftText"
      :right-text="rightText"
      :title="title"
      left-arrow
      @click-left="back"
      @click-right="go"
    />
    <router-view id="router-view"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      title: 'TITLE',
      leftText: 'LEFT_TEXT',
      rightText: 'RIGHT_TEXT',
    }),
  },
  methods: {
    back() {
      console.log('this.route', this.$router, this.$route)
      this.$router.back()
    },
    go() {
      this.$router.forward(1)
    },
  },

}
</script>

<style lang="stylus">
  html, body
    width: 100%
    height: 100%
  *
    margin: 0
    padding: 0
</style>


<style lang="stylus" scoped>
  #app
    width: 100%
    height: 100%
  #router-view
    width: 100%
    height: calc(100% - 46px)
    overflow-y: auto
    -webkit-overflow-scrolling: touch // ios 流畅滚动
</style>
