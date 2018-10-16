<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle"><message></message></div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle"><address-list></address-list></div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle"><other-index></other-index></div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle"><my></my></div>
  </wxc-tab-bar>
</template>

<style scoped>
  .item-container {
    width: 750px;
    padding-top: 90px;
    background-color: #f2f3f4;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
<script>
  import { WxcTabBar, Utils, WxcIcon} from 'weex-ui';

  // https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js 
  import Config from './config'
  import My from './my/my-index.vue';
  import Message from './message/message-index.vue';
  import AddressList from './address/address-list-index.vue';
  import OtherIndex from './other/other-index.vue';
  export default {
    components: { WxcTabBar, My ,Message, AddressList, OtherIndex },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    }
  };
</script>