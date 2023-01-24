<template>
<<<<<<< HEAD
  <div>Nothing here yet</div>
=======
  <div>salam aleykum</div>
>>>>>>> d16a9bf58825136f5c26c8b878b116d80ced4fa1
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
