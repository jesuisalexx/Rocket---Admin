import { defineStore } from 'pinia';
import { ref } from 'vue';

export const products = defineStore('products', () => {
  const type = ref('');

  const listType = (val: any) => {
    type.value = val;
    console.log(type.value);
  };
  const gridType = (val: any) => {
    type.value = val;
    console.log(type.value);
  };

  return {
    listType,
    gridType,
  };
});
