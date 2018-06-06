/** 音频页面 */
<template>
  <div class="caculator-box">
    audio页面
    <div class="data-box"
      v-for="(data, index) in this.baseData"
      :key="index">
      <div class="audio-box" v-if="data.type === 'music'">
        <p class="control-btn" v-if="!isCurrentPlaying(index)" @click="playingAudio(index)">></p>
        <p class="control-btn" v-if="isCurrentPlaying(index)" @click="pauseAudio(index)">||</p>

        <div class="playing-part">
          <p class="line"></p>
          <span class="progress" :style="{left: `${(audioInfo.currentTime / audioInfo.duration * 100)}%` }"></span>
        </div>

        <p class="duration">{{audioInfo.duration | formatDuration}}</p>
        <audio ref="audio1" class="audioStyle" :src="audioInfo.audioUrl"
          @canplay="onCanPlay"
          @timeupdate="onTimeUpdate"></audio>
      </div>
      <div v-else>
        {{data.name}}
      </div>
    </div>

  </div>
</template>

<script>


// mock数据，promise用
const downloadItems = [
  {
    type: 'music',
    name: '常回家看看',
    url: 'http://fs.w.kugou.com/201806051512/655db847a2e827401414f02c5152ab77/G001/M00/1D/17/oYYBAFS3on6AfcA-AEdy2BykLG4055.mp3',
  },
  {
    type: 'article',
    name: '这就是一篇文章罢了',
  },
  {
    type: 'music',
    name: '凉凉',
    url: 'http://fs.w.kugou.com/201806062106/7546ded895419fe379581ddc95396a30/G083/M08/0E/04/kw0DAFhvcJSAAX3SAFFchlFbaO8093.mp3',
  },
  {
    type: 'music',
    name: '回合-金玟岐',
    url: 'http://fs.w.kugou.com/201806062156/c361772e237e08ee6ccca4f15b6ac7b7/G079/M05/17/0B/74YBAFghg0GAXh0dAEA3lP2r0b0817.mp3',
  },
]

export default {
  data() {
    return {
      baseData: [], // 假数据
      playing: false,
      isAudioLoaded: false,
      audioInfo: {
        audioUrl: '',
        currentTime: 0,
        duration: 0,
      },
      audioList: [], // {name, audioUrl, parentIndex, duration, currentTime}
      playingIndex: -1, // audioList中的index
      playingParentIndex: -1, // baseData中的index
    }
  },
  created() {
    // 获取数据，处理audioList
    new Promise((resolve) => {
      setTimeout(() => {
        this.baseData = downloadItems
        resolve(true)
      }, 500)
    })
    .then((res) => {
      if (res) {
        this.baseData = downloadItems
        this.audioList = this.dealData(downloadItems)
      }
    })
  },
  mounted() {

  },
  methods: {
    // 当前audio是否在播放
    isCurrentPlaying(parentIndex) {
      return parentIndex === this.playingParentIndex
    },
    playingAudio() {
      this.playing = true

      this.dealAudio()
    },
    pauseAudio() {
      this.playing = false
      this.$refs.audio1.pause()
    },
    dealAudio() {
      // this.audioInfo.audioUrl = audioUrl
    },
    onCanPlay() {
      console.log(this.$refs.audio1)
      this.audioInfo.duration = this.$refs.audio1.duration
      this.$refs.audio1.play()
    },
    onTimeUpdate() {
      this.audioInfo.currentTime = this.$refs.audio1.currentTime
      console.log(this.audioInfo.currentTime, this.audioInfo.duration)
    },
    // 处理得到的数据
    dealData(items) {
      const newLists = []
      items.forEach((item, index) => {
        if (item && item.type === 'music') {
          newLists.push({
            name: item.name || '',
            audioUrl: item.url || '',
            parentIndex: index,
            duration: 0,
            currentTime: 0,
          })
        }
        return newLists
      })
    },
  },
  filters: {
    formatDuration(val) {
      const min = val / 60 < 1 ? '00' : (val / 60 < 10 ? `0${Math.ceil(val / 60)}` : `${Math.ceil(val / 60)}`) // eslint-disable-line
      const second = val % 60 < 1 ? '00' : (val % 60 < 10 ? `0${Math.ceil(val % 60)}` : `${Math.ceil(val % 60)}`) // eslint-disable-line
      return `${min}:${second}`
    },
  },
}
</script>

<style lang="stylus" scoped>
.caculator-box
  width 800px!important
  margin 0 auto

.data-box
  margin-top 10px

.audio-box
  margin-top 20px
  width 544px
  height 34px
  background #f2f2f2
  border-radius 17px
  display flex

.control-btn
  width 45px
  height 34px
  text-align center
  line-height 34px

.playing-part
  width 435px
  height 34px
  position relative
  .progress
    width 9px
    height 9px
    background #fff
    border 1px solid #c4c5cc
    border-radius 50%
    position absolute
    top 50%
    left 0
    margin-top -5px
    margin-left -5px
  .line
    margin-top 15px
    width 100%
    height 4px
    border-radius 2px
    background #d9d9d9

.duration
  width: 64px
  height 34px
  font-size 12px
  text-align center
  line-height 34px
  flex 1


</style>
