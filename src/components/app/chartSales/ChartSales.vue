<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        {{ t('charts.sales') }}
      </div>
      <div :class="$style.options">
        <Options />
      </div>
    </div>
    <Chart :data="data" />
    <div :class="$style.statsWrapper">
      <div :class="$style.weekStats">
        <div :class="$style.statsHeadingWrapper">
          <div :class="$style.optionColorBlue" />
          <div :class="$style.statsHeading">
            {{ t('charts.current-week') }}
          </div>
        </div>
        <div :class="$style.statsNumber">
          {{ data.series[1] }}
        </div>
        <div :class="$style.statsPercentageWrapper">
          <div
            :class="{
              [$style.arrowGreen]: data.percents[1].isIncrease,
              [$style.arrowRed]: !data.percents[1].isIncrease
            }"
          >
            <Icon icon="arrow" />
          </div>
          <div
            :class="{
              [$style.statsPercentageGreen]: data.percents[1].isIncrease,
              [$style.statsPercentageRed]: !data.percents[1].isIncrease
            }"
          >
            {{ data.percents[1].value }}%
          </div>
        </div>
      </div>
      <div :class="$style.divider" />
      <div :class="$style.weekStats">
        <div :class="$style.statsHeadingWrapper">
          <div :class="$style.optionColorOrange" />
          <div :class="$style.statsHeading">
            {{ t('charts.last-week') }}
          </div>
        </div>
        <div :class="$style.statsNumber">
          {{ data.series[0] }}
        </div>
        <div :class="$style.statsPercentageWrapper">
          <div
            :class="{
              [$style.arrowGreen]: data.percents[0].isIncrease,
              [$style.arrowRed]: !data.percents[0].isIncrease
            }"
          >
            <Icon icon="arrow" />
          </div>
          <div
            :class="{
              [$style.statsPercentageGreen]: data.percents[0].isIncrease,
              [$style.statsPercentageRed]: !data.percents[0].isIncrease
            }"
          >
            {{ data.percents[0].value }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Chart from '@/components/core/chart/Chart.vue';
import Options from '@/components/core/icon/assets/moreHorizontal.svg';
import Icon from '@/components/core/icon/Icon.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const data = {
  percents: [
    {
      isIncrease: false,
      value: 5.8,
    },
    {
      isIncrease: true,
      value: 8.8,
    },
  ],
  height: 200,
  type: 'donut',
  chartOptions: {
    chart: {
      type: 'donut',
    },
    labels: ['Last Week', 'Current Week'],
    colors: ['#FF955C', '#0090FF'],
    legend: {
      show: false,
    },
  },
  series: [1000, 2500],
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
* {
  font-family: 'Poppins', sans-serif;
}
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
.options {
  cursor: pointer;
}
.heading {
  font-size: rem(20px);
  font-weight: 500;
  color: rgb(var(--color-heading));
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
.arrowGreen {
  width: rem(12px);
  height: rem(11px);
  rotate: 90deg;
  color: rgb(var(--color-green));
  margin-right: rem(2px);
}
.arrowRed {
  width: rem(12px);
  height: rem(11px);
  rotate: 270deg;
  color: rgb(var(--color-red));
  margin-right: rem(2px);
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
.statsPercentageGreen {
  color: rgb(var(--color-green));
}
.statsPercentageRed {
  color: rgb(var(--color-red));
}
.divider {
  width: 100%;
  height: rem(1px);
  background-color: rgb(var(--color-border));
  margin-top: rem(20px);
  margin-bottom: rem(20px);
}
</style>
