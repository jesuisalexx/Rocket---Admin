<template>
  <div :class="$style.root">
    <div :class="$style.textButtonsWrap">
      <div :class="$style.heading">
        <slot name="heading" />
      </div>
      <div :class="$style.buttonsWrap">
        <div :class="$style.exportBtn">
          <slot name="export-button" />
        </div>
        <slot name="import-button" />
      </div>
    </div>
    <div :class="$style.linksWrap">
      <div
        :class="[
          $style.links,
          $style.linksFlex
        ]"
      >
        <div :class="$style.products">
          <slot name="all-products" />
          <div :class="$style.counter">
            283
          </div>
        </div>
        <div
          :class="[
            $style.products,
            $style.productsAvailable
          ]"
        >
          <slot name="available-products" />
          <div :class="$style.counter">
            268
          </div>
        </div>
        <div
          :class="[
            $style.products,
            $style.productsAvailable
          ]"
        >
          <slot name="disabled-products" />
          <div :class="$style.counter">
            15
          </div>
        </div>
      </div>
      <div :class="$style.listTypeChange">
        <div
          :class="$style.list"
          @click="useProductsStore.listType(listTableType)"
        >
          <slot name="list" />
        </div>
        <div :class="$style.divider" />
        <div
          :class="$style.list"
          @click="useProductsStore.gridType(gridTableType)"
        >
          <slot name="grid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { products } from '@/stores/products';
import { computed } from 'vue';
import { tableType } from '@/pages/products';

const useProductsStore = products();
const listTableType = computed(() => tableType.LIST);
const gridTableType = computed(() => tableType.GRID);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  padding: rem(30px);
}
.textButtonsWrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.buttonsWrap {
  height: rem(40px);
  display: flex;
}
.heading {
  font-size: rem(28px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.exportBtn {
  margin-right: rem(17px);
}
.linksWrap {
  display: flex;
  justify-content: space-between;
  margin-top: rem(35px);
  border-bottom: rem(1px) solid rgb(var(--color-border));
}
.links {
  display: inline-block;
}
.linksFlex {
  display: flex;
}
.products {
  color: rgb(var(--color-body-dark));
  display: flex;
  height: rem(40px);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: rgb(var(--color-heading));
    border-bottom: rem(2px) solid rgb(var(--color-primary-accent));
  }
}
.productsAvailable {
  margin-left: rem(25px);
}
.counter {
  padding: rem(8px);
  height: rem(18px);
  border-radius: rem(6px);
  background: rgb(var(--color-border));
  font-family: 'Poppins', sans-serif;
  font-size: rem(10px);
  color: rgb(var(--color-heading));
  margin-left: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.listTypeChange {
  display: flex;
}
.list {
  width: rem(18px);
  height: rem(18px);
  cursor: pointer;
  &:hover {
  }
}
.divider {
  width: rem(1px);
  height: rem(18px);
  background: rgb(var(--color-border));
  margin: 0 rem(16px);
}
</style>
