<template>
  <div>
    <RegisterPageContainer
      v-model="model"
    >
      <template #label>
        Create Account
      </template>
      <template #top-button>
        <Button
          variant="secondary-google"
          icon-before-special="google"
        >
          Sign Up with Google
        </Button>
      </template>
      <template #top-text>
        Or Sign Up with email
      </template>
      <template #username>
        <Field
          name="registerUsername"
          label="Full Name"
          placeholder="Regina Cooper"
        />
      </template>
      <template #login>
        <Field
          name="registerLogin"
          label="Email"
          placeholder="cooper@example.com"
        />
      </template>
      <template #password>
        <Field
          name="registerPassword"
          label="Password"
          type="password"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #password-confirm>
        <Field
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #checkbox>
        <Checkbox
          name="isChecked"
          label="I accept"
        />
      </template>
      <template #terms-button>
        <Button
          variant="primary-minimalistic"
        >
          Terms and Conditions
        </Button>
      </template>
      <template #create-button>
        <Button
          variant="primary-extended"
        >
          Create Account
        </Button>
      </template>
      <template #bottom-text>
        Already have an account?
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
        >
          Login
        </Button>
      </template>
    </RegisterPageContainer>
  </div>
</template>

<route>
{
name: "sign-up",
meta: {
layout: "auth"
}
}
</route>

<script lang="ts" setup>
import Button from '@/components/core/button/Button.vue';
import Field from '@/components/core/field/Field.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import { ref } from 'vue';
import RegisterPageContainer from '@/containers/SignUpPageContainer.vue';

const model = ref({
  registerUsername: '',
  registerLogin: '',
  registerPassword: '',
  confirmPassword: '',
  isChecked: false,
});

</script>

<style lang="scss" module>

</style>
