import {
  computed,
  inject,
  Ref,
  ref,
  toRefs,
} from 'vue';
import { inputType, touchTrigger } from '@/types/form';
import { getValueByPath, setValueByPath } from '@/utils/object';

export const useField = (
  props: Record<any, any>,
  emit: any,
) => {
  const { name: fieldsPath, modelValue } = toRefs(props);

  const isValidated = inject('isValidated');

  const model = inject<Ref<Record<any, any>> | null>('model', null);
  const isInsideForm = !!model?.value && !props.detachForm;

  const localValue = computed({
    get: () => (
      isInsideForm
        ? getValueByPath(model.value, fieldsPath.value)
        : modelValue.value
    ),
    set: (value) => {
      const normalizedValue = props.type === 'number' && value === ''
        ? 0
        : value;

      if (isInsideForm) {
        setValueByPath(model.value, fieldsPath.value, normalizedValue);
        return;
      }
      emit('update:modelValue', normalizedValue);
    },
  });

  const touchedMap = inject('touchedMap', null);
  const isTouched = computed({
    get: () => (touchedMap && isInsideForm
      ? getValueByPath(touchedMap, fieldsPath.value)
      : false),
    set: (value: boolean) => {
      if (!touchedMap || !isInsideForm) return;
      setValueByPath(touchedMap, fieldsPath.value, value);
    },
  });
  const touchBy = inject('touchBy', null);

  const touch = () => {
    isTouched.value = true;
  };

  const permanentValidate = inject<() => void>('permanentValidate');

  const onInput = (event: InputEvent) => {
    if (props.isDisabled) return;
    permanentValidate?.();
    if (isInsideForm && touchedMap && touchBy === touchTrigger.INPUT) {
      touch();
    }
    emit('input', event);
  };
  const onFocus = (event: InputEvent) => {
    if (props.isDisabled) return;
    permanentValidate?.();
    if (isInsideForm && touchedMap && touchBy === touchTrigger.FOCUS) {
      touch();
    }
    emit('focus', event);
  };
  const onBlur = (event: InputEvent) => {
    if (props.isDisabled) return;
    permanentValidate?.();
    if (isInsideForm && touchedMap && touchBy === touchTrigger.BLUR) {
      touch();
    }
    emit('blur', event);
  };

  const errorsMap = inject<Ref<Record<string, string>> | null>('errorsMap', null);
  const error = computed(() => (errorsMap?.value && isInsideForm
    ? getValueByPath(errorsMap.value, fieldsPath.value)
    : null));

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
    touch,
    onInput,
    onFocus,
    onBlur,
    isPasswordVisible,
    togglePassword,
    computedType,
    error,
  };
};
