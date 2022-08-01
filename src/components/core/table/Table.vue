<template>
  <div :class="$style.root">
    <div :class="$style.tableHat">
      <Checkbox model-value="true" />
      <div
        v-for="(column, i) in columns"
        :key="i"
        :class="$style.columns"
        :style="sizeComp"
      >
        <div :style="sizeComp">
          {{ column.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { columnType } from '@/components/core/table/index';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';

const props = defineProps<{
  columns: columnType[],
}>();

const columnsMap = props.columns.map((item: any) => item.size);

const colSize = columnsMap.reduce((acc, val) => {
  const normalizedValue = typeof val === 'number' ? `${val}fr` : `${val}`;
  return `${acc} ${normalizedValue}`;
}, '');
console.log(colSize);

const sizeComputed = computed(() => colSize);
const sizeComp = computed(() => `width: ${sizeComputed.value};`);

</script>

<style lang="scss" module>
.root {
  display: flex;
}
.tableHat {
  display: flex;
  align-items: center;
  width: 100%;
}
.columns {
  width: 100%;
  background: pink;
  display: flex;
  border-bottom: 3px solid rgb(var(--color-border));
}
.size{}
</style>
