<template>
  <div>
    <PasswordRecoveryContainer
      v-model="model"
    >
      <template #icon>
        <BigLockIcon />
      </template>
      <template #heading>
        {{ t('auth.recover-your-password') }}
      </template>
      <template #email>
        <Field
          name="login"
          :label="t('auth.email')"
          :placeholder="t('profile.email-placeholder')"
        />
      </template>
      <template #submit-button>
        <Button
          variant="primary-extended"
        >
          {{ t('auth.recover-password') }}
        </Button>
      </template>
      <template #login-text>
        {{ t('auth.go-back-to') }}
      </template>
      <template #login-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ t('auth.login') }}
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
import BigLockIcon from '@/assets/img/bigLock.svg';
import { useI18n } from 'vue-i18n';

import { ref } from 'vue';

const { t } = useI18n();

const model = ref({
  login: '',
});

</script>

<style lang="scss" module>

</style>
