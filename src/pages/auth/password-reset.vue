<template>
  <div>
    <PasswordResetContainer
      v-model="model"
    >
      <template #icon>
        <BigLock />
      </template>
      <template #label>
        Reset Your Password
      </template>
      <template #login>
        <Field
          name="resetLogin"
          label="Email"
          placeholder="cooper@example.com"
        />
      </template>
      <template #password>
        <Field
          name="resetPassword"
          label="Password"
          type="password"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #password-confirm>
        <Field
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #create-button>
        <Button
          variant="primary-extended"
        >
          Reset Password
        </Button>
      </template>
      <template #bottom-text>
        Go back to
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
        >
          Login
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
