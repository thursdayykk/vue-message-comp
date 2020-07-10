<template>
  <div class="message-item">
      <SystemText><slot name="time"/></SystemText>
      <div class="content">
        <slot />
      </div>
  </div>
</template>

<script>
import SystemText from "./SystemText"
export default {
  components:{
    SystemText
  }
}
</script>

<style>

</style>