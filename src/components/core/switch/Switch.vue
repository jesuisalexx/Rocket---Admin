<template>
  <div
    :class="$style.root"
  >
    <!-- exact active class-->
    <template
      v-for="(button, index) in buttons"
      :key="index"
      v-model="localModel"
    >
      <div
        :class="$style.button"
        @click="listType(button.value)"
      >
        <Icon :icon="button.icon" />
        {{ button.value }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/core/icon/Icon.vue';
import { computed, defineProps, ref } from 'vue';

const props = defineProps<{
  buttons: [],
}>();
const emit = defineEmits([
  'update:modelValue',
]);
const localModel = computed({
  get: () => props.buttons,

  set: (value) => {
    emit('update:modelValue', value);
  },
});

const type = ref('list');

const listType = (button: any) => {
  type.value = button;
  console.log(type.value);
};
</script>

<style lang="scss" module>
.root {
  width: 100px;
  height: 20px;
  display: flex;
}
.button {
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
</style>
