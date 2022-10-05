<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        Sales
      </div>
      <div :class="$style.options">
        <Options />
      </div>
    </div>
    <VueApexCharts
      width="100%"
      height="200"
      type="donut"
      :options="chartOptions"
      :series="series"
    />
    <div :class="$style.statsWrapper">
      <div :class="$style.weekStats">
        <div :class="$style.statsHeadingWrapper">
          <div :class="$style.optionColorBlue" />
          <div :class="$style.statsHeading">
            Current Week
          </div>
        </div>
        <div :class="$style.statsNumber">
          2.500
        </div>
        <div :class="$style.statsPercentageWrapper">
          <ArrowUp />
          <div :class="$style.statsPercentage">
            8.8%
          </div>
        </div>
      </div>
      <div :class="$style.divider"></div>
      <div :class="$style.weekStats">
        <div :class="$style.statsHeadingWrapper">
          <div :class="$style.optionColorOrange" />
          <div :class="$style.statsHeading">
            Last Week
          </div>
        </div>
        <div :class="$style.statsNumber">
          1.000
        </div>
        <div :class="$style.statsPercentageWrapper">
          <ArrowUp />
          <div :class="$style.statsPercentage">
            5.8%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts';
import Options from '@/components/core/icon/assets/moreHorizontal.svg';
import ArrowUp from '@/components/core/icon/assets/arrow-up.svg';

const chartOptions = {
  chart: {
    type: 'donut',
  },
  labels: ['Last Week', 'Current Week'],
  colors: ['#FF955C', '#0090FF'],
  legend: {
    show: false,
  },
};
const series = [35, 65];

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  width: auto;
  height: auto;
  padding: rem(20px);
  background-color: rgb(var(--color-surface));
  border-radius: rem(20px);
}
.headingWrap {
  width: 100%;
  height: rem(40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: rem(10px);
}
.heading {
  font-size: rem(20px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
  margin-left: rem(15px);
}
.statsWrapper {
  width: 100%;
  margin-top: rem(40px);
}
.optionColorBlue {
  width: rem(10px);
  height: rem(10px);
  border-radius: 50%;
  background-color: rgb(var(--color-primary-accent));
}
.optionColorOrange {
  width: rem(10px);
  height: rem(10px);
  border-radius: 50%;
  background-color: rgb(var(--color-orange));
}
.weekStats {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.statsHeadingWrapper {
  display: flex;
  width: rem(130px);
  align-items: center;
}
.statsHeading {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
  margin-left: rem(10px);
}
.statsNumber {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}
.statsPercentageWrapper {
  display: flex;
  align-items: center;
}
.statsPercentage {
  color: rgb(var(--color-green));
}
.divider {
  width: 100%;
  height: rem(1px);
  background-color: rgb(var(--color-border));
  margin-top: rem(20px);
  margin-bottom: rem(20px);
}
</style>
