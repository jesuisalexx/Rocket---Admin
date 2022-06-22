<template>
  <button
    tabindex="0"
    :class="[
      $style.button,
      $style[variant]
    ]"
  >
<!--    <div v-if="$style.before in $slots || iconBefore">-->
<!--      <slot>-->
<!--        <Icon />-->
<!--      </slot>-->
<!--    </div>-->
    <slot />
<!--    <Icon-->
<!--      :class="$style.icon"-->
<!--      icon="settings"-->
<!--    />-->
  </button>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import { PropType } from 'vue';
import { buttonVariant } from './index';

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
  font-size: rem(15px);
  cursor: pointer;
  display: flex;

  &.success {
    color: rgb(var(--color-primary-3));
    border: rem(1px) solid rgb(var(--color-primary-3));
    background-color: rgb(var(--color-background));
  }
  &.primary {
    color: rgb(var(--color-white));
    background-color: rgb(var(--color-primary-accent));
    border-radius: rem(14px);
    padding: rem(8px) rem(24px);
    box-shadow: 0 rem(3px) rgb(var(--color-primary-accent-dark));
    transition: .1s;
    &:hover {
      color: rgb(var(--color-white));
      background-color: rgb(var(--color-primary-accent));
      border-radius: rem(14px);
      padding: rem(8px) rem(24px);
      box-shadow: 0 rem(8px) rem(16px)  rgba(var(--color-primary-accent), 0.2);
    }
  }
  &.secondary {
    color: rgb(var(--color-body-light));
    border-radius: rem(14px);
    padding: rem(8px) rem(24px);
    border: rem(1px) solid rgb(var(--color-border));
    transition: .1s;
    &:hover {
      color: rgb(var(--color-primary-accent));
      background-color: rgba(var(--color-primary-accent), 0.1);
      border: rem(1px) solid rgba(var(--color-primary-accent), 0.1);
    }
  }
  &.disabled {
    color: rgb(var(--color-body-dark));
    border-radius: rem(14px);
    padding: rem(8px) rem(24px);
    background-color: rgb(var(--color-border));
  }
}
.icon {
}
</style>
