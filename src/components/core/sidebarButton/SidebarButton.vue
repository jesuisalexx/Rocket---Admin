<template>
  <div
    :class="[
      $style.root,
      !isSidebarExpanded && $style.expanded,
    ]"
  >
    <div :class="$style.buttonWrap">
      <router-link
        :is="computedComponent"
        :to="button.to"
        :exact-active-class="$style.active"
        :class="[
          $style.button,
          isSidebarExpanded
        ]"
      >
        <Icon
          :class="$style.iconBefore"
          :icon="button.iconBefore"
        />
        <div :class="$style.text">
          {{ button.label }}
        </div>
        <div
          v-if="button.counter"
          :class="$style.counter"
        >
          {{ button.counter }}
        </div>
        <Icon
          :class="$style.iconAfter"
          :icon="button.iconAfter"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import Icon from '@/components/core/icon/Icon.vue';
import { layout } from '@/stores/layout';
import { SidebarButton, SidebarButtonType } from './index';

const layoutStore = layout();

const props = defineProps<{
  button: SidebarButton,
}>();
const isSidebarExpanded = computed(() => layoutStore.isSidebarExpanded);

const componentMap: Record<SidebarButtonType, string> = {
  [SidebarButtonType.LINK]: 'router-link',
  [SidebarButtonType.BUTTON]: 'button',
};

const computedComponent = computed(() => componentMap[props.button.type]);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  &.expanded {
    display: flex;
    justify-content: center;
    .buttonWrap {
      width: rem(44px);
      height: rem(56px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button {
      width: rem(44px);
      height: rem(44px);
      border-radius: rem(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      padding: 0;
      border: 0;
      background: none;
    }
    .iconWrap {
      height: rem(44px);
      width: rem(44px);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .iconBeforeTiny {
      display: none;
    }
    .iconBefore {
      margin-left: 0;
    }
    .iconAfter {
      display: none;
    }
    .counter {
      display: none;
    }
    .text {
      display: none;
    }
  }
}
.button {
  width: 100%;
  height: rem(56px);
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: rgb(var(--color-body-light));
  padding-left: rem(4px);
}
.active {
  width: 100%;
  height: rem(56px);
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding-left: 0;
  background: rgb(var(--color-surface));
  border-left: rem(4px) solid rgb(var(--color-primary-accent));
  color: rgb(var(--color-heading));
}

.iconWrap {
  height: rem(44px);
  width: rem(44px);
  border-radius: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgb(var(--color-surface));
  }
}

.iconBeforeTiny {
  width: rem(20px);
  height: rem(20px);
}
.iconBefore {
  width: rem(20px);
  height: rem(20px);
  margin-left: rem(28px);
}
.iconAfter {
  width: rem(17px);
  height: rem(17px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: rem(30px);
}
.counter {
  width: rem(18px);
  height: rem(18px);
  border-radius: rem(6px);
  background: rgb(var(--color-red));
  font-family: 'Poppins', sans-serif;
  font-size: rem(10px);
  color: rgb(var(--color-heading));
  display: flex;
  justify-content: center;
  align-items: center;
  right: rem(30px);
  position: absolute;
}
.text {
  margin-left: rem(13px);
}
</style>
