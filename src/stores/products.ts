import { defineStore } from 'pinia';
import { ref } from 'vue';

export const products = defineStore('products', () => {
  const type = ref('list');

  const listType = (val: any) => {
    if (val === 'list') {
      type.value = 'list';
    } else {
      type.value = 'grid';
    }
  };
  return {
    type,
    listType,
  };
});
