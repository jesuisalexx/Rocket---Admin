<template>
  <Modal
    class="confirm-modal"
    @close="close"
  >
    <div class="confirm-modal__content">
      <div class="confirm-modal__icon">
        close
      </div>
      <div class="confirm-modal__label">
        {{ label || 'Are you sure?' }}
      </div>
      <div class="confirm-modal__text">
        {{ text || 'Confirm' }}
      </div>
      <div class="confirm-modal__controls">
        <Button
          state="outline-secondary"
          @click="handleCancel"
        >
          {{ cancelText || 'cancel' }}
        </Button>
        <Button
          class="confirm-modal__submit"
          state="danger"
          @click="handleSubmit"
        >
          {{ confirmText || 'submit' }}
        </Button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Button from '@/components/core/button/Button.vue';
import Modal from '@/components/core/modal/Modal.vue';

const props = defineProps({
  label: {
    type: String as PropType<string>,
    required: true,
  },
  text: {
    type: String as PropType<string>,
    required: true,
  },
  confirmText: {
    type: String as PropType<string>,
    required: true,
  },
  cancelText: {
    type: String as PropType<string>,
    required: true,
  },
  onSubmit: {
    type: Function as PropType<Function>,
    default: () => () => {},
  },
  onCancel: {
    type: Function as PropType<Function>,
    default: () => () => {},
  },
});
const emit = defineEmits(['close']);

const close = () => {
  props.onCancel();
  emit('close');
};

const handleCancel = () => {
  props.onCancel();
  close();
};

const handleSubmit = () => {
  props.onSubmit();
  emit('close');
};
</script>

<style lang="scss" src="./confirmModal.scss" />
