<template>
  <div class="other-container">
  <wxc-cell :has-arrow="false" :has-margin="true" class="other-cell friends-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.friendCircle" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>朋友圈</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.scan" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>扫一扫</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" :has-margin="true" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.shark" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>摇一摇</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
            <img :src="imgMap.see" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>看一看</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" :has-margin="true" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
            <img :src="imgMap.search" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>搜一搜</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.nearbyPeople" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>附近</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" :has-margin="true" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.driftBottle" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>漂流瓶</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
            <img :src="imgMap.shop" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>购物</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" :has-margin="true" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.game" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>游戏</span>
        </div> 
   </wxc-cell>

    <wxc-cell :has-arrow="false" :has-margin="true" class="other-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
            <img :src="imgMap.minProgram" class="other-img"/>
       </div>
        <div slot="title" class="other-title-margin">
        <span>小程序</span>
        </div> 
   </wxc-cell>
  </div>
</template>

<script>
import { WxcCell, WxcIcon } from "weex-ui";
import Config from '../config'
export default {
  components: { WxcCell, WxcIcon },
  data () {
      return {
        imgMap: Config.otherImg
      }
  },
  created () {
   
  },
  methods: {
    wxcCellClicked(roomId) {
        this.$router.push('chat/' + roomId);
    }
  }
};
</script>
<style>
.other-container {
  width: 100%;
}
.other-container .friends-cell{
    margin-top: 15px !important
}
.other-img{
    width: 35px;
    height: 35px;
}
.other-cell{
    padding: 3px 10px !important;
}
.other-title-margin{
    margin-left: 20px !important;
}
</style>