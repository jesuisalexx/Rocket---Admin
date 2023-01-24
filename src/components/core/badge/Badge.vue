<template>
  <div
    :class="[
      $style.root,
      $style[variant]
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { BadgeType } from '@/components/core/badge';

const props = defineProps<{
  variant: BadgeType
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  font-size: rem(12px);
  font-weight: 400;
  text-transform: capitalize;
  padding: rem(5px) rem(12px);
  border-radius: rem(9px);
}
.success {
  color: rgb(var(--color-dark-green));
  background: rgba(88, 215, 134, 0.2);
}
.warning {
  background: rgba(255, 149, 92, 0.2);
  color: rgb(var(--color-dark-orange));
}
</style>
