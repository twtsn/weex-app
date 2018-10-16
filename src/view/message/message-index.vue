<template>
  <div class="msg-container">
   <wxc-cell :has-arrow="false" class="msg-cell" @wxcCellClicked="wxcCellClicked(item.roomId)" v-for="(item, index) in data" :key="index">
       <div slot="label">
           <img :src="item.imgSrc" class="msg-img"/>
           <span v-if="item.hasMsg" class="msg-dot"></span>
       </div>
        <div slot="title" class="msg-title-margin">
        <span v-text="item.title"></span>
        <span v-text="item.info"  class="msg-info"></span>
        </div> 
         <div slot="value">
          <span class="msg-time">早上 9:50</span>
          <wxc-icon name="success" class="msg-set" size="xs"></wxc-icon>
         </div>
   </wxc-cell>
  </div>
</template>

<script>
import { WxcCell, WxcIcon } from "weex-ui";
export default {
  components: { WxcCell, WxcIcon },
  data () {
      return {
          data: []
      }
  },
  created () {
    let data = [];
    for(let i = 0 ; i < 15 ; i++) {
        data.push({
            roomId: i, imgSrc: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png', title: 'test' + i, info: 'xxxxxx', hasMsg: true
        });
    }
    this.data = data;
  },
  methods: {
    wxcCellClicked(roomId) {
        this.$router.push('chat/' + roomId);
    }
  }
};
</script>
<style>
.msg-container {
  width: 100%;
}
.msg-img{
    width: 45px;
    height: 45px;
}
.msg-info{
    color: gray;
}
.msg-cell{
    padding: 3px 10px !important;
}
.msg-set{
    text-align: right;
     font-size: 17px !important;
     margin-top: 4px !important;
}
.msg-time{
    font-size:12px;
}
.msg-set,.msg-time{
    color: gray;
}
.msg-dot{
    display: inline-block;
    background: red;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: 39px;
    top: 0px;
}
.msg-title-margin{
    margin-left: 10px;
}
</style>