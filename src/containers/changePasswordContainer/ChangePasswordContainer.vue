<template>
  <Card>
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
  </Card>
</template>

<script lang="ts" setup>
import Card from '@/components/core/card/Card.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.contentWrap {
  width: rem(440px);
  background: rgb(var(--color-surface));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img {
  margin-top: rem(50px);
}
.oldPassword {
  width: 100%;
  margin-top: rem(40px);
}
.newPassword {
  width: 100%;
  margin-top: rem(30px);
}
.button {
  margin-top: rem(30px);
}
</style>
