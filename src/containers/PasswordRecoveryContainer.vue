<template>
  <Form
    v-model="localModel"
  >
    <div :class="$style.root">
      <div :class="$style.icon">
        <slot name="icon" />
      </div>
      <div :class="$style.label">
        <slot name="label" />
      </div>
      <div :class="$style.login">
        <slot name="email" />
      </div>
      <div :class="$style.submitButton">
        <slot name="submit-button" />
      </div>
      <div :class="$style.bottomTextWrap">
        <div :class="$style.bottomText">
          <slot name="bottom-text" />
        </div>
        <div :class="$style.signUp">
          <slot name="login-button" />
        </div>
      </div>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import Form from '@/components/core/form/Form.vue';
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object,
  },
});
const emit = defineEmits([
  'update:modelValue',
]);
const localModel = computed({
  get: () => props.modelValue,

  set: (value) => {
    emit('update:modelValue', value);
  },
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(600px);
  height: rem(884px);
  padding: rem(18px) rem(100px);
  border-radius: rem(20px);
  background: rgb(var(--color-surface));
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  margin-top: rem(170px);
}
.label {
  color: rgb(var(--color-heading));
  font-size: rem(28px);
  font-weight: 500;
  margin-top: rem(37px);
}
.topButton {
  width: 100%;
  font-size: rem(15px);
  margin-top: rem(35px);
}
.topText {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(var(--color-body-dark));
  text-transform: uppercase;
  font-size: rem(12px);
  margin-top: rem(41px);
}
.stripe {
  width: rem(122px);
  height: rem(1px);
  background: rgb(var(--color-border));
}
.username {
  width: 100%;
  margin-top: rem(28px);
}
.login {
  width: 100%;
  margin-top: rem(23px);
}
.password {
  width: 100%;
  margin-top: rem(23px);
}
.confirmPassword {
  width: 100%;
  margin-top: rem(23px);
}
.checkboxWrap {
  display: flex;
  width: 100%;
  margin-top: rem(24px);
}
.termsButton {
  margin-left: rem(7px);
}
.submitButton {
  width: 100%;
  margin-top: rem(24px);
}
.bottomText {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
}
.signUp {
  margin-left: rem(7px);
}
.bottomTextWrap {
  display: flex;
  margin-top: rem(69px);
}
</style>
