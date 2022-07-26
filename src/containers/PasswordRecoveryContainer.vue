<template>
  <Card>
    <Form
      v-model="localModel"
    >
      <div :class="$style.root">
        <div :class="$style.icon">
          <slot name="icon" />
        </div>
        <div :class="$style.label">
          <slot name="heading" />
        </div>
        <div :class="$style.login">
          <slot name="email" />
        </div>
        <div :class="$style.submitButton">
          <slot name="submit-button" />
        </div>
        <div :class="$style.bottomTextWrap">
          <div :class="$style.bottomText">
            <slot name="login-text" />
          </div>
          <div :class="$style.signUp">
            <slot name="login-button" />
          </div>
        </div>
      </div>
    </Form>
  </Card>
</template>

<script lang="ts" setup>
import Form from '@/components/core/form/Form.vue';
import Card from '@/components/core/card/Card.vue';
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
  width: rem(550px);
  padding: rem(10px) rem(70px);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  margin-top: rem(70px);
}
.label {
  color: rgb(var(--color-heading));
  font-size: rem(28px);
  font-weight: 500;
  margin-top: rem(40px);
}
.topButton {
  width: 100%;
  font-size: rem(15px);
  margin-top: rem(40px);
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
  margin-top: rem(35px);
}
.login {
  width: 100%;
  margin-top: rem(25px);
}
.password {
  width: 100%;
  margin-top: rem(25px);
}
.confirmPassword {
  width: 100%;
  margin-top: rem(25px);
}
.checkboxWrap {
  display: flex;
  width: 100%;
  margin-top: rem(25px);
}
.termsButton {
  margin-left: rem(7px);
}
.submitButton {
  width: 100%;
  margin-top: rem(30px);
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
