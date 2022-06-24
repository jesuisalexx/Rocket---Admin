<template>
  <div :class="$style.root">
    <Illustration :class="$style.picture" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Illustration from '@/components/core/icon/assets/illustration.svg';
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100vh;
  padding: 70px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.picture {
}

</style>
