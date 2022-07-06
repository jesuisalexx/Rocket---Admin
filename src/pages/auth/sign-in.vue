<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <SignInPageContainer
      v-model="model"
    >
      <template #label>
        {{ $t('auth-pages.login-to-your-account') }}
      </template>
      <template #top-button>
        <Button
          variant="secondary-google"
          icon-before-special="google"
        >
          {{ $t('auth-pages.login-with-google') }}
        </Button>
      </template>
      <template #top-text>
        {{ $t('auth-pages.or-login-with-email') }}
      </template>
      <template #login>
        <Field
          name="email"
          :label="$t('auth-pages.email')"
          placeholder="cooper@example.com"
        />
      </template>
      <template #password>
        <Field
          name="password"
          :label="$t('auth-pages.password')"
          icon-after="hide"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #checkbox>
        <Checkbox
          :label="$t('auth-pages.remember-me')"
          :detach-form="true"
        />
      </template>
      <template #password-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ $t('auth-pages.forgot-password') }}
        </Button>
      </template>
      <template #login-button>
        <Button
          variant="primary-extended"
        >
          {{ $t('auth-pages.log-in') }}
        </Button>
      </template>
      <template #bottom-text>
        {{ $t('auth-pages.dont-have-an-account') }}
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
          type="submit"
        >
          {{ $t('auth-pages.sign-up') }}
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
import { useI18n } from 'vue-i18n';
import { useSignIn } from '@/hooks/useSignIn';

const { t } = useI18n();

const {
  model,
  validationSchema,
  submit,
} = useSignIn();
submit();
</script>
