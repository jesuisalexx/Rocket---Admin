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
        />
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
    size: 1.4,
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
    name: 'iPhone 13 Pro',
    data: {
      value: 'name',
      label: 'iPhone 13 Pro 256GB',
      number: '#1',
      category: 'Phone',
      date: '21.09.2020',
      price: '1000$',
      status: 'available',
    },
  },
];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  padding-top: rem(25px);
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
</style>
