<template>
  <div id="app">
    <van-nav-bar
      :left-text="leftText"
      :right-text="rightText"
      :title="title"
      left-arrow
    />
    <router-view/>
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

}
</script>

<style>

</style>
