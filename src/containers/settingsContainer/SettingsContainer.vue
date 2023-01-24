<template>
  <div :class="$style.root">
    <div>
      <slot name="menu" />
    </div>
    <div>
      <slot name="view" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  display: flex;
  padding: rem(25px);
}
.linkButton {
  width: 100%;
  height: rem(60px);
  display: flex;
  align-items: center;
}
</style>
