<template>
  <div :class="$style.root">
    <div :class="$style.tableHat">
      <Checkbox
        model-value="true"
        :class="$style.check"
      />
      <div
        :class="$style.columnsWrap"
        :style="size"
      >
        <div
          v-for="(column, i) in columns"
          :key="i"
          :class="$style.columns"
        >
          <div :class="$style.colLabel">
            {{ column.label }}
          </div>
          <Arrow />
        </div>
      </div>
    </div>
    <div
      v-for="(record, i) in records"
      :key="i"
      :class="$style.records"
    >
      <div :class="$style.record">
        {{ record.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { columnType } from '@/components/core/table/index';
import Arrow from '@/components/core/icon/assets/arrowDown.svg';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';

const props = defineProps<{
  columns: columnType[],
  records: [],
}>();

const sizeComputed = computed(() => {
  const columnsMap = props.columns.map((item: any) => item.size);
  const colSize = columnsMap.reduce((acc, val) => {
    const normalizedValue = typeof val === 'number' ? `${val}fr` : `${val}`;
    return `${acc} ${normalizedValue}`;
  }, '');
  console.log(colSize);
  return colSize;
});
const size = computed(() => ({
  gridTemplateColumns: sizeComputed.value,
}));

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
  margin-right: rem(30px);
}
.records {
  display: flex;
  flex-direction: column;
}
.record {
  width: 100%;
  height: rem(64px);
  border-bottom: rem(1px) solid rgb(var(--color-border));
  display: flex;
  align-items: center;
}
</style>
