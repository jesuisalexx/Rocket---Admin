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
      <template #heading>
        {{ t('auth.login-to-your-account') }}
      </template>
      <template #google-login-button="{ buttonIcon }">
        <GoogleAuthIcon :class="buttonIcon" />
        <Button
          variant="secondary-google"
        >
          {{ t('auth.login-with-google') }}
        </Button>
      </template>
      <template #login-text>
        {{ t('auth.or-login-with-email') }}
      </template>
      <template #email>
        <Field
          name="email"
          :label="t('auth.email')"
          :placeholder="t('profile.email-placeholder')"
          :is-loading="isLoading"
        />
      </template>
      <template #password>
        <Field
          name="password"
          :label="t('auth.password')"
          icon-after="hide"
          type="password"
          :placeholder="t('profile.password-placeholder')"
          :is-loading="isLoading"
        />
      </template>
      <template #checkbox>
        <Checkbox
          v-model="remember"
          :label="t('auth.remember-me')"
          :detach-form="true"
        />
      </template>
      <template #password-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ t('auth.forgot-password') }}
        </Button>
      </template>
      <template #login-button>
        <Button
          variant="primary-extended"
          :is-loading="isLoading"
        >
          {{ t('auth.log-in') }}
        </Button>
      </template>
      <template #sign-up-text>
        {{ t('auth.dont-have-an-account') }}
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
          type="submit"
        >
          {{ t('auth.sign-up') }}
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
import Button from '@/components/core/button/Button.vue';
import Field from '@/components/core/field/Field.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import Form from '@/components/core/form/Form.vue';
import GoogleAuthIcon from '@/components/core/icon/assets/google.svg';
import { useI18n } from 'vue-i18n';
import { useSignIn } from '@/hooks/useSignIn';
import SignInPageContainer from '@/containers/signInPageContainer/SignInPageContainer.vue';

const { t } = useI18n();

const {
  isLoading,
  model,
  validationSchema,
  submit,
  remember,
} = useSignIn();
</script>
