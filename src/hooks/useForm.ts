import {
  ref,
  computed,
  provide,
  watch,
  Ref,
  onMounted, reactive,
} from 'vue';

// resetForm
// resetAttrs

export const useForm = (
  props: Record<any, any>,
  emit: any,
  form: Ref<HTMLElement | null>,
) => {
  // TODO: make better
  const primaryModelState = JSON.stringify(props.modelValue);
  const isValidated = ref(false);
  provide('isValidated', isValidated);

  const model = computed({
    get: () => props.modelValue,
    set: (modelValue) => emit('update:modelValue', modelValue),
  });

  const resetModel = () => {
    model.value = JSON.parse(primaryModelState);
  };

  // errors
  const errorsList = ref([]);
  const errorsMap = computed(() => errorsList.value.reduce((acc, error) => ({
    ...acc,
    [error[0]]: error[1],
  }), {}));
  const isFormValid = computed(() => !errorsList.value.length);
  provide('errorsMap', errorsMap);

  // touch
  const touchedMap = reactive<Record<string, boolean>>(
    Object
      .keys(model.value)
      .reduce((acc, modelKey) => ({
        ...acc,
        [modelKey]: false,
      }), {}),
  );
  const touch = (field: string) => {
    touchedMap[field] = true;
  };
  const touchMany = (value: boolean) => {
    Object
      .keys(touchedMap)
      .forEach((modelKey) => {
        touchedMap[modelKey] = value;
      });
  };
  const touchAll = () => {
    touchMany(true);
  };
  const clearTouchedMap = () => {
    touchMany(false);
  };
  provide('touchedMap', touchedMap);
  provide('touch', touch);
  provide('touchBy', props.touchBy);

  // validation
  const validate = async () => {
    isValidated.value = true;
    try {
      await props.validationSchema.validate(model.value, { abortEarly: false });
      errorsList.value = [];
    } catch (err: any) {
      const errors = err.inner.map((e: any) => [e.path, e.message]);
      errorsList.value = errors.filter(
        (error: string[]) => touchedMap[error[0]],
      );
    }
    return isFormValid.value;
  };

  watch([model, touchedMap], async () => {
    if (props.permanent) {
      await validate();
    }
  });
  provide('model', model);

  const handleSubmit = async () => {
    touchAll();
    const isValid = await validate();
    if (isValid) {
      emit('submit');
    }
  };

  const reset = () => {
    isValidated.value = false;
    resetModel();
    clearTouchedMap();
  };

  onMounted(() => {
    // Append hidden button type submit to form.
    // For situations when submit button outside form
    if (props.submitOnEnter && form.value) {
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.style.display = 'none';
      form.value.appendChild(submitButton);
    }
  });

  return {
    model,
    validate,
    touch,
    touchAll,
    clearTouchedMap,
    errorsMap,
    isFormValid,
    touchedMap,
    handleSubmit,
    reset,
  };
};
