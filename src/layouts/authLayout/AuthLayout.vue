<template>
  <div :class="$style.root">
    <div :class="$style.layoutWrap">
      <Illustration :class="$style.picture" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Illustration from '@/assets/img/authIllustration.svg';
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layoutWrap {
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.picture {
  width: rem(580px);
  height: rem(590px);
}
</style>
