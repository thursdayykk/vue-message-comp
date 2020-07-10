<template>
  <div class="wrapper">
    <div class="header">
      <span class="target-name">chelly (10)</span>
    </div>
    <div class="content scroll-wrapper"
         ref="messagesContainer">
      <Messages 
        :messages="messageDatas"
        :timeKey="'time'" 
        :avatarKey="'avatarSrc'"
        :systemMessageKey="'systemMessage'"
        :textMessageKey="'textMessage'"
        :imageMessageKey="'imageMessage'"
        :userIdKey="'userId'"
        :curUserId="1"/>
    </div>
    <div class="footer-input">
      <div class="icons">
        <span class="image-icon"></span>
      </div>
      <textarea class="input-message scroll-wrapper"
                v-model="value"></textarea>
      <button class="send"
              @click="handleSend">发送</button>
    </div>
  </div>
</template>

<script>
import Messages from "./components/Message/index.vue"
import MessageDatas from "./mock/datas" 
import {dateFormatter} from "./utils/dateFormat"
export default {
  components: { Messages },
  mounted () {
    this.toScrollBottom()
  },
  data () {
    return {
      value: '',
      timer: null,
      messageDatas:[...MessageDatas]
    }
  },
  methods: {
    handleSend () {
      if(!this.value){
        return
      }
      clearTimeout(this.timer)
      this.pushMessage({
        time: dateFormatter(new Date()),
        username: 'hxq2',
        avatarSrc: 'http://img.qqzhi.com/uploads/2019-02-08/222153435.jpg',
        imageMessage: '',
        textMessage: this.value,
        systemMessage: '',
        userId: 1,
      })
      this.timer = setTimeout(() => {
        this.pushMessage({
          time: dateFormatter(new Date()),
          username: 'hxq2',
          avatarSrc: 'http://img.qqzhi.com/uploads/2019-02-08/222153435.jpg',
          imageMessage: '',
          textMessage: this.value,
          systemMessage: '',
          userId: 2,
        })
      }, 1000)
    },
    pushMessage (message) {
      this.messageDatas.push(message)
      this.toScrollBottom()
    },
    toScrollBottom () {
      this.$nextTick(() => {
        this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 375px;
  height: 667px;
  border: 1px solid rgb(236, 236, 236);
  margin: 0 auto;
}
.wrapper .header {
  height: 60px;
  background: rgb(245, 245, 245);
  box-sizing: border-box;
  border-bottom: 1px solid rgb(236, 236, 236);
  text-align: left;
}
.wrapper .header .target-name {
  color: #333;
  font-size: 18px;
  line-height: 60px;
  padding-left: 20px;
}
.wrapper .content {
  height: calc(100% - 60px - 150px);
  background: rgb(245, 245, 245);
  box-sizing: border-box;
  border-bottom: 1px solid rgb(236, 236, 236);
  overflow: auto;
  padding-bottom: 20px;
}
.wrapper .footer-input {
  height: 150px;
  background: rgb(255, 255, 255);
  position: relative;
  padding-right: 10px;
}
.wrapper .footer-input .icons {
  height: 30px;
}
.wrapper .footer-input .send {
  position: absolute;
  bottom: 5px;
  right: 20px;
  background: rgb(245, 245, 245);
  border: 1px solid rgb(229, 229, 229)!important;
  padding: 4px 15px;
  color: rgb(96, 96, 96);
  letter-spacing: 2px;
  outline:none;
}
.wrapper .footer-input .send:hover {
  background: rgb(18, 150, 17);
  color: #fff;
  border: none;
}
.wrapper .footer-input .input-message {
  width: calc(100% - 20px);
  height: calc(100% - 90px);
  border: 0;
  resize: none;
  padding: 10px;
}
.wrapper .footer-input .input-message:focus {
  border: none;
  outline: none;
  /* font-size: 16px; */
}
.wrapper .scroll-wrapper::-webkit-scrollbar {
  width: 6px;
  height: 1px;
}
.wrapper .scroll-wrapper::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: rgb(223, 222, 222);
}
.wrapper .scroll-wrapper::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 2px;
  /* background: #fff; */
}
</style>