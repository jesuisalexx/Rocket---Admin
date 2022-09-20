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

<style lang="scss">
.ql-toolbar.ql-snow {
  border: none;
  border-bottom: rem(1px) solid rgb(var(--color-border));
  background-color: rgb(var(--color-background));
}
.ql-container.ql-snow {
  border: none;
}
.ql-editor.ql-blank::before{
  color: rgb(var(--color-body-dark));
}
</style>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  height: rem(160px);
  overflow: hidden;
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(15px);
}
.editor {
  color: rgb(var(--color-body-light));
  font-family: 'Poppins', sans-serif;
}
</style>
