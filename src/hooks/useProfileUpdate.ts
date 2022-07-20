import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { ProfileUpdateDto } from '@/api/dto/auth';
import {
  object, string,
} from 'yup';

export const useProfileUpdate = () => {
  const sessionStore = useSessionStore();

  const model = ref<ProfileUpdateDto>({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
  });

  const validationSchema = object().shape({
    firstName: string(),
    lastName: string(),
    username: string(),
    phone: string(),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await sessionStore.ProfileUpdate(model.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
  };
};
