<template>
  <div :class="$style.root">
    <div :class="$style.smallCardWrap">
      <div :class="$style.linkButton">
        <slot name="profile" />
      </div>
      <div :class="$style.linkButton">
        <slot name="settings" />
      </div>
      <div :class="$style.linkButton">
        <slot name="other" />
      </div>
    </div>
    <div :class="$style.bigCardWrap">
      <div :class="$style.heading">
        <slot name="heading" />
      </div>
      <div :class="$style.avatarWrap">
        <div :class="$style.avatar">
          <slot name="avatar" />
        </div>
      </div>
      <div :class="$style.nameWrap">
        <slot name="name" />
        <slot name="last-name" />
      </div>
      <div :class="$style.wideFields">
        <slot name="email" />
      </div>
      <div :class="$style.phoneField">
        <slot name="phone" />
      </div>
      <div :class="$style.wideFields">
        <slot name="status" />
      </div>
      <div :class="$style.buttonWrap">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  display: flex;
  padding: rem(25px);
}
.smallCardWrap {
  width: rem(300px);
  height: fit-content;
  border-radius: rem(30px);
  padding: rem(30px);
  background: rgb(var(--color-surface));
}
.bigCardWrap {
  margin-left: rem(20px);
  width: rem(500px);
  height: rem(750px);
  border-radius: rem(30px);
  padding: rem(30px);
  background: rgb(var(--color-surface));
  position: relative;
}
.linkButton {
  width: 100%;
  height: rem(60px);
  display: flex;
  align-items: center;
}
.heading {
  font-size: rem(28px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.avatarWrap {
  margin-top: rem(20px);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.avatar {
  width: rem(160px);
  height: rem(160px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: rem(10px);
  border-radius: 50%;
  border: rem(2px) dashed rgb(var(--color-body-dark));
}
.nameWrap {
  margin-top: rem(25px);
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wideFields {
  width: 100%;
  margin-top: rem(27px);
}
.phoneField {
  margin-top: rem(27px);
  z-index: 5;
}
.buttonWrap {
  display: flex;
  justify-content: flex-end;
  margin-top: rem(130px);
}
</style>
