<template>
  <div :class="$style.root">
    <div :class="$style.topBar">
      <div :class="$style.heading">
        {{ t('dashboard.overview') }}
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
          {{ t('dashboard.last-days') }}
        </Button>
      </div>
    </div>
    <div :class="$style.topCards">
      <StatsCardSmall :statistics="statsCards[0]" />
      <StatsCardSmall :statistics="statsCards[1]" />
      <StatsCardSmall :statistics="statsCards[2]" />
    </div>
    <div :class="$style.midCards">
      <div :class="$style.midTopCards">
        <ChartStatisticsColumn />
        <ChartAnalytics />
      </div>
      <div :class="$style.midBottomCards">
        <ChartSales />
        <ChartStatisticsBar />
      </div>
    </div>
    <div :class="$style.bottomCards">
      <OrdersTable :orders="orders" />
      <TransactionsCard :transactions="transactions" />
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
import StatsCardSmall from '@/components/core/statsCardSmall/StatsCardSmall.vue';
import Button from '@/components/core/button/Button.vue';
import Download from '@/components/core/icon/assets/download.svg';
import ChartAnalytics from '@/components/app/chartAnalytics/ChartAnalytics.vue';
import ChartStatisticsColumn from '@/components/app/chartStatisticsColumn/ChartStatisticsColumn.vue';
import ChartStatisticsBar from '@/components/app/chartStatisticsBar/ChartStatisticsBar.vue';
import ChartSales from '@/components/app/chartSales/ChartSales.vue';
import TransactionsCard from '@/components/core/transactionsCard/TransactionsCard.vue';
import OrdersTable from '@/components/core/ordersTable/OrdersTable.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const sessionStore = useSessionStore();

const logout = computed(() => sessionStore.logoutUser);

const statsCards = [
  {
    text: 'Total Income',
    value: '$8500',
    percents: {
      isIncrease: true,
      value: '50.8',
    },
    icon: 'dollarFill',
  },
  {
    text: 'Total Sales',
    value: '3500K',
    percents: {
      isIncrease: true,
      value: '10.5',
    },
    icon: 'chart',
  },
  {
    text: 'New Clients',
    value: '2500K',
    percents: {
      isIncrease: true,
      value: '24.9',
    },
    icon: 'userFill',
  },
];
const transactions = [
  {
    name: 'Devon Williamson',
    time: '08:00 AM  —  19 August',
    amount: {
      isProfit: true,
      data: '+$1.400',
    },
    type: 'Payment',
    avatar: 'womanAvatar',
  },
  {
    name: 'Debra Wilson',
    time: '09:45 AM  —  19 August',
    amount: {
      isProfit: false,
      data: '-$850',
    },
    type: 'Refund',
    avatar: 'womanAvatar',
  },
  {
    name: 'Judith Black',
    time: '10:15 AM  —  20 August',
    amount: {
      isProfit: true,
      data: '+$2.050',
    },
    type: 'Payment',
    avatar: 'womanAvatar',
  },
  {
    name: 'Philip Henry',
    time: '10:50 AM  —  23 August',
    amount: {
      isProfit: true,
      data: '+$650',
    },
    type: 'Payment',
    avatar: 'womanAvatar',
  },
  {
    name: 'Mitchell Cooper',
    time: '12:45 AM  —  25 August',
    amount: {
      isProfit: true,
      data: '+$900',
    },
    type: 'Payment',
    avatar: 'womanAvatar',
  },
];
const orders = [
  {
    name: 'Regina Cooper',
    number: 790841,
    amount: '2.500',
    type: 'Credit Card',
    date: '12.09.2019',
  },
  {
    name: 'Robert Edwards',
    number: 799894,
    amount: '2.500',
    type: 'PayPal',
    date: '12.09.2019',
  },
  {
    name: 'Gloria Mckinney',
    number: 790857,
    amount: '5.600',
    type: 'Credit Card',
    date: '12.09.2019',
  },
  {
    name: 'Randall Fisher',
    number: 790687,
    amount: '2.850',
    type: 'PayPal',
    date: '12.09.2019',
  },
];
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
