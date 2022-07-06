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
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.editIcon {
  width: 33px;
  height: 33px;
  position: absolute;
  right: 1px;
  top: 11px;
}
</style>
