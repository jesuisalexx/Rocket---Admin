<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <SignInPageContainer
      v-model="model"
      :is-loading="isLoading"
    >
      <template #label>
        {{ t('auth-pages.login-to-your-account') }}
      </template>
      <template #top-button-icon>
        <Google />
      </template>
      <template #top-button>
        <Button
          variant="secondary-google"
        >
          {{ t('auth-pages.login-with-google') }}
        </Button>
      </template>
      <template #top-text>
        {{ t('auth-pages.or-login-with-email') }}
      </template>
      <template #login>
        <Field
          name="email"
          :label="t('auth-pages.email')"
          placeholder="cooper@example.com"
          :is-loading="isLoading"
        />
      </template>
      <template #password>
        <Field
          name="password"
          :label="t('auth-pages.password')"
          icon-after="hide"
          type="password"
          placeholder="Type password"
          :is-loading="isLoading"
        />
      </template>
      <template #checkbox>
        <Checkbox
          v-model="remember"
          :label="t('auth-pages.remember-me')"
          :detach-form="true"
          :is-loading="isLoading"
        />
      </template>
      <template #password-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ t('auth-pages.forgot-password') }}
        </Button>
      </template>
      <template #login-button>
        <Button
          variant="primary-extended"
          :is-loading="isLoading"
        >
          {{ t('auth-pages.log-in') }}
        </Button>
      </template>
      <template #bottom-text>
        {{ t('auth-pages.dont-have-an-account') }}
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
          type="submit"
        >
          {{ t('auth-pages.sign-up') }}
        </Button>
      </template>
    </SignInPageContainer>
  </Form>
</template>

<route>
{
  meta: {
    layout: "auth",
    guestRequired: true,
  }
}
</route>

<script lang="ts" setup>
import SignInPageContainer from '@/containers/SignInPageContainer.vue';
import Button from '@/components/core/button/Button.vue';
import Field from '@/components/core/field/Field.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import Form from '@/components/core/form/Form.vue';
import Google from '@/components/core/icon/assets/google.svg';
import { useI18n } from 'vue-i18n';
import { useSignIn } from '@/hooks/useSignIn';

import { toastType } from '@/types/toast';
import { useSessionStore } from '@/stores/session';

const { t } = useI18n();
const {
  signIn,
} = useSessionStore();

const error = {
  label: 'Error',
  text: '',
  type: toastType.DANGER,
};

const {
  isLoading,
  model,
  validationSchema,
  submit,
  remember,
} = useSignIn();
</script>
