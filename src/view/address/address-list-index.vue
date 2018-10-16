<template>
  <div class="address-container">
  <wxc-cell :has-arrow="false" class="address-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.addUser" class="address-img"/>
       </div>
        <div slot="title" class="address-title-margin">
        <span>新朋友</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" class="address-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.charts" class="address-img"/>
       </div>
        <div slot="title" class="address-title-margin">
        <span>群聊</span>
        </div> 
   </wxc-cell>
     <wxc-cell :has-arrow="false" class="address-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
            <img :src="imgMap.mark" class="address-img"/>
       </div>
        <div slot="title" class="address-title-margin">
        <span>标签</span>
        </div> 
   </wxc-cell>
    <wxc-cell :has-arrow="false" class="address-cell" @wxcCellClicked="wxcCellClicked()">
       <div slot="label">
           <img :src="imgMap.vipcn" class="address-img"/>
       </div>
        <div slot="title" class="address-title-margin">
        <span>公众号</span>
        </div> 
   </wxc-cell>
   <div v-for="(value, key) in dataMap" :key="key">
    <p class="address-filter-key">{{ key }}</p>
    <wxc-cell :has-arrow="false" class="address-cell" @wxcCellClicked="wxcCellClicked(item.roomId)" v-for="(item, index) in value" :key="index">
       <div slot="label">
           <img :src="item.imgSrc" class="address-img"/>
       </div>
        <div slot="title" class="address-title-margin">
        <span v-text="item.title"></span>
        </div> 
    </wxc-cell>
   </div>
  </div>
</template>

<script>
import { WxcCell, WxcIcon } from "weex-ui";
import Config from '../config'
export default {
  components: { WxcCell, WxcIcon },
  data () {
      return {
          imgMap: Config.addressImg,
          dataMap: []
      }
  },
  created () {
    let dataMap = {};
    let data = [];
    for(let i = 0 ; i < 3 ; i++) {
        data.push({
            roomId: i, imgSrc: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png', title: 'test' + i, info: 'xxxxxx', hasMsg: true
        });
    }
    dataMap.A = data;
    dataMap.B = data;
    dataMap.C = data;
    this.dataMap = dataMap;
  },
  methods: {
    wxcCellClicked(roomId) {
        this.$router.push('chat/' + roomId);
    }
  }
};
</script>
<style>
.address-container {
  width: 100%;
}
.address-img{
    width: 30px;
    height: 30px;
}
.address-cell{
    padding: 3px 10px !important;
}
.address-title-margin, .address-filter-key{
    margin-left: 10px !important;
}
</style>