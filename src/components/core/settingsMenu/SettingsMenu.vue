<template>
  <Card :class="$style.card">
    <div :class="$style.root">
      <router-link to="/settings/profile">
        <Button
          :class="$style.linkButton"
          variant="secondary-menu"
        >
          {{ t('profile.profile') }}
        </Button>
      </router-link>
      <router-link to="/settings/change-password">
        <Button
          :class="$style.linkButton"
          variant="secondary-menu"
        >
          {{ t('profile.change-password') }}
        </Button>
      </router-link>
      <router-link to="/settings">
        <Button
          :class="$style.linkButton"
          variant="secondary-menu"
        >
          {{ t('profile.settings') }}
        </Button>
      </router-link>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import Button from '@/components/core/button/Button.vue';
import { useI18n } from 'vue-i18n';
import Card from '@/components/core/card/Card.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
.card {
  margin-right: rem(25px);
}
.root {
  width: rem(270px);
}
.linkButton {
  width: 100%;
  height: rem(45px);
  display: flex;
  align-items: center;
}
</style>
