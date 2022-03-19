import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Toast } from '@/types/toast';
import { uuid } from '@/utils/uuid';

export const useToastStore = defineStore('toast', () => {
  const list = ref<Toast[]>([]);

  const showToast = (toast: Omit<Toast, 'id'>) => {
    list.value.push({
      id: uuid(),
      ...toast,
    });
  };

  const removeToast = (toastId: Toast['id']) => {
    const toastIndex = list.value.findIndex((element) => element.id === toastId);
    list.value.splice(toastIndex, 1);
  };

  return {
    list,
    showToast,
    removeToast,
  };
});
