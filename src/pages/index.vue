<template>
  <div
    class="index"
  >
    <Form
      v-model="model"
      :validation-schema="validationSchema"
    >
      <!--      <Checkbox name="isChecked" />-->
      <Button
        variant="primary"
        icon-after="settings"
      >
        Button
      </Button>
      <!--      <Field-->
      <!--        name="name"-->
      <!--        label="password"-->
      <!--        icon-after="hide"-->
      <!--      />-->
    </Form>
  </div>
</template>

<script setup lang="ts">
import Field from '@/components/core/field/Field.vue';
import Form from '@/components/core/form/Form.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import { ref } from 'vue';
import { object, string } from 'yup';
import Button from '@/components/core/button/Button.vue';

const model = ref({
  name: '',
  isChecked: Boolean,
});

const validationSchema = object().shape({
  name: string()
    .required(),
});
</script>
