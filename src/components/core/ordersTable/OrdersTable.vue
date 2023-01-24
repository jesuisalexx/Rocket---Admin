<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        {{ t('orders-table.last-orders') }}
      </div>
      <Button
        variant="secondary"
        icon-before="calendar"
        icon-after="arrowDown3"
      >
        19 Aug – 25 Aug
      </Button>
    </div>
    <div :class="$style.table">
      <div :class="$style.tableColumns">
        <div :class="$style.column">
          {{ t('orders-table.name') }}
        </div>
        <div :class="$style.column">
          {{ t('orders-table.number') }}
        </div>
        <div :class="$style.column">
          {{ t('orders-table.amount') }}
        </div>
        <div :class="$style.column">
          {{ t('orders-table.type') }}
        </div>
        <div :class="$style.column">
          {{ t('orders-table.date') }}
        </div>
      </div>
      <div :class="$style.tableOrders">
        <div
          v-for="order in orders"
          :key="order"
          :class="$style.order"
        >
          <div :class="$style.nameWrapper">
            <div :class="$style.avatar">
              <Avatar
                size="xs"
                shape="circle"
              />
            </div>
            <div
              :class="[
                $style.name,
                $style.orderLightText,
              ]"
            >
              {{ order.name }}
            </div>
          </div>
          <div :class="$style.orderDarkText">
            #{{ order.number }}
          </div>
          <div :class="$style.orderLightText">
            ${{ order.amount }}
          </div>
          <div :class="$style.orderDarkText">
            {{ order.type }}
          </div>
          <div :class="$style.orderLightText">
            {{ order.date }}
          </div>
          <div :class="$style.options">
            <Options />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/core/button/Button.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import Options from '@/components/core/icon/assets/more.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps<{
  orders: [],
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
  color: rgb(var(--color-heading));
}
.table {
  width: 100%;
  height: rem(300px);
  margin-top: rem(30px);
}
.tableColumns {
  width: 100%;
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1.5fr 1fr;
}
.tableOrders {
  margin-top: rem(12px);
  width: 100%;
  display: grid;
  grid-row-gap: rem(10px);
}
.order {
  width: 100%;
  height: rem(56px);
  background-color: rgb(var(--color-background));
  border-radius: rem(13px);
  display: grid;
  align-items: center;
  grid-template-columns: 2.5fr 1fr 1fr 1.5fr 1fr;
  position: relative;
  cursor: pointer;
}
.nameWrapper {
  display: flex;
  align-items: center;
}
.avatar {
  width: rem(30px);
  height: rem(30px);
  margin-left: rem(15px);
}
.name {
  margin-left: rem(15px);
}
.orderDarkText {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
}
.orderLightText {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}
.options {
  position: absolute;
  right: rem(10px);
  top: rem(15px);
  cursor: pointer;
}
</style>
