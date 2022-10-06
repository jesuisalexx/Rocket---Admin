<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        Transactions
      </div>
      <Options />
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
.headingWrap {
  width: 100%;
  height: rem(40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.heading {
  font-size: rem(20px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.transactionWrapper {
  margin-top: rem(23px);
  width: 100%;
  height: rem(40px);
  display: flex;
  justify-content: space-between;
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
