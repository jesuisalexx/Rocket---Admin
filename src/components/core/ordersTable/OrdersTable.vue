<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        Last Orders
      </div>
      <Button
        variant="secondary"
        icon-before="calendar"
        icon-after="arrowDown2"
      >
        19 Aug – 25 Aug
      </Button>
    </div>
    <div :class="$style.table">
      <div :class="$style.tableColumns">
        <div :class="$style.column">
          Customer Name
        </div>
        <div :class="$style.column">
          Order No.
        </div>
        <div :class="$style.column">
          Amount
        </div>
        <div :class="$style.column">
          Payment Type
        </div>
        <div :class="$style.column">
          Date
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/core/button/Button.vue';

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
  margin-left: rem(15px);
}
.table {
  width: 100%;
  height: rem(300px);
  margin-top: rem(30px);
  background: #000;
}
.tableColumns {
  width: 100%;
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1.5fr 1fr;
}
.column {
  background: red;
}
</style>
