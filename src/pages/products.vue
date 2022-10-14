<template>
  <div
    :class="$style.root"
  >
    <div
      v-if="isProductSidebarOpen"
      :class="$style.productSidebar"
    >
      <AddProductSidebar @close="close" />
    </div>
    <ProductsPageContainer>
      <template #heading>
        {{ t('products.products') }}
      </template>
      <template #export-button>
        <Button
          variant="secondary"
          icon-before="download"
          icon-after="arrowDown3"
        >
          {{ t('products.export') }}
        </Button>
      </template>
      <template #import-button>
        <Button
          variant="primary-empty"
          @click="isProductSidebarOpen = true"
        >
          <PlusIcon />
        </Button>
      </template>
      <template #tabs>
        <Tabs
          v-model="tabsActive"
          :tabs="tabs"
        >
          <template #tab>
            <router-link
              v-for="(tab, index) in tabs"
              :key="index"
              :to="tab.to"
              :exact-active-class="$style.active"
              :class="$style.tab"
            >
              <div :class="$style.text">
                {{ tab.label }}
              </div>
              <div :class="$style.counter">
                {{ tab.counter }}
              </div>
            </router-link>
          </template>
        </Tabs>
      </template>
      <template #buttons>
        <ListTypeSwitch
          v-model="switchVal"
          :buttons="buttons"
        />
      </template>
      <template #view>
        <router-view />
      </template>
    </ProductsPageContainer>
  </div>
</template>

<route>
{
  "meta": {
    "authRequired": true,
  },
  "redirect": {
    "name": "products-all"
  },
}
</route>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import Button from '@/components/core/button/Button.vue';
import PlusIcon from '@/components/core/icon/assets/plus.svg';
import Tabs from '@/components/core/tabs/Tabs.vue';
import ProductsPageContainer from '@/containers/productsPageContainer/ProductsPageContainer.vue';
import ListTypeSwitch from '@/components/core/listTypeSwitch/ListTypeSwitch.vue';
import { tableType } from '@/components/core/listTypeSwitch';
import AddProductSidebar from '@/components/core/addProductSidebar/AddProductSidebar.vue';
import { ref, watch } from 'vue';
import { useProductsStorage } from '@/stores/products';

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
const tabsActive = '';

const isProductSidebarOpen = ref(false);
const productsStorage = useProductsStorage();
const switchVal = ref('');
watch(switchVal, () => {
  productsStorage.changeSwitchValue(switchVal.value);
});
const close = () => {
  isProductSidebarOpen.value = false;
};
const buttons = [
  {
    icon: 'list2',
    value: tableType.LIST,
  },
  {
    icon: 'grid',
    value: tableType.GRID,
  },
];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.productSidebar {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
}
.tab {
  color: rgb(var(--color-body-dark));
  display: flex;
  height: rem(40px);
  cursor: pointer;
  transition: 0.2s;
  margin-right: rem(20px);
}
.counter {
  padding: rem(8px);
  height: rem(18px);
  border-radius: rem(6px);
  background-color: rgb(var(--color-border));
  font-family: 'Poppins', sans-serif;
  font-size: rem(10px);
  color: rgb(var(--color-heading));
  margin-left: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  color: rgb(var(--color-heading));
  border-bottom: rem(2px) solid rgb(var(--color-primary-accent));
}
</style>
