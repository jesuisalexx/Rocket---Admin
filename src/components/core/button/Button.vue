<template>
  <button
    tabindex="0"
    :class="[
      'button',
      `button--${state}`
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { buttonState } from '@/types/button';

defineProps({
  state: {
    type: String as PropType<string>,
    default: buttonState.PRIMARY,
    validator: (state: buttonState) => Object.values(buttonState).includes(state),
  },
});
</script>

<style lang="scss" src="./button.scss" />
