<template>
  <div
    :class="[
      $style.root,
      isSidebarExpanded && $style.expanded,
    ]"
  >
    <div :class="$style.logoWrap">
      <div :class="$style.logo">
        <Logo :state="isSidebarExpanded ? logoState.FULL : logoState.COMPACT" />
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
import { logoState } from '@/components/app/logo';
import Logo from '@/components/app/logo/Logo.vue';
import { useLayoutStore } from '@/stores/useLayoutStore';

const layoutStore = useLayoutStore();

const isSidebarExpanded = computed(() => layoutStore.isSidebarExpanded);

const props = defineProps<{
  buttons: TSidebarButton[],
}>();
console.log(isSidebarExpanded, 'consol');

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root.expanded {

}

.root {
  width: rem(270px);
  height: 100vh;
  border-right: rem(1px) solid rgb(var(--color-border));
  &.expanded {
    height: 100%;
    width: rem(65px);
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }
}

.logoWrap {
  width: 100%;
  height: rem(65px);
  display: flex;
  align-items: center;
}

.logo {
  font-family: 'Poppins', sans-serif;
  font-size: rem(18px);
  color: rgb(var(--color-heading));
  display: flex;
  align-items: center;
  margin-left: rem(28px);
  cursor: pointer;
}
</style>
