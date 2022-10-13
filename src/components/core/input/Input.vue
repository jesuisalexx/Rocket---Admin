<template>
  <label
    :class="{
      [$style.root]: true,
      [$style[state]]: true,
      [$style[size]]: true,
      [$style.disabled]: isDisabled,
      [$style.error]: error,
      [$style.focus]: isFocused,
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
      <div
        v-if="'before' in $slots || props.iconBefore"
        :class="$style.iconBefore"
      >
        <slot name="before">
          <Icon :icon="props.iconBefore" />
        </slot>
      </div>
      <input
        ref="input"
        v-model="localValue"
        v-mask="mask"
        :class="{
          [$style.input]: true,
          [$style.inputIconBefore]: props.iconBefore,
          [$style.inputIconAfter]: props.iconAfter,
        }"
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
      <div
        v-if="type === 'password'"
        :class="$style.iconAfter"
        @click="togglePassword"
      >
        <Icon
          :icon="isPasswordVisible ? 'show' : 'hide'"
        />
      </div>
      <div
        v-else-if="'after' in $slots || props.iconAfter"
        :class="$style.iconAfter"
      >
        <slot name="after">
          <Icon
            :icon="props.iconAfter"
          />
        </slot>
      </div>
    </div>
    <div
      v-if="error"
      :class="$style['error-text']"
    >
      {{ t(error) }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useInput } from '@/hooks/useInput';
import Icon from '@/components/core/icon/Icon.vue';
import { useI18n } from 'vue-i18n';
import {
  inputType,
  InputProps,
  inputState,
  inputSize,
} from './index';

const props = withDefaults(
  defineProps<InputProps>(),
  {
    modelValue: '',
    name: undefined,
    label: undefined,
    placeholder: undefined,
    isDisabled: false,
    tabIndex: 0,
    disableTabNavigation: false,
    type: 'text' as inputType.TEXT,
    autocomplete: undefined,
    inputmode: undefined,
    mask: '',
    state: 'primary' as inputState.PRIMARY,
    size: 'md' as inputSize.MD,
    iconBefore: '',
    iconAfter: '',
  },
);

const emit = defineEmits([
  'update:modelValue',
  'input',
  'focus',
  'blur',
]);

const {
  localValue,
  isPasswordVisible,
  togglePassword,
  computedType,
  onInput,
  isFocused,
  onFocus,
  onBlur,
} = useInput(props, emit);

const { t } = useI18n();

const input = ref<HTMLElement | null>(null);
const computedTabIndex = computed(
  () => ((props.disableTabNavigation || props.isDisabled) ? -1 : props.tabIndex),
);

const focus = async () => {
  await nextTick();
  input.value?.focus?.();
};

defineExpose({
  focus,
  togglePassword,
  isPasswordVisible,
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  display: block;

  &.select {
    .input {
      background-color: rgb(var(--color-green));
      color: rgb(var(--color-body-dark));
    }
  }
  &.disabled {
    .input {
      background-color: rgb(var(--color-border));
      color: rgb(var(--color-body-dark));
    }
  }
}

.label {
  color: rgb(var(--color-body-dark));
  margin-bottom: rem(10px);
}

.field {
  position: relative;
  display: flex;
  align-items: center;
}

.input {
  width: 100%;
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(14px);
  padding: rem(10px) rem(16px);
  background: none;
  font-size: rem(14px);
  font-family: 'Poppins', sans-serif;
  color: rgba(var(--color-body-light));
  cursor: text;
  letter-spacing: rem(1px);

  &::placeholder {
    color: rgb(var(--color-body-dark));
  }

  &:focus {
    border: rem(1px) solid rgb(var(--color-primary-accent));
  }

  &.iconBefore {
    padding-left: rem(30px);
  }
}

.inputIconBefore {
  padding-left: rem(48px);
}

.inputIconAfter {
  padding-right: rem(48px);
}
.error {
  color: rgb(var(--color-orange));

  .input {
    border: rem(1px) solid orange;
  }
}

.error-text {
  margin-top: rem(10px);
  font-family: 'Poppins', sans-serif;
  font-size: rem(13px);
}

.iconBefore {
  width: rem(20px);
  height: rem(20px);
  position: absolute;
  left: rem(16px);
}

.iconAfter {
  width: rem(20px);
  height: rem(20px);
  position: absolute;
  right: rem(16px);
  cursor: pointer;
}
</style>
