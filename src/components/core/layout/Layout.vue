<template>
  <component
    :is="currentLayout"
    class="layout"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import defaultLayout from '@/layouts/default/Default.vue';

const route = useRoute();

const layoutsMap: Record<string, any> = {
  default: defaultLayout,
};

const currentLayout = computed(() => {
  const layoutName: string = route.meta.layout
    ? String(route.meta.layout)
    : 'default';
  return layoutsMap[layoutName];
});
</script>

<style lang="scss" src="./layout.scss" />
