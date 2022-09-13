<template>
  <Card :class="$style.card">
    <div :class="$style.root">
      <router-link
        v-for="button in buttons"
        :key="button"
        :to="button.path"
      >
        <Button
          :class="$style.linkButton"
          variant="secondary-menu"
        >
          {{ t(button.text) }}
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
const props = defineProps<{
  buttons: []
}>();
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
