<template>
  <div :class="$style.root">
    <AppSidebar />
    <div :class="$style.headerWrap">
      <AppHeader />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/app/appSidebar/AppSidebar.vue';
import AppHeader from '@/components/app/appHeader/AppHeader.vue';
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
