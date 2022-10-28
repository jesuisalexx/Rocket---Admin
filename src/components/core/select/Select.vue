<template>
  <div :class="$style.root">
    <div
      v-if="('label' in $slots) || label"
      :class="$style.label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <div
      :class="$style.select"
      @click="isOpen = !isOpen"
    >
      <div :class="$style.value">
        {{ currentVal }}
      </div>
      <div :class="$style.arrow">
        <Icon icon="arrowDown2" />
      </div>
    </div>
    <div
      v-if="isOpen"
      :class="$style.dropdown"
    >
      <div
        v-for="option in options"
        :key="option"
        :class="$style.option"
        @click="setVal(option.val)"
      >
        <slot name="option">
          {{ option.val }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import { ref } from 'vue';

const props = defineProps<{
  label: '',
  options: [],
}>();

const isOpen = ref(false);

const currentVal = ref(10);

const emit = defineEmits([
  'itemsAmount',
  'itemsPerPage',
]);

const setVal = (val: any) => {
  currentVal.value = val;
  isOpen.value = false;
  emit('itemsPerPage', currentVal.value);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  position: relative;
  z-index: 3;
}
.select {
  border: rem(1px) solid rgb(var(--color-border));
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: rem(40px);
  border-radius: rem(14px);
  padding: rem(10px) rem(15px);
  color: rgb(var(--color-body-light));
  font-size: rem(14px);
  font-weight: 400;
  cursor: pointer;
}
.arrow {
  width: rem(14px);
  height: rem(14px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: rem(10px);
}
.dropdown {
  @include useCustomScrollbar;
  position: absolute;
  width: 100%;
  height: rem(100px);
  overflow-y: scroll;
  background-color: rgb(var(--color-border));
  border-bottom-right-radius: rem(10px);
  border-bottom-left-radius: rem(10px);
  margin-top: rem(1px);
}
.option {
  color: rgb(var(--color-body-light));
  width: 100%;
  height: rem(35px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
}
.label {
  color: rgb(var(--color-body-dark));
  margin-bottom: rem(10px);
}
</style>
