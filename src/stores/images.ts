import { defineStore } from 'pinia';
import { ImageUploadDto } from '@/api/dto/images';
import { imageUpload } from '@/api/endpoints/images';
import { showServerErrors } from '@/utils/server';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';

export const useImagesStorage = defineStore('images', () => {
  const toastStore = useToastStore();
  const { t } = useI18n();

  const handleImageUpload = async (model: ImageUploadDto) => {
    const { result, data } = await imageUpload(model);
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
  return {
    uploadImage: handleImageUpload,
  };
});
