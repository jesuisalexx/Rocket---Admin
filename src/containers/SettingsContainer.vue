<template>
  <div :class="$style.root">
    <div :class="$style.smallCardWrap" />
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
      <div :class="$style.wideFields">
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
}
.smallCardWrap {
  width: rem(400px);
  height: rem(300px);
  border-radius: rem(30px);
  background: green;
}
.bigCardWrap {
  margin-left: 20px;
  width: rem(500px);
  height: rem(750px);
  border-radius: rem(30px);
  padding: rem(30px);
  background: rgb(var(--color-surface));
  position: relative;
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
.buttonWrap {
  display: flex;
  justify-content: flex-end;
  margin-top: rem(130px);
}
</style>
