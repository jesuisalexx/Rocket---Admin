import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';

export const useProductsStorage = defineStore('products', () => {
  const localSwitchValue = ref(useStorage('switchVal', 'list'));
  const changeSwitchValue = (value: any) => {
    localSwitchValue.value = value;
  };
  return {
    changeSwitchValue,
    localSwitchValue,
  };
});
