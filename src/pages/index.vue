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
import { useSessionStore } from '@/stores/session';
import { computed } from 'vue';

const sessionStore = useSessionStore();

const logout = computed(() => sessionStore.logoutUser);
</script>
