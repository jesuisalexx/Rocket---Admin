<template>
  <div :class="$style.logo">
    {{ commonStore.logoText }}
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common';

const commonStore = useCommonStore();
</script>

<style lang="scss" module>
.logo {
  color: rgb(var(--color-primary-1));
}
</style>
