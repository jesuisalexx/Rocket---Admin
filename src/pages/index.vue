<template>
  <div :class="$style.root">
    <div :class="$style.topBar">
      <div :class="$style.heading">
        {{ t('main-page.overview') }}
      </div>
      <div :class="$style.buttons">
        <Button
          variant="grey-simple"
          :class="$style.dowloadBtn"
        >
          <Download />
        </Button>
        <Button
          variant="grey-simple"
          icon-after="arrowDown2"
        >
          {{ t('main-page.last-days') }}
        </Button>
      </div>
    </div>
    <div :class="$style.topCards">
      <ChartCardSmall
        :heading="t('charts.total-income')"
        stat="$8500"
        percents="50.8"
        icon="dollarFill"
      />
      <ChartCardSmall
        :heading="t('charts.total-sales')"
        stat="3.500K"
        percents="50.8"
        icon="chart"
      />
      <ChartCardSmall
        :heading="t('charts.new-clients')"
        stat="2.500K"
        percents="50.8"
        icon="userFill"
      />
    </div>
    <div :class="$style.midCards">
      <div :class="$style.midTopCards">
        <ChartStatisticsColumn :chart-data="chartData" />
        <ChartAnalytics />
      </div>
      <div :class="$style.midBottomCards">
        <ChartSales />
        <ChartStatisticsBar />
      </div>
    </div>
    <div :class="$style.bottomCards">
      <OrdersTable />
      <TransactionsCard />
    </div>
  </div>
</template>

<route>
{
  meta: {
    authRequired: true,
  }
}
</route>

<script setup lang="ts">
import { useSessionStore } from '@/stores/session';
import { computed } from 'vue';
import ChartCardSmall from '@/components/core/chartCardSmall/ChartCardSmall.vue';
import Button from '@/components/core/button/Button.vue';
import Download from '@/components/core/icon/assets/download.svg';
import ChartAnalytics from '@/components/core/chartAnalytics/ChartAnalytics.vue';
import ChartStatisticsColumn from '@/components/core/chartStatisticsColumn/ChartStatisticsColumn.vue';
import ChartStatisticsBar from '@/components/core/chartStatisticsBar/ChartStatisticsBar.vue';
import ChartSales from '@/components/core/chartSales/ChartSales.vue';
import TransactionsCard from '@/components/core/transactionsCard/TransactionsCard.vue';
import OrdersTable from '@/components/core/ordersTable/OrdersTable.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const sessionStore = useSessionStore();

const logout = computed(() => sessionStore.logoutUser);
const chartData = {
  categories: [
    'Mon', 'Tue', 'Wed', 'Thu',
    'Fri', 'Sat', 'Sun',
  ],
  data: [
    {
      name: 'Income',
      data: [200, 100, 220, 190, 200, 180, 150],
      color: '#0090FF',
    },
    {
      name: 'Expenses',
      data: [190, 172, 171, 80, 170, 140, 60],
      color: '#FF955C',
    },
  ],
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  padding: rem(30px);
  font-family: 'Poppins', sans-serif;
}
.topCards {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: rem(30px);
  margin-top: rem(30px);
}
.topBar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.heading {
  font-size: rem(28px);
  font-weight: 500;
  color: rgb(var(--color-heading));
}
.buttons {
  display: flex;
}
.dowloadBtn {
  margin-right: rem(16px);
}
.midCards {
  margin-top: rem(30px);
}
.midTopCards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: rem(30px);
  width: 100%;
}
.midBottomCards {
  width: 100%;
  margin-top: rem(30px);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: rem(30px);
}
.bottomCards {
  width: 100%;
  margin-top: rem(30px);
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: rem(30px);
}
</style>
