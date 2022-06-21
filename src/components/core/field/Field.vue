<template>
  <label
    :class="{
      [$style.root]: true,
      [$style.disabled]: isDisabled,
      [$style.error]: error
    }"
  >
    <span
      v-if="('label' in $slots) || label"
      :class="$style.label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </span>
    <div :class="$style.field">
      <input
        ref="input"
        v-model="localValue"
        v-mask="mask"
        :class="$style.input"
        :tabindex="(disableTabNavigation || isDisabled) ? -1 : tabIndex"
        :type="computedType"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        :placeholder="placeholder"
        :disabled="isDisabled"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      >
    </div>
    <div
      v-if="error"
      :class="$style['error-text']"
    >
      {{ error }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { nextTick, PropType, ref } from 'vue';
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
  isGoogleMapsAutocomplete: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  detachForm: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  mask: {
    type: String as PropType<string>,
    default: '',
  },
});
const emit = defineEmits([
  'update:modelValue',
  'blur',
  'gMapAutocomplete',
]);

const input = ref<HTMLElement | null>(null);

const {
  localValue,
  touch,
  onInput,
  onFocus,
  onBlur,
  computedType,
  error,
} = useField(
  props,
  emit,
);

const focus = async () => {
  await nextTick();
  input.value?.focus?.();
};

defineExpose({
  touch,
  focus,
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  display: block;

  &.disabled {
    .input {
      background: rgb(var(--color-border));
      color: rgb(var(--color-body-dark));
    }
  }
}

.label {
  color: rgb(var(--color-body-dark));
}

.field {
}
.input {
  height: 100%;
  width: 100%;
  border: 1px solid rgb(var(--color-border));
  border-radius: 14px;
  padding: 10px 16px;
  background: none;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: rgba(var(--color-body-light));
  cursor: pointer;
  margin-top: 10px;

  &::placeholder {
    color: rgb(var(--color-body-dark));
  }
  &:focus {
    border: 1px solid rgb(var(--color-primary-accent));
  }
}

.fieldLabel {}

.error {
  color: rgb(var(--color-orange));
  .input {
    border: 1px solid orange;
  }
}
.error-text {
  margin-top: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
}
</style>
