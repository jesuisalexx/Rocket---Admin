<template>
  <div
    :class="$style.root"
  >
    <slot name="tab" />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  display: flex;
}
</style>
