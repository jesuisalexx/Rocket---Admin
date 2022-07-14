<template>
  <div
    :class="$style.root"
  >
    <label
      :class="$style.label"
    >
      {{ t('selectInput.status') }}
    </label>
    <div v-click-outside="closeSelect">
      <div
        :class="$style.select"
        @click="switchSelect"
      >
        {{ currentValue }}
        <ArrowDown2
          :class="{
            [$style.inputIconDown]: true,
            [$style.inputIconUp]: isOpen
          }"
        />
      </div>
      <div
        v-if="isOpen"
        :class="{
          [$style.optionsWrap]: isOpen
        }"
      >
        <div
          v-for="option in options"
          :key="option.text"
          :class="$style.option"
          @click="setSelectedValue(option.value)"
        >
          {{ option.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import ArrowDown2 from '@/components/core/icon/assets/ArrowDown2.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const settingsStore = useSettingsStore();
const currentValue = computed(() => settingsStore.currentValue);
const isOpen = computed(() => settingsStore.isSelectOpen);
const setSelectedValue = computed((val: string) => settingsStore.setSelectValue);
const switchSelect = computed(() => settingsStore.switchSelect);
const closeSelect = computed(() => settingsStore.closeSelect);

const props = defineProps<{
    options: [],
  }>();
</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

.root {
  width: 88%;
  flex-direction: column;
  position: absolute;
  z-index: 3;
}
.select {
  height: rem(43px);
  width: 100%;
  border: rem(1px) solid rgb(var(--color-border));
  border-radius: rem(14px);
  padding: rem(10px) rem(16px);
  background: none;
  font-size: rem(14px);
  font-family: 'Poppins', sans-serif;
  color: rgba(var(--color-body-light));
  cursor: pointer;
  margin-top: rem(10px);
  position: relative;
}
.inputIconDown {
  position: absolute;
  top: rem(12px);
  right: rem(20px);
  transition: 0.4s;
}
.inputIconUp {
  transform: rotate(180deg);
  transition: 0.4s;
}
.label {
  color: rgb(var(--color-body-dark));
}
.optionsWrap {
  width: 100%;
  height: rem(200px);
  overflow: auto;
  margin-top: rem(2px);
}
.option {
  background: rgb(var(--color-body-dark));
  color: rgb(var(--color-light-black));
  font-weight: 500;
  width: 100%;
  height: rem(40px);
  display: flex;
  align-items: center;
  padding-left: rem(20px);
  cursor: pointer;
  &:hover {
    background: rgb(var(--color-body-light));
  }
}
</style>
