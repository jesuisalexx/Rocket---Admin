<template>
  <div :class="$style.root">
    <div :class="$style.smallCardWrap"></div>
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
  width: 400px;
  height: 300px;
  border-radius: 30px;
  background: green;
}
.bigCardWrap {
  margin-left: 20px;
  width: 500px;
  height: 750px;
  border-radius: 40px;
  padding: 30px;
  background: rgb(var(--color-surface));
  border: 1px solid black;
}
.heading {
  font-size: 28px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.avatarWrap {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.avatar {
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  border: 2px dashed rgb(var(--color-body-dark));
}
.nameWrap {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wideFields {
  width: 100%;
  margin-top: 27px;
}
.buttonWrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>
