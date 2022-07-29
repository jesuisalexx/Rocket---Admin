<template>
  <div
    :class="$style.root"
  >
    <div
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <router-link
        :to="tab.to"
        :exact-active-class="$style.active"
        :class="$style.tab"
      >
        <div :class="$style.text">
          {{ tab.label }}
        </div>
        <div :class="$style.counter">
          {{ tab.counter }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  tabs: [],
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.root {
  display: flex;
}
.tab {
  color: rgb(var(--color-body-dark));
  display: flex;
  height: rem(40px);
  cursor: pointer;
  transition: 0.2s;
  margin-right: 20px;
}
.counter {
  padding: rem(8px);
  height: rem(18px);
  border-radius: rem(6px);
  background: rgb(var(--color-border));
  font-family: 'Poppins', sans-serif;
  font-size: rem(10px);
  color: rgb(var(--color-heading));
  margin-left: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  color: rgb(var(--color-heading));
  border-bottom: rem(2px) solid rgb(var(--color-primary-accent));
}
</style>
