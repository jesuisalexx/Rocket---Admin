<template>
  <div>
    <div :class="$style.root">
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
      <div :class="$style.login">
        <slot name="login" />
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
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(600px);
  height: rem(884px);
  padding: rem(24px) rem(100px);
  border-radius: rem(20px);
  background: rgb(var(--color-surface));
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.label {
  color: rgb(var(--color-heading));
  font-size: rem(28px);
  font-weight: 500;
  margin-top: rem(159px);
}
.topButton {
  width: 100%;
  font-size: rem(15px);
  margin-top: rem(45px);
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
  height: rem(265px);
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
