<template>
  <LayoutWrapper>
    <router-view />
  </LayoutWrapper>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  onBeforeUnmount,
  onMounted,
} from 'vue';
import { useCommonStore } from '@/stores/common';
import { theme } from '@/types/theme';
import LayoutWrapper from '@/components/core/layoutWrapper/LayoutWrapper.vue';

const commonStore = useCommonStore();

const activeTheme = ref(theme.LIGHT);
watch(activeTheme, (value) => {
  commonStore.setTheme(value);
});

const handleBaseUnit = () => {
  const vh = window.innerHeight / 100;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  commonStore.setVh(vh);
};

onMounted(() => {
  handleBaseUnit();
  window.addEventListener('resize', handleBaseUnit);
  window.addEventListener('orientationchange', handleBaseUnit);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleBaseUnit);
  window.removeEventListener('orientationchange', handleBaseUnit);
});
</script>

<style lang="scss">
@import "src/assets/styles";
</style>
