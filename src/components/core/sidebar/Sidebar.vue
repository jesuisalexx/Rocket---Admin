<template>
  <div :class="$style.root">
    <div :class="$style.logoWrap">
      <div :class="$style.logo">
        <Logo :state="logoFull" />
      </div>
    </div>
    <SidebarButton
      :button="dashboardButton"
    />
    <SidebarButton
      :button="commerceButton"
    />
    <SidebarButton
      :button="calendarButton"
    />
    <SidebarButton
      :button="mailButton"
    />
    <SidebarButton
      :button="chatButton"
    />
    <SidebarButton
      :button="tasksButton"
    />
    <SidebarButton
      :button="projectsButton"
    />
    <SidebarButton
      :button="managerButton"
    />
    <SidebarButton
      :button="notesButton"
    />
    <SidebarButton
      :button="contactsButton"
    />
  </div>
</template>

<script setup lang="ts">
import SidebarButton from '@/components/core/sidebarButton/SidebarButton.vue';
import { SidebarButton as TSidebarButton, SidebarButtonType } from '@/components/core/sidebarButton';
import { ref } from 'vue';
import { logoState } from '@/components/app/logo';
import Logo from '@/components/app/logo/Logo.vue';

const logoFull = ref<logoState>(logoState.FULL);
const logoCompact = ref<logoState>(logoState.COMPACT);

const dashboardButton = ref<TSidebarButton>({
  label: 'Dashboard',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'grid',
});
const commerceButton = ref<TSidebarButton>({
  label: 'E-Commerce',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'cart',
  iconAfter: 'arrowSmall',
});
const calendarButton = ref<TSidebarButton>({
  label: 'Calendar',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'calendar',
});
const mailButton = ref<TSidebarButton>({
  label: 'Mail',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'mail',
  counter: 4,
});
const chatButton = ref<TSidebarButton>({
  label: 'Chat',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'chat',
});
const tasksButton = ref<TSidebarButton>({
  label: 'Tasks',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'tasks',
});
const projectsButton = ref<TSidebarButton>({
  label: 'Projects',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'project',
});
const managerButton = ref<TSidebarButton>({
  label: 'File Manager',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'folder',
});
const notesButton = ref<TSidebarButton>({
  label: 'Notes',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'text',
});
const contactsButton = ref<TSidebarButton>({
  label: 'Contacts',
  type: SidebarButtonType.BUTTON,
  iconBefore: 'contacts',
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 270px;
  height: 100vh;
}
.logoWrap {
  width: 100%;
  height: rem(65px);
  display: flex;
  align-items: center;
}
.logo {
  font-family: 'Poppins', sans-serif;
  font-size: rem(18px);
  color: rgb(var(--color-heading));
  display: flex;
  align-items: center;
  margin-left: rem(28px);
  cursor: pointer;
}
.logoText {
  margin-left: rem(6px);
}
</style>
