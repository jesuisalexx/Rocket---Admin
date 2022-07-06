<template>
  <div
    class="index"
  >
    <Form
      v-model="model"
      :validation-schema="validationSchema"
    >
    </Form>
  </div>
</template>

<route>
{
  meta: {
    layout: "auth",
    authRequired: true,
  }
}
</route>

<script setup lang="ts">
import Form from '@/components/core/form/Form.vue';
import { ref } from 'vue';
import { object, string } from 'yup';

const model = ref({
  name: '',
  isChecked: Boolean,
});

const validationSchema = object().shape({
  name: string()
    .required(),
});
</script>
