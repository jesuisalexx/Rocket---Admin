<template>
  <div>
    <div
      v-for="item in items"
      :key="item"
      :class="$style.root"
    >
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = ['drag', 'drag it'];
</script>

<style lang="scss" module>
.root {
  width: 100px;
  height: 100px;
  background: white;
}
.item {
  position: absolute;
  cursor: pointer;
}
</style>
