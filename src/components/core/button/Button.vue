<template>
  <button
    tabindex="0"
    :class="[
      $style.button,
      $style[variant]
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { buttonVariant } from '@/types/button';

defineProps({
  variant: {
    type: String as PropType<string>,
    default: buttonVariant.PRIMARY,
    validator: (state: buttonVariant) => Object.values(buttonVariant).includes(state),
  },
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.button {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  cursor: pointer;

  &.success {
    color: rgb(var(--color-primary-3));
    border: 1px solid rgb(var(--color-primary-3));
    background-color: rgb(var(--color-background));
  }
  &.primary {
    color: rgb(var(--color-white));
    background-color: rgb(var(--color-primary-accent));
    border-radius: 14px;
    padding: 8px 24px;
    box-shadow: 0 3px rgb(var(--color-primary-accent-dark));
    transition: .2s;
    &:hover {
      color: rgb(var(--color-white));
      background-color: rgb(var(--color-primary-accent));
      border-radius: 14px;
      padding: 8px 24px;
      box-shadow: 0 8px 16px  rgba(var(--color-primary-accent), 0.2);
    }
  }
  &.secondary {
    color: rgb(var(--color-body-light));
    border-radius: 14px;
    padding: 8px 24px;
    border: 1px solid rgb(var(--color-border));
    transition: .2s;
    &:hover {
      color: rgb(var(--color-primary-accent));
      background-color: rgba(var(--color-primary-accent), 0.1);
      border: 1px solid rgba(var(--color-primary-accent), 0.1);
    }
  }
  &.disabled {
    color: rgb(var(--color-body-dark));
    border-radius: 14px;
    padding: 8px 24px;
    background-color: rgb(var(--color-border));
  }
}
</style>
