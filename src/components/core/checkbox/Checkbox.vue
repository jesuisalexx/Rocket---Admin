<template>
  <div
    :class="{
      [$style.root]: true
    }"
  >
    <div
      :class="{
        [$style.check]: true,
        [$style.checked]: localValue
      }"
    >
      <input
        :id="inputId"
        v-model="localValue"
        tabindex="0"
        type="checkbox"
        :class="$style.input"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      >
      <Icon
        v-if="localValue"
        :class="$style.icon"
        icon="check"
        name="check"
      />
    </div>
    <label
      v-if="('label' in $slots) || label"
      :for="inputId"
      :class="$style.label"
    >
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Icon from '@/components/core/icon/Icon.vue';
import { uuid } from '@/utils/uuid';
import { useInput } from '@/hooks/useField';

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
    default: false,
  },
  label: {
    type: String as PropType<string>,
    default: null,
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
} = useInput(
  props,
  emit,
);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  display: flex;
  align-items: center;
}
.check {
  width: rem(18px);
  height: rem(18px);
  border-radius: rem(5px);
  cursor: pointer;
  border: rem(1px) solid rgb(var(--color-border));
  background-color: rgb(var(--color-background));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checked {
  background-color: rgb(var(--color-primary-accent));
  border: rem(1px) solid rgb(var(--color-primary-accent));
}
.input {
  width: 100%;
  height: 100%;
}
.icon {
  position: absolute;
  width: 100%;
  height: 100%;
}
.label {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
  font-family: 'Poppins', sans-serif;
  margin-left: rem(10px);
  cursor: pointer;
}
</style>
