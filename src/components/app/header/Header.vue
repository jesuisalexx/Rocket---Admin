<template>
  <div class="header">
    UIKIT
    <div class="header__social">
      <TelegramIcon class="header__telegram" />
      <InstagramIcon class="header__instagram" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InstagramIcon from '@/components/special/instagramIcon/InstagramIcon.vue';
import TelegramIcon from '@/components/special/telegramIcon/TelegramIcon.vue';
</script>

<style lang="scss" src="./header.scss" />
