<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        {{ t('transactions-card.transactions') }}
      </div>
      <div :class="$style.options">
        <Options />
      </div>
    </div>
    <div
      v-for="transaction in transactions"
      :key="transaction"
      :class="$style.transactionWrapper"
    >
      <div :class="$style.mainInfoWrapper">
        <div :class="$style.avatar">
          <Avatar :src="transaction.avatar" />
        </div>
        <div :class="$style.transactionInfo">
          <div :class="$style.userName">
            {{ transaction.name }}
          </div>
          <div :class="$style.transactionTime">
            {{ transaction.time }}
          </div>
        </div>
      </div>
      <div :class="$style.transactionTypeWrapper">
        <div
          :class="{
            [$style.transactionAmountGreen]: transaction.amount.isProfit,
            [$style.transactionAmountRed]: !transaction.amount.isProfit,
          }"
        >
          {{ transaction.amount.data }}
        </div>
        <div :class="$style.transactionType">
          {{ transaction.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Options from '@/components/core/icon/assets/moreHorizontal.svg';
import Avatar from '@/components/core/avatar/Avatar.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps<{
  transactions: [],
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
* {
  font-family: 'Poppins', sans-serif;
}
.root {
  width: auto;
  height: rem(400px);
  padding: rem(20px);
  background-color: rgb(var(--color-surface));
  border-radius: rem(20px);
}
.options {
  cursor: pointer;
}
.headingWrap {
  width: 100%;
  height: rem(40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: rem(12px);
}
.heading {
  font-size: rem(20px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.transactionWrapper {
  padding: rem(12px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: rem(10px);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: rgb(var(--color-background));
    transition: 0.4s;
  }
}
.mainInfoWrapper {
  display: flex;
}
.avatar {
  width: rem(40px);
  height: rem(40px);
}
.transactionInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: rem(20px);
}
.transactionTypeWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.userName {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}
.transactionTime {
   font-size: rem(11px);
   font-weight: 400;
   color: rgb(var(--color-body-dark));
}
.transactionAmountGreen {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-green));
}
.transactionAmountRed {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-red));
}
.transactionType {
  font-size: rem(11px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
}
</style>
