<template>
  <label class="field">
    <span
      v-if="label"
      class="field__label"
    >
      {{ label }}
    </span>
    <div class="field__input-wrapper">
      <input
        v-model="localValue"
        :tabindex="disableTabNavigation ? -1 : tabIndex"
        type="text"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        :placeholder="placeholder"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      >
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { useField } from '@/hooks/useField';
import { inputType } from '@/types/form';

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: null,
  },
  name: {
    type: String as PropType<string>,
    default: null,
  },
  label: {
    type: String as PropType<string>,
    default: null,
  },
  placeholder: {
    type: String as PropType<string>,
    default: null,
  },
  isDisabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  tabIndex: {
    type: Number as PropType<number>,
    default: 0,
  },
  disableTabNavigation: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  type: {
    type: String as PropType<inputType>,
    default: inputType.TEXT,
  },
  autocomplete: {
    type: String as PropType<string>,
    default: undefined,
  },
  inputmode: {
    type: String as PropType<string>,
    default: undefined,
  },
});
const emit = defineEmits([
  'update:modelValue',
  'blur',
]);

const {
  localValue,
  onInput,
  onFocus,
  onBlur,
  error,
} = useField(
  props,
  emit,
);
</script>

<style lang="scss" src="./field.scss" />
