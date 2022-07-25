import { useSessionStore } from '@/stores/session';
import { ref } from 'vue';
import { SignUpDto } from '@/api/dto/auth';
import {
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
      .required(t('auth.error.first-name-required')),
    lastName: string()
      .required(t('auth.error.last-name-required')),
    username: string()
      .required(t('auth.error.username-required')),
    email: string()
      .required(t('auth.error.email-required'))
      .email(),
    password: string()
      .required(t('auth.error.password-required')),
    confirmPassword: Yup.string()
      .required(t('auth.error.confirm-password-required'))
      .oneOf([yupRef('password')], t('auth.error.password-dont-match')),
  });

  return {
    model,
    validationSchema,
    isLoading,
    isDisabled: accept,
    submit,
  };
};
