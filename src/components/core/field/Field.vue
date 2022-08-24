<template>
  <label
    :class="{
      [$style.root]: true,
      [$style.disabled]: isDisabled,
      [$style.error]: error,
      [$style.select]: type.select
    }"
  >
    <div
      v-if="('label' in $slots) || label"
      :class="$style.label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <div :class="$style.field">
      <div
        v-if="'before' in $slots || iconBefore"
        :class="$style.iconBefore"
      >
        <slot name="before">
          <Icon :icon="iconBefore" />
        </slot>
      </div>
      <input
        ref="input"
        v-model="localValue"
        v-mask="mask"
        :class="{
          [$style.input]: true,
          [$style.inputIconBefore]: iconBefore,
          [$style.inputIconAfter]: iconAfter,
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
        v-else-if="'after' in $slots || iconAfter"
        :class="$style.iconAfter"
      >
        <slot name="after">
          <Icon
            :icon="iconAfter"
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
import Icon from '@/components/core/icon/Icon.vue';

import {
  nextTick, PropType, ref,
} from 'vue';
import { useField } from '@/hooks/useField';
import { inputType } from '@/types/form';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
  iconBefore: {
    type: String as PropType<string>,
    default: '',
  },
  iconAfter: {
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
  isPasswordVisible,
  togglePassword,
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

  &.select {
    .input {
      background: rgb(var(--color-green));
      color: rgb(var(--color-body-dark));
    }
  }
  &.disabled {
    .input {
      background: rgb(var(--color-border));
      color: rgb(var(--color-body-dark));
    }
  }
}

.label {
  color: rgb(var(--color-body-dark));
  margin-bottom: 10px;
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
  letter-spacing: 1px;

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

.fieldLabel {
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
