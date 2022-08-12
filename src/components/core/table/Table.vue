<template>
  <div :class="$style.root">
    <div
      v-if="type === 'list'"
    >
      <div :class="$style.tableHat">
        <div
          :class="$style.columnsWrap"
          :style="size"
        >
          <div
            v-for="column in columns"
            :key="column.label"
            :class="$style.columns"
          >
            <div
              :class="$style.colLabel"
              @click="toggleSelectAll(column.selectable, recordIds)"
            >
              <slot
                :name="`col(${column.value})`"
                :column="column"
                :is-selected="localSelectedRecords"
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
          :style="size"
        >
          <div
            v-for="column in columns"
            :key="column.label"
            :class="$style.record"
            @click="toggleSelect(column.selectable, record.id)"
          >
            <slot
              :name="`cell(${column.value})`"
              :record="record"
              :data="record.data[column.value]"
              :is-selected="record.isSelected"
            />
          </div>
          <slot name="more-button" />
        </div>
      </div>
    </div>
    <div
      v-else-if="type === 'grid'"
      :class="$style.gridTable"
      :style="gridSize"
    >
      <div
        v-for="record in records"
        :key="record.id"
        :class="$style.gridRecord"
      >
        <div :class="$style.gridRecordPicWrap">
          <div :class="$style.badgeWrap">
            <Badge :variant="statusMap[record.data.status]">
              {{ record.data.status }}
            </Badge>
            <div :class="$style.gridCheckWrap">
              <div
                v-if="check"
                :class="$style.gridCheck"
              />
              <Check v-else />
            </div>
          </div>
        </div>
        <div :class="$style.gridRecordData">
          <div :class="$style.recordName">
            {{ record.data.name }}
          </div>
          <div :class="$style.recordFlexDataWrap">
            <div :class="$style.recordFlexData">
              {{ record.data.date }}
            </div>
            <div :class="$style.recordFlexData">
              {{ record.data.category }}
            </div>
            <div :class="$style.recordFlexData">
              {{ record.data.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { columnType, TableRecord } from '@/components/core/table/index';
import Check from '@/components/core/icon/assets/checked.svg';
import Badge from '@/components/core/badge/Badge.vue';
import { products } from '@/stores/products';

const props = defineProps<{
  columns: columnType[],
  records: Omit<TableRecord, 'isSelected'>[],
  selectedRecords: [],
  selectable: boolean
}>();
const sizeComputed = computed(() => {
  const columnsMap = props.columns.map((item: any) => item.size);
  const colSize = columnsMap.reduce((acc, val) => {
    const normalizedValue = typeof val === 'number' ? `${val}fr` : `${val}`;
    return `${acc} ${normalizedValue}`;
  }, '');
  return colSize;
});
const size = computed(() => ({
  gridTemplateColumns: sizeComputed.value,
}));

const gridSize = {
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
};
const statusMap = {
  available: 'success',
  disabled: 'warning',
};
const type = computed(() => products().type);
const emit = defineEmits([
  'update:selectedRecords',
]);

const localSelectedRecords = computed<string[]>({
  get: () => props.selectedRecords,

  set: (value) => {
    emit('update:selectedRecords', value);
  },
});
// eslint-disable-next-line max-len
const computedRecords = computed<TableRecord[]>(() => props.records.map((el: any) => ({ ...el, isSelected: localSelectedRecords.value.includes(el.id) })));
const toggleSelect = (selectable: any, id: string) => {
  if (selectable === true) {
    if (localSelectedRecords.value.includes(id)) {
      // eslint-disable-next-line max-len
      localSelectedRecords.value = localSelectedRecords.value.filter((currentId) => currentId !== id);
    } else {
      localSelectedRecords.value.push(id);
    }
  }
};

const recordIds = props.records.map((record) => record.id);

const toggleSelectAll = (selectable: any, recordIds: any) => {
  if (selectable === true) {
    if (localSelectedRecords.value.length >= 1) {
      localSelectedRecords.value = [];
      console.log('if', localSelectedRecords.value);
    } else {
      localSelectedRecords.value = [];
      localSelectedRecords.value = recordIds;
      console.log('else', localSelectedRecords.value);
    }
  }
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
}
.tableHat {
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
.colLabel {
  margin-right: rem(5px);
}
.check {
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
}
.gridRecordPicWrap {
  position: relative;
  height: rem(267px);
  border-bottom: rem(1px) solid rgb(var(--color-border));
  padding: rem(16px);
}
.gridRecordData {
  width: 100%;
  padding: rem(16px);
}
.badgeWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}
.recordCheckbox {
  width: 100px;
}
.gridCheckWrap {
  width: rem(16px);
  height: rem(16px);
}
.gridCheck {
  width: rem(16px);
  height: rem(16px);
  border-radius: 50%;
  border: rem(1px) solid grey;
}
.recordName {
  width: 100%;
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}
.recordFlexDataWrap {
  display: flex;
  justify-content: space-between;
}
.recordFlexData {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
  font-weight: 400;
  margin-top: rem(25px);
}
.recordPic {
  position: absolute;
  width: 89%;
  height: 89%;
  z-index: 1;
}
</style>
