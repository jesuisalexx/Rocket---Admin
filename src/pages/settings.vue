<template>
  <div>
    <SettingsContainer>
      <template #menu>
        <SettingsMenu />
      </template>
      <template #view>
        <router-view />
      </template>
    </SettingsContainer>
  </div>
</template>

<route>
{
  "meta": {
    "authRequired": true,
  },
}
</route>

<script setup lang="ts">
import SettingsMenu from '@/components/core/settingsMenu/SettingsMenu.vue';
import SettingsContainer from '@/containers/settingsContainer/SettingsContainer.vue';
</script>
