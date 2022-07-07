<template>
  <form
    ref="form"
    :class="$style.form"
    @submit.prevent="handleSubmit"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import {
  ref,
  PropType,
  VueElement,
} from 'vue';
import { useForm } from '@/hooks/useForm';
import { touchTrigger } from '@/types/form';

const form = ref<VueElement | null>(null);

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
    default: touchTrigger.BLUR,
  },
  submitOnEnter: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue', 'submit', 'validate']);

console.log('props', props);

const {
  handleSubmit,
  reset,
  validate,
} = useForm(props, emit, form);

defineExpose({
  reset,
  handleSubmit,
  validate,
});
</script>

<style lang="scss" module>
.form {}
</style>
