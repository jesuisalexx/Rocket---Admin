<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  max-width: rem(1024px);
  max-height: rem(756px);
  padding: rem(30px) rem(60px);
}
</style>
