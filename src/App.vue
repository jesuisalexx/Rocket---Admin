<template>
  <Layout>
    <router-view />
  </Layout>
  <ToastLayer class="app__toast-layer" />
</template>

<script setup lang="ts">
import Layout from '@/components/app/layout/Layout.vue';
import ToastLayer from '@/components/app/toastLayer/ToastLayer.vue';
import { useApp } from '@/hooks/useApp';

useApp();
</script>

<style lang="scss" src="./app.scss" />
