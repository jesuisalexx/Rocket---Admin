<template>
  <div
    :class="$style.root"
  >
    <svg :class="$style.source">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
  </div>
</template>

<script lang="ts" setup>

interface IconProps {
  icon: string;
}

const props = defineProps<IconProps>();

defineExpose(props);
</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

.root {
  width: 100%;
  height: 100%;
  pointer-events: none;
  .source {
    fill: currentColor;
  }
}

.source {
  position: relative;
  display: block;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}
</style>
