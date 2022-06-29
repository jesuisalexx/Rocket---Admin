<template>
  <div :class="$style.root">
    <AppSidebar />
    <div :class="$style.headerWrap">
      <Header />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/app/appSidebar/AppSidebar.vue';
import Header from '@/components/app/header/Header.vue';
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100%;
  display: flex;
}
.headerWrap {
  width: 100%;
  height: 100%;
}

</style>
