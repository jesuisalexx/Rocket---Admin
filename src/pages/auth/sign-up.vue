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
      <template #label>
        {{ t('auth-pages.create-account') }}
      </template>
      <template #top-button-icon>
        <Google />
      </template>
      <template #top-button>
        <Button
          variant="secondary-google"
        >
          {{ $t('auth-pages.sign-up-with-google') }}
        </Button>
      </template>
      <template #top-text>
        {{ t('auth-pages.or-sign-up-with-email') }}
      </template>
      <template #first-name>
        <Field
          name="firstName"
          :label="t('auth-pages.name')"
          placeholder="Regina"
        />
      </template>
      <template #last-name>
        <Field
          name="lastName"
          :label="t('auth-pages.last-name')"
          placeholder="Cooper"
        />
      </template>
      <template #username>
        <Field
          name="username"
          :label="t('auth-pages.username')"
          placeholder="Username"
        />
      </template>
      <template #login>
        <Field
          name="email"
          :label="t('auth-pages.email')"
          placeholder="cooper@example.com"
        />
      </template>
      <template #password>
        <Field
          name="password"
          :label="t('auth-pages.password')"
          type="password"
          icon-after="hide"
          placeholder="Type password"
        />
      </template>
      <template #password-confirm>
        <Field
          name="confirmPassword"
          type="password"
          :label="t('auth-pages.confirm-password')"
          icon-after="hide"
          placeholder="Confirm password"
        />
      </template>
      <template #accept>
        <Checkbox
          v-model="isDisabled"
          name="accept"
          :detach-form="true"
          :label="t('auth-pages.i-accept')"
        />
      </template>
      <template #terms-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ t('auth-pages.terms-and-conditions') }}
        </Button>
      </template>
      <template #create-button>
        <Button
          variant="primary-extended"
          :is-loading="isLoading"
        >
          {{ t('auth-pages.create-account') }}
        </Button>
      </template>
      <template #bottom-text>
        {{ t('auth-pages.already-have-an-account') }}
      </template>
      <template #sign-in-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ t('auth-pages.login') }}
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
import Google from '@/components/core/icon/assets/google.svg';
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
