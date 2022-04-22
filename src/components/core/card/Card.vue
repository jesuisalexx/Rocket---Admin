<template>
  <div class="card">
    <div
      v-if="'head' in $slots"
      class="card__head"
    >
      <slot name="head" />
    </div>
    <slot />
  </div>
</template>

<style lang="scss" src="./card.scss" />
