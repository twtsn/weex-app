<template>
 <div class="chat-container">
  <div class="chat-content"></div>
  <div class="chat-footer">
    <div class="chat-voice-icon"></div>
    <div class="chat-input"></div>
    <wxc-icon name="cry" class="chat-face-icon"></wxc-icon>
     <wxc-icon name="play" class="chat-other-icon"></wxc-icon>
  </div>  
 </div>
</template>
<script>
import { WxcIcon } from "weex-ui";
export default {
    components: { WxcIcon },
    data () {
        return {

        }
    }
}
</script>