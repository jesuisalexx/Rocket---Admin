<template>
  <div class="default-layout">
    <Header class="default-layout__header" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/app/header/Header.vue';
</script>

<style lang="scss" src="./default.scss" />
