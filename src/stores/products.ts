import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import { showServerErrors } from '@/utils/server';
import {
  deleteProduct,
  getProductById,
  productCreate,
  productsList,
  updateProduct,
} from '@/api/endpoints/products';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';
import { ProductCreateDto, ProductsListDto, ProductUpdateDto } from '@/api/dto/products';

export const useProductsStorage = defineStore('products', () => {
  const localSwitchValue = ref(useStorage('switchVal', 'list'));
  const changeSwitchValue = (value: any) => {
    localSwitchValue.value = value;
  };
  const toastStore = useToastStore();
  const { t } = useI18n();
  const handleProductsList = async (model: ProductsListDto) => {
    const {
      result,
      data,
    } = await productsList(model);
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
  const handleProductCreate = async (model: ProductCreateDto) => {
    const {
      result,
      data,
    } = await productCreate(model);
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
  const handleProductById = async (id: string) => {
    const {
      result,
      data,
    } = await getProductById(id);
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
  const handleUpdateProduct = async (model: ProductUpdateDto, id: string) => {
    const {
      result,
      data,
    } = await updateProduct(model, id);
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
  const handleDeleteProduct = async (id: string) => {
    const {
      result,
      data,
    } = await deleteProduct(id);
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
    changeSwitchValue,
    localSwitchValue,
    getProductsList: handleProductsList,
    createProduct: handleProductCreate,
    getProductById: handleProductById,
    updateProduct: handleUpdateProduct,
    deleteProduct: handleDeleteProduct,
  };
});
