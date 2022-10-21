<template>
  <div :class="$style.root">
    <div :class="$style.selectWrapper">
      <div :class="$style.select">
        <Select
          :options="ops"
          @items-amount="items"
        />
      </div>
      <div :class="$style.text">
        {{ t('pagination.showing') }}
      </div>
    </div>
    <paginate
      :page-count="pagesAmount"
      :prev-link-class="$style.prev"
      :next-link-class="$style.next"
      :page-link-class="$style.page"
      :active-class="$style.active"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'className'"
      :class="$style.pagination"
    />
  </div>
</template>

<script lang="ts" setup>
import Paginate from 'vuejs-paginate-next';
import Select from '@/components/core/select/Select.vue';
import { computed, defineProps, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProducts } from '@/hooks/useProducts';

const { t } = useI18n();
const products = useProducts();
const total = computed(() => products.total.value);
console.log(total);
const props = defineProps<{
  pages: any
}>();
const pagesAmount = ref(1);

const items = (value:any) => {
  pagesAmount.value = total.value / value;
  console.log(total.value);
};

const ops = [
  {
    val: 1,
  },
  {
    val: 2,
  },
  {
    val: 3,
  },
  {
    val: 4,
  },
  {
    val: 5,
  },
];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.pagination {
  display: flex;
}
.prev {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  background-color: rgb(var(--color-overlay-light));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-body-dark));
  margin-right: rem(5px);
}
.next {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  background-color: rgba(0, 144, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-primary-accent));
  margin-left: rem(5px);
}
.page {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-heading));
  font-size: rem(15px);
  font-weight: 400;
}
.active {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  background-color: rgb(var(--color-primary-accent));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-heading));
  font-size: rem(15px);
  font-weight: 400;
}
.text {
  font-size: rem(15px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-dark));
  margin-left: rem(15px);
}
.select {
  width: rem(66px);
}
.selectWrapper {
  display: flex;
  align-items: center;
}
</style>
