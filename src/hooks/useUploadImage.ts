import { useI18n } from 'vue-i18n';
import { useImagesStorage } from '@/stores/images';
import { ref } from 'vue';
import { ImageUploadDto } from '@/api/dto/images';
import { object, string } from 'yup';

export const useUploadImage = () => {
  const { t } = useI18n();
  const { uploadImage } = useImagesStorage();

  const model = ref<ImageUploadDto>({
    image: '',
  });

  const validationSchema = object().shape({
    image: string().required(t('auth.error.code-required')),
  });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await uploadImage(model.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
  };
};
