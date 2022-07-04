<template>
  <div>
    <PasswordRecoveryContainer
      v-model="model"
    >
      <template #icon>
        <BigLock />
      </template>
      <template #label>
        Recover Your Password
      </template>
      <template #email>
        <Field
          name="login"
          label="Email"
          placeholder="cooper@example.com"
        />
      </template>
      <template #submit-button>
        <Button
          variant="primary-extended"
        >
          Recover Password
        </Button>
      </template>
      <template #bottom-text>
        Go back to
      </template>
      <template #login-button>
        <Button
          variant="primary-minimalistic"
        >
          Login
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

import { ref } from 'vue';

const model = ref({
  login: '',
});

</script>

<style lang="scss" module>

</style>
