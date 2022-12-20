import { useSessionStore } from '@/stores/session';
import { ref } from 'vue';
import { ProfileUpdateDto } from '@/api/dto/profile';
import {
  object, string,
} from 'yup';
import { useI18n } from 'vue-i18n';

export const useProfile = () => {
  const sessionStore = useSessionStore();
  const { t } = useI18n();

  const model = ref<ProfileUpdateDto>({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    job: '',
  });

  const validationSchema = object().shape({
    firstName: string()
      .required(t('auth.error.first-name-required')),
    lastName: string()
      .required(t('auth.error.last-name-required')),
    username: string()
      .required(t('auth.error.username-required')),
    phone: string()
      .required(t('auth.error.phone-required')),
    job: string()
      .required(t('auth.error.job-required')),
  });

  const isLoading = ref(false);

  const setProfile = (val: object, data: object) => {
    Object.assign(val, data);
  };

  const fetchProfile = async () => {
    isLoading.value = true;
    await sessionStore.getProfile();
    const { data } = await sessionStore.getProfile();
    isLoading.value = false;

    setProfile(model.value, data);

    return {
      data,
    };
  };

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.profileUpdate(model.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
    fetchProfile,
  };
};
