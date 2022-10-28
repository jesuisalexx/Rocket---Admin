<template>
  <div :class="$style.root">
    <div :class="$style.selectWrapper">
      <div :class="$style.select">
        <Select
          :options="options"
          @items-amount="items"
          @items-per-page="itemsPerPage"
        />
      </div>
      <div :class="$style.text">
        {{ t('pagination.showing') }}
      </div>
    </div>
    <paginate
      :page-count="pages"
      :prev-link-class="$style.prev"
      :next-link-class="$style.next"
      :page-link-class="$style.page"
      :active-class="$style.active"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'className'"
      :class="$style.pagination"
      :click-handler="currentPage"
    />
  </div>
</template>

<script lang="ts" setup>
import Paginate from 'vuejs-paginate-next';
import Select from '@/components/core/select/Select.vue';
import {
  defineProps,
  ref,
} from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps<{
  pages: any,
}>();
const emit = defineEmits([
  'itemsPerPage',
  'setCurrentPage',
]);
const itemsPerPage = (value: any) => {
  emit('itemsPerPage', value);
};
const itemsAmount = ref(1);
const items = (value: any) => {
  itemsAmount.value = value;
};

const currentPage = (pageNum: any) => {
  emit('setCurrentPage', pageNum);
};

const options = [
  {
    val: 2,
  },
  {
    val: 4,
  },
  {
    val: 6,
  },
  {
    val: 8,
  },
  {
    val: 10,
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
