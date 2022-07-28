import { defineStore } from 'pinia';
import { ref } from 'vue';

export const products = defineStore('products', () => {
  const type = ref('list');

  return {
    type,
  };
});
