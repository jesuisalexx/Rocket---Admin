<template>
  <div :class="$style.root">
    <router-link to="/settings">
      <Button
        :class="$style.linkButton"
        variant="secondary-extended"
      >
        {{ $t('profile.profile') }}
      </Button>
    </router-link>
    <router-link to="/settings/change-password">
      <Button
        :class="$style.linkButton"
        variant="secondary-extended"
      >
        {{ $t('profile.change-password') }}
      </Button>
    </router-link>
    <Button
      :class="$style.linkButton"
      variant="secondary-extended"
    >
      {{ $t('profile.other') }}
    </Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/core/button/Button.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(300px);
  background: rgb(var(--color-surface));
  border-radius: rem(25px);
  padding: rem(25px);
}
.linkButton {
  width: 100%;
  height: rem(45px);
  margin-top: rem(10px);
  display: flex;
  align-items: center;
}
</style>
