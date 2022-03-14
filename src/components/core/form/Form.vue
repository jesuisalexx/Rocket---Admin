<template>
  <form
    ref="form"
    class="form"
    @submit.prevent="handleSubmit"
  >
    <slot />
    <div style="color: white; margin-top: 10px;">
      Model: {{ model }}
    </div>
    <div style="color: white">
      Errors: {{ errorsMap }}
    </div>
    <div style="color: white">
      Touched: {{ touchedMap }}
    </div>
  </form>
</template>

<script setup lang="ts">
import {
  ref,
  PropType,
} from 'vue';
import { useForm } from '@/hooks/useForm';
import { touchTrigger } from '@/types/form';

const form = ref<HTMLElement | null>(null);

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  validationSchema: {
    type: Object,
    required: true,
  },
  permanent: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  touchBy: {
    type: String as PropType<touchTrigger>,
    default: touchTrigger.INPUT,
  },
  submitOnEnter: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue', 'submit']);

const {
  model,
  errorsMap,
  touchedMap,
  handleSubmit,
} = useForm(props, emit, form);
</script>

<style lang="scss">
@import "../../../assets/styles/utils";

.form {
  border: rem(1px) solid gray;
  border-radius: rem(4px);
  padding: rem(10px);
}
</style>
