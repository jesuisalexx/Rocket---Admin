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
      <ProductsTable :records="records"/>
    </template>
    <template #pagination>
      <PaginationBlock
        @itemsPerPage="itemsPerPage"
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

const { t } = useI18n();
const { fetchProducts, records, total } = useProducts();
fetchProducts();

const itemsPerPage = (value: any) => {
  // records.value.length = value;
  // computedItems.value = value;
  console.log(value);
};
</script>

<style lang="scss" module>
.field {
  width: 89%;
}
</style>
