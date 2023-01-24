<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <ChangePasswordContainer
      v-model="model"
      :is-loading="isLoading"
    >
      <template #img>
        <BigLockIcon />
      </template>
      <template #old-password>
        <FormInput
          name="oldPassword"
          :label="t('auth.old-password')"
          type="password"
          icon-after="hide"
          :placeholder="t('profile.old-password-placeholder')"
        />
      </template>
      <template #new-password>
        <FormInput
          name="newPassword"
          :label="t('auth.new-password')"
          type="password"
          icon-after="hide"
          :placeholder="t('profile.new-password-placeholder')"
        />
      </template>
      <template #new-password-confirm>
        <FormInput
          name="newPasswordConfirm"
          :label="t('auth.new-password-confirm')"
          type="password"
          icon-after="hide"
          :placeholder="t('profile.confirm-new-password-placeholder')"
        />
      </template>
      <template #button>
        <Button
          :is-loading="isLoading"
          variant="primary"
        >
          {{ t('profile.change-password') }}
        </Button>
      </template>
    </ChangePasswordContainer>
  </Form>
</template>

<script setup lang="ts">
import BigLockIcon from '@/assets/img/bigLock.svg';
import FormInput from '@/components/core/formInput/FormInput.vue';
import Button from '@/components/core/button/Button.vue';
import Form from '@/components/core/form/Form.vue';

import { useI18n } from 'vue-i18n';
import { useChangePassword } from '@/hooks/useChangePassword';
import ChangePasswordContainer from '@/containers/changePasswordContainer/ChangePasswordContainer.vue';

const { t } = useI18n();

const {
  isLoading,
  model,
  validationSchema,
  submit,
} = useChangePassword();
</script>
