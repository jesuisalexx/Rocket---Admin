import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { ChangePasswordDto } from '@/api/dto/auth';
import {
  boolean, object, ref as yupRef, string,
} from 'yup';
import * as Yup from 'yup';

export const useChangePassword = () => {
  const sessionStore = useSessionStore();

  const model = ref<ChangePasswordDto>({
    oldPassword: '',
    newPassword: '',
  });

  const validationSchema = object().shape({
    oldPassword: string()
      .required('auth.error.password-required'),
    newPassword: string()
      .required('auth.error.password-required'),
    newPasswordConfirm: Yup.string()
      .required('Confirm Password is required field')
      .oneOf([yupRef('newPassword')], 'Passwords does not match field'),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.ChangePassword(model.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
  };
};
