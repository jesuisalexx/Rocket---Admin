<template>
  <div
    class="index"
  >
    <ProductsPageContainer>
      <template #heading>
        {{ t('products.products') }}
      </template>
      <template #export-button>
        <Button
          variant="secondary"
          icon-before="download"
          icon-after="arrowDown2"
        >
          {{ t('products.export') }}
        </Button>
      </template>
      <template #import-button>
        <Button
          variant="primary-empty"
        >
          <PlusIcon />
        </Button>
      </template>
      <template #all-products>
        <Tabs :tabs="tabs" />
      </template>
      <template #buttons>
        <Switch :buttons="buttons" />
      </template>
      <template #view>
        <router-view />
      </template>
    </ProductsPageContainer>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import Button from '@/components/core/button/Button.vue';
import PlusIcon from '@/components/core/icon/assets/plus.svg';
import Tabs from '@/components/core/tabs/Tabs.vue';
import ProductsPageContainer from '@/containers/productsPageContainer/ProductsPageContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import { computed } from 'vue';
import { tableType } from '@/containers/productsPageContainer';

const listType = computed(() => tableType.LIST);
const gridType = computed(() => tableType.GRID);
const { t } = useI18n();
const tabs = [
  {
    label: 'All',
    counter: 20,
    to: '/products/all',
  },
  {
    label: 'Available',
    counter: 202,
    to: '/products/available',
  },
  {
    label: 'Disabled',
    counter: 111,
    to: '/products/disabled',
  },
];
const buttons = [
  {
    icon: 'list2',
    value: listType.value,
  },
  {
    icon: 'grid',
    value: gridType.value,
  },
];
</script>
