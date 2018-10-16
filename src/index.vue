<template>
  <div class="wrapper">
    <div class="navigator-bar" v-if='$route.name === "index"'>
       <wxc-minibar background-color="#000000">
          <text slot="left" class="navigator-bar-name">微信</text>
          <div slot="middle"></div>
          <div slot="right" class="navigator-bar-icons">
            <wxc-icon name="search" class="navigator-bar-icon"></wxc-icon>
            <wxc-icon name="add" class="navigator-bar-icon"></wxc-icon>
          </div>
        </wxc-minibar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { WxcMinibar, WxcIcon } from 'weex-ui';
export default {
  name: 'App',
  components: { WxcMinibar, WxcIcon },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .navigator-bar{
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .navigator-bar-icon, .navigator-bar-name{
    color: #ffffff;
  }
  .navigator-bar-icons{
    width: 100%;
    flex-direction: initial;
    justify-content:space-between;
  }
  .navigator-bar-icon{
    display: inline-block;
    width: 50px;
    font-size: 40px
  }
</style>
