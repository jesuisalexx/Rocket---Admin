<template>
  <button
    tabindex="0"
    :class="[
      $style.button,
      $style[state]
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

<style lang="scss" module>
@import "src/assets/styles/utils";

.button {
  &.success {
    color: rgb(var(--color-primary-3));
    border: 1px solid rgb(var(--color-primary-3));
    background-color: rgb(var(--color-background));
  }
}
</style>
