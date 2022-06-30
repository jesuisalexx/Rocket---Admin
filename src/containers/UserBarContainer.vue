<template>
  <div :class="$style.root">
    <div :class="$style.divider" />
    <div :class="$style.avatar">
      <Avatar
        :avatar-icon="avatarIcon"
        size="s"
        shape="circle"
      />
    </div>
    <div :class="$style.text">
      <slot name="user-name" />
    </div>
    <div :class="$style.arrowIcon">
      <Icon icon="arrowDown" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Avatar from '@/components/core/avatar/Avatar.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { defineProps } from 'vue';

const props = defineProps({
  avatarIcon: String,
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.divider {
  height: rem(31px);
  width: rem(1px);
  background: rgb(var(--color-border));
  margin: 0 rem(25px);
}
.avatar {
  height: rem(40px);
  width: rem(40px);
}
.text {
  font-family: 'Poppins', sans-serif;
  font-size: rem(15px);
  color: rgb(var(--color-heading));
  display: flex;
  align-items: center;
  margin-left: rem(12px);
}
.arrowIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: rem(20px);
  height: rem(20px);
  margin-left: rem(6px);
}
</style>
