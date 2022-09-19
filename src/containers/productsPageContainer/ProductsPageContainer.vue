<template>
  <div :class="$style.root">
    <div :class="$style.textButtonsWrapper">
      <div
        :class="$style.heading"
      >
        <slot name="heading" />
      </div>
      <div :class="$style.buttonsWrapper">
        <div :class="$style.exportBtn">
          <slot name="export-button" />
        </div>
        <slot name="import-button" />
      </div>
    </div>
    <div :class="$style.linksWrapper">
      <div
        :class="$style.tabs"
      >
        <div>
          <slot name="tabs" />
        </div>
      </div>
      <div :class="$style.listTypeChange">
        <slot name="buttons" />
      </div>
    </div>
    <div>
      <slot name="view" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  padding: rem(30px);
}
.textButtonsWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.buttonsWrapper {
  height: rem(40px);
  display: flex;
}
.heading {
  font-size: rem(28px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.exportBtn {
  margin-right: rem(17px);
}
.linksWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: rem(35px);
  border-bottom: rem(1px) solid rgb(var(--color-border));
}
.tabs {
  display: flex;
}
.products {
  color: rgb(var(--color-body-dark));
  display: flex;
  height: rem(40px);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: rgb(var(--color-heading));
    border-bottom: rem(2px) solid rgb(var(--color-primary-accent));
  }
}
.productsAvailable {
  margin-left: rem(25px);
}
.counter {
  padding: rem(8px);
  height: rem(18px);
  border-radius: rem(6px);
  background-color: rgb(var(--color-border));
  font-family: 'Poppins', sans-serif;
  font-size: rem(10px);
  color: rgb(var(--color-heading));
  margin-left: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.listTypeChange {
  display: flex;
}
.list {
  width: rem(18px);
  height: rem(18px);
  cursor: pointer;
}
</style>
