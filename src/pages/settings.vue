<template>
  <SettingsContainer>
    <template #menu>
      <SettingsMenu :buttons="buttons" />
    </template>
    <template #view>
      <router-view />
    </template>
  </SettingsContainer>
</template>

<route>
{
  "meta": {
    "authRequired": true,
  },
}
</route>

<script setup lang="ts">
import SettingsMenu from '@/components/app/settingsMenu/SettingsMenu.vue';
import SettingsContainer from '@/containers/settingsContainer/SettingsContainer.vue';

const buttons = [
  {
    path: '/settings/profile',
    text: 'profile.profile',
  },
  {
    path: '/settings/change-password',
    text: 'profile.change-password',
  },
  {
    path: '/settings',
    text: 'profile.settings',
  },
];
</script>
