<template>
  <div :class="$style.root">
    <div
      :class="$style.button"
      @click="decrease"
    >
      <Minus />
    </div>
    <div :class="$style.val">
      <input
        v-model="localValue"
        :class="$style.input"
        type="number"
      >
    </div>
    <div
      :class="$style.button"
      @click="increase"
    >
      <Plus />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Minus from '@/components/core/icon/assets/minus.svg';
import Plus from '@/components/core/icon/assets/plus.svg';
import { defineProps, watchEffect } from 'vue';
import { useInput } from '@/hooks/useInput';

const props = defineProps<{
  modelValue: Number,
}>();
const emit = defineEmits([
  'update:modelValue',
  'increase',
  'decrease',
]);
const increase = () => emit('increase');
const decrease = () => emit('decrease');

const {
  localValue,
} = useInput(
  props,
  emit,
);

watchEffect(() => console.log(props.modelValue));

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(122px);
  height: rem(40px);
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 rem(17px);
}
.button {
  cursor: pointer;
}
.input {
  width: rem(30px);
  text-align: center;
}
.val {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
