<template>
  <div :class="$style.root">
    <QuillEditor theme="snow" />
  </div>
</template>

<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.prod.css';

</script>

<style lang="scss" module>

.root {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: 1px solid white;
  border-bottom: 2px solid white;
}

</style>
