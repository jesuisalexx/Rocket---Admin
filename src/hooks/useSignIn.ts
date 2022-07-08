import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { SignInDto } from '@/api/dto/auth';
import { object, string } from 'yup';

export const useSignIn = () => {
  const sessionStore = useSessionStore();

  const model = ref<SignInDto>({
    email: '',
    password: '',
  });

  const remember = ref(false);

  const validationSchema = object().shape({
    email: string()
      .required()
      .email(),
    password: string()
      .required(),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.signIn(model.value, remember.value);
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
