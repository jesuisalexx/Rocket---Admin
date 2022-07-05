<template>
  <div>
    <PasswordResetContainer
      v-model="model"
    >
      <template #icon>
        <BigLock />
      </template>
      <template #label>
        {{ $t('auth-pages.reset-your-password') }}
      </template>
      <template #login>
        <Field
          name="resetLogin"
          :label="$t('auth-pages.email')"
          placeholder="cooper@example.com"
        />
      </template>
      <template #password>
        <Field
          name="resetPassword"
          :label="$t('auth-pages.password')"
          type="password"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #password-confirm>
        <Field
          name="confirmPassword"
          :label="$t('auth-pages.confirm-password')"
          type="password"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #create-button>
        <Button
          variant="primary-extended"
        >
          {{ $t('auth-pages.reset-password') }}
        </Button>
      </template>
      <template #bottom-text>
        {{ $t('auth-pages.go-back-to') }}
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ $t('auth-pages.login') }}
        </Button>
      </template>
    </PasswordResetContainer>
  </div>
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
import Field from '@/components/core/field/Field.vue';
import { ref } from 'vue';
import PasswordResetContainer from '@/containers/PasswordResetContainer.vue';
import BigLock from '@/components/core/icon/assets/bigLock.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const model = ref({
  resetUsername: '',
  resetLogin: '',
  resetPassword: '',
  confirmPassword: '',
  isChecked: false,
});

</script>

<style lang="scss" module>

</style>
