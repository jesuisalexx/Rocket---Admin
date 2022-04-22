<template>
  <Layout class="app__layout" />
  <ToastLayer class="app__toast-layer" />
  <ModalLayer class="app__modal-layer" />
</template>

<script setup lang="ts">
import Layout from '@/components/app/layout/Layout.vue';
import ToastLayer from '@/components/app/toastLayer/ToastLayer.vue';
import ModalLayer from '@/components/app/modalLayer/ModalLayer.vue';
import { useApp } from '@/hooks/useApp';

useApp();
</script>

<style lang="scss" src="./app.scss" />
