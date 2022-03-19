<template>
  <Layout>
    <router-view />
  </Layout>
  <ToastLayer class="app__toast-layer" />
</template>

<script setup lang="ts">
import Layout from '@/components/core/layout/Layout.vue';
import ToastLayer from '@/components/app/toastLayer/ToastLayer.vue';
import { useApp } from '@/hooks/useApp';

useApp();
</script>

<style lang="scss" src="./app.scss" />
