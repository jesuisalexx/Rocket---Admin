<template>
  <div :class="$style.logo">
    <component :is="computedSvgComponent" />
  </div>
</template>

<script setup lang="ts">
import { logoState } from '@/components/core/logo/index';
import { computed } from 'vue';
import LogoCompact from './assets/logo-compact.svg';
import LogoFull from './assets/logo-full.svg';

const props = defineProps<{
  state: logoState
}>();

const logoSvgMap = {
  [logoState.FULL]: LogoFull,
  [logoState.COMPACT]: LogoCompact,
};
const computedSvgComponent = computed(() => logoSvgMap[props.state]);
</script>

<style lang="scss" module>
.logo {
  color: rgb(var(--color-primary-1));
  height: rem(36px);
}
</style>
