import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { ResetPasswordDto } from '@/api/dto/auth';
import { boolean, object, string } from 'yup';

export const useResetPassword = () => {
  const sessionStore = useSessionStore();

  const model = ref<ResetPasswordDto>({
    email: '',
    oldPassword: '',
    newPassword: '',
  });

  const validationSchema = object().shape({
    email: string()
      .required('auth.error.email-required')
      .email('auth.error.email-invalid'),
    oldPassword: string()
      .required('auth.error.password-required'),
    newPassword: string()
      .required('auth.error.password-required'),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.ResetPassword(model.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
  };
};
