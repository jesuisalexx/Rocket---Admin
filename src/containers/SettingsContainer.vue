<template>
  <div :class="$style.root">
    <div>
      <slot name="menu" />
    </div>
    <div :class="$style.content">
      <slot name="page" />
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
.content {
  margin-left: rem(20px);
}
</style>
