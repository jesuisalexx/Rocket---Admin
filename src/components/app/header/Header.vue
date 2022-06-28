<template>
  <div :class="$style.root">
    <!--    <Logo />-->
    <!--    <div :class="$style.controls">-->
    <!--      <ThemeSwitch :class="$style.control" />-->
    <!--      <TelegramIcon :class="$style.control" />-->
    <!--      <InstagramIcon :class="$style.control" />-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import InstagramIcon from '@/components/special/instagramIcon/InstagramIcon.vue';
import TelegramIcon from '@/components/special/telegramIcon/TelegramIcon.vue';
import ThemeSwitch from '@/components/app/themeSwitch/ThemeSwitch.vue';

import Logo from '@/components/app/logo/Logo.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  display: flex;
  justify-content: space-between;
}

.controls {
  display: flex;
  align-items: center;
}

.control {
  &:not(:first-child) {
    margin-left: rem(14px);
  }
}

.telegramIcon {}
</style>
