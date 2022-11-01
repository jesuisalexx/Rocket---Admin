<template>
  <ProductsAllPageContainer>
    <template #top-input>
      <Input
        icon-before="search"
        icon-after="filter"
        :class="$style.field"
      />
      <Button
        variant="secondary"
        icon-after="arrowDown3"
      >
        {{ t('products.actions') }}
      </Button>
    </template>
    <template #table>
      <ProductsTable
        :is-loading="isLoading"
        :records="records"
      />
    </template>
    <template #pagination>
      <PaginationBlock
        :pages="pages"
        :current-page="currentPage"
        @itemsPerPage="itemsPerPage"
        @setCurrentPage="setCurrentPage"
      />
    </template>
  </ProductsAllPageContainer>
</template>

<script lang="ts" setup>
import ProductsAllPageContainer from '@/containers/productsAllPageContainer/ProductsAllPageContainer.vue';
import PaginationBlock from '@/components/core/paginationBlock/PaginationBlock.vue';
import Input from '@/components/core/input/Input.vue';
import ProductsTable from '@/components/app/productsTable/ProductsTable.vue';
import Button from '@/components/core/button/Button.vue';
import { useI18n } from 'vue-i18n';
import { useProducts } from '@/hooks/useProducts';
import { ref, watch } from 'vue';

const { t } = useI18n();
const {
  fetchProducts, records, total, model, isLoading,
} = useProducts();

fetchProducts();

const pages = ref(1);
const currentPage = ref(1);
const perPage = ref(10);

const setCurrentPage = (value: any) => {
  currentPage.value = value;
  model.value.page = currentPage.value;
};
const itemsPerPage = (value: any) => {
  pages.value = Math.ceil(total.value / value);
  model.value.perPage = value;
  perPage.value = value;
  model.value.page = 1;
  currentPage.value = 1;
};
watch(pages, () => fetchProducts());
watch(currentPage, () => fetchProducts());
watch(total, () => pages.value = Math.ceil(total.value / perPage.value));
</script>

<style lang="scss" module>
.field {
  width: 89%;
}
</style>
