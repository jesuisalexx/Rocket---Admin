<template>
  <div :class="$style.root">
    <QuillEditor
      v-model:content="localValue"
      :class="$style.editor"
      content-type="text"
      placeholder="Type anything"
      theme="snow"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps<{
  modelValue: '',
}>();
const emit = defineEmits([
  'update:modelValue',
]);

const localValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

const content = computed(() => localValue.value);
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

.ql-editor.ql-blank::before {
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
