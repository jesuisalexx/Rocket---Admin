import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  const isSelectOpen = ref(false);
  const switchSelect = () => {
    isSelectOpen.value = !isSelectOpen.value;
  };

  const currentValue = ref('cat');

  const setSelectValue = (val: string) => {
    currentValue.value = val;
    isSelectOpen.value = false;
    console.log(currentValue);
  };
  const closeSelect = () => {
    isSelectOpen.value = false;
  };

  return {
    switchSelect,
    isSelectOpen,
    setSelectValue,
    currentValue,
    closeSelect,
  };
});
