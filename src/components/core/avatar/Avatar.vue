<template>
  <div
    :class="[
      $style.root,
      $style[shape],
      $style[size]
    ]"
  >
    <DefaultAvatar
      v-if="!src"
      :class="$style.source"
    />
    <img
      v-else
      :class="$style.source"
      :src="`src/assets/img/` + src + `.svg`"
      alt=""
    >
  </div>
</template>

<script setup lang="ts">
import DefaultAvatar from '@/assets/img/avatar.svg';
import { avatarShape, avatarSize } from './index';

withDefaults(
  defineProps<{
      shape?: avatarShape,
      size?: avatarSize,
      src?: string,
    }>(),
  {
    shape: avatarShape.CIRCLE,
    size: avatarSize.S,
  },
);
</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

.root {
  background-color: #000;
  .source {
    width: 100%;
    height: 100%;
  }
}

.circle {
  border-radius: 50%;
}

.square {
  border-radius: 30%;
}

.xs {
  width: rem(30px);
  height: rem(30px);
}

.s {
  width: rem(40px);
  height: rem(40px);
}

.m {
  width: rem(64px);
  height: rem(64px);
}

.l {
  width: rem(140px);
  height: rem(140px);
}
</style>
