import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import { showServerErrors } from '@/utils/server';
import { productsList } from '@/api/endpoints/auth';
import { useToastStore } from '@/stores/toasts';
import { useI18n } from 'vue-i18n';
import {
  ProductsListDto,
} from '@/api/dto/auth';

export const useProductsStorage = defineStore('products', () => {
  const localSwitchValue = ref(useStorage('switchVal', 'list'));
  const changeSwitchValue = (value: any) => {
    localSwitchValue.value = value;
  };
  const toastStore = useToastStore();
  const { t } = useI18n();
  const handleProductsList = async (model: ProductsListDto) => {
    const { result, data } = await productsList(model);
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
  };
});
