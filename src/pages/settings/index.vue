<template>
  <div>
    <SettingsContainer>
      <template #menu>
        <SettingsMenu />
      </template>
      <template #page>
        <Profile />
      </template>
    </SettingsContainer>
  </div>
</template>

<script setup lang="ts">
import SettingsContainer from '@/containers/SettingsContainer.vue';
import SettingsMenu from '@/components/core/settingsMenu/SettingsMenu.vue';
import Profile from '@/pages/settings/profile.vue';

const props = defineProps({
});
</script>
