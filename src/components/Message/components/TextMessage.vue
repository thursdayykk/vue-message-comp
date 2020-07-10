<template>
  <UserMessageWrapper v-bind="$attrs">
    <div class="text-message-wrapper">
      <div class="content">
        <slot />
      </div>
    </div>
  </UserMessageWrapper>
</template>

<script>
import UserMessageWrapper from "./common/UserMessageWrapper"
export default {
  components:{
    UserMessageWrapper
  }
}
</script>

<style scoped>

</style>