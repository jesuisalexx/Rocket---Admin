<template>
  <Card>
    <div :class="$style.cardWrapper">
      <div :class="$style.heading">
        <slot name="heading" />
      </div>
      <div :class="$style.avatarWrapper">
        <div :class="$style.avatar">
          <slot name="avatar" />
        </div>
      </div>
      <div :class="$style.nameWrapper">
        <slot name="firstName" />
        <slot name="lastName" />
      </div>
      <div :class="$style.wideFields">
        <slot name="username" />
      </div>
      <div :class="$style.phoneField">
        <slot name="phone" />
      </div>
      <div :class="$style.wideFields">
        <slot name="job" />
      </div>
      <div :class="$style.button">
        <slot name="button" />
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import Card from '@/components/core/card/Card.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.cardWrapper {
  width: rem(440px);
  background-color: rgb(var(--color-surface));
  position: relative;
}
.heading {
  font-size: rem(28px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.avatarWrapper {
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
.nameWrapper {
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
  width: 100%;
  margin-top: rem(27px);
  z-index: 5;
}
.button {
  display: flex;
  justify-content: flex-end;
  margin-top: rem(30px);
}
</style>
