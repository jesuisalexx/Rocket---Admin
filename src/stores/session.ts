import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

import { router } from '@/router';
import { useAuthToken } from '@/hooks/useAuthToken';
import { RouteLocationRaw } from 'vue-router';
import { signIn, signUp } from '@/api/endpoints/auth';
import { SignInDto, SignUpDto } from '@/api/dto/auth';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';

export const checkAuth = (
  isAuthorized: boolean,
  guestRequired: boolean | unknown,
  authRequired: boolean | unknown,
): { result: boolean; redirect?: RouteLocationRaw } => {
  if (isAuthorized && guestRequired) {
    return {
      result: false,
      redirect: {
        name: 'index',
      },
    };
  }
  if (!isAuthorized && authRequired) {
    return {
      result: false,
      redirect: {
        name: 'auth-sign-in',
      },
    };
  }
  return {
    result: true,
  };
};

export const useSessionStore = defineStore('session', () => {
  const isAuthorized = ref(false);

  const {
    token,
    setToken,
    removeToken,
  } = useAuthToken();

  watch(
    token,
    async (token) => {
      isAuthorized.value = !!token;

      const { guestRequired, authRequired } = router.currentRoute.value.meta;

      const { result, redirect } = checkAuth(
        isAuthorized.value,
        guestRequired,
        authRequired,
      );

      if (!result && redirect) {
        await router.push(redirect);
      }
    },
    { deep: true, immediate: true },
  );

  const toastStore = useToastStore();
  const { t } = useI18n();

  const handleSignIn = async (model: SignInDto, remember: boolean) => {
    const { result, data } = await signIn(model);

    if (result) {
      setToken(data, remember);
      toastStore.showSuccess(
        {
          label: 'Success',
          text: 'Welcome',
          duration: 5000,
        },
      );
    } else {
      const isSeveralErrors = Array.isArray(data.message);
      if (isSeveralErrors) {
        data.message.forEach((message: string) => toastStore.showDanger({
          label: 'Error',
          text: t(message),
          duration: 5000,
        }));
      } else {
        toastStore.showDanger({
          label: 'Error',
          text: t(data.message),
          duration: 5000,
        });
      }

      console.log(data);
    }

    return {
      result,
      data,
    };
  };
  const handleSignUp = async (model: SignUpDto, accept: boolean) => {
    const { result, data } = await signUp(model);

    if (result) {
      setToken(data, accept);
      toastStore.showSuccess(
        {
          label: 'Success',
          text: 'Welcome',
          duration: 5000,
        },
      );
    } else {
      const isSeveralErrors = Array.isArray(data.message);
      if (isSeveralErrors) {
        data.message.forEach((message: string) => toastStore.showDanger({
          label: 'Error',
          text: t(message),
          duration: 5000,
        }));
      } else {
        toastStore.showDanger({
          label: 'Error',
          text: t(data.message),
          duration: 5000,
        });
      }

      console.log(data);
    }

    return {
      result,
      data,
    };
  };

  const logoutUser = () => {
    removeToken();
    localStorage.clear();
    sessionStorage.clear();
  };

  return {
    token,
    setToken,
    isAuthorized,
    checkAuth,
    signIn: handleSignIn,
    signUp: handleSignUp,
    logoutUser,
  };
});
