<template>
  <div
    :class="$style.icon"
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

.icon {
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
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
}
</style>
