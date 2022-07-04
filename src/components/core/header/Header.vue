<template>
  <div :class="$style.root">
    <div :class="$style.leftSection">
      <slot name="left-section" />
    </div>
    <div :class="$style.rightSection">
      <slot name="right-section-icons" />
      <slot name="divider" />
      <slot name="right-section-profile" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightSection {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
