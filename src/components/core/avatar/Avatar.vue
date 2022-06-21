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
    default: avatarSize.BIGCIRCLE,
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
  &.smallCircle {
    width: 30px;
    height: 30px;
  }
  &.bigCircle {
    width: 40px;
    height: 40px;
  }
  &.smallSquare {
    width: 64px;
    height: 64px;
  }
  &.bigSquare {
    width: 150px;
    height: 150px;
  }
}
</style>
