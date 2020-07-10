<template>
  <div clsas="messages">
    <div class="message-item" v-for="(message,index) in messages" :key="index">
      <SystemText>{{toTime(message[timeKey])}}</SystemText>
      <div class="content">
        <template v-if="message[systemMessageKey]">
          <SystemMessage>{{message[systemMessageKey]}}</SystemMessage>
        </template>
        <template v-else-if="message[imageMessageKey]">
          <ImageMessage :avatar="message[avatarKey]" :imgUrl="message[imageMessageKey]" :side="curUserId === message[userIdKey] ? 'right':'left'"/>
        </template>
        <template v-else-if="message[textMessageKey]">
          <TextMessage :side="curUserId === message[userIdKey] ? 'right':'left'" :avatar="message[avatarKey]">{{message[textMessageKey]}}</TextMessage>
        </template>
      </div>
    </div>
  </div>

</template>

<script>
import ImageMessage from "./components/ImageMessage"
import TextMessage from "./components/TextMessage"
import SystemText from "./components/common/SystemText"
import SystemMessage from "./components/SystemMessage"
import {simpleDate} from "../../utils/dateFormat"
export default {
  props:{
    messages:{
      type:Array,
      default:() => []
    },
    timeKey:{ // 时间绑定的key值
      type:String,
      required:true
    },
    avatarKey:{ // 头像绑定的key值
      type:String,
      required:true
    },
    systemMessageKey:{ // 系统消息绑定的key值
      type:String,
      required:true
    },
    textMessageKey:{ // 文本消息绑定的key值
      type:String,
      required:true
    },
    imageMessageKey:{ // 图片消息绑定的key值
      type:String,
       required:true
    },
    userIdKey:{
      type:String,
      required:true
    },
    curUserId:{
      type:[String,Number],
      required:true
    },
  },
  data(){
    return{
    }
  },
  components:{
    ImageMessage,
    SystemText,
    SystemMessage,
    TextMessage 
  },
  methods:{
    toTime(time){
      return simpleDate(time)
    }
  }
}
</script>

<style>

</style>