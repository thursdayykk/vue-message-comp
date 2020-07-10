<template>
  <div class="user-message-item-wrapper"
       :class="side">
    <div class="user-avatar">
      <img :src="avatar"
           alt="">
    </div>
    <div class="user-message">
      <slot />
    </div>

  </div>
</template>

<script>
export default {
  props: {
    side: { // 左/右边展示
      type: String,
      default: 'left'
    },
    avatar:{ // 头像
      type:String,
      default:'http://img.qqzhi.com/uploads/2019-02-08/222153435.jpg'
    }
  },
}
</script>

<style scoped>
.user-message-item-wrapper {
  display: flex;
  margin: 10px 0;
}
.user-message-item-wrapper .user-avatar {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.user-message-item-wrapper .user-avatar img {
  width: 40px;
  height: 40px;
}
.user-message-item-wrapper.right {
  flex-direction: row-reverse;
}

.text-message-wrapper {
  min-height: 40px;
  margin: 0 10px;
  background: #fff;
  box-sizing: border-box;
  line-height: 1;
  padding: 10px 10px;
  line-height: 18px;
  position: relative;
  text-align: left;
  border-radius: 2px;
}
/deep/.user-message-item-wrapper.right .text-message-wrapper{
  background:rgb(158,234,106)
}
/deep/.user-message-item-wrapper.right .text-message-wrapper::after {
  display: block;
  content: "";
  position: absolute;
  border: 5px solid #fff;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  /* background: red; */
  right: -10px;
  top: 10px;
}
/deep/.user-message-item-wrapper.right .text-message-wrapper::after {
  border-left-color:rgb(158,234,106)
}
/deep/.user-message-item-wrapper.left .text-message-wrapper::after {
  display: block;
  content: "";
  position: absolute;
  border: 5px solid #fff;
  border-left-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  /* background: red; */
  left: -10px;
  top: 10px;
}
/deep/.user-message-item-wrapper .text-message-wrapper .content {
  max-width: 220px;
  /* 中文换行 */
  word-break: break-all;
  /* 英文数字换行 */
  word-wrap: break-word;
  padding-left: 5px;
}
/deep/.user-message-item-wrapper .image-wrapper {
  width: 200px;
  /* max-height: 200px; */
}
/deep/.user-message-item-wrapper .image-wrapper.right {
  margin-right: 10px;
}
/deep/.user-message-item-wrapper .image-wrapper.left {
  margin-right: 10px;
}
/deep/.user-message-item-wrapper .image-wrapper img {
  width: 90%;
}
</style>