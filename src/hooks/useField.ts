import {
  computed,
  inject,
  Ref,
  ref,
  toRefs,
} from 'vue';
import { inputType, touchTrigger } from '@/types/form';

export const useField = (
  props: Record<any, any>,
  emit: any,
) => {
  const { name: fieldName, modelValue } = toRefs(props);

  const isValidated = inject('isValidated');

  const model = inject<Ref<Record<any, any>> | null>('model', null);
  const isInsideForm = !!model?.value;

  const localValue = computed({
    get: () => (
      isInsideForm
        ? model?.value?.[fieldName.value]
        : modelValue.value
    ),
    set: (value) => {
      if (isInsideForm && (fieldName.value in model.value)) {
        model.value[fieldName.value] = value;
        return;
      }
      emit('update:modelValue', value);
    },
  });

  const touchedMap = inject<Record<any, any> | null>('touchedMap', null);
  const isTouched = computed({
    get: () => touchedMap?.[fieldName.value],
    set: (value: boolean) => {
      if (!touchedMap) return;
      touchedMap[fieldName.value] = value;
    },
  });
  const touchBy = inject('touchBy', null);

  const onInput = (event: InputEvent) => {
    if (props.isDisabled) return;
    if (isInsideForm && touchedMap && touchBy === touchTrigger.INPUT) {
      isTouched.value = true;
    }
    emit('input', event);
  };
  const onFocus = (event: InputEvent) => {
    if (props.isDisabled) return;
    if (isInsideForm && touchedMap && touchBy === touchTrigger.FOCUS) {
      isTouched.value = true;
    }
    emit('focus', event);
  };
  const onBlur = (event: InputEvent) => {
    if (props.isDisabled) return;
    if (isInsideForm && touchedMap && touchBy === touchTrigger.BLUR) {
      isTouched.value = true;
    }
    emit('blur', event);
  };

  const errorsMap = inject<Record<string, string> | null>('errorsMap', null);
  const error = computed(() => errorsMap?.value[fieldName.value] || null);

  const isPasswordVisible = ref(false);
  const togglePassword = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
  };
  const computedType = computed(() => {
    if (props.type !== inputType.PASSWORD) return props.type;
    return isPasswordVisible.value ? inputType.TEXT : inputType.PASSWORD;
  });

  return {
    isValidated,
    localValue,
    isTouched,
    onInput,
    onFocus,
    onBlur,
    isPasswordVisible,
    togglePassword,
    computedType,
    error,
  };
};
