<template>
  <div>salam aleykum</div>
</template>

<script lang="ts" setup>
import { router } from '@/router';
import { useProfileStore } from '@/stores/profile';
import { computed, watch, onMounted } from 'vue';

const profileStore = useProfileStore();
const isAdmin = computed(() => profileStore.isAdmin);
onMounted(() => isAdmin.value ? '' : router.push('/products/all'));
</script>

<style lang="scss" module>
</style>
