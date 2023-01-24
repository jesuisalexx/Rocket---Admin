<template>
  <div :class="$style.card">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import "src/assets/styles/utils";

.card {
  border-radius: rem(30px);
  padding: rem(30px);
  background-color: rgb(var(--color-surface));
}
</style>
