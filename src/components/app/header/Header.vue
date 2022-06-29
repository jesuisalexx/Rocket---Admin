<template>
  <div :class="$style.root">
    <!--    <div :class="$style.menuIcon">-->
    <!--      <Icon-->
    <!--        icon="menu"-->
    <!--      />-->
    <!--    </div>-->
    <!--    <div :class="$style.toolsWrap">-->
    <!--      <div :class="$style.searchIcon">-->
    <!--        <Icon-->
    <!--          icon="search"-->
    <!--        />-->
    <!--      </div>-->
    <!--      <div :class="$style.bellIcon">-->
    <!--        <Icon-->
    <!--          icon="bellNotifications"-->
    <!--        />-->
    <!--      </div>-->
    <!--      <div :class="$style.stripe" />-->
    <!--      <div :class="$style.avatar">-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  height: rem(65px);
  background: rgb(var(--color-surface));
  display: flex;
  justify-content: space-between;
  align-items: center;
}
//.menuIcon {
//  width: 20px;
//  height: 20px;
//  margin-left: 28px;
//  cursor: pointer;
//}
//.searchIcon {
//  width: 20px;
//  height: 20px;
//  cursor: pointer;
//}
//.bellIcon {
//  width: 20px;
//  height: 20px;
//  margin-left: 23px;
//  cursor: pointer;
//}
//.toolsWrap {
//  width: 300px;
//  height: 100%;
//  background: grey;
//  display: flex;
//  align-items: center;
//}
//.stripe {
//  height: 31px;
//  width: 1px;
//  background: rgb(var(--color-border));
//  margin-left: 23px;
//}
//.avatar {
//  width: 40px;
//  height: 40px;
//}
</style>
