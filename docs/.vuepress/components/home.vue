<!--
 * @Author: your name
 * @Date: 2021-01-24 20:09:22
 * @LastEditTime: 2021-02-16 10:31:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/components/home.vue
-->
<style scoped lang="sass">
.app_container
  background-size: cover
  background-repeat: no-repeat
  background-image: url(http://www.ruanyifeng.com/images_pub/pub_0.png)
  background-attachment: fixed
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  background-position: 50% 50%
  margin: 0
  padding: 0
  width: 100%
  height: 100%
  -webkit-transition: All 2s ease
  -moz-transition: All 2s ease
  -o-transition: All 2s ease
  -ms-transition: All 2s ease
  transition: All 2s ease

.demo_img
  height: 100px
  width: 100px
</style>

<style lang="sass">
@import './../styles/sass/common'
.site-name
  padding: 0 15px
  border-radius: 5px

  &:hover
    color: #fff !important
    background: var(--menu-primary-background-colour)

.action-button
  border: none !important
  border-bottom: none !important
  background-color: var(--menu-primary-background-colour) !important
  transition: all 2s ease !important

.player
  position: fixed
  bottom: 0
  left: 50%
  transform: translateX(-50%)

</style>

<template lang="pug">
.app_container(
  :style="{'background-image': `url(http://www.ruanyifeng.com/images_pub/pub_${currentNumber}.jpg)`}"
)
  //- img for cache
  img.demo_img(v-show="false" :src="nextSrc")
  home-page-block(
    @nextPic="handleClickTitle"
  )
  audio.player(
    preload="preload"
    controls
    autoplay
    title="送你一朵小红花"
    meta="送你一朵小红花"
    :src="musicSrc"
  )

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  _getRandomInt
} from './../utils/random'
import {
  BEGIN_PAGE_NUMBER,
  END_PAGE_NUMBER,
  INTERVAL_TIME,
  _getRandomRgba,
  MUSIC_LIST,
} from './../modules/home'

@Component({
  created() {
    this._setRandomPic()
    this._setRandomMusic()
  },

  mounted() {
    this._setRandomBackgroundColor()
  },

  computed: {
    nextSrc() {
      return `http://www.ruanyifeng.com/images_pub/pub_${this.nextPicNumber}.jpg`
    },
  }
})

class Home extends Vue {
  musicSrc = ''
  nextPicNumber = 0
  currentNumber = 0
  randomBackgroundPicTimer = null
  randomBackgroundColorTimer = null

  _setRandomMusic() {
    const musicListLength = MUSIC_LIST.length
    const currentPlayingMusicIndex = _getRandomInt(0, musicListLength)
    this.musicSrc = MUSIC_LIST[currentPlayingMusicIndex].src
  }

  _setRandomBackgroundColor() {
    if (this.randomBackgroundColorTimer) return

    document.body.style.setProperty('--menu-primary-background-colour', _getRandomRgba())
    this.randomBackgroundColorTimer = setInterval(() => {
      document.body.style.setProperty('--menu-primary-background-colour', _getRandomRgba())
    }, INTERVAL_TIME)
  }

  _setRandomPic() {
    if (this.randomBackgroundPicTimer) return

    this.nextPicNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    this.currentNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    this.randomBackgroundPicTimer = setInterval(() => {
      this.currentNumber = this.nextPicNumber
      this.nextPicNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    }, INTERVAL_TIME)
  }

  handleClickTitle() {
    this._nextPic()
    this._nextColor()
  }

  _nextPic() {
    if (this.randomBackgroundPicTimer) clearInterval(this.randomBackgroundPicTimer)
    this.currentNumber = this.nextPicNumber
    this.nextPicNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
  }

  _nextColor() {
    if (this.randomBackgroundColorTimer) clearInterval(this.randomBackgroundColorTimer)
    document.body.style.setProperty('--menu-primary-background-colour', _getRandomRgba())
  }

  jumpToHome() {
    // add catch, the reason of promise is the inner logic error of router probably.
    this.$router.push('/home').catch()
  }
}

export default Home
</script>
