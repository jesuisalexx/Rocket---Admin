<template>
  <div :class="$style.root">
    <div
      :class="$style.button"
      @click="decreaseVal"
    >
      <Minus />
    </div>
    <div :class="$style.val">
      {{ val }}
    </div>
    <div
      :class="$style.button"
      @click="increaseVal"
    >
      <Plus />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Minus from '@/components/core/icon/assets/minus.svg';
import Plus from '@/components/core/icon/assets/plus.svg';
import { ref } from 'vue';

const val = ref(1);
const increaseVal = () => {
  val.value += 1;
};
const decreaseVal = () => {
  if (val.value !== 1) {
    val.value -= 1;
  }
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(112px);
  height: rem(40px);
  border: 1px solid rgb(var(--color-border));
  border-radius: rem(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 rem(17px);
}
.button {
  cursor: pointer;
}
.val {
  width: rem(30px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
