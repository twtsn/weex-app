<template>
  <div class="my-container">
   <wxc-cell :has-arrow="false" :has-margin="true">
        <div slot="label">
         <img :src="myImgMap.headphoto" class="my-icon-title" />
        </div>
        <div slot="title">
            <div class="my-login-info">
                <span>demo</span>
                <span class="my-login-name">微信号：test</span>
            </div>
        </div>
        <div slot="value">
            <img class="my-qr-code" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1750833952,2529388352&amp;fm=58&amp;bpow=380&amp;bpoh=380">
        </div>
    </wxc-cell>
   <wxc-cell :has-arrow="false" :has-margin="true" @wxcCellClicked="wxcCellClicked('my-wallet')">
       <div slot="label">
            <img :src="myImgMap.wallet" class="my-icon"/>
       </div>
        <div slot="title"><span class="my-title-margin">钱包</span></div> 
   </wxc-cell>
   <wxc-cell :has-arrow="false" :has-margin="false" @wxcCellClicked="wxcCellClicked('my-collect')">
        <div slot="label">
            <img :src="myImgMap.collect" class="my-icon"/>
        </div>
        <div slot="title"><span class="my-title-margin">收藏</span></div> 
   </wxc-cell>
   <wxc-cell :has-arrow="false" :has-margin="false">
        <div slot="label">
            <img :src="myImgMap.photos" class="my-icon"/>
        </div>
        <div slot="title"><span class="my-title-margin">相册</span></div> 
   </wxc-cell>
   <wxc-cell :has-arrow="false" :has-margin="false">
        <div slot="label">
            <img :src="myImgMap.cardpackage" class="my-icon"/>
        </div>
        <div slot="title"><span class="my-title-margin">卡包</span></div> 
   </wxc-cell>
   <wxc-cell :has-arrow="false" :has-margin="true">
        <div slot="label">
           <img :src="myImgMap.face" class="my-icon"/>
        </div>
        <div slot="title"><span class="my-title-margin">表情</span></div> 
   </wxc-cell>
   <wxc-cell :has-arrow="false" :has-margin="false">
        <div slot="label">
           <img :src="myImgMap.set" class="my-icon"/>
        </div>
        <div slot="title"><span class="my-title-margin">设置</span></div> 
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
          myImgMap: Config.myImg
      }
  },
  methods: {
    wxcCellClicked(name) {
        this.$router.push(name);
    }
  }
};
</script>
<style>
.my-container {
  width: 100%;
  margin-top: 15px;
}
.my-icon-title {
  width: 70px;
  height: 70px;
}
.my-qr-code{
    width: 30px;
    height: 30px;
}
.my-login-info{
    margin-left: 15px;
}
.my-login-name{
    color: gray;
}
.my-title-margin{
    margin-left: 20px;
}
.my-icon{
    width: 30px;
    height: 30px;
}
</style>