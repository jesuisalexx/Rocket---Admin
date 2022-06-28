<template>
  <div :class="$style.root">
    <component
      :is="computedComponent"
      :class="$style.button"
    >
      <Icon
        :class="$style.iconBefore"
        :icon="button.iconBefore"
      />
      <div :class="$style.text">
        {{ button.label }}
      </div>
      <div
        v-if="typeof button.counter === 'number' "
        :class="$style.counter"
      >
        {{ button.counter }}
      </div>
      <Icon
        :class="$style.iconAfter"
        :icon="button.iconAfter"
      />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import Icon from '@/components/core/icon/Icon.vue';
import { SidebarButton, SidebarButtonType } from './index';

const props = defineProps<{
  button: SidebarButton,
}>();

const componentMap: Record<SidebarButtonType, string> = {
  [SidebarButtonType.LINK]: 'router-link',
  [SidebarButtonType.BUTTON]: 'button',
};

const computedComponent = computed(() => componentMap[props.button.type]);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
}
.button {
  width: 100%;
  height: rem(56px);
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: rgb(var(--color-body-light));
  border-left: rem(4px) solid rgb(var(--color-background));
  &:active {
    background: rgb(var(--color-surface));
    border-left: rem(4px) solid rgb(var(--color-primary-accent));
    color: rgb(var(--color-heading));
  }
}
.iconBefore {
  width: rem(20px);
  height: rem(20px);
  margin-left: rem(28px);
}
.iconAfter {
  width: rem(17px);
  height: rem(17px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: rem(30px);
}
.counter {
  width: rem(18px);
  height: rem(18px);
  border-radius: rem(6px);
  background: rgb(var(--color-red));
  font-family: 'Poppins', sans-serif;
  font-size: rem(10px);
  color: rgb(var(--color-heading));
  display: flex;
  justify-content: center;
  align-items: center;
  right: rem(30px);
  position: absolute;
}
.text {
  margin-left: rem(13px);
}
</style>
