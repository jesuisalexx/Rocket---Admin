<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        Analytics
      </div>
      <Button
        variant="secondary"
        icon-before="calendar"
        icon-after="arrowDown2"
      >
        19 Aug – 25 Aug
      </Button>
    </div>
    <VueApexCharts
      width="100%"
      height="300"
      type="line"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts';
import Button from '@/components/core/button/Button.vue';

const chartOptions = {
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
    align: 'left',
  },
  xaxis: {
    categories: [
      'Mon', 'Tue', 'Wed', 'Thu',
      'Fri', 'Sat', 'Sun',
    ],
  },
  zoom: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
};
const series = [
  {
    name: '',
    data: [0, 350, 270, 1000, 500, 1500, 2100],
    color: '#0090FF',
  },
  {
    name: '',
    data: [0, 250, 600, 850, 550, 400, 300],
    color: '#FF955C',
  },
];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  width: auto;
  height: rem(400px);
  padding: rem(20px);
  background-color: rgb(var(--color-surface));
  border-radius: rem(20px);
}
.headingWrap {
  width: 100%;
  height: rem(40px);
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(10px);
}
.heading {
  font-size: rem(20px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
  margin-left: rem(15px);
}
</style>
