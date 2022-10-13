<template>
  <!--  &lt;!&ndash;change div on form&ndash;&gt;-->
  <!--  <Form-->
  <!--    v-model="model"-->
  <!--    :validation-schema="validationSchema"-->
  <!--    @submit="submit"-->
  <!--  >-->
  <PasswordResetContainer
    v-model="model"
  >
    <template #icon>
      <BigLockIcon />
    </template>
    <template #heading>
      {{ t('auth.reset-your-password') }}
    </template>
    <template #email>
      <FormInput
        name="email"
        :label="t('auth.email')"
        placeholder="cooper@example.com"
      />
    </template>
    <template #old-password>
      <FormInput
        name="oldPassword"
        :label="t('auth.old-password')"
        type="password"
        icon-after="hide"
        placeholder="Type old password"
      />
    </template>
    <template #new-password>
      <FormInput
        name="newPassword"
        :label="t('auth.new-password')"
        type="password"
        icon-after="hide"
        placeholder="Type new password"
      />
    </template>
    <template #new-password-confirm>
      <FormInput
        name="newPasswordConfirm"
        :label="t('auth.new-password-confirm')"
        type="password"
        icon-after="hide"
        placeholder="Confirm new password"
      />
    </template>
    <template #create-button>
      <Button
        variant="primary-extended"
      >
        {{ t('auth.reset-password') }}
      </Button>
    </template>
    <template #login-text>
      {{ t('auth.go-back-to') }}
    </template>
    <template #sign-up-button>
      <Button
        variant="primary-minimalistic"
      >
        {{ t('auth.login') }}
      </Button>
    </template>
  </PasswordResetContainer>
<!--  </Form>-->
</template>

<route>
{
  name: "password-reset",
  meta: {
  layout: "auth"
  }
}
</route>

<script lang="ts" setup>
import Button from '@/components/core/button/Button.vue';
import FormInput from '@/components/core/formInput/FormInput.vue';
import { useI18n } from 'vue-i18n';
import BigLockIcon from '@/assets/img/bigLock.svg';
import PasswordResetContainer from '@/containers/passwordResetContainer/PasswordResetContainer.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
</style>
