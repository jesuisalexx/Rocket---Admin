<template>
  <transition-group
    tag="div"
    class="toast-layer"
    name="toast"
    mode="out-in"
  >
    <Toast
      v-for="(toast, toastIndex) in toasts"
      :key="toast.id"
      class="toast-layer__toast"
      :style="{
        top: `${(TOAST_HEIGHT * toastIndex) + (TOAST_GAP * (toastIndex + 1))}px`,
        right: `${TOAST_GAP}px`,
        height: `${TOAST_HEIGHT}px`,
      }"
      :toast="toast"
      @close="hideToast(toast.id)"
    />
  </transition-group>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useToastStore } from '@/stores/toasts';
import { Toast as ToastType } from '@/types/toast';
import Toast from '@/components/core/toast/Toast.vue';

const toastStore = useToastStore();

const TOAST_HEIGHT = 86;
const TOAST_GAP = 20;

const toasts = computed(() => toastStore.list);
const hideToast = (toastId: ToastType['id']) => {
  toastStore.removeToast(toastId);
};
</script>

<style lang="scss" src="./toastLayer.scss" />
