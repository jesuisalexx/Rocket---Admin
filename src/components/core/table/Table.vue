<template>
  <div :class="$style.root">
    <div
      v-if="type === 'list'"
    >
      <div :class="$style.tableHead">
        <div
          :class="$style.columnsWrap"
          :style="computedRowStyles"
        >
          <div
            v-for="column in columns"
            :key="column.label"
            :class="$style.columns"
          >
            <div
              :class="$style.columnsLabel"
              @click="toggleSelectAll(column.selectable, recordIds)"
            >
              <slot
                :name="`column(${column.value})`"
                :column="column"
                :is-selected="isCheckedAll"
              >
                {{ column.label }}
              </slot>
              <Arrow
                v-if="column.sortable"
                :class="$style.sortable"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="record in computedRecords"
        :key="record.id"
        :class="$style.records"
      >
        <div
          :class="$style.recordWrap"
          :style="computedRowStyles"
        >
          <div
            v-for="column in columns"
            :key="column.value"
            :class="$style.record"
            @click="toggleSelect(record.id)"
          >
            <slot
              :name="`cell(${column.value})`"
              :record="record"
              :data="record.data[column.value]"
              :is-selected="record.isSelected"
            />
            <slot name="options" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="type === 'grid'"
      :class="$style.gridTable"
      :style="gridSize"
    >
      <div
        v-for="record in computedRecords"
        :key="record.id"
        :class="$style.gridRecord"
        @click="toggleSelect(record.id)"
      >
        <slot
          name="record"
          :record="record"
          :is-selected="record.isSelected"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, defineProps, ref, watchEffect,
} from 'vue';
import { TableColumn, TableRecord } from '@/components/core/table/index';
import Arrow from '@/components/core/icon/assets/arrowDown.svg';

const props = defineProps<{
  columns: TableColumn[],
  records: Omit<TableRecord, 'isSelected'>[],
  selectedRecords: [],
  selectable: boolean,
  type: '',
}>();

const computedColumns = computed(() => {
  const columnsMap = props.columns.map((item: any) => item.size);
  const columnSize = columnsMap.reduce((acc, val) => {
    const normalizedValue = typeof val === 'number' ? `${val}fr` : `${val}`;
    return `${acc} ${normalizedValue}`;
  }, '');
  return columnSize;
});
const computedRowStyles = computed(() => ({
  gridTemplateColumns: computedColumns.value,
}));

const gridSize = {
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
};
const emit = defineEmits([
  'update:selectedRecords',
]);

const localSelectedRecords = computed<string[]>({
  get: () => props.selectedRecords,

  set: (value) => {
    emit('update:selectedRecords', value);
  },
});
const computedRecords = computed<TableRecord[]>(() => props.records.map((el: any) => (
  { ...el, isSelected: localSelectedRecords.value.includes(el.id) }
)));
const toggleSelect = (id: string) => {
  if (localSelectedRecords.value.includes(id)) {
    localSelectedRecords.value = localSelectedRecords.value.filter(
      (currentId) => currentId !== id,
    );
  } else {
    localSelectedRecords.value.push(id);
  }
};

const recordIds = props.records.map((record) => record.id);
const isCheckedAll = ref(false);

const toggleSelectAll = (selectable: any, recordIds: any) => {
  if (selectable) {
    if (localSelectedRecords.value.length >= 1) {
      isCheckedAll.value = false;
      localSelectedRecords.value = [];
    } else {
      isCheckedAll.value = true;
      localSelectedRecords.value = [];
      localSelectedRecords.value = recordIds;
    }
  }
};
watchEffect(() => {
  isCheckedAll.value = localSelectedRecords.value.length === recordIds.length;
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
}
.tableHead {
  display: flex;
  border-bottom: rem(1px) solid rgb(var(--color-border));
  padding-bottom: rem(16px);
}
.columnsWrap {
  display: grid;
  align-items: flex-end;
  width: 100%;
}
.columns {
  width: 100%;
  display: flex;
  cursor: pointer;
  color: rgb(var(--color-body-dark));
  text-transform: uppercase;
  font-size: rem(14px);
  font-weight: 500;
}
.columnsLabel {
  margin-right: rem(5px);
  display: flex;
}
.sortable {
  margin-left: rem(7px);
}
.records {
  width: 100%;
  height: rem(64px);
  border-bottom: rem(1px) solid rgb(var(--color-border));
  display: grid;
}
.recordWrap {
  display: grid;
  cursor: pointer;
  position: relative;
}
.record {
  display: flex;
  align-items: center;
}
.gridTable {
  display: grid;
  grid-gap: rem(20px);
}
.gridRecord {
  width: 100%;
  height: rem(367px);
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(17px);
  cursor: pointer;
}
.recordCheckbox {
  width: rem(100px);
}
.recordPic {
  position: absolute;
  width: 89%;
  height: 89%;
  z-index: 1;
}
</style>
