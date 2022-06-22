<template>
  <div
    :class="[
      $style.root,
      $style[shape],
      $style[size]
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { avatarShape, avatarSize } from './index';

defineProps({
  shape: {
    type: String as PropType<string>,
    default: avatarShape.SQUARE,
    validator: (state: avatarShape) => Object.values(avatarShape).includes(state),
  },
  size: {
    type: String as PropType<string>,
    default: avatarSize.XS,
    validator: (state: avatarSize) => Object.values(avatarSize).includes(state),
  },
});
</script>

<style lang="scss" module>
.root {
  width: 100px;
  height: 100px;
  background: #000;
  &.circle {
    border-radius: 50%;
  }
  &.square {
    border-radius: 30%;
  }
  &.xs {
    width: 30px;
    height: 30px;
  }
  &.s {
    width: 40px;
    height: 40px;
  }
  &.m {
    width: 64px;
    height: 64px;
  }
  &.l {
    width: 150px;
    height: 150px;
  }
}
</style>
