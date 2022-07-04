<template>
  <div :class="$style.root">
    <Header>
      <template #left-section>
        <div
          v-if="computedState === HeaderState.DEFAULT"
          :class="$style.menuButton"
          @click="layoutStore.switchSidebar()"
        >
          <Icon icon="menu" />
        </div>
        <div
          v-if="computedState === HeaderState.PROFILE"
          :class="$style.leftMenu"
        >
          <Button
            variant="secondary"
            icon-before="settings"
          >
            Settings
          </Button>
          <Button
            variant="simple"
            :class="$style.simpleButton"
          >
            Activity
          </Button>
          <Button
            variant="simple"
            :class="$style.simpleButton"
          >
            Users
          </Button>
        </div>
      </template>
      <template #right-section-icons>
        <div
          v-if="computedState === HeaderState.DEFAULT"
          :class="$style.rightSectionIcons"
        >
          <div :class="$style.searchButton">
            <Icon icon="search" />
          </div>
          <div :class="$style.bellButton">
            <Icon icon="bellNotifications" />
          </div>
        </div>
        <div
          v-if="computedState === HeaderState.PROFILE"
          :class="$style.rightSectionIcons"
        >
          <div
            :class="$style.chatButton"
            @click="openChatBar()"
          >
            <Icon icon="chatNotification" />
          </div>
          <div :class="$style.bellButton">
            <Icon icon="bell" />
          </div>
        </div>
      </template>
      <template #divider>
        <div :class="$style.divider">
        </div>
      </template>
      <template #right-section-profile>
        <UserBarContainer avatar-icon="avatar">
          <template #user-name>
            artTemplate
          </template>
        </UserBarContainer>
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/core/header/Header.vue';
import Icon from '@/components/core/icon/Icon.vue';
import UserBarContainer from '@/containers/UserBarContainer.vue';
import Button from '@/components/core/button/Button.vue';
import { HeaderState } from '@/components/core/header';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { layout } from '@/stores/layout';

const route = useRoute();
const layoutStore = layout();

const openChatBar = computed(() => layoutStore.openChatBar);

const computedState = computed(() => route.meta.headerState || HeaderState.DEFAULT);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  height: rem(65px);
  border-bottom: 1px solid rgb(var(--color-border));
}

.menuButton {
  width: rem(20px);
  height: rem(20px);
  margin-left: rem(30px);
  cursor: pointer;
}

.searchButton {
  width: rem(20px);
  height: rem(20px);
  cursor: pointer;
}
.chatButton {
  width: rem(20px);
  height: rem(20px);
  cursor: pointer;
}
.bellButton {
  width: rem(20px);
  height: rem(20px);
  margin-left: rem(20px);
  cursor: pointer;
}
.divider {
  height: rem(31px);
  width: rem(1px);
  background: rgb(var(--color-border));
  margin: 0 rem(24px);
}

.header {
  width: 100%;
  height: rem(65px);
}

.leftMenu {
  display: flex;
  align-items: center;
  margin-left: rem(30px);
}

.simpleButton {
  margin-left: rem(32px);
}
.rightSectionIcons {
  display: flex;
}
</style>
