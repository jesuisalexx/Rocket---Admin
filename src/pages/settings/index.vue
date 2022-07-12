<template>
  <div>
    <SettingsContainer>
      <template #heading>
        {{ $t('profile.profile') }}
      </template>
      <template #name>
        <Field
          name="name"
          :label="$t('profile.name')"
        />
      </template>
      <template #last-name>
        <Field
          name="last-name"
          :label="$t('profile.last-name')"
        />
      </template>
      <template #avatar>
        <SettingsProfileAvatar />
      </template>
      <template #email>
        <Field
          name="last-name"
          :label="$t('profile.email')"
        />
      </template>
      <template #phone>
        <Field
          name="last-name"
          :label="$t('profile.phone')"
        />
      </template>
      <template #status>
        <InputSelect
          name="last-name"
          :options="options"
          :label="$t('profile.status')"
        />
      </template>
      <template #button>
        <Button variant="primary">
          {{ $t('profile.next-step') }}
        </Button>
      </template>
    </SettingsContainer>
  </div>
</template>

<script setup lang="ts">
import SettingsContainer from '@/containers/SettingsContainer.vue';
import Field from '@/components/core/field/Field.vue';
import SettingsProfileAvatar from '@/components/core/settingsProfileAvatar/SettingsProfileAvatar.vue';

import Button from '@/components/core/button/Button.vue';
import InputSelect from '@/components/core/inputSelect/InputSelect.vue';

const props = defineProps({
});
const options = [
  {
    value: 'car',
  },
  {
    value: 'dog',
  },
  {
    value: 'cat',
  },
  {
    value: 'duck',
  },
  {
    value: 'pigeon',
  },
  {
    value: 'squirrel',
  },
];
</script>
