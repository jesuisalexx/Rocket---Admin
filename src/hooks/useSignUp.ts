import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { SignUpDto } from '@/api/dto/auth';
import {
  boolean,
  object,
  string,
  ref as yupRef,
} from 'yup';
import * as Yup from 'yup';
import { useI18n } from 'vue-i18n';

export const useSignUp = () => {
  const sessionStore = useSessionStore();

  const { t } = useI18n();

  const model = ref<SignUpDto>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const accept = ref(false);
  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.signUp(model.value, accept.value);
    isLoading.value = false;
  };

  const validationSchema = object().shape({
    firstName: string()
      .required(t('')),
    lastName: string()
      .required(),
    username: string()
      .required(),
    email: string()
      .required()
      .email(),
    password: string()
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required field')
      .oneOf([yupRef('password')], 'Passwords does not match field'),
  });

  return {
    model,
    validationSchema,
    isLoading,
    isDisabled: accept,
    submit,
  };
};
