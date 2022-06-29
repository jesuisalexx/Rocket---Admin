<template>
  <div
    :class="[
      $style.root,
      $style[shape],
      $style[size]
    ]"
  >
    <Icon :icon="avatarIcon" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Icon from '@/components/core/icon/Icon.vue';
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
  // avatarIcon: {
  //   type: String as PropType<string>,
  // },
});
</script>

<style lang="scss" module>
.root {
  width: rem(100px);
  height: rem(100px);
  background: red;
  &.circle {
    border-radius: 50%;
  }
  &.square {
    border-radius: 30%;
  }
  &.xs {
    width: rem(30px);
    height: rem(30px);
  }
  &.s {
    width: rem(40px);
    height: rem(40px);
  }
  &.m {
    width: rem(64px);
    height: rem(64px);
  }
  &.l {
    width: rem(150px);
    height: rem(150px);
  }
}
</style>
