import { useSessionStore } from '@/stores/session';
import { ref, watchEffect } from 'vue';
import { SignUpDto } from '@/api/dto/auth';
import { boolean, object, string } from 'yup';

export const useSignUp = () => {
  const sessionStore = useSessionStore();

  const model = ref<SignUpDto>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
  });

  const accept = false;

  const validationSchema = object().shape({
    firstName: string()
      .required(),
    lastName: string()
      .required(),
    username: string()
      .required(),
    email: string()
      .required()
      .email(),
    password: string()
      .required(),
    confirmPassword: string()
      .required(),
    accept: boolean()
      .required(),
  });

  const isLoading = ref(false);

  const submit = async () => {
    if (model.value.accept === true) {
      isLoading.value = true;
      await sessionStore.signUp(model.value, accept);
      isLoading.value = false;
    } else {
      console.log('accept terms');
    }
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
    accept,
  };
};
