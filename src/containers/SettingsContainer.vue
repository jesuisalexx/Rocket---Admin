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
    <div :class="$style.content">
      <slot name="page" />
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
.linkButton {
  width: 100%;
  height: rem(60px);
  display: flex;
  align-items: center;
}
.content {
  margin-left: rem(20px);
}
</style>
