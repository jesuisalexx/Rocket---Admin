<template>
  <div class="instagram-camera__wrapper">
    <div
      :class="{
        'instagram-camera': true,
        'instagram-camera--active': isActive
      }"
    >
      <div class="instagram-camera__backside" />
      <div class="instagram-camera__body">
        <div class="instagram-camera__flash" />
      </div>
      <div class="instagram-camera__lens" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  isActive: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<style lang="scss" src="./instagramIcon.scss" />
