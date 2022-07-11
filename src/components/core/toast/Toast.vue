<template>
  <div
    :class="[
      $style.root,
      $style[toast.type],
    ]"
  >
    <div :class="$style.content">
      <div :class="$style.label">
        {{ toast.label }}
      </div>
      <div :class="$style.text">
        {{ toast.text }}
      </div>
    </div>
    <button
      :class="$style.close"
      @click="closeModal"
    >
      <Cross />
    </button>
  </div>
</template>

<script setup lang="ts">

import { PropType, toRefs } from 'vue';
import { Toast } from '@/types/toast';
import Cross from '@/components/core/icon/assets/cross.svg';

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

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  height: 76px;
  border-radius: 12px;
  background: rgb(var(--color-overlay-light));
  display: flex;
  align-items: center;
  position: relative;
  color: white;
  padding-left: 20px;
  padding-right: 100px;

  &.success {
    background: rgb(var(--color-overlay-light));

    .label {
      color: rgb(var(--color-green));
    }

    .text {
      color: rgb(var(--color-green));
    }
  }
  &.danger {
    background: rgb(var(--color-overlay-light));

    .label {
      color: rgb(var(--color-red));
    }

    .text {
      color: rgb(var(--color-red));
    }
  }
}

.content {}

.label {
  font-size: rem(18px);
  font-weight: 600;
}

.text {
  margin-top: rem(10px);
}

.close {
  width: rem(20px);
  height: rem(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: rem(7px);
  background: rgb(var(--color-surface));
  position: absolute;
  top: rem(32px);
  right: rem(15px);
  cursor: pointer;
}
</style>
