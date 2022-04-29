import {
  ref,
  computed,
  provide,
  watch,
  Ref,
  onMounted,
  reactive,
} from 'vue';
import {
  createObjectWithValues,
  getValueByPath,
  setValueByPath,
} from '@/utils/object';

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
  const errorsList = ref<Array<{ path: string, message: string }>>([]);
  const errorsMap = computed(() => errorsList.value.reduce((map, error) => {
    setValueByPath(map, error.path, error.message);
    return map;
  }, {}));
  const isFormValid = computed(() => !errorsList.value.length);
  provide('errorsMap', errorsMap);

  // touch
  const touchedMap = reactive<Record<string, boolean>>(
    createObjectWithValues(model.value, false),
  );
  const touch = (path: string) => {
    setValueByPath(touchedMap, path, true);
  };
  const touchMany = (value: boolean) => {
    Object.assign(
      touchedMap,
      createObjectWithValues(model.value, value),
    );
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
      errorsList.value = err.inner
        .map(({ path, message }: any) => ({
          // yup return error path like menus[0].title, so
          // we need to get path like menus.0.title
          path: path.replaceAll('[', '.').replaceAll(']', ''),
          message,
        }))
        .filter(({ path }: any) => getValueByPath(touchedMap, path));
    }
    return isFormValid.value;
  };
  const permanentValidate = async () => {
    if (!props.permanent) return;
    await validate();
  };
  provide('permanentValidate', permanentValidate);

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
    emit('validate', isFormValid.value);
    return isValid;
  };

  const reset = () => {
    isValidated.value = false;
    resetModel();
    clearTouchedMap();
  };

  onMounted(() => {
    // Append hidden button type submit to form.
    // For situations when submit button is outside form
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
    errorsList,
    errorsMap,
    isFormValid,
    touchedMap,
    handleSubmit,
    reset,
  };
};
