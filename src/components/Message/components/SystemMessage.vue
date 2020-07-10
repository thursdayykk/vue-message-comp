<template>
  <div class="sysmtem-message-wrapper">
    <SystemText>
      <slot />
    </SystemText>
  </div>
</template>

<script>
import SystemText from "./common/SystemText"
export default {
  components:{
    SystemText
  }
}
</script>

<style scoped>
.sysmtem-message-wrapper {
  margin: 10px 0;
}
</style>