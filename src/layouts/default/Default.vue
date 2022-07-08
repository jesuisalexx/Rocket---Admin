<template>
  <div :class="$style.root">
    <AppSidebar />
    <div :class="$style.headerWrap">
      <AppHeader />
      <slot />
    </div>
    <div
      v-click-outside="onClickOutside"
      :class="[
        $style.chatBar,
        isChatBarOpened && $style.chatBarVisible
      ]"
    >
      <ChatSheet />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/app/appSidebar/AppSidebar.vue';
import AppHeader from '@/components/app/appHeader/AppHeader.vue';
import ChatSheet from '@/components/core/chatSheet/ChatSheet.vue';
import { layout } from '@/stores/layout';
import { computed } from 'vue';

const layoutStore = layout();
const isChatBarOpened = computed(() => layoutStore.isChatBarOpened);

const onClickOutside = (event: MouseEvent) => {
  // узнать как получить класс элемента в js
  // смотреть .includes("chatButton")
  if ((event.target as HTMLDivElement).classList.contains('chatButton')) {
    layoutStore.openChatBar();
  } else {
    layoutStore.closeChatBar();
  }
};
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.headerWrap {
  width: 100%;
  height: 100%;
}
.chatBar {
  width: rem(491px);
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  box-shadow: rem(-2px) 0 rem(15px) rgb(var(--color-light-black));
  border-left: rem(1px) solid rgb(var(--color-border));
  background: rgb(var(--color-surface));
  transform: translateX(100%);
}

.chatBarVisible {
  transform: translateX(0);
}
</style>
