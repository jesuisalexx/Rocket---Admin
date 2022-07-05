<template>
  <div>
    <PasswordRecoveryContainer
      v-model="model"
    >
      <template #icon>
        <BigLock />
      </template>
      <template #label>
        {{ $t('auth-pages.recover-your-password') }}
      </template>
      <template #email>
        <Field
          name="login"
          :label="$t('auth-pages.email')"
          placeholder="cooper@example.com"
        />
      </template>
      <template #submit-button>
        <Button
          variant="primary-extended"
        >
          {{ $t('auth-pages.recover-password') }}
        </Button>
      </template>
      <template #bottom-text>
        {{ $t('auth-pages.go-back-to') }}
      </template>
      <template #login-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ $t('auth-pages.login') }}
        </Button>
      </template>
    </PasswordRecoveryContainer>
  </div>
</template>

<route>
{
name: "password-recovery",
meta: {
layout: "auth"
}
}
</route>

<script lang="ts" setup>
import PasswordRecoveryContainer from '@/containers/PasswordRecoveryContainer.vue';
import Button from '@/components/core/button/Button.vue';
import Field from '@/components/core/field/Field.vue';
import BigLock from '@/components/core/icon/assets/bigLock.svg';
import { useI18n } from 'vue-i18n';

import { ref } from 'vue';

const { t } = useI18n();

const model = ref({
  login: '',
});

</script>

<style lang="scss" module>

</style>
