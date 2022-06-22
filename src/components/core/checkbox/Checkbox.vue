<template>
  <div
    :class="{
      'checkbox': true,
      'checkbox--checked': localValue
    }"
  >
    <div class="checkbox__check">
      <input
        :id="inputId"
        v-model="localValue"
        tabindex="0"
        type="checkbox"
        class="checkbox__input"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      >
      <Icon
        class="checkbox__icon"
        name="check"
        size="xs"
      />
    </div>
    <label
      :for="inputId"
      class="checkbox__label"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Icon from '@/components/core/icon/Icon.vue';
import { uuid } from '@/utils/uuid';
import { useField } from '@/hooks/useField';

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: null,
  },
  name: {
    type: String as PropType<string>,
    default: null,
  },
  detachForm: {
    type: Boolean as PropType<boolean>,
  },
});
const emit = defineEmits([
  'update:modelValue',
  'blur',
]);

const inputId = uuid();
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

<style lang="scss" src="./checkbox.scss" />
