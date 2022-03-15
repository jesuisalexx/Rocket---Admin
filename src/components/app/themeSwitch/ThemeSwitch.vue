<template>
  <div class="theme-switch">
    <div
      :class="{
        'theme-switch__button': true,
        'theme-switch__button--active': activeTheme === theme.LIGHT
      }"
      @click="setLightTheme"
    >
      {{ t('theme.light') }}
    </div>
    <div
      :class="{
        'theme-switch__button': true,
        'theme-switch__button--active': activeTheme === theme.DARK
      }"
      @click="setDarkTheme"
    >
      {{ t('theme.dark') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useCommonStore } from '@/stores/common';
import { theme } from '@/types/theme';
import { computed } from 'vue';

const { t } = useI18n();
const commonStore = useCommonStore();

const activeTheme = computed(() => commonStore.activeTheme);

const setLightTheme = () => {
  commonStore.setTheme(theme.LIGHT);
};
const setDarkTheme = () => {
  commonStore.setTheme(theme.DARK);
};
</script>

<style lang="scss" src="./themeSwitch.scss" />
