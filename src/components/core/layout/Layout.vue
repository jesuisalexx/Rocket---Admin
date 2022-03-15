<template>
  <component
    :is="currentLayout"
    class="layout"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import defaultLayout from '@/layouts/default/Default.vue';
import { useCommonStore } from '@/stores/common';

const route = useRoute();
const commonStore = useCommonStore();

const layoutsMap: Record<string, any> = {
  default: defaultLayout,
};

const currentLayout = computed(() => {
  const layoutName: string = route.meta.layout
    ? String(route.meta.layout)
    : 'default';
  return layoutsMap[layoutName];
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

<style lang="scss" src="./layout.scss" />
