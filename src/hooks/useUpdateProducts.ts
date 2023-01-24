import { ref } from 'vue';
import {
  array, number, object, string,
} from 'yup';
import { useI18n } from 'vue-i18n';
import { ProductUpdateDto } from '@/api/dto/products';
import { useProductsStorage } from '@/stores/products';

export const useUpdateProduct = () => {
  const { t } = useI18n();
  const { updateProduct } = useProductsStorage();

  const model = ref<ProductUpdateDto>({
    code: '',
    name: '',
    description: 'description',
    images: [],
    specifications: {
      os: '16',
      display: '11',
    },
    status: 'active',
    price: 2000,
  });

  const validationSchema = object().shape({
    code: string(),
    name: string(),
    description: string(),
    images: array(),
    specifications: object(),
    status: string(),
    price: number(),
  });

  const isLoading = ref(false);

  const submit = async (id: any) => {
    console.log(id);
    isLoading.value = true;
    await updateProduct(model.value, id);
    isLoading.value = false;
  };

  return {
    model,
    validationSchema,
    isLoading,
    submit,
  };
};
