<template>
  <Card>
    <div
      :class="[
        $style.root,
        isLoading && $style.loading,
      ]"
    >
      <div :class="$style.label">
        <slot name="heading" />
      </div>
      <div :class="$style.topButton">
        <slot
          name="google-login-button"
          :button-icon="$style.googleIcon"
        />
      </div>
      <div :class="$style.topText">
        <div :class="$style.stripe" />
        <slot name="login-text" />
        <div :class="$style.stripe" />
      </div>
      <div :class="$style.login">
        <slot name="email" />
      </div>
      <div :class="$style.password">
        <slot name="password" />
      </div>
      <div :class="$style.checkboxWrap">
        <div :class="$style.checkbox">
          <slot
            name="checkbox"
          />
        </div>
        <div :class="$style.passwordButton">
          <slot
            name="password-button"
          />
        </div>
      </div>
      <div :class="$style.bottomPartsWrap">
        <div :class="$style.loginButton">
          <slot name="login-button" />
        </div>
        <div :class="$style.bottomTextWrap">
          <div :class="$style.bottomText">
            <slot name="sign-up-text" />
          </div>
          <div :class="$style.signUp">
            <router-link to="/auth/sign-up">
              <slot name="sign-up-button" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import Card from '@/components/core/card/Card.vue';

const props = defineProps({
  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
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
.loading {
  pointer-events: none;
}
.toast {
  position: absolute;
  z-index: 2;
  left: rem(20px);
  top: rem(50px);
}
.label {
  color: rgb(var(--color-heading));
  font-size: rem(28px);
  font-weight: 500;
  margin-top: rem(100px);
}
.topButton {
  width: 100%;
  font-size: rem(15px);
  margin-top: rem(45px);
  display: flex;
  position: relative;
}
.googleIcon {
  top: rem(13px);
  left: rem(25px);
  position: absolute;
}
.topText {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(var(--color-body-dark));
  text-transform: uppercase;
  font-size: rem(12px);
  margin-top: rem(36px);
}
.stripe {
  width: rem(122px);
  height: rem(1px);
  background: rgb(var(--color-border));
}
.login {
  width: 100%;
  margin-top: rem(31px);
}
.password {
  width: 100%;
  margin-top: rem(27px);
}
.checkboxWrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: rem(24px);
}
.passwordButton {
}
.loginButton {
  width: 100%;
  margin-top: rem(24px);
}
.bottomText {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
}
.bottomPartsWrap {
  width: 100%;
  height: rem(180px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.signUp {
  margin-left: rem(7px);
}
.bottomTextWrap {
  display: flex;
}
</style>
