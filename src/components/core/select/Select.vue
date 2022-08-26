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
        <ArrowDown />
      </div>
    </div>
    <div
      v-if="isOpen === true"
      :class="$style.dropdown"
    >
      <div
        v-for="option in options"
        :key="option"
        :class="$style.option"
        @click="passVal(option.val)"
      >
        {{ option.val }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowDown from '@/components/core/icon/assets/arrowDown2.svg';
import { ref } from 'vue';

const isOpen = ref(false);

const currentVal = ref(1);

const passVal = (val: number) => {
  currentVal.value = val;
  console.log(currentVal.value);
  isOpen.value = false;
};

const props = defineProps<{
  label: string
}>();

const options = [
  {
    val: 1,
  },
  {
    val: 2,
  },
  {
    val: 3,
  },
  {
    val: 4,
  },
  {
    val: 5,
  },
  {
    val: 6,
  },
  {
    val: 7,
  },
  {
    val: 8,
  },
  {
    val: 9,
  },
  {
    val: 10,
  },
];
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
  padding: rem(10px) rem(16px);
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
  position: absolute;
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  background: rgb(var(--color-border));
  border-bottom-right-radius: rem(10px);
  border-bottom-left-radius: rem(10px);
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
    background: black;
  }
}
.label {
  color: rgb(var(--color-body-dark));
  margin-bottom: 10px;
}
</style>
