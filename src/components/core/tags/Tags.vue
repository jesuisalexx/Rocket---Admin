<template>
  <div :class="$style.root">
    <div :class="$style.label">
      {{ label }}
    </div>
    <input
      v-model="newTag"
      :class="$style.input"
      :style="{ 'padding-left': `${paddingLeft}px` }"
      @keydown.enter="addTag(newTag)"
    >
    <div
      ref="tagsList"
      :class="$style.tags"
    >
      <div
        v-for="(tag, index) in tags"
        :key="tag"
        :class="$style.tag"
      >
        {{ tag }}
        <div
          :class="$style.cross"
          @click="removeTag(index)"
        >
          <Cross />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cross from '@/components/core/icon/assets/cross.svg';
import { nextTick, ref, watch } from 'vue';

const props = defineProps<{
  label: ''
}>();

const tagsList = ref(null);
const paddingLeft = ref(10);
const tags = ref<string[]>([]);
const newTag = ref('');
const addTag = (tag: string) => {
  if (tag !== '') {
    tags.value.push(tag);
    newTag.value = '';
  }
};
const removeTag = (id: any) => {
  tags.value.splice(id, 1);
};
const setLeftPadding = () => {
  const extraSpace = 10;
  paddingLeft.value = tagsList.value.clientWidth + extraSpace;
};
watch(tags, () => nextTick(setLeftPadding), { deep: true });
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  position: relative;
}
.tags {
  @include useCustomScrollbar;
  display: flex;
  height: rem(31px);
  flex-wrap: wrap;
  gap: rem(5px);
  position: absolute;
  max-width: 85%;
  top: rem(35px);
  left: rem(6px);
  overflow: auto;
}
.tag {
  padding: rem(5px) rem(10px);
  background-color: rgb(var(--color-background));
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(8px);
  margin-right: rem(5px);
  color: rgb(var(--color-body-light));
  display: flex;
  align-items: center;
}
.cross {
  margin-left: rem(6px);
  cursor: pointer;
  width: rem(15px);
  height: rem(15px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.input {
  width: 100%;
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(14px);
  padding: rem(10px) rem(16px);
  background: none;
  font-size: rem(14px);
  font-family: 'Poppins', sans-serif;
  color: rgba(var(--color-body-light));
  cursor: text;
  letter-spacing: rem(1px);
  margin-top: rem(10px);
}
.label {
  color: rgb(var(--color-body-dark));
}
</style>
