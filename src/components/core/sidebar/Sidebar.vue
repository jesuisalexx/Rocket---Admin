<template>
  <div
    :class="isSidebarWide? $style.root : $style.rootTiny"
  >
    <div :class="isSidebarWide? $style.logoWrap : $style.logoWrapTiny">
      <div :class="isSidebarWide? $style.logo : $style.logoTiny">
        <Logo :state="isSidebarWide? logoFull : logoCompact" />
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
import { SidebarButton as TSidebarButton, SidebarButtonType } from '@/components/core/sidebarButton';
import { PropType, ref } from 'vue';
import { logoState } from '@/components/app/logo';
import Logo from '@/components/app/logo/Logo.vue';
import { useLayoutStore } from '@/stores/useLayoutStore';

const logoFull = ref<logoState>(logoState.FULL);
const logoCompact = ref<logoState>(logoState.COMPACT);

const layoutStore = useLayoutStore();

const isSidebarWide = layoutStore.isSidebarExpanded;

const props = defineProps<{
  buttons: TSidebarButton[],
}>();
console.log(isSidebarWide, 'consol');

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(270px);
  height: 100vh;
  border-right: rem(1px) solid rgb(var(--color-border));
}
.rootTiny {
  height: 100%;
  width: rem(65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: rem(1px) solid rgb(var(--color-border));
}
.logoWrap {
  width: 100%;
  height: rem(65px);
  display: flex;
  align-items: center;
}
.logoWrapTiny {
  width: 100%;
  height: rem(50px);
  margin-top: rem(15px);
  display: flex;
  justify-content: center;
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
.logoTiny {
  font-family: 'Poppins', sans-serif;
  font-size: rem(18px);
  color: rgb(var(--color-heading));
  display: flex;
  align-items: center;
  cursor: pointer;
  width: rem(35px);
  height: rem(36px);
}
.logoText {
  margin-left: rem(6px);
}
</style>
