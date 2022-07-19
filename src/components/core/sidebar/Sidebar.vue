<template>
  <div
    :class="[
      $style.root,
      isSidebarExpanded && $style.expanded,
    ]"
  >
    <div :class="$style.logoWrap">
      <div :class="$style.logo">
        <router-link to="/">
          <Logo :state="isSidebarExpanded ? logoState.FULL : logoState.COMPACT" />
        </router-link>
      </div>
    </div>
    <SidebarButton
      v-for="button in buttons"
      :key="button.label"
      :button="button"
    />
  </div>
</template>

<script setup lang="ts">
import SidebarButton from '@/components/core/sidebarButton/SidebarButton.vue';
import { SidebarButton as TSidebarButton } from '@/components/core/sidebarButton';
import { computed } from 'vue';
import { logoState } from '@/components/core/logo';
import Logo from '@/components/core/logo/Logo.vue';
import { layout } from '@/stores/layout';

const layoutStore = layout();

const isSidebarExpanded = computed(() => layoutStore.isSidebarExpanded);

const props = defineProps<{
  buttons: TSidebarButton[],
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(65px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: rem(1px) solid rgb(var(--color-border));
  transition: .15s width;
  &.expanded {
    width: rem(270px);
    min-width: rem(270px);
    height: 100vh;

    .logoWrap {
      width: 100%;
      height: rem(65px);
      display: flex;
      align-items: center;
    }

    .logo {
      width: 100%;
      display: flex;
      align-items: center;
      margin-left: rem(28px);
      margin-top: rem(5px);
      cursor: pointer;
    }
  }
}

.logoWrap {
  width: 100%;
  height: rem(65px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: rem(35px);
  height: rem(36px);
}
</style>
