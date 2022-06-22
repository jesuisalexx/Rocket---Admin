<template>
  <component
    v-for="[icon, component] in icons"
    :is="component"
    :id="`icon-${icon}`"
    :key="icon"
  />
</template>

<script setup lang="ts">
const clearIconName = (icon: string) => icon
  .replace(/\.\/assets\/(.*)\.svg$/, "$1")
  .split("/")
  .map((part) => (part.replace(/[\s-]/g, "")))
  .join("_");


const icons = (Object.entries(
  import.meta.globEager<any>("./assets/**/*.svg"),
))
  .map(([key, value]) => ([
    clearIconName(key),
    value.default,
  ]))
</script>
