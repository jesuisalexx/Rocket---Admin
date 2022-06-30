<template>
  <div>
    <Sidebar
      :is-sidebar-wide="isSidebarWide"
      :buttons="buttons"
    />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/core/sidebar/Sidebar.vue';
import { SidebarButtonType } from '@/components/core/sidebarButton';
import { ref } from 'vue';

import { useLayoutStore } from '@/stores/useLayoutStore';

const layoutStore = useLayoutStore();

const isSidebarWide = layoutStore.isSidebarExpanded;

const buttons = ref([
  {
    label: 'Dashboard',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'grid',
  },
  {
    label: 'E-Commerce',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'cart',
    iconAfter: 'arrowSmall',
  },
  {
    label: 'Calendar',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'calendar',
  },
  {
    label: 'Mail',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'mail',
    counter: 4,
  },
  {
    label: 'Chat',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'chat',
  },
  {
    label: 'Tasks',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'tasks',
  },
  {
    label: 'Projects',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'project',
  },
  {
    label: 'File Manager',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'folder',
  },
  {
    label: 'Notes',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'text',
  },
  {
    label: 'Contacts',
    type: SidebarButtonType.BUTTON,
    iconBefore: 'contacts',
  },
]);

</script>

<style lang="scss" module>

</style>
