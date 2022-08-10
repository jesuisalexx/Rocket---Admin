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
    console.log(type.value);
  };
  const isChecked = ref(false);

  return {
    type,
    listType,
  };
});
