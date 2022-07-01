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
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'grid',
  },
  {
    label: 'E-Commerce',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'cart',
    iconAfter: 'arrowSmall',
  },
  {
    label: 'Calendar',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'calendar',
  },
  {
    label: 'Mail',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'mail',
    counter: 4,
  },
  {
    label: 'Chat',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'chat',
  },
  {
    label: 'Tasks',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'tasks',
  },
  {
    label: 'Projects',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'project',
  },
  {
    label: 'File Manager',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'folder',
  },
  {
    label: 'Notes',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'text',
  },
  {
    label: 'Contacts',
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'contacts',
  },
]);

</script>

<style lang="scss" module>

</style>
