<template>
  <div :class="$style.root">
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
.avatar {
  height: 40px;
  width: 40px;
}
.text {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: rgb(var(--color-heading));
  display: flex;
  align-items: center;
  margin-left: 12px;
}
.arrowIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 6px;
}
</style>
