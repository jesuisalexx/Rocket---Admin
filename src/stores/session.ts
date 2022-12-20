import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

import { router } from '@/router';
import { useAuthToken } from '@/hooks/useAuthToken';
import { RouteLocationRaw } from 'vue-router';
import { changePassword, signIn, signUp } from '@/api/endpoints/auth';
import { profileData, profileUpdate } from '@/api/endpoints/profile';
import { ChangePasswordDto, SignInDto, SignUpDto } from '@/api/dto/auth';
import { ProfileUpdateDto } from '@/api/dto/profile';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';
import { showServerErrors } from '@/utils/server';

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

      const {
        guestRequired,
        authRequired,
      } = router.currentRoute.value.meta;

      const {
        result,
        redirect,
      } = checkAuth(
        isAuthorized.value,
        guestRequired,
        authRequired,
      );

      if (!result && redirect) {
        await router.push(redirect);
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );

  const toastStore = useToastStore();
  const { t } = useI18n();

  const handleSignIn = async (model: SignInDto, remember: boolean) => {
    const {
      result,
      data,
    } = await signIn(model);

    if (result) {
      setToken(data, remember);
      toastStore.showSuccess(
        {
          label: t('auth.success.success'),
          text: t('auth.success.welcome'),
          duration: 5000,
        },
      );
    } else {
      showServerErrors((message: string) => {
        toastStore.showDanger({
          label: t('auth.error.error'),
          text: t(message),
          duration: 5000,
        });
      }, data.message);
    }

    return {
      result,
      data,
    };
  };
  const handleSignUp = async (model: SignUpDto, accept: boolean) => {
    const {
      result,
      data,
    } = await signUp(model);

    if (result) {
      setToken(data, accept);
      toastStore.showSuccess(
        {
          label: t('auth.success.success'),
          text: t('auth.success.welcome'),
          duration: 5000,
        },
      );
    } else {
      showServerErrors((message: string) => {
        toastStore.showDanger({
          label: t('auth.error.error'),
          text: t(message),
          duration: 5000,
        });
      }, data.message);
    }

    return {
      result,
      data,
    };
  };
  const handleChangePassword = async (model: ChangePasswordDto) => {
    const {
      result,
      data,
    } = await changePassword(model);

    if (result) {
      toastStore.showSuccess(
        {
          label: t('auth.success.success'),
          text: t('auth.success.password-changed'),
          duration: 5000,
        },
      );
    } else {
      showServerErrors((message: string) => {
        toastStore.showDanger({
          label: t('auth.error.error'),
          text: t(message),
          duration: 5000,
        });
      }, data.message);
    }

    return {
      result,
      data,
    };
  };
  const handleUpdateProfile = async (model: ProfileUpdateDto) => {
    const {
      result,
      data,
    } = await profileUpdate(model);
    if (result) {
      toastStore.showSuccess(
        {
          label: t('auth.success.success'),
          text: t('auth.success.profile-updated'),
          duration: 5000,
        },
      );
    } else {
      showServerErrors((message: string) => {
        toastStore.showDanger({
          label: t('auth.error.error'),
          text: t(message),
          duration: 5000,
        });
      }, data.message);
    }
    return {
      result,
      data,
    };
  };

  const handleProfileData = async () => {
    const {
      result,
      data,
    } = await profileData();
    if (!result) {
      showServerErrors((message: string) => {
        toastStore.showDanger({
          label: t('auth.error.error'),
          text: t(message),
          duration: 5000,
        });
      }, data.message);
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
    changePassword: handleChangePassword,
    profileUpdate: handleUpdateProfile,
    getProfile: handleProfileData,
    logoutUser,
  };
});
