<template>
  <ProfileContainer>
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
  </ProfileContainer>
</template>

<script lang="ts" setup>
import ProfileContainer from '@/containers/ProfileContainer.vue';
import Field from '@/components/core/field/Field.vue';
import SettingsProfileAvatar from '@/components/core/settingsProfileAvatar/SettingsProfileAvatar.vue';
import InputSelect from '@/components/core/inputSelect/InputSelect.vue';
import TelInput from '@/components/core/telInput/TelInput.vue';
import Button from '@/components/core/button/Button.vue';

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

<style lang="scss" module>
</style>
