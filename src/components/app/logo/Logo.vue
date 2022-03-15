<template>
  <div class="logo">
    {{ commonStore.logoText }}
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common';

const commonStore = useCommonStore();
</script>

<style lang="scss" src="./logo.scss" />
