<template>
  <Modal
    :class="$style.root"
    @close="handleClose"
  >
    <div :class="$style.content">
      <div :class="$style.label">
        {{ label || 'Are you sure?' }}
      </div>
      <div :class="$style.text">
        {{ text || 'Confirm' }}
      </div>
      <div :class="$style.controls">
        <Button
          state="outline-secondary"
          @click="handleClose"
        >
          {{ cancelText || 'cancel' }}
        </Button>
        <Button
          :class="$style.submit"
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

const handleClose = () => {
  props.onCancel();
  emit('close');
};

const handleSubmit = () => {
  props.onSubmit();
  emit('close');
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  max-width: 400px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label, .text {
  text-align: center;
}

.controls {}

.submit {}
</style>
