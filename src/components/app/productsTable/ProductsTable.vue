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
          :columns="columns"
          :records="records"
        >
          <template #checkbox>
            <Checkbox :class="$style.checkbox" />
          </template>
          <template #more-button>
            <More :class="$style.moreBtn" />
          </template>
          <template
            #cell(name)="{ record }"
          >
            <div :class="$style.recLightText">
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
            <div
              :class="{
                [$style.recStatus]: true,
                [$style.recStatusAvailable]: record.data.status === 'available',
                [$style.recStatusDisabled]: record.data.status === 'disabled',
              }"
            >
              {{ record.data.status }}
            </div>
          </template>
        </Table>
      </div>
      <div :class="$style.pagination" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Table from '@/components/core/table/Table.vue';
import Field from '@/components/core/field/Field.vue';
import Card from '@/components/core/card/Card.vue';
import Button from '@/components/core/button/Button.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import More from '@/components/core/icon/assets/more.svg';

const columns = [
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
      isChecked: false,
      name: 'iPhone 13 Pro 256GB',
      number: '#1123',
      category: 'Phone',
      date: '21.09.2020',
      price: '1000$',
      status: 'available',
    },
  },
  {
    id: '2',
    data: {
      isChecked: false,
      name: 'MacBook Pro 13',
      number: '#2321',
      category: 'Laptop',
      date: '25.01.2021',
      price: '2200$',
      status: 'disabled',
    },
  },
  {
    id: '3',
    data: {
      isChecked: false,
      name: 'iPhone 11 Pro 256GB',
      number: '#3321',
      category: 'Phone',
      date: '11.01.2022',
      price: '800$',
      status: 'available',
    },
  },
];
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
  height: rem(90px);
}
.checkbox {
  position: absolute;
  top: rem(22px);
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
.recStatusAvailable {
  color: rgb(var(--color-dark-green));
  background: rgba(88, 215, 134, 0.2);
}
.recStatusDisabled {
  background: rgba(255, 149, 92, 0.2);
  color: rgb(var(--color-dark-orange));
}
.recStatus {
  font-size: rem(12px);
  font-weight: 400;
  text-transform: capitalize;
  padding: rem(5px) rem(12px);
  border-radius: rem(9px);
}
</style>
