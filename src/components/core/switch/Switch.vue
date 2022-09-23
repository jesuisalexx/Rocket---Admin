<template>
  <div
    :class="$style.root"
  >
    <template
      v-for="(button, i) in buttons"
      :key="button"
    >
      <div
        :class="$style.button"
        @click="listType(button.value)"
      >
        <Icon :icon="button.icon" />
      </div>
      <div
        v-if="i + 1 !== buttons.length"
        :class="$style.divider"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/core/icon/Icon.vue';
import { computed, defineProps, ref } from 'vue';

const props = defineProps<{
  buttons: [],
  modelValue: String,
}>();
const emit = defineEmits([
  'update:modelValue',
]);
const type = ref('list');

const localModel = computed({
  get: () => props.modelValue,

  set: (value) => {
    emit('update:modelValue', value);
  },
});
const listType = (val: any) => {
  if (val === 'list') {
    localModel.value = 'list';
    console.log(localModel.value);
  } else {
    localModel.value = 'grid';
    console.log(localModel.value);
  }
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  height: rem(20px);
  display: flex;
}
.button {
  cursor: pointer;
  width: rem(20px);
  height: rem(20px);
  display: flex;
}
.divider {
  width: rem(1px);
  height: rem(18px);
  background-color: rgb(var(--color-border));
  margin: 0 rem(16px);
}
</style>
