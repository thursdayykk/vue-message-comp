<template>
  <UserMessageWrapper v-bind="$attrs">
    <div class="image-wrapper">
    <img :src="imgUrl"
         alt="">
  </div>
  </UserMessageWrapper>
</template>

<script>
import UserMessageWrapper from "./common/UserMessageWrapper"
export default {
  props:{
    imgUrl:{
      type:String
    }
  },
  components:{
    UserMessageWrapper
  }
}
</script>

<style>

</style>