<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        Statistics
      </div>
      <div :class="$style.optionsWrapper">
        <div
          :class="[
            $style.option,
            $style.incomeOption
          ]"
        >
          <div :class="$style.incomeOptionSign" />
          <div :class="$style.optionText">
            Income
          </div>
        </div>
        <div :class="$style.option">
          <div :class="$style.expenseOptionSign" />
          <div :class="$style.optionText">
            Expense
          </div>
        </div>
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
      type="bar"
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
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      '19', '20', '21', '22', '23',
      '24', '25',
    ],
  },
  yaxis: {
    max: 400,
    min: -400,
    opposite: false,
    reversed: true,
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
    },
  },
};
const series = [
  {
    name: 'Income',
    data: [120, 250, 220, 190, 200, 180, 150],
    color: '#0090FF',
  }, {
    name: 'Expenses',
    data: [-90, -175, -171, -80, -170, -140, -60],
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
.optionsWrapper {
  display: flex;
}
.option {
  display: flex;
  align-items: center;
}
.incomeOption {
  margin-right: rem(40px);
}
.optionText {
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: rgb(var(--color-body-dark));
}
.incomeOptionSign {
  width: rem(10px);
  height: rem(10px);
  border-radius: 50%;
  background-color: rgb(var(--color-primary-accent));
  margin-right: rem(10px);
}
.expenseOptionSign {
  width: rem(10px);
  height: rem(10px);
  border-radius: 50%;
  background-color: rgb(var(--color-orange));
  margin-right: rem(10px);
}
</style>
