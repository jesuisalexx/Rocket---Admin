<template>
  <div :class="$style.root">
    <div :class="$style.contentWrap">
      <div :class="$style.content">
        <div :class="$style.img">
          <slot name="img" />
        </div>
        <div :class="$style.oldPassword">
          <slot name="old-password" />
        </div>
        <div :class="$style.newPassword">
          <slot name="new-password" />
        </div>
        <div :class="$style.newPassword">
          <slot name="new-password-confirm" />
        </div>
      </div>
      <div :class="$style.button">
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
  width: 100%;
  height: 100%;
  display: flex;
  padding: 25px;
}
.contentWrap {
  width: rem(500px);
  height: rem(750px);
  border-radius: rem(30px);
  padding: rem(40px);
  background: rgb(var(--color-surface));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.menuWrap {
  margin-right: 25px;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.oldPassword {
  width: 100%;
  margin-top: rem(40px);
}
.newPassword {
  width: 100%;
  margin-top: rem(24px);
}
.button {
  margin-top: rem(30px);
}
</style>
