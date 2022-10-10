<template>
  <div :class="$style.root">
    <VueApexCharts
      width="100%"
      :height="data.height"
      :type="data.type"
      :options="data.chartOptions"
      :series="data.series"
    />
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps<{
  data: {}
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {

}
</style>
