<template>
  <div class="index">
    <Form
      v-model="model"
      :validation-schema="validationSchema"
    >
      <Field
        label="Password"
        name="name"
      />
      <Avatar
        size="bigCircle"
        shape="circle"
      />
    </Form>
  </div>
</template>

<script setup lang="ts">
import Field from '@/components/core/field/Field.vue';
import Form from '@/components/core/form/Form.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import { ref } from 'vue';
import { object, string } from 'yup';

const model = ref({
  name: '',
});

const validationSchema = object().shape({
  name: string()
    .required(),
});
</script>
