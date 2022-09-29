<template>
  <div
    :class="$style.root"
  >
    <slot name="tab" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  tabs: [],
  modelValue: String
}>();

const emit = defineEmits([
  'update:modelValue',
]);
const localTabs = computed({
  get: () => props.tabs,

  set: (value) => {
    emit('update:modelValue', value);
  },
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  display: flex;
}
</style>
