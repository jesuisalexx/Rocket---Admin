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
        heading="Total Income"
        stat="$8500"
        percents="50.8"
        icon="dollarFill"
      />
      <ChartCardSmall
        heading="Total Sales"
        stat="3.500K"
        percents="50.8"
        icon="dollarFill"
      />
      <ChartCardSmall
        heading="New Clients"
        stat="2.500K"
        percents="50.8"
        icon="dollarFill"
      />
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const sessionStore = useSessionStore();

const logout = computed(() => sessionStore.logoutUser);
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
  width: auto;
  margin-top: rem(30px);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: rem(30px);
}
</style>
