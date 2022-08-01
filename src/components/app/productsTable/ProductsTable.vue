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
        <Table :columns="columns" />
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
    size: 3,
    value: 'name',
    sortable: false,
  },
  {
    label: 'product no.',
    size: 1,
    value: 'name',
    sortable: false,
  },
  {
    label: 'category',
    size: 2,
    value: 'name',
    sortable: false,
  },
  {
    label: 'date',
    size: 1,
    value: 'name',
    sortable: false,
  },
  {
    label: 'price',
    size: 1,
    value: 'name',
    sortable: false,
  },
  {
    label: 'status',
    size: 1,
    value: 'name',
    sortable: false,
  },
];
</script>

<style lang="scss" module>
.root {
  padding-top: 35px;
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
  margin-top: 33px;
}
.pagination {
  width: 100%;
  height: 90px;
  background: #000;
}
</style>
