<template>
  <div :class="$style.root">
    <Avatar
      size="l"
      shape="circle"
    />
    <div :class="$style.editIcon">
      <EditIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/core/avatar/Avatar.vue';
import EditIcon from '@/components/core/icon/assets/editRounded.svg';
</script>

<style lang="scss" module>
.root {
  position: relative;
  width: rem(160px);
  height: rem(160px);
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}
.editIcon {
  width: rem(33px);
  height: rem(33px);
  position: absolute;
  right: 1px;
}
</style>
