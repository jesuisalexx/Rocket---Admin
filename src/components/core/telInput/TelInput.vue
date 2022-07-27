<template>
  <div :class="$style.root">
    <label
      :class="$style.label"
      for="phone"
    >
      {{ t('telInput.phone') }}
    </label>
    <div :class="$style.inputWrap">
      <input
        ref="telInput"
        v-model="modelValue"
        type="number"
        name="tel"
        :placeholder="t('profile.phone-placeholder')"
        :class="$style.input"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref, onMounted, defineProps, PropType,
} from 'vue';
import intlTelInput from 'intl-tel-input';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const telInput = ref(null);
const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: null,
  },
});

onMounted(() => {
  intlTelInput(telInput.value, {
  });
});
</script>

<style>
@import 'intl-tel-input/build/css/intlTelInput.css';
</style>

<style lang="scss" module>
@import "src/assets/styles/utils";

.inputWrap {
  width: 100%;
  height: rem(43px);
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(14px);
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  margin-top: rem(10px);
  color: rgb(var(--color-body-light));
  padding: 0 rem(10px);
}
.label {
  width: rem(300px);
  height: rem(40px);
  color: rgb(var(--color-body-dark));
}
.iti {
  width: 100%;
}
.input {
  width: 100%;
}
</style>
