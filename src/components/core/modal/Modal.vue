<template>
  <Card
    v-click-outside="close"
    :class="$style.root"
  >
    <div
      :class="{
        [$style.loader]: true,
        [$style.active]: isLoading,
      }"
    >
      <Loader />
    </div>
    <template #head>
      <div :class="$style.head">
        <slot name="head">
          {{ label }}
        </slot>
        <button
          :class="$style.closeButton"
          @click="close"
        >
          close
        </button>
      </div>
    </template>
    <div :class="$style.content">
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

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  position: relative;
  max-width: 600px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.content {
  margin-top: 20px;
}

.closeButton {
  margin-left: auto;
}

.loader {
  position: absolute;
  z-index: 300;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: .2s opacity;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
