<template>
  <div
    :class="$style.root"
  >
    <Field
      type="select"
      icon-after="arrowDown2"
    />
    <div :class="$style.selectField" />
  </div>
</template>

<script setup lang="ts">
import Field from '@/components/core/field/Field.vue';

</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

.root {
  width: 100%;
  position: relative;
}
.selectField {
  width: 100%;
  height: rem(300px);
  background: #000;
  position: absolute;
  z-index: 2;
  margin-top: rem(5px);
  border-radius: 0 0 rem(30px) rem(30px);
  display: none;
}
</style>
