// @ts-ignore

import { ref } from 'vue';
import { defineStore } from 'pinia';

export const layoutStore = defineStore('layout', () => {
  const isSidebarExpanded = ref(true);
  const isChatBarOpened = ref(false);

  const switchSidebar = () => {
    isSidebarExpanded.value = !isSidebarExpanded.value;
  };
  const openChatBar = () => {
    isChatBarOpened.value = true;
  };
  const closeChatBar = () => {
    isChatBarOpened.value = false;
  };

  return {
    switchSidebar,
    closeChatBar,
    openChatBar,
    isSidebarExpanded,
    isChatBarOpened,
  };
});
