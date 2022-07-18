<template>
  <div>
    <SettingsContainer>
      <template #profile>
        <Button variant="secondary-extended">
          {{ $t('profile.profile') }}
        </Button>
      </template>
      <template #settings>
        <Button variant="secondary-extended">
          {{ $t('profile.settings') }}
        </Button>
      </template>
      <template #other>
        <Button variant="secondary-extended">
          {{ $t('profile.other') }}
        </Button>
      </template>
      <template #page>
        <change-password />
      </template>
    </SettingsContainer>
  </div>
</template>

<script setup lang="ts">
import SettingsContainer from '@/containers/SettingsContainer.vue';
import Button from '@/components/core/button/Button.vue';
import Profile from '@/pages/settings/profile.vue';
import ChangePassword from '@/pages/settings/change-password.vue';

const props = defineProps({
});
</script>
