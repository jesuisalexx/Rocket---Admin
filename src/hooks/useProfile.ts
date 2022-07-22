import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { ProfileUpdateDto } from '@/api/dto/auth';
import {
  object, string,
} from 'yup';

export const useProfile = () => {
  const sessionStore = useSessionStore();

  const model = ref<ProfileUpdateDto>({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    job: '',
  });

  const validationSchema = object().shape({
    firstName: string(),
    lastName: string(),
    username: string(),
    phone: string(),
    job: string(),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.ProfileUpdate(model.value);
    isLoading.value = false;
  };

  const fetchProfile = async () => {
    isLoading.value = true;
    await sessionStore.getProfile();
    const { data } = await sessionStore.getProfile();
    isLoading.value = false;
    console.log(data);

    const setProfile = () => {
      Object.assign(model.value, data);
    };
    setProfile();

    return {
      data,
    };
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
    fetchProfile,
  };
};
