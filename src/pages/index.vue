<template>
  <div
    class="index"
  >
    <Button
      variant="primary"
      @click="logout"
    >
      Logout
    </Button>
    <div style="position: absolute; right: 0; top: 0;">
      <AddProductSidebar />
    </div>
  </div>
</template>

<route>
{
  meta: {
    authRequired: true,
  }
}
</route>

<script setup lang="ts">
import Button from '@/components/core/button/Button.vue';
import DragNDrop from '@/components/core/dragNdrop/DragNDrop.vue';
import AddProductSidebar from '@/components/core/addProductSidebar/AddProductSidebar.vue';
import { useSessionStore } from '@/stores/session';
import { computed } from 'vue';

const sessionStore = useSessionStore();

const logout = computed(() => sessionStore.logoutUser);
</script>
