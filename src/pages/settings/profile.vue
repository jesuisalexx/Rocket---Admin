<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <ProfileContainer v-model="model">
      <template #menu>
        <SettingsMenu />
      </template>
      <template #heading>
        {{ $t('profile.profile') }}
      </template>
      <template #firstName>
        <Field
          name="firstName"
          :label="$t('profile.name')"
          placeholder="Regina"
          :model-value="model.firstName"
        />
      </template>
      <template #lastName>
        <Field
          name="lastName"
          :label="$t('profile.last-name')"
          placeholder="Cooper"
          :model-value="model.lastName"
        />
      </template>
      <template #avatar>
        <SettingsProfileAvatar />
      </template>
      <template #username>
        <Field
          name="username"
          :label="$t('profile.username')"
          placeholder="autist228"
          :model-value="model.username"
        />
      </template>
      <template #phone>
        <TelInput
          :model-value="model.phone"
        />
      </template>
      <template #job>
        <Field
          name="job"
          :label="$t('profile.job')"
          placeholder="unemployed"
          :model-value="model.job"
        />
      </template>
      <template #button>
        <Button variant="primary">
          {{ $t('profile.next-step') }}
        </Button>
      </template>
    </ProfileContainer>
  </Form>
</template>

<script lang="ts" setup>
import ProfileContainer from '@/containers/ProfileContainer.vue';
import Field from '@/components/core/field/Field.vue';
import SettingsProfileAvatar from '@/components/core/settingsProfileAvatar/SettingsProfileAvatar.vue';
import TelInput from '@/components/core/telInput/TelInput.vue';
import Button from '@/components/core/button/Button.vue';
import Form from '@/components/core/form/Form.vue';
import SettingsMenu from '@/components/core/settingsMenu/SettingsMenu.vue';

import { useI18n } from 'vue-i18n';
import { useProfile } from '@/hooks/useProfile';

const { t } = useI18n();

const {
  isLoading,
  model,
  validationSchema,
  submit,
  fetchProfile,
} = useProfile();

fetchProfile();

const options = [
  {
    value: 'unemployed',
  },
  {
    value: 'freelancer',
  },
  {
    value: 'teacher',
  },
  {
    value: 'driver',
  },
  {
    value: 'janitor',
  },
  {
    value: 'cashier',
  },
];
</script>

<style lang="scss" module>
</style>
