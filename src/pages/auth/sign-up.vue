<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <SignUpPageContainer
      v-model="model"
      :is-loading="isLoading"
      :is-disabled="isDisabled"
    >
      <template #heading>
        {{ t('auth.create-account') }}
      </template>
      <template #google-sign-up-button="{ buttonIcon }">
        <GoogleAuthIcon :class="buttonIcon" />
        <Button
          variant="secondary-google"
        >
          {{ t('auth.sign-up-with-google') }}
        </Button>
      </template>
      <template #sign-up-text>
        {{ t('auth.or-sign-up-with-email') }}
      </template>
      <template #first-name>
        <Field
          name="firstName"
          :label="t('auth.name')"
          :placeholder="t('profile.name-placeholder')"
        />
      </template>
      <template #last-name>
        <Field
          name="lastName"
          :label="t('auth.last-name')"
          :placeholder="t('profile.last-name-placeholder')"
        />
      </template>
      <template #username>
        <Field
          name="username"
          :label="t('auth.username')"
          :placeholder="t('profile.username-placeholder')"
        />
      </template>
      <template #email>
        <Field
          name="email"
          :label="t('auth.email')"
          :placeholder="t('profile.email-placeholder')"
        />
      </template>
      <template #password>
        <Field
          name="password"
          :label="t('auth.password')"
          type="password"
          icon-after="hide"
          :placeholder="t('profile.password-placeholder')"
        />
      </template>
      <template #password-confirm>
        <Field
          name="confirmPassword"
          type="password"
          :label="t('auth.confirm-password')"
          icon-after="hide"
          :placeholder="t('profile.confirm-password-placeholder')"
        />
      </template>
      <template #accept>
        <Checkbox
          v-model="isDisabled"
          name="accept"
          :detach-form="true"
          :label="t('auth.accept')"
        />
      </template>
      <template #terms-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ t('auth.terms-and-conditions') }}
        </Button>
      </template>
      <template #create-button>
        <Button
          variant="primary-extended"
          :is-loading="isLoading"
        >
          {{ t('auth.create-account') }}
        </Button>
      </template>
      <template #login-text>
        {{ t('auth.already-have-an-account') }}
      </template>
      <template #sign-in-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ t('auth.login') }}
        </Button>
      </template>
    </SignUpPageContainer>
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
import Form from '@/components/core/form/Form.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import GoogleAuthIcon from '@/components/core/icon/assets/google.svg';
import SignUpPageContainer from '@/containers/SignUpPageContainer.vue';
import { useI18n } from 'vue-i18n';
import { useSignUp } from '@/hooks/useSignUp';

const { t } = useI18n();
const {
  isLoading,
  model,
  validationSchema,
  submit,
  isDisabled,
} = useSignUp();
</script>

<style lang="scss" module>

</style>
