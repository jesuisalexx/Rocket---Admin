<template>
  <div>
    <div
      :class="[
        $style.root,
        isLoading && $style.loading,
      ]"
    >
      <div :class="$style.label">
        <slot name="label" />
      </div>
      <div :class="$style.topButton">
        <div :class="$style.google">
          <slot name="top-button-icon" />
        </div>
        <slot name="top-button" />
      </div>
      <div :class="$style.topText">
        <div :class="$style.stripe" />
        <slot name="top-text" />
        <div :class="$style.stripe" />
      </div>
      <div :class="$style.namesWrap">
        <div :class="$style.name">
          <slot name="first-name" />
        </div>
        <div :class="$style.lastName">
          <slot name="last-name" />
        </div>
      </div>
      <div :class="$style.username">
        <slot name="username" />
      </div>
      <div :class="$style.login">
        <slot name="login" />
      </div>
      <div :class="$style.password">
        <slot name="password" />
      </div>
      <div :class="$style.confirmPassword">
        <slot name="password-confirm" />
      </div>
      <div :class="$style.checkboxWrap">
        <div :class="$style.checkbox">
          <slot
            name="accept"
          />
        </div>
        <div :class="$style.termsButton">
          <slot
            name="terms-button"
          />
        </div>
      </div>
      <div :class="$style.bottomPartWrap">
        <div
          :class="[
            $style.createButton,
            !isDisabled && $style.disabled,
          ]"
        >
          <slot name="create-button" />
        </div>
        <div :class="$style.bottomTextWrap">
          <div :class="$style.bottomText">
            <slot name="bottom-text" />
          </div>
          <div :class="$style.signUp">
            <slot name="sign-up-button" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  isDisabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(600px);
  padding: rem(18px) rem(90px);
  border-radius: rem(20px);
  background: rgb(var(--color-surface));
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.disabled {
  pointer-events: none;
}
.loading {
  pointer-events: none;
}
.label {
  color: rgb(var(--color-heading));
  font-size: rem(28px);
  font-weight: 500;
  margin-top: rem(50px);
}
.topButton {
  width: 100%;
  font-size: rem(15px);
  margin-top: rem(36px);
  display: flex;
  position: relative;
}
.google {
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
  margin-top: rem(30px);
}
.stripe {
  width: rem(122px);
  height: rem(1px);
  background: rgb(var(--color-border));
}
.namesWrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: rem(28px);
}
.name {
  width: 46%;
}
.lastName {
  width: 46%;
}
.username {
  width: 100%;
  margin-top: rem(20px);
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
  margin-top: rem(25px);
}
.termsButton {
  margin-left: rem(7px);
}
.createButton {
  width: 100%;
  margin-top: rem(24px);
}
.bottomText {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
}
.bottomPartWrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: rem(150px);
}
.signUp {
  margin-left: rem(7px);
}
.bottomTextWrap {
  display: flex;
}
</style>
