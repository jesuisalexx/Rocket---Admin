// @ts-ignore

import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', () => {
  const state = ref();

  const isSidebarExpanded = ref(false);

  const switchSidebar = () => {
    isSidebarExpanded.value = !isSidebarExpanded.value;
    console.log(isSidebarExpanded.value);
  };

  return {
    switchSidebar,
    isSidebarExpanded,
  };
});
