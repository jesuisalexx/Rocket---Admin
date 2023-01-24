import { useSessionStore } from '@/stores/session';
import { ref } from 'vue';
import { ChangePasswordDto } from '@/api/dto/auth';
import { useI18n } from 'vue-i18n';
import {
  object, ref as yupRef, string,
} from 'yup';
import * as Yup from 'yup';

export const useChangePassword = () => {
  const sessionStore = useSessionStore();
  const { t } = useI18n();

  const model = ref<ChangePasswordDto>({
    oldPassword: '',
    newPassword: '',
  });

  const validationSchema = object().shape({
    oldPassword: string()
      .required(t('auth.error.password-required')),
    newPassword: string()
      .required(t('auth.error.password-required')),
    newPasswordConfirm: Yup.string()
      .required(t('auth.error.confirm-password-required'))
      .oneOf([yupRef('newPassword')], t('auth.error.password-dont-match')),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.changePassword(model.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
  };
};
