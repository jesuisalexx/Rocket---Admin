<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <ProfileContainer v-model="model">
      <template #heading>
        {{ $t('profile.profile') }}
      </template>
      <template #firstName>
        <Field
          name="firstName"
          :label="$t('profile.name')"
          placeholder="Regina"
        />
      </template>
      <template #lastName>
        <Field
          name="lastName"
          :label="$t('profile.last-name')"
          placeholder="Cooper"
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
        />
      </template>
      <template #phone>
        <TelInput />
      </template>
      <template #job>
        <Field
          name="job"
          :label="$t('profile.job')"
          placeholder="unemployed"
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
import InputSelect from '@/components/core/inputSelect/InputSelect.vue';
import TelInput from '@/components/core/telInput/TelInput.vue';
import Button from '@/components/core/button/Button.vue';
import Form from '@/components/core/form/Form.vue';

import { useI18n } from 'vue-i18n';
import { useProfileUpdate } from '@/hooks/useProfileUpdate';

const { t } = useI18n();

const {
  isLoading,
  model,
  validationSchema,
  submit,
} = useProfileUpdate();

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
