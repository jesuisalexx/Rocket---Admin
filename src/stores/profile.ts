import { defineStore } from 'pinia';
import { profileData, profileUpdate } from '@/api/endpoints/profile';
import { showServerErrors } from '@/utils/server';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';
import { ProfileUpdateDto } from '@/api/dto/profile';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const toastStore = useToastStore();
  const { t } = useI18n();
  const isAdmin = ref();
  const handleProfileData = async () => {
    const {
      result,
      data,
    } = await profileData();
    isAdmin.value = data.isAdmin;
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

  return {
    getProfile: handleProfileData,
    profileUpdate: handleUpdateProfile,
    isAdmin,
  };
});
