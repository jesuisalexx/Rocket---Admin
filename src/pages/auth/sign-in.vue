<template>
  <div>
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
          name="login"
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
          name="isChecked"
          :label="$t('auth-pages.remember-me')"
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
        >
          {{ $t('auth-pages.sign-up') }}
        </Button>
      </template>
    </SignInPageContainer>
  </div>
</template>

<route>
{
  name: "sign-in",
  meta: {
    layout: "auth"
  }
}
</route>

<script lang="ts" setup>
import SignInPageContainer from '@/containers/SignInPageContainer.vue';
import Button from '@/components/core/button/Button.vue';
import Field from '@/components/core/field/Field.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import { ref } from 'vue';
import { signIn } from '@/api/endpoints/auth';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

signIn();

const model = ref({
  login: '',
  password: '',
  isChecked: false,
});

</script>

<style lang="scss" module>

</style>
