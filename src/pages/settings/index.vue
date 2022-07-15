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
      <template #heading>
        {{ $t('profile.profile') }}
      </template>
      <template #name>
        <Field
          name="name"
          :label="$t('profile.name')"
          placeholder="Regina"
        />
      </template>
      <template #last-name>
        <Field
          name="last-name"
          :label="$t('profile.last-name')"
          placeholder="Cooper"
        />
      </template>
      <template #avatar>
        <SettingsProfileAvatar />
      </template>
      <template #email>
        <Field
          name="last-name"
          :label="$t('profile.email')"
          placeholder="cooper@example.com"
        />
      </template>
      <template #phone>
        <TelInput />
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
import TelInput from '@/components/core/telInput/TelInput.vue';

const props = defineProps({
});
const options = [
  {
    value: 'bear',
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
