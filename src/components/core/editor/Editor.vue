<template>
  <div :class="$style.root">
    <QuillEditor
      theme="snow"
      :class="$style.editor"
      placeholder="Type something"
    />
  </div>
</template>

<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.prod.css';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  height: rem(160px);
  overflow: hidden;
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(15px);
  position: relative;
  padding-top: rem(-1px);
}
.editor {
  color: rgb(var(--color-body-light));
  border: none;
  position: absolute;
  width: 101%;
  left: rem(-2px);
}
</style>
