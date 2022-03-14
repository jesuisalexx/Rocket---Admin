<template>
  <div class="telegram-airplane__wrapper">
    <div
      class="telegram-airplane"
    >
      <div class="telegram-airplane__wings">
        <div class="telegram-airplane__wing-left">
          <TelegramAirplaneWings class="telegram-airplane__wing-left-svg" />
        </div>
        <div class="telegram-airplane__wing-right">
          <TelegramAirplaneWings class="telegram-airplane__wing-right-svg" />
        </div>
      </div>
      <div class="telegram-airplane__bottom">
        <div class="telegram-airplane__bottom-part-left">
          <TelegramAirplaneBottomPart class="telegram-airplane__bottom-part-left-icon" />
        </div>
        <div class="telegram-airplane__bottom-part-right">
          <TelegramAirplaneBottomPart class="telegram-airplane__bottom-part-right-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TelegramAirplaneWings from './assets/telegramAirplaneWings.svg';
import TelegramAirplaneBottomPart from './assets/telegramAirplaneBottomPart.svg';
</script>

<style lang="scss" src="./telegramIcon.scss" />
