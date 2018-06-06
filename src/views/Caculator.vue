/** 计算器页面 */
<template>
  <div class="caculator-box">
    计算器页面
  </div>
</template>

<script>
// 按键列表
const btnList = [{
  code: 1,
}, {
  code: 2,
}, {
  code: 3,
}, {
  code: 4,
}, {
  code: 5,
}, {
  code: 6,
}, {
  code: 7,
}, {
  code: 8,
}, {
  code: 9,
}, {
  code: 0,
}]

// 操作列表
const operateList = [{
  code: '+',
  name: '+',
}, {
  code: '-',
  name: '-',
}, {
  code: '*',
  name: 'x',
}, {
  code: '/',
  name: '/',
}, {
  code: '=',
  name: '=',
}]
export default {
  data() {
    return {
      btnList,
      operateList,
    }
  },
  mounted() {
    console.log('caculator route', this.$router, this.$route)
  },
}
</script>

<style lang="stylus" scoped>

</style>

