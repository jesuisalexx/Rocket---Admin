<template>
  <div>
    <SettingsContainer>
      <template #menu>
        <SettingsMenu />
      </template>
    </SettingsContainer>
  </div>
</template>

<route>
{
meta: {
    authRequired: true,
  }
}
</route>

<script setup lang="ts">
import SettingsContainer from '@/containers/SettingsContainer.vue';
import SettingsMenu from '@/components/core/settingsMenu/SettingsMenu.vue';
</script>
