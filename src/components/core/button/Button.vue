<template>
  <button
    tabindex="0"
    :class="[
      $style.button,
      $style[variant]
    ]"
  >
    <div
      v-if="'beforeSpecial' in $slots || iconBeforeSpecial"
      :class="$style.iconBeforeSpecial"
    >
      <slot name="before">
        <Icon :icon="iconBeforeSpecial" />
      </slot>
    </div>
    <div
      v-if="'before' in $slots || iconBefore"
      :class="$style.iconBefore"
    >
      <slot name="before">
        <Icon :icon="iconBefore" />
      </slot>
    </div>
    <slot />
    <div
      v-if="'after' in $slots || iconAfter"
      :class="$style.iconAfter"
    >
      <slot name="after">
        <Icon :icon="iconAfter" />
      </slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import { PropType } from 'vue';
import { buttonVariant } from './index';

const props = defineProps({
  variant: {
    type: String as PropType<string>,
    default: buttonVariant.PRIMARY,
    validator: (state: buttonVariant) => Object.values(buttonVariant).includes(state),
  },
  iconBefore: {
    type: String as PropType<string>,
    default: '',
  },
  iconBeforeSpecial: {
    type: String as PropType<string>,
    default: '',
  },
  iconAfter: {
    type: String as PropType<string>,
    default: '',
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
  align-items: center;
  position: relative;

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
    box-shadow: 0 rem(2px) rgb(var(--color-primary-accent-dark));
    transition: 0.27s;
    &:hover {
      color: rgb(var(--color-white));
      background-color: rgb(var(--color-primary-accent));
      border-radius: rem(14px);
      padding: rem(8px) rem(24px);
      box-shadow: 0 rem(8px) rem(16px)  rgba(var(--color-primary-accent), 0.2);
    }
  }
  &.primary-extended {
    width: 100%;
    display: flex;
    justify-content: center;
    color: rgb(var(--color-white));
    background-color: rgb(var(--color-primary-accent));
    border-radius: rem(14px);
    padding: rem(8px) rem(24px);
    box-shadow: 0 rem(2px) rgb(var(--color-primary-accent-dark));
    transition: 0.27s;
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
    transition: 0.27s;
    &:hover {
      color: rgb(var(--color-primary-accent));
      background-color: rgba(var(--color-primary-accent), 0.1);
      border: rem(1px) solid rgba(var(--color-primary-accent), 0.1);
    }
  }
  &.secondary-google{
    width: 100%;
    color: rgb(var(--color-body-light));
    border-radius: rem(14px);
    padding: rem(9px) rem(108px);
    border: rem(1px) solid rgb(var(--color-border));
    transition: 0.27s;
    display: flex;
    justify-content: center;
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
  &.primary-minimalistic {
    color: rgb(var(--color-primary-accent));
    font-size: 14px;
    background: none;
  }
}
.icon {
}
.iconBefore {
  width: rem(20px);
  height: rem(20px);
  margin-right: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconBeforeSpecial {
  width: rem(20px);
  height: rem(20px);
  margin-right: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 14px;
  top: 13px;
}
.iconAfter {
  width: rem(20px);
  height: rem(20px);
  margin-left: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
