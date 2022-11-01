<template>
  <div :class="$style.root">
    <div v-if="type === 'list'">
      <Loader
        v-if="isLoading"
        :class="$style.loader"
      />
      <div v-else>
        <div
          :class="$style.tableHead"
        >
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
          :key="record"
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
              @click="toggleSelect(column.selectable, record.id)"
            >
              <slot
                :name="`cell(${column.value})`"
                :record="record"
                :data="record[column.value]"
                :is-selected="record.isSelected"
              />
              <slot
                name="options"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="type === 'grid'"
    >
      <Loader
        v-if="isLoading"
        :class="$style.loader"
      />
      <div
        v-else
        :class="$style.gridTable"
      >
        <div
          v-for="record in computedRecords"
          :key="record.id"
          :class="{
            [$style.gridRecord]: true,
            [$style.gridRecordActive]: record.isSelected
          }"
        >
          <div
            :class="$style.gridRecordPicWrap"
          >
            <div :class="$style.badgeWrap">
              <slot
                name="badge"
                :record="record"
              />
              <div
                @click="toggleSelectGrid(record.id)"
              >
                <slot
                  name="select"
                  :is-selected="record.isSelected"
                />
              </div>
            </div>
            <div :class="$style.img">
              <slot
                name="image"
                :img="record.img"
              />
            </div>
          </div>
          <slot
            name="recordData"
            :record="record"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, defineProps, ref, watch, watchEffect,
} from 'vue';
import { TableColumn, TableRecord } from '@/components/core/table/index';
import Arrow from '@/components/core/icon/assets/arrowDown.svg';
import Loader from '@/components/core/loader/Loader.vue';

const props = defineProps<{
  columns: TableColumn[],
  records: Omit<TableRecord, 'isSelected'>[],
  selectedRecords: [''],
  selectable: boolean,
  type: '',
  itemsPerPage: number,
  isLoading: boolean,
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
const selectedRecords = ref(['']);

const toggleSelect = (sortable: any, id: any) => {
  if (sortable) {
    if (selectedRecords.value.includes(id)) {
      selectedRecords.value = selectedRecords.value.filter(
        (currentId) => currentId !== id,
      );
    } else {
      selectedRecords.value.push(id);
    }
  }
};
const toggleSelectGrid = (id: any) => {
  if (selectedRecords.value.includes(id)) {
    selectedRecords.value = selectedRecords.value.filter(
      (currentId) => currentId !== id,
    );
  } else {
    selectedRecords.value.push(id);
  }
};
const computedRecords = computed<TableRecord[]>(() => props.records.map((el: any) => (
  { ...el, isSelected: selectedRecords.value.includes(el.id) }
)));
const recordIds = computed(() => props.records.map((record) => record.id));
const isCheckedAll = ref(false);

const toggleSelectAll = (selectable: any) => {
  if (selectable) {
    if (selectedRecords.value.length === recordIds.value.length) {
      isCheckedAll.value = false;
      selectedRecords.value = [];
    } else {
      isCheckedAll.value = true;
      selectedRecords.value = [];
      selectedRecords.value = recordIds.value;
    }
  }
};

watch(props.records, () => selectedRecords.value = []);
watchEffect(() => {
  isCheckedAll.value = selectedRecords.value.length === recordIds.value.length;
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
}
.loader {
  width: 100%;
  margin-left: 50%;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: rem(20px);
}
.gridRecord {
  width: 100%;
  height: rem(367px);
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(17px);
  cursor: pointer;
}
.gridRecordActive {
  border: rem(1px) solid rgb(var(--color-primary-accent));
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
.img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.gridRecordPicWrap {
  position: relative;
  height: rem(267px);
  border-bottom: rem(1px) solid rgb(var(--color-border));
  padding: rem(16px);
  border-radius: rem(17px) rem(17px) 0 0;
}
.badgeWrap {
  position: absolute;
  top: rem(16px);
  left: rem(16px);
  right: rem(16px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}
</style>
