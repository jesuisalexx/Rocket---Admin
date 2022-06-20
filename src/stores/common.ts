import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useStorage } from '@vueuse/core';

import { i18n, Locales } from '@/i18n';
import { theme } from '@/types/theme';

export const useCommonStore = defineStore('common', () => {
  // app theme
  const activeTheme = ref<theme>('dark' as theme.DARK);
  watch(activeTheme, (value) => {
    document.body.removeAttribute('class');
    document.body.classList.add(value);
  }, { immediate: true });
  const setTheme = (themeName: theme) => {
    activeTheme.value = themeName;
  };

  // app height
  const vh = ref(0);
  const setVh = (amount: number) => {
    vh.value = amount;
  };

  // locale
  const savedLocale = useStorage<Locales>('locale', 'en');
  i18n.global.locale = savedLocale.value;

  const lang = computed({
    get: () => savedLocale.value,
    set: (locale: Locales) => {
      i18n.global.locale = locale;
      savedLocale.value = locale;
    },
  });

  const logoText = ref(import.meta.env.VITE_APP_LOGO_TEXT);

  return {
    activeTheme,
    setTheme,
    vh,
    setVh,
    lang,
    logoText,
  };
});
