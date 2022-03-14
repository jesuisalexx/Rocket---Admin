<template>
  <div class="root">
    <h1>
      Components
    </h1>
    <Form
      v-model="model"
      :validation-schema="validationSchema"
      :touch-by="touchTrigger.FOCUS"
      :submit-on-enter="true"
      class="root__form"
    >
      <Field
        label="Name"
        name="name"
      />
      <Field
        label="Email"
        style="margin-top: 10px;"
        name="email"
      />
    </Form>
    <Field
      v-model="fieldValue"
      class="root__field"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { object, string } from 'yup';
import Form from '@/components/core/form/Form.vue';
import Field from '@/components/core/field/Field.vue';
import { touchTrigger } from '@/types/form';

const model = ref({
  name: '',
  email: '',
});

const validationSchema = object().shape({
  name: string()
    .required('Name is required')
    .min(3, 'Min name length is 3'),
  email: string()
    .required('Email is required')
    .email('Email should be an email'),
});

const fieldValue = ref('');
</script>

<style lang="scss">
.root {
  padding: 20px;
  &__form {
    margin-top: 20px;
  }
  &__field {
    margin-top: 20px;
  }
}
</style>
