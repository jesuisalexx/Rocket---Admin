<template>
  <div :class="$style.root">
    <div :class="$style.topBar">
      <div :class="$style.heading">
        Overview
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
          Last 7 days
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
import { GChart } from 'vue-google-charts';
import { useSessionStore } from '@/stores/session';
import { computed } from 'vue';
import ChartCardSmall from '@/components/core/chartCardSmall/ChartCardSmall.vue';
import Button from '@/components/core/button/Button.vue';
import Download from '@/components/core/icon/assets/download.svg';

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
  justify-content: space-between;
  display: flex;
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
</style>
