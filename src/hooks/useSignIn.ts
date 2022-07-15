import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { SignInDto } from '@/api/dto/auth';
import { boolean, object, string } from 'yup';

export const useSignIn = () => {
  const sessionStore = useSessionStore();

  const model = ref<SignInDto>({
    email: '',
    password: '',
    remember: false,
  });

  const remember = ref(false);

  const validationSchema = object().shape({
    email: string()
      .required('auth.error.email-required')
      .email('auth.error.email-invalid'),
    password: string()
      .required('auth.error.password-required'),
    remember: boolean(),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.signIn(model.value, remember.value);
    console.log(remember.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
    remember,
  };
};
