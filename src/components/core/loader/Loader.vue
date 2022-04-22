<template>
  <LoaderIconDots
    :class="[
      'loader',
      `loader--${size}`
    ]"
  />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import LoaderIconDots from '@/assets/icons/loader.svg';

type sizes = 'md';

defineProps({
  size: {
    type: String as PropType<sizes>,
    default: 'md',
  },
});
</script>

<style lang="scss" src="./loader.scss" />
