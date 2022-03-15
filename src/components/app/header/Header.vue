<template>
  <div class="header">
    <Logo />
    <div class="header__controls">
      <ThemeSwitch class="header__control" />
      <TelegramIcon class="header__control" />
      <InstagramIcon class="header__control" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InstagramIcon from '@/components/special/instagramIcon/InstagramIcon.vue';
import TelegramIcon from '@/components/special/telegramIcon/TelegramIcon.vue';
import ThemeSwitch from '@/components/app/themeSwitch/ThemeSwitch.vue';

import Logo from '@/components/app/logo/Logo.vue';
</script>

<style lang="scss" src="./header.scss" />
