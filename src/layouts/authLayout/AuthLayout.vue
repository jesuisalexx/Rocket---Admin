<template>
  <div :class="$style.root">
    <Illustration :class="$style.picture" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Illustration from '@/assets/img/authIllustration.svg';
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100vh;
  padding: rem(70px);
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.picture {
  width: rem(580px);
  height: rem(590px);
  left: 15%;
}
</style>
