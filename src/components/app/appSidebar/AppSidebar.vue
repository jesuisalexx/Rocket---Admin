<template>
  <Sidebar
    :is-sidebar-wide="isSidebarWide"
    :buttons="buttons"
  />
</template>

<script setup lang="ts">
import Sidebar from '@/components/core/sidebar/Sidebar.vue';
import { SidebarButtonType } from '@/components/core/sidebarButton';
import { computed } from 'vue';

import { layout } from '@/stores/layout';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const layoutStore = layout();

const isSidebarWide = computed(() => layoutStore.isSidebarExpanded);

const buttons = computed(() => [
  {
    label: t('sidebar.dashboard'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'grid',
  },
  {
    label: t('sidebar.e-commerce'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'cart',
    iconAfter: 'arrowSmall',
  },
  {
    label: t('sidebar.calendar'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'calendar',
  },
  {
    label: t('sidebar.mail'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'mail',
    counter: 4,
  },
  {
    label: t('sidebar.chat'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'chat',
  },
  {
    label: t('sidebar.tasks'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'tasks',
  },
  {
    label: t('sidebar.projects'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'project',
  },
  {
    label: t('sidebar.file-manager'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'folder',
  },
  {
    label: t('sidebar.notes'),
    type: SidebarButtonType.LINK,
    to: {
      name: 'index',
    },
    iconBefore: 'text',
  },
  {
    label: t('sidebar.contacts'),
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
