import { ref } from 'vue';
import {
  array,
  number,
  object,
  string,
} from 'yup';
import { useI18n } from 'vue-i18n';
import { ProductCreateDto } from '@/api/dto/products';
import { useProductsStorage } from '@/stores/products';

export const useCreateProduct = () => {
  const { t } = useI18n();
  const { createProduct } = useProductsStorage();

  const model = ref<ProductCreateDto>({
    code: '#',
    name: '',
    description: 'description',
    images: [],
    category: '',
    specifications: {
      os: 'macOS',
      display: '16',
    },
    status: 'active',
    price: 2000,
  });

  const validationSchema = object()
    .shape({
      code: string()
        .required(t('auth.error.code-required')),
      name: string()
        .required(t('auth.error.name-required')),
      description: string()
        .required(t('auth.error.description-required')),
      images: array()
        .required(t('auth.error.images-required')),
      specifications: object()
        .required(t('auth.error.specifications-required')),
      status: string()
        .required(t('auth.error.status-required')),
      price: number()
        .required(t('auth.error.price-required')),
    });

  const isLoading = ref(false);

  const submit = async () => {
    isLoading.value = true;
    await createProduct(model.value);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
  };
};
