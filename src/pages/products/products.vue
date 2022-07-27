<template>
  <div
    class="index"
  >
    <ProductsContainer>
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
        {{ t('products.all') }}
      </template>
      <template #available-products>
        {{ t('products.available') }}
      </template>
      <template #disabled-products>
        {{ t('products.disabled') }}
      </template>
      <template #list>
        <List />
      </template>
      <template #grid>
        <Grid />
      </template>
    </ProductsContainer>
  </div>
</template>

<script setup lang="ts">
import ProductsContainer from '@/containers/ProductsContainer.vue';
import { useI18n } from 'vue-i18n';
import Button from '@/components/core/button/Button.vue';
import PlusIcon from '@/components/core/icon/assets/plus.svg';
import List from '@/components/core/icon/assets/list2.svg';
import Grid from '@/components/core/icon/assets/grid.svg';

const { t } = useI18n();
</script>
