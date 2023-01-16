<template>
  <Card :class="$style.card">
    <div :class="$style.fieldWrap">
      <slot name="top-input" />
    </div>
    <div>
      <slot name="table" />
    </div>
    <div :class="$style.pagination">
      <slot name="pagination" />
    </div>
  </Card>
</template>

<script lang="ts" setup>
import Card from '@/components/core/card/Card.vue'; </script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.fieldWrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.pagination {
  margin-top: rem(24px);
}

.card {
  margin-top: rem(32px);
}
</style>
