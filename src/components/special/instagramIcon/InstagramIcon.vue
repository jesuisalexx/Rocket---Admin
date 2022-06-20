<template>
  <div :class="$style.root">
    <div
      :class="{
        [$style.camera]: true,
        [$style.cameraActive]: isActive
      }"
    >
      <div :class="$style.cameraBackside" />
      <div :class="$style.cameraBody">
        <div :class="$style.cameraFlash" />
      </div>
      <div :class="$style.cameraLens" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  isActive: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  perspective: 160px;
  cursor: pointer;
  width: rem(25px);
  height: rem(25px);
}

.camera {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: .2s transform;
  &.cameraActive, &:hover {
    transform: rotateY(-30deg);
  }
}

.cameraActive {}

.cameraBody, .cameraLens {
  background-color: rgba(var(--color-background), 1);
}

.cameraBody, .cameraBackside {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(var(--color-primary-2));
  border-radius: rem(8px);
  position: relative;
}

.cameraBackside {
  position: absolute;
  transform: translateZ(-6px);
}

.cameraFlash {
  width: rem(2px);
  height: rem(2px);
  border-radius: 50%;
  background-color: rgb(var(--color-primary-2));
  position: absolute;
  top: rem(4px);
  right: rem(4px);
  transform: translateZ(rem(2px));
}

.cameraLens {
  position: absolute;
  width: rem(12px);
  height: rem(12px);
  border-radius: 50%;
  border: 1px solid rgb(var(--color-primary-2));
  transform: translateZ(rem(6px));
}

.highlight {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(var(--color-background), 0.27);
  filter: blur(rem(4px));
  transform: translateY(-50%) translateX(-50%);
  transition: .2s opacity;
  pointer-events: none;
}
</style>
