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
      :for="inputId"
      :class="$style.label"
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

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
}
.check {
  width: rem(18px);
  height: rem(18px);
  border-radius: rem(5px);
  cursor: pointer;
  border: rem(1px) solid rgb(var(--color-border));
  background: rgb(var(--color-background));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checked {
  background: rgb(var(--color-primary-accent));
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
</style>
