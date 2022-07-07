<template>
  <div>
    <SignUpPageContainer
      v-model="model"
    >
      <template #label>
        {{ $t('auth-pages.create-account') }}
      </template>
      <template #top-button>
        <Button
          variant="secondary-google"
          icon-before-special="google"
        >
          {{ $t('auth-pages.sign-up-with-google') }}
        </Button>
      </template>
      <template #top-text>
        {{ $t('auth-pages.or-sign-up-with-email') }}
      </template>
      <template #username>
        <Field
          name="registerUsername"
          :label="$t('auth-pages.full-name')"
          placeholder="Regina Cooper"
        />
      </template>
      <template #login>
        <Field
          name="registerLogin"
          :label="$t('auth-pages.email')"
          placeholder="cooper@example.com"
        />
      </template>
      <template #password>
        <Field
          name="registerPassword"
          :label="$t('auth-pages.password')"
          type="password"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #password-confirm>
        <Field
          name="confirmPassword"
          type="password"
          :label="$t('auth-pages.confirm-password')"
          icon-after="hide"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </template>
      <template #checkbox>
        <Checkbox
          name="isChecked"
          :label="$t('auth-pages.i-accept')"
        />
      </template>
      <template #terms-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ $t('auth-pages.terms-and-conditions') }}
        </Button>
      </template>
      <template #create-button>
        <Button
          variant="primary-extended"
        >
          {{ $t('auth-pages.create-account') }}
        </Button>
      </template>
      <template #bottom-text>
        {{ $t('auth-pages.already-have-an-account') }}
      </template>
      <template #sign-up-button>
        <Button
          variant="primary-minimalistic"
        >
          {{ $t('auth-pages.login') }}
        </Button>
      </template>
    </SignUpPageContainer>
  </div>
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
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import { ref } from 'vue';
import SignUpPageContainer from '@/containers/SignUpPageContainer.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
