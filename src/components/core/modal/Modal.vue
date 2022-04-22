<template>
  <Card
    v-click-outside="close"
    class="app-modal"
  >
    <div
      :class="{
        'app-modal__loader': true,
        'app-modal__loader--active': isLoading,
      }"
    >
      <Loader />
    </div>
    <template #head>
      <div class="app-modal__head">
        <slot name="head">
          {{ label }}
        </slot>
        <button
          class="app-modal__close-button"
          @click="close"
        >
          close
        </button>
      </div>
    </template>
    <div class="app-modal__content">
      <slot />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Card from '@/components/core/card/Card.vue';
import Loader from '@/components/core/loader/Loader.vue';

defineProps({
  label: {
    type: String as PropType<string>,
    default: '',
  },
  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
const emit = defineEmits(['close']);
const close = (e: Event) => {
  emit('close', e);
};
</script>

<style lang="scss" src="./modal.scss" />
