<template>
  <div :class="$style.root">
    <Card>
      <div :class="$style.fieldWrap">
        <Field
          icon-before="search"
          icon-after="filter"
          :class="$style.field"
        />
        <Button
          variant="secondary"
          icon-after="arrowDown2"
        >
          Actions
        </Button>
      </div>
      <div :class="$style.table">
        <Table
          v-model:selectedRecords="selectedRecords"
          :columns="columns"
          :records="records"
          :selectable="true"
        >
          <template #col(select)="{ isSelected }">
            <Checkbox
              :model-value="isSelected"
              :class="$style.checkbox"
            />
          </template>
          <template #col(name)="{ column }">
            <div
              :class="$style.columnArrow"
            >
              {{ column.label }}
              <Arrow />
            </div>
          </template>
          <template #col(number)="{ column }">
            <div :class="$style.columnArrow">
              {{ column.label }}
              <Arrow />
            </div>
          </template>
          <template #col(category)="{ column }">
            <div :class="$style.columnArrow">
              {{ column.label }}
              <Arrow />
            </div>
          </template>
          <template #col(date)="{ column }">
            <div :class="$style.columnArrow">
              {{ column.label }}
              <Arrow />
            </div>
          </template>
          <template #col(price)="{ column }">
            <div :class="$style.columnArrow">
              {{ column.label }}
              <Arrow />
            </div>
          </template>
          <template #col(status)="{ column }">
            <div :class="$style.columnArrow">
              {{ column.label }}
              <Arrow />
            </div>
          </template>
          <template #more-button>
            <More :class="$style.moreBtn" />
          </template>
          <template
            #cell(select)="{ isSelected }"
          >
            <Checkbox
              :model-value="isSelected"
              :class="$style.checkbox"
            />
          </template>
          <template
            #cell(name)="{ record }"
          >
            <div
              :class="$style.recLightText"
              @click="showProductModal(record)"
            >
              {{ record.data.name }}
            </div>
          </template>
          <template
            #cell(number)="{ record }"
          >
            <div :class="$style.recDarkText">
              {{ record.data.number }}
            </div>
          </template>
          <template
            #cell(category)="{ record }"
          >
            <div :class="$style.recLightText">
              {{ record.data.category }}
            </div>
          </template>
          <template
            #cell(date)="{ record }"
          >
            <div :class="$style.recDarkText">
              {{ record.data.date }}
            </div>
          </template>
          <template
            #cell(price)="{ record }"
          >
            <div :class="$style.recLightText">
              {{ record.data.price }}
            </div>
          </template>
          <template
            #cell(status)="{ record }"
          >
            <Badge
              :variant="statusMap[record.data.status]"
            >
              {{ record.data.status }}
            </Badge>
          </template>
        </Table>
      </div>
      <div :class="$style.pagination">
        <PaginationBlock :pages="1" />
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Table from '@/components/core/table/Table.vue';
import Field from '@/components/core/field/Field.vue';
import Card from '@/components/core/card/Card.vue';
import Badge from '@/components/core/badge/Badge.vue';
import Button from '@/components/core/button/Button.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import Arrow from '@/components/core/icon/assets/arrowDown.svg';
import More from '@/components/core/icon/assets/more.svg';
import { ref } from 'vue';
import PaginationBlock from '@/components/core/paginationBlock/PaginationBlock.vue';
import { modalType } from '@/types/modal';
import { useModalStore } from '@/stores/modals';

const columns = [
  {
    label: 'select',
    size: 0.5,
    value: 'select',
    sortable: false,
    selectable: true,
  },
  {
    label: 'product name',
    size: 3.5,
    value: 'name',
    sortable: false,
  },
  {
    label: 'product no.',
    size: 2.5,
    value: 'number',
    sortable: false,
  },
  {
    label: 'category',
    size: 2.5,
    value: 'category',
    sortable: false,
  },
  {
    label: 'date',
    size: 2,
    value: 'date',
    sortable: false,
  },
  {
    label: 'price',
    size: 1.4,
    value: 'price',
    sortable: false,
  },
  {
    label: 'status',
    size: 1.4,
    value: 'status',
    sortable: false,
  },
];
const records = [
  {
    id: '1',
    data: {
      name: 'iPhone 13 Pro 256GB',
      number: '#1123',
      category: 'Phone',
      date: '21.09.2020',
      price: '1000$',
      status: 'available',
      pic: '',
    },
  },
  {
    id: '2',
    data: {
      name: 'MacBook Pro 13',
      number: '#2321',
      category: 'Laptop',
      date: '25.01.2021',
      price: '2200$',
      status: 'disabled',
      pic: '',
    },
  },
  {
    id: '3',
    data: {
      name: 'iPhone 11 Pro 256GB',
      number: '#3321',
      category: 'Phone',
      date: '11.01.2022',
      price: '800$',
      status: 'available',
      pic: '',
    },
  },
  {
    id: '4',
    data: {
      name: 'iPhone X',
      number: '#3311',
      category: 'Phone',
      date: '12.02.2022',
      price: '500$',
      status: 'available',
      pic: '',
    },
  },
];
const selectedRecords = ref([]);

const statusMap = {
  available: 'success',
  disabled: 'warning',
};
const modalsStore = useModalStore();

// eslint-disable-next-line max-len
const showProductModal = (product: any) => modalsStore.showModal({ type: modalType.PRODUCT, payload: { name: product } });

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  padding-top: rem(25px);
  font-family: 'Poppins', sans-serif;
}

.fieldWrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.field {
  width: 89%;
}

.table {
  margin-top: rem(33px);
}

.pagination {
  width: 100%;
  height: rem(35px);
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.checkbox {
}

.moreBtn {
  position: absolute;
  top: rem(18px);
  right: 0;
  cursor: pointer;
}

.recLightText {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}

.recDarkText {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
}

.columnArrow {
  display: flex;
  align-items: center;
}
</style>
