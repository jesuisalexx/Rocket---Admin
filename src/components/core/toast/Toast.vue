<template>
  <div :class="['toast', `toast--${toast.type}`]">
    <div class="toast__content">
      <div class="ml-4 mr-4">
        <div class="font-medium">
          {{ toast.label }}
        </div>
        <div class="text-gray-600 mt-1">
          {{ toast.text }}
        </div>
      </div>
    </div>
    <button
      class="toast__close"
      @click="closeModal"
    >
      close
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { Toast } from '@/types/toast';

const props = defineProps({
  toast: {
    type: Object as PropType<Toast>,
    required: true,
  },
});
const emit = defineEmits(['close']);

const { toast } = toRefs(props);
const duration = toast?.value.duration;

const closeModal = () => {
  emit('close');
};

if (duration) {
  setTimeout(() => {
    closeModal();
  }, duration);
}
</script>

<style lang="scss" src="./toast.scss" />
