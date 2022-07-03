<template>
  <div>
    <SignInPageContainer
      v-model="model"
    >
      <template #label>
        Login To Your Account
      </template>
      <template #top-button>
        <Button
          variant="secondary-google"
          icon-before-special="google"
        >
          Login with Google
        </Button>
      </template>
      <template #top-text>
        Or Login with email
      </template>
      <template #login>
        <Field
          name="login"
          label="Email"
        />
      </template>
      <template #password>
        <Field
          name="password"
          label="Password"
          icon-after="hide"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #checkbox>
        <Checkbox
          name="isChecked"
          label="Remember me"
        />
      </template>
      <template #password-button>
        <Button
          variant="primary-minimalistic"
        >
          Forgot Password?
        </Button>
      </template>
      <template #login-button>
        <Button
          variant="primary-extended"
        >
          Log In
        </Button>
      </template>
      <template #bottom-text>
        Don't have an account?
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
        >
          Sign Up
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

signIn();

const model = ref({
  login: '',
  password: '',
  isChecked: false,
});

</script>

<style lang="scss" module>

</style>
