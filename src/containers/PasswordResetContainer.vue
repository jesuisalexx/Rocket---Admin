<template>
  <div
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
      <div :class="$style.password">
        <slot name="old-password" />
      </div>
      <div :class="$style.confirmPassword">
        <slot name="new-password" />
      </div>
      <div :class="$style.bottomParts">
        <div :class="$style.createButton">
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
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(600px);
  height: rem(950px);
  padding: rem(18px) rem(100px);
  border-radius: rem(20px);
  background: rgb(var(--color-surface));
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  margin-top: rem(60px);
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
  margin-top: rem(36px);
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
  margin-top: rem(30px);
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
.bottomParts {
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.createButton {
  width: 100%;
  margin-top: rem(45px);
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
}
</style>
