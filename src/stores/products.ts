import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useStorage } from '@vueuse/core';

export const useProductsStorage = defineStore('products', () => {
  const switchValue = ref('list');
  const localSwitchValue = ref(useStorage('switchVal', switchValue.value));
  const changeSwitchValue = (value: any) => {
    switchValue.value = value;
    console.log(switchValue.value);
  };
  watch(switchValue, () => {
    localSwitchValue.value = switchValue.value;
  });
  return {
    switchValue,
    changeSwitchValue,
  };
});
