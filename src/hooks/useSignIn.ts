import { useSessionStore } from '@/stores/session';
import { ref } from 'vue';
import { SignInDto } from '@/api/dto/auth';
import { boolean, object, string } from 'yup';
import { useI18n } from 'vue-i18n';

export const useSignIn = () => {
  const sessionStore = useSessionStore();
  const { t } = useI18n();

  const model = ref<SignInDto>({
    email: '',
    password: '',
    remember: false,
  });

  const remember = ref(false);

  const validationSchema = object().shape({
    email: string()
      .required(t('auth.error.email-required'))
      .email(t('auth.error.email-invalid')),
    password: string()
      .required(t('auth.error.password-required')),
    remember: boolean(),
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
